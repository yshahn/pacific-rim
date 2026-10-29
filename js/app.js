// ── MENU DATA (Hsu's Gourmet — Official Menu)
const menuData = {
  // ─────────── LUNCH ───────────
  lunch: [
    // ── APPETIZERS
    { e:'🌯', n:'Spring Rolls (2)', d:'Ground pork and shrimp wrapped in Shanghai style egg roll wrapper and fried to perfection', p:7.95, img:null, subcat:'apps' },
    { e:'🥬', n:'Vegetable Spring Rolls (2)', d:'', p:5.95, img:null, subcat:'apps' },
    { e:'🥟', n:'Shantung Dumplings (4)', d:'Choice of Steamed or Grilled · Pork dumplings with minced vegetables · Served with ginger soy vinaigrette dipping sauce', p:8.95, img:null, subcat:'apps' },
    { e:'🥟', n:'Fried Chicken Dumplings (4)', d:'', p:8.95, img:null, subcat:'apps' },
    { e:'🥟', n:'Vegetable Steamed Dumplings (4)', d:'', p:8.95, img:null, subcat:'apps' },
    { e:'🍢', n:'Beef Satay (4)', d:'', p:9.95, img:null, subcat:'apps' },
    { e:'🦀', n:'Crab Angels (4)', d:'', p:8.95, img:null, subcat:'apps' },
    { e:'🦑', n:'Fried Calamari', d:'Served with Chef\'s special dipping sauce', p:10.95, img:null, subcat:'apps' },
    // ── SOUP
    { e:'🍜', n:'Wonton Soup', d:'Shrimp & pork', p:5.95, img:null, subcat:'soups' },
    { e:'🥣', n:'Hot & Sour Soup', d:'Shrimp & pork', p:5.95, img:null, subcat:'soups' },
    { e:'🥣', n:'Egg Drop Soup', d:'', p:5.95, img:null, subcat:'soups' },
    // ── NOODLES & RICE
    { e:'🍜', n:'House Special Lomein', d:'Shrimp, beef, and chicken with soft egg noodles', p:15.95, img:null, subcat:'noodles' },
    { e:'🍜', n:'Shrimp Lomein', d:'', p:15.95, img:null, subcat:'noodles' },
    { e:'🍜', n:'Chicken Lomein', d:'', p:14.95, img:null, subcat:'noodles' },
    { e:'🍜', n:'Vegetable Lomein', d:'', p:14.95, img:null, subcat:'noodles' },
    { e:'🍜', n:"Spicy Anna's Seafood Noodle Soup", d:'Jjambbong!! Shrimp, scallop and chicken in hearty spicy soup with egg noodles', p:16.95, img:null, subcat:'noodles' },
    { e:'🍜', n:'Shantung Black Noodles Jajangmyeon', d:'', p:16.95, img:null, subcat:'noodles' },
    { e:'🍜', n:'Pan Fried Hong Kong Noodles', d:'', p:16.95, img:null, subcat:'noodles' },
    { e:'🍚', n:'Vegetable Fried Rice', d:'', p:13.95, img:null, subcat:'noodles' },
    { e:'🍚', n:'Chicken Fried Rice', d:'', p:13.95, img:null, subcat:'noodles' },
    { e:'🍚', n:'Shrimp Fried Rice', d:'', p:15.95, img:null, subcat:'noodles' },
    { e:'🍚', n:'Combination Fried Rice', d:'', p:15.95, img:null, subcat:'noodles' },
    // ── ENTREES
    { e:'🍛', n:'Curry Chicken', d:'', p:14.95, img:null, subcat:'entrees' },
    { e:'🌿', n:'Spicy Basil Chicken', d:'Sliced tender chicken sautéed with onion, pepper, carrot, and fresh basil leaves', p:15.95, img:null, subcat:'entrees' },
    { e:'🌶️', n:'Hot Pepper Chicken', d:'Fried dark meat with vegetables in a Szechuan style spicy sauce', p:14.95, img:null, subcat:'entrees' },
    { e:'🍗', n:"General Tsu's Favorite Chicken", d:'', p:14.95, img:null, subcat:'entrees' },
    { e:'🍋', n:'Lemon Chicken', d:'White meat', p:14.95, img:null, subcat:'entrees' },
    { e:'🍗', n:'Fried Sesame Chicken', d:'', p:14.95, img:null, subcat:'entrees' },
    { e:'🥦', n:'String Beans Szechwan Style with Ground Pork', d:'', p:14.95, img:null, subcat:'entrees' },
    { e:'🥦', n:'String Beans Szechwan Style with Chicken', d:'', p:14.95, img:null, subcat:'entrees' },
    { e:'🦐', n:'String Beans Szechwan Style with Shrimp', d:'', p:16.95, img:null, subcat:'entrees' },
    { e:'🥩', n:'Spicy Basil Beef', d:'Sliced tender beef marinated in seven spices and wok-tossed with fresh Thai basil leaves · Served with snow peas, carrots and mushroom', p:17.95, img:null, subcat:'entrees' },
    { e:'🥩', n:'Mongolian Beef', d:'', p:17.95, img:null, subcat:'entrees' },
    { e:'🥩', n:'Beef with Broccoli', d:'', p:17.95, img:null, subcat:'entrees' },
    { e:'🦐', n:'Shrimp with Light Garlic Sauce', d:'', p:16.95, img:null, subcat:'entrees' },
    { e:'🥑', n:'Avocado Shrimp', d:'', p:16.95, img:null, subcat:'entrees' },
    { e:'🥦', n:'Asparagus with Black Bean Sauce with Shrimp', d:'Cantonese classic', p:16.95, img:null, subcat:'entrees' },
    { e:'🥦', n:'Asparagus with Black Bean Sauce with Chicken', d:'Cantonese classic', p:14.95, img:null, subcat:'entrees' },
    { e:'🦐', n:'Walnut Shrimp', d:'Crispy shrimp wok-tossed with honey-coated walnuts in a lemon aioli sauce', p:16.95, img:null, subcat:'entrees' },
    { e:'🐟', n:'Grilled Fresh Salmon Filet', d:'', p:19.95, img:null, subcat:'entrees' },
    { e:'🦐', n:'Salt & Pepper Shrimp', d:'', p:16.95, img:null, subcat:'entrees' },
    { e:'🐟', n:'Fresh Chilean Sea Bass', d:'Steamed Hong Kong style with Chinese vegetables', p:0, img:null, subcat:'entrees' },
    { e:'🦪', n:'Sea Scallop in Black Pepper Sauce', d:"This diver's select large sea scallop is full of flavor and raised up a notch with black pepper sauce", p:26.95, img:null, subcat:'entrees' },
    { e:'🌿', n:'Mixed Vegetables with Fried Tofu', d:'', p:14.95, img:null, subcat:'entrees' },
    { e:'🌿', n:"General Tsu's Tofu with Broccoli", d:'', p:14.95, img:null, subcat:'entrees' },
    // ── COMBINATION
    { e:'🍱', n:'Imperial Chicken', d:'Complete with steamed rice or fried rice, egg drop soup and crab angel · No substitution please', p:15.95, img:null, subcat:'combo' },
    { e:'🍱', n:'Sweet & Sour Chicken', d:'Complete with steamed rice or fried rice, egg drop soup and crab angel · No substitution please', p:15.95, img:null, subcat:'combo' },
    { e:'🍱', n:'Chicken with Mixed Vegetables', d:'Complete with steamed rice or fried rice, egg drop soup and crab angel · No substitution please', p:15.95, img:null, subcat:'combo' },
    { e:'🍱', n:'Chicken with Broccoli', d:'Complete with steamed rice or fried rice, egg drop soup and crab angel · No substitution please', p:15.95, img:null, subcat:'combo' },
    // ── BEVERAGES
    { e:'☕', n:'Coffee', d:'Regular or decaf', p:3.95, img:null, subcat:'beverages' },
    { e:'🍵', n:'Jasmine Tea', d:'', p:3.95, img:null, subcat:'beverages' },
    { e:'🧊', n:'Sweet Iced Tea', d:'', p:3.95, img:null, subcat:'beverages' },
    { e:'🧊', n:'Unsweet Iced Tea', d:'', p:3.95, img:null, subcat:'beverages' },
    { e:'🥤', n:'Soft Drinks', d:'', p:3.95, img:null, subcat:'beverages' },
  ],

  // ─────────── APPETIZERS (Dinner) ───────────
  appetizers: [
    { e:'🌯', n:'Spring Rolls (2)', d:'Ground pork and shrimp wrapped in Shanghai style egg roll wrapper and fried to perfection', p:10.95, img:null },
    { e:'🥬', n:'Vegetable Spring Rolls (2)', d:'', p:9.95, img:null },
    { e:'🍢', n:'Beef Satay (6)', d:'香煎牛肉串', p:15.95, img:null },
    { e:'🦀', n:'Crab Angels (6)', d:'蟹角', p:13.95, img:null },
    { e:'🥬', n:'Stuffed Lettuce (2)', d:'Ground pork with minced vegetables served in lettuce cups · A Hong Kong classic · Extra lettuce $1.00 each', p:13.95, img:null },
    { e:'🥬', n:'Vegetarian Stuffed Lettuce (2)', d:'Minced vegetables served in lettuce cups · A Hong Kong classic · Extra lettuce $1.00 each', p:13.95, img:null },
    { e:'🥟', n:'Shantung Dumplings (6)', d:'Steamed or Grilled pork dumplings with minced vegetables · Served with a soy vinaigrette dipping sauce with ginger', p:13.95, img:null },
    { e:'🥟', n:'Fried Chicken Dumplings (6)', d:'雞肉餃子', p:13.95, img:null },
    { e:'🥟', n:'Vegetable Steamed Dumplings (6)', d:'蔬菜餃子 · Please allow 10 minutes', p:13.95, img:null },
    { e:'🦐', n:'Steamed Shrimp Dumplings (6)', d:'Dumpling skin filled with shrimp, Hong Kong style · 港式蝦餃', p:14.95, img:null },
    { e:'🦑', n:'Fried Calamari', d:'Served with the chef\'s special dipping sauce · 椒鹽鮮魷', p:15.95, img:null },
    { e:'🍖', n:'BBQ Baby Back Pork Ribs', d:'Cantonese Style, served with cabbage slaw · 中式焗小排骨', p:18.95, img:null },
  ],

  // ─────────── SOUP (Dinner) ───────────
  soups: [
    { e:'🍜', n:'Won Ton Soup', d:'Pork and shrimp · 雲吞湯', p:6.95, img:null },
    { e:'🌽', n:'Chicken Corn Soup', d:'雞蓉玉米湯', p:6.95, img:null },
    { e:'🥣', n:'Seafood Hot and Sour Soup', d:'Shrimp and scallops in this classic favorite · 海鮮酸辣羹', p:8.95, img:null },
    { e:'🦐', n:'San Shan Soup', d:'Shrimp, scallop and vegetables · 海鮮湯', p:8.95, img:null },
  ],

  // ─────────── NOODLES, RICE & VEGETABLES ───────────
  noodles: [
    { e:'🍜', n:'House Special Lomein', d:'Shrimp, beef, and chicken with soft egg noodles · 什錦撈麵', p:20.95, img:null },
    { e:'🍜', n:"Spicy Anna's Seafood Noodle Soup (Jiambbong)", d:'Shrimp, scallops, and chicken in hearty spicy soup with egg noodles · 山東炒馬湯麵', p:24.95, img:null },
    { e:'🍜', n:'Pan Fried Noodle, Hong Kong Style', d:'Shrimp, chicken, and vegetables over crispy angel hair like noodles · 什錦兩面黃', p:24.95, img:null },
    { e:'🍚', n:'Combination Fried Rice', d:'Shrimp, chicken, and beef · 什錦炒飯', p:19.95, img:null },
    { e:'🍚', n:'Pineapple Fried Rice', d:'With shrimp and pork · 叉燒菠蘿蝦炒飯', p:19.95, img:null },
    { e:'🌿', n:"Monk's Delight", d:'素什錦', p:22.95, img:null },
    { e:'🥢', n:'Fried Tofu with Mixed Vegetables', d:'時菜豆腐', p:22.95, img:null },
    { e:'🥦', n:"General Tsu's Tofu with Broccoli", d:'左宗棠豆腐', p:22.95, img:null },
    { e:'🥬', n:'Seasonal Chinese Vegetables', d:'新鮮時菜', p:0, img:null },
  ],

  // ─────────── ENTREES (Dinner) ───────────
  entrees: [
    { e:'🍗', n:"General Tsu's Favorite Chicken", d:'左宗棠雞', p:23.95, img:null },
    { e:'🥦', n:'String Beans Szechwan Style with Ground Pork', d:'干煸四季豆 · 肉碎', p:23.95, img:null },
    { e:'🥦', n:'String Beans Szechwan Style with Chicken', d:'干煸四季豆 · 雞片', p:23.95, img:null },
    { e:'🦐', n:'String Beans Szechwan Style with Shrimp', d:'干煸四季豆 · 蝦球', p:27.95, img:null },
    { e:'🥦', n:'Asparagus Black Bean Sauce with Chicken', d:'Cantonese Classic · 豉汁蘆筍 · 雞片', p:23.95, img:null },
    { e:'🦐', n:'Asparagus Black Bean Sauce with Shrimp', d:'Cantonese Classic · 豉汁蘆筍 · 蝦球', p:27.95, img:null },
    { e:'🦆', n:'Peking Duck (3 Courses)', d:'The house signature dish presented in 3 courses: soup, crispy skin in Chinese crepe, and grilled duck meat in honey soy sauce · 北京鴨(三吃)', p:95.95, img:null },
    { e:'🍛', n:'Curry Chicken', d:'Thick slices of white meat chicken in a coconut smoothened yellow curry sauce · 咖哩雞片', p:23.95, img:null },
    { e:'🍗', n:'Fried Sesame Chicken', d:'芝麻雞', p:23.95, img:null },
    { e:'🥦', n:'Chicken with Broccoli', d:'芥藍雞', p:23.95, img:null },
    { e:'🌿', n:'Spicy Basil Chicken', d:'Sliced tender chicken sautéed with onion, pepper, carrot, and fresh basil leaves · 香葉雞片', p:24.95, img:null },
    { e:'🥩', n:'Mongolian Beef', d:'蒙古牛肉', p:28.95, img:null },
    { e:'🌿', n:'Spicy Basil Beef', d:'Sliced tender beef marinated in 7 spices and wok-tossed with fresh basil leaves · Served with snow peas and mushroom · 香葉牛肉', p:28.95, img:null },
    { e:'🥩', n:'Wok Charred Beef Medallion', d:'In Black Pepper Corn Sauce · 黑椒牛柳', p:37.95, img:null },
    { e:'🐷', n:'Pork Medallion, Peking Style', d:'Tender center cut pork loins served with a sweet pungent sauce · A classic Mandarin Style · 京都豬扒', p:24.95, img:null },
    { e:'🦐', n:'Walnut Shrimp', d:'Crispy shrimp wok-tossed with honey-coated walnuts in a lemon aioli sauce · 核桃蝦球', p:27.95, img:null },
    { e:'🦐', n:'Salt & Pepper Shrimp', d:'Wok-tossed shrimp in salt & pepper, five-spice, with jalapeño · 椒鹽蝦球', p:27.95, img:null },
    { e:'🥑', n:'Avocado Shrimp', d:'Shrimp sautéed with fresh avocado and vegetables · 牛油果蝦球', p:27.95, img:null },
    { e:'🦐', n:'Jumbo Shrimp with Ginger & Scallion', d:'薑蔥爆大蝦', p:34.95, img:null },
    { e:'🦐', n:'Jumbo Shrimp with X.O. Sauce', d:'This classic X.O. sauce is the prestigious Hong Kong Jockey Club\'s favorite · X.O.醬爆大蝦', p:38.95, img:null },
    { e:'🦪', n:'Sea Scallop in Black Pepper Sauce', d:"This dry pack of diver's select large sea scallop is full of flavor and raised up a notch with black pepper sauce · 黑椒鮮帶子", p:37.95, img:null },
    { e:'🐟', n:'Grilled Salmon with Ginger & Scallion Sauce', d:'薑蔥三文魚', p:32.95, img:null },
    { e:'🐟', n:'Sautéed Salmon over Fresh Bok Choy with Black Pepper Corn Sauce', d:'黑椒三文魚', p:32.95, img:null },
    { e:'🐟', n:'Chilean Sea Bass', d:'Steamed Hong Kong style · Serve with Chinese seasonal vegetables · 清蒸鱈魚片', p:0, img:null },
    { e:'🐠', n:'Whole Fish of the Day', d:'Steamed or Fried with ginger and scallion sauce, or sweet and sour sauce · 是日海上鮮', p:0, img:null },
  ],

  // ─────────── SIDES ───────────
  sides: [
    { e:'🍚', n:'Fried Rice', d:'炒飯', p:5.00, img:null },
    { e:'🌶️', n:'Kim Chi', d:'韓國泡菜', p:5.00, img:null },
    { e:'🥬', n:'Vegetable Plate', d:'蔬菜小炒', p:13.95, img:null },
  ],

  // ─────────── BEVERAGES ───────────
  drinks: [
    { e:'☕', n:'Coffee', d:'Regular or decaf', p:3.95, img:null },
    { e:'🍵', n:'Jasmine Tea', d:'', p:3.95, img:null },
    { e:'🧊', n:'Sweet Iced Tea', d:'', p:3.95, img:null },
    { e:'🧊', n:'Unsweet Iced Tea', d:'', p:3.95, img:null },
    { e:'🥤', n:'Soft Drinks', d:'', p:3.95, img:null },
  ],
};

