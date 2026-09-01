// api/sms-reply.js
// Telnyx inbound webhook — Hsu's, Lucky Key & Fuji Ya, and Pacific Rim
// Bistro all share ONE Telnyx phone number and ONE Messaging Profile (this
// mirrors how they shared a single number under Twilio previously). Since
// there's only one number, Telnyx can only deliver inbound webhooks to a
// single URL — this one, configured on the shared Messaging Profile. That
// means a guest's "1" or "2" reply could belong to ANY of the three
// restaurants, so this handler checks all three Firestore projects (by
// phone number, newest confirmationSent reservation first) rather than
// assuming a single restaurant like the earlier single-restaurant version
// of this file did.

const { sendSMS, sendAdminSMS } = require('../lib/sms');

async function sendEmailAs(fromLine, { to, subject, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;
  const toList = Array.isArray(to) ? to : [to];
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: fromLine, to: toList, subject, html }),
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

// One entry per restaurant sharing this phone number. Each has its own
// Firebase project, so reservations for each live in a completely separate
// database — this list is what "search all three" actually loops over.
const RESTAURANTS = [
  {
    key: 'hsus',
    name: "Hsu's Gourmet",
    firebaseConfig: {
      apiKey: 'AIzaSyCSShOUi51ibX79L_H9SQhzuORZ89Ymr6c',
      projectId: 'hsus-gourmet',
    },
    fromEmail: 'Hsu\'s Gourmet <orders@hsusgourmet.com>',
    adminEmails: ['yshahn@gmail.com', 'ymhahn@gmail.com', 'hsusp192@gmail.com'],
    phone: '(404) 659-2788',
    address: "192 Peachtree Center Ave, Atlanta, GA 30303",
  },
  {
    key: 'luckykey',
    name: 'Lucky Key & Fuji Ya',
    firebaseConfig: {
      apiKey: 'AIzaSyByZhx5NWLc5u9kJ5x_ZbH6ERGKyFGw7ZE',
      projectId: 'luckykeyfujiya-3fd7c',
    },
    fromEmail: 'Lucky Key & Fuji Ya <orders@luckykeyfujiya.com>',
    adminEmails: ['yshahn@gmail.com', 'ymhahn@gmail.com'],
    phone: '(770) 270-1188',
    address: '4897 Lavista Rd, Tucker, GA 30084',
  },
  {
    key: 'pacificrim',
    name: 'Pacific Rim Bistro',
    firebaseConfig: {
      apiKey: 'AIzaSyChIQ0Z1sM68J6OtgIW82EyWuzys9Oz6tg',
      projectId: 'pacific-rim-bistro',
    },
    fromEmail: 'Pacific Rim Bistro <orders@pacificrimatl.com>',
    adminEmails: ['yshahn@gmail.com', 'pacificrimbistro@gmail.com'],
    phone: '(404) 893-0018',
    address: '303 Peachtree Center Ave, Atlanta, GA 30303',
  },
];

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();
  // Telnyx expects a fast 200 regardless of outcome, or it will retry.
  if (req.method !== 'POST') return res.status(200).json({ received: false });

  try {
    const payload = req.body?.data?.payload || req.body?.payload || {};
    const fromPhone = payload.from?.phone_number || payload.from || '';
    const text = payload.text || '';
    console.log('[sms-reply] from=', fromPhone, 'text=', text);

    const intent = parseReply(text);
    if (!intent) {
      return res.status(200).json({ received: true, handled: false, reason: 'unrecognized_text' });
    }

    const fromDigits = digitsOnly(fromPhone);
    if (!fromDigits) return res.status(200).json({ received: true, handled: false, reason: 'bad_from' });

    const { initializeApp, getApps } = await import('firebase/app');
    const { getFirestore, collection, query, orderBy, limit, getDocs, doc, runTransaction } = await import('firebase/firestore');
    const { getAuth, signInAnonymously } = await import('firebase/auth');

    // ── Search each restaurant's Firestore, newest reservations first,
    // until a phone match with confirmationSent=true is found. First match
    // wins — this assumes a guest doesn't have pending confirmations open
    // at two of the three restaurants simultaneously, which is a safe
    // assumption in practice.
    let matchRestaurant = null;
    let matchReservation = null;
    let matchDb = null;

    for (const r of RESTAURANTS) {
      try {
        // Guard against "Firebase app already exists" when this function
        // instance is reused (warm start) across multiple webhook calls —
        // reuse the existing named app instead of re-initializing it.
        const existing = getApps().find(a => a.name === r.key);
        const app = existing || initializeApp(r.firebaseConfig, r.key);
        const db = getFirestore(app);
        const auth = getAuth(app);
        await signInAnonymously(auth);

        // NOTE: ordering by a single field (createdAt) needs no composite
        // index; filtering confirmationSent happens in JS below instead of
        // via a `where` clause, which would need one — see the note in the
        // single-restaurant version of this file for the failure this
        // avoids ("Can't update a document that doesn't exist" from a
        // silently-failed indexed query).
        const resCol = collection(db, 'reservations');
        const q = query(resCol, orderBy('createdAt', 'desc'), limit(100));
        const snap = await getDocs(q);
        let found = null;
        snap.forEach(d => {
          if (found) return;
          const data = d.data();
          if (!data.confirmationSent) return;
          const dataDigits = digitsOnly(data.phone);
          if (dataDigits.endsWith(fromDigits.slice(-10)) || fromDigits.endsWith(dataDigits.slice(-10))) {
            found = { ...data, id: d.id }; // id LAST — see note below
          }
        });
        if (found) {
          matchRestaurant = r;
          matchReservation = found;
          matchDb = db;
          break;
        }
      } catch(e) {
        console.warn(`[sms-reply] Lookup failed for ${r.name}:`, e.message);
      }
    }

    if (!matchReservation) {
      console.warn('[sms-reply] No matching reservation found in any restaurant for', fromPhone);
      await sendSMS(fromPhone, "Sorry, we couldn't find a pending reservation for this number. Please call the restaurant directly.");
      return res.status(200).json({ received: true, handled: false, reason: 'no_match' });
    }

    // ── Dedup guard, same 5-minute-window pattern used elsewhere ──
    let shouldNotify = false;
    const resDocRef = doc(matchDb, 'reservations', matchReservation.id);
    await runTransaction(matchDb, async (tx) => {
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
      return res.status(200).json({ received: true, handled: true, deduped: true, restaurant: matchRestaurant.key });
    }

    const isConfirmed = intent === 'confirmed';
    const name = matchReservation.name || 'Guest';
    const date = matchReservation.date || '';
    const time = matchReservation.time || '';
    const r = matchRestaurant;

    // Ack SMS back to the guest
    const ackText = isConfirmed
      ? `Thanks ${name}! Your reservation for ${date} at ${time} is confirmed. See you soon! - ${r.name}`
      : `Thanks ${name}, your reservation for ${date} at ${time} has been cancelled. Call us at ${r.phone} if you'd like to rebook. - ${r.name}`;
    await sendSMS(fromPhone, ackText);

    // Admin email — sent "from" the matched restaurant's own address
    const emoji = isConfirmed ? '✅' : '❌';
    const statusText = isConfirmed ? 'CONFIRMED' : 'CANCELLED';
    const color = isConfirmed ? '#27ae60' : '#c0392b';
    await sendEmailAs(r.fromEmail, {
      to: r.adminEmails,
      subject: `${emoji} Reservation ${statusText} (via SMS reply) — ${name} · ${date} ${time}`,
      html: `<!DOCTYPE html><html><head><meta charset="UTF-8"/></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;">
  <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:48px;">${emoji}</div>
      <h1 style="font-size:24px;margin:8px 0 4px;color:${color};">Reservation ${statusText}</h1>
      <p style="font-size:16px;margin:0;font-weight:600;">${r.name}</p>
      <p style="font-size:13px;color:#888;margin:4px 0 0;">Guest replied "${isConfirmed ? '1' : '2'}" by text</p>
    </div>
    <div style="background:#f5f2ec;border-radius:10px;padding:16px;margin-bottom:20px;text-align:center;">
      <p style="margin:0;font-size:18px;font-weight:600;color:${color};">${name}</p>
      <p style="margin:4px 0 0;font-size:14px;color:#555;">${date} at ${time}</p>
    </div>
    <div style="text-align:center;color:#bbb;font-size:12px;border-top:1px solid #eee;padding-top:16px;">
      ${r.name} · ${r.address}<br>${r.phone}
    </div>
  </div>
</body></html>`,
    });

    // Admin SMS (short, plain text — no emoji, shared owner phones)
    try {
      const adminPhones = ['+17705008420', '+16788629389'];
      const smsText = `${name} ${statusText} their reservation ${date} ${time} at ${r.name} (via SMS reply).`;
      await sendAdminSMS(adminPhones, smsText);
    } catch(e) { console.warn('[sms-reply] Admin SMS error:', e); }

    // Admin push — only wired up for Pacific Rim today; skipped for the
    // other two restaurants rather than silently failing against the
    // wrong project's push credentials.
    if (r.key === 'pacificrim') {
      try {
        const { sendAdminPush } = require('../lib/push');
        await sendAdminPush({
          title: isConfirmed ? '✅ Reservation Confirmed' : '❌ Reservation Cancelled',
          body: `${name} · ${date} ${time} (via SMS)`,
          url: '/pages/admin.html',
        });
      } catch(e) { console.warn('[sms-reply] Admin push error (non-fatal):', e.message); }
    }

    return res.status(200).json({ received: true, handled: true, intent, restaurant: r.key });
  } catch (e) {
    console.error('[sms-reply] Error:', e.message, e.stack);
    return res.status(200).json({ received: true, handled: false, error: e.message });
  }
};
