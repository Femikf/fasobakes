# Implementation Plan: Classy & Professional Animated Hero Tab Bar

## 1. Objective & Critique of Previous Version
- **Problem**: The previous version had a large cartoonish SVG ribbon and floating emojis that looked cluttered and unrefined, especially on narrower/mobile screens (500px).
- **Goal**: Build a **classy, professional, and attractive Animated Hero Tab** system inspired by luxury editorial food brands and high-end Framer/Dribbble landing pages (Apple/Stripe level polish).
- **Core Principles**:
  - **Refined Aesthetics**: Deep Tuscan espresso typography (`#2A1810`), warm ivory/parchment backdrop (`#FAF7F2`), brushed gold (`#C89B3C`), and bakery saffron accents (`#E8751A`).
  - **Zero Cartoonish Elements**: Remove the oversized SVG ribbon and emoji confetti. Replace with crisp luxury typography, real photography cutouts, and subtle lighting.
  - **Animated Hero Tab Controller**: A prominent, segmented tab bar with an active sliding pill and a smooth animated 6-second progress line on the active tab.

---

## 2. Technical Architecture & Component Details

### A. Animated Hero Tab Controller (`src/components/Hero/Hero.tsx`)
- Four distinct luxury tabs:
  1. `01. Italian Plum Cake` (Featuring `faso-italian-plum-cake.png`)
  2. `02. Artisan Sliced Breads` (Featuring `breads-group.png`)
  3. `03. Velveteen Cream Buns` (Featuring `faso-creative-cream-bun.png`)
  4. `04. Golden Milk Rusks` (Featuring `faso-milk-rusk-pack.png`)
- **Micro-Animations on Tabs**:
  - Active tab has a continuous linear progress fill bar (`transition: width 6s linear`) indicating when the next tab auto-switches.
  - Hovering pauses auto-rotation.
  - Clicking any tab smoothly glides the highlight indicator and transitions the product card with an elegant cross-fade and subtle Y-offset (`fadeSlideUp`).

### B. Luxury Editorial Content Presentation
- **Category Super-Badge**: Elegant letterspaced badge (e.g., `HERITAGE COLLECTION • WAYANAD, KERALA`).
- **High-Impact Headline**: Bold serif/outfit typography with brushed gold or warm amber highlights.
- **Craft Specification Tags**: Minimalist border tags with checkmarks (e.g., `100% Pure Butter`, `Stone-Hearth Baked`, `Zero Preservatives`).
- **Call-to-Action Buttons**:
  - Sleek primary button: `Order / Inquire`
  - WhatsApp quick-order link with prefilled message

### C. Luxury Product Spotlight Stage
- Centered on a subtle radial warm spotlight (`radial-gradient(circle, #FFF2DC 0%, transparent 70%)`).
- Soft natural contact shadow.
- Minimalist floating spec badge: Floating glassmorphic card with subtle border and shadow.
- Buttery-smooth entrance transitions on tab change (`transform: translateY(0) scale(1)`, `opacity: 1`).

### D. Mobile & Responsive Refinement (Crucial for 500px Viewport)
- Horizontal scrollable or clean wrapped segmented tab bar on mobile with zero overflow.
- Clean stacked layout on mobile: Tab Bar -> Headline & CTAs -> Product Stage -> Stats.

---

## 3. Files to Modify / Remove
1. Remove `WrapRibbon.tsx` and `WrapRibbon.module.css` from the Hero flow.
2. Update `src/components/Hero/Hero.tsx` with the new Classy Animated Tab Bar system and product showcase.
3. Update `src/components/Hero/Hero.module.css` with luxury typography, tab progress lines, spotlight glow, and responsive mobile styles.
4. Verify build with `npm run build` and test live in browser.
5. Update `context.md` in `.agents/`.
