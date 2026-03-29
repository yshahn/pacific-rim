// ── MENU DATA
const menuData = {
  sushi: [
    { e:'🐟', n:'Japanese Ceviche',    d:'Fresh sashimi, seasonal vegetables, citrus dressing', p:18 },
    { e:'🍣', n:'Salmon Roll (8pc)',    d:'Salmon, avocado, cucumber, sesame',                   p:16 },
    { e:'🦐', n:'Shrimp Tempura Roll', d:'Crispy shrimp, spicy mayo, tobiko',                   p:17 },
    { e:'🐠', n:'Rainbow Roll',         d:'Assorted sashimi over California roll',               p:22 },
    { e:'🍙', n:'Tuna Sashimi (5pc)',   d:'Premium yellowfin tuna, wasabi, pickled ginger',      p:20 },
  ],
  starters: [
    { e:'🥥', n:'Coconut Soup',        d:'Creamy Thai coconut milk, lemongrass, galangal',      p:14 },
    { e:'🥗', n:'Brussels Sprouts',     d:'Roasted crispy sprouts, house signature sauce',      p:12 },
    { e:'🥟', n:'Gyoza (6pc)',          d:'Pan-seared dumplings, ponzu dipping sauce',           p:11 },
    { e:'🍱', n:'Spring Roll Trio',     d:'Chicken, fresh vegetables, sweet chili sauce',       p:13 },
  ],
  entrees: [
    { e:'🍜', n:'Pad Thai',            d:'Rice noodles, tofu or shrimp, tamarind, peanuts',    p:19 },
    { e:'🍛', n:'Mongolian Beef',       d:'Tender beef, sweet Mongolian brown sauce, scallions',p:22 },
    { e:'🦆', n:'Thai Red Curry',       d:'Coconut red curry, Thai basil, jasmine rice',        p:20 },
    { e:'🍤', n:'Tempura Combo',        d:'Shrimp & vegetable tempura, dipping broth',          p:21 },
  ],
  drinks: [
    { e:'🍶', n:'Premium Sake',         d:'Served warm or chilled',                             p:12 },
    { e:'🍷', n:'Chardonnay',           d:"Kendall-Jackson Vintner's Reserve, California",      p:13 },
    { e:'🍹', n:'Signature Cocktail',   d:"Ask about tonight's house special",                  p:14 },
    { e:'🍺', n:'Japanese Lager',       d:'Sapporo draft, cold & crisp',                        p:9  },
  ],
};

// ── CART STATE
let cart = []; // [{name, price, emoji}]
let guestCount = 2;
let usePoints = false;

// ─────────────────────────────────
// AUTH
// ─────────────────────────────────
const USER_KEY = 'prb_user';

function getUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY)); }
  catch(e) { return null; }
}

function signOut() {
  localStorage.removeItem(USER_KEY);
  updateAuthUI();
}

function updateAuthUI() {
  const user      = getUser();
  const signInBtn = document.getElementById('btn-signin');
  const greetEl   = document.getElementById('hero-greeting');
  const ptsEl     = document.getElementById('home-points');
  const ptsSubEl  = document.getElementById('home-points-sub');
  if (!signInBtn) return;

  if (user) {
    signInBtn.textContent = 'Sign Out';
    signInBtn.removeAttribute('href');
    signInBtn.onclick = (e) => { e.preventDefault(); signOut(); };
    if (greetEl) {
      greetEl.textContent = 'Welcome back, ' + user.firstName + '!';
      greetEl.style.cssText = 'color:#fff;font-size:13px;opacity:1;font-weight:500;';
    }
    if (ptsEl && user.points) {
      ptsEl.textContent = user.points.toLocaleString();
      if (ptsSubEl) ptsSubEl.textContent = (1500 - user.points) + ' pts until next reward';
    }
    // Update points toggle label
    const ptLabel = document.getElementById('pt-label');
    if (ptLabel && user.points) ptLabel.textContent = 'Use Points (' + user.points.toLocaleString() + ' available)';
  } else {
    signInBtn.textContent = 'Sign In';
    signInBtn.href = 'login.html';
    signInBtn.onclick = null;
    if (greetEl) {
      greetEl.textContent = 'Welcome back';
      greetEl.style.cssText = 'color:#fff;opacity:0.9;';
    }
  }
}

