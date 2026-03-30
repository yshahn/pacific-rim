// ─────────────────────────────────────────
// Firebase Menu Sync for Pacific Rim Bistro
// ─────────────────────────────────────────
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getFirestore, doc, getDoc, setDoc, onSnapshot }
  from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey:            'AIzaSyChIQ0Z1sM68J6OtgIW82EyWuzys9Oz6tg',
  authDomain:        'pacific-rim-bistro.firebaseapp.com',
  projectId:         'pacific-rim-bistro',
  storageBucket:     'pacific-rim-bistro.firebasestorage.app',
  messagingSenderId: '855085279043',
  appId:             '1:855085279043:web:7e0b1db10cedf7e50b71f6',
};

const firebaseApp = initializeApp(firebaseConfig);
const db          = getFirestore(firebaseApp);
const MENU_DOC    = doc(db, 'config', 'menu');

// ── Load menu from Firestore (called from guest app)
export async function loadMenuFromFirebase() {
  try {
    const snap = await getDoc(MENU_DOC);
    if (snap.exists()) {
      const parsed = JSON.parse(snap.data().data);
      localStorage.setItem('prb_menu_data', JSON.stringify(parsed));
      localStorage.setItem('prb_menu_version', snap.data().version || 'v1');
      return parsed;
    }
  } catch(e) {
    console.error('Firebase load error:', e);
  }
  return null;
}

// ── Save menu to Firestore (called from Admin OR on first load)
export async function saveMenuToFirebase(menuByCategory, version) {
  try {
    await setDoc(MENU_DOC, {
      data: JSON.stringify(menuByCategory),
      version: version || 'v1',
      updatedAt: Date.now()
    });
    console.log('✅ Menu saved to Firebase');
    return true;
  } catch(e) {
    console.error('Firebase save error:', e);
    return false;
  }
}

// ── Listen for real-time menu updates (guest app)
export function listenMenuUpdates(callback) {
  return onSnapshot(MENU_DOC, snap => {
    if (snap.exists()) {
      try {
        const parsed = JSON.parse(snap.data().data);
        localStorage.setItem('prb_menu_data', JSON.stringify(parsed));
        callback(parsed);
      } catch(e) {}
    }
  });
}
