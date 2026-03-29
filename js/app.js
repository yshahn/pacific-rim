// ── MENU DATA (Pacific Rim Bistro — Official Menu)
const IMG = 'https://static.spotapps.co/spots/';
const menuData = {
  lunch: [
    { e:'🍱', n:'Bento Box — Teriyaki Chicken',  d:'Teriyaki chicken, California roll (3pc), miso soup, salad', p:16, img:IMG+'62/7c1d78736a46c09244f755ddb1d5ef/medium' },
    { e:'🍱', n:'Bento Box — Salmon Teriyaki',    d:'Grilled salmon, California roll (3pc), miso soup, salad',   p:17, img:IMG+'d3/6ced2d1ddc4c84bb599d31fff9296f/medium' },
    { e:'🍱', n:'Bento Box — Shrimp Tempura',     d:'Shrimp tempura, California roll (3pc), miso soup, salad',   p:16, img:IMG+'75/4e19225e3e4365bebc7066bcbc2970/medium' },
    { e:'🍱', n:'Bento Box — Tofu',               d:'Teriyaki tofu, California roll (3pc), miso soup, salad',    p:14, img:null },
    { e:'🍜', n:'Lunch Pad Thai — Chicken',       d:'Flat rice noodles, egg, tamarind, peanuts · Lunch portion', p:14, img:null },
    { e:'🍜', n:'Lunch Pad Thai — Shrimp',        d:'Flat rice noodles, egg, tamarind, peanuts · Lunch portion', p:15, img:null },
    { e:'🍛', n:'Lunch Curry — Chicken',          d:'Panang or yellow curry, steamed rice · Lunch portion',      p:14, img:IMG+'de/1f1b7af5d041faaa101ef30d17df03/medium' },
    { e:'🍛', n:'Lunch Curry — Shrimp',           d:'Panang or yellow curry, steamed rice · Lunch portion',      p:15, img:null },
    { e:'🌿', n:'Lunch Spicy Basil — Chicken',    d:'Stir fried Thai basil, bell peppers, steamed rice',         p:14, img:IMG+'02/9f23f4e30542bd9cee0b177e2df87b/medium' },
    { e:'🍚', n:'Lunch Fried Rice — Chicken',     d:'Wok fried rice, egg, vegetables',                           p:13, img:IMG+'f9/a2fd50a52c41a09a925a6432ae875d/medium' },
    { e:'🍚', n:'Lunch Fried Rice — Shrimp',      d:'Wok fried rice, egg, vegetables',                           p:14, img:null },
    { e:'🍜', n:'Lunch Thai Basil Noodles',       d:'Wide rice noodle, Thai basil, spicy sauce · Lunch portion', p:14, img:null },
    { e:'🐟', n:'Lunch Grilled Teriyaki Salmon',  d:'Grilled salmon, vegetable medley, steamed rice',            p:18, img:IMG+'d3/6ced2d1ddc4c84bb599d31fff9296f/medium' },
    { e:'🍗', n:'Lunch Grilled Teriyaki Chicken', d:'Grilled chicken, vegetable medley, steamed rice',           p:14, img:IMG+'62/7c1d78736a46c09244f755ddb1d5ef/medium' },
    { e:'🍣', n:'Lunch Sushi Combo A',            d:'6pc California roll + miso soup + salad',                   p:14, img:IMG+'dd/d3c4601a0246d1b961c683225dac52/medium' },
    { e:'🍣', n:'Lunch Sushi Combo B',            d:'6pc spicy tuna roll + miso soup + salad',                   p:15, img:null },
    { e:'🍙', n:'Sashimi Lunch',                  d:"Chef's selection of sashimi, miso soup, rice",              p:18, img:IMG+'c2/599e5550a64e56ab487cca60b2bb2e/medium' },
  ],
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
let tipPercent = 20;   // default 20%
let tipCustom  = null; // null = use percent, number = custom $

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
  if (id === 'order') showMenuStep();
  if (id === 'rewards') buildRewardsScreen();
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
  // Reset tip to 20% default
  tipPercent = 20; tipCustom = null;
  document.querySelectorAll('.tip-btn').forEach(b => b.classList.remove('selected'));
  const def = document.querySelector('.tip-btn[onclick="selectTip(this, 20)"]');
  if (def) def.classList.add('selected');
  const cw = document.getElementById('tip-custom-wrap');
  if (cw) cw.style.display = 'none';
  fillUserInfo();
  buildCheckoutSummary();
  document.getElementById('screen-order').scrollTop = 0;
}

function backToMenu() {
  showMenuStep();
}

