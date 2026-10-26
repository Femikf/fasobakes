# Implementation Plan: 360° Rotating Bread Turntable Hero Animation

## 1. Goal & Dribbble Reference Breakdown
Inspired by the reference video (`dribbble-360-ref.mp4`), we will build an interactive **360° Rotating Turntable Hero Stage** for FASO Bakes featuring a premium multigrain sliced bread loaf on an artisanal wooden pedestal:

1. **360° Rotating Turntable Pedestal**:
   - Central subject: Artisanal multigrain sliced bread loaf sitting upon an illuminated round dark oak wooden pedestal (matching the aesthetic of the Italian Plum Cake stand).
   - Continuous 360° vertical axis rotation with realistic dynamic contact drop shadows, perspective depth, and smooth inertia.
   - Interactive user controls: Auto-spin toggle, drag/scrub to rotate 360°, and hover pause.

2. **Quality Studio Image Generation (`generate_image`)**:
   - Generate ultra-high quality bakery advertisement photography for the hero stage:
     - `faso_bread_pedestal`: Artisanal multigrain sliced bread loaf with golden oats, flaxseeds, and honey-glazed crust on a dark oak wooden pedestal with studio lighting.
     - Complementary angles and details capturing the crumb texture and seed toppings.

3. **Spatial Atmosphere & Watermark Typography**:
   - Large, semi-transparent watermark typography in the background: `FASO BAKES • OVEN FRESH EVERYDAY` creating deep parallax behind the rotating bread.
   - Ambient warm studio spotlighting with radial glow highlighting the golden crust.

4. **Floating Interactive Badges**:
   - Left Floating Card: `Fresh Batch • Dawn 4:00 AM Dispatch` with quick order action.
   - Right Floating Card: `10,000+ Happy Families` with 5-star customer rating and ISO 22000 certification mark.

5. **Classy Category Switcher**:
   - Integrated tab bar allowing instant switching between:
     - `01. 360° Multigrain Bread Loaf` (with active 360 turntable)
     - `02. Italian Plum Cake` (Signature Italian recipe on wooden pedestal)
     - `03. Velveteen Cream Buns` (Soft brioche cream buns)
     - `04. Golden Milk Rusks` (Crispy tea rusks)

---

## 2. Technical Steps

1. **Generate Studio Assets**:
   - Use `generate_image` to produce high-resolution studio shots of the multigrain bread loaf on a dark oak wooden pedestal matching FASO Bakes branding.
2. **Build `BreadTurntable360.tsx` Component**:
   - Smooth 360° CSS 3D turntable animation with realistic pedestal base, rotating platform, lighting reflections, and drag-to-inspect interaction.
3. **Update `Hero.tsx` & `Hero.module.css`**:
   - Integrate the 360 turntable component into the hero product stage.
   - Add watermark background typography (`FASO BAKES`) and floating interactive cards.
4. **Verification**:
   - Run `npm run build` to verify 0 errors.
   - Inspect live in browser across desktop (1920px) and mobile (500px).
   - Update `context.md` in `.agents/`.