// Auto-fill checkout with user info
function fillUserInfo() {
  const user = getUser();
  const fnEl    = document.getElementById('gi-firstname');
  const lnEl    = document.getElementById('gi-lastname');
  const phoneEl = document.getElementById('gi-phone');
  const emailEl = document.getElementById('gi-email');
  const badge   = document.getElementById('gi-badge');

  if (user) {
    if (fnEl)    fnEl.value    = user.firstName || '';
    if (lnEl)    lnEl.value    = user.lastName  || '';
    if (phoneEl) phoneEl.value = user.phone      || '';
    if (emailEl) emailEl.value = user.email      || '';
    if (badge)   badge.style.display = 'block';
  } else {
    if (fnEl)    fnEl.value    = '';
    if (lnEl)    lnEl.value    = '';
    if (phoneEl) phoneEl.value = '';
    if (emailEl) emailEl.value = '';
    if (badge)   badge.style.display = 'none';
  }
}

// ─────────────────────────────────
// NAVIGATION
// ─────────────────────────────────
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
  // When going to order, always show menu step
  if (id === 'order') showMenuStep();
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
  document.getElementById('step-menu').style.display = 'block';
  document.getElementById('step-checkout').style.display = 'none';
  document.getElementById('order-screen-title').textContent = 'Order';
  document.getElementById('order-screen-sub').textContent = 'Select your items';
}

function goToCheckout() {
  if (cart.length === 0) return;
  document.getElementById('step-menu').style.display = 'none';
  document.getElementById('step-checkout').style.display = 'block';
  document.getElementById('order-screen-title').textContent = 'Checkout';
  document.getElementById('order-screen-sub').textContent = 'Review & pay';

  // Fill user info
  fillUserInfo();

  // Build order summary
  buildCheckoutSummary();

  // Scroll to top of checkout
  document.getElementById('screen-order').scrollTop = 0;
}

function backToMenu() {
  showMenuStep();
}

function buildCheckoutSummary() {
  const el = document.getElementById('checkout-summary');
  if (!el) return;

  let subtotal = 0;
  let rows = '';
  cart.forEach(item => {
    subtotal += item.price;
    rows += '<div class="os-row"><span>' + item.emoji + ' ' + item.name + '</span><span>$' + item.price.toFixed(2) + '</span></div>';
  });

  const tax      = subtotal * 0.08;
  const discount = usePoints ? 5 : 0;
  const total    = subtotal + tax - discount;

  rows += '<div class="os-row os-label"><span>Subtotal</span><span>$' + subtotal.toFixed(2) + '</span></div>';
  rows += '<div class="os-row os-label"><span>Tax (8%)</span><span>$' + tax.toFixed(2) + '</span></div>';
  if (discount) rows += '<div class="os-row os-label" style="color:var(--gold)"><span>Points Discount</span><span>−$' + discount.toFixed(2) + '</span></div>';
  rows += '<div class="os-row total"><span>Total</span><span>$' + total.toFixed(2) + '</span></div>';
  el.innerHTML = rows;

  const payBtn = document.getElementById('pay-btn');
  if (payBtn) payBtn.textContent = 'Pay $' + total.toFixed(2);
}

// ─────────────────────────────────
// MENU
// ─────────────────────────────────
function buildMenu(tab) {
  const list = document.getElementById('menu-list');
  if (!list) return;
  list.innerHTML = '';
  (menuData[tab] || []).forEach(item => {
    const inCart = cart.filter(c => c.name === item.n).length;
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML =
      '<div class="mi-emoji">' + item.e + '</div>' +
      '<div class="mi-info">' +
        '<div class="mi-name">' + item.n + '</div>' +
        '<div class="mi-desc">' + item.d + '</div>' +
        '<div class="mi-price">$' + item.p.toFixed(2) + '</div>' +
      '</div>' +
      '<button class="mi-add' + (inCart ? ' added' : '') + '" data-name="' + item.n + '" data-price="' + item.p + '" data-emoji="' + item.e + '">' +
        (inCart ? '✓ ' + inCart : '+') +
      '</button>';
    div.querySelector('.mi-add').addEventListener('click', function() {
      addToCart(this.dataset.name, parseFloat(this.dataset.price), this.dataset.emoji, this);
    });
    list.appendChild(div);
  });
}