// ── CART STATE
let cart = [];

// ═════════════════════════════════
// GROUP ORDERS — split one order across guests
// ═════════════════════════════════
// Each cart entry carries a `guest` number (1, 2, 3 …). Payment is still ONE
// checkout; the guest numbers only change how the order is itemized (cart,
// checkout, confirmation emails/texts, admin, receipt). A single-guest order
// behaves exactly as before: every entry is simply guest 1.
let currentGuest = 1;   // guest that newly added items are assigned to
let guestTotal = 1;     // number of guest groups (the last one may still be empty)

// BEGIN-GROUP-HELPERS
function cartGuest(item) { return parseInt(item && item.guest) || 1; }
function guestItemCount(g) { return cart.filter(i => cartGuest(i) === g).length; }
function activeGuestCount() { return new Set(cart.map(cartGuest)).size; }
function findLastCartIndex(pred) {
  for (let i = cart.length - 1; i >= 0; i--) { if (pred(cart[i])) return i; }
  return -1;
}
function resetGuests() { currentGuest = 1; guestTotal = 1; renderGuestBar(); }

// Keeps guest numbers contiguous (1..n). A guest whose items were all removed
// disappears and the guests after it shift down — except a trailing EMPTY guest
// (the one just added, waiting for its first item), which is kept.
function normalizeGuests() {
  if (cart.length === 0) { currentGuest = 1; guestTotal = 1; return; }
  let maxG = Math.max(guestTotal, currentGuest);
  cart.forEach(i => { if (cartGuest(i) > maxG) maxG = cartGuest(i); });
  const counts = new Array(maxG + 1).fill(0);
  cart.forEach(i => { counts[cartGuest(i)]++; });
  const map = {};
  let n = 0;
  for (let g = 1; g <= maxG; g++) {
    if (counts[g] > 0 || g === maxG) map[g] = ++n;
  }
  let newCurrent = map[currentGuest];
  if (newCurrent === undefined) {
    newCurrent = n;
    for (let g = currentGuest + 1; g <= maxG; g++) {
      if (map[g] !== undefined) { newCurrent = map[g]; break; }
    }
  }
  cart.forEach(i => { i.guest = map[cartGuest(i)]; });
  guestTotal = n;
  currentGuest = newCurrent;
}

function addGuest() {
  if (cart.length === 0) return;
  normalizeGuests();
  if (guestItemCount(guestTotal) === 0) {
    // The last guest has no items yet — don't pile up empty guests.
    if (currentGuest === guestTotal) {
      if (typeof showToastMsg === 'function') showToastMsg('Add an item for Guest ' + guestTotal + ' first');
      return;
    }
    currentGuest = guestTotal;
  } else {
    guestTotal += 1;
    currentGuest = guestTotal;
  }
  renderGuestBar();
  refreshMenuForGuest();
}

function selectGuest(g) {
  if (g === currentGuest) return;
  currentGuest = g;
  renderGuestBar();
  refreshMenuForGuest();
}
// END-GROUP-HELPERS

// The menu's "✓ 2" / quantity badges count the CURRENT guest's items only, so
// switching guests has to redraw the menu (keeping the scroll position).
function refreshMenuForGuest() {
  const ml = document.getElementById('menu-list');
  const st = ml ? ml.scrollTop : 0;
  const tab = document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1];
  if (tab) buildMenu(tab);
  if (ml) ml.scrollTop = st;
}

// "Guest 1 · Guest 2 · … + Add guest" row under the cart bar.
function renderGuestBar() {
  const bar = document.getElementById('guest-bar');
  if (!bar) return;
  if (cart.length === 0) { bar.style.display = 'none'; bar.innerHTML = ''; return; }
  bar.style.display = 'flex';
  const base = 'flex-shrink:0;padding:6px 12px;border-radius:16px;font-size:12px;font-weight:600;font-family:inherit;white-space:nowrap;cursor:pointer;';
  let left;
  if (guestTotal > 1) {
    let chips = '';
    for (let g = 1; g <= guestTotal; g++) {
      const n = guestItemCount(g);
      const on = g === currentGuest;
      chips += '<button type="button" onclick="selectGuest(' + g + ')" style="' + base +
        (on ? 'background:var(--ink);color:var(--gold);border:1px solid var(--ink);'
            : 'background:#fff;color:var(--ink);border:1px solid var(--border);') +
        '">Guest ' + g + (n ? ' · ' + n : '') + '</button>';
    }
    left = '<div id="guest-chips" style="flex:1;min-width:0;position:relative;display:flex;gap:6px;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;">' + chips + '</div>';
  } else {
    left = '<div style="flex:1;font-size:11px;color:var(--muted);">Ordering for a group?</div>';
  }
  bar.innerHTML = left +
    '<button type="button" onclick="addGuest()" style="' + base + 'background:transparent;color:var(--gold);border:1px solid var(--gold);">+ Add guest</button>';
  const chipsEl = document.getElementById('guest-chips');
  const act = chipsEl && chipsEl.children[currentGuest - 1];
  if (chipsEl && act) chipsEl.scrollLeft = act.offsetLeft - (chipsEl.clientWidth - act.offsetWidth) / 2;
}
let guestCount = 2;
let usePoints = false;
let pickupType = 'instore'; // 'instore' or 'curbside'

function openDoorDash() {
  // DoorDash link - update with Hsu's Gourmet delivery link
  const url = 'https://www.doordash.com/store/hsu-s-gourmet-atlanta/';
  window.open(url, '_blank');
}

function toggleCurbside(checked) {
  pickupType = checked ? 'curbside' : 'instore';
  const info = document.getElementById('curbside-info');
  if (info) info.style.display = checked ? 'block' : 'none';
  if (checked) document.getElementById('car-model')?.focus();
}

function selectPickupType(type) {
  pickupType = type;
  const cb = document.getElementById('curbside-checkbox');
  if (cb) cb.checked = type === 'curbside';
  toggleCurbside(type === 'curbside');
}
let selectedPointsDiscount = 0;
let tipPercent = 20;
let tipCustom  = null;

// ─────────────────────────────────
// AUTH
// ─────────────────────────────────
const USER_KEY = 'prb_user';

function getUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY)); }
  catch(e) { return null; }
}

async function signOut() {
  localStorage.removeItem(USER_KEY);
  try {
    const { getAuth, signOut: fbSignOut } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js');
    const auth = getAuth();
    await fbSignOut(auth);
  } catch(e) {}
  updateAuthUI();
}

async function refreshCustomerAdminList() {
  try {
    const cached = JSON.parse(localStorage.getItem('prb_admin_emails') || 'null');
    if (cached && cached.length) { window._customerAdminEmails = cached; updateAuthUI(); }
  } catch(e) {}
  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    const { loadAdminEmailsFromFirebase } = await import(fbUrl);
    const fresh = await loadAdminEmailsFromFirebase();
    if (fresh && fresh.length) {
      window._customerAdminEmails = fresh;
      localStorage.setItem('prb_admin_emails', JSON.stringify(fresh));
      updateAuthUI();
    }
  } catch(e) { console.warn('Admin list sync error:', e); }
}

function updateAuthUI() {
  const user      = getUser();
  const signInBtn = document.getElementById('btn-signin');
  const greetEl   = document.getElementById('hero-greeting');
  const ptsEl     = document.getElementById('home-points');
  const ptsSubEl  = document.getElementById('home-points-sub');
  const ptsValEl  = document.getElementById('home-points-value');
  if (!signInBtn) return;

  const ADMIN_EMAILS = window._customerAdminEmails || ['yshahn@gmail.com', 'ymhahn@gmail.com'];
  const adminBtn = document.getElementById('btn-admin');

  if (user) {
    signInBtn.textContent = 'Sign Out';
    signInBtn.removeAttribute('href');
    signInBtn.onclick = (e) => { e.preventDefault(); signOut(); };
    if (greetEl) {
      greetEl.textContent = 'Welcome back, ' + user.firstName + '!';
      greetEl.style.cssText = 'color:#fff;font-size:13px;opacity:1;font-weight:500;';
    }
    const pts = user.points || 0;
    if (ptsEl)    ptsEl.textContent    = pts.toLocaleString();
    if (ptsValEl) ptsValEl.textContent = '$' + (pts / 100).toFixed(2);
    if (ptsSubEl) ptsSubEl.textContent = 'Welcome back, ' + (user.firstName || '') + '!';
    const ptLabel = document.getElementById('pt-label');
    if (ptLabel) ptLabel.textContent = 'Redeem Points';
    if (adminBtn) adminBtn.style.display = ADMIN_EMAILS.includes(user.email) ? 'block' : 'none';
  } else {
    signInBtn.textContent = 'Sign In';
    signInBtn.href = 'login.html';
    signInBtn.onclick = null;
    if (greetEl) {
      greetEl.textContent = 'Welcome back';
      greetEl.style.cssText = 'color:#fff;opacity:0.9;';
    }
    if (ptsEl)    ptsEl.textContent    = '0';
    if (ptsValEl) ptsValEl.textContent = '$0.00';
    if (ptsSubEl) ptsSubEl.textContent = 'Sign in to earn points';
    if (adminBtn) adminBtn.style.display = 'none';
  }
}

function fillUserInfo() {
  const user    = getUser();
  const profile = loadProfile();
  const data    = { ...profile, ...(user || {}) };
  const fnEl    = document.getElementById('gi-firstname');
  const lnEl    = document.getElementById('gi-lastname');
  const phoneEl = document.getElementById('gi-phone');
  const emailEl = document.getElementById('gi-email');
  const badge   = document.getElementById('gi-badge');

  if (fnEl)    fnEl.value    = data.firstName || '';
  if (lnEl)    lnEl.value    = data.lastName  || '';
  if (phoneEl) phoneEl.value = data.phone      || '';
  if (emailEl) emailEl.value = data.email      || '';
  if (badge)   badge.style.display = (user || Object.keys(profile).length) ? 'block' : 'none';

  const isGuest = !user;
  const reqNote  = document.getElementById('guest-required-note');
  const reqFn    = document.getElementById('req-firstname');
  const reqPhone = document.getElementById('req-phone');
  const reqEmail = document.getElementById('req-email');
  if (reqNote)  reqNote.style.display  = isGuest ? 'block' : 'none';
  if (reqFn)    reqFn.style.display    = isGuest ? 'inline' : 'none';
  if (reqPhone) reqPhone.style.display = isGuest ? 'inline' : 'none';
  if (reqEmail) reqEmail.style.display = isGuest ? 'inline' : 'none';
}

// ─────────────────────────────────
// NAVIGATION
// ─────────────────────────────────
// If saveOrderToFirebase keeps failing even after retries, the order was
// still paid for and the customer got their email/SMS confirmation — but
// it will never show up in the admin dashboard unless someone finds out.
// This sends a distinct, clearly-labeled alert so that gap doesn't stay
// silent, using the same /api/notify-order endpoint but flagged so it
// sends an admin-only "please check manually" message instead of a normal
// order notification.
function reportOrderSaveFailure(orderData) {
  try {
    fetch('/api/notify-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        isSaveFailureAlert: true,
        orderId: orderData.orderId || '',
        customer: orderData.customer || {},
        total: orderData.total || 0,
        pickupTime: orderData.pickupTime || '',
        notifEmails: getNotifEmails(),
        notifPhones: getNotifPhones(),
      }),
    }).catch(() => {});
  } catch(e) {}
}

function goTo(id, pushState = true) {
  // Check if orders are paused when navigating to order tab
  if (id === 'order') {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    import(fbUrl).then(({ db }) => {
      import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js').then(({ doc, getDoc }) => {
        getDoc(doc(db, 'config', 'services')).then(snap => {
          if (snap.exists() && snap.data().orders === false) {
           // Show persistent banner
            let banner = document.getElementById('order-paused-banner');
            if (!banner) {
              banner = document.createElement('div');
              banner.id = 'order-paused-banner';
              banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9999;background:#c0392b;color:#fff;padding:16px 20px;text-align:center;font-size:15px;font-weight:600;line-height:1.5;';
              banner.innerHTML = '⚠️ Online ordering is temporarily unavailable.<br>Please call us at <a href="tel:+14046592788" style="color:#fff;text-decoration:underline;">(404) 659-2788</a>';
              document.body.appendChild(banner);
            }
            banner.style.display = 'block';
          }
        });
      });
    }).catch(() => {});
  }
  // Check if reservations are paused when navigating to reservation tab
  // (previously missing entirely, unlike the orders check above)
  if (id === 'reservation' && !serviceStatus.reservations) {
    let banner = document.getElementById('reservation-paused-banner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'reservation-paused-banner';
      banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9999;background:#c0392b;color:#fff;padding:16px 20px;text-align:center;font-size:15px;font-weight:600;line-height:1.5;';
      banner.innerHTML = '⚠️ Online reservations are temporarily unavailable.<br>Please call us at <a href="tel:+14046592788" style="color:#fff;text-decoration:underline;">(404) 659-2788</a>';
      document.body.appendChild(banner);
    }
    banner.style.display = 'block';
  }
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const ss = document.getElementById('success-screen');
  if (ss) ss.classList.remove('active');
  const screen = document.getElementById('screen-' + id);
  if (screen) screen.classList.add('active');
  const nav = document.getElementById('bottom-nav');
  if (nav) nav.style.display = 'flex';
  updateNav(id);
  window.scrollTo(0, 0);
  if (id === 'order') showMenuStep();
  if (id === 'rewards') buildRewardsScreen();
  if (id === 'home') buildHomeScreen();
  if (pushState && id !== 'home') {
    history.pushState({ screen: id }, '', location.pathname + location.search);
  } else if (id === 'home' && pushState) {
    history.replaceState({ screen: 'home' }, '', location.pathname + location.search);
  }
  if (id === 'home') {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    import(fbUrl + '?v=' + Date.now()).then(({ loadPicksFromFirebase }) => {
      loadPicksFromFirebase().then(picks => {
        if (picks) { localStorage.setItem('hsus_picks', JSON.stringify(picks)); loadTodaysPicks(); }
      }).catch(() => {});
    }).catch(() => {});
  }
  if (id === 'profile') updateProfileUI();
  if (id === 'reservation') { buildDates(); prefillReservationForm(); buildMyReservations(); resetReservationForm(); }
}

function resetReservationForm() {
  // Runs every time the Reservation screen is opened, so a previous
  // successful (or abandoned) submission never leaves the button stuck on
  // "Processing..." or old text lingering in Special Requests.
  const btn = document.getElementById('confirm-res-btn');
  if (btn) {
    btn.disabled = false;
    btn.textContent = 'Confirm Reservation';
    btn.style.opacity = '1';
  }
  const specialEl = document.getElementById('res-special');
  if (specialEl) specialEl.value = '';
  const guestCountEl = document.getElementById('guest-count');
  if (guestCountEl) guestCountEl.textContent = '2';
}

function navGo(id) { goTo(id); }

function updateNav(id) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const item = document.getElementById('nav-' + id);
  if (item) item.classList.add('active');
}

// ─────────────────────────────────
// ORDER STEPS
// ─────────────────────────────────
function showMenuStep() {
  document.getElementById('step-menu').style.display = 'flex';
  document.getElementById('step-checkout').style.display = 'none';
  const mc = document.getElementById('step-cart');
  if (mc) mc.style.display = 'none';
  const ci = document.getElementById('step-contact-info');
  if (ci) ci.style.display = 'none';
  const ac = document.getElementById('step-auth-choice');
  if (ac) ac.style.display = 'none';
  document.getElementById('order-screen-title').textContent = 'Order';
  document.getElementById('order-screen-sub').textContent = 'Select your items';
// 시간에 따라 자동으로 탭 선택
  const now = new Date();
  const mins = now.getHours() * 60 + now.getMinutes();
  const isLunchTime = now.getDay() !== 0 && now.getDay() !== 6 && mins < 14 * 60;

  // Hide lunch tab on weekends
  const todayDay = now.getDay();
  const isWeekendNow = todayDay === 0 || todayDay === 6;
  const lunchTabEl = [...document.querySelectorAll('.menu-tab')].find(t => t.getAttribute('onclick')?.includes("'lunch'"));
  if (lunchTabEl) lunchTabEl.style.display = isWeekendNow ? 'none' : '';

  const defaultTab = isLunchTime ? 'lunch' : 'appetizers';
  const defaultTab2 = [...document.querySelectorAll('.menu-tab')].find(t => t.getAttribute('onclick')?.includes("'" + defaultTab + "'"));
  if (defaultTab2) {
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    defaultTab2.classList.add('active');
    buildMenu(defaultTab);
    const notice = document.getElementById('lunch-notice');
    if (notice) notice.style.display = isLunchTime ? 'block' : 'none';
  }
}

function showArrivedScreen(orderId) {
  goTo('home');
  const overlay = document.createElement('div');
  overlay.id = 'arrived-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:99999;display:flex;align-items:center;justify-content:center;padding:24px;';
  overlay.innerHTML = `
    <div style="background:#faf7f2;border-radius:20px;padding:32px 24px;width:100%;max-width:360px;text-align:center;">
      <div style="font-size:48px;margin-bottom:12px;">🚗</div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:24px;margin-bottom:8px;">Let us know you're here!</div>
      <div style="font-size:13px;color:#888;margin-bottom:24px;">Tap the button below and we'll bring your order out.</div>
      <button onclick="sendArrivedMessage('${orderId}')" id="arrived-confirm-btn"
        style="width:100%;padding:16px;background:#1a1410;color:#c8a96e;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:15px;font-weight:600;cursor:pointer;letter-spacing:0.03em;">
        🚗 I Have Arrived!
      </button>
      <button onclick="document.getElementById('arrived-overlay').remove()"
        style="width:100%;padding:12px;background:none;border:1px solid #ddd;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:13px;color:#888;cursor:pointer;margin-top:10px;">
        Not yet
      </button>
    </div>`;
  document.body.appendChild(overlay);
}

