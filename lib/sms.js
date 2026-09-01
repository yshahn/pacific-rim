// lib/sms.js
// Telnyx SMS helper — replaces the direct Twilio fetch() calls that were
// still live in api/notify-order.js and api/reservation-response.js.

function toE164(phone) {
  if (!phone) return '';
  const digits = String(phone).replace(/\D/g, '');
  if (digits.length === 10) return '+1' + digits;
  if (digits.length === 11 && digits.startsWith('1')) return '+' + digits;
  if (String(phone).startsWith('+')) return phone;
  return '+1' + digits;
}

async function sendSMS(to, body) {
  const apiKey = process.env.TELNYX_API_KEY;
  const from = process.env.TELNYX_FROM_PHONE;
  const profileId = process.env.TELNYX_MESSAGING_PROFILE_ID;
  if (!apiKey || !from) {
    console.warn('Telnyx not configured — skipping SMS send.');
    return { ok: false, error: 'not_configured' };
  }
  const toE = toE164(to);
  if (!toE) return { ok: false, error: 'invalid_phone' };

  try {
    const r = await fetch('https://api.telnyx.com/v2/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: toE,
        text: body,
        ...(profileId ? { messaging_profile_id: profileId } : {}),
      }),
    });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) {
      console.error('Telnyx send error:', JSON.stringify(data));
      return { ok: false, error: data };
    }
    return { ok: true, data };
  } catch (e) {
    console.error('Telnyx send exception:', e);
    return { ok: false, error: e.message };
  }
}

async function sendAdminSMS(phones, body) {
  const list = Array.isArray(phones) ? phones : [phones];
  const results = await Promise.all(list.filter(Boolean).map(p => sendSMS(p, body)));
  return results;
}

module.exports = { sendSMS, sendAdminSMS, toE164 };
