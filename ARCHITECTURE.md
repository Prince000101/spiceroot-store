# SpiceRoot — Architecture

## Brand Identity
- **Name**: SpiceRoot
- **Tagline**: Grandmother's Recipes, Modern Kitchen
- **Founded**: 2012
- **Location**: Kolhapur, Maharashtra
- **Founder**: Anand Deshmukh
- **Icon**: CookingPot (lucide-react)

## Color Palette
| Color         | Hex       | Usage                    |
|---------------|-----------|--------------------------|
| Saffron       | #EA580C   | Primary / CTAs           |
| Earth Brown   | #78350F   | Secondary / Navbar bg    |
| Warm White    | #FEFCE8   | Page background          |
| Deep Maroon   | #7F1D1D   | Accent                   |
| Sage Green    | #65A30D   | Freshness / Stars        |
| Pure White    | #FFFFFF   | Cards / Contrast         |
| Charcoal      | #292524   | Text / Dark mode bg      |

## Fonts
- **Playfair Display** (serif) — Headings, logo accent, testimonials
- **Nunito** (sans-serif) — Body text, buttons, navigation

## Tech Stack
- Frontend: React 19, Vite 8, Tailwind CSS v4, Framer Motion
- Backend: Node.js, Express, Mongoose, JWT, bcryptjs
- Database: MongoDB Atlas
- Auth: JWT (30-day expiry)

## Project Structure
```
spiceroot/
├── backend/
│   ├── config/db.js
│   ├── controllers/
│   ├── data/products.js
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── seeder.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── DarkModeToggle.jsx
│   │   │   ├── ImageWithSkeleton.jsx
│   │   │   └── Newsletter.jsx
│   │   ├── context/
│   │   ├── hook/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── About.jsx
│   │   └── services/
│   ├── index.html
│   └── vite.config.js
└── ARCHITECTURE.md
```

## Products (8 Total)

### Masala Blends (4)
| # | Product                          | Price | Category        |
|---|----------------------------------|-------|-----------------|
| 1 | Kolhapuri Kanda Lasun Masala     | ₹249  | Masala Blends   |
| 2 | Malvani Fish Curry Masala        | ₹279  | Masala Blends   |
| 3 | Solapuri Tambada Masala          | ₹229  | Masala Blends   |
| 4 | Pune Biryani Masala              | ₹299  | Masala Blends   |

### Single Spices (1)
| # | Product                          | Price | Category        |
|---|----------------------------------|-------|-----------------|
| 5 | Nashik Garlic Chutney Powder     | ₹149  | Single Spices   |

### Specialty Mixes (2)
| # | Product                          | Price | Category        |
|---|----------------------------------|-------|-----------------|
| 6 | Puneri Misal Masala              | ₹199  | Specialty Mixes |
| 7 | Bhusaval Khanda Masala           | ₹259  | Specialty Mixes |

### Family Packs (1)
| # | Product                          | Price | Category        |
|---|----------------------------------|-------|-----------------|
| 8 | Deshmukh Family Spice Box (set)  | ₹499  | Family Packs    |

## Design Principles
- **Warm & Cozy**: Saffron/earth palette evokes grandmother's kitchen
- **Nostalgic**: Playfair Display serif for traditional, classic feel
- **Approachable**: Nunito sans-serif for friendly, readable body text
- **Handmade feel**: Rounded corners, warm shadows, gentle animations
- **Spice aesthetic**: Warm glow effects, spice-colored gradients

## API Endpoints
- `GET /api/products` — List all products
- `GET /api/products/:id` — Get product by ID
- `POST /api/products` — Create product (admin)
- `PUT /api/products/:id` — Update product (admin)
- `DELETE /api/products/:id` — Delete product (admin)
- `POST /api/auth/register` — User registration
- `POST /api/auth/login` — User login
- `POST /api/orders` — Create order
- `GET /api/orders/:id` — Get order details

## Environment Variables
```env
PORT=5004
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_here
RAZORPAY_KEY_ID=rzp_test_Ba7bK0VfZn0Zqg
RAZORPAY_KEY_SECRET=your_razorpay_secret_here
EMAIL_USER=prince@creatordev.in
EMAIL_PASS=your_email_password_here
```