async function sendArrivedMessage(passedOrderId) {
  const order = window._lastOrder || {};
  const user = getUser();
  const btn = document.getElementById('arrived-confirm-btn') || document.querySelector('[onclick="sendArrivedMessage()"]');
  const statusEl = document.getElementById('arrived-status');
  if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }

  const urlParams = new URLSearchParams(location.search);
  const carModel = order.carModel || urlParams.get('carModel') || '';
  const carColor = order.carColor || urlParams.get('carColor') || '';
  const orderId  = passedOrderId || order.orderId || urlParams.get('order') || '';

  try {
    const res = await fetch('/api/notify-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        isArrived: true, orderId,
        customer: order.customer || { name: user?.name || '', phone: user?.phone || '' },
        carModel, carColor,
        pickupTime: order.pickupTime || '',
        notifEmails: getNotifEmails(),
        notifPhones: getNotifPhones(),
      }),
    });
    const overlay = document.getElementById('arrived-overlay');
    if (overlay) {
      overlay.innerHTML = `<div style="background:#faf7f2;border-radius:20px;padding:32px 24px;width:100%;max-width:360px;text-align:center;">
        <div style="font-size:48px;margin-bottom:12px;">✅</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:24px;margin-bottom:8px;">We know you're here!</div>
        <div style="font-size:13px;color:#888;margin-bottom:24px;">We'll bring your order out shortly. Thank you!</div>
        <button onclick="document.getElementById('arrived-overlay').remove()" style="width:100%;padding:14px;background:#1a1410;color:#c8a96e;border:none;border-radius:14px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;cursor:pointer;">OK</button>
      </div>`;
    }
    if (btn) btn.textContent = '✅ Restaurant Notified!';
    if (statusEl) statusEl.textContent = 'We will bring your order right out!';
  } catch(e) {
    if (btn) { btn.disabled = false; btn.textContent = '🚗 I Have Arrived!'; }
    if (statusEl) statusEl.textContent = 'Please try again or call us at (404) 577-0888';
    console.error('Arrived error:', e);
  }
}

async function initPointsRedeem() {
  const user = getUser();
  if (!user) return;
  const section = document.getElementById('points-redeem-section');
  const btnsEl  = document.getElementById('points-redeem-btns');
  const subEl   = document.getElementById('pt-sub');
  if (!section || !btnsEl) return;
  // Always load latest points from Firebase before showing redeem options
  let pts = user.points || 0;
  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    const { loadPointsFromFirebase } = await import(fbUrl);
    const fbPts = await loadPointsFromFirebase(user.email);
    if (fbPts && fbPts.points !== undefined) {
      pts = fbPts.points;
      // Sync to localStorage
      const updatedUser = { ...user, points: fbPts.points, tierPoints: fbPts.tierPoints || user.tierPoints || 0, pointsLog: fbPts.pointsLog || user.pointsLog || [] };
      localStorage.setItem(USER_KEY, JSON.stringify(updatedUser));
    }
  } catch(e) {
    console.warn('Could not load points from Firebase:', e);
  }
  const maxDiscount = Math.floor(pts / 500) * 5;
  if (maxDiscount <= 0) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  if (subEl) subEl.textContent = pts.toLocaleString() + ' pts available';
  btnsEl.innerHTML = '';
  const noneBtn = document.createElement('button');
  noneBtn.innerHTML = '<div>No discount</div>';
  noneBtn.style.cssText = 'padding:8px 14px;border:1.5px solid var(--ink);border-radius:20px;font-family:DM Sans,sans-serif;font-size:12px;cursor:pointer;background:var(--ink);color:var(--gold);transition:all 0.15s;';
  noneBtn.addEventListener('click', () => selectPointsDiscount(0, btnsEl));
  btnsEl.appendChild(noneBtn);
  for (let d = 5; d <= maxDiscount; d += 5) {
    const btn = document.createElement('button');
    btn.innerHTML = '<div>$' + d + ' off</div><div style="font-size:10px;opacity:0.7;">' + (d * 100) + ' pts</div>';
    btn.dataset.discount = d;
    btn.style.cssText = 'padding:8px 14px;border:1.5px solid var(--border);border-radius:20px;font-family:DM Sans,sans-serif;font-size:12px;cursor:pointer;background:var(--card-bg);color:var(--ink);transition:all 0.15s;';
    btn.addEventListener('click', () => selectPointsDiscount(d, btnsEl));
    btnsEl.appendChild(btn);
  }
  selectedPointsDiscount = 0;
  usePoints = false;
}

function selectPointsDiscount(amount, btnsEl) {
  selectedPointsDiscount = amount;
  usePoints = amount > 0;
  const btns = btnsEl.querySelectorAll('button');
  btns.forEach(btn => {
    const isSelected = (amount === 0 && btn.textContent.includes('No discount')) ||
                       (btn.dataset.discount && parseInt(btn.dataset.discount) === amount);
    btn.style.background = isSelected ? 'var(--ink)' : 'var(--card-bg)';
    btn.style.color = isSelected ? 'var(--gold)' : 'var(--ink)';
    btn.style.borderColor = isSelected ? 'var(--ink)' : 'var(--border)';
  });
  buildCheckoutSummary();
}

// ─────────────────────────────────
// NEW CHECKOUT FLOW: My Cart → Contact Info → Register/Guest Choice → Checkout
// ─────────────────────────────────

// Temp storage for contact info collected before register/guest choice
let _pendingContactInfo = null;

// ── Group flat cart array into {main item, toppings[]} groups.
function groupCartItems() {
  const groups = [];
  cart.forEach(item => {
    const lastGroup = groups[groups.length - 1];
    const isTopping = lastGroup && cartGuest(item) === cartGuest(lastGroup) && item.name.startsWith(lastGroup.name + ' + ');
    if (isTopping) {
      lastGroup.toppings.push(item);
    } else {
      groups.push({ ...item, toppings: [] });
    }
  });
  return groups;
}

function goToCart() {
  if (cart.length === 0) return;
  document.getElementById('step-menu').style.display = 'none';
  document.getElementById('step-checkout').style.display = 'none';
  const ci = document.getElementById('step-contact-info');
  if (ci) ci.style.display = 'none';
  const ac = document.getElementById('step-auth-choice');
  if (ac) ac.style.display = 'none';
  const mc = document.getElementById('step-cart');
  if (mc) mc.style.display = 'flex';
  document.getElementById('order-screen-title').textContent = 'My Cart';
  document.getElementById('order-screen-sub').textContent = 'Review your order';
  buildCartScreen();
  document.getElementById('screen-order').scrollTop = 0;
}

function buildCartScreen() {
  const listEl = document.getElementById('my-cart-list');
  const sumEl  = document.getElementById('my-cart-summary');
  const btnEl  = document.getElementById('my-cart-checkout-btn');
  if (!listEl) return;

  if (cart.length === 0) {
    const cartScreenVisible = document.getElementById('step-cart')?.style.display === 'flex';
    if (cartScreenVisible) { backToMenu(); return; }
    listEl.innerHTML = '<div style="padding:40px 0;text-align:center;color:var(--muted);font-size:13px;">Your cart is empty.</div>';
    if (sumEl) sumEl.innerHTML = '';
    if (btnEl) btnEl.style.display = 'none';
    return;
  }
  if (btnEl) btnEl.style.display = 'block';

// 같은 이름 아이템 그룹핑 (수량 합산)
  // (손님(guest)별로 따로 합산)
  const rawGroups = groupCartItems();
  const groupMap = new Map();
  rawGroups.forEach(item => {
    const key = cartGuest(item) + '|' + item.name;
    if (groupMap.has(key)) {
      groupMap.get(key).qty++;
    } else {
      groupMap.set(key, { ...item, qty: 1 });
    }
  });
  // Sorted by guest number (stable, so items keep the order they were added in)
  const groups = [...groupMap.values()].sort((a, b) => cartGuest(a) - cartGuest(b));
  const multiGuest = activeGuestCount() > 1;
  let lastGuestShown = null;
  listEl.innerHTML = '';

  groups.forEach((item, gi) => {
    const guestNo = cartGuest(item);
    if (multiGuest && guestNo !== lastGuestShown) {
      lastGuestShown = guestNo;
      const gSub = cart.filter(c => cartGuest(c) === guestNo).reduce((s, c) => s + c.price, 0);
      const head = document.createElement('div');
      head.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:16px 0 6px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--gold);border-bottom:1px solid var(--gold);';
      head.innerHTML = '<span>Guest ' + guestNo + '</span><span>$' + gSub.toFixed(2) + '</span>';
      listEl.appendChild(head);
    }
    const toppingHtml = item.toppings.map(t =>
      `<div style="display:flex;align-items:center;gap:6px;padding:3px 0 0 36px;font-size:12px;color:var(--muted);">
        <span>${t.emoji || '🧂'}</span>
        <span style="flex:1;">${t.name.replace(item.name + ' + ', '')}</span>
        <span style="color:var(--gold);">+$${parseFloat(t.price).toFixed(2)}</span>
      </div>`
    ).join('');

    const itemTotal = parseFloat(item.price) + item.toppings.reduce((s,t) => s + parseFloat(t.price), 0);
    const qty = item.qty;

    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:flex-start;gap:10px;padding:14px 0;border-bottom:1px solid var(--border);';
    row.innerHTML = `
      
      <div style="flex:1;min-width:0;">
        <div style="font-size:14px;font-weight:500;">${item.name}</div>
        ${toppingHtml}
        <div style="font-size:13px;color:var(--gold);font-weight:600;margin-top:4px;">$${itemTotal.toFixed(2)}</div>
      </div>
      <div class="mi-qty-ctrl" style="flex-shrink:0;display:flex;align-items:center;gap:8px;border:1px solid var(--border);border-radius:20px;padding:4px 10px;">
        <button class="mi-qty-minus" style="width:22px;height:22px;border:none;background:none;font-size:16px;color:var(--ink);cursor:pointer;line-height:1;">−</button>
        <span class="mi-qty-num" style="font-size:13px;font-weight:600;min-width:14px;text-align:center;">${qty}</span>
        <button class="mi-qty-plus" style="width:22px;height:22px;border:none;background:none;font-size:16px;color:var(--ink);cursor:pointer;line-height:1;">+</button>
      </div>
      <button class="cart-del-btn" style="margin-left:4px;padding:6px 10px;border:1px solid #fde8e8;border-radius:8px;background:#fff;cursor:pointer;font-size:13px;flex-shrink:0;">🗑</button>
    `;

    row.querySelector('.mi-qty-minus').addEventListener('click', () => cartQty(item.name, -1, guestNo));
    row.querySelector('.mi-qty-plus').addEventListener('click', () => cartQty(item.name, 1, guestNo));
    row.querySelector('.cart-del-btn').addEventListener('click', () => removeCartGroupByName(item.name, item.toppings.length, guestNo));

    listEl.appendChild(row);
  });

  if (sumEl) {
    const subtotal = cart.reduce((s, i) => s + i.price, 0);
    sumEl.innerHTML =
      '<div style="display:flex;justify-content:space-between;font-size:14px;font-weight:600;padding:10px 0;border-top:1px solid var(--border);">' +
        '<span>Subtotal</span><span>$' + subtotal.toFixed(2) + '</span>' +
      '</div>' +
      '<div style="font-size:11px;color:var(--muted);">Tax, platform fee, and tip are calculated at checkout.</div>';
  }
}

function removeCartGroupByName(name, toppingCount, guest) {
  const mainIdx = cart.findIndex(c => c.name === name && (guest === undefined || cartGuest(c) === guest));
  if (mainIdx === -1) return;
  cart.splice(mainIdx, 1 + toppingCount);
  updateCartBar();
  buildCartScreen();
  const checkoutVisible = document.getElementById('step-checkout')?.style.display === 'flex';
  if (checkoutVisible) buildCheckoutSummary();
}

async function goToCheckout() {
  if (cart.length === 0) return;
  // Check if online orders are enabled
  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    const { db } = await import(fbUrl);
    const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    const snap = await getDoc(doc(db, 'config', 'services'));
   if (snap.exists() && snap.data().orders === false) {
      alert('We are temporarily not accepting online orders. Please call us at (404) 659-2788.');
      return;
    }
    // Hide banner if orders are back on
    const banner = document.getElementById('order-paused-banner');
    if (banner) banner.style.display = 'none';
  } catch(e) { console.warn('Could not check order status:', e); }
  const user = getUser();
  if (user) {
    proceedToCheckoutScreen();
    return;
  }

  document.getElementById('step-menu').style.display = 'none';
  document.getElementById('step-checkout').style.display = 'none';
  const mc = document.getElementById('step-cart');
  if (mc) mc.style.display = 'none';
  const authChoice = document.getElementById('step-auth-choice');
  if (authChoice) authChoice.style.display = 'none';
  const ci = document.getElementById('step-contact-info');
  if (ci) ci.style.display = 'flex';
  document.getElementById('order-screen-title').textContent = 'Your Info';
  document.getElementById('order-screen-sub').textContent = "Let's get started";

  const profile = loadProfile();
  const fn = document.getElementById('ci-firstname');
  const ln = document.getElementById('ci-lastname');
  const ph = document.getElementById('ci-phone');
  const em = document.getElementById('ci-email');
  if (fn && !fn.value) fn.value = profile.firstName || '';
  if (ln && !ln.value) ln.value = profile.lastName  || '';
  if (ph && !ph.value) ph.value = profile.phone      || '';
  if (em && !em.value) em.value = profile.email      || '';

  document.getElementById('screen-order').scrollTop = 0;
}

function submitContactInfo() {
  const firstName = document.getElementById('ci-firstname')?.value.trim() || '';
  const lastName  = document.getElementById('ci-lastname')?.value.trim()  || '';
  const phone     = document.getElementById('ci-phone')?.value.trim()     || '';
  const email     = document.getElementById('ci-email')?.value.trim()     || '';

  if (!firstName || !/[a-zA-Z]/.test(firstName)) { alert('Please enter your first name.'); document.getElementById('ci-firstname')?.focus(); return; }
  if (!phone || phone.replace(/\D/g,'').length < 10) { alert('Please enter a valid phone number.'); document.getElementById('ci-phone')?.focus(); return; }
  if (!email || !email.includes('@')) { alert('Please enter a valid email address.'); document.getElementById('ci-email')?.focus(); return; }

  _pendingContactInfo = { firstName, lastName, phone, email };

  document.getElementById('step-contact-info').style.display = 'none';
  const authChoice = document.getElementById('step-auth-choice');
  if (authChoice) authChoice.style.display = 'flex';
  const def = document.getElementById('auth-choice-default');
  const pwd = document.getElementById('auth-choice-password');
  if (def) def.style.display = 'block';
  if (pwd) pwd.style.display = 'none';
  document.getElementById('order-screen-title').textContent = 'Almost There';
  document.getElementById('order-screen-sub').textContent = '';
  document.getElementById('screen-order').scrollTop = 0;
}

function backToContactInfo() {
  const authChoice = document.getElementById('step-auth-choice');
  if (authChoice) authChoice.style.display = 'none';
  const ci = document.getElementById('step-contact-info');
  if (ci) ci.style.display = 'flex';
  document.getElementById('order-screen-title').textContent = 'Your Info';
  document.getElementById('order-screen-sub').textContent = "Let's get started";
}

function showRegisterPasswordStep() {
  const def = document.getElementById('auth-choice-default');
  const pwd = document.getElementById('auth-choice-password');
  if (def) def.style.display = 'none';
  if (pwd) pwd.style.display = 'block';
  document.getElementById('quick-reg-password')?.focus();
}

function backToAuthChoiceDefault() {
  const def = document.getElementById('auth-choice-default');
  const pwd = document.getElementById('auth-choice-password');
  if (pwd) pwd.style.display = 'none';
  if (def) def.style.display = 'block';
}

function continueAsGuest() {
  proceedToCheckoutScreen();
}

async function quickRegister() {
  const password = document.getElementById('quick-reg-password')?.value || '';
  if (!password || password.length < 6) {
    alert('Please enter a password with at least 6 characters.');
    document.getElementById('quick-reg-password')?.focus();
    return;
  }
  if (!_pendingContactInfo) { continueAsGuest(); return; }

  const { firstName, lastName, email, phone } = _pendingContactInfo;
  const signupBonus = [{ desc: 'Sign Up Bonus', pts: 500, date: Date.now() }];
  const user = {
    firstName: firstName || 'Guest',
    lastName:  lastName  || '',
    email,
    phone,
    points:     500,       // $5 in rewards, usable immediately
    tierPoints: 0,
    pointsLog:  signupBonus,
    createdAt:  Date.now(),
    lastReset:  new Date().toISOString(), // prevent checkYearlyReset() from firing immediately on a fresh signup
  };
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  localStorage.setItem('prb_profile', JSON.stringify({ firstName, lastName, email, phone }));

  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    const { saveProfileToFirebase, savePointsToFirebase } = await import(fbUrl);
    await saveProfileToFirebase({ firstName, lastName, email, phone, createdAt: user.createdAt });
    await savePointsToFirebase(email, 500, signupBonus, 500);
    console.log('✅ New member saved to Firebase:', email);
  } catch(e) {
    console.warn('Firebase signup save failed (user still created locally):', e);
  }

  updateAuthUI();
  showToastMsg('🎁 Account created! $5 in rewards added.');
  proceedToCheckoutScreen();
}

