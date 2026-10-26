# fasobakes

> **FASO Bakes — Baking Delectable Dreams**
> Premium artisanal bakery & confectionery web experience crafted for Wayanad, Kerala.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)](https://www.mongodb.com/atlas)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)

---

## 🌟 Key Features

- **Cinematic 360° Hero Showcase**: Seamless looping 360° rotating product showcase with synchronized typography overlays for signature items (Multigrain Bread, Creme Buns, Milk Rusk, Italian Plum Cake).
- **Dynamic Infinite Marquee Banners**: Real-time announcement banners managed dynamically via MongoDB Atlas and Admin Dashboard.
- **Artisanal Product Catalog**: Categorized bakery items (Plum Cakes, Bread Loaves, Brownies, Buns & Rusks) with quick view modal, nutritional highlights, and WhatsApp direct ordering.
- **Interactive Flavor & Story Journey**: Highlights FASO Bakes' heritage in Wayanad, slow-fermentation science, and daily distribution fleet.
- **Admin Management Portal**: Secure admin portal (`/admin`) for real-time creation, editing, and deletion of products and dynamic banners connected to MongoDB Atlas.
- **Standardized Vector SVG Icons**: High-fidelity brand-accurate icons for WhatsApp, Instagram, YouTube, Phone, Location, and Mail across all touchpoints.
- **Direct WhatsApp Commerce**: One-tap order routing to FASO Bakes customer desk with pre-filled product inquiries.
- **Responsive & High-Performance**: Optimized with Next.js App Router, SSR, and custom CSS design system.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19, TypeScript
- **Styling**: CSS Modules, CSS Variables design tokens
- **Database**: MongoDB Atlas with native `mongodb` driver & connection pooling
- **Assets**: Optimized WebP/PNG photography, MP4 video hero showcase

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/Femikf/fasobakes.git
cd fasobakes
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory (refer to `.env.example`):

```env
MONGODB_URI=your_mongodb_atlas_connection_string
MONGODB_DB=faso
ADMIN_PIN=1234
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
faso-bakes/
├── public/
│   ├── favicon.ico
│   ├── images/                 # Optimized brand assets & clean delivery fleet imagery
│   │   ├── faso-hero-showcase.mp4
│   │   ├── faso-delivery-trucks.png
│   │   └── logo.png
├── src/
│   ├── app/
│   │   ├── admin/             # Dynamic catalog & banner manager
│   │   ├── api/               # Products and banners REST endpoints
│   │   ├── favicon.ico
│   │   ├── icon.png
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── About/
│   │   ├── BannerTicker/      # Infinite loop promotional marquee
│   │   ├── common/Icons.tsx   # Standardized SVG icons
│   │   ├── Contact/
│   │   ├── FloatingWhatsApp/
│   │   ├── Footer/
│   │   ├── Hero/              # 360 Video hero with synchronized overlays
│   │   ├── Navbar/
│   │   ├── Process/
│   │   └── Products/
│   └── lib/
│       ├── db.ts              # MongoDB Atlas client with cached connection
│       └── models.ts
└── .env.example
```

---

## 📞 Contact & Inquiries

- **Bakery**: FASO Food Products, 6th Mile, Anjukunnu P.O, Mukkath, Wayanad, Kerala 670645
- **Phone**: +91 95444 08674
- **Instagram**: [@fasofoodproducts](https://www.instagram.com/fasofoodproducts)
- **YouTube**: [@fasofoodproducts](https://www.youtube.com/@fasofoodproducts)

---

## 📄 License

Proprietary © FASO Food Products. All rights reserved.