function switchTab(el, tab) {
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  buildMenu(tab);
}

function addToCart(name, price, emoji, btn) {
  cart.push({ name, price, emoji });

  // Update button
  const count = cart.filter(c => c.name === name).length;
  btn.classList.add('added');
  btn.textContent = '✓ ' + count;

  // Update cart bar
  const total = cart.reduce((s, i) => s + i.price, 0);
  const cc = document.getElementById('cart-count');
  const ct = document.getElementById('cart-total');
  const cb = document.getElementById('cart-bar');
  if (cc) cc.textContent = cart.length + ' item' + (cart.length !== 1 ? 's' : '');
  if (ct) ct.textContent = '$' + total.toFixed(2);
  if (cb) cb.style.display = 'flex';
}

// ─────────────────────────────────
// RESERVATION
// ─────────────────────────────────
function buildDates() {
  const grid = document.getElementById('date-grid');
  if (!grid) return;
  const days = ['Su','Mo','Tu','We','Th','Fr','Sa'];
  const now  = new Date();
  grid.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    const cell = document.createElement('div');
    cell.className = 'date-cell' + (i===0?' today':'') + (i===1?' selected':'');
    cell.innerHTML = '<span class="day-name">' + days[d.getDay()] + '</span>' + d.getDate();
    cell.addEventListener('click', () => {
      document.querySelectorAll('.date-cell').forEach(c => c.classList.remove('selected'));
      cell.classList.add('selected');
    });
    grid.appendChild(cell);
  }
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
// PAYMENT
// ─────────────────────────────────
function selectPM(el) {
  document.querySelectorAll('.pm-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
}

function togglePoints() {
  usePoints = !usePoints;
  const t = document.getElementById('pt-toggle');
  if (t) t.classList.toggle('on', usePoints);
  buildCheckoutSummary();
}

// ─────────────────────────────────
// REVIEW
// ─────────────────────────────────
function rateStar(n) {
  document.querySelectorAll('.star').forEach((s,i) => s.classList.toggle('lit', i < n));
}

function toggleRC(el) { el.classList.toggle('selected'); }

// ─────────────────────────────────
// SUCCESS
// ─────────────────────────────────
function showSuccess(type) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('success-screen').classList.add('active');
  document.getElementById('bottom-nav').style.display = 'none';

  const total = cart.reduce((s,i) => s+i.price, 0);
  const tax   = total * 0.08;
  const finalTotal = (total + tax - (usePoints ? 5 : 0)).toFixed(2);

  const configs = {
    reservation: { icon:'🎋', title:'Reservation Confirmed!',  msg:'Your table has been reserved.\nA confirmation will be sent to you.', pts:'+50 pts' },
    payment:     { icon:'✅', title:'Payment Complete!',        msg:'$' + finalTotal + ' has been processed.\nThank you for dining with us!',       pts:'+' + Math.round(total) + ' pts' },
    review:      { icon:'🌟', title:'Thanks for your Review!', msg:'Your feedback means a lot to us.',                                              pts:'+30 pts' },
  };
  const c = configs[type] || configs.payment;
  document.getElementById('success-icon').textContent  = c.icon;
  document.getElementById('success-title').textContent = c.title;
  document.getElementById('success-msg').textContent   = c.msg;
  document.getElementById('earned-pts').textContent    = c.pts;

  // Reset cart after payment
  if (type === 'payment') { cart = []; }
}

// ─────────────────────────────────
// INIT
// ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildDates();
  buildMenu('sushi');
  updateAuthUI();
});