function proceedToCheckoutScreen() {
  document.getElementById('step-menu').style.display = 'none';
  const mc = document.getElementById('step-cart');
  if (mc) mc.style.display = 'none';
  const ci = document.getElementById('step-contact-info');
  if (ci) ci.style.display = 'none';
  const authChoice = document.getElementById('step-auth-choice');
  if (authChoice) authChoice.style.display = 'none';
  document.getElementById('step-checkout').style.display = 'flex';
  document.getElementById('order-screen-title').textContent = 'Checkout';
  document.getElementById('order-screen-sub').textContent = 'Review & pay';
  tipPercent = 20; tipCustom = null;
  document.querySelectorAll('.tip-btn').forEach(b => b.classList.remove('selected'));
  const def = document.querySelector('.tip-btn[onclick="selectTip(this, 20)"]');
  if (def) def.classList.add('selected');
  const cw = document.getElementById('tip-custom-wrap');
  if (cw) cw.style.display = 'none';

  fillUserInfo();

  const user = getUser();
  if (!user && _pendingContactInfo) {
    const fnEl = document.getElementById('gi-firstname');
    const lnEl = document.getElementById('gi-lastname');
    const phEl = document.getElementById('gi-phone');
    const emEl = document.getElementById('gi-email');
    if (fnEl) fnEl.value = _pendingContactInfo.firstName || '';
    if (lnEl) lnEl.value = _pendingContactInfo.lastName  || '';
    if (phEl) phEl.value = _pendingContactInfo.phone     || '';
    if (emEl) emEl.value = _pendingContactInfo.email     || '';
    localStorage.setItem('prb_profile', JSON.stringify(_pendingContactInfo));
  }

  buildCheckoutSummary();
  buildPickupSlots();
  initPointsRedeem();
  document.getElementById('screen-order').scrollTop = 0;
}

function backToMenu() {
  _pendingContactInfo = null;
  showMenuStep();
}

function buildCheckoutSummary() {
  const editList = document.getElementById('cart-edit-list');
  if (editList) {
    const groups = [];
    cart.forEach(item => {
      const lastGroup = groups[groups.length - 1];
      const isTopping = lastGroup && cartGuest(item) === cartGuest(lastGroup) && item.name.startsWith(lastGroup.name + ' + ');
      if (isTopping) { lastGroup.toppings.push(item); }
      else { groups.push({ ...item, toppings: [] }); }
    });
    // Group order: list by guest (stable sort keeps the added order within a guest).
    // Sorted BEFORE storing so removeCartGroup(gi) indexes the same order that is shown.
    groups.sort((a, b) => cartGuest(a) - cartGuest(b));
    window._cartGroups = groups;
    editList.innerHTML = '';
    const multiGuest = activeGuestCount() > 1;
    let lastGuestShown = null;
    groups.forEach((item, gi) => {
      const guestNo = cartGuest(item);
      if (multiGuest && guestNo !== lastGuestShown) {
        lastGuestShown = guestNo;
        const gSub = cart.filter(c => cartGuest(c) === guestNo).reduce((s, c) => s + c.price, 0);
        const head = document.createElement('div');
        head.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:14px 0 6px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--gold);border-bottom:1px solid var(--gold);';
        head.innerHTML = '<span>Guest ' + guestNo + '</span><span>$' + gSub.toFixed(2) + '</span>';
        editList.appendChild(head);
      }
      const toppingHtml = item.toppings.map(t =>
        `<div style="display:flex;align-items:center;gap:6px;padding:3px 0 0 36px;font-size:12px;color:var(--muted);">
          <span>${t.emoji || '🧂'}</span>
          <span style="flex:1;">${t.name.replace(item.name + ' + ', '')}</span>
          <span style="color:var(--gold);">+$${parseFloat(t.price).toFixed(2)}</span>
        </div>`
      ).join('');
      const itemTotal = parseFloat(item.price) + item.toppings.reduce((s,t) => s + parseFloat(t.price), 0);
      const row = document.createElement('div');
      row.className = 'cart-edit-row';
      row.style.alignItems = 'flex-start';
      row.innerHTML = `
        
        <div class="cer-name" style="flex:1;min-width:0;"><div>${item.name}</div>${toppingHtml}</div>
        <div class="cer-controls">
          <button class="cer-del" onclick="removeCartGroup(${gi})" style="padding:6px 10px;border:1px solid #fde8e8;border-radius:8px;background:#fff;cursor:pointer;font-size:13px;">🗑</button>
        </div>
        <div class="cer-price">$${itemTotal.toFixed(2)}</div>`;
      editList.appendChild(row);
    });
  }
  const el = document.getElementById('checkout-summary');
  if (!el) return;
  const subtotal    = cart.reduce((s, i) => s + i.price, 0);
  const platformFee = 1.00;
  const tax         = subtotal * 0.089;
  const tip         = getTipAmount(subtotal);
  const discount    = selectedPointsDiscount || 0;
  const total       = Math.max(subtotal + platformFee + tax + tip - discount, 0.50);
  const tipAmountEl = document.getElementById('tip-amount');
  if (tipAmountEl) tipAmountEl.textContent = 'Tip: $' + tip.toFixed(2);
  el.innerHTML =
    '<div class="os-row os-label"><span>Subtotal</span><span>$' + subtotal.toFixed(2) + '</span></div>' +
    '<div class="os-row os-label"><span>Platform Fee</span><span>$' + platformFee.toFixed(2) + '</span></div>' +
    '<div class="os-row os-label"><span>Tax (8.9%)</span><span>$' + tax.toFixed(2) + '</span></div>' +
    '<div class="os-row os-label"><span>Tip</span><span>$' + tip.toFixed(2) + '</span></div>' +
    (discount ? '<div class="os-row os-label" style="color:var(--gold)"><span>Points Discount</span><span>−$' + discount.toFixed(2) + '</span></div>' : '') +
    '<div class="os-row total"><span>Total</span><span>$' + total.toFixed(2) + '</span></div>';
  const payBtn = document.getElementById('pay-btn');
  if (payBtn) payBtn.textContent = 'Pay $' + total.toFixed(2);
  if (payBtn) payBtn.style.display = cart.length > 0 ? 'block' : 'none';
}

function removeCartGroup(gi) {
  const groups = window._cartGroups || [];
  const group = groups[gi];
  if (!group) return;
  const mainIdx = cart.findIndex(c => c.name === group.name && cartGuest(c) === cartGuest(group));
  if (mainIdx === -1) return;
  const removeCount = 1 + group.toppings.length;
  cart.splice(mainIdx, removeCount);
  updateCartBar();
  buildCheckoutSummary();
}

// `guest` = which guest's copy of the item to change; defaults to the guest
// currently being ordered for (the menu's +/− buttons), while the My Cart rows
// pass their own guest explicitly.
function cartQty(name, delta, guest) {
  const g = guest || currentGuest;
  if (delta === -1) {
    const idx = findLastCartIndex(i => i.name === name && cartGuest(i) === g);
    if (idx !== -1) cart.splice(idx, 1);
  } else {
    const existing = cart.find(i => i.name === name && cartGuest(i) === g);
    if (existing) cart.push({ ...existing });
  }
  updateCartBar();
  buildCartScreen();
  const checkoutVisible = document.getElementById('step-checkout')?.style.display === 'flex';
  if (checkoutVisible) buildCheckoutSummary();
}

function cartRemove(name) {
  cart = cart.filter(i => i.name !== name);
  updateCartBar();
  buildCartScreen();
  const checkoutVisible = document.getElementById('step-checkout')?.style.display === 'flex';
  if (checkoutVisible) buildCheckoutSummary();
}

// ─────────────────────────────────
// MENU
// ─────────────────────────────────
function buildMenu(tab) {
  window._currentMenuTab = tab; // used to tag lunch items added to cart
  const list = document.getElementById('menu-list');
  if (!list) return;
  // Firebase 데이터 머지
  if (!window.firebaseMenuData) {
    import('/js/firebase-menu.js')
      .then(({ loadMenuFromFirebase }) => loadMenuFromFirebase())
      .then(data => { if (data) { window.firebaseMenuData = data; buildMenu(tab); } })
      .catch(() => {});
    // 일단 로컬 데이터로 렌더링 계속
  }
  Array.from(list.children).forEach(child => { if (child.id !== 'photo-hint') child.remove(); });

  // Always use local menuData as the source of truth for Hsu's Gourmet.
  // Firebase data (soldOut, price overrides) is merged on top if available.
const localItems = menuData[tab] || [];
const fbItems = (window.firebaseMenuData && window.firebaseMenuData[tab]) || [];

// Firebase 아이템 기준으로 머지 — 신규 아이템도 포함
let items;
if (fbItems.length > 0) {
  // Firebase 데이터를 기본으로 사용
  items = fbItems.map(fbItem => {
    const localItem = localItems.find(l => l.n === fbItem.n);
    return {
      e: fbItem.e || localItem?.e || '🍽️',
      n: fbItem.n,
      d: fbItem.d || localItem?.d || '',
      p: fbItem.p !== undefined ? fbItem.p : (localItem?.p || 0),
      img: fbItem.img || localItem?.img || null,
      subcat: fbItem.subcat || localItem?.subcat || null,
      soldOut: fbItem.soldOut || false,
      options: fbItem.options || localItem?.options || null,
      multiSelect: fbItem.multiSelect || localItem?.multiSelect || null,
      toppings: fbItem.toppings || localItem?.toppings || null,
    };
  });
} else {
  // Firebase 없으면 로컬 데이터 사용
  items = localItems;
}

  // ── Hsu's Gourmet subcat map ──
  const SUBCAT_MAP = {
    lunch: {
      apps:      ['Spring Rolls (2)','Vegetable Spring Rolls (2)','Shantung Dumplings (4)','Fried Chicken Dumplings (4)','Vegetable Steamed Dumplings (4)','Beef Satay (4)','Crab Angels (4)','Fried Calamari'],
      soups:     ['Wonton Soup','Hot & Sour Soup','Egg Drop Soup'],
      noodles:   ['House Special Lomein','Shrimp Lomein','Chicken Lomein','Vegetable Lomein',"Spicy Anna's Seafood Noodle Soup",'Shantung Black Noodles Jajangmyeon','Pan Fried Hong Kong Noodles','Vegetable Fried Rice','Chicken Fried Rice','Shrimp Fried Rice','Combination Fried Rice'],
      entrees:   ['Curry Chicken','Spicy Basil Chicken','Hot Pepper Chicken',"General Tsu's Favorite Chicken",'Lemon Chicken','Fried Sesame Chicken','String Beans Szechwan Style with Ground Pork','String Beans Szechwan Style with Chicken','String Beans Szechwan Style with Shrimp','Spicy Basil Beef','Mongolian Beef','Beef with Broccoli','Shrimp with Light Garlic Sauce','Avocado Shrimp','Asparagus with Black Bean Sauce with Shrimp','Asparagus with Black Bean Sauce with Chicken','Walnut Shrimp','Grilled Fresh Salmon Filet','Salt & Pepper Shrimp','Fresh Chilean Sea Bass','Sea Scallop in Black Pepper Sauce','Mixed Vegetables with Fried Tofu',"General Tsu's Tofu with Broccoli"],
      combo:     ['Imperial Chicken','Sweet & Sour Chicken','Chicken with Mixed Vegetables','Chicken with Broccoli'],
      beverages: ['Coffee','Jasmine Tea','Sweet Iced Tea','Unsweet Iced Tea','Soft Drinks'],
    },
  };

  if (SUBCAT_MAP[tab]) {
    items = items.map(item => {
      if (item.subcat) return item;
      for (const [key, names] of Object.entries(SUBCAT_MAP[tab])) {
        if (names.includes(item.n)) return { ...item, subcat: key };
      }
      return item;
    });
  }

  const _sectionConfig =
    (window._firebaseSections && window._firebaseSections[tab]) ||
    JSON.parse(localStorage.getItem('prb_menu_sections') || 'null')?.[tab] ||
    null;

  if (_sectionConfig && _sectionConfig.length > 0) {
    const _sectionOrder = _sectionConfig.map(s => s.key);
    items = items.slice().sort((a, b) => {
      const ai = a.subcat ? _sectionOrder.indexOf(a.subcat) : 9999;
      const bi = b.subcat ? _sectionOrder.indexOf(b.subcat) : 9999;
      if (ai !== bi) return ai - bi;
      return 0;
    });
  }

  const hint = document.getElementById('photo-hint');
  if (hint) hint.style.display = items.some(i => i.img) ? 'block' : 'none';
  const list2 = document.getElementById('menu-list');
  if (list2) {
    Array.from(list2.children).forEach(child => { if (child.id !== 'photo-hint') child.remove(); });
  }

  if (tab === 'lunch' && !window._lunchAccordion) { window._lunchAccordion = {}; }

  const DEFAULT_SEC_CONFIG = {
    lunch: [
      { key:'apps',      emoji:'🥢', label:'Appetizers',      sub:'' },
      { key:'soups',     emoji:'🍜', label:'Soup',            sub:'' },
      { key:'noodles',   emoji:'🍚', label:'Noodles & Rice',  sub:'' },
      { key:'entrees',   emoji:'🍛', label:'Entrees',         sub:'Served with steamed rice or fried rice' },
      { key:'combo',     emoji:'🍱', label:'Combination',     sub:'Complete with steamed rice or fried rice, egg drop soup and crab angel · No substitution please' },
      { key:'beverages', emoji:'☕', label:'Beverages',       sub:'' },
    ],
  };

  items.forEach((item, idx) => {
    if (item.subcat) {
      const prevItem = items[idx - 1];
      const prevSubcat = prevItem ? prevItem.subcat : null;
      if (item.subcat !== prevSubcat) {
        let secLabel = item.subcat;
        let secEmoji = null;
        let secSub = null;
        const _fbSecs = (window._firebaseSections && window._firebaseSections[tab])
          || JSON.parse(localStorage.getItem('prb_menu_sections') || 'null')?.[tab]
          || null;
        const secList = _fbSecs || DEFAULT_SEC_CONFIG[tab] || [];
        const accSec = secList.find(s => s.key === item.subcat);
        if (accSec) { secLabel = accSec.label; secEmoji = accSec.emoji; secSub = accSec.sub; }

        const h = document.createElement('div');
        h.className = 'menu-section-header';
        h.textContent = (secEmoji ? secEmoji + ' ' : '') + secLabel;
        if (secSub) {
          const sub = document.createElement('div');
          sub.style.cssText = 'font-size:11px;color:var(--muted);font-weight:400;margin-top:2px;';
          sub.textContent = secSub;
          h.appendChild(sub);
        }
        list.appendChild(h);
      }
    }

    const inCart = cart.filter(c => cartGuest(c) === currentGuest && (c.name === item.n || c.name.startsWith(item.n + ' — ') || c.name.startsWith(item.n + ' ('))).length;
    const isSoldOut = item.soldOut === true;
    const div = document.createElement('div');
    if (isSoldOut) div.style.opacity = '0.55';

    const thumbHtml = item.img
      ? `<img class="mi-thumb" src="${item.img}" alt="${item.n}" onerror="this.style.display='none'" onclick="openImgModal(this.src,'${item.n.replace(/'/g,"\\'")}')" style="cursor:zoom-in;">`
      : '';

    const priceDisplay = isSoldOut
      ? 'SOLD OUT'
      : item.p === 0
        ? 'Market Price'
        : item.options
          ? 'from $' + Math.min(...item.options.map(o => o.p)).toFixed(2)
          : '$' + parseFloat(item.p).toFixed(2);

    const optionsHtml = item.options ? `
      <div class="mi-options" style="display:none;">
        ${item.options.map(opt =>
          `<div class="mi-opt-row" data-name="${item.n} — ${opt.n}" data-price="${opt.p}" data-emoji="">
            <span class="mi-opt-name">${opt.n}</span>
            <span class="mi-opt-price">$${opt.p.toFixed(2)}</span>
            <button class="mi-opt-btn">+</button>
          </div>`
        ).join('')}
      </div>` : '';

    div.innerHTML =
      '<div class="mi-main">' +
        thumbHtml +
        '<div class="mi-info">' +
          '<div class="mi-name">' + item.n + '</div>' +
          '<div class="mi-desc">' + (item.d || '') + '</div>' +
          (isSoldOut ? '<div style="font-size:12px;font-weight:700;color:#e74c3c;letter-spacing:0.05em;">SOLD OUT</div>' : '<div class="mi-price">' + priceDisplay + '</div>') +
        '</div>' +
        (isSoldOut
          ? '<button class="mi-add" disabled style="opacity:0.3;cursor:not-allowed;pointer-events:none;">✕</button>'
          : item.options
          ? '<button class="mi-expand-btn">▾</button>'
          : (item.multiSelect || (item.toppings && item.toppings.length))
            ? (inCart
                ? '<button class="mi-add" style="position:relative;">+<span style="position:absolute;top:-6px;right:-6px;background:var(--gold);color:var(--ink);border-radius:50%;width:16px;height:16px;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;line-height:1;">' + inCart + '</span></button>'
                : '<button class="mi-add">+</button>')
            : (inCart
                ? '<div class="mi-qty-ctrl" style="flex-shrink:0;display:flex;align-items:center;gap:6px;border:1px solid var(--border);border-radius:20px;padding:4px 8px;">' +
                    '<button class="mi-qty-minus" style="width:20px;height:20px;border:none;background:none;font-size:15px;color:var(--ink);cursor:pointer;line-height:1;">−</button>' +
                    '<span class="mi-qty-num" style="font-size:12px;font-weight:600;min-width:12px;text-align:center;">' + inCart + '</span>' +
                    '<button class="mi-qty-plus" style="width:20px;height:20px;border:none;background:none;font-size:15px;color:var(--ink);cursor:pointer;line-height:1;">+</button>' +
                  '</div>'
                : '<button class="mi-add">+</button>')
        ) +
      '</div>' +
      optionsHtml;

    if (!isSoldOut) {
      if (item.toppings && item.toppings.length && !item.options) {
        const addBtn = div.querySelector('.mi-add');
        if (addBtn) addBtn.addEventListener('click', () => openToppingModal(item));
      } else if (item.multiSelect) {
        const addBtn = div.querySelector('.mi-add');
        if (addBtn) addBtn.addEventListener('click', () => openMultiSelectModal(item));
      } else if (item.options) {
        const expandBtn = div.querySelector('.mi-expand-btn');
        if (expandBtn) expandBtn.addEventListener('click', function() {
          const opts = div.querySelector('.mi-options');
          const isOpen = opts.style.display === 'block';
          opts.style.display = isOpen ? 'none' : 'block';
          this.textContent = isOpen ? '▾' : '▴';
          this.classList.toggle('active', !isOpen);
        });
        div.querySelectorAll('.mi-opt-row').forEach(row => {
          row.querySelector('.mi-opt-btn').addEventListener('click', function() {
            if (item.toppings && item.toppings.length) {
              const optItem = { ...item, n: row.dataset.name, p: parseFloat(row.dataset.price), e: '' };
              openToppingModal(optItem);
            } else {
              addToCart(row.dataset.name, parseFloat(row.dataset.price), "", null);
              this.textContent = '✓'; this.classList.add('added');
              setTimeout(() => { this.textContent = '+'; this.classList.remove('added'); }, 800);
              updateCartBar();
            }
          });
        });
      } else {
        const qtyCtrl = div.querySelector('.mi-qty-ctrl');
        if (qtyCtrl) {
          const minusBtn = qtyCtrl.querySelector('.mi-qty-minus');
          const plusBtn  = qtyCtrl.querySelector('.mi-qty-plus');
          const activeTab = document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1] || 'appetizers';
          minusBtn.addEventListener('click', () => { cartQty(item.n, -1); buildMenu(activeTab); });
          plusBtn.addEventListener('click', () => { cartQty(item.n, 1); buildMenu(activeTab); });
        } else {
          const addBtn = div.querySelector('.mi-add');
          if (addBtn) {
            addBtn.addEventListener('click', () => {
              addToCart(item.n, parseFloat(item.p), "", null);
              updateCartBar();
              buildMenu(document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1] || 'appetizers');
            });
          }
        }
      }
    }
    list.appendChild(div);
  });
}

