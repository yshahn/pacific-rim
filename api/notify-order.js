// ── Order Notification API
// Sends email via SendGrid when a new order is placed

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { orderItems, subtotal, tax, tip, total, customer, orderId } = req.body;

  if (!orderItems || !total) {
    return res.status(400).json({ error: 'Missing order data' });
  }

  const orderTime = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    month: 'short', day: 'numeric',
    hour: 'numeric', minute: '2-digit', hour12: true
  });

  const nameParts  = (customer?.name || '').split(' ');
  const firstName  = nameParts[0] || '—';
  const lastName   = nameParts.slice(1).join(' ') || '—';
  const phone      = customer?.phone ? '+1' + customer.phone.replace(/\D/g,'') : '—';
  const orderCount = orderItems.length;
  const itemList   = orderItems.map(i => `${i.name}`).join(', ');

  const emailText = `Congrats!
You got a new order!

Pick Up Order from ${customer?.name || '—'}

Request details:
First name: ${firstName}
Last name: ${lastName}
Phone: ${phone}
Email: ${customer?.email || '—'}

Order details: ${itemList}
Order size: ${orderCount} Item${orderCount !== 1 ? 's' : ''}, $${(total||0).toFixed(2)}

Requested pick up time: ${orderTime}

The payment has been authorized using the credit card entered. You need to accept the order within the next 7 days for the payment to go through. In case you don't accept the order within the requested period, you will not receive the money.

Order #${orderId || '—'}
Pacific Rim Bistro · 303 Peachtree Center Ave, Atlanta, GA 30303`;

  const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/></head>
<body style="font-family:'Helvetica Neue',Arial,sans-serif; max-width:600px; margin:0 auto; padding:24px; color:#1a1a1a; background:#f9f9f9;">
  <div style="background:#fff; border-radius:12px; padding:32px; box-shadow:0 2px 8px rgba(0,0,0,0.06);">

    <div style="text-align:center; margin-bottom:24px;">
      <div style="font-size:40px; margin-bottom:8px;">🎉</div>
      <h1 style="font-size:24px; margin:0 0 4px; color:#0f0e0c;">Congrats!</h1>
      <p style="font-size:16px; color:#c8a96e; margin:0; font-weight:600;">You got a new order!</p>
    </div>

    <div style="background:#f5f2ec; border-radius:10px; padding:16px 20px; margin-bottom:20px;">
      <p style="margin:0; font-size:16px; font-weight:600;">Pick Up Order from ${customer?.name || '—'}</p>
      <p style="margin:4px 0 0; font-size:13px; color:#888;">Order #${orderId || '—'} · ${orderTime}</p>
    </div>

    <h3 style="font-size:13px; text-transform:uppercase; letter-spacing:0.08em; color:#888; margin:0 0 10px;">Request Details</h3>
    <table style="width:100%; font-size:14px; margin-bottom:20px; border-collapse:collapse;">
      <tr><td style="padding:6px 0; color:#888; width:140px;">First name</td><td style="font-weight:500;">${firstName}</td></tr>
      <tr><td style="padding:6px 0; color:#888;">Last name</td><td style="font-weight:500;">${lastName}</td></tr>
      <tr><td style="padding:6px 0; color:#888;">Phone</td><td style="font-weight:500;">${phone}</td></tr>
      <tr><td style="padding:6px 0; color:#888;">Email</td><td style="font-weight:500;">${customer?.email || '—'}</td></tr>
    </table>

    <h3 style="font-size:13px; text-transform:uppercase; letter-spacing:0.08em; color:#888; margin:0 0 10px;">Order Details</h3>
    <div style="border:1px solid #eee; border-radius:8px; overflow:hidden; margin-bottom:20px;">
      ${orderItems.map((item, i) => `
        <div style="padding:10px 16px; ${i < orderItems.length-1 ? 'border-bottom:1px solid #eee;' : ''} display:flex; justify-content:space-between;">
          <span>${item.emoji || '🍽️'} ${item.name}</span>
          <span style="font-weight:600; color:#c8a96e;">$${item.price.toFixed(2)}</span>
        </div>`).join('')}
    </div>

    <table style="width:100%; font-size:14px; margin-bottom:20px; border-collapse:collapse;">
      <tr><td style="padding:4px 0; color:#888;">Subtotal</td><td style="text-align:right;">$${(subtotal||0).toFixed(2)}</td></tr>
      <tr><td style="padding:4px 0; color:#888;">Tax</td><td style="text-align:right;">$${(tax||0).toFixed(2)}</td></tr>
      ${tip ? `<tr><td style="padding:4px 0; color:#888;">Tip</td><td style="text-align:right;">$${tip.toFixed(2)}</td></tr>` : ''}
      <tr style="border-top:2px solid #c8a96e;">
        <td style="padding:10px 0 4px; font-weight:700; font-size:16px;">Order size: ${orderCount} Item${orderCount !== 1 ? 's' : ''}</td>
        <td style="text-align:right; font-weight:700; font-size:16px; color:#c8a96e; padding-top:10px;">$${(total||0).toFixed(2)}</td>
      </tr>
    </table>

    <div style="background:#fff8e7; border-left:4px solid #c8a96e; padding:14px 16px; border-radius:4px; font-size:13px; color:#555; line-height:1.6; margin-bottom:24px;">
      The payment has been authorized using the credit card entered. You need to accept the order within the next 7 days for the payment to go through. In case you don't accept the order within the requested period, you will not receive the money.
    </div>

    <div style="text-align:center; color:#bbb; font-size:12px; border-top:1px solid #eee; padding-top:16px;">
      Pacific Rim Bistro · 303 Peachtree Center Ave, Atlanta, GA 30303<br>
      (404) 893-0018 · pacificrimbistro@gmail.com
    </div>
  </div>
</body>
</html>`;

  const recipients = (process.env.NOTIFY_EMAILS || 'yshahn@gmail.com,pacificrimbistro@gmail.com')
    .split(',').map(e => e.trim()).filter(Boolean);

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: recipients.map(email => ({ email })) }],
        from: { email: 'yshahn@gmail.com', name: 'Pacific Rim Bistro Orders' },
        reply_to: { email: 'pacificrimbistro@gmail.com' },
        subject: `🎉 New Order — ${customer?.name || 'Guest'} · $${(total||0).toFixed(2)} · ${orderCount} item${orderCount!==1?'s':''}`,
        content: [
          { type: 'text/plain', value: emailText },
          { type: 'text/html',  value: emailHtml },
        ],
      }),
    });

    if (response.ok || response.status === 202) {
      return res.status(200).json({ success: true });
    } else {
      const err = await response.text();
      console.error('SendGrid error:', err);
      return res.status(500).json({ error: 'Email failed', details: err });
    }
  } catch (err) {
    console.error('Notification error:', err);
    return res.status(500).json({ error: err.message });
  }
}

