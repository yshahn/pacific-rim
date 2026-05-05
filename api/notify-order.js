// ── Order & Reservation Notification API (CommonJS)
// Sends email via SendGrid + SMS via Twilio
// To: Admin (from settings) + Guest (confirmation)

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    orderItems, subtotal, tax, tip, total,
    customer, orderId, pickupTime,
    isReservation, special,
    // Notification settings passed from client
    notifEmails, notifPhones,
  } = req.body;

  if (!orderItems) {
    return res.status(400).json({ error: 'Missing order data' });
  }

  const orderTime = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    month: 'short', day: 'numeric',
    hour: 'numeric', minute: '2-digit', hour12: true
  });

  const pickup     = pickupTime || 'ASAP';
  const nameParts  = (customer?.name || '').split(' ');
  const firstName  = nameParts[0] || '—';
  const lastName   = nameParts.slice(1).join(' ') || '—';
  const rawPhone   = customer?.phone || '';
  const digits     = rawPhone.replace(/\D/g, '');
  const phone      = digits ? (digits.startsWith('1') ? '+' + digits : '+1' + digits) : '—';
  const orderCount = orderItems.length;

  // ── Recipients
  // Admin emails: from request (client reads from localStorage/Firebase)
  const adminEmails = Array.isArray(notifEmails) && notifEmails.length
    ? notifEmails
    : (process.env.NOTIFY_EMAILS || 'yshahn@gmail.com,pacificrimbistro@gmail.com').split(',').map(e => e.trim()).filter(Boolean);

  const adminPhones = Array.isArray(notifPhones) && notifPhones.length
    ? notifPhones.map(p => { const d = p.replace(/\D/g,''); return d.startsWith('1') ? '+'+d : '+1'+d; })
    : ['+17705008420', '+16788629389'];

  // Guest email/phone
  const guestEmail = customer?.email || null;
  const guestPhone = digits ? (digits.startsWith('1') ? '+' + digits : '+1' + digits) : null;

  // ── Build message content
  let adminSmsText, guestSmsText, adminEmailSubject, adminEmailHtml, guestEmailSubject, guestEmailHtml;

  if (isReservation) {
    // ── RESERVATION
    adminSmsText = `🗓️ New Reservation!\n${customer?.name || 'Guest'} · ${pickup}\n👥 ${orderItems[0]?.name || ''}\n📞 ${phone}\n${special ? '📝 ' + special : ''}`;
    guestSmsText = `Hi ${firstName}! Your reservation at Pacific Rim Bistro is confirmed.\n📅 ${pickup}\n${orderItems[0]?.name || ''}\n${special ? '📝 ' + special : ''}\nSee you soon! 🍣`;
    adminEmailSubject = `🗓️ New Reservation — ${customer?.name || 'Guest'} · ${pickup}`;
    guestEmailSubject = `Your Reservation at Pacific Rim Bistro is Confirmed! 🗓️`;

    const resDetails = `
      <tr><td style="padding:5px 0;color:#888;width:130px;">First name</td><td style="font-weight:500;">${firstName}</td></tr>
      <tr><td style="padding:5px 0;color:#888;">Last name</td><td style="font-weight:500;">${lastName}</td></tr>
      <tr><td style="padding:5px 0;color:#888;">Phone</td><td style="font-weight:500;">${phone}</td></tr>
      <tr><td style="padding:5px 0;color:#888;">Email</td><td style="font-weight:500;">${guestEmail || '—'}</td></tr>
      ${special ? `<tr><td style="padding:5px 0;color:#888;">Special Requests</td><td style="font-weight:500;">${special}</td></tr>` : ''}`;

    adminEmailHtml = buildEmailHtml({
      emoji: '🗓️', title: 'New Reservation!', subtitle: 'Pacific Rim Bistro',
      highlight: customer?.name || 'Guest',
      highlightSub: pickup,
      highlightSub2: orderItems[0]?.name || '',
      tableRows: resDetails,
      notice: `Reservation #${orderId || '—'} · ${orderTime}`,
      isAdmin: true,
    });

    guestEmailHtml = buildEmailHtml({
      emoji: '🗓️', title: 'Reservation Confirmed!', subtitle: 'Pacific Rim Bistro',
      highlight: pickup,
      highlightSub: orderItems[0]?.name || '',
      highlightSub2: special ? '📝 ' + special : '',
      tableRows: '',
      notice: `We look forward to seeing you! Questions? Call us at (404) 893-0018`,
      isAdmin: false,
    });

  } else {
    // ── ORDER
    const itemList = orderItems.map(i => i.name).join(', ');
    adminSmsText = `🍣 New Order!\n${customer?.name || 'Guest'} · $${(total||0).toFixed(2)}\n📦 ${pickup}\n${itemList}\n📞 ${phone}`;
    guestSmsText = `Hi ${firstName}! Your Pacific Rim Bistro order is confirmed.\n📦 Pickup: ${pickup}\n${itemList}\nTotal: $${(total||0).toFixed(2)}\nQuestions? (404) 893-0018 🍣`;
    adminEmailSubject = `🍣 New Order — ${customer?.name || 'Guest'} · $${(total||0).toFixed(2)} · ${pickup}`;
    guestEmailSubject = `Your Pacific Rim Bistro Order is Confirmed! 🍣`;

    const orderRows = `
      <tr><td style="padding:5px 0;color:#888;width:130px;">First name</td><td style="font-weight:500;">${firstName}</td></tr>
      <tr><td style="padding:5px 0;color:#888;">Last name</td><td style="font-weight:500;">${lastName}</td></tr>
      <tr><td style="padding:5px 0;color:#888;">Phone</td><td style="font-weight:500;">${phone}</td></tr>
      <tr><td style="padding:5px 0;color:#888;">Email</td><td style="font-weight:500;">${guestEmail || '—'}</td></tr>`;

    const itemsHtml = orderItems.map((item, i) =>
      `<div style="padding:10px 16px;${i<orderItems.length-1?'border-bottom:1px solid #eee;':''}display:flex;justify-content:space-between;">
        <span>${item.emoji||'🍽️'} ${item.name}</span>
        <span style="font-weight:600;color:#c8a96e;">$${item.price.toFixed(2)}</span>
      </div>`).join('');

    const totalsHtml = `
      <table style="width:100%;font-size:14px;margin-bottom:16px;">
        <tr><td style="padding:4px 0;color:#888;">Subtotal</td><td style="text-align:right;">$${(subtotal||0).toFixed(2)}</td></tr>
        <tr><td style="padding:4px 0;color:#888;">Platform Fee</td><td style="text-align:right;">$1.00</td></tr>
        <tr><td style="padding:4px 0;color:#888;">Tax</td><td style="text-align:right;">$${(tax||0).toFixed(2)}</td></tr>
        ${tip ? `<tr><td style="padding:4px 0;color:#888;">Tip</td><td style="text-align:right;">$${Number(tip).toFixed(2)}</td></tr>` : ''}
        <tr style="border-top:2px solid #c8a96e;">
          <td style="padding:10px 0 4px;font-weight:700;">Total</td>
          <td style="text-align:right;font-weight:700;color:#c8a96e;padding-top:10px;">$${(total||0).toFixed(2)}</td>
        </tr>
      </table>`;

    adminEmailHtml = buildOrderEmailHtml({ firstName, lastName, phone, guestEmail, pickup, itemsHtml, totalsHtml, orderRows, orderId, orderTime, orderCount, total, isAdmin: true, pickupType: req.body.pickupType || 'instore', carModel: req.body.carModel || '', carColor: req.body.carColor || '', specialReq });
    guestEmailHtml = buildOrderEmailHtml({ firstName, lastName, phone, guestEmail, pickup, itemsHtml, totalsHtml, orderRows: '', orderId, orderTime, orderCount, total, isAdmin: false, pickupType: req.body.pickupType || 'instore', carModel: req.body.carModel || '', carColor: req.body.carColor || '', specialReq });
  }

  const results = { emailAdmin: false, smsAdmin: [], emailGuest: false, smsGuest: false };

  // ── Send Admin Emails
  try {
    const emailRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        personalizations: [{ to: adminEmails.map(email => ({ email })) }],
        from: { email: 'orders@pacificrimatl.com', name: 'Pacific Rim Bistro' },
        reply_to: { email: 'pacificrimbistro@gmail.com' },
        subject: adminEmailSubject,
        content: [{ type: 'text/html', value: adminEmailHtml }],
      }),
    });
    results.emailAdmin = emailRes.ok || emailRes.status === 202;
  } catch(e) { console.error('Admin email error:', e); }

  // ── Send Guest Confirmation Email
  if (guestEmail) {
    try {
      const guestRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: guestEmail }] }],
          from: { email: 'orders@pacificrimatl.com', name: 'Pacific Rim Bistro' },
          subject: guestEmailSubject,
          content: [{ type: 'text/html', value: guestEmailHtml }],
        }),
      });
      results.emailGuest = guestRes.ok || guestRes.status === 202;
    } catch(e) { console.error('Guest email error:', e); }
  }

  // ── Send Admin SMS via Twilio
  const twilioSid   = process.env.TWILIO_ACCOUNT_SID;
  const twilioToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioFrom  = process.env.TWILIO_FROM_PHONE;

  console.log('Twilio check:', !!twilioSid, !!twilioToken, !!twilioFrom);
  console.log('Admin phones:', adminPhones);

  if (twilioSid && twilioToken && twilioFrom) {
    for (const toPhone of adminPhones) {
      try {
        const smsRes = await fetch(
          `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`,
          {
            method: 'POST',
            headers: {
              'Authorization': 'Basic ' + Buffer.from(`${twilioSid}:${twilioToken}`).toString('base64'),
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ From: twilioFrom, To: toPhone, Body: adminSmsText }),
          }
        );
        results.smsAdmin.push({ to: toPhone, ok: smsRes.ok });
      } catch(e) { console.error('Admin SMS error:', e); }
    }

    // ── Send Guest SMS (only if consent given)
    if (guestPhone && guestPhone !== '—' && req.body.guestSmsConsent) {
      try {
        const smsRes = await fetch(
          `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`,
          {
            method: 'POST',
            headers: {
              'Authorization': 'Basic ' + Buffer.from(`${twilioSid}:${twilioToken}`).toString('base64'),
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ From: twilioFrom, To: guestPhone, Body: guestSmsText }),
          }
        );
        results.smsGuest = smsRes.ok;
      } catch(e) { console.error('Guest SMS error:', e); }
    }
  }

  return res.status(200).json({ success: true, results });
};

