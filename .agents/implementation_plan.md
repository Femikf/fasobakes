# Implementation Plan - FASO Bakes Website Style & Animations Upgrade

## 1. Objective & Competitor Benchmarking
Upgrade the **FASO Bakes** website (`d:\coodylab\faso-bakes`) to surpass its prime competitor, **PKK Bakers** (https://www.pkkbakers.com/), by implementing higher-level modern aesthetics, micro-interactions, smooth CSS animations, richer storytelling, and seamless incorporation of the newly provided real brand photos and Wayanad, Kerala contact details.

### Competitor (PKK Bakers) Analysis:
- **Strengths to match and beat**:
  1. Multi-layered dynamic hero banner with animated elements.
  2. Animated statistics counter showing scale (Products, Outlets, Delivery Fleet).
  3. Curvilinear cards with distinctive brand color blocks.
  4. 8-step baking philosophy and hygiene process.
  5. Direct WhatsApp and click-to-call floating interactions.
  6. Wayanad regional presence and authentic local bakery heritage.
- **Faso Bakes Advantages to Amplify**:
  1. Richer, warmer artisan palette: Deep Italian chocolate brown (`#32160E`), golden wheat (`#D4A853`), vibrant bakery saffron/orange (`#E8751A`), and fresh cream (`#FDFBF7`).
  2. Authentic products: Signature **"Premium Italian Plum Cake"**, artisan breads, freshly baked cashew brownies/cakes, and a dedicated delivery fleet.
  3. Brand motto: *"Baking Delectable Dreams"*.
  4. Superior micro-animations: Glassmorphic floating badges, interactive 3D card tilt, animated counter stats, tab transitions, and mobile drawer.

---

## 2. Technical Scope of Changes

### Asset Management:
Copy the 5 user-provided high-resolution photos into `public/images/`:
1. `faso-italian-plum-cake.png` - Signature Premium Italian Plum Cake on wooden pedestal.
2. `faso-delivery-trucks.png` - Ashok Leyland orange delivery trucks branded with FASO BAKES.
3. `faso-fresh-baked-cakes.png` - Oven-fresh plum cakes/brownies with cashew nuts on tray.
4. `faso-plum-cake-pack.png` - Faso Bakes Premium Plum Cake packaged product.
5. `faso-baker-team.png` - Faso Bakes baker in orange uniform ("Baking Delectable Dreams").

### File Changes & Technical Details:

1. **`src/app/globals.css`**:
   - Add refined luxury bakery color tokens (rich cocoa brown, saffron gold, plum red, warm vanilla).
   - Add custom animation keyframes: `floatSmooth`, `shimmerGlow`, `fadeSlideUp`, `pulseSubtle`, `marqueeScroll`.
   - Add utility classes for glassmorphism, counters, badge glow, and responsive typography.

2. **`src/components/Navbar/Navbar.tsx` & `Navbar.module.css`**:
   - Modernized header with glassmorphism blur on scroll.
   - Live order / wholesale contact button with call-to-action to `+91 95444 08674`.
   - Direct WhatsApp quick action.
   - Smooth slide-in mobile navigation menu with clean animations.

3. **`src/components/Hero/Hero.tsx` & `Hero.module.css`**:
   - Multi-slide interactive hero showcase toggling between:
     - Slide 1: **"Baking Delectable Dreams Every Sunrise"** (Featuring fresh artisan breads and daily loaves).
     - Slide 2: **"Pure Italian Goodness - Signature Italian Plum Cake"** (Featuring the authentic Italian Plum Cake photo with gold star sparkles and floating badges).
   - Floating interactive badges ("Oven Fresh Daily", "Pure Italian Goodness", "100% Wholesome Grains").
   - Integrated live Counter Bar:
     - **80+** Fresh Bakery Delights
     - **500+** Retail & Supermarket Stores
     - **50+** Dedicated Delivery Fleet Trucks (with photo thumbnail preview)
     - **100%** Untouched Hygienic Process

4. **`src/components/About/About.tsx` & `About.module.css`**:
   - Overhauled with real factory & team photos (`faso-baker-team.png` and `faso-fresh-baked-cakes.png`).
   - Engaging Wayanad heritage narrative ("Baking Delectable Dreams" from 6th Mile, Anjukunnu, Wayanad).
   - Interactive pillar cards with hover lift and micro-interactions.

5. **`src/components/Products/Products.tsx` & `Products.module.css`**:
   - Add new product entries to `INITIAL_BREADS` in `src/lib/types.ts`:
     - *Premium Italian Plum Cake* (Featured Italian plum cake with raisins & spices).
     - *Faso Festive Plum Cake Box* (Luxury gift pack with rich dry fruits).
     - *Cashew Crunch Mini Cakes* (Freshly oven-baked cashew-topped delights).
   - Category filtering with animated active pills.
   - Premium card design with high-resolution imagery, weight tags, and interactive Quick View modal.

6. **`src/components/Process/Process.tsx` & `Process.module.css`**:
   - Enhanced 8-Step Interactive Journey (beating competitor's 8 points):
     1. Premium Grain & Fruit Sourcing
     2. Slow Fermentation & Natural Proofing
     3. Authentic Italian Recipe Crafting
     4. Stone Hearth Steam-Baking
     5. Untouched Automated Slicing
     6. Hermetic Freshness Packaging
     7. 4:00 AM Dawn Dispatch Fleet Across Wayanad
     8. Exceeding Customer Smiles
   - Interactive step timeline with animated active step cards and delivery fleet photo feature.

7. **`src/components/Contact/Contact.tsx` & `Contact.module.css`**:
   - Update factory address: **6th Mile, Anjukunnu P.O, Mukkath, Wayanad, Kerala 670645**.
   - Update phone: **+91 95444 08674**.
   - Direct 1-click WhatsApp button link (`https://wa.me/919544408674`).
   - Interactive contact and wholesale dealership inquiry form with real-time validation and animated submission state.

8. **`src/components/Footer/Footer.tsx` & `Footer.module.css`**:
   - Rich brand footer with Wayanad address, phone numbers, quick links, ISO certification badge, and copyright.

9. **New Component: `src/components/FloatingWhatsApp/FloatingWhatsApp.tsx`**:
   - Floating WhatsApp button with pulsing beacon animation and tooltip for instant customer orders.

10. **`src/lib/types.ts` & `src/lib/store.ts`**:
    - Add the new plum cake products and banners to ensure MongoDB/memory fallback displays all the user's authentic products.

---

## 3. Verification & Validation Steps
1. Verify that all 5 images are copied and render crisply without layout shifts.
2. Build verification with `npm run build` or Next.js dev server status check.
3. Test responsiveness across mobile (375px), tablet (768px), and desktop (1280px+).
4. Verify animations, hover states, modal interactions, and WhatsApp link functionality.
5. Update `context.md` in `.agents/` upon completion as required by workspace rules.
