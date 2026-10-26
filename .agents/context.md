# Project Context: FASO Bakes

## Project Overview
- **Name**: FASO Bakes (FASO Food Products)
- **Tagline**: "Baking Delectable Dreams"
- **Location**: 6th Mile, Anjukunnu P.O, Mukkath, Wayanad, Kerala 670645
- **Phone**: +91 95444 08674
- **Competitor**: PKK Bakers (https://www.pkkbakers.com/)
- **Core Technology Stack**:
  - Next.js 16 (App Router)
  - React 19
  - TypeScript
  - Pure Vanilla CSS / CSS Modules
  - MongoDB Atlas Cloud Database (`vayaland.dcncnap.mongodb.net/faso`) with automatic BSON ObjectId serialization and in-memory fallback.

## Brand Identity & Aesthetic Guidelines
- **Palette**:
  - Rich Tuscan Espresso / Deep Roast: `#2A1810`, `#32160E`
  - Artisan Bakery Orange / Saffron: `#E8751A`, `#FF7A1A`
  - Brushed Luxury Gold: `#C89B3C`, `#D4A853`
  - Soft Warm Ivory / Parchment: `#FAF7F2`, `#FFF6E8`
- **Typography**:
  - Headings: `Outfit`, sans-serif (700/800/900)
  - Body: `Inter`, sans-serif (400/500/600)
- **Signature Offerings**:
  - 360° Artisanal Multigrain Sliced Bread on Wooden Pedestal & Standing Bread Pack
  - Velveteen Cream Buns & Chocolate Cream Buns ("Delight in Every Bite")
  - Double-Baked Crispy Milk Rusks ("Chai Companion" with fragrant cardamom)
  - Premium Italian Plum Cake ("Pure Italian Goodness" with roasted cashews & raisins in festive box)
  - Sliced Brown Bread, Sliced Long Bread, Sliced White Bread
  - Cashew Crunch Mini Cakes & Oven Fresh Brownies

## Key Components & Upgrades Completed
- `src/components/Hero`: **Pure Full-Screen Video Hero with Dynamic Text Overlay (Tab-Free)**:
  - Plays the 4-stage 360° rotating pedestal video (`/gemini_generated_video_a2de6f4c.mp4`) as an immersive full-screen background with multi-layered cinematic gradient scrim.
  - Removed all stage buttons / tracker tabs for a 100% clean, uncluttered visual.
  - Dynamically updates text overlay synchronized with the exact video timestamps:
    - `0:00 - 2.5s`: **Multigrain Sliced Bread** (Toasted seeds & bread package)
    - `2.5s - 5.0s`: **Velveteen Cream Buns** (Cut open with whipped cream & twin packs)
    - `5.0s - 7.5s`: **Crispy Milk Rusks** (Stacked rusks & crispy milk rusk packet)
    - `7.5s - 10.0s`: **Premium Italian Plum Cake** (Topped with cashews & festive box)
  - Retained docked live statistics counters bar (80+ Fresh Delicacies, 500+ Outlets, 50+ Fleet, 100% Hygiene).
- `src/components/BannerShowcase`: **Dynamic Looped Accordion Banner Showcase**:
  - Connected directly to `/api/banners` and the client admin dashboard (`/admin/dashboard`).
  - Infinite marquee announcement ribbon scrolling key brand pillars.
  - Interactive horizontal accordion cards that expand on click/hover and auto-cycle in an infinite loop every 4.5 seconds.
  - Prev/Next navigation, play/pause controls, and pagination indicators.
- `Database Integration`: **Live MongoDB Atlas Connection**:
  - Connected directly to cloud cluster `vayaland.dcncnap.mongodb.net/faso`.
  - Configured in `.env.local` with proper key `MONGODB_URI=mongodb+srv://femikf60_db_user:vBdMLGrHCSZGJUEI@vayaland.dcncnap.mongodb.net/faso?retryWrites=true&w=majority`.
  - Initial catalog (11 products) and banners (3 banners) successfully seeded into MongoDB Atlas.
  - Fixed BSON `_id` serialization for React 19 Server Components.
  - Verified live write/read operations directly into MongoDB Atlas collections via `/admin/dashboard` API.

## Verification & Status
- Production build (`npm run build`) compiled successfully with 0 errors in 1.7s.
- Tested and verified live MongoDB Atlas read/write operations.
- Dev server running on `http://localhost:3000`.
- Stored implementation plans in `.agents/`.
