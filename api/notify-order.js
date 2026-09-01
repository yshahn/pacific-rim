// ── Order & Reservation Notification API (CommonJS)
// Sends email via Resend + SMS via Twilio
// To: Admin (from settings) + Guest (confirmation)

// ── Send email via Resend
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
    console.log(`Email to ${toList.join(',')} — status: ${r.status}`, body.slice(0,120));
    return r.ok || r.status === 200;
  } catch(e) {
    console.error('Resend error:', e);
    return false;
  }
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    orderItems, subtotal, tax, tip, total,
    customer, orderId, pickupTime,
    isReservation, special,
    pointsDiscount,
    // Notification settings passed from client
    notifEmails, notifPhones,
  } = req.body;

  // ── CURBSIDE ARRIVED NOTIFICATION ──
  if (req.body.isArrived) {
    const { orderId, customer, carModel, carColor, pickupTime, notifEmails, notifPhones } = req.body;
    let arrivedEmails = null, arrivedPhones = null;
    try {
      const { initializeApp, getApps } = await import('firebase/app');
      const { getFirestore, doc, getDoc } = await import('firebase/firestore');
      const fbApp = getApps().length ? getApps()[0] : initializeApp({
        projectId: 'pacific-rim-bistro',
        apiKey: 'AIzaSyChIQ0Z1sM68J6OtgIW82EyWuzys9Oz6tg',
      });
      const db = getFirestore(fbApp);
      const snap = await getDoc(doc(db, 'config', 'notifications'));
      if (snap.exists()) {
        const notifData = JSON.parse(snap.data().data || '{}');
        if (notifData.emails?.length) arrivedEmails = notifData.emails;
        if (notifData.phones?.length) arrivedPhones = notifData.phones;
      }
    } catch(e) { console.warn('Firebase notif settings load failed:', e.message); }
    if (!arrivedEmails && Array.isArray(notifEmails) && notifEmails.length) arrivedEmails = notifEmails;
    if (!arrivedPhones && Array.isArray(notifPhones) && notifPhones.length) arrivedPhones = notifPhones;
    const adminEmails = arrivedEmails || ['yshahn@gmail.com','ymhahn@gmail.com'];
    const adminPhones = arrivedPhones
      ? arrivedPhones.map(p => { const d = p.replace(/\D/g,''); return d.startsWith('1') ? '+'+d : '+1'+d; })
      : ['+17705008420', '+16788629389'];
    const arrivedTime = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York', month:'short', day:'numeric',
      hour:'numeric', minute:'2-digit', hour12:true
    });
    const carInfo = [carColor, carModel].filter(Boolean).join(' ') || 'Car info not provided';
    const custName = customer?.name || 'Guest';
    const custPhone = customer?.phone || '—';

    const sgKey = process.env.RESEND_API_KEY;
    const arrivedResults = { emails: [], sms: [] };

    // ── Email notification ──
    if (sgKey) {
      const emailBody = `
        <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:520px;margin:0 auto;background:#faf7f2;border-radius:12px;overflow:hidden;">
          <div style="background:#1a1410;padding:28px 32px;">
            <div style="font-family:'Georgia',serif;font-size:24px;color:#c8a96e;margin-bottom:4px;">🚗 Customer Has Arrived!</div>
            <div style="font-size:13px;color:rgba(255,255,255,0.5);">Curbside Pickup · ${arrivedTime}</div>
          </div>
          <div style="padding:28px 32px;">
            <table style="width:100%;font-size:14px;border-collapse:collapse;">
              <tr style="border-bottom:1px solid #e8e3da;">
                <td style="padding:10px 0;color:#888;width:40%;">Customer</td>
                <td style="padding:10px 0;font-weight:600;">${custName}</td>
              </tr>
              <tr style="border-bottom:1px solid #e8e3da;">
                <td style="padding:10px 0;color:#888;">Phone</td>
                <td style="padding:10px 0;">${custPhone}</td>
              </tr>
              <tr style="border-bottom:1px solid #e8e3da;">
                <td style="padding:10px 0;color:#888;">Vehicle</td>
                <td style="padding:10px 0;font-weight:600;color:#c8a96e;">${carInfo}</td>
              </tr>
              ${orderId ? `<tr style="border-bottom:1px solid #e8e3da;"><td style="padding:10px 0;color:#888;">Order #</td><td style="padding:10px 0;">${orderId}</td></tr>` : ''}
              <tr>
                <td style="padding:10px 0;color:#888;">Arrived At</td>
                <td style="padding:10px 0;">${arrivedTime}</td>
              </tr>
            </table>
            <div style="margin-top:20px;padding:14px 18px;background:#fff8e8;border-left:3px solid #c8a96e;border-radius:4px;font-size:13px;color:#856404;">
              🍱 Please bring the order out to the <strong>${carInfo}</strong>
            </div>
          </div>
          <div style="background:#1a1410;padding:14px 32px;font-size:11px;color:rgba(255,255,255,0.4);text-align:center;">
            Pacific Rim Bistro · (404) 893-0018
          </div>
        </div>`;

      for (const email of adminEmails) {
        try {
          const r = await sendEmail({
            to: email,
            subject: `🚗 ${custName} Has Arrived — Curbside Pickup`,
            html: emailBody,
          });
          arrivedResults.emails.push({ to: email, ok: r });
          console.log('Arrived email sent to', email, r);
        } catch(e) { console.error('Arrived email error:', e); }
      }
    } else {
      console.warn('RESEND_API_KEY not set — arrived email skipped');
    }

    // ── SMS notification ──
    const twilioSid   = process.env.TWILIO_ACCOUNT_SID;
    const twilioToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioFrom  = process.env.TWILIO_FROM_PHONE;
    const smsText = `🚗 ${custName} has arrived for curbside pickup!\nVehicle: ${carInfo}\nPhone: ${custPhone}${orderId ? '\nOrder #' + orderId : ''}`;

    if (twilioSid && twilioToken && twilioFrom && adminPhones.length > 0) {
      const twilioAuth = 'Basic ' + Buffer.from(`${twilioSid}:${twilioToken}`).toString('base64');
      const twilioUrl  = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`;
      for (const toPhone of adminPhones) {
        try {
          const r = await fetch(twilioUrl, {
            method: 'POST',
            headers: { 'Authorization': twilioAuth, 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ MessagingServiceSid: 'MG709e964fc98338d4f2ca08fa20ecaa96', To: toPhone, Body: smsText }),
          });
          arrivedResults.sms = { ok: r.ok, status: r.status };
          console.log('Arrived SMS:', r.status);
        } catch(e) { console.error('Arrived SMS error:', e); }
      }
    }

    return res.status(200).json({ success: true, type: 'arrived', results: arrivedResults });
  }

  // ── CONFIRMATION REQUEST ──
  if (req.body.isConfirmationRequest) {
    console.log('✅ isConfirmationRequest block triggered');
    const { customer, confirmationMessage, orderId } = req.body;
    const guestEmail = customer?.email;
    const guestPhone = customer?.phone;
    const guestName = customer?.name || 'Guest';
    const msg = confirmationMessage || '';
    const resId = orderId || '';
    const resName = encodeURIComponent(guestName);
    const resDate = encodeURIComponent(customer?.date || '');
    const resTime = encodeURIComponent(customer?.time || '');
    const baseUrl = 'https://pacificrimatl.com';
    const yesUrl = `${baseUrl}/api/reservation-response?id=${resId}&response=yes&name=${resName}&date=${resDate}&time=${resTime}`;
    const noUrl = `${baseUrl}/api/reservation-response?id=${resId}&response=no&name=${resName}&date=${resDate}&time=${resTime}`;

    async function shortenUrl(url) {
      try {
        const r = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
        if (r.ok) { const short = await r.text(); if (short.startsWith('http')) return short; }
      } catch(e) {}
      return url;
    }
    const [shortYes, shortNo] = await Promise.all([shortenUrl(yesUrl), shortenUrl(noUrl)]);

    if (guestEmail) {
      await sendEmail({
        to: guestEmail,
        subject: `Reservation Confirmation Request — Pacific Rim Bistro`,
        html: `<!DOCTYPE html><html><head><meta charset="UTF-8"/></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;">
  <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:40px;">🗓️</div>
      <h1 style="font-size:22px;margin:8px 0 4px;color:#0f0e0c;">Reservation Confirmation</h1>
      <p style="font-size:16px;color:#c8a96e;margin:0;font-weight:600;">Pacific Rim Bistro</p>
    </div>
    <p style="font-size:15px;line-height:1.7;color:#333;">${msg}</p>
    <div style="display:flex;gap:16px;justify-content:center;margin:28px 0;flex-wrap:wrap;">
      <a href="${yesUrl}" style="display:inline-block;background:#27ae60;color:#fff;padding:16px 32px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:700;">✅ Yes, I'm Coming!</a>
      <a href="${noUrl}" style="display:inline-block;background:#e74c3c;color:#fff;padding:16px 32px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:700;">❌ No, Please Cancel</a>
    </div>
    <div style="text-align:center;color:#bbb;font-size:12px;border-top:1px solid #eee;padding-top:16px;margin-top:24px;">
      Pacific Rim Bistro · 303 Peachtree Center Ave, Atlanta, GA 30303<br>(404) 893-0018
    </div>
  </div>
</body></html>`,
      });
    }

    const twilioSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioToken = process.env.TWILIO_AUTH_TOKEN;
    if (twilioSid && twilioToken && guestPhone) {
      const digits = guestPhone.replace(/\D/g, '');
      const toPhone = digits.startsWith('1') ? '+' + digits : '+1' + digits;
      const twilioAuth = 'Basic ' + Buffer.from(`${twilioSid}:${twilioToken}`).toString('base64');
      const smsWithLinks = msg + `\n\n✅ Yes: ${shortYes}\n❌ No: ${shortNo}`;
      await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
        method: 'POST',
        headers: { 'Authorization': twilioAuth, 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ MessagingServiceSid: 'MG709e964fc98338d4f2ca08fa20ecaa96', To: toPhone, Body: smsWithLinks }),
      });
    }

    return res.status(200).json({ success: true, type: 'confirmation_request' });
  }


  // ── CONFIRMATION REQUEST ──
  console.log('📦 notify-order body keys:', Object.keys(req.body));
  console.log('📦 isConfirmationRequest:', req.body.isConfirmationRequest);
  if (req.body.isConfirmationRequest) {
    console.log('✅ isConfirmationRequest block triggered');
    const { customer, confirmationMessage, orderId } = req.body;
    const guestEmail = customer?.email;
    const guestPhone = customer?.phone;
    const guestName = customer?.name || 'Guest';
    const msg = confirmationMessage || '';

    // Send email
    if (guestEmail) {
      await sendEmail({
        to: guestEmail,
        subject: `Reservation Confirmation Request — Hsu's Gourmet`,
        html: `<!DOCTYPE html><html><head><meta charset="UTF-8"/></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;">
  <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:40px;">🗓️</div>
      <h1 style="font-size:22px;margin:8px 0 4px;color:#0f0e0c;">Reservation Confirmation</h1>
      <p style="font-size:16px;color:#c8a96e;margin:0;font-weight:600;">Hsu's Gourmet</p>
    </div>
    <p style="font-size:15px;line-height:1.7;color:#333;">${msg}</p>
    <div style="text-align:center;color:#bbb;font-size:12px;border-top:1px solid #eee;padding-top:16px;margin-top:24px;">
      Hsu's Gourmet · 192 Peachtree Center Ave, Atlanta, GA 30303<br>(404) 659-2788
    </div>
  </div>
</body></html>`,
      });
    }

    // Send SMS
    const twilioSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioFrom = process.env.TWILIO_FROM_PHONE;
    if (twilioSid && twilioToken && twilioFrom && guestPhone) {
      const digits = guestPhone.replace(/\D/g, '');
      const toPhone = digits.startsWith('1') ? '+' + digits : '+1' + digits;
      const twilioAuth = 'Basic ' + Buffer.from(`${twilioSid}:${twilioToken}`).toString('base64');
      await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
        method: 'POST',
        headers: { 'Authorization': twilioAuth, 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ MessagingServiceSid: 'MG709e964fc98338d4f2ca08fa20ecaa96', To: toPhone, Body: msg }),
      });
    }

    return res.status(200).json({ success: true, type: 'confirmation_request' });
  }
  // ── CONFIRMATION REQUEST ──
  if (req.body.isConfirmationRequest) {
    const { customer, confirmationMessage, orderId } = req.body;
    const guestEmail = customer?.email;
    const guestPhone = customer?.phone;
    const guestName = customer?.name || 'Guest';
    const msg = confirmationMessage || '';
    const resId = orderId || '';
    const resName = encodeURIComponent(guestName);
    const resDate = encodeURIComponent(customer?.date || '');
    const resTime = encodeURIComponent(customer?.time || '');
    const baseUrl = 'https://pacificrimatl.com';
    const yesUrl = `${baseUrl}/api/reservation-response?id=${resId}&response=yes&name=${resName}&date=${resDate}&time=${resTime}`;
    const noUrl = `${baseUrl}/api/reservation-response?id=${resId}&response=no&name=${resName}&date=${resDate}&time=${resTime}`;

    async function shortenUrl(url) {
      try {
        const r = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
        if (r.ok) { const short = await r.text(); if (short.startsWith('http')) return short; }
      } catch(e) {}
      return url;
    }
    const [shortYes, shortNo] = await Promise.all([shortenUrl(yesUrl), shortenUrl(noUrl)]);

    if (guestEmail) {
      await sendEmail({
        to: guestEmail,
        subject: `Reservation Confirmation Request — Pacific Rim Bistro`,
        html: `<!DOCTYPE html><html><head><meta charset="UTF-8"/></head>
<body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9;">
  <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
    <div style="text-align:center;margin-bottom:24px;">
      <div style="font-size:40px;">🗓️</div>
      <h1 style="font-size:22px;margin:8px 0 4px;color:#0f0e0c;">Reservation Confirmation</h1>
      <p style="font-size:16px;color:#c8a96e;margin:0;font-weight:600;">Pacific Rim Bistro</p>
    </div>
    <p style="font-size:15px;line-height:1.7;color:#333;">${msg}</p>
    <div style="display:flex;gap:16px;justify-content:center;margin:28px 0;flex-wrap:wrap;">
      <a href="${yesUrl}" style="display:inline-block;background:#27ae60;color:#fff;padding:16px 32px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:700;">✅ Yes, I'm Coming!</a>
      <a href="${noUrl}" style="display:inline-block;background:#e74c3c;color:#fff;padding:16px 32px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:700;">❌ No, Please Cancel</a>
    </div>
    <div style="text-align:center;color:#bbb;font-size:12px;border-top:1px solid #eee;padding-top:16px;margin-top:24px;">
      Pacific Rim Bistro · 303 Peachtree Center Ave, Atlanta, GA 30303<br>(404) 893-0018
    </div>
  </div>
</body></html>`,
      });
    }

    const twilioSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioToken = process.env.TWILIO_AUTH_TOKEN;
    if (twilioSid && twilioToken && guestPhone) {
      const digits = guestPhone.replace(/\D/g, '');
      const toPhone = digits.startsWith('1') ? '+' + digits : '+1' + digits;
      const twilioAuth = 'Basic ' + Buffer.from(`${twilioSid}:${twilioToken}`).toString('base64');
      const smsWithLinks = msg + `\n\n✅ Yes: ${shortYes}\n❌ No: ${shortNo}`;
      await fetch(`https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`, {
        method: 'POST',
        headers: { 'Authorization': twilioAuth, 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ MessagingServiceSid: 'MG709e964fc98338d4f2ca08fa20ecaa96', To: toPhone, Body: smsWithLinks }),
      });
    }

    return res.status(200).json({ success: true, type: 'confirmation_request' });
  }
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
  const specialReq  = req.body.specialRequest || '';

  // ── Recipients
  // Admin emails/phones: ALWAYS check Firebase first (source of truth set in Admin →
  // Notification Settings). The client may send a stale/default list if the guest
  // orders before the page's Firebase fetch finishes — Firebase wins over that.
  let resolvedEmails = null;
  let resolvedPhones = null;

  try {
    const { initializeApp, getApps } = await import('firebase/app');
    const { getFirestore, doc, getDoc } = await import('firebase/firestore');
    const fbApp = getApps().length ? getApps()[0] : initializeApp({
      projectId: 'pacific-rim-bistro',
      apiKey: 'AIzaSyChIQ0Z1sM68J6OtgIW82EyWuzys9Oz6tg',
    });
    const db = getFirestore(fbApp);
    const snap = await getDoc(doc(db, 'config', 'notifications'));
    if (snap.exists()) {
      const notifData = JSON.parse(snap.data().data || '{}');
      if (notifData.emails?.length) resolvedEmails = notifData.emails;
      if (notifData.phones?.length) resolvedPhones = notifData.phones;
      console.log('✅ Notif settings loaded from Firebase:', resolvedEmails, resolvedPhones);
    }
  } catch(e) {
    console.warn('Firebase notif settings load failed:', e.message);
  }

  // Client-sent list is only used if Firebase had nothing at all
  if (!resolvedEmails && Array.isArray(notifEmails) && notifEmails.length) resolvedEmails = notifEmails;
  if (!resolvedPhones && Array.isArray(notifPhones) && notifPhones.length) resolvedPhones = notifPhones;

  const adminEmails = resolvedEmails ||
    (process.env.NOTIFY_EMAILS || 'yshahn@gmail.com,ymhahn@gmail.com').split(',').map(e => e.trim()).filter(Boolean);

  const adminPhones = resolvedPhones
    ? resolvedPhones.map(p => { const d = p.replace(/\D/g,''); return d.startsWith('1') ? '+'+d : '+1'+d; })
    : ['+17705008420', '+16788629389'];

  // Guest email/phone
  const guestEmail = customer?.email || null;
  const guestPhone = digits ? (digits.startsWith('1') ? '+' + digits : '+1' + digits) : null;

  // ── Build message content
  let adminSmsText, guestSmsText, adminEmailSubject, adminEmailHtml, guestEmailSubject, guestEmailHtml;

  if (isReservation) {
    // ── RESERVATION
    adminSmsText = `🗓️ New Reservation! — Pacific Rim Bistro\n${customer?.name || 'Guest'} · ${pickup}\n👥 ${orderItems[0]?.name || ''}\n📞 ${phone}\n${special ? '📝 ' + special : ''}`;
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
    const ptsTxt = (parseFloat(pointsDiscount)||0) > 0 ? ` · ✦ -$${parseFloat(pointsDiscount).toFixed(2)} pts` : '';
    const isCurbside = (req.body.pickupType || '') === 'curbside';
    const orderId = req.body.orderId || '';
    const carInfo = [req.body.carColor, req.body.carModel].filter(Boolean).join(' ');
    const curbsideTxt = isCurbside ? ` - CURBSIDE${carInfo ? ' (' + carInfo + ')' : ''}` : '';

    // SMS keeps the full itemized list (per request) but drops emoji and
    // non-GSM-7 characters (—, ·, ✦, etc.). Emoji/special characters force
    // UCS-2 encoding (70 chars/segment instead of 160/153), which was
    // pushing long orders past the carrier's 10-segment limit — AT&T
    // rejected those outright while other carriers happened to let them
    // through. Plain GSM-7 text keeps even large (20+ item) orders safely
    // within that limit.
    // Safety net for unusually large orders: if the full itemized list
    // would push the SMS past a safe length (10-segment GSM-7 limit is
    // ~1530 chars; we cap well under that), show as many items as fit and
    // summarize the rest instead of letting the whole message get rejected.
    function buildSafeItemLines(items, maxChars) {
      const lines = items.map(i => `  - ${i.name} - $${parseFloat(i.price||0).toFixed(2)}`);
      let used = 0, shown = 0;
      for (; shown < lines.length; shown++) {
        used += lines[shown].length + 1;
        if (used > maxChars) break;
      }
      if (shown >= lines.length) return lines.join('\n');
      const remaining = lines.length - shown;
      return lines.slice(0, shown).join('\n') + `\n  ...+${remaining} more item${remaining === 1 ? '' : 's'} (see email for full list)`;
    }

    const adminItemLines = buildSafeItemLines(orderItems, 900);
    const adminPtsTxt = (parseFloat(pointsDiscount)||0) > 0 ? `\n  Rewards: -$${parseFloat(pointsDiscount).toFixed(2)}` : '';
    adminSmsText = [
      `New order - Pacific Rim Bistro`,
      `${customer?.name || 'Guest'} (${phone})`,
      `Pickup: ${pickup}${curbsideTxt}`,
      adminItemLines,
      `${adminPtsTxt ? adminPtsTxt + '\n' : ''}Total: $${(total||0).toFixed(2)}`,
      specialReq ? `Note: ${specialReq}` : '',
    ].filter(Boolean).join('\n');
    const carModelEnc = encodeURIComponent(req.body.carModel || '');
    const carColorEnc = encodeURIComponent(req.body.carColor || '');
    const arrivedLink = isCurbside
      ? `\n\n🚗 Curbside Pickup — tap when you arrive:\nhttps://pacificrimatl.com?arrived=1&order=${encodeURIComponent(orderId)}&carModel=${carModelEnc}&carColor=${carColorEnc}`
      : '';
    const guestItemLines = buildSafeItemLines(orderItems, 900);
    const guestPtsTxt = (parseFloat(pointsDiscount)||0) > 0 ? `  Rewards: -$${parseFloat(pointsDiscount).toFixed(2)}` : '';
    // Same reasoning as adminSmsText above — keep this short regardless of
    // how many items are in the order, so large orders don't get silently
    // dropped by carriers like AT&T. Full item list is in the email.
    guestSmsText = [
      `Order Confirmed - Pacific Rim Bistro`,
      `Hi ${firstName}! Pickup: ${pickup}${curbsideTxt}`,
      guestItemLines,
      guestPtsTxt,
      `Total: $${(total||0).toFixed(2)}`,
      specialReq ? `Note: ${specialReq}` : '',
      `Questions? (404) 893-0018${arrivedLink}`,
    ].filter(Boolean).join('\n');
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

    const pointsDiscountAmt = parseFloat(pointsDiscount) || 0;
    const totalsHtml = `
      <table style="width:100%;font-size:14px;margin-bottom:16px;">
        <tr><td style="padding:4px 0;color:#888;">Subtotal</td><td style="text-align:right;">$${(subtotal||0).toFixed(2)}</td></tr>
        <tr><td style="padding:4px 0;color:#888;">Platform Fee</td><td style="text-align:right;">$1.00</td></tr>
        <tr><td style="padding:4px 0;color:#888;">Tax</td><td style="text-align:right;">$${(tax||0).toFixed(2)}</td></tr>
        ${tip ? `<tr><td style="padding:4px 0;color:#888;">Tip</td><td style="text-align:right;">$${Number(tip).toFixed(2)}</td></tr>` : ''}
        ${pointsDiscountAmt > 0 ? `<tr><td style="padding:4px 0;color:#27ae60;">✦ Reward Points Discount</td><td style="text-align:right;color:#27ae60;">−$${pointsDiscountAmt.toFixed(2)}</td></tr>` : ''}
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
  console.log('Sending admin email to:', adminEmails);
  try {
    results.emailAdmin = await sendEmail({
      to: adminEmails,
      subject: adminEmailSubject,
      html: adminEmailHtml,
    });
  } catch(e) { console.error('Admin email error:', e); }

  // ── Send Guest Confirmation Email
  console.log('Guest email:', guestEmail);
  if (guestEmail) {
    try {
      results.emailGuest = await sendEmail({
        to: guestEmail,
        subject: guestEmailSubject,
        html: guestEmailHtml,
      });
    } catch(e) { console.error('Guest email error:', e); }
  } else {
    console.log('No guest email — skipping guest email send');
  }

  // ── Send SMS via Twilio ──
  const twilioSid   = process.env.TWILIO_ACCOUNT_SID;
  const twilioToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioFrom  = process.env.TWILIO_FROM_PHONE;

  console.log('Twilio check:', !!twilioSid, !!twilioToken, !!twilioFrom);

  if (twilioSid && twilioToken && twilioFrom) {
    const twilioAuth = 'Basic ' + Buffer.from(`${twilioSid}:${twilioToken}`).toString('base64');
    const twilioUrl  = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`;

    // Admin SMS
    for (const toPhone of adminPhones) {
      try {
        const r = await fetch(twilioUrl, {
          method: 'POST',
          headers: { 'Authorization': twilioAuth, 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ MessagingServiceSid: 'MG709e964fc98338d4f2ca08fa20ecaa96', To: toPhone, Body: adminSmsText }),
        });
        const d = await r.json().catch(() => ({}));
        console.log('Admin SMS:', r.status, d.sid || d.message || '');
        results.smsAdmin.push({ to: toPhone, ok: r.ok });
      } catch(e) { console.error('Admin SMS error:', e); }
    }

    // Guest SMS
    if (guestPhone && guestPhone !== '—' && req.body.guestSmsConsent) {
      try {
        const r = await fetch(twilioUrl, {
          method: 'POST',
          headers: { 'Authorization': twilioAuth, 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ MessagingServiceSid: 'MG709e964fc98338d4f2ca08fa20ecaa96', To: guestPhone, Body: guestSmsText }),
        });
        const d = await r.json().catch(() => ({}));
        console.log('Guest SMS:', r.status, d.sid || d.message || '');
        results.smsGuest = r.ok;
      } catch(e) { console.error('Guest SMS error:', e); }
    }
  } else {
    console.warn('Twilio env vars missing — SMS skipped');
  }

  // ── Send Admin Push Notification (free, no SMS cost) ──
  try {
    const { sendAdminPush } = require('../lib/push');
    const pushTitle = isReservation ? '🗓️ New Reservation' : '📦 New Order';
    const pushBody  = `${customer?.name || 'Guest'} · ${pickup || ''}`.trim();
    await sendAdminPush({ title: pushTitle, body: pushBody, url: '/pages/admin.html' });
  } catch(e) { console.warn('Admin push error (non-fatal):', e.message); }

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
    </div>
    ${pickupType === 'curbside' ? `
    <div style="text-align:center;margin-bottom:20px;">
      <p style="font-size:13px;color:#555;margin-bottom:12px;">🚗 When you arrive, tap the button below and we'll bring your order out!</p>
      <a href="https://pacificrimatl.com?arrived=1&order=${orderId}&carModel=${encodeURIComponent(carModel)}&carColor=${encodeURIComponent(carColor)}"
        style="display:inline-block;background:#1a1410;color:#c8a96e;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:600;font-size:15px;letter-spacing:0.03em;">
        🚗 I Have Arrived!
      </a>
    </div>` : ''}` : ''}
    <div style="text-align:center;color:#bbb;font-size:12px;border-top:1px solid #eee;padding-top:16px;">
      Pacific Rim Bistro · 303 Peachtree Center Ave, Atlanta, GA 30303<br>
      (404) 893-0018 · pacificrimbistro@gmail.com
    </div>
  </div>
</body></html>`;
}