function updateCartBar() {
  normalizeGuests();   // drop guests whose items were all removed, keep numbers 1..n
  const total = cart.reduce((s, i) => s + i.price, 0);
  const cc = document.getElementById('cart-count');
  const ct = document.getElementById('cart-total');
  const cb = document.getElementById('cart-bar');
  const guests = activeGuestCount();
  if (cc) cc.textContent = cart.length + ' item' + (cart.length !== 1 ? 's' : '') + (guests > 1 ? ' · ' + guests + ' guests' : '');
  if (ct) ct.textContent = '$' + total.toFixed(2);
  if (cb) cb.style.display = cart.length > 0 ? 'flex' : 'none';
  renderGuestBar();
}

function isLunchHours() {
  const now = new Date();
  const day = now.getDay();
  if (day === 0 || day === 6) return false;
  const mins = now.getHours() * 60 + now.getMinutes();
  return mins < 14 * 60;
}

// buildGuestMenuTabs disabled for Hsu's Gourmet — tabs hardcoded in index.html
window.buildGuestMenuTabs = function(cats) { return; };

function switchTab(el, tab) {
  if (tab === 'lunch' && !isLunchHours()) { showLunchClosedPopup(); return; }
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  buildMenu(tab);
  const notice = document.getElementById('lunch-notice');
  if (notice) notice.style.display = tab === 'lunch' ? 'block' : 'none';
}

function openImgModal(src, name) {
  let modal = document.getElementById('img-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'img-modal';
    modal.style.cssText = 'display:none;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;padding:20px;';
    modal.onclick = () => { modal.style.display = 'none'; };
    modal.innerHTML = `
      <div style="position:relative;max-width:360px;width:100%;" onclick="event.stopPropagation()">
        <img id="img-modal-img" src="" style="width:100%;border-radius:16px;display:block;box-shadow:0 20px 60px rgba(0,0,0,0.5);">
        <div id="img-modal-name" style="text-align:center;color:#fff;font-family:'DM Sans',sans-serif;font-size:15px;font-weight:600;margin-top:12px;"></div>
        <button onclick="document.getElementById('img-modal').style.display='none'"
          style="position:absolute;top:-12px;right:-12px;width:30px;height:30px;border-radius:50%;background:#fff;border:none;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.3);">✕</button>
      </div>`;
    document.body.appendChild(modal);
  }
  document.getElementById('img-modal-img').src = src;
  document.getElementById('img-modal-name').textContent = name;
  modal.style.display = 'flex';
}

function showLunchClosedPopup() {
  const now = new Date();
  const day = now.getDay();
  const isWeekend = day === 0 || day === 6;
  const msg = isWeekend
    ? 'Lunch is served Monday–Friday only.\n\nWe\'re open for dinner tonight!'
    : 'Lunch is served 11:30 AM – 2:00 PM,\nMonday through Friday.\n\nPlease check back during lunch hours!';
  document.getElementById('lunch-closed-msg').textContent = msg;
  const popup = document.getElementById('lunch-closed-popup');
  if (popup) popup.style.display = 'flex';
}

function addToCart(name, price, emoji, btn, lunchFlag) {
  const lunch = (typeof lunchFlag === 'boolean') ? lunchFlag : (window._currentMenuTab === 'lunch');
  cart.push({ name, price, emoji, guest: currentGuest, lunch });
  if (btn) {
    const count = cart.filter(c => c.name === name && cartGuest(c) === currentGuest).length;
    btn.classList.add('added');
    btn.textContent = '✓ ' + count;
  }
  updateCartBar();
}

function prefillReservationForm() {
  const user    = getUser();
  const profile = loadProfile();
  const userFullName = user ? [user.firstName, user.lastName].filter(s => s && s !== 'undefined').join(' ').trim() : '';
  const profileFullName = [profile?.firstName, profile?.lastName].filter(s => s && s !== 'undefined').join(' ').trim();
  const name = userFullName || profileFullName || '';
  const phone   = user?.phone || profile.phone || '';
  const email   = user?.email || profile.email || '';
  const nameEl  = document.getElementById('res-name');
  const phoneEl = document.getElementById('res-phone');
  const emailEl = document.getElementById('res-email');
  if (nameEl && !nameEl.value)   nameEl.value  = name;
  if (phoneEl && !phoneEl.value) phoneEl.value = phone;
  if (emailEl && !emailEl.value) emailEl.value = email;
}

// ─────────────────────────────────
// PROFILE
// ─────────────────────────────────
const PROFILE_KEY = 'prb_profile';

function loadProfile() {
  try { return JSON.parse(localStorage.getItem(PROFILE_KEY)) || {}; }
  catch(e) { return {}; }
}

function saveProfile() {
  const user = getUser();
  const firstNameVal = document.getElementById('pf-firstname').value.trim();
  if (!firstNameVal || !/[a-zA-Z]/.test(firstNameVal)) {
    alert('Please enter your first name.');
    document.getElementById('pf-firstname')?.focus();
    return;
  }
  const profile = {
    firstName: firstNameVal,
    lastName:  document.getElementById('pf-lastname').value.trim(),
    email:     document.getElementById('pf-email').value.trim() || user?.email || '',
    phone:     document.getElementById('pf-phone').value.trim(),
    address:   document.getElementById('pf-address').value.trim(),
    city:      document.getElementById('pf-city').value.trim(),
    state:     document.getElementById('pf-state').value.trim(),
    zip:       document.getElementById('pf-zip').value.trim(),
  };
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  const updated = { ...(user || {}), ...profile };
  localStorage.setItem('prb_user', JSON.stringify(updated));
  updateProfileUI();
  updateAuthUI();
  showToastMsg('✅ Profile saved!');
  const fbUrl = window.location.origin + '/js/firebase-menu.js';
  import(fbUrl).then(({ saveProfileToFirebase, savePointsToFirebase }) => {
    saveProfileToFirebase(profile).then(ok => {
      if (ok) showToastMsg('✅ Profile saved & synced!');
    }).catch(() => {});
    const u = getUser();
    if (u?.email) {
      savePointsToFirebase(u.email, u.points || 0, u.pointsLog || [], u.tierPoints || 0).catch(() => {});
    }
  }).catch(() => {});
}

function updateProfileUI() {
  const user    = getUser();
  const profile = loadProfile();
  const data = {
    firstName: profile.firstName || user?.firstName || '',
    lastName:  profile.lastName  || user?.lastName  || '',
    email:     profile.email     || user?.email     || '',
    phone:     profile.phone     || user?.phone     || '',
    address:   profile.address   || '',
    city:      profile.city      || '',
    state:     profile.state     || '',
    zip:       profile.zip       || '',
  };
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val; };
  set('pf-firstname', data.firstName); set('pf-lastname',  data.lastName);
  set('pf-email',     data.email);     set('pf-phone',     data.phone);
  set('pf-address',   data.address);   set('pf-city',      data.city);
  set('pf-state',     data.state);     set('pf-zip',       data.zip);
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(' ');
  const avatarEl = document.getElementById('profile-avatar');
  const nameEl   = document.getElementById('profile-name-display');
  const emailEl  = document.getElementById('profile-email-display');
  if (avatarEl) avatarEl.textContent = fullName ? fullName.slice(0,1).toUpperCase() : '👤';
  if (nameEl)   nameEl.textContent   = fullName || 'Guest';
  if (emailEl)  emailEl.textContent  = data.email || 'Not signed in';
}

function signOutAndClear() {
  localStorage.removeItem('prb_user');
  updateAuthUI();
  goTo('home');
  showToastMsg('Signed out');
}

function showToastMsg(msg) {
  let t = document.getElementById('app-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'app-toast';
    t.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:var(--ink);color:var(--gold);padding:10px 20px;border-radius:20px;font-size:13px;z-index:9999;transition:opacity 0.3s;';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = '1';
  setTimeout(() => { t.style.opacity = '0'; }, 2500);
}

// ─────────────────────────────────
// PICKUP TIME
// ─────────────────────────────────
const PICKUP_KEY = 'prb_pickup_settings';
let selectedPickupTime = null;

// Live-synced from Firestore (see initPickupSettingsSync below) so a
// change the admin makes to prep time/hours shows up for every guest's
// browser — this used to live ONLY in the admin's own localStorage, so a
// guest's browser (and therefore the order confirmation email/SMS and the
// admin Orders list, which just display whatever string the guest's
// browser generated) never saw the update at all.
let livePickupSettings = null;

function getPickupSettings() {
  if (livePickupSettings) return livePickupSettings;
  try { return JSON.parse(localStorage.getItem(PICKUP_KEY)) || { prepTime:30, allowSchedule:true, maxAdvance:4, open:'11:30', close:'21:00' }; }
  catch(e) { return { prepTime:30, allowSchedule:true, maxAdvance:4, open:'11:30', close:'21:00' }; }
}

async function initPickupSettingsSync() {
  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    const { loadPickupSettingsFromFirebase, listenPickupSettings } = await import(fbUrl);
    const fresh = await loadPickupSettingsFromFirebase();
    if (fresh) {
      livePickupSettings = fresh;
      localStorage.setItem(PICKUP_KEY, JSON.stringify(fresh));
    }
    listenPickupSettings(updated => {
      livePickupSettings = updated;
      localStorage.setItem(PICKUP_KEY, JSON.stringify(updated));
      // Rebuild the pickup dropdown immediately if the guest has it open
      // right now, so a prep-time change is reflected without a refresh.
      if (document.getElementById('pickup-time-select')) buildPickupSlots();
    });
  } catch(e) { console.warn('Pickup settings sync error:', e); }
}

function buildPickupSlots() {
  const container = document.getElementById('pickup-time-slots');
  if (!container) return;
  container.innerHTML = '';
  const s = getPickupSettings();
  const now = new Date();
  const prepMs = s.prepTime * 60 * 1000;
  const earliest = new Date(now.getTime() + prepMs);
  earliest.setMinutes(Math.ceil(earliest.getMinutes() / 15) * 15, 0, 0);

  // Store's actual open/close times (from Admin > Pickup Settings), converted
  // to "minutes since midnight" for comparison. ASAP used to be offered
  // unconditionally regardless of the clock — a guest could place an ASAP
  // order minutes (or hours) after closing.
  // IMPORTANT: closing-time-only comparison (nowMins >= closeMins) breaks
  // after midnight — at 2AM, nowMins (~120) is LESS than closeMins (~1260
  // for a 9PM close), so it looked like "still before closing" and ASAP was
  // wrongly offered again in the middle of the night. We now also treat any
  // time before the store's opening time as closed.
  const [closeH, closeM] = (s.close || '21:00').split(':').map(Number);
  const [openH, openM] = (s.open || '11:30').split(':').map(Number);
  const closeMins = closeH * 60 + closeM;
  const openMins = openH * 60 + openM;
  const nowMins = now.getHours() * 60 + now.getMinutes();
  const pastClosing = nowMins >= closeMins || nowMins < openMins;
  // Lunch/dinner break — e.g. 2PM–5PM. ASAP must be blocked here too: this
  // used to only gate the "no slots yet" placeholder further down, so ASAP
  // still slipped through and let guests order during the closed window
  // between lunch and dinner service.
  const isBreakTime = nowMins >= 14 * 60 && nowMins < 17 * 60;
  const isWeekendBeforeDinner = (now.getDay() === 0 || now.getDay() === 6) && nowMins < 17 * 60;
  const asapBlocked = pastClosing || isBreakTime || isWeekendBeforeDinner;

  const wrap = document.createElement('div');
  wrap.style.cssText = 'position:relative;';
  const select = document.createElement('select');
  select.id = 'pickup-time-select';
  select.className = 'form-input';
  select.style.cssText = 'width:100%;appearance:none;-webkit-appearance:none;padding-right:36px;cursor:pointer;';

  if (!asapBlocked) {
    const asapOpt = document.createElement('option');
    asapOpt.value = 'ASAP (~' + s.prepTime + ' min)';
    asapOpt.textContent = '⚡ ASAP (~' + s.prepTime + ' min)';
    select.appendChild(asapOpt);
    selectedPickupTime = { label: asapOpt.value };
  } else {
    selectedPickupTime = null;
  }

  if (s.allowSchedule !== false) {
    const isWeekendToday = now.getDay() === 0 || now.getDay() === 6;
    const windows = isWeekendToday
      ? [{ open: 17 * 60, close: 21 * 60 + 15 }]
      : [{ open: 11 * 60 + 30, close: 14 * 60 }, { open: 17 * 60, close: 21 * 60 + 15 }];
    const isMorning = nowMins < (isWeekendToday ? 17 * 60 : 11 * 60);
    if (isBreakTime || pastClosing) {
      if (select.options.length === 0) {
        const noAsap = document.createElement('option');
        noAsap.value = ''; noAsap.textContent = '🕐 Select pickup time';
        noAsap.disabled = true; noAsap.selected = true;
        select.appendChild(noAsap);
      }
    }
    let t;
    if (isMorning) {
      t = (() => { const d = new Date(now); d.setHours(11, 30, 0, 0); return d; })();
    } else if (isBreakTime || (isWeekendToday && nowMins < 17 * 60)) {
      t = (() => { const d = new Date(now); d.setHours(17, 0, 0, 0); return d; })();
    } else {
      t = new Date(earliest.getTime() + 15 * 60 * 1000);
    }
    while (true) {
      const totalMins = t.getHours() * 60 + t.getMinutes();
      const inWindow = windows.some(w => totalMins >= w.open && totalMins <= w.close);
      if (inWindow) {
        const opt = document.createElement('option');
        const tEnd = new Date(t.getTime() + 15 * 60 * 1000);
        const labelStart = t.toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' });
        const labelEnd   = tEnd.toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' });
        opt.value = labelStart + ' – ' + labelEnd;
        opt.textContent = '🕐 ' + labelStart + ' – ' + labelEnd;
        select.appendChild(opt);
      }
      t = new Date(t.getTime() + 15 * 60 * 1000);
      if (t.getHours() >= 22) break;
    }
  }

  // If closing time has passed and no scheduled slots remain either (e.g. no
  // slots for tomorrow are generated here — this UI is same-day only), the
  // store is genuinely closed for online ordering right now. Disable the
  // picker and block checkout rather than silently defaulting to ASAP.
  const hasRealOption = Array.from(select.options).some(o => o.value !== '');
  if (pastClosing && !hasRealOption) {
    select.innerHTML = '';
    const closedOpt = document.createElement('option');
    closedOpt.value = ''; closedOpt.textContent = '🌙 Closed for online orders';
    closedOpt.disabled = true; closedOpt.selected = true;
    select.appendChild(closedOpt);
    select.disabled = true;
    selectedPickupTime = null;
  }

  select.addEventListener('change', () => { selectedPickupTime = select.value ? { label: select.value } : null; });
  const arrow = document.createElement('div');
  arrow.style.cssText = 'position:absolute;right:12px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--gold);font-size:14px;';
  arrow.textContent = '▾';
  wrap.appendChild(select); wrap.appendChild(arrow);
  container.appendChild(wrap);
}

