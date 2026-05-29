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
export { db };

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
    const now = Date.now();
    const menuJson = JSON.stringify(menuByCategory);
    const totalItems = Object.values(menuByCategory).reduce((s, v) => s + v.length, 0);

    // 1. Save main menu doc
    await setDoc(MENU_DOC, {
      data: menuJson,
      version: version || 'v1',
      updatedAt: now,
      itemCount: totalItems,
    });

    console.log(`✅ Menu saved: ${totalItems} items`);
    return true;
  } catch(e) {
    console.error('Firebase save error:', e);
    return false;
  }
}

// ── Load menu backups list from Firestore
export async function loadMenuBackups() {
  try {
    const backupsCol = collection(db, 'menu_backups');
    const q = query(backupsCol, orderBy('savedAt', 'desc'), limit(10));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch(e) {
    console.error('Backup load error:', e);
    return [];
  }
}

// ── Restore menu from a specific backup
export async function restoreMenuFromBackup(backupId) {
  try {
    const backupsCol = collection(db, 'menu_backups');
    const backupDoc = doc(db, 'menu_backups', backupId);
    const snap = await getDoc(backupDoc);
    if (!snap.exists()) return null;
    const data = JSON.parse(snap.data().data);
    // Save as current menu
    await setDoc(MENU_DOC, {
      data: JSON.stringify(data),
      version: 'restored',
      updatedAt: Date.now(),
      itemCount: Object.values(data).reduce((s, v) => s + v.length, 0),
    });
    return data;
  } catch(e) {
    console.error('Restore error:', e);
    return null;
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

// ── Save points to Firestore (fast, separate from full profile)
export async function savePointsToFirebase(email, points, pointsLog, tierPoints) {
  if (!email) return false;
  try {
    const key = email.replace(/[.@]/g, '_');
    const profileDoc = doc(db, 'profiles', key);
    await setDoc(profileDoc, {
      points: points || 0,
      pointsLog: pointsLog || [],
      tierPoints: tierPoints || 0,
      pointsUpdatedAt: Date.now(),
    }, { merge: true });
    return true;
  } catch(e) {
    console.error('Firebase points save error:', e);
    return false;
  }
}

// ── Load points from Firestore
export async function loadPointsFromFirebase(email) {
  if (!email) return null;
  try {
    const key = email.replace(/[.@]/g, '_');
    const profileDoc = doc(db, 'profiles', key);
    const snap = await getDoc(profileDoc);
    if (snap.exists()) {
      const data = snap.data();
      return {
        points: data.points || 0,
        pointsLog: data.pointsLog || [],
        tierPoints: data.tierPoints || 0,
      };
    }
  } catch(e) {
    console.error('Firebase points load error:', e);
  }
  return null;
}

// ── Save user profile to Firestore (keyed by email)
export async function saveProfileToFirebase(profile) {
  if (!profile?.email) return false;
  try {
    const key = profile.email.replace(/[.@]/g, '_');
    const profileDoc = doc(db, 'profiles', key);
    // Explicitly exclude points fields — those are managed by savePointsToFirebase only
    const { points, pointsLog, tierPoints, ...profileData } = profile;
    await setDoc(profileDoc, { ...profileData, updatedAt: Date.now() }, { merge: true });
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

// ── Load ALL members from Firestore (admin use)
export async function loadAllMembersFromFirebase() {
  try {
    const profilesCol = collection(db, 'profiles');
    const snap = await getDocs(profilesCol);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch(e) {
    console.error('Firebase members load error:', e);
    return [];
  }
}

// ── Save menu sections config to Firestore
export async function saveSectionsToFirebase(sections) {
  try {
    const secDoc = doc(db, 'config', 'sections');
    await setDoc(secDoc, { data: JSON.stringify(sections), updatedAt: Date.now() });
    return true;
  } catch(e) {
    console.error('Firebase sections save error:', e);
    return false;
  }
}

// ── Save notification settings to Firestore
export async function saveNotifSettingsToFirebase(settings) {
  try {
    const notifDoc = doc(db, 'config', 'notifications');
    await setDoc(notifDoc, { data: JSON.stringify(settings), updatedAt: Date.now() });
    return true;
  } catch(e) { console.error('Notif settings save error:', e); return false; }
}

// ── Load notification settings from Firestore
export async function loadNotifSettingsFromFirebase() {
  try {
    const notifDoc = doc(db, 'config', 'notifications');
    const snap = await getDoc(notifDoc);
    if (snap.exists()) return JSON.parse(snap.data().data);
  } catch(e) { console.error('Notif settings load error:', e); }
  return null;
}

// ── Save categories config to Firestore
export async function saveCategoriesToFirebase(categories) {
  try {
    const catDoc = doc(db, 'config', 'categories');
    await setDoc(catDoc, { data: JSON.stringify(categories), updatedAt: Date.now() });
    return true;
  } catch(e) { console.error('Firebase categories save error:', e); return false; }
}

// ── Load categories config from Firestore
export async function loadCategoriesFromFirebase() {
  try {
    const catDoc = doc(db, 'config', 'categories');
    const snap = await getDoc(catDoc);
    if (snap.exists()) return JSON.parse(snap.data().data);
  } catch(e) { console.error('Firebase categories load error:', e); }
  return null;
}

// ── Load menu sections config from Firestore
export async function loadSectionsFromFirebase() {
  try {
    const secDoc = doc(db, 'config', 'sections');
    const snap = await getDoc(secDoc);
    if (snap.exists()) return JSON.parse(snap.data().data);
  } catch(e) {
    console.error('Firebase sections load error:', e);
  }
  return null;
}
