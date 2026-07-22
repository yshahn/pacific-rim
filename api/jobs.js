// api/jobs.js
// Handles Job Application form submissions
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

  const { name, email, phone, experience, introduction, positions, resumeUrl, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    month: 'short', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit', hour12: true
  });

  const adminEmails = ['yshahn@gmail.com', 'ymhahn@gmail.com', 'pacificrimbistro@gmail.com'];
  const positionList = Array.isArray(positions) ? positions.join(', ') : (positions || '—');

  const adminHtml = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"/></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;">
  <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:40px;">💼</div>
      <h1 style="font-size:24px;margin:8px 0 4px;color:#0f0e0c;">New Job Application!</h1>
      <p style="font-size:16px;color:#c8a96e;margin:0;font-weight:600;">Pacific Rim Bistro</p>
    </div>
    <div style="background:#f5f2ec;border-radius:10px;padding:16px;margin-bottom:20px;">
      <p style="margin:0;font-size:18px;font-weight:600;color:#c8a96e;">${name}</p>
      <p style="margin:4px 0 0;font-size:14px;color:#555;">Applying for: ${positionList}</p>
      <p style="margin:4px 0 0;font-size:13px;color:#888;">Submitted: ${submittedAt}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
      <tr><td style="padding:8px 0;color:#888;width:150px;font-size:14px;">Name</td><td style="padding:8px 0;font-weight:500;font-size:14px;">${name}</td></tr>
      <tr><td style="padding:8px 0;color:#888;font-size:14px;">Email</td><td style="padding:8px 0;font-weight:500;font-size:14px;">${email}</td></tr>
      <tr><td style="padding:8px 0;color:#888;font-size:14px;">Phone</td><td style="padding:8px 0;font-weight:500;font-size:14px;">${phone}</td></tr>
      <tr><td style="padding:8px 0;color:#888;font-size:14px;">Position(s)</td><td style="padding:8px 0;font-weight:500;font-size:14px;">${positionList}</td></tr>
      <tr><td style="padding:8px 0;color:#888;font-size:14px;">Experience</td><td style="padding:8px 0;font-weight:500;font-size:14px;">${experience || '—'}</td></tr>
      ${introduction ? `<tr><td style="padding:8px 0;color:#888;font-size:14px;vertical-align:top;">Introduction</td><td style="padding:8px 0;font-size:14px;">${introduction}</td></tr>` : ''}
      ${resumeUrl ? `<tr><td style="padding:8px 0;color:#888;font-size:14px;">Resume</td><td style="padding:8px 0;font-size:14px;"><a href="${resumeUrl}" style="color:#c8a96e;">View Resume</a></td></tr>` : ''}
      ${message ? `<tr><td style="padding:8px 0;color:#888;font-size:14px;vertical-align:top;">Message</td><td style="padding:8px 0;font-size:14px;">${message}</td></tr>` : ''}
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
      <div style="font-size:40px;">💼</div>
      <h1 style="font-size:24px;margin:8px 0 4px;color:#0f0e0c;">Application Received!</h1>
      <p style="font-size:16px;color:#c8a96e;margin:0;font-weight:600;">Pacific Rim Bistro</p>
    </div>
    <div style="background:#f5f2ec;border-radius:10px;padding:16px;margin-bottom:20px;">
      <p style="margin:0;font-size:16px;font-weight:600;">Hi ${name.split(' ')[0]}! 👋</p>
      <p style="margin:6px 0 0;font-size:14px;color:#555;">Thank you for applying to Pacific Rim Bistro! We've received your application for <strong>${positionList}</strong> and will be in touch soon.</p>
    </div>
    <div style="background:#f0f9f0;border-left:4px solid #27ae60;padding:14px 16px;border-radius:4px;font-size:13px;color:#555;margin-bottom:20px;">
      We review all applications carefully. If your qualifications match our needs, we'll contact you to schedule an interview.<br><br>
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
      subject: `💼 New Job Application — ${name} · ${positionList}`,
      html: adminHtml,
    });
    if (email) {
      await sendEmail({
        to: email,
        subject: `Your application to Pacific Rim Bistro has been received! 💼`,
        html: guestHtml,
      });
    }
    return res.status(200).json({ success: true });
  } catch(e) {
    console.error('Jobs email error:', e);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