function buildCheckoutSummary() {
  // ── Editable cart items
  const editList = document.getElementById('cart-edit-list');
  if (editList) {
    // Group cart items by name
    const grouped = {};
    cart.forEach((item, idx) => {
      if (!grouped[item.name]) grouped[item.name] = { ...item, qty: 0, indices: [] };
      grouped[item.name].qty++;
      grouped[item.name].indices.push(idx);
    });

    editList.innerHTML = '';
    Object.values(grouped).forEach(item => {
      const row = document.createElement('div');
      row.className = 'cart-edit-row';
      row.innerHTML =
        '<div class="cer-emoji">' + item.emoji + '</div>' +
        '<div class="cer-name">' + item.name + '</div>' +
        '<div class="cer-controls">' +
          '<button class="cer-btn" onclick="cartQty(\'' + item.name + '\',-1)">−</button>' +
          '<span class="cer-qty">' + item.qty + '</span>' +
          '<button class="cer-btn" onclick="cartQty(\'' + item.name + '\',1)">+</button>' +
          '<button class="cer-del" onclick="cartRemove(\'' + item.name + '\')">🗑</button>' +
        '</div>' +
        '<div class="cer-price">$' + (item.price * item.qty).toFixed(2) + '</div>';
      editList.appendChild(row);
    });
  }

  // ── Totals
  const el = document.getElementById('checkout-summary');
  if (!el) return;
  const subtotal    = cart.reduce((s, i) => s + i.price, 0);
  const platformFee = 1.00;
  const tax         = subtotal * 0.089;
  const tip         = getTipAmount(subtotal);
  const discount    = usePoints ? 5 : 0;
  const total       = Math.max(subtotal + platformFee + tax + tip - discount, 0.50);

  // Update tip amount label
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

// Adjust quantity of item in cart
function cartQty(name, delta) {
  if (delta === -1) {
    const idx = cart.findLastIndex ? cart.findLastIndex(i => i.name === name)
                                   : [...cart].reverse().findIndex(i => i.name === name);
    if (idx !== -1) {
      const realIdx = cart.findLastIndex ? idx : cart.length - 1 - idx;
      cart.splice(realIdx, 1);
    }
  } else {
    const existing = cart.find(i => i.name === name);
    if (existing) cart.push({ ...existing });
  }
  // Update cart bar count
  const total = cart.reduce((s, i) => s + i.price, 0);
  const cc = document.getElementById('cart-count');
  const ct = document.getElementById('cart-total');
  const cb = document.getElementById('cart-bar');
  if (cc) cc.textContent = cart.length + ' item' + (cart.length !== 1 ? 's' : '');
  if (ct) ct.textContent = '$' + total.toFixed(2);
  if (cb) cb.style.display = cart.length > 0 ? 'flex' : 'none';
  // If cart empty go back to menu
  if (cart.length === 0) { backToMenu(); return; }
  buildCheckoutSummary();
}

// Remove all of an item from cart
function cartRemove(name) {
  cart = cart.filter(i => i.name !== name);
  const total = cart.reduce((s, i) => s + i.price, 0);
  const cc = document.getElementById('cart-count');
  const ct = document.getElementById('cart-total');
  const cb = document.getElementById('cart-bar');
  if (cc) cc.textContent = cart.length + ' item' + (cart.length !== 1 ? 's' : '');
  if (ct) ct.textContent = '$' + total.toFixed(2);
  if (cb) cb.style.display = cart.length > 0 ? 'flex' : 'none';
  if (cart.length === 0) { backToMenu(); return; }
  buildCheckoutSummary();
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

function isLunchHours() {
  const now  = new Date();
  const day  = now.getDay(); // 0=Sun, 6=Sat
  const hour = now.getHours();
  const min  = now.getMinutes();
  const time = hour * 60 + min;
  const open  = 11 * 60;      // 11:00 AM
  const close = 14 * 60;      // 2:00 PM
  return day >= 1 && day <= 5 && time >= open && time < close;
}

function switchTab(el, tab) {
  if (tab === 'lunch' && !isLunchHours()) {
    showLunchClosedPopup();
    return;
  }
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  buildMenu(tab);
  const notice = document.getElementById('lunch-notice');
  if (notice) notice.style.display = tab === 'lunch' ? 'block' : 'none';
}

function showLunchClosedPopup() {
  const now  = new Date();
  const day  = now.getDay();
  const isWeekend = day === 0 || day === 6;
  const msg  = isWeekend
    ? 'Lunch is served Monday–Friday only.\n\nWe\'re open for dinner tonight!'
    : 'Lunch is served 11:00 AM – 2:00 PM,\nMonday through Friday.\n\nPlease check back during lunch hours!';

  const popup = document.getElementById('lunch-closed-popup');
  document.getElementById('lunch-closed-msg').textContent = msg;
  if (popup) popup.style.display = 'flex';
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
// TIP
// ─────────────────────────────────
function selectTip(el, pct) {
  document.querySelectorAll('.tip-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  const customWrap = document.getElementById('tip-custom-wrap');
  if (el.id === 'tip-custom-btn') {
    tipPercent = 0;
    tipCustom  = 0;
    if (customWrap) customWrap.style.display = 'flex';
    const inp = document.getElementById('tip-custom-input');
    if (inp) { inp.value = ''; inp.focus(); }
  } else {
    tipPercent = pct;
    tipCustom  = null;
    if (customWrap) customWrap.style.display = 'none';
  }
  buildCheckoutSummary();
}

function setCustomTip(val) {
  tipCustom = parseFloat(val) || 0;
  buildCheckoutSummary();
}

function getTipAmount(subtotal) {
  if (tipCustom !== null) return tipCustom;
  return subtotal * (tipPercent / 100);
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
// REWARDS
// ─────────────────────────────────
function buildRewardsScreen() {
  const user = getUser();
  const points = user ? (user.points || 0) : 0;

  // Update balance
  const rhPoints = document.getElementById('rh-points');
  const rhSub    = document.getElementById('rh-sub');
  const rhTier   = document.getElementById('rh-tier');
  const rpFill   = document.getElementById('rp-fill');

  if (rhPoints) rhPoints.textContent = points.toLocaleString();

  // Tier logic
  let tier, tierIcon, nextTier, nextPts, pct;
  if (points < 500)       { tier='Bronze'; tierIcon='🥉'; nextTier='Silver'; nextPts=500;  pct=Math.min(points/500*25, 25); }
  else if (points < 1000) { tier='Silver'; tierIcon='🥈'; nextTier='Gold';   nextPts=1000; pct=25+Math.min((points-500)/500*25, 25); }
  else if (points < 2000) { tier='Gold';   tierIcon='🥇'; nextTier='Platinum';nextPts=2000;pct=50+Math.min((points-1000)/1000*50, 50); }
  else                    { tier='Platinum';tierIcon='💎'; nextTier=null;    nextPts=null; pct=100; }

  if (rhTier) rhTier.textContent = tierIcon + ' ' + tier + ' Member';
  if (rhSub)  rhSub.textContent  = nextPts ? (nextPts - points) + ' pts until ' + nextTier : 'Maximum tier reached! 🎉';
  if (rpFill) rpFill.style.width = pct + '%';

  // Update active tier highlight
  document.querySelectorAll('.tier-item').forEach(t => t.classList.remove('active-tier'));
  const activeTier = document.querySelector('.tier-item.' + tier.toLowerCase());
  if (activeTier) activeTier.classList.add('active-tier');

  // Build stamps grid (4 filled, 6 empty = 10 total)
  const stampsGrid = document.getElementById('stamps-grid');
  if (stampsGrid) {
    const visits = user ? Math.min(user.visits || 4, 10) : 4;
    stampsGrid.innerHTML = '';
    for (let i = 0; i < 10; i++) {
      const s = document.createElement('div');
      s.className = 'stamp-dot' + (i < visits ? ' filled' : '');
      s.innerHTML = i < visits ? '✦' : '';
      stampsGrid.appendChild(s);
    }
  }

  // Lock/unlock redeem buttons based on points
  document.querySelectorAll('.redeem-item').forEach(item => {
    const costEl = item.querySelector('.redeem-cost');
    const btn    = item.querySelector('.redeem-btn');
    if (!costEl || !btn) return;
    const needed = parseInt(costEl.textContent.replace(/\D/g, ''));
    if (points >= needed) {
      btn.classList.remove('locked');
      btn.textContent = 'Use';
      btn.onclick = () => goTo('order');
    } else {
      btn.classList.add('locked');
      btn.textContent = '🔒';
      btn.onclick = null;
    }
  });
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

  const subtotal = cart.reduce((s, i) => s + i.price, 0);
  const tip = getTipAmount(subtotal);

  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items,
        customerEmail: email,
        customerName:  (firstName + ' ' + lastName).trim(),
        usePoints,
        tip,
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
// TODAY'S PICKS (from Admin settings)
// ─────────────────────────────────
const PICKS_KEY = 'prb_picks';

function getDefaultPicks() {
  return [
    { name:'Tuna Tataki',  emoji:'🐟', label:"Chef's Special", origPrice:14, salePrice:null },
    { name:'Miso Soup',    emoji:'🍵', label:'Guest Favorite',  origPrice:5,  salePrice:null },
  ];
}

function loadTodaysPicks() {
  let picks;
  try { picks = JSON.parse(localStorage.getItem(PICKS_KEY)) || getDefaultPicks(); }
  catch(e) { picks = getDefaultPicks(); }

  const container = document.getElementById('todays-picks-container');
  if (!container) return;
  container.innerHTML = '';

  picks.forEach(pick => {
    const hasDiscount = pick.salePrice !== null && pick.salePrice < pick.origPrice;
    const div = document.createElement('div');
    div.className = 'featured-item';
    div.onclick = () => goTo('order');
    div.innerHTML =
      '<div>' +
        '<div class="fi-label">' + pick.label + '</div>' +
        '<div class="fi-name">' + pick.name + '</div>' +
        (hasDiscount
          ? '<div class="fi-price"><span class="fi-orig-price">$' + pick.origPrice.toFixed(2) + '</span> <span class="fi-sale-price">$' + pick.salePrice.toFixed(2) + '</span></div>'
          : '<div class="fi-price">$' + pick.origPrice.toFixed(2) + '</div>'
        ) +
      '</div>' +
      '<div class="fi-emoji">' + pick.emoji + '</div>';
    container.appendChild(div);
  });
}

// ─────────────────────────────────
// INIT
// ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildDates();
  buildMenu('appetizers');
  updateAuthUI();
  checkPaymentResult();
  loadTodaysPicks();
});
