# Project Context: FASO Bakes

## Project Overview
- **Name**: FASO Bakes (FASO Food Products)
- **Tagline**: "Baking Delectable Dreams"
- **Location**: 6th Mile, Anjukunnu P.O, Mukkath, Wayanad, Kerala 670645
- **Phone**: +91 95444 08674
- **Competitor Benchmark**: PKK Bakers (https://www.pkkbakers.com/)
- **GitHub Repository**: [https://github.com/Femikf/fasobakes.git](https://github.com/Femikf/fasobakes.git) (Branch: `main`)
- **Core Technology Stack**:
  - Next.js 16 (App Router with Turbopack & Cache Components)
  - React 19
  - TypeScript
  - Pure Vanilla CSS / CSS Modules
  - MongoDB Atlas Cloud Database (`vayaland.dcncnap.mongodb.net/faso`) with automatic BSON ObjectId serialization and serverless connection pooling.

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

## Performance & Vercel Optimizations Implemented
- `Vercel Serverless MongoDB Pooling (`src/lib/mongodb.ts`)`:
  - Cached `global._mongoClientPromise` across serverless lambdas.
  - Set `maxPoolSize: 10`, `serverSelectionTimeoutMS: 5000`, `connectTimeoutMS: 10000` to prevent connection spikes and cold start delays.
- `Next.js & Edge CDN Cache (`next.config.ts`)`:
  - Enabled modern image formats: `formats: ['image/avif', 'image/webp']`.
  - Configured 1-year immutable edge cache headers (`Cache-Control: public, max-age=31536000, immutable`) for all images and the hero MP4 video.
  - Added security headers: `X-DNS-Prefetch-Control`, `X-Content-Type-Options`, `Referrer-Policy`.
  - Gzip and Brotli compression enabled (`compress: true`).
- `Video & Hero Loading (LCP)`:
  - Preloaded hero background image in `layout.tsx` (`<link rel="preload" as="image" href="/images/hero-video-poster.webp" type="image/webp" fetchpriority="high">`).
  - Generated lightweight, 90KB WebP poster (`/images/hero-video-poster.webp`) so above-the-fold paint happens instantly before video stream starts.
  - Video configured with `preload="metadata"`, `playsInline`, `muted`, `loop`, `autoPlay`.
- `Image Optimization Across Components`:
  - Added responsive `sizes` attribute and `loading="lazy"` across `Products.tsx`, `About.tsx`, and `Process.tsx`.
  - Set `priority` on above-the-fold brand logo and primary banner.
- `Interaction & Clicking Speed Optimizations (INP)`:
  - Eliminated 300ms mobile touch delay with `touch-action: manipulation;` on all interactive links and buttons.
  - Added tactile `:active { transform: scale(0.97); }` physical click feedback across primary, secondary, and gold buttons.
  - Added `scroll-padding-top: 84px;` in `html` for smooth, header-aware anchor navigation without obscuring section titles.
  - Enhanced Quick View modal with `Escape` keyboard dismissal and background body scroll locking.

## Verification & Deployment Status
- Production build (`npm run build`) compiled successfully with 0 errors in 701ms.
- All code changes, optimizations, and assets pushed to `https://github.com/Femikf/fasobakes.git` on branch `main`.
- Vercel automatically deploys the latest commit upon push.
- Environment variables configured for Vercel deployment:
  - `MONGODB_URI`: MongoDB Atlas connection string
  - `ADMIN_PASSWORD`: Admin dashboard password
  - `JWT_SECRET`: Secret key for admin session tokens
  - `NEXT_PUBLIC_SITE_URL`: Production domain URL