// ── Email HTML builders
function buildEmailHtml({ emoji, title, subtitle, highlight, highlightSub, highlightSub2, tableRows, notice, isAdmin }) {
  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"/></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;">
  <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:40px;">${emoji}</div>
      <h1 style="font-size:24px;margin:8px 0 4px;color:#0f0e0c;">${title}</h1>
      <p style="font-size:16px;color:#c8a96e;margin:0;font-weight:600;">${subtitle}</p>
    </div>
    <div style="background:#f5f2ec;border-radius:10px;padding:16px;margin-bottom:20px;">
      <p style="margin:0;font-size:18px;font-weight:600;color:#c8a96e;">${highlight}</p>
      ${highlightSub ? `<p style="margin:4px 0 0;font-size:14px;color:#555;">${highlightSub}</p>` : ''}
      ${highlightSub2 ? `<p style="margin:4px 0 0;font-size:13px;color:#888;">${highlightSub2}</p>` : ''}
    </div>
    ${tableRows ? `<table style="width:100%;font-size:14px;margin-bottom:20px;">${tableRows}</table>` : ''}
    <div style="text-align:center;color:#bbb;font-size:12px;border-top:1px solid #eee;padding-top:16px;">
      Pacific Rim Bistro · 303 Peachtree Center Ave, Atlanta, GA 30303<br>
      ${notice}
    </div>
  </div>
</body></html>`;
}

function buildOrderEmailHtml({ firstName, lastName, phone, guestEmail, pickup, itemsHtml, totalsHtml, orderRows, orderId, orderTime, orderCount, total, isAdmin, pickupType, carModel, carColor, specialReq }) {
  return `<!DOCTYPE html>
<html><head><meta charset="UTF-8"/></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;">
  <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:40px;">${isAdmin ? '🎉' : '✅'}</div>
      <h1 style="font-size:24px;margin:8px 0 4px;color:#0f0e0c;">${isAdmin ? 'New Order!' : 'Order Confirmed!'}</h1>
      <p style="font-size:16px;color:#c8a96e;margin:0;font-weight:600;">Pacific Rim Bistro</p>
    </div>
    <div style="background:#f5f2ec;border-radius:10px;padding:16px;margin-bottom:20px;">
      ${isAdmin ? `<p style="margin:0;font-size:16px;font-weight:600;">${firstName} ${lastName}</p>` : `<p style="margin:0;font-size:16px;font-weight:600;">Hi ${firstName}! 👋</p>`}
      <p style="margin:4px 0 0;font-size:14px;color:#c8a96e;font-weight:600;">📦 Pickup: ${pickup}</p>
      ${pickupType === 'curbside' ? `<p style="margin:4px 0 0;font-size:13px;color:#e74c3c;font-weight:600;">🚗 CURBSIDE — ${carColor} ${carModel}</p>` : ''}
      ${specialReq ? '<p style="margin:4px 0 0;font-size:13px;color:#555;">📝 ' + specialReq + '</p>' : ''}
      <p style="margin:4px 0 0;font-size:12px;color:#888;">Order #${orderId || '—'} · ${orderTime}</p>
    </div>
    ${orderRows ? `<h3 style="font-size:13px;text-transform:uppercase;color:#888;margin:0 0 10px;">Customer Details</h3><table style="width:100%;font-size:14px;margin-bottom:20px;">${orderRows}</table>` : ''}
    <h3 style="font-size:13px;text-transform:uppercase;color:#888;margin:0 0 10px;">Order Items</h3>
    <div style="border:1px solid #eee;border-radius:8px;overflow:hidden;margin-bottom:16px;">${itemsHtml}</div>
    ${totalsHtml}
    ${!isAdmin ? `<div style="background:#f0f9f0;border-left:4px solid #27ae60;padding:14px 16px;border-radius:4px;font-size:13px;color:#555;margin-bottom:20px;">
      Your payment has been processed. Please pick up your order at the restaurant.<br><br>
      Questions? Call us at <strong>(404) 893-0018</strong>
    </div>` : ''}
    <div style="text-align:center;color:#bbb;font-size:12px;border-top:1px solid #eee;padding-top:16px;">
      Pacific Rim Bistro · 303 Peachtree Center Ave, Atlanta, GA 30303<br>
      (404) 893-0018 · pacificrimbistro@gmail.com
    </div>
  </div>
</body></html>`;
}
