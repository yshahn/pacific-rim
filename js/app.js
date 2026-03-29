// ── MENU DATA
const menuData = {
  sushi: [
    { e: '🐟', n: 'Japanese Ceviche',    d: 'Fresh sashimi, seasonal vegetables, citrus dressing', p: 18 },
    { e: '🍣', n: 'Salmon Roll (8pc)',    d: 'Salmon, avocado, cucumber, sesame',                   p: 16 },
    { e: '🦐', n: 'Shrimp Tempura Roll', d: 'Crispy shrimp, spicy mayo, tobiko',                   p: 17 },
    { e: '🐠', n: 'Rainbow Roll',         d: 'Assorted sashimi over California roll',               p: 22 },
    { e: '🍙', n: 'Tuna Sashimi (5pc)',   d: 'Premium yellowfin tuna, wasabi, pickled ginger',      p: 20 },
  ],
  starters: [
    { e: '🥥', n: 'Coconut Soup',        d: 'Creamy Thai coconut milk, lemongrass, galangal',       p: 14 },
    { e: '🥗', n: 'Brussels Sprouts',     d: 'Roasted crispy sprouts, house signature sauce',       p: 12 },
    { e: '🥟', n: 'Gyoza (6pc)',          d: 'Pan-seared dumplings, ponzu dipping sauce',            p: 11 },
    { e: '🍱', n: 'Spring Roll Trio',     d: 'Chicken, fresh vegetables, sweet chili sauce',        p: 13 },
  ],
  entrees: [
    { e: '🍜', n: 'Pad Thai',            d: 'Rice noodles, tofu or shrimp, tamarind, peanuts',     p: 19 },
    { e: '🍛', n: 'Mongolian Beef',       d: 'Tender beef, sweet Mongolian brown sauce, scallions', p: 22 },
    { e: '🦆', n: 'Thai Red Curry',       d: 'Coconut red curry, Thai basil, jasmine rice',         p: 20 },
    { e: '🍤', n: 'Tempura Combo',        d: 'Shrimp & vegetable tempura, dipping broth',           p: 21 },
  ],
  drinks: [
    { e: '🍶', n: 'Premium Sake',         d: 'Served warm or chilled, ask your server',              p: 12 },
    { e: '🍷', n: 'Chardonnay',           d: "Kendall-Jackson Vintner's Reserve, California",        p: 13 },
    { e: '🍹', n: 'Signature Cocktail',   d: "Ask about tonight's house special",                    p: 14 },
    { e: '🍺', n: 'Japanese Lager',       d: 'Sapporo draft, cold & crisp',                         p: 9  },
  ],
};

// ── STATE
let cartItems = 0;
let cartTotal = 0;
let guestCount = 2;

// ─────────────────────────────────────────
// USER / AUTH
// ─────────────────────────────────────────
const USER_KEY = 'prb_user';

function getUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY)); } catch(e) { return null; }
}

function saveUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function signOut() {
  localStorage.removeItem(USER_KEY);
  updateAuthUI();
}

// Update home hero Sign In button to show user name when logged in
function updateAuthUI() {
  const user = getUser();
  const signInBtn = document.getElementById('btn-signin');
  const greetEl   = document.getElementById('hero-greeting');
  if (!signInBtn) return;

  if (user) {
    signInBtn.textContent = 'Sign Out';
    signInBtn.onclick = signOut;
    if (greetEl) greetEl.textContent = `Welcome back, ${user.firstName}!`;
  } else {
    signInBtn.textContent = 'Sign In';
    signInBtn.onclick = () => { window.location.href = 'pages/login.html'; };
    if (greetEl) greetEl.textContent = 'Welcome back';
  }
}

// Auto-fill checkout form with stored user info
function fillUserInfo() {
  const user = getUser();
  const nameEl  = document.getElementById('gi-name');
  const phoneEl = document.getElementById('gi-phone');
  const emailEl = document.getElementById('gi-email');
  const badge   = document.getElementById('gi-badge');

  if (!nameEl) return;

  if (user) {
    nameEl.value  = `${user.firstName || ''} ${user.lastName || ''}`.trim();
    phoneEl.value = user.phone || '';
    emailEl.value = user.email || '';
    if (badge) badge.style.display = 'block';
  } else {
    nameEl.value  = '';
    phoneEl.value = '';
    emailEl.value = '';
    if (badge) badge.style.display = 'none';
  }
}

// ─────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────
function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const ss = document.getElementById('success-screen');
  if (ss) ss.classList.remove('active');
  const screen = document.getElementById('screen-' + id);
  if (screen) screen.classList.add('active');
  const nav = document.getElementById('bottom-nav');
  if (nav) nav.style.display = 'flex';
  updateNav(id);
  window.scrollTo(0, 0);
  if (id === 'payment') fillUserInfo();
}

