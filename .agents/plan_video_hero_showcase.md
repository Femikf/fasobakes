# Implementation Plan: Video Hero Showcase Connected to FASO Bakes Products

## 1. Video Analysis (`public/gemini_generated_video_a2de6f4c.mp4`)
- **Format**: MP4 (H.264), 1280x720, 24 fps, ~10 seconds duration.
- **Visual Sequence on the Artisanal Wooden Pedestal**:
  1. **0:00 – 0:03.3**: *Artisanal Multigrain Sliced Bread* loaf with toasted seeds and cut slice + *FASO Milk Rusk* pack.
  2. **0:03.4 – 0:06.6**: *FASO Cream Bun & Chocolate Cream Bun* with cut slice revealing luscious whipped cream filling.
  3. **0:06.7 – 0:10.0**: *Premium Italian Plum Cake* crowned with roasted cashews & raisins + *FASO Plum Cake* gift box.
- **Tone & Atmosphere**: Warm kitchen/bakery studio, natural soft daylight, polished dark teak wooden pedestal, premium commercial presentation.

---

## 2. Technical Scope of Hero Redesign

### A. Cinematic Video Hero Player (`src/components/Hero/Hero.tsx`)
- Embed `/gemini_generated_video_a2de6f4c.mp4` as the centerpiece of the hero section:
  - `<video autoPlay loop muted playsInline poster="/images/hero_video_frame0.jpg">`
  - High-end glassmorphic bezel frame with warm ambient radial glow and soft ground shadow.
  - Interactive playback controls: Play/Pause toggle and Mute/Unmute audio button.
  - **Interactive Chapter Pills**: Clickable product timestamps:
    - `🍞 Multigrain Loaf (0:00)`
    - `🧁 Cream Buns (0:03)`
    - `🎂 Premium Plum Cake (0:07)`
    Clicking a chapter seeks the video directly to that timestamp with smooth playback!

### B. Cohesive Editorial Content Connected to the Video
- **Badge**: `✨ ARTISANAL BAKING CRAFT • WAYANAD, KERALA`
- **Headline**: `Baking Delectable Dreams: Pure Goodness in Every Slice`
- **Subtitle**: `Experience the artistry of FASO Bakes captured on our master pedestal — from seed-crusted Multigrain Loaves and velvety Cream Buns to our signature Italian Plum Cake and tea-time Milk Rusks.`
- **Connected Product Chips**:
  - `🍞 Artisanal Breads` (100% whole wheat, stone-hearth baked)
  - `🎂 Italian Plum Cake` (Pure butter, California raisins & cashews)
  - `🧁 Velveteen Cream Buns` (Whipped cream filling & brioche)
  - `☕ Crispy Milk Rusks` (Double-baked tea companion)
- **Call-to-Action Buttons**:
  - Primary button: `Order Bakery Creations`
  - WhatsApp button: `💬 WhatsApp Order (+91 95444 08674)`

### C. Retaining Scale Counters Dock
- Retain the proven statistics dock below:
  - 80+ Fresh Delicacies | 500+ Outlets | 50+ Delivery Fleet | 100% Untouched Hygiene.

### D. Responsive Optimization
- Fully responsive on mobile (500px) and wide desktop screens.

---

## 3. Files to Update
1. `src/components/Hero/Hero.tsx`: Replace legacy turntable/image switcher with cinematic video hero player and connected content.
2. `src/components/Hero/Hero.module.css`: Styles for the video frame, chapter controls, ambient lighting, and typography.
3. Update `context.md` in `.agents/`.
