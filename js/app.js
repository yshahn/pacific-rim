// ── MENU DATA (Pacific Rim Bistro — Official Menu)
const IMG = 'https://static.spotapps.co/spots/';
const menuData = {
  appetizers: [
    { e:'🫘', n:'Edamame',               d:'Boiled soy bean',                                          p:6,  img:null },
    { e:'🌶️', n:'Spicy Edamame',          d:'Boiled soy bean tossed w/ chili oil',                     p:6,  img:null },
    { e:'🥟', n:'Fried Pork Gyoza',       d:'4 pieces',                                                p:7,  img:IMG+'f8/1e3df482d04efbaf58eb60ccae671b/medium' },
    { e:'🌯', n:'Vietnamese Spring Roll', d:'2 pieces',                                                p:7,  img:IMG+'a8/b7e106058c49d2b955a4177e3daf4c/medium' },
    { e:'🦑', n:'Spicy Calamari',         d:'Tempura battered calamari w/ fresh basil (4oz)',          p:9,  img:IMG+'c4/9954966bae449e861bfdc68fd74e6d/medium' },
    { e:'🍢', n:'Chicken Satay',          d:'Marinated in curry, served w/ peanut sauce (2 skewers)',  p:7,  img:null },
    { e:'🍤', n:'Tempura Combo',          d:'Shrimp & vegetables',                                     p:9,  img:IMG+'75/4e19225e3e4365bebc7066bcbc2970/medium' },
    { e:'🐟', n:'Tuna Tataki',            d:'Seared tuna, scallion, ponzu sauce',                      p:14, img:IMG+'11/975ab3b86c4a1484156fa080a8986d/medium' },
    { e:'🐠', n:'Yellowtail Carpaccio',   d:'Yellowtail, jalapeño w/ ponzu sauce',                    p:14, img:IMG+'ce/253330e12d4314b1edcf92150ab29c/medium' },
    { e:'🥑', n:'Ahi Poke',              d:'Tuna, avocado w/ house special sauce',                    p:14, img:IMG+'ab/42d9e32f3548dfaa591096965bd88c/medium' },
    { e:'🥒', n:'Cu Kani',               d:'Salmon, kani, avocado wrapped in cucumber w/ sunomono',   p:14, img:IMG+'4b/f2b4b05fc648deb95aa15bf7e30b9b/medium' },
    { e:'🌿', n:'Spicy Sashimi',          d:'Assorted sashimi w/ Korean spicy sauce',                  p:14, img:IMG+'8c/971daa082b42a181c1d37222bdbed8/medium' },
    { e:'🦪', n:'Fried Oyster',           d:'Panko breaded fried oyster',                              p:9,  img:IMG+'dc/5cfebe7ff04b54b9a6f24f46564691/medium' },
    { e:'🍤', n:'Crispy Coconut Shrimp',  d:'Coconut battered shrimp',                                p:9,  img:IMG+'f4/cc75da111b431ea23fccacb3cbdb99/medium' },
    { e:'🥦', n:'Brussels Sprouts',       d:'Sautéed in Thai lime chili sauce',                       p:10, img:null },
    { e:'🍖', n:'Japanese Pork Ribs',     d:'Braised pork ribs tossed in teriyaki glaze',              p:12, img:null },
  ],
  soups: [
    { e:'🍵', n:'Miso Soup',             d:'Classic Japanese miso',                                   p:5,  img:null },
    { e:'🥗', n:'Mixed Green Salad',      d:'Fresh garden greens',                                     p:6,  img:null },
    { e:'🌊', n:'Seaweed Salad',          d:'Fresh seaweed salad',                                     p:8,  img:null },
    { e:'🥒', n:'Cucumber Kani Salad',    d:'Cucumber, kani, masago, scallion w/ ponzu sauce',         p:6,  img:null },
  ],
  entrees: [
    { e:'🌿', n:'Spicy Basil (Chicken)',  d:'Stir fried w/ red onion, bell peppers, Thai basil',      p:22, img:IMG+'02/9f23f4e30542bd9cee0b177e2df87b/medium' },
    { e:'🍜', n:'Pad Thai (Shrimp)',      d:'Rice noodles, egg, tamarind sauce, peanuts',              p:22, img:null },
    { e:'🍛', n:'Panang Curry (Chicken)', d:'Red & green bell peppers, asparagus, Thai basil',        p:22, img:null },
    { e:'🍛', n:'Thai Yellow Curry',      d:'Potatoes, carrot, cashew nut, cucumber pickle',           p:22, img:IMG+'de/1f1b7af5d041faaa101ef30d17df03/medium' },
    { e:'🍚', n:'Fried Rice (House)',     d:'House special fried rice',                                p:22, img:IMG+'f9/a2fd50a52c41a09a925a6432ae875d/medium' },
    { e:'🦐', n:'Wanchi Shrimp',          d:'Crispy shrimp, candied walnuts, honey lemon aioli',      p:26, img:IMG+'96/5948743df54c53bf4c721be7e8201f/medium' },
    { e:'🍗', n:'Grilled Teriyaki Chicken',d:'Homemade teriyaki sauce, vegetable medley, steamed rice',p:23, img:IMG+'62/7c1d78736a46c09244f755ddb1d5ef/medium' },
    { e:'🍗', n:'Grilled Bangkok Chicken',d:'Lemongrass, ginger & honey marinade, sweet chili sauce', p:23, img:IMG+'b8/8cef530dec4752a2047ac9be284efe/medium' },
    { e:'🦐', n:'Grilled Shrimp & Veggies',d:'Zucchini, bell pepper, asparagus, miso aioli',         p:26, img:IMG+'2c/66fb80e5d34ed59f9eac0f6eb453fd/medium' },
    { e:'🐟', n:'Grilled Teriyaki Salmon',d:'Salmon w/ vegetable medley, teriyaki, mashed potatoes',  p:30, img:IMG+'d3/6ced2d1ddc4c84bb599d31fff9296f/medium' },
    { e:'🥑', n:'Shrimp & Scallop Curry', d:'Green avocado curry, asparagus, bell peppers, basil',   p:35, img:IMG+'cc/53b8ab220540f398ad7bfe24e9b2dd/medium' },
    { e:'🥩', n:'Spicy Seven Flavor Beef',d:'Tender beef in seven spices, Thai basil, peanuts',       p:26, img:null },
  ],
  rolls: [
    { e:'🍣', n:'California Roll',        d:'Crabmeat salad, avocado, cucumber',                      p:10, img:IMG+'dd/d3c4601a0246d1b961c683225dac52/medium' },
    { e:'🍣', n:'Spicy Crab Roll',        d:'Crabmeat salad, avocado, cucumber w/ spicy sauce',       p:10, img:null },
    { e:'🍣', n:'Spicy Tuna Roll',        d:'Spicy tuna, cucumber',                                   p:12, img:null },
    { e:'🍣', n:'Philadelphia Roll',      d:'Smoked salmon, cream cheese, avocado',                   p:12, img:null },
    { e:'🍣', n:'Eel Roll',               d:'Eel, avocado, cucumber',                                 p:12, img:null },
    { e:'🍣', n:'Shrimp Tempura Roll',    d:'Shrimp tempura, avocado w/ eel sauce',                   p:12, img:IMG+'15/b5750194f843e39fcd1f43c685dbdf/medium' },
    { e:'🍣', n:'Alaska Roll',            d:'Salmon, cream cheese, avocado',                          p:12, img:null },
    { e:'🍣', n:'TNT Roll',               d:'Assorted sashimi mix with wasabi mayo',                  p:12, img:null },
    { e:'🥦', n:'Vegetable Roll',         d:'Avocado, asparagus, cucumber, pickled daikon',            p:9,  img:null },
    { e:'🍣', n:'Rainbow Roll',           d:'Assorted sashimi over California roll',                  p:14, img:IMG+'33/5073ffd23341bdbb4d03b7c4ed9f04/medium' },
    { e:'🍣', n:'Dragon Roll',            d:'Eel, cucumber, avocado on top',                          p:16, img:IMG+'7f/03274fd9cc4b849179b85bc37d7228/medium' },
    { e:'🍣', n:'Volcano Roll',           d:'Baked spicy seafood on top of California roll',          p:16, img:IMG+'c7/12bd646cff4052ad7cf5878c2bac4c/medium' },
    { e:'🍣', n:'Spider Roll',            d:'Soft shell crab, avocado, cucumber',                     p:16, img:IMG+'61/49b264f1ce436582cbfb6d231f24b0/medium' },
    { e:'🍣', n:'Lobster Tempura Roll',   d:'Lobster tempura, avocado, spicy mayo',                   p:18, img:IMG+'44/b12fbcd2c94fa4baaa9bdf1f31c144/medium' },
    { e:'🍣', n:'Mango Crunch Roll',      d:'Mango, crunchy topping, sweet sauce',                    p:14, img:IMG+'df/93b5fede0f445aa354e3cd7064b02b/medium' },
    { e:'🍣', n:'Fire Bomber Roll',       d:'Spicy tuna, jalapeño, sriracha',                        p:14, img:IMG+'ec/62caa05ac740c288efbe376f55fe5a/medium' },
    { e:'🍣', n:'Super Crunch Roll',      d:'Crispy tempura flakes, spicy mayo',                      p:14, img:IMG+'6b/f24944672f4524a827fded007abff7/medium' },
    { e:'🍣', n:'Atlanta Roll',           d:'House signature roll',                                   p:14, img:IMG+'52/7d63536c954aa29e8de98b95fccd27/medium' },
    { e:'🍣', n:'Ocean\'s Three',         d:'Tuna, salmon, yellowtail combination',                   p:18, img:IMG+'40/5c4be3b4bf442a91dfaf1b9ea4d344/medium' },
    { e:'🍣', n:'Sumo Roll',              d:'Jumbo roll with premium ingredients',                    p:18, img:IMG+'2e/b82ea006644bc8886f0d24a12f3df2/medium' },
    { e:'🍣', n:'King Kamehameha Roll',   d:'King-size premium roll',                                 p:18, img:IMG+'b2/8f1fc872e94402aca5eb993dd19717/medium' },
    { e:'🍣', n:'Snow White Roll',        d:'White fish, light sauce, elegant presentation',          p:16, img:IMG+'c3/64d9dede574596b6a6c98bc1d5f011/medium' },
    { e:'🍣', n:'Caterpillar Roll',       d:'Eel, avocado on top, eel sauce',                        p:16, img:IMG+'bf/d0174fab004d069673b27e57c5794f/medium' },
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
    const thumbHtml = item.img
      ? '<img class="mi-thumb" src="' + item.img + '" alt="' + item.n + '" onerror="this.style.display=\'none\'">'
      : '<div class="mi-emoji">' + item.e + '</div>';
    div.innerHTML =
      thumbHtml +
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
