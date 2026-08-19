// api/reservation-response.js
// Handles guest response to reservation confirmation request
// Called when guest clicks "Yes I'm Coming" or "No, Please Cancel"

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

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();
  // Many messaging/email apps issue a HEAD request to generate a link preview
  // before the guest ever taps the link. Without this guard, that HEAD request
  // ran the full handler — including sending admin notifications — exactly
  // like a real click.
  if (req.method === 'HEAD') return res.status(200).end();

  console.log(`[reservation-response] method=${req.method} ua=${req.headers['user-agent']||''} query=${JSON.stringify(req.query)} at=${new Date().toISOString()}`);

  const { id, response, name, date, time } = req.query;
  if (!id || !response) return res.status(400).send('Missing parameters');

  const isConfirmed = response === 'yes';
  const newStatus = isConfirmed ? 'confirmed' : 'cancelled';

  // ── Idempotency guard (atomic) ──
  // Link-scanning bots (email security filters, SMS link previews like TinyURL's
  // OpenGraphBot, etc.) often "click" action links automatically before the
  // guest ever taps them — and sometimes several of these hit the server within
  // milliseconds of each other. A plain "read then write" check has a race
  // condition: two nearly-simultaneous requests can both read the OLD status
  // before either one writes, so both think they're "first" and both send
  // notifications. A Firestore transaction closes that gap — only one request
  // can win.
  let alreadyProcessed = false;
  let db;
  try {
    const { initializeApp, getApps } = await import('firebase/app');
    const { getFirestore, doc, runTransaction } = await import('firebase/firestore');
    const { getAuth, signInAnonymously } = await import('firebase/auth');
    const fbApp = getApps().length ? getApps()[0] : initializeApp({
      projectId: 'pacific-rim-bistro',
      apiKey: process.env.FIREBASE_API_KEY || 'AIzaSyChIQ0Z1sM68J6OtgIW82EyWuzys9Oz6tg',
    });
    db = getFirestore(fbApp);
    // Firestore rules may require an authenticated request to update a
    // reservation (guests never sign in — this endpoint is hit from a plain
    // link). Signing in anonymously first avoids a silent PERMISSION_DENIED
    // that would otherwise make the dedup check below never actually record
    // anything, causing every hit to look like "the first one."
    try {
      const auth = getAuth(fbApp);
      await signInAnonymously(auth);
    } catch(authErr) { console.warn('Anonymous auth skipped/failed:', authErr.message); }

    const resDoc = doc(db, 'reservations', id);
    await runTransaction(db, async (tx) => {
      const snap = await tx.get(resDoc);
      // First response wins within a short window — the confirmation message
      // contains BOTH the Yes and No links, and link-scanning bots/previewers
      // often fetch every link in a message within seconds of it being sent,
      // not just the one the guest taps. So: if a response was already recorded
      // in the last 5 minutes, treat any further hit as scanner noise and
      // ignore it. After that window, a new hit is treated as a genuine change
      // of mind and is allowed through normally.
      const prevAt = snap.exists() ? snap.data().guestResponseAt : null;
      const withinDedupWindow = prevAt && (Date.now() - prevAt) < 5 * 60 * 1000;
      if (snap.exists() && snap.data().guestResponse && withinDedupWindow) {
        alreadyProcessed = true;
        return;
      }
      tx.update(resDoc, {
        guestResponse: newStatus,
        guestResponseAt: Date.now(),
      });
    });
  } catch(e) { console.warn('Could not update Firebase:', e.message); }

  // Skip admin email/SMS entirely if this exact response was already recorded
  // recently — avoids duplicate notifications from link-scanning bots.
  if (!alreadyProcessed) {
  const adminEmails = (process.env.NOTIFY_EMAILS || 'yshahn@gmail.com,pacificrimbistro@gmail.com').split(',').map(e => e.trim());
  const emoji = isConfirmed ? '✅' : '❌';
  const statusText = isConfirmed ? 'CONFIRMED' : 'CANCELLED';
  const color = isConfirmed ? '#27ae60' : '#c0392b';

  await sendEmail({
    to: adminEmails,
    subject: `${emoji} Reservation ${statusText} — ${name || 'Guest'} · ${date || ''} ${time || ''}`,
    html: `<!DOCTYPE html><html><head><meta charset="UTF-8"/></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;">
  <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:48px;">${emoji}</div>
      <h1 style="font-size:24px;margin:8px 0 4px;color:${color};">Reservation ${statusText}</h1>
      <p style="font-size:16px;color:#c8a96e;margin:0;font-weight:600;">Pacific Rim Bistro</p>
    </div>
    <div style="background:#f5f2ec;border-radius:10px;padding:16px;margin-bottom:20px;text-align:center;">
      <p style="margin:0;font-size:18px;font-weight:600;color:${color};">${name || 'Guest'}</p>
      <p style="margin:4px 0 0;font-size:14px;color:#555;">${date || ''} at ${time || ''}</p>
      <p style="margin:8px 0 0;font-size:15px;font-weight:600;color:${color};">${isConfirmed ? '✅ Will be joining us!' : '❌ Will NOT be coming — please cancel'}</p>
    </div>
    <div style="text-align:center;color:#bbb;font-size:12px;border-top:1px solid #eee;padding-top:16px;">
      Pacific Rim Bistro · 303 Peachtree Center Ave, Atlanta, GA 30303<br>(404) 893-0018
    </div>
  </div>
</body></html>`,
  });

  // Send SMS to admin — kept short and emoji-free so it stays as ONE SMS
  // segment. A message with emoji forces Unicode (UCS-2) encoding, which cuts
  // the per-segment limit from 160 down to ~70 characters — a message just
  // over that gets split into 2 texts by the carrier, which looked exactly
  // like a duplicate notification.
  try {
    const twilioSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioToken = process.env.TWILIO_AUTH_TOKEN;
    const adminPhones = ['+17705008420', '+16788629389'];
    if (twilioSid && twilioToken) {
      const twilioAuth = 'Basic ' + Buffer.from(`${twilioSid}:${twilioToken}`).toString('base64');
      const statusWord = isConfirmed ? 'CONFIRMED' : 'CANCELLED';
      const smsText = `${name || 'Guest'} ${statusWord} their reservation ${date || ''} ${time || ''}.`;
      for (const phone of adminPhones) {
        await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
          method: 'POST',
          headers: { 'Authorization': twilioAuth, 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ MessagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID || 'MG709e964fc98338d4f2ca08fa20ecaa96', To: phone, Body: smsText }),
        });
      }
    }
  } catch(e) { console.warn('Admin SMS error:', e); }
  }

  const colorForPage = isConfirmed ? '#27ae60' : '#c0392b';
  const emojiForPage = isConfirmed ? '✅' : '❌';

  // Show response page to guest
  const guestHtml = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${isConfirmed ? 'See you soon!' : 'Reservation Cancelled'} — Pacific Rim Bistro</title>
<style>
  body { font-family: Arial, sans-serif; background: #f9f9f9; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 24px; box-sizing: border-box; }
  .card { background: #fff; border-radius: 16px; padding: 40px 32px; max-width: 400px; width: 100%; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
  .emoji { font-size: 60px; margin-bottom: 16px; }
  h1 { font-size: 24px; color: ${colorForPage}; margin: 0 0 12px; }
  p { font-size: 15px; color: #555; line-height: 1.6; margin: 0 0 8px; }
  .phone { color: #c8a96e; font-weight: 600; }
</style>
</head>
<body>
  <div class="card">
    <div class="emoji">${emojiForPage}</div>
    <h1>${isConfirmed ? 'Thank You!' : 'We\'ve Received Your Response'}</h1>
    <p>${isConfirmed
      ? `We look forward to seeing you on <strong>${date || 'your reservation date'}</strong> at <strong>${time || ''}</strong>!`
      : `We're sorry you can't make it. Your reservation has been noted for cancellation.`}
    </p>
    <p>Questions? Call us at <span class="phone">(404) 893-0018</span></p>
  </div>
</body></html>`;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(guestHtml);
};
