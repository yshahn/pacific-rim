// api/sms-reply.js
// Telnyx inbound webhook — handles guest replies of "1" (confirm) or "2"
// (cancel) to the reservation confirmation SMS sent from notify-order.js.
// Configured as the Webhook URL on the Telnyx Messaging Profile.

const { sendSMS, sendAdminSMS } = require('../lib/sms');

async function sendEmail({ to, subject, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;
  const toList = Array.isArray(to) ? to : [to];
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: 'Pacific Rim Bistro <orders@pacificrimatl.com>', to: toList, subject, html }),
    });
    return r.ok;
  } catch(e) { return false; }
}

function digitsOnly(s) { return String(s || '').replace(/\D/g, ''); }

function parseReply(text) {
  const t = String(text || '').trim().toLowerCase();
  if (t === '1' || t === 'confirm' || t === 'yes' || t === 'y') return 'confirmed';
  if (t === '2' || t === 'cancel' || t === 'no' || t === 'n') return 'cancelled';
  return null;
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();
  // Telnyx expects a fast 200 regardless of outcome, or it will retry the
  // webhook — always respond 200 at the end, never error out to the caller.
  if (req.method !== 'POST') return res.status(200).json({ received: false });

  try {
    const payload = req.body?.data?.payload || req.body?.payload || {};
    const fromPhone = payload.from?.phone_number || payload.from || '';
    const text = payload.text || '';
    console.log('[sms-reply] from=', fromPhone, 'text=', text);

    const intent = parseReply(text);
    if (!intent) {
      // Not a recognized 1/2 reply (could be STOP/HELP, already handled by
      // Telnyx itself, or unrelated text) — nothing to do.
      return res.status(200).json({ received: true, handled: false });
    }

    const fromDigits = digitsOnly(fromPhone);
    if (!fromDigits) return res.status(200).json({ received: true, handled: false });

    const { initializeApp, getApps } = await import('firebase/app');
    const { getFirestore, collection, query, where, orderBy, limit, getDocs, doc, runTransaction } = await import('firebase/firestore');
    const { getAuth, signInAnonymously } = await import('firebase/auth');

    const fbApp = getApps().length ? getApps()[0] : initializeApp({
      projectId: 'pacific-rim-bistro',
      apiKey: process.env.FIREBASE_API_KEY || 'AIzaSyChIQ0Z1sM68J6OtgIW82EyWuzys9Oz6tg',
    });
    const db = getFirestore(fbApp);
    const auth = getAuth(fbApp);
    await signInAnonymously(auth);

    // Find the most recent reservation for this phone number that has a
    // confirmation SMS already sent — matched on digits-only phone since
    // stored formats vary ((404) 555-0100 vs +14045550100 vs 4045550100).
    const resCol = collection(db, 'reservations');
    const q = query(resCol, where('confirmationSent', '==', true), orderBy('createdAt', 'desc'), limit(50));
    const snap = await getDocs(q);
    let match = null;
    snap.forEach(d => {
      if (match) return;
      const data = d.data();
      if (digitsOnly(data.phone).endsWith(fromDigits.slice(-10)) || fromDigits.endsWith(digitsOnly(data.phone).slice(-10))) {
        match = { id: d.id, ...data };
      }
    });

    if (!match) {
      console.warn('[sms-reply] No matching reservation found for', fromPhone);
      await sendSMS(fromPhone, "Sorry, we couldn't find a pending reservation for this number. Please call us at (404) 893-0018.");
      return res.status(200).json({ received: true, handled: false, reason: 'no_match' });
    }

    // Dedup guard — same 5-minute window pattern as reservation-response.js
    let shouldNotify = false;
    const resDocRef = doc(db, 'reservations', match.id);
    await runTransaction(db, async (tx) => {
      const s = await tx.get(resDocRef);
      const prevAt = s.exists() ? s.data().guestResponseAt : null;
      const withinWindow = prevAt && (Date.now() - prevAt) < 5 * 60 * 1000;
      if (s.exists() && s.data().guestResponse && withinWindow) {
        shouldNotify = false;
        return;
      }
      tx.update(resDocRef, { guestResponse: intent, guestResponseAt: Date.now(), guestResponseVia: 'sms' });
      shouldNotify = true;
    });

    if (!shouldNotify) {
      return res.status(200).json({ received: true, handled: true, deduped: true });
    }

    const isConfirmed = intent === 'confirmed';
    const name = match.name || 'Guest';
    const date = match.date || '';
    const time = match.time || '';

    // Ack SMS back to the guest
    const ackText = isConfirmed
      ? `Thanks ${name}! Your reservation for ${date} at ${time} is confirmed. See you soon! - Pacific Rim Bistro`
      : `Thanks ${name}, your reservation for ${date} at ${time} has been cancelled. Call us at (404) 893-0018 if you'd like to rebook. - Pacific Rim Bistro`;
    await sendSMS(fromPhone, ackText);

    // Admin email
    const adminEmails = (process.env.NOTIFY_EMAILS || 'yshahn@gmail.com,pacificrimbistro@gmail.com').split(',').map(e => e.trim());
    const emoji = isConfirmed ? '✅' : '❌';
    const statusText = isConfirmed ? 'CONFIRMED' : 'CANCELLED';
    const color = isConfirmed ? '#27ae60' : '#c0392b';
    await sendEmail({
      to: adminEmails,
      subject: `${emoji} Reservation ${statusText} (via SMS reply) — ${name} · ${date} ${time}`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"/></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;">
  <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:48px;">${emoji}</div>
      <h1 style="font-size:24px;margin:8px 0 4px;color:${color};">Reservation ${statusText}</h1>
      <p style="font-size:14px;color:#888;margin:0;">Guest replied "${intent === 'confirmed' ? '1' : '2'}" by text</p>
    </div>
    <div style="background:#f5f2ec;border-radius:10px;padding:16px;margin-bottom:20px;text-align:center;">
      <p style="margin:0;font-size:18px;font-weight:600;color:${color};">${name}</p>
      <p style="margin:4px 0 0;font-size:14px;color:#555;">${date} at ${time}</p>
    </div>
    <div style="text-align:center;color:#bbb;font-size:12px;border-top:1px solid #eee;padding-top:16px;">
      Pacific Rim Bistro · 303 Peachtree Center Ave, Atlanta, GA 30303<br>(404) 893-0018
    </div>
  </div>
</body></html>`,
    });

    // Admin SMS (short, plain text — no emoji)
    try {
      const adminPhones = ['+17705008420', '+16788629389'];
      const smsText = `${name} ${statusText} their reservation ${date} ${time} (via SMS reply).`;
      await sendAdminSMS(adminPhones, smsText);
    } catch(e) { console.warn('[sms-reply] Admin SMS error:', e); }

    // Admin push (best-effort)
    try {
      const { sendAdminPush } = require('../lib/push');
      await sendAdminPush({
        title: isConfirmed ? '✅ Reservation Confirmed' : '❌ Reservation Cancelled',
        body: `${name} · ${date} ${time} (via SMS)`,
        url: '/pages/admin.html',
      });
    } catch(e) { console.warn('[sms-reply] Admin push error (non-fatal):', e.message); }

    return res.status(200).json({ received: true, handled: true, intent });
  } catch (e) {
    console.error('[sms-reply] Error:', e);
    // Still return 200 so Telnyx doesn't retry-storm on a transient error.
    return res.status(200).json({ received: true, handled: false, error: e.message });
  }
};
