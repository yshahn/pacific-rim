// api/stripe-webhook.js
// Stripe calls this URL directly, server-to-server, the moment a payment
// actually completes — completely independent of what the customer's
// browser does afterward. This is what makes order creation + email/SMS
// notifications reliable: previously, ALL of that lived in client-side JS
// that only ran if the customer's browser successfully loaded the
// "payment=success" return page. If they closed the tab right after
// seeing Stripe's own "Payment Successful" screen, or a redirect hiccuped,
// none of that code ever ran — the payment still went through, but the
// restaurant never found out. This webhook is the guaranteed backstop.

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Vercel auto-parses JSON bodies by default, but Stripe's webhook signature
// verification needs the exact raw request bytes — parsing first would
// change them enough to break the signature check. Turning off the
// built-in parser here and reading the raw body ourselves is required.
export const config = { api: { bodyParser: false } };

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function getAdminFirestore() {
  const admin = require('firebase-admin');
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;
  let serviceAccount;
  try { serviceAccount = JSON.parse(raw); }
  catch(e) { console.warn('FIREBASE_SERVICE_ACCOUNT_JSON is not valid JSON:', e.message); return null; }
  if (!admin.apps.length) {
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
  }
  return admin.firestore();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET not set — cannot verify webhook, refusing to process.');
    return res.status(500).json({ error: 'Webhook not configured' });
  }

  let event;
  try {
    const rawBody = await getRawBody(req);
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).json({ error: 'Invalid signature' });
  }

  // Always acknowledge quickly so Stripe doesn't retry-storm; do the real
  // work, and if something inside fails, log it loudly rather than let
  // Stripe's retry mechanism be the only safety net.
  if (event.type !== 'checkout.session.completed') {
    return res.status(200).json({ received: true, ignored: event.type });
  }

  try {
    const session = event.data.object;
    const orderId = session.metadata?.orderId;
    if (!orderId) {
      console.error('checkout.session.completed with no orderId in metadata — cannot confirm order. Session:', session.id);
      return res.status(200).json({ received: true, error: 'no_order_id' });
    }

    const db = getAdminFirestore();
    if (!db) {
      console.error('FIREBASE_SERVICE_ACCOUNT_JSON not set — cannot confirm order', orderId);
      return res.status(200).json({ received: true, error: 'no_firestore' });
    }

    const pendingRef = db.collection('pendingOrders').doc(orderId);
    const pendingSnap = await pendingRef.get();
    if (!pendingSnap.exists) {
      console.error('No pending order found for orderId', orderId, '— cannot confirm. Session:', session.id);
      return res.status(200).json({ received: true, error: 'pending_not_found' });
    }

    const orderData = pendingSnap.data();

    // Idempotency guard: Stripe can and does redeliver webhook events. If
    // this order was already confirmed (e.g. a retry after a slow response
    // last time), don't save/notify twice.
    if (orderData.status === 'confirmed') {
      return res.status(200).json({ received: true, alreadyConfirmed: true });
    }

    await pendingRef.set({ status: 'confirmed', confirmedAt: Date.now(), stripeSessionId: session.id }, { merge: true });

    // Save the real order (same shape notify-order.js/the admin dashboard
    // already expect) directly via the admin SDK — reliable regardless of
    // the customer's browser.
    await db.collection('orders').add({
      orderItems: orderData.orderItems,
      subtotal: orderData.subtotal,
      tax: orderData.tax,
      tip: orderData.tip,
      total: orderData.total,
      pickupTime: orderData.pickupTime,
      customer: orderData.customer,
      smsConsent: orderData.smsConsent,
      specialRequest: orderData.specialRequest,
      pointsDiscount: orderData.pointsDiscount,
      pickupType: orderData.pickupType,
      carModel: orderData.carModel,
      carColor: orderData.carColor,
      orderId: orderData.orderId,
      createdAt: Date.now(),
    });

    // Trigger the existing email/SMS logic by calling notify-order.js
    // server-to-server — reuses all the existing formatting (short
    // GSM-7-safe SMS, formatted phone numbers, etc.) instead of duplicating
    // it here.
    const origin = process.env.SITE_ORIGIN || 'https://pacificrimatl.com';
    try {
      await fetch(`${origin}/api/notify-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderItems: orderData.orderItems,
          subtotal: orderData.subtotal,
          tax: orderData.tax,
          tip: orderData.tip,
          total: orderData.total,
          pickupTime: orderData.pickupTime,
          customer: orderData.customer,
          orderId: orderData.orderId,
          smsConsent: orderData.smsConsent,
          specialRequest: orderData.specialRequest,
          pointsDiscount: orderData.pointsDiscount,
          pickupType: orderData.pickupType,
          carModel: orderData.carModel,
          carColor: orderData.carColor,
          guestSmsConsent: orderData.smsConsent,
        }),
      });
    } catch(e) {
      console.error('Failed to trigger notify-order for confirmed order', orderId, '— order IS saved, but email/SMS may not have sent:', e);
    }

    return res.status(200).json({ received: true, confirmed: true, orderId });
  } catch (err) {
    console.error('Webhook processing error:', err);
    // Return 500 so Stripe retries — this is a real processing failure,
    // not a "nothing to do" case.
    return res.status(500).json({ error: err.message });
  }
}
