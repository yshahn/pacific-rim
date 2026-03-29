const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { items, customerEmail, customerName, usePoints } = req.body;

    // Build line items for Stripe
    const lineItems = items.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity || 1,
    }));

    // Add points discount as a negative line item
    if (usePoints) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Points Discount (500 pts)',
          },
          unit_amount: -500, // -$5.00
        },
        quantity: 1,
      });
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