// ─────────────────────────────────
// RESERVATION
// ─────────────────────────────────
let _blackoutDates = null;

async function loadBlackoutDates() {
  if (_blackoutDates && _blackoutDates.length > 0) return _blackoutDates;
  try {
    const { db } = await import('/js/firebase-menu.js');
    const { collection, getDocs } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    const snap = await getDocs(collection(db, 'blackout_dates'));
    console.log('🔥 blackout snap size:', snap.size);
    _blackoutDates = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    console.log('🔥 blackout loaded:', _blackoutDates.length);
  } catch(e) {
    console.error('blackout load error:', e);
    _blackoutDates = [];
  }
  return _blackoutDates;
}

function isDateBlackedOut(date, blackouts) {
  const dow = date.getDay();
  const dateStr = date.toLocaleDateString('en-CA');
  return blackouts.some(b => {
    if (b.type === 'date' && b.date === dateStr && !b.startTime) return true;
    if (b.type === 'recurring' && parseInt(b.dow) === dow && !b.startTime) return true;
    return false;
  });
}

function isTimeBlackedOut(date, slot, blackouts) {
  const dow = date.getDay();
  const dateStr = date.toLocaleDateString('en-CA');
  const slotMins = slot.h * 60 + slot.m;
  return blackouts.some(b => {
    if (!b.startTime) return false;
    const startMins = parseInt(b.startTime.split(':')[0]) * 60 + parseInt(b.startTime.split(':')[1]);
    const endMins = parseInt(b.endTime.split(':')[0]) * 60 + parseInt(b.endTime.split(':')[1]);
    if (slotMins < startMins || slotMins >= endMins) return false;
    if (b.type === 'date' && b.date === dateStr) return true;
    if (b.type === 'recurring' && parseInt(b.dow) === dow) return true;
    return false;
  });
}

async function buildDates() {
  const grid = document.getElementById('date-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const blackouts = await loadBlackoutDates();
  const today = new Date();
  let firstAvailable = true;
  for (let i = 0; i < 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const isBlocked = isDateBlackedOut(d, blackouts);
    const cell = document.createElement('div');
    cell.className = 'date-cell' + (!isBlocked && firstAvailable ? ' selected' : '');
    if (isBlocked) cell.className += ' blacked-out';
    cell.dataset.date = d.toLocaleDateString('en-CA'); // ISO format: YYYY-MM-DD
    cell.innerHTML =
      '<div class="dc-day">' + d.toLocaleDateString('en-US',{weekday:'short'}) + '</div>' +
      '<div class="dc-num">' + d.getDate() + '</div>' +
      '<div class="dc-mon">' + d.toLocaleDateString('en-US',{month:'short'}) + '</div>' +
      (isBlocked ? '<div style="font-size:9px;color:#e74c3c;margin-top:2px;">Unavailable</div>' : '');
    if (!isBlocked) {
      if (firstAvailable) firstAvailable = false;
      cell.addEventListener('click', function() {
        document.querySelectorAll('.date-cell').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        buildTimeSlots();
      });
    } else {
      cell.style.cssText += 'opacity:0.4;cursor:not-allowed;';
    }
    grid.appendChild(cell);
  }
  buildTimeSlots();
}

async function buildTimeSlots() {
  const grid = document.getElementById('time-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const blackouts = await loadBlackoutDates();
const selectedDateEl = document.querySelector('.date-cell.selected');
const selectedDate = (() => {
  if (selectedDateEl && selectedDateEl.dataset.date) {
    const [y, m, d] = selectedDateEl.dataset.date.split('-').map(Number);
    return new Date(y, m - 1, d);
  }
  const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate());
})();
  const slots = [];
  const dayOfWeek = selectedDate.getDay(); // 0=Sun, 6=Sat
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  // Lunch only Mon-Fri
  if (!isWeekend) {
    for (let h = 11; h <= 13; h++) {
      for (let m = 0; m < 60; m += 15) {
        if (h === 11 && m < 30) continue;
        if (h === 13 && m > 30) continue;
        slots.push({ h, m, period: 'Lunch' });
      }
    }
  }
  for (let h = 17; h <= 20; h++) {
    for (let m = 0; m < 60; m += 15) {
      if (h === 20 && m > 30) continue;
      slots.push({ h, m, period: 'Dinner' });
    }
  }
  let lastPeriod = '';
  const now = new Date();
  const isToday = selectedDate.toDateString() === now.toDateString();
  const nowMins = now.getHours() * 60 + now.getMinutes() + 60;
  let firstChip = true;
  slots.forEach(slot => {
    if (slot.period !== lastPeriod) {
      const header = document.createElement('div');
      header.style.cssText = 'width:100%;font-size:11px;color:var(--muted);letter-spacing:0.08em;text-transform:uppercase;padding:8px 0 4px;flex-basis:100%;';
      header.textContent = slot.period;
      grid.appendChild(header);
      lastPeriod = slot.period;
    }
    const isBlocked = isTimeBlackedOut(selectedDate, slot, blackouts);
    const slotMins = slot.h * 60 + slot.m;
    const isPast = isToday && slotMins < nowMins;
    const d = new Date();
    d.setHours(slot.h, slot.m);
    const label = d.toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit' });
    const chip = document.createElement('div');
    chip.className = 'time-chip' + (!isBlocked && !isPast && firstChip ? ' selected' : '');
    if (isBlocked) chip.className += ' blacked-out';
    if (isPast) chip.className += ' unavailable';
    chip.textContent = label + (isBlocked ? ' 🚫' : '');
    if (!isBlocked && !isPast) {
      if (firstChip) firstChip = false;
      chip.addEventListener('click', function() {
        document.querySelectorAll('.time-chip').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
      });
    } else {
      chip.style.cssText = 'opacity:0.4;cursor:not-allowed;text-decoration:line-through;';
    }
    grid.appendChild(chip);
  });
}

async function confirmReservation() {
  // Check if reservations are paused — uses the live-cached serviceStatus
  // (kept in sync via a real-time listener, see initServiceStatus) instead
  // of a fresh fetch here, so there's no timing/network dependency at the
  // exact moment of submission.
  if (!serviceStatus.reservations) {
    alert('We are temporarily not accepting online reservations. Please call us at (404) 659-2788.');
    return;
  }
  // Prevent double submission
  const btn = document.getElementById('confirm-res-btn');
  if (btn) {
    if (btn.disabled) return;
    btn.disabled = true;
    btn.textContent = 'Processing...';
    btn.style.opacity = '0.6';
  }
  const user    = getUser();
  const profile = loadProfile();
  const dateEl  = document.querySelector('.date-cell.selected');
  const timeEl  = document.querySelector('.time-chip.selected');
  const guests  = document.getElementById('guest-count')?.textContent || '2';
  const special = document.getElementById('res-special')?.value || '';
  const userFullName = user ? [user.firstName, user.lastName].filter(s => s && s !== 'undefined').join(' ').trim() : '';
  const profileFullName = [profile?.firstName, profile?.lastName].filter(s => s && s !== 'undefined').join(' ').trim();
  const resNameInput = document.getElementById('res-name')?.value.trim() || '';
  const resName = resNameInput || userFullName || profileFullName || '';
  const resPhone = document.getElementById('res-phone')?.value.trim() || '';
  const resEmail = document.getElementById('res-email')?.value.trim() || '';
if (!resName) { alert('Please enter your name.'); if (btn) { btn.disabled = false; btn.textContent = 'Confirm Reservation'; btn.style.opacity = '1'; } return; }
  if (!resPhone || resPhone.replace(/\D/g,'').length < 10) { alert('Please enter a valid phone number.'); if (btn) { btn.disabled = false; btn.textContent = 'Confirm Reservation'; btn.style.opacity = '1'; } return; }
  if (!resEmail || !resEmail.includes('@')) { alert('Please enter a valid email address.'); if (btn) { btn.disabled = false; btn.textContent = 'Confirm Reservation'; btn.style.opacity = '1'; } return; }
  const reservation = {
    id: Date.now().toString(),
    date: dateEl ? dateEl.dataset.date || dateEl.textContent.trim() : new Date().toLocaleDateString(),
    time: timeEl ? timeEl.textContent.trim() : '6:00 PM',
    guests: parseInt(guests),
    special, name: resName, phone: resPhone, email: resEmail,
    status: 'confirmed', createdAt: Date.now(),
  };
  try {
    const existing = JSON.parse(localStorage.getItem('prb_reservations') || '[]');
    existing.unshift(reservation);
    localStorage.setItem('prb_reservations', JSON.stringify(existing));
  } catch(e) {}
  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    import(fbUrl).then(({ saveReservationToFirebase }) => {
      saveReservationToFirebase(reservation).catch(e => console.warn('Reservation save failed:', e));
    });
  } catch(e) {}
  fetch('/api/notify-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      orderItems: [{ name: 'Table for ' + reservation.guests + ' guests', price: 0, emoji: '🗓️' }],
      subtotal: 0, tax: 0, tip: 0, total: 0,
      customer: { name: reservation.name, email: reservation.email, phone: reservation.phone },
      orderId: reservation.id,
      pickupTime: reservation.date + ' at ' + reservation.time,
      isReservation: true, special: reservation.special,
      notifEmails: getNotifEmails(), notifPhones: getNotifPhones(),
      guestSmsConsent: document.getElementById('sms-consent-res')?.checked || false,
    }),
  }).then(r => r.json()).then(d => console.log('Reservation notification sent:', d)).catch(e => console.warn(e));
  showSuccess('reservation');
}

function buildMyReservations() {
  const el = document.getElementById('my-reservations-list');
  if (!el) return;
  let reservations = [];
  try { reservations = JSON.parse(localStorage.getItem('prb_reservations') || '[]'); } catch(e) {}
  if (!reservations.length) {
    el.innerHTML = '<div style="font-size:13px;color:var(--muted);padding:12px 0;text-align:center;">No reservations yet.</div>';
    return;
  }
  el.innerHTML = reservations.map(r => {
    const isUpcoming = new Date(r.createdAt) >= (Date.now() - 86400000 * 1);
    return `<div style="background:var(--card-bg);border:1px solid var(--border);border-radius:14px;padding:16px;margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
        <div>
          <div style="font-size:14px;font-weight:600;">${r.date}</div>
          <div style="font-size:13px;color:var(--gold);margin-top:2px;">${r.time} · ${r.guests} guests</div>
        </div>
        <div style="font-size:11px;padding:4px 10px;border-radius:20px;background:${isUpcoming ? 'rgba(200,169,110,0.12)' : 'var(--bone)'};color:${isUpcoming ? 'var(--gold)' : 'var(--muted)'};">
          ${isUpcoming ? '✦ Upcoming' : 'Past'}
        </div>
      </div>
      ${r.special ? `<div style="font-size:12px;color:var(--muted);">📝 ${r.special}</div>` : ''}
    </div>`;
  }).join('');
}

function changeGuests(delta) {
  guestCount = Math.max(1, Math.min(20, guestCount + delta));
  const el = document.getElementById('guest-count');
  if (el) el.textContent = guestCount;
}

function selectTime(el) {
  document.querySelectorAll('.time-chip').forEach(t => t.classList.remove('selected'));
  el.classList.add('selected');
}

