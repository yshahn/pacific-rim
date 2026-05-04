// ─────────────────────────────────────────
// Firebase Menu Sync for Pacific Rim Bistro
// ─────────────────────────────────────────
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getFirestore, doc, getDoc, setDoc, onSnapshot, collection, addDoc, getDocs, orderBy, query, limit }
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

// ── Load menu from Firestore
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

// ── Save menu to Firestore
export async function saveMenuToFirebase(menuByCategory, version) {
  try {
    await setDoc(MENU_DOC, {
      data: JSON.stringify(menuByCategory),
      version: version || 'v1',
      updatedAt: Date.now()
    });
    return true;
  } catch(e) {
    console.error('Firebase save error:', e);
    return false;
  }
}

// ── Listen for real-time menu updates
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

// ── Save order to Firestore
export async function saveOrderToFirebase(orderData) {
  try {
    const ordersCol = collection(db, 'orders');
    await addDoc(ordersCol, { ...orderData, createdAt: Date.now() });
    return true;
  } catch(e) {
    console.error('Firebase order save error:', e);
    return false;
  }
}

// ── Load orders from Firestore
export async function loadOrdersFromFirebase(limitCount = 50) {
  try {
    const ordersCol = collection(db, 'orders');
    const q = query(ordersCol, orderBy('createdAt', 'desc'), limit(limitCount));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch(e) {
    console.error('Firebase orders load error:', e);
    return [];
  }
}

// ── Listen for real-time order updates
export function listenOrders(callback) {
  const ordersCol = collection(db, 'orders');
  const q = query(ordersCol, orderBy('createdAt', 'desc'), limit(50));
  return onSnapshot(q, snap => {
    callback(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  });
}

// ── Save reservation to Firestore
export async function saveReservationToFirebase(resData) {
  try {
    const resCol = collection(db, 'reservations');
    await addDoc(resCol, { ...resData, createdAt: Date.now() });
    return true;
  } catch(e) {
    console.error('Firebase reservation save error:', e);
    return false;
  }
}

// ── Load reservations from Firestore
export async function loadReservationsFromFirebase(limitCount = 100) {
  try {
    const resCol = collection(db, 'reservations');
    const q = query(resCol, orderBy('createdAt', 'desc'), limit(limitCount));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch(e) {
    console.error('Firebase reservations load error:', e);
    return [];
  }
}

// ── Save user profile to Firestore (keyed by email)
export async function saveProfileToFirebase(profile) {
  if (!profile?.email) return false;
  try {
    const key = profile.email.replace(/[.@]/g, '_');
    const profileDoc = doc(db, 'profiles', key);
    await setDoc(profileDoc, { ...profile, updatedAt: Date.now() }, { merge: true });
    return true;
  } catch(e) {
    console.error('Firebase profile save error:', e);
    return false;
  }
}

// ── Save Today's Picks to Firestore
export async function savePicksToFirebase(picks) {
  try {
    const picksDoc = doc(db, 'config', 'picks');
    await setDoc(picksDoc, { data: JSON.stringify(picks), updatedAt: Date.now() });
    return true;
  } catch(e) {
    console.error('Firebase picks save error:', e);
    return false;
  }
}

// ── Load Today's Picks from Firestore
export async function loadPicksFromFirebase() {
  try {
    const picksDoc = doc(db, 'config', 'picks');
    const snap = await getDoc(picksDoc);
    if (snap.exists()) return JSON.parse(snap.data().data);
  } catch(e) {
    console.error('Firebase picks load error:', e);
  }
  return null;
}

// ── Load user profile from Firestore
export async function loadProfileFromFirebase(email) {
  if (!email) return null;
  try {
    const key = email.replace(/[.@]/g, '_');
    const profileDoc = doc(db, 'profiles', key);
    const snap = await getDoc(profileDoc);
    if (snap.exists()) return snap.data();
  } catch(e) {
    console.error('Firebase profile load error:', e);
  }
  return null;
}
