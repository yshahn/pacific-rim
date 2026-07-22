// api/private-party.js
// Handles Private Party & Catering inquiry form submissions
// Sends email via Resend to admin

async function sendEmail({ to, subject, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) { console.warn('RESEND_API_KEY not set'); return false; }
  const toList = Array.isArray(to) ? to : [to];
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Pacific Rim Bistro <orders@pacificrimatl.com>',
        to: toList,
        subject,
        html,
      }),
    });
    const body = await r.text();
    console.log(`Email to ${toList.join(',')} — status: ${r.status}`, body.slice(0, 120));
    return r.ok;
  } catch(e) {
    console.error('Resend error:', e);
    return false;
  }
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    type,        // 'private_party' or 'catering'
    name,
    email,
    phone,
    date,
    time,
    guests,
    occasion,
    space,
    budget,
    menu,
    location,
    message,
  } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    month: 'short', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit', hour12: true
  });

  const isParty = type === 'private_party';
  const typeLabel = isParty ? 'Private Party / Group Reservation' : 'Catering Inquiry';
  const emoji = isParty ? '🎉' : '🍱';

  const adminEmails = ['yshahn@gmail.com', 'ymhahn@gmail.com', 'pacificrimbistro@gmail.com'];

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Date', date || '—'],
    ['Time', time || '—'],
    ['Number of Guests', guests || '—'],
    ...(isParty ? [
      ['Occasion', occasion || '—'],
      ['Space', space || '—'],
      ['Budget per Person', budget ? '$' + budget : '—'],
    ] : [
      ['Event Location', location || '—'],
      ['Menu Preference', menu || '—'],
      ['Budget per Person', budget ? '$' + budget : '—'],
    ]),
    ['Additional Notes', message || '—'],
  ];

  const tableRows = rows.map(([label, value]) =>
    `<tr>
      <td style="padding:8px 0;color:#888;width:150px;vertical-align:top;font-size:14px;">${label}</td>
      <td style="padding:8px 0;font-weight:500;font-size:14px;">${value}</td>
    </tr>`
  ).join('');

  const adminHtml = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"/></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;">
  <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:40px;">${emoji}</div>
      <h1 style="font-size:24px;margin:8px 0 4px;color:#0f0e0c;">New ${typeLabel} Inquiry!</h1>
      <p style="font-size:16px;color:#c8a96e;margin:0;font-weight:600;">Pacific Rim Bistro</p>
    </div>
    <div style="background:#f5f2ec;border-radius:10px;padding:16px;margin-bottom:20px;">
      <p style="margin:0;font-size:18px;font-weight:600;color:#c8a96e;">${name}</p>
      <p style="margin:4px 0 0;font-size:14px;color:#555;">${date || ''}${time ? ' at ' + time : ''}${guests ? ' · ' + guests + ' guests' : ''}</p>
      <p style="margin:4px 0 0;font-size:13px;color:#888;">Submitted: ${submittedAt}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
      ${tableRows}
    </table>
    <div style="text-align:center;color:#bbb;font-size:12px;border-top:1px solid #eee;padding-top:16px;">
      Pacific Rim Bistro · 303 Peachtree Center Ave, Atlanta, GA 30303<br>
      (404) 893-0018 · pacificrimbistro@gmail.com
    </div>
  </div>
</body></html>`;

  const guestHtml = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"/></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;">
  <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:40px;">${emoji}</div>
      <h1 style="font-size:24px;margin:8px 0 4px;color:#0f0e0c;">We Received Your Inquiry!</h1>
      <p style="font-size:16px;color:#c8a96e;margin:0;font-weight:600;">Pacific Rim Bistro</p>
    </div>
    <div style="background:#f5f2ec;border-radius:10px;padding:16px;margin-bottom:20px;">
      <p style="margin:0;font-size:16px;font-weight:600;">Hi ${name.split(' ')[0]}! 👋</p>
      <p style="margin:6px 0 0;font-size:14px;color:#555;">Thank you for your ${typeLabel.toLowerCase()} inquiry. We'll get back to you within 24 hours!</p>
    </div>
    <div style="background:#f0f9f0;border-left:4px solid #27ae60;padding:14px 16px;border-radius:4px;font-size:13px;color:#555;margin-bottom:20px;">
      Your request has been received for <strong>${date || 'your event'}${guests ? ' · ' + guests + ' guests' : ''}</strong>.<br><br>
      Questions? Call us at <strong>(404) 893-0018</strong> or email <strong>pacificrimbistro@gmail.com</strong>
    </div>
    <div style="text-align:center;color:#bbb;font-size:12px;border-top:1px solid #eee;padding-top:16px;">
      Pacific Rim Bistro · 303 Peachtree Center Ave, Atlanta, GA 30303<br>
      (404) 893-0018 · pacificrimbistro@gmail.com
    </div>
  </div>
</body></html>`;

  try {
    await sendEmail({
      to: adminEmails,
      subject: `${emoji} New ${typeLabel} — ${name} · ${date || 'Date TBD'} · ${guests || '?'} guests`,
      html: adminHtml,
    });
    if (email) {
      await sendEmail({
        to: email,
        subject: `We received your ${typeLabel.toLowerCase()} inquiry! ${emoji}`,
        html: guestHtml,
      });
    }
    return res.status(200).json({ success: true });
  } catch(e) {
    console.error('Private party email error:', e);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
