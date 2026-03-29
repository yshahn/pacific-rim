// ── MENU DATA (Pacific Rim Bistro — Official Menu)
const menuData = {
  appetizers: [
    { e:'🫘', n:'Edamame',               d:'Boiled soy bean',                                          p:6  },
    { e:'🌶️', n:'Spicy Edamame',          d:'Boiled soy bean tossed w/ chili oil',                     p:6  },
    { e:'🥟', n:'Fried Pork Gyoza',       d:'4 pieces',                                                p:7  },
    { e:'🌯', n:'Vietnamese Spring Roll', d:'2 pieces',                                                p:7  },
    { e:'🦑', n:'Spicy Calamari',         d:'Tempura battered calamari w/ fresh basil (4oz)',          p:9  },
    { e:'🍢', n:'Chicken Satay',          d:'Marinated in curry, served w/ peanut sauce (2 skewers)',  p:7  },
    { e:'🍤', n:'Tempura Combo',          d:'Shrimp & vegetables',                                     p:9  },
    { e:'🐟', n:'Tuna Tataki',            d:'Seared tuna, scallion, ponzu sauce',                      p:14 },
    { e:'🐠', n:'Yellowtail Carpaccio',   d:'Yellowtail, jalapeño w/ ponzu sauce',                    p:14 },
    { e:'🥑', n:'Ahi Poke',              d:'Tuna, avocado w/ house special sauce',                    p:14 },
    { e:'🥒', n:'Cu Kani',               d:'Salmon, kani, avocado wrapped in cucumber w/ sunomono',   p:14 },
    { e:'🌿', n:'Spicy Sashimi',          d:'Assorted sashimi w/ Korean spicy sauce',                  p:14 },
    { e:'🦪', n:'Fried Oyster',           d:'Panko breaded fried oyster',                              p:9  },
    { e:'🍤', n:'Crispy Coconut Shrimp',  d:'Coconut battered shrimp',                                p:9  },
    { e:'🥦', n:'Brussels Sprouts',       d:'Sautéed in Thai lime chili sauce',                       p:10 },
    { e:'🍖', n:'Japanese Pork Ribs',     d:'Braised pork ribs tossed in teriyaki glaze',              p:12 },
  ],
  soups: [
    { e:'🍵', n:'Miso Soup',             d:'Classic Japanese miso',                                   p:5  },
    { e:'🥗', n:'Mixed Green Salad',      d:'Fresh garden greens',                                     p:6  },
    { e:'🌊', n:'Seaweed Salad',          d:'Fresh seaweed salad',                                     p:8  },
    { e:'🥒', n:'Cucumber Kani Salad',    d:'Cucumber, kani, masago, scallion w/ ponzu sauce',         p:6  },
  ],
  entrees: [
    { e:'🌿', n:'Spicy Basil (Chicken)',  d:'Stir fried w/ red onion, bell peppers, Thai basil',      p:22 },
    { e:'🍜', n:'Pad Thai (Shrimp)',      d:'Rice noodles, egg, tamarind sauce, peanuts',              p:22 },
    { e:'🍛', n:'Panang Curry (Chicken)', d:'Red & green bell peppers, asparagus, Thai basil',        p:22 },
    { e:'🍛', n:'Thai Yellow Curry',      d:'Potatoes, carrot, cashew nut, cucumber pickle',           p:22 },
    { e:'🍚', n:'Fried Rice (House)',     d:'House special fried rice',                                p:22 },
    { e:'🦐', n:'Wanchi Shrimp',          d:'Crispy shrimp, candied walnuts, honey lemon aioli',      p:26 },
    { e:'🍗', n:'Grilled Teriyaki Chicken',d:'Homemade teriyaki sauce, vegetable medley, steamed rice',p:23 },
    { e:'🍗', n:'Grilled Bangkok Chicken',d:'Lemongrass, ginger & honey marinade, sweet chili sauce', p:23 },
    { e:'🦐', n:'Grilled Shrimp & Veggies',d:'Zucchini, bell pepper, asparagus, miso aioli',         p:26 },
    { e:'🐟', n:'Grilled Teriyaki Salmon',d:'Salmon w/ vegetable medley, teriyaki, mashed potatoes',  p:30 },
    { e:'🥑', n:'Shrimp & Scallop Curry', d:'Green avocado curry, asparagus, bell peppers, basil',   p:35 },
    { e:'🥩', n:'Spicy Seven Flavor Beef',d:'Tender beef in seven spices, Thai basil, peanuts',       p:26 },
  ],
  rolls: [
    { e:'🍣', n:'California Roll',        d:'Crabmeat salad, avocado, cucumber',                      p:10 },
    { e:'🍣', n:'Spicy Crab Roll',        d:'Crabmeat salad, avocado, cucumber w/ spicy sauce',       p:10 },
    { e:'🍣', n:'Spicy Tuna Roll',        d:'Spicy tuna, cucumber',                                   p:12 },
    { e:'🍣', n:'Philadelphia Roll',      d:'Smoked salmon, cream cheese, avocado',                   p:12 },
    { e:'🍣', n:'Eel Roll',               d:'Eel, avocado, cucumber',                                 p:12 },
    { e:'🍣', n:'Shrimp Tempura Roll',    d:'Shrimp tempura, avocado w/ eel sauce',                   p:12 },
    { e:'🍣', n:'Alaska Roll',            d:'Salmon, cream cheese, avocado',                          p:12 },
    { e:'🍣', n:'TNT Roll',               d:'Assorted sashimi mix with wasabi mayo',                  p:12 },
    { e:'🥦', n:'Vegetable Roll',         d:'Avocado, asparagus, cucumber, pickled daikon',            p:9  },
    { e:'🍣', n:'Salmon Avocado Roll',    d:'Fresh salmon and avocado',                               p:12 },
    { e:'🍣', n:'Tuna Avocado Roll',      d:'Fresh tuna and avocado',                                 p:12 },
    { e:'🍣', n:'Tuna Roll',              d:'6 pieces',                                               p:9  },
    { e:'🍣', n:'Salmon Roll',            d:'6 pieces',                                               p:9  },
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
  document.getElementById('step-menu').style.display = 'flex';
  document.getElementById('step-checkout').style.display = 'none';
  document.getElementById('order-screen-title').textContent = 'Order';
  document.getElementById('order-screen-sub').textContent = 'Select your items';
}

function goToCheckout() {
  if (cart.length === 0) return;
  document.getElementById('step-menu').style.display = 'none';
  document.getElementById('step-checkout').style.display = 'flex';
  document.getElementById('order-screen-title').textContent = 'Checkout';
  document.getElementById('order-screen-sub').textContent = 'Review & pay';
  fillUserInfo();
  buildCheckoutSummary();
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
// STRIPE PAYMENT
// ─────────────────────────────────
async function startStripeCheckout() {
  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }

  const payBtn = document.getElementById('pay-btn');
  if (payBtn) {
    payBtn.textContent = 'Processing...';
    payBtn.disabled = true;
  }

  const firstName = (document.getElementById('gi-firstname') || {}).value || '';
  const lastName  = (document.getElementById('gi-lastname')  || {}).value || '';
  const email     = (document.getElementById('gi-email')     || {}).value || '';

  // Build items for Stripe
  const items = cart.map(item => ({
    name:  item.name,
    price: item.price,
    quantity: 1,
  }));

  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items,
        customerEmail: email,
        customerName:  (firstName + ' ' + lastName).trim(),
        usePoints,
      }),
    });

    const data = await res.json();

    if (data.url) {
      // Redirect to Stripe checkout page
      window.location.href = data.url;
    } else {
      throw new Error(data.error || 'Failed to create checkout session');
    }
  } catch (err) {
    console.error('Payment error:', err);
    alert('Payment error: ' + err.message);
    if (payBtn) {
      payBtn.textContent = 'Pay $' + cart.reduce((s,i) => s+i.price, 0).toFixed(2);
      payBtn.disabled = false;
    }
  }
}

// Check for payment result on page load
function checkPaymentResult() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('payment') === 'success') {
    cart = [];
    history.replaceState({}, '', '/');
    // Show success screen
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('success-screen').classList.add('active');
    document.getElementById('bottom-nav').style.display = 'none';
    document.getElementById('success-icon').textContent  = '✅';
    document.getElementById('success-title').textContent = 'Payment Complete!';
    document.getElementById('success-msg').textContent   = 'Thank you for your order!\nWe will have it ready soon.';
    document.getElementById('earned-pts').textContent    = '+pts earned';
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
  buildMenu('appetizers');
  updateAuthUI();
  checkPaymentResult();
});
