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

  // Build order items HTML
  const itemsHtml = orderItems.map(item =>
    `<tr>
      <td style="padding:8px 0; border-bottom:1px solid #eee;">${item.emoji || '🍽️'} ${item.name}</td>
      <td style="padding:8px 0; border-bottom:1px solid #eee; text-align:right;">$${item.price.toFixed(2)}</td>
    </tr>`
  ).join('');

  const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/></head>
<body style="font-family:'Helvetica Neue',sans-serif; max-width:600px; margin:0 auto; padding:20px; color:#1a1a1a;">
  <div style="text-align:center; padding:20px 0; border-bottom:3px solid #c8a96e; margin-bottom:24px;">
    <h1 style="font-family:Georgia,serif; font-size:28px; color:#0f0e0c; margin:0;">Pacific Rim Bistro</h1>
    <p style="color:#c8a96e; font-size:14px; letter-spacing:0.1em; text-transform:uppercase; margin:4px 0 0;">New Order Received</p>
  </div>

  <div style="background:#f9f7f3; border-radius:12px; padding:20px; margin-bottom:20px;">
    <h2 style="font-size:16px; margin:0 0 4px;">Order #${orderId || Date.now().toString().slice(-6)}</h2>
    <p style="color:#666; font-size:13px; margin:0;">${new Date().toLocaleString('en-US', {timeZone:'America/New_York'})}</p>
  </div>

  ${customer ? `
  <div style="margin-bottom:20px;">
    <h3 style="font-size:14px; color:#c8a96e; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:8px;">Customer</h3>
    <p style="margin:0; font-size:14px;">${customer.name || '—'}</p>
    <p style="margin:0; font-size:13px; color:#666;">${customer.phone || ''} · ${customer.email || ''}</p>
  </div>` : ''}

  <h3 style="font-size:14px; color:#c8a96e; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:8px;">Order Items</h3>
  <table style="width:100%; border-collapse:collapse; font-size:14px; margin-bottom:20px;">
    ${itemsHtml}
  </table>

  <div style="border-top:2px solid #c8a96e; padding-top:16px;">
    <table style="width:100%; font-size:14px;">
      <tr><td style="padding:4px 0; color:#666;">Subtotal</td><td style="text-align:right;">$${(subtotal||0).toFixed(2)}</td></tr>
      <tr><td style="padding:4px 0; color:#666;">Tax (8.9%)</td><td style="text-align:right;">$${(tax||0).toFixed(2)}</td></tr>
      ${tip ? `<tr><td style="padding:4px 0; color:#666;">Tip</td><td style="text-align:right;">$${tip.toFixed(2)}</td></tr>` : ''}
      <tr><td style="padding:8px 0; font-weight:bold; font-size:16px;">Total</td><td style="text-align:right; font-weight:bold; font-size:16px; color:#c8a96e;">$${(total||0).toFixed(2)}</td></tr>
    </table>
  </div>

  <div style="margin-top:24px; text-align:center; color:#aaa; font-size:12px;">
    Pacific Rim Bistro · 303 Peachtree Center Ave, Atlanta, GA 30303
  </div>
</body>
</html>`;

  const emailText = `New Order — Pacific Rim Bistro\n\nOrder Time: ${new Date().toLocaleString('en-US', {timeZone:'America/New_York'})}\n\nItems:\n${orderItems.map(i => `  ${i.name}: $${i.price.toFixed(2)}`).join('\n')}\n\nSubtotal: $${(subtotal||0).toFixed(2)}\nTax: $${(tax||0).toFixed(2)}\nTotal: $${(total||0).toFixed(2)}\n\nCustomer: ${customer?.name || '—'} · ${customer?.phone || ''} · ${customer?.email || ''}`;

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
        from: { email: 'orders@pacificrimatlanta.com', name: 'Pacific Rim Bistro' },
        reply_to: { email: 'pacificrimbistro@gmail.com' },
        subject: `🍣 New Order — $${(total||0).toFixed(2)} — Pacific Rim Bistro`,
        content: [
          { type: 'text/plain', value: emailText },
          { type: 'text/html',  value: emailHtml },
        ],
      }),
    });

    if (response.ok || response.status === 202) {
      return res.status(200).json({ success: true, message: 'Notification sent' });
    } else {
      const err = await response.text();
      console.error('SendGrid error:', err);
      // Try with verified sender fallback
      const response2 = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{ to: recipients.map(email => ({ email })) }],
          from: { email: 'noreply@sendgrid.net', name: 'Pacific Rim Bistro Orders' },
          subject: `🍣 New Order — $${(total||0).toFixed(2)} — Pacific Rim Bistro`,
          content: [
            { type: 'text/plain', value: emailText },
            { type: 'text/html',  value: emailHtml },
          ],
        }),
      });
      if (response2.ok || response2.status === 202) {
        return res.status(200).json({ success: true });
      }
      return res.status(500).json({ error: 'Email failed', details: err });
    }
  } catch (err) {
    console.error('Notification error:', err);
    return res.status(500).json({ error: err.message });
  }
}
