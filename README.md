# SpiceRoot — Grandmother's Recipes, Delivered Fresh

Full-stack e-commerce platform for homemade Maharashtrian masalas and papad, built with React (Vite) + Node.js/Express + MongoDB (Atlas).

**Brand:** SpiceRoot by Saraswati Gruhudyog  
**Developer:** Prince | Creator Dev | 2026

---

## Live Demo

| URL | Link |
|---|---|
| **Frontend** | https://spiceroot-store.vercel.app/ |
| **Backend API** | https://spiceroot-store.onrender.com/api/products |
| **Admin Panel** | https://spiceroot-store.vercel.app/admin |
| **Backend Images** | https://spiceroot-store.onrender.com/uploads/01.jpg |

---

## Login Credentials

### Admin Account

| Field    | Value                    |
|----------|--------------------------|
| Email    | Set via `ADMIN_EMAIL` env var |
| Password | Set via `ADMIN_PASSWORD` env var |

### Regular Users

No default user is seeded. Users must **register themselves** at `/register`. After registering, they can browse products, add to cart, place orders, and manage their wishlist.

---

## Quick Start

### Prerequisites
- **Node.js** v18+
- **npm**
- **MongoDB** — [MongoDB Atlas](https://www.mongodb.com/atlas) (free tier) or local

### 1. Clone & Install

```bash
git clone https://github.com/Prince000101/spiceroot-store.git
cd spiceroot-store

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 2. Configure `backend/.env`

```env
PORT=5004
MONGO_URI=<your-mongodb-atlas-uri>
JWT_SECRET=<generate-with-openssl-rand-hex-64>
ADMIN_PASSWORD=<your-admin-password>
ADMIN_EMAIL=<your-admin-email>
CLIENT_URL=http://localhost:3004
```

### 3. Seed Database & Run

```bash
# Terminal 1 — Backend
cd backend
npm run seed    # creates admin account + SpiceRoot products
npm start       # http://localhost:5004

# Terminal 2 — Frontend
cd frontend
npm run dev     # http://localhost:3004
```

---

## Products

| Product | Category | Price |
|---|---|---|
| Kanda Lasun Masala | Masalas | ₹85 |
| Malvani Masala | Masalas | ₹95 |
| Fryums Papad (Large) | Papad & Fryums | ₹45 |
| Sandge (Sun-Dried Snack) | Papad & Fryums | ₹55 |
| Goda Masala | Masalas | ₹75 |
| Kolhapuri Achar Masala | Masalas | ₹65 |
| Bhakarwadi Masala | Masalas | ₹70 |
| Combo: Masala Box | Combo Packs | ₹299 |

---

## Features

### Customer Features
- Browse masalas and papad with search, category filter, and sort
- Recipe-card style product detail pages
- Shopping cart (add, update quantity, remove)
- Wishlist (persisted locally and synced to backend when logged in)
- Checkout with COD (Cash on Delivery)
- Order tracking by order ID
- User authentication (register / login / logout)
- Responsive design (mobile, tablet, desktop)
- Warm, cozy dark mode

### Admin Features
- Dashboard with stats (users, products, orders, revenue)
- Product management (CRUD)
- Order management (view all, mark delivered)
- User management (view all users)
- Coupon management (create, delete discount codes)
- Review management (view and delete customer reviews)
- Sales chart (last 30 days)
- Low stock alerts

---

## Tech Stack

| Layer    | Technology                                    |
|----------|-----------------------------------------------|
| Frontend | React 19, Vite 8, Tailwind v4, Framer Motion |
| Backend  | Node.js, Express, Mongoose, JWT, bcryptjs     |
| Database | MongoDB Atlas                                 |
| Auth     | JWT (30-day expiry)                           |
| Rate Limiting | express-rate-limit (100 req/15min global, 20 req/15min on auth) |

---

## Deployment

| Service | Role | URL | Cost |
|---|---|---|---|
| Vercel | Frontend | https://spiceroot-store.vercel.app | Free |
| Render | Backend | https://spiceroot-store.onrender.com | Free |
| MongoDB Atlas | Database | Cloud hosted | Free |

---

## Brand Identity

- **Name:** SpiceRoot by Saraswati Gruhudyog
- **Tagline:** "Grandmother's Recipes, Delivered Fresh"
- **Colors:** Saffron (#EA580C), Earth Brown (#78350F), Warm White (#FEFCE8), Sage Green (#65A30D)
- **Fonts:** Playfair Display (headings), Nunito (body)
- **Theme:** Warm, homey, grandmother's kitchen feel with recipe-card layouts

---

## Security

- Rate limiting on all `/api/*` routes (100 requests per 15 min)
- Stricter rate limit on login/register (20 requests per 15 min)
- Request body limited to 10 KB
- CSP, HSTS, X-Frame-Options, X-XSS-Protection headers set
- Passwords hashed with bcrypt (12 rounds)
- `totalPrice` calculated server-side
- Stock validated before adding to cart
- Users can only view their own orders
- JWT with strong 64-byte random secret
- `.env` in `.gitignore` — credentials never committed

---

## Developer

**Built by Prince | Creator Dev** | 2026
SpiceRoot is a project by Saraswati Gruhudyog, Maharashtra, India.