function navGo(id) { goTo(id); }

function updateNav(id) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const item = document.getElementById('nav-' + id);
  if (item) item.classList.add('active');
}

// ─────────────────────────────────────────
// SUCCESS
// ─────────────────────────────────────────
function showSuccess(type) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const ss = document.getElementById('success-screen');
  if (ss) ss.classList.add('active');
  const nav = document.getElementById('bottom-nav');
  if (nav) nav.style.display = 'none';

  const configs = {
    reservation: { icon:'🎋', title:'Reservation Confirmed!',   msg:'Saturday, March 29 · 6:00 PM\nTable for 2 has been reserved.', pts:'+50 pts'  },
    payment:     { icon:'✅', title:'Payment Complete!',         msg:'$51.84 has been processed.\nA receipt has been sent to your email.',           pts:'+120 pts' },
    review:      { icon:'🌟', title:'Thanks for your Review!',   msg:'Your feedback means a lot to us.\nSee you at your next visit!',                pts:'+30 pts'  },
  };
  const c = configs[type] || configs.payment;
  document.getElementById('success-icon').textContent  = c.icon;
  document.getElementById('success-title').textContent = c.title;
  document.getElementById('success-msg').textContent   = c.msg;
  document.getElementById('earned-pts').textContent    = c.pts;
}

// ─────────────────────────────────────────
// DATE GRID
// ─────────────────────────────────────────
function buildDates() {
  const grid = document.getElementById('date-grid');
  if (!grid) return;
  const dayNames = ['Su','Mo','Tu','We','Th','Fr','Sa'];
  const now = new Date();
  grid.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    const cell = document.createElement('div');
    cell.className = 'date-cell' + (i === 0 ? ' today' : '') + (i === 1 ? ' selected' : '');
    cell.innerHTML = `<span class="day-name">${dayNames[d.getDay()]}</span>${d.getDate()}`;
    cell.addEventListener('click', () => {
      document.querySelectorAll('.date-cell').forEach(c => c.classList.remove('selected'));
      cell.classList.add('selected');
    });
    grid.appendChild(cell);
  }
}

// ─────────────────────────────────────────
// MENU
// ─────────────────────────────────────────
function buildMenu(tab) {
  const list = document.getElementById('menu-list');
  if (!list) return;
  list.innerHTML = '';
  (menuData[tab] || []).forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `
      <div class="mi-emoji">${item.e}</div>
      <div class="mi-info">
        <div class="mi-name">${item.n}</div>
        <div class="mi-desc">${item.d}</div>
        <div class="mi-price">$${item.p.toFixed(2)}</div>
      </div>
      <button class="mi-add" data-price="${item.p}">+</button>
    `;
    div.querySelector('.mi-add').addEventListener('click', function () {
      addToCart(this, parseFloat(this.dataset.price));
    });
    list.appendChild(div);
  });
}

function switchTab(el, tab) {
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  buildMenu(tab);
}

function addToCart(btn, price) {
  btn.classList.add('added');
  btn.textContent = '✓';
  setTimeout(() => { btn.textContent = '+'; btn.classList.remove('added'); }, 1200);
  cartItems++;
  cartTotal += price;
  const cc = document.getElementById('cart-count');
  const ct = document.getElementById('cart-total');
  const cb = document.getElementById('cart-bar');
  if (cc) cc.textContent = `${cartItems} item${cartItems !== 1 ? 's' : ''}`;
  if (ct) ct.textContent = `$${cartTotal.toFixed(2)}`;
  if (cb) cb.style.display = cartItems > 0 ? 'flex' : 'none';
}

// ─────────────────────────────────────────
// RESERVATION CONTROLS
// ─────────────────────────────────────────
function changeGuests(delta) {
  guestCount = Math.max(1, Math.min(20, guestCount + delta));
  const el = document.getElementById('guest-count');
  if (el) el.textContent = guestCount;
}

function selectTime(el) {
  document.querySelectorAll('.time-chip').forEach(t => t.classList.remove('selected'));
  el.classList.add('selected');
}

// ─────────────────────────────────────────
// PAYMENT CONTROLS
// ─────────────────────────────────────────
function selectPM(el) {
  document.querySelectorAll('.pm-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

function togglePoints() {
  const t = document.getElementById('pt-toggle');
  if (t) t.classList.toggle('on');
}

// ─────────────────────────────────────────
// REVIEW CONTROLS
// ─────────────────────────────────────────
function rateStar(n) {
  document.querySelectorAll('.star').forEach((s, i) => {
    s.classList.toggle('lit', i < n);
  });
}

function toggleRC(el) { el.classList.toggle('selected'); }

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildDates();
  buildMenu('sushi');
  updateAuthUI();
  fillUserInfo();
});
