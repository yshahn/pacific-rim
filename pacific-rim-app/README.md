# Pacific Rim Bistro — Loyalty App

A mobile-first web app for loyal guests of Pacific Rim Bistro, Downtown Atlanta.

## Features
- 🗓️ Table reservation with date/time picker
- 🍱 Dine-in & takeout ordering by category
- 💳 Auto-pay with saved card or Apple Pay
- ✦ Points & stamp loyalty system
- ✍️ Guest review & feedback

## Tech Stack
- Vanilla HTML / CSS / JavaScript
- Hosted on Vercel (via GitHub)

---

## Deploy in 3 Steps

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit — Pacific Rim Bistro app"
git branch -M main
git remote add origin https://github.com/yshahn/pacific-rim.git
git push -u origin main
```

### 2. Connect Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your `pacific-rim` GitHub repo
3. Framework Preset: **Other**
4. Root Directory: `.` (leave default)
5. Click **Deploy** — done! 🎉

### 3. Your live URL
Vercel will give you a URL like:
```
https://pacific-rim-xxxx.vercel.app
```
You can also set a custom domain in Vercel → Settings → Domains.

---

## Project Structure
```
pacific-rim/
├── index.html        ← Main app shell
├── css/
│   └── style.css     ← All styles
├── js/
│   └── app.js        ← All logic & menu data
└── README.md
```

## Customization
- **Menu items**: Edit `menuData` in `js/app.js`
- **Colors**: Change CSS variables at top of `css/style.css`
- **Points/stamps**: Update values in `index.html`
