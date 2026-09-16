const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// ── Firebase Admin (same service account already used for push notifications) ──
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
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const {
      items, customerEmail, customerName, usePoints, pointsDiscount, tip,
      // Full order details, added so a pending order can be saved server-side
      // BEFORE the customer ever reaches Stripe — see the pendingOrders write
      // below for why this matters.
      customerPhone, pickupTime, specialRequest, pickupType, carModel, carColor, smsConsent,
    } = req.body;

    const subtotal    = items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const platformFee = 1.00;
    const discount    = parseFloat(pointsDiscount) || (usePoints ? 5 : 0);
    const tipAmount   = parseFloat(tip) || 0;
    const tax         = subtotal * 0.089;
    const total       = Math.max(subtotal + platformFee + tax + tipAmount - discount, 0.50);

    const lineItems = [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Pacific Rim Bistro — Order (' + items.length + ' item' + (items.length !== 1 ? 's' : '') + ')' +
                  (discount > 0 ? ' · $' + discount.toFixed(2) + ' Points Discount' : '') +
                  (tipAmount > 0 ? ' · Tip $' + tipAmount.toFixed(2) : ''),
          },
          unit_amount: Math.round(total * 100),
        },
        quantity: 1,
      }
    ];

    // ── Save a PENDING order to Firestore before creating the Stripe
    // session, and remember its id in the session metadata. This is what
    // lets api/stripe-webhook.js reliably create the real order and send
    // notifications the moment Stripe confirms payment — independent of
    // whatever the customer's browser does afterward (closing the tab
    // right after paying, a flaky redirect, etc. used to mean the order
    // and every notification about it silently never happened, even
    // though Stripe had already been paid).
    const orderId = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const db = getAdminFirestore();
    if (db) {
      try {
        await db.collection('pendingOrders').doc(orderId).set({
          orderId,
          status: 'pending_payment',
          orderItems: items.map(i => ({ name: i.name, price: i.price, emoji: i.emoji || null })),
          subtotal, tax, tip: tipAmount, total,
          pickupTime: pickupTime || 'ASAP',
          customer: { name: customerName || '', email: customerEmail || '', phone: customerPhone || '' },
          smsConsent: !!smsConsent,
          specialRequest: specialRequest || '',
          pointsDiscount: discount,
          pickupType: pickupType || 'instore',
          carModel: carModel || '',
          carColor: carColor || '',
          createdAt: Date.now(),
        });
      } catch(e) {
        console.error('Failed to save pending order (continuing anyway — webhook will retry on lookup):', e);
      }
    } else {
      console.warn('FIREBASE_SERVICE_ACCOUNT_JSON not set — pending order NOT saved, webhook will have nothing to confirm. Set this env var to fix.');
    }

    // Add tax (8%)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      customer_email: customerEmail || undefined,
      metadata: {
        customerName: customerName || '',
        restaurant: 'Pacific Rim Bistro',
        orderId,
      },
      automatic_tax: { enabled: false },
      success_url: `${req.headers.origin || 'https://pacific-rim-six.vercel.app'}/?payment=success&order=${orderId}`,
      cancel_url:  `${req.headers.origin || 'https://pacific-rim-six.vercel.app'}/?payment=cancel`,
    });

    res.status(200).json({ url: session.url, orderId });

  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: err.message });
  }
}
