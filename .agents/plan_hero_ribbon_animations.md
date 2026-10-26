# Implementation Plan: Creative Animated Hero (WrapRibbon & Motion Stage)

## 1. Goal & Reference Analysis
Replace the traditional slide-fade hero in FASO Bakes with a high-end, creative, motion-driven Hero experience inspired by:
1. **Framer WrapRibbon Component** (`https://framer.com/m/WrapRibbon-6FzGO6.js`):
   - A continuous 3D ribbon with dynamic curve paths (`prefix` behind the object, `front` wrapping over the object) featuring animated text and gradient highlights that loop smoothly around the spotlight product.
2. **Dribbble Motion Showcase** (`cb6a6dc680f99fedab16bc85714684e0.mp4`):
   - High-energy product showcase with floating ingredients (wheat ears, crumbs, golden glow, flour mist), dynamic perspective depth, and fluid product transitions.
3. **User-Provided Creative Assets**:
   - `faso-flour-dusting-dough.png` ("Rise and Shine with Every Slice" craft moment)
   - `faso-oven-baking-bread.png` (Glowing stone hearth oven in action)
   - `faso-creative-cream-bun.png` (Creative giant cream bun & chocolate bun campaign)
   - `faso-milk-rusk-pack.png` (Golden crispy milk rusks with chai)
   - `faso-italian-plum-cake.png` (Signature Italian plum cake)

---

## 2. Technical Architecture & Components

### A. 3D WrapRibbon Component (`src/components/Hero/WrapRibbon.tsx`)
- SVG-based 3D looping ribbon that physically wraps **behind and around the front** of the product image.
- Uses SVG `path` with `stroke-dasharray` / `stroke-dashoffset` animation and an SVG `<textPath>` containing an animated repeating banner:
  `✨ BAKING DELECTABLE DREAMS • 100% WHOLESOME • OVEN FRESH EVERYDAY • WAYANAD ✨`
- Dynamic gradient fill (warm gold `#D4A853` to bakery saffron `#E8751A`) with soft drop-shadow.

### B. Interactive Hero Product Stage (`src/components/Hero/Hero.tsx`)
- Instead of an automatic slider that replaces the whole layout, we build a **Product Stage**:
  - **Stage Spotlight**: The selected hero product floats dynamically in the center with 3D tilt, contact shadow, and ambient oven glow.
  - **4 Signature Showcases**:
    1. *Italian Plum Cake* ("Pure Italian Goodness" • Candied fruits & raisins)
    2. *Artisan Sliced Breads* ("Rise & Shine with Every Slice" • Whole wheat loaves)
    3. *Velveteen Cream Buns* ("Delight in Every Bite" • Vanilla & Chocolate cream buns)
    4. *Crunchy Milk Rusks* ("Chai Companion" • Double-baked cardamom crunch)
  - **Interactive Selector Pills**: Sleek bottom dock allowing visitors to switch products with smooth 3D scale and perspective transitions.

### C. Floating Micro-Animations & Particles (`Hero.module.css`):
- Floating wheat stalks (🌾), glowing warm bakery embers, flour mist sparks, and floating badges that gently hover (`floatGentle`, `orbitSubtle`).
- "Craft in Action" interactive video trigger featuring the dough kneading and oven hearth footage.

### D. Live Scale Counters Dock:
- 80+ Creations | 500+ Outlets | 50+ Fleet Trucks | 100% Untouched Hygiene.

---

## 3. Files to Create / Modify
1. `src/components/Hero/WrapRibbon.tsx` (New component):
   - SVG multi-layer ribbon wrapping front and back around the active hero product with animated text path.
2. `src/components/Hero/Hero.tsx`:
   - Replace traditional carousel with the 3D WrapRibbon stage, product selector tabs, and craft video modal preview.
3. `src/components/Hero/Hero.module.css`:
   - 3D perspective transforms, floating ingredient physics, ribbon path keyframes, and responsive layout for mobile and desktop.
4. `src/lib/types.ts`:
   - Add the new Cream Bun and Milk Rusk products to `INITIAL_BREADS`.
5. Update `context.md` in `.agents/` upon completion.

---

## 4. Verification & Testing
- Verify responsive layout across mobile (375px), tablet (768px), and desktop (1440px).
- Verify smooth 60fps animations without layout jitter or scroll jank.
- Build test with `npm run build` to ensure zero compilation or hydration errors.