// ─────────────────────────────────
// TIP
// ─────────────────────────────────
function selectTip(el, pct) {
  document.querySelectorAll('.tip-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  const customWrap = document.getElementById('tip-custom-wrap');
  if (el.id === 'tip-custom-btn') {
    tipPercent = 0; tipCustom = 0;
    if (customWrap) customWrap.style.display = 'flex';
    const inp = document.getElementById('tip-custom-input');
    if (inp) { inp.value = ''; inp.focus(); }
  } else if (el.id === 'tip-no-btn') {
    tipPercent = 0; tipCustom = null;
    if (customWrap) customWrap.style.display = 'none';
  } else {
    tipPercent = pct; tipCustom = null;
    if (customWrap) customWrap.style.display = 'none';
  }
  buildCheckoutSummary();
}

function setCustomTip(val) { tipCustom = parseFloat(val) || 0; buildCheckoutSummary(); }
function getTipAmount(subtotal) { if (tipCustom !== null) return tipCustom; return subtotal * (tipPercent / 100); }

function selectPM(el) {
  document.querySelectorAll('.pm-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

function togglePoints() {
  const user = getUser();
  const pts = user ? (user.points || 0) : 0;
  const needed = 500;
  if (!usePoints && pts < needed) { showToastMsg('⚠️ You need 500 pts ($5) minimum to use points'); return; }
  usePoints = !usePoints;
  const t = document.getElementById('pt-toggle');
  if (t) t.classList.toggle('on', usePoints);
  buildCheckoutSummary();
}

// ─────────────────────────────────
// REWARDS
// ─────────────────────────────────
const TIERS = [
  { name:'Bronze',   icon:'🥉', min:0,    max:999,  rate:2, color:'#cd7f32' },
  { name:'Silver',   icon:'🥈', min:1000, max:1999, rate:3, color:'#a8a9ad' },
  { name:'Gold',     icon:'🥇', min:2000, max:2999, rate:4, color:'#c8a96e' },
  { name:'Platinum', icon:'💎', min:3000, max:99999,rate:5, color:'#5c6bc0' },
];

function getNotifEmails() {
  try {
    const s = JSON.parse(localStorage.getItem('prb_notif_settings') || '{}');
    if (s.emails && s.emails.length) return s.emails;
  } catch(e) {}
  if (window._notifSettings?.emails?.length) return window._notifSettings.emails;
  return ['yshahn@gmail.com', 'ymhahn@gmail.com'];
}
function getNotifPhones() {
  try {
    const s = JSON.parse(localStorage.getItem('prb_notif_settings') || '{}');
    if (s.phones && s.phones.length) return s.phones;
  } catch(e) {}
  if (window._notifSettings?.phones?.length) return window._notifSettings.phones;
  return ['7705008420', '6788629389'];
}

function getTierPoints(user) { return user?.tierPoints !== undefined ? user.tierPoints : (user?.points || 0); }
function getTier(points) { return TIERS.slice().reverse().find(t => points >= t.min) || TIERS[0]; }
function getEarnRate(user) { const tp = getTierPoints(user); return getTier(tp).rate; }

function checkYearlyReset() {
  return; // Yearly reset disabled — points & tiers are permanent
  const user = getUser();
  if (!user) return;
  const now = new Date();
  const lastReset = user.lastReset ? new Date(user.lastReset) : null;
  const needsReset = !lastReset || lastReset.getFullYear() < now.getFullYear();
  if (needsReset) {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    import(fbUrl).then(async ({ loadPointsFromFirebase, savePointsToFirebase }) => {
      // Merge with Firebase's latest state first — protects against overwriting
      // history (e.g. a signup bonus) with a stale/incomplete local user object.
      let basePoints = user.points || 0;
      let baseLog    = user.pointsLog || [];
      let baseTier   = user.tierPoints || 0;
      try {
        if (user.email) {
          const fbPts = await loadPointsFromFirebase(user.email);
          if (fbPts) {
            basePoints = fbPts.points ?? basePoints;
            baseLog    = (fbPts.pointsLog && fbPts.pointsLog.length >= baseLog.length) ? fbPts.pointsLog : baseLog;
            baseTier   = fbPts.tierPoints ?? baseTier;
          }
        }
      } catch(e) {
        console.warn('checkYearlyReset: could not load Firebase points, using local state:', e);
      }

      const prevTier = getTier(baseTier).name;
      const newLog = [...baseLog, {
        desc: 'Annual Tier Reset (was ' + prevTier + ') \u2192 Bronze',
        pts: 0,
        date: Date.now()
      }];

      user.points     = basePoints;
      user.tierPoints = 0;
      user.pointsLog  = newLog;
      user.lastReset  = now.toISOString();
      localStorage.setItem(USER_KEY, JSON.stringify(user));

      savePointsToFirebase(user.email, basePoints, newLog, 0).catch(() => {});
    }).catch(() => {});
  }
}

function buildRewardsScreen() {
  checkYearlyReset();
  const user = getUser();
  const points = user ? (user.points || 0) : 0;
  const tierPts = user?.tierPoints !== undefined ? user.tierPoints : points;
  const tier = getTier(tierPts);
  const nextTier = TIERS.find(t => t.min > tierPts);
  const rhPoints    = document.getElementById('rh-points');
  const rhSub       = document.getElementById('rh-sub');
  const rhCashValue = document.getElementById('rh-cash-value');
  if (rhPoints)    rhPoints.textContent    = points.toLocaleString();
  if (rhSub)       rhSub.textContent       = user ? tier.icon + ' ' + tier.name + ' · ' + tier.rate + '% earn rate' : 'Sign in to view your points';
  if (rhCashValue) rhCashValue.textContent = '$' + (points / 100).toFixed(2);
  const tiersEl = document.getElementById('rewards-tiers');
  if (tiersEl) {
    tiersEl.innerHTML = TIERS.map(t => {
      const isActive = getTier(tierPts).name === t.name;
      const pct = t.name === 'Platinum' ? 100 : Math.min(100, ((tierPts - t.min) / (t.max - t.min + 1)) * 100);
      return '<div style="background:' + (isActive ? 'var(--ink)' : 'var(--card-bg)') + ';border:1px solid ' + (isActive ? 'var(--gold)' : 'var(--border)') + ';border-radius:12px;padding:14px 16px;margin-bottom:8px;">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:' + (isActive ? '8' : '0') + 'px;">' +
          '<div style="display:flex;align-items:center;gap:8px;">' +
            '<div style="font-size:20px;">' + t.icon + '</div>' +
            '<div><div style="font-size:13px;font-weight:600;color:' + (isActive ? '#fff' : 'var(--ink)') + ';">' + t.name + '</div>' +
            '<div style="font-size:11px;color:' + (isActive ? 'rgba(255,255,255,0.6)' : 'var(--muted)') + ';">' + (t.min === 0 ? '0' : t.min.toLocaleString()) + (t.name === 'Platinum' ? '+' : '–' + t.max.toLocaleString()) + ' pts</div></div>' +
          '</div>' +
          '<div style="font-size:15px;font-weight:700;color:var(--gold);">' + t.rate + '%</div>' +
        '</div>' +
        (isActive && nextTier ? '<div style="background:rgba(255,255,255,0.1);border-radius:4px;height:4px;overflow:hidden;"><div style="width:' + pct + '%;height:100%;background:var(--gold);border-radius:4px;"></div></div><div style="font-size:10px;color:rgba(255,255,255,0.5);margin-top:4px;">' + (nextTier.min - tierPts) + ' pts to ' + nextTier.name + '</div>' : '') +
      '</div>';
    }).join('');
  }
const resetEl = document.getElementById('rewards-reset');
  if (resetEl) resetEl.style.display = 'none';
  const history = document.getElementById('points-history');
  if (history && user) {
    const log = user.pointsLog || [];
    if (!log.length) {
      history.innerHTML = '<div style="padding:20px;text-align:center;color:var(--muted);font-size:13px;">No activity yet. Place an order to earn points!</div>';
    } else {
      history.innerHTML = log.slice().reverse().map(entry =>
        '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid var(--border);">' +
          '<div><div style="font-size:13px;font-weight:500;">' + entry.desc + '</div>' +
          '<div style="font-size:11px;color:var(--muted);">' + new Date(entry.date).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) + '</div></div>' +
          '<div style="font-size:15px;font-weight:600;color:' + (entry.pts > 0 ? 'var(--gold)' : '#c0392b') + ';">' + (entry.pts > 0 ? '+' : '') + entry.pts + ' pts</div>' +
        '</div>'
      ).join('');
    }
  }
}

function rateStar(n) { document.querySelectorAll('.star').forEach((s,i) => s.classList.toggle('lit', i < n)); }
function toggleRC(el) { el.classList.toggle('selected'); }

// ─────────────────────────────────
// STRIPE PAYMENT
// ─────────────────────────────────
async function startStripeCheckout() {
  if (cart.length === 0) { alert('Your cart is empty.'); return; }

  // Guard against stale lunch items: switching to the Lunch tab is blocked
  // outside lunch hours, but items already sitting in the cart (added
  // earlier, during valid lunch hours) were never re-checked — a customer
  // could add a lunch item at 1pm, keep browsing, and check out at 6pm with
  // it still in the cart. Re-validate every cart item against the CURRENT
  // menu availability right before payment, not just at add-to-cart time.
  // Items are tagged item.lunch when added from the Lunch tab. (Matching by name
  // missed options like "Item \u2014 Option" and wrongly matched dinner items that
  // share a lunch item's name, which is also why weekends needed a special skip.)
  const staleLunchItems = cart.filter(item => item.lunch);
  if (staleLunchItems.length > 0 && !isLunchHours()) {
    const names = [...new Set(staleLunchItems.map(i => i.name))].join(', ');
    alert(`Sorry, lunch is only served Monday\u2013Friday during lunch hours, and it's outside those hours now.\n\nPlease remove from your cart: ${names}`);
    return;
  }

  const select = document.getElementById('pickup-time-select');
  if (select && (select.disabled || !select.value)) {
    alert('We are closed for online orders right now. Please check our hours or call us at (404) 659-2788.');
    return;
  }
  const user = getUser();
  if (!user) {
    const firstName = (document.getElementById('gi-firstname') || {}).value.trim();
    const email     = (document.getElementById('gi-email')     || {}).value.trim();
    const phone     = (document.getElementById('gi-phone')     || {}).value.trim();
    if (!firstName || !/[a-zA-Z]/.test(firstName)) { alert('Please enter your first name to continue.'); document.getElementById('gi-firstname')?.focus(); return; }
    if (!email || !email.includes('@')) { alert('Please enter a valid email address to continue.'); document.getElementById('gi-email')?.focus(); return; }
    if (!phone || phone.replace(/\D/g,'').length < 10) { alert('Please enter a valid phone number to continue.'); document.getElementById('gi-phone')?.focus(); return; }
  }
  const payBtn = document.getElementById('pay-btn');
  if (payBtn) { payBtn.textContent = 'Processing...'; payBtn.disabled = true; }
  const firstName = (document.getElementById('gi-firstname') || {}).value || '';
  const lastName  = (document.getElementById('gi-lastname')  || {}).value || '';
  const email     = (document.getElementById('gi-email')     || {}).value || '';
  const items = cart.map(item => ({ name: item.name, price: item.price, quantity: 1 }));
  const subtotal    = cart.reduce((s, i) => s + i.price, 0);
  const platformFee = 1.00;
  const tax         = subtotal * 0.089;
  const tip         = getTipAmount(subtotal);
  const discount    = selectedPointsDiscount || 0;
  const total       = Math.max(subtotal + platformFee + tax + tip - discount, 0.50);
  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items, customerEmail: email, customerName: (firstName + ' ' + lastName).trim(), usePoints, pointsDiscount: selectedPointsDiscount || 0, tip }),
    });
    const data = await res.json();
    if (data.url) {
      const smsConsent = document.getElementById('sms-consent')?.checked || false;
      const specialRequest = document.getElementById('checkout-special-request')?.value.trim() || '';
      const carModel = document.getElementById('car-model')?.value.trim() || '';
      const carColor = document.getElementById('car-color')?.value.trim() || '';
      // Guest numbers for a group order — renumbered 1..k over only the guests
      // that actually have items, so the order never shows a gap.
      const _gIds = [...new Set(cart.map(cartGuest))].sort((a, b) => a - b);
      const _gMap = {}; _gIds.forEach((g, idx) => { _gMap[g] = idx + 1; });
      localStorage.setItem('hsus_pending_order', JSON.stringify({
        orderItems: cart.map(i => ({ name: i.name, price: i.price, emoji: i.emoji, guest: _gMap[cartGuest(i)] })),
        subtotal, tax, tip, total,
        pickupTime: selectedPickupTime ? selectedPickupTime.label : 'ASAP',
        customer: { name: (firstName + ' ' + lastName).trim(), email, phone: (document.getElementById('gi-phone') || {}).value || '' },
        orderId: Date.now().toString().slice(-6),
        smsConsent, specialRequest,
        pointsDiscount: selectedPointsDiscount || 0,
        pickupType: pickupType || 'instore',
        carModel, carColor,
      }));
      window.location.href = data.url;
    } else { throw new Error(data.error || 'Failed to create checkout session'); }
  } catch (err) {
    console.error('Payment error:', err);
    alert('Payment error: ' + err.message);
    if (payBtn) { payBtn.textContent = 'Pay $' + total.toFixed(2); payBtn.disabled = false; }
  }
}

function checkPaymentResult() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('payment') === 'success') {
    cart = [];
    resetGuests();
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('success-screen').classList.add('active');
    document.getElementById('bottom-nav').style.display = 'none';
    document.getElementById('success-icon').textContent  = '✅';
    document.getElementById('success-title').textContent = 'Payment Complete!';
    document.getElementById('success-msg').textContent   = 'Thank you for your order!\nWe will have it ready soon.';
    document.getElementById('earned-pts').textContent    = '+pts earned';
    const pendingOrder = localStorage.getItem('hsus_pending_order');
    if (pendingOrder) {
      try {
        const orderData = JSON.parse(pendingOrder);
        if (orderData.pickupTime) {
          document.getElementById('success-msg').textContent = 'Thank you for your order!\n🕐 Pickup ready: ' + orderData.pickupTime;
        }
        fetch('/api/notify-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...orderData,
            notifEmails: getNotifEmails(), notifPhones: getNotifPhones(),
            guestSmsConsent: orderData.smsConsent,
            specialRequest: orderData.specialRequest || '',
            pickupType: orderData.pickupType || 'instore',
            carModel: orderData.carModel || '', carColor: orderData.carColor || '',
          }),
        }).then(r => r.json()).then(d => console.log('Notification sent:', d)).catch(e => console.warn('Notify error:', e));

        // Update points using Firebase as the source of truth. localStorage can be
        // lost/reset during the Stripe redirect (especially on mobile), so we
        // re-fetch the latest points from Firebase right before applying this
        // order's earn/redeem, instead of trusting local state blindly.
        const _localUser = getUser();
        const _email = (_localUser && _localUser.email) || (orderData.customer && orderData.customer.email) || '';
        const _subtotal = parseFloat(orderData.subtotal) || 0;

        if (_email) {
          const _fbUrl = window.location.origin + '/js/firebase-menu.js';
          import(_fbUrl).then(async ({ loadPointsFromFirebase, savePointsToFirebase, saveOrderToFirebase }) => {
            let _basePoints = _localUser?.points || 0;
            let _baseTier   = _localUser?.tierPoints || 0;
            let _baseLog    = _localUser?.pointsLog || [];

            try {
              const fbPts = await loadPointsFromFirebase(_email);
              if (fbPts) {
                _basePoints = fbPts.points || 0;
                _baseTier   = fbPts.tierPoints || 0;
                _baseLog    = fbPts.pointsLog || [];
              }
            } catch(e) {
              console.warn('Could not load latest points from Firebase, falling back to local:', e);
            }

            const _earnRate = getEarnRate({ tierPoints: _baseTier });
            const _earned = Math.floor(_subtotal * _earnRate);
            const _used = orderData.pointsDiscount ? Math.round(parseFloat(orderData.pointsDiscount) * 100) : 0;

            const _newPoints = Math.max(0, _basePoints - _used + _earned);
            const _newTier   = _baseTier + _earned;
            const _newLog    = [..._baseLog];
            if (_used > 0) _newLog.push({ desc: 'Points redeemed ($' + parseFloat(orderData.pointsDiscount).toFixed(2) + ' off)', pts: -_used, date: Date.now() });
            if (_earned > 0) _newLog.push({ desc: 'Order #' + (orderData.orderId || ''), pts: _earned, date: Date.now() });

            const _updatedUser = { ...(_localUser || {}), email: _email, points: _newPoints, tierPoints: _newTier, pointsLog: _newLog };
            localStorage.setItem(USER_KEY, JSON.stringify(_updatedUser));

            const _earnedEl = document.getElementById('earned-pts');
            if (_earnedEl) {
              if (_earned > 0 && _used > 0) { _earnedEl.textContent = '+' + _earned + ' pts earned · −' + _used + ' pts used'; }
              else if (_earned > 0) { _earnedEl.textContent = '+' + _earned + ' pts earned'; }
              else { _earnedEl.textContent = '−' + _used + ' pts used'; }
            }
            const _earnedBadge = document.querySelector('.earned-badge');
            if (_earnedBadge) _earnedBadge.style.display = 'block';
            updateAuthUI();

            // IMPORTANT: this used to only retry savePointsToFirebase — a
            // failed saveOrderToFirebase (the actual order the admin
            // dashboard reads) was fired with an EMPTY catch, so it failed
            // completely silently, with no retry and no log, whenever it
            // was flaky. Customers still got their email/SMS confirmation
            // (a separate call above), so the order looked "sent" but
            // never appeared in the admin panel. Both saves now retry
            // independently, and a final failure is logged and reported.
            const _saveOrderWithRetry = (attempt) => {
              saveOrderToFirebase(orderData).then(ok => {
                if (!ok && attempt < 5) { setTimeout(() => _saveOrderWithRetry(attempt + 1), 1000 * attempt); }
                else if (!ok) { console.error('Order save failed after retries:', orderData.orderId); reportOrderSaveFailure(orderData); }
              }).catch(e => {
                if (attempt < 5) { setTimeout(() => _saveOrderWithRetry(attempt + 1), 1000 * attempt); }
                else { console.error('Order save failed after retries:', e); reportOrderSaveFailure(orderData); }
              });
            };
            const _saveWithRetry = (attempt) => {
              _saveOrderWithRetry(1);
              savePointsToFirebase(_email, _newPoints, _newLog, _newTier)
                .then(ok => { if (!ok && attempt < 3) setTimeout(() => _saveWithRetry(attempt + 1), 1000 * attempt); })
                .catch(e => { if (attempt < 3) setTimeout(() => _saveWithRetry(attempt + 1), 1000 * attempt); });
            };
            _saveWithRetry(1);
          }).catch(e => console.warn('Firebase import error:', e));
        } else {
          const _earnedEl = document.getElementById('earned-pts');
          if (_earnedEl) _earnedEl.textContent = 'Sign in to earn points!';
          const _earnedBadge = document.querySelector('.earned-badge');
          if (_earnedBadge) _earnedBadge.style.display = 'block';
          const _fbUrl2 = window.location.origin + '/js/firebase-menu.js';
          import(_fbUrl2).then(({ saveOrderToFirebase }) => {
            const _saveGuestOrderWithRetry = (attempt) => {
              saveOrderToFirebase(orderData).then(ok => {
                if (!ok && attempt < 5) { setTimeout(() => _saveGuestOrderWithRetry(attempt + 1), 1000 * attempt); }
                else if (!ok) { console.error('Guest order save failed after retries:', orderData.orderId); reportOrderSaveFailure(orderData); }
              }).catch(e => {
                if (attempt < 5) { setTimeout(() => _saveGuestOrderWithRetry(attempt + 1), 1000 * attempt); }
                else { console.error('Guest order save failed after retries:', e); reportOrderSaveFailure(orderData); }
              });
            };
            _saveGuestOrderWithRetry(1);
          }).catch(() => {});
        }
        localStorage.removeItem('hsus_pending_order');
        history.replaceState({}, '', '/');
        const arrivedSection = document.getElementById('arrived-section');
        if (arrivedSection) {
          arrivedSection.style.display = orderData.pickupType === 'curbside' ? 'block' : 'none';
          window._lastOrder = orderData;
        }
      } catch(e) { console.error('Payment result error:', e); }
    }
  } else if (params.get('payment') === 'cancel') {
    history.replaceState({}, '', '/');
  }
}

function showSuccess(type) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('success-screen').classList.add('active');
  document.getElementById('bottom-nav').style.display = 'none';
  const total = cart.reduce((s,i) => s+i.price, 0);
  const tax   = total * 0.08;
  const finalTotal = (total + tax - (usePoints ? 5 : 0)).toFixed(2);
  const configs = {
    reservation: { icon:'🎋', title:'Reservation Confirmed!', msg:'Your table has been reserved.\nA confirmation will be sent to you.', pts:'' },
    payment:     { icon:'✅', title:'Payment Complete!', msg:'$' + finalTotal + ' has been processed.\nThank you for dining with us!', pts:'+' + Math.round(total) + ' pts' },
    review:      { icon:'🌟', title:'Thanks for your Review!', msg:'Your feedback means a lot to us.', pts:'+30 pts' },
  };
  const c = configs[type] || configs.payment;
  document.getElementById('success-icon').textContent  = c.icon;
  document.getElementById('success-title').textContent = c.title;
  document.getElementById('success-msg').textContent   = c.msg;
  document.getElementById('earned-pts').textContent = c.pts;
  const earnedBadge = document.querySelector('.earned-badge');
  if (earnedBadge) earnedBadge.style.display = (type === 'reservation' || !c.pts) ? 'none' : 'block';
  if (type === 'payment') { cart = []; resetGuests(); }
}

// ─────────────────────────────────
// TOPPINGS MODAL
// ─────────────────────────────────
let _toppingItem = null;
let _toppingQty  = 1;

function openToppingModal(item) {
  _toppingItem = item;
  document.getElementById('topping-modal-title').textContent = item.n;
  document.getElementById('topping-modal-price').textContent = '$' + parseFloat(item.p).toFixed(2);
  updateToppingConfirmBtn();
  const body = document.getElementById('topping-modal-body');
  body.innerHTML =
    `<label style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #f0ebe2;cursor:pointer;">
      <input type="radio" name="topping-choice" value="none" checked style="width:20px;height:20px;accent-color:var(--gold);cursor:pointer;flex-shrink:0;"/>
      <span style="font-size:18px;">🚫</span>
      <span style="flex:1;font-size:14px;font-weight:500;">No Topping</span>
    </label>` +
    item.toppings.map((t, ti) =>
      `<label style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #f0ebe2;cursor:pointer;">
        <input type="checkbox" data-idx="${ti}" style="width:20px;height:20px;accent-color:var(--gold);cursor:pointer;flex-shrink:0;"/>
        
        <span style="flex:1;font-size:14px;">${t.n}</span>
        <span style="font-size:14px;font-weight:600;color:var(--gold);">${parseFloat(t.p) > 0 ? '+$' + parseFloat(t.p).toFixed(2) : 'Free'}</span>
      </label>`
    ).join('');
  body.querySelectorAll('input[type="checkbox"]').forEach(chk => {
    chk.addEventListener('change', () => {
      const radio = body.querySelector('input[type="radio"]');
      const anyChecked = [...body.querySelectorAll('input[type="checkbox"]')].some(c => c.checked);
      if (radio) radio.checked = !anyChecked;
      updateToppingConfirmBtn();
    });
  });
  const radio = body.querySelector('input[type="radio"]');
  if (radio) radio.addEventListener('change', () => {
    body.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
    updateToppingConfirmBtn();
  });
  document.getElementById('topping-modal').style.display = 'flex';
}

