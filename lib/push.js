// api/_push.js
// Shared helper for sending admin push notifications via Firebase Cloud
// Messaging. Used by notify-order.js (new orders/reservations) and
// reservation-response.js (guest Yes/No responses).

let _adminApp = null;

function getAdminApp() {
  if (_adminApp) return _adminApp;
  const admin = require('firebase-admin');
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;
  let serviceAccount;
  try {
    serviceAccount = JSON.parse(raw);
  } catch(e) {
    console.warn('FIREBASE_SERVICE_ACCOUNT_JSON is not valid JSON:', e.message);
    return null;
  }
  if (!admin.apps.length) {
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
  }
  _adminApp = admin;
  return admin;
}

// Sends a push notification to every registered admin device. Silently does
// nothing if push isn't configured (no service account) — orders/reservations
// still work fine via email/SMS either way, push is a bonus channel.
async function sendAdminPush({ title, body, url }) {
  try {
    const admin = getAdminApp();
    if (!admin) return; // Push not configured — not an error, just skip.

    const { getFirestore } = require('firebase-admin/firestore');
    const db = getFirestore();
    const snap = await db.collection('adminPushTokens').get();
    if (snap.empty) return;

    const tokens = snap.docs.map(d => d.id);
    const message = {
      notification: { title, body },
      data: { url: url || '/pages/admin.html' },
      tokens,
    };

    const resp = await admin.messaging().sendEachForMulticast(message);

    // Clean up any tokens that are no longer valid (uninstalled, expired,
    // permission revoked, etc.) so the token list doesn't grow stale forever.
    const staleTokens = [];
    resp.responses.forEach((r, i) => {
      if (!r.success) {
        const code = r.error?.code || '';
        if (code.includes('registration-token-not-registered') || code.includes('invalid-argument')) {
          staleTokens.push(tokens[i]);
        }
      }
    });
    if (staleTokens.length) {
      await Promise.all(staleTokens.map(t => db.collection('adminPushTokens').doc(t).delete().catch(() => {})));
    }
  } catch(e) {
    console.warn('Admin push send failed (non-fatal):', e.message);
  }
}

module.exports = { sendAdminPush };
