const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { items, customerEmail, customerName, usePoints, tip } = req.body;

    const subtotal    = items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const platformFee = 1.00;
    const discount    = usePoints ? 5 : 0;
    const tipAmount   = parseFloat(tip) || 0;
    const tax         = subtotal * 0.089;
    const total       = Math.max(subtotal + platformFee + tax + tipAmount - discount, 0.50);

    const lineItems = [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Pacific Rim Bistro — Order (' + items.length + ' item' + (items.length !== 1 ? 's' : '') + ')' +
                  (usePoints ? ' · $5 Points Discount' : '') +
                  (tipAmount > 0 ? ' · Tip $' + tipAmount.toFixed(2) : ''),
          },
          unit_amount: Math.round(total * 100),
        },
        quantity: 1,
      }
    ];

    // Add tax (8%)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      customer_email: customerEmail || undefined,
      metadata: {
        customerName: customerName || '',
        restaurant: 'Pacific Rim Bistro',
      },
      automatic_tax: { enabled: false },
      success_url: `${req.headers.origin || 'https://pacific-rim-six.vercel.app'}/?payment=success`,
      cancel_url:  `${req.headers.origin || 'https://pacific-rim-six.vercel.app'}/?payment=cancel`,
    });

    res.status(200).json({ url: session.url });

  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: err.message });
  }
}