function updateToppingConfirmBtn() {
  const btn = document.getElementById('topping-confirm-btn');
  if (!btn || !_toppingItem) return;
  const checks = [...document.querySelectorAll('#topping-modal-body input[type="checkbox"]:checked')];
  const toppingTotal = checks.reduce((sum, chk) => {
    const t = _toppingItem.toppings[parseInt(chk.dataset.idx)];
    return sum + (t ? parseFloat(t.p) || 0 : 0);
  }, 0);
  btn.textContent = `Add to Cart — $${(parseFloat(_toppingItem.p) + toppingTotal).toFixed(2)}`;
}

function closeToppingModal() { document.getElementById('topping-modal').style.display = 'none'; _toppingItem = null; }

function confirmToppingCart() {
  if (!_toppingItem) return;
  const checks = [...document.querySelectorAll('#topping-modal-body input[type="checkbox"]:checked')];
  addToCart(_toppingItem.n, parseFloat(_toppingItem.p), _toppingItem.e, null);
  checks.forEach(chk => {
    const t = _toppingItem.toppings[parseInt(chk.dataset.idx)];
    if (t) addToCart(_toppingItem.n + ' + ' + t.n, parseFloat(t.p) || 0, t.e || '🧂', null);
  });
  closeToppingModal();
  updateCartBar();
  buildMenu(document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1] || 'appetizers');
}

// ─────────────────────────────────
// MULTI-SELECT MODAL
// ─────────────────────────────────
let _msItem = null;
let _msSelections = {};

function openMultiSelectModal(item) {
  _msItem = item;
  _msSelections = {};
  item.multiSelect.forEach((_, i) => _msSelections[i] = []);
  const modal = document.getElementById('ms-modal');
  document.getElementById('ms-modal-title').textContent = item.n;
  document.getElementById('ms-modal-price').textContent = '$' + item.p.toFixed(2);
  const body = document.getElementById('ms-modal-body');
  body.innerHTML = '';
  item.multiSelect.forEach((group, gi) => {
    const section = document.createElement('div');
    section.style.cssText = 'margin-bottom:20px;';
    section.innerHTML = '<div style="font-size:12px;font-weight:600;color:var(--ink);margin-bottom:4px;">' + group.label +
      '<span style="font-size:11px;color:var(--muted);font-weight:400;"> · Choose up to ' + group.max + ' · ' + (group.required ? 'Required' : 'Optional') + '</span></div>';
    group.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'ms-choice-btn';
      btn.textContent = choice;
      btn.dataset.group = gi; btn.dataset.choice = choice;
      btn.addEventListener('click', function() {
        const sel = _msSelections[gi];
        if (this.classList.contains('selected')) {
          this.classList.remove('selected');
          _msSelections[gi] = sel.filter(s => s !== choice);
        } else {
          if (sel.length >= group.max) {
            if (group.max === 1) {
              body.querySelectorAll('.ms-choice-btn[data-group="' + gi + '"].selected').forEach(b => b.classList.remove('selected'));
              _msSelections[gi] = [];
            } else { return; }
          }
          this.classList.add('selected');
          _msSelections[gi] = [..._msSelections[gi], choice];
        }
        updateMsAddBtn();
      });
      section.appendChild(btn);
    });
    body.appendChild(section);
  });
  updateMsAddBtn();
  modal.style.display = 'flex';
}

function updateMsAddBtn() {
  const btn = document.getElementById('ms-add-btn');
  const allRequired = _msItem.multiSelect.every((g, i) => !g.required || _msSelections[i].length >= Math.min(g.max, 1));
  btn.disabled = !allRequired;
  btn.style.opacity = allRequired ? '1' : '0.4';
}

function confirmMultiSelect() {
  if (!_msItem) return;
  const parts = _msItem.multiSelect.flatMap((g, i) => _msSelections[i]).filter(Boolean);
  const name = _msItem.n + ' (' + parts.join(', ') + ')';
  addToCart(name, _msItem.p, _msItem.e, null);
  closeMultiSelectModal();
  buildMenu('lunch');
}

function closeMultiSelectModal() { document.getElementById('ms-modal').style.display = 'none'; _msItem = null; }

// ─────────────────────────────────
// OPTIONS POPUP
// ─────────────────────────────────
function openOptionsPopup(item) {
  const popup = document.getElementById('options-popup');
  document.getElementById('options-popup-title').textContent = item.n;
  document.getElementById('options-popup-desc').textContent  = item.d;
  const list = document.getElementById('options-popup-list');
  list.innerHTML = '';
  item.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = '<span class="option-name">' + opt.n + '</span><span class="option-price">$' + opt.p.toFixed(2) + '</span>';
    btn.addEventListener('click', () => {
      addToCart(item.n + ' — ' + opt.n, opt.p, "", null);
      closeOptionsPopup();
      buildMenu(document.querySelector('.menu-tab.active')?.getAttribute('onclick')?.match(/'(\w+)'/)?.[1] || 'entrees');
    });
    list.appendChild(btn);
  });
  popup.style.display = 'flex';
}

function closeOptionsPopup() { document.getElementById('options-popup').style.display = 'none'; }

// ─────────────────────────────────
// TODAY'S PICKS
// ─────────────────────────────────
const PICKS_KEY = 'hsus_picks';

function getDefaultPicks() {
  return [
    { name:'Peking Duck (3 Courses)', emoji:'🦆', label:"Chef's Signature", origPrice:95.95, salePrice:null },
    { name:'Walnut Shrimp',           emoji:'🦐', label:'Guest Favorite',   origPrice:27.95, salePrice:null },
  ];
}

function loadTodaysPicks() {
  let picks;
  try {
    const raw = localStorage.getItem(PICKS_KEY);
    picks = raw ? JSON.parse(raw) : null;
    if (!picks || !Array.isArray(picks) || picks.length === 0) picks = getDefaultPicks();
  } catch(e) { picks = getDefaultPicks(); }
  const container = document.getElementById('todays-picks-container');
  if (!container) return;
  container.innerHTML = '';
  picks.forEach(pick => {
    const hasDiscount = pick.salePrice !== null && pick.salePrice !== undefined && pick.salePrice < pick.origPrice;
    const div = document.createElement('div');
    div.className = 'featured-item';
    div.style.cursor = 'pointer';
    div.innerHTML =
      '<div>' +
        '<div class="fi-label">' + pick.label + '</div>' +
        '<div class="fi-name">' + pick.name + '</div>' +
        (hasDiscount
          ? '<div class="fi-price"><span class="fi-orig-price">$' + pick.origPrice.toFixed(2) + '</span> <span class="fi-sale-price">$' + pick.salePrice.toFixed(2) + '</span></div>'
          : '<div class="fi-price">$' + pick.origPrice.toFixed(2) + '</div>'
        ) +
      '</div>' +
      '';
    div.addEventListener('click', () => {
      addToCart(pick.name, pick.salePrice || pick.origPrice, pick.emoji, null);
      goTo('order');
      setTimeout(() => goToCart(), 300);
    });
    container.appendChild(div);
  });
}

// ─────────────────────────────────
// HOME SCREEN
// ─────────────────────────────────
function buildHomeScreen() {
  const user = getUser();
  const pts = user ? (user.points || 0) : 0;
  const tier = user ? getTier(user.tierPoints !== undefined ? user.tierPoints : pts) : null;
  const homePoints = document.getElementById('home-points');
  const homeSub    = document.getElementById('home-points-sub');
  const homeValue  = document.getElementById('home-points-value');
  if (homePoints) homePoints.textContent = pts.toLocaleString();
  if (homeValue)  homeValue.textContent  = '$' + (pts / 100).toFixed(2);
  if (homeSub) {
    homeSub.textContent = user
      ? (tier.icon + ' ' + tier.name + ' · ' + tier.rate + '% earn rate')
      : 'Sign in to earn points';
  }
}

// ─────────────────────────────────
// ORDER HISTORY
// ─────────────────────────────────
// Reorders come from order history (no menu-tab info), so decide by name + price:
// lunch only if the base name AND price match a lunch item and not a dinner item.
function isLunchPricedItem(name, price) {
  const base = String(name).split(' \u2014 ')[0].replace(/\s*\(.*\)\s*$/, '').trim();
  const src = window.firebaseMenuData || menuData;
  const priceSet = i => [i.p, ...((i.options || []).map(o => o.p))].map(Number);
  const lunchItem = (Array.isArray(src.lunch) ? src.lunch : menuData.lunch || []).find(i => i.n === base);
  if (!lunchItem || !priceSet(lunchItem).includes(Number(price))) return false;
  const dinnerHas = Object.keys(src).filter(k => k !== 'lunch').some(k =>
    Array.isArray(src[k]) && src[k].some(i => i.n === base && priceSet(i).includes(Number(price))));
  return !dinnerHas;
}

function reorderItems(orderIdx) {
  const o = window._orderHistory?.[orderIdx];
  if (!o) return;
  const orderItems = o.orderItems || o.items || [];
  if (!orderItems.length) { alert('No items found in this order.'); return; }
  cart = [];
  resetGuests();
  orderItems.forEach(i => {
    const name  = i.name || i.n || '';
    const price = parseFloat(i.price || i.p) || 0;
    const emoji = i.emoji || i.e || '🍽️';
    currentGuest = parseInt(i.guest) || 1;   // group order: back to the guest it was ordered for
    if (name) addToCart(name, price, emoji, null, isLunchPricedItem(name, price));
  });
  currentGuest = 1;
  updateCartBar();
  goTo('order');
  goToCheckout();
}

function showOrderHistory() {
  goTo('order-history');
  const user = getUser();
  const histEl = document.getElementById('order-history-list');
  if (!histEl) return;
  histEl.innerHTML = '<div style="padding:24px;text-align:center;color:var(--muted);font-size:13px;">Loading...</div>';
  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    import(fbUrl).then(({ loadOrdersFromFirebase }) => {
      loadOrdersFromFirebase(20).then(orders => {
        const myOrders = user?.email
          ? orders.filter(o => o.customer?.email === user.email || o.customerEmail === user.email)
          : [];
        if (!myOrders.length) {
          histEl.innerHTML = '<div style="padding:32px;text-align:center;color:var(--muted);">No orders yet.</div>';
          return;
        }
        window._orderHistory = myOrders;
        histEl.innerHTML = myOrders.map((o, oi) => {
          const date  = o.createdAt ? new Date(o.createdAt).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) : '';
          const orderItems = o.orderItems || o.items || [];
          const itemNames  = orderItems.map(i => (i.emoji || i.e || '') + ' ' + (i.name || i.n)).join(', ');
          const total = o.total ? '$' + parseFloat(o.total).toFixed(2) : '';
          return `<div style="padding:14px 16px;border-bottom:1px solid var(--border);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
              <div style="font-size:13px;font-weight:600;">${date}</div>
              <div style="font-size:13px;font-weight:600;color:var(--gold);">${total}</div>
            </div>
            <div style="font-size:12px;color:var(--muted);margin-bottom:10px;line-height:1.5;">${itemNames}</div>
            <button onclick="reorderItems(${oi})"
              style="width:100%;padding:10px;background:var(--ink);color:var(--gold);border:1px solid rgba(200,169,110,0.4);border-radius:10px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;cursor:pointer;letter-spacing:0.03em;">
              🔁 Reorder
            </button>
          </div>`;
        }).join('');
      }).catch(() => { histEl.innerHTML = '<div style="padding:24px;text-align:center;color:var(--muted);">Could not load orders.</div>'; });
    }).catch(() => {});
  } catch(e) {}
}

// ─────────────────────────────────
// INIT
// ─────────────────────────────────
// ── Live-cached service status (orders/reservations paused?) ──────────
// Loaded once + kept live via onSnapshot, so pause checks are instant and
// synchronous instead of a fresh network fetch on every button click.
let serviceStatus = { reservations: true, orders: true };

async function initServiceStatus() {
  try {
    const cached = JSON.parse(localStorage.getItem('hsus_services') || 'null');
    if (cached) serviceStatus = { reservations: cached.reservations !== false, orders: cached.orders !== false };
  } catch(e) {}
  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    const { loadServicesFromFirebase, listenServices } = await import(fbUrl);
    const fresh = await loadServicesFromFirebase();
    if (fresh) {
      serviceStatus = { reservations: fresh.reservations !== false, orders: fresh.orders !== false };
      localStorage.setItem('hsus_services', JSON.stringify(serviceStatus));
    }
    listenServices(updated => {
      serviceStatus = { reservations: updated.reservations !== false, orders: updated.orders !== false };
      localStorage.setItem('hsus_services', JSON.stringify(serviceStatus));
    });
  } catch(e) { console.warn('Service status init error:', e); }
}

document.addEventListener('DOMContentLoaded', () => {
  checkYearlyReset();
  updateAuthUI();
  loadTodaysPicks();
  buildHomeScreen();
  refreshCustomerAdminList();
  initServiceStatus();
  initPickupSettingsSync();

  try {
    const fbUrl = window.location.origin + '/js/firebase-menu.js';
    import(fbUrl).then(async ({ db }) => {
      if (!db) return;
      const { doc, setDoc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
      const today = new Date().toISOString().slice(0, 10);
      const statsDoc = doc(db, 'analytics', 'pageviews');
      const snap = await getDoc(statsDoc);
      const data = snap.exists() ? snap.data() : {};
      data[today] = (data[today] || 0) + 1;
      await setDoc(statsDoc, data, { merge: true });
    }).catch(() => {});
  } catch(e) {}

  const _arrivedParam = new URLSearchParams(location.search).get('arrived');
  if (_arrivedParam === '1') {
    setTimeout(() => {
      const orderId = new URLSearchParams(location.search).get('order') || '';
      showArrivedScreen(orderId);
    }, 1500);
  }

  history.replaceState({ screen: 'home' }, '', location.pathname + location.search);
  window.addEventListener('popstate', (e) => {
    const screen = e.state?.screen || 'home';
    goTo(screen, false);
  });

  // ── Firebase 메뉴 로드 — window.firebaseMenuData 세팅
  import('/js/firebase-menu.js')
    .then(({ loadMenuFromFirebase }) => loadMenuFromFirebase())
    .then(data => {
      if (data) {
        window.firebaseMenuData = data;
        const activeTab = document.querySelector('.menu-tab.active');
        if (activeTab) {
          const tabMatch = activeTab.getAttribute('onclick')?.match(/'(\w+)'/);
          if (tabMatch) buildMenu(tabMatch[1]);
        }
      }
    }).catch(() => {});
  const _isPaymentReturn = new URLSearchParams(window.location.search).get('payment') === 'success';
  if (_isPaymentReturn) {
    checkPaymentResult();
  } else {
    goTo('home');
  }

  const _initUser = getUser();
  if (_initUser?.email) {
    const fbUrl2 = window.location.origin + '/js/firebase-menu.js';
    if (_isPaymentReturn) {
      setTimeout(() => {
        import(fbUrl2).then(({ loadPointsFromFirebase }) => {
          loadPointsFromFirebase(_initUser.email).then(fbPts => {
            if (fbPts && fbPts.points !== undefined) {
              const user = getUser();
              if (user) console.log('Firebase points after payment:', fbPts.points, 'local:', user.points);
            }
          }).catch(() => {});
        }).catch(() => {});
      }, 3000);
    } else {
      import(fbUrl2).then(({ loadPointsFromFirebase, loadProfileFromFirebase }) => {
        loadPointsFromFirebase(_initUser.email).then(fbPts => {
          if (fbPts && fbPts.points !== undefined) {
            const user = getUser();
            if (user) {
              user.points     = fbPts.points;
              user.pointsLog  = fbPts.pointsLog || [];
              user.tierPoints = fbPts.tierPoints || 0;
              delete user._needsFirebaseSync;
              localStorage.setItem('prb_user', JSON.stringify(user));
              updateAuthUI();
              buildHomeScreen();
              if (document.getElementById('screen-rewards')?.classList.contains('active')) buildRewardsScreen();
            }
          }
        }).catch(() => {});
        loadProfileFromFirebase(_initUser.email).then(fbProfile => {
          if (fbProfile) {
            const user = getUser();
            if (user) {
              const merged = {
                ...user,
                firstName: fbProfile.firstName || user.firstName || '',
                lastName:  fbProfile.lastName  || user.lastName  || '',
                phone:     fbProfile.phone     || user.phone     || '',
                address:   fbProfile.address   || '',
                city:      fbProfile.city      || '',
                state:     fbProfile.state     || '',
                zip:       fbProfile.zip       || '',
                points:    user.points,
                pointsLog: user.pointsLog,
                tierPoints: user.tierPoints,
              };
              localStorage.setItem('prb_user', JSON.stringify(merged));
              localStorage.setItem('prb_profile', JSON.stringify(merged));
              updateAuthUI();
              buildHomeScreen();
            }
          }
        }).catch(() => {});
      }).catch(() => {});
    }
  }

  const tabs = document.querySelector('.menu-tabs');
  if (tabs) {
    let isDown = false, startX, scrollLeft;
    tabs.addEventListener('mousedown', e => { isDown = true; startX = e.pageX - tabs.offsetLeft; scrollLeft = tabs.scrollLeft; });
    tabs.addEventListener('mouseleave', () => { isDown = false; });
    tabs.addEventListener('mouseup', () => { isDown = false; });
    tabs.addEventListener('mousemove', e => { if (!isDown) return; e.preventDefault(); const x = e.pageX - tabs.offsetLeft; tabs.scrollLeft = scrollLeft - (x - startX); });
  }
});
