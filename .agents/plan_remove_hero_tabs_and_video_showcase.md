# Implementation Plan: Remove Hero Tabs & Enhance 360° Pedestal Video Showcase

## 1. User Requirements
1. **Remove Tab Setup for Hero Video**:
   - Eliminate the top segmented tab bar (`01`, `02`, `03`) and the quick chapter pill buttons from the Hero section.
   - Present a clean, distraction-free, cinematic layout where the rotating video is the star centerpiece.
2. **Video Showcase Summary & Asset Strategy**:
   - The user requested a video sequence on a rotating round dark oak wooden pedestal stand featuring 4 distinct product stages:
     1. **Multigrain Sliced Bread** + **Pack of Bread** as referred in reference image.
     2. **Cream Buns** (cut open with whipped cream) + **Cream Bun Packs** (Vanilla & Chocolate).
     3. **Crispy Milk Rusks** + **FASO Milk Rusk Packet**.
     4. **Italian Plum Cake** (crowned with cashews & raisins) + **Plum Cake Gift Box**.
   - Provide a studio-grade video prompt tailored for Gemini / Veo video generation to generate this exact 4-stage sequence.
   - In the web app, streamline the hero video player to smoothly play full-motion video without tab clutter, keeping essential play/pause and audio controls.

---

## 2. Technical Modifications

### A. Update `src/components/Hero/Hero.tsx`
- **Remove**:
  - `tabBarContainer` and all tab buttons (`SHOWCASE_ITEMS.map` / `VIDEO_CHAPTERS.map`).
  - `chapterPillsRow` ("Jump in 360° Video: ...").
  - Tab state handlers that force segmented tab selection.
- **Enhance Editorial Hero Section**:
  - Premium category badge: `✨ ARTISANAL WAYANAD CRAFT • BAKING DELECTABLE DREAMS`
  - High-impact Headline: `Baking Delectable Dreams: Pure Goodness in Every Slice`
  - Descriptive Subtitle highlighting all four rotating creations (Multigrain Loaves, Velveteen Cream Buns, Crispy Milk Rusks, and Italian Plum Cakes).
  - Four key craft badges:
    - `🌾 100% Whole Wheat & Multigrain`
    - `🧁 Real Dairy Whipped Cream`
    - `☕ Double-Baked Elaichi Milk Rusks`
    - `🇮🇹 Pure Butter Italian Plum Cake`
  - Dual CTAs:
    - Primary CTA: `Explore 80+ Delicacies` (`#products`)
    - Secondary CTA: `💬 WhatsApp Order (+91 95444 08674)`
  - Retain "Behind the Craft" modal button to view master bakers dusting dough and stone hearth ovens.
- **Enhance Video Stage**:
  - Video player for `/gemini_generated_video_a2de6f4c.mp4` (or any newly uploaded video) with poster `/images/hero_video_frame0.jpg`.
  - Floating badge: `● 360° ROTATING PEDESTAL` with glowing beacon.
  - Video controls: Play/Pause and Mute/Unmute buttons.
  - Subtle floating spec tag: `Crafted on Artisanal Teak Pedestal • Wayanad, Kerala`.
  - Retain the scale counters dock: 80+ Delicacies, 500+ Outlets, 50+ Delivery Fleet, 100% Hygiene.

### B. Update `src/components/Hero/Hero.module.css`
- Remove legacy tab styles (`tabBarContainer`, `tabBarTrack`, `tabBtn`, `activeTabBtn`, `tabHeader`, `tabNum`, `tabTitle`, `tabTeaser`, `activeBar`, `chapterPillsRow`, `pillsLabel`, `pillsGroup`, `pillBtn`, `activePill`).
- Increase vertical balance and typography elegance: since the 40px top tab bar is removed, the hero grid moves gracefully above the fold with generous breathing room.
- Optimize mobile layout (390px - 600px) so the video and copy stack seamlessly.

### C. Video Production Prompt Documentation
- Provide the exact prompt specification for the 4-stage rotating pedestal video (Bread + pack, Cream bun + packs, Rusk + packet, Plum cake + box) so the user can generate the video with Gemini / Veo.

---

## 3. Verification & Compliance
- Run `npm run build` to verify 0 TypeScript/lint/Turbopack errors.
- Verify live rendering at `http://localhost:3000`.
- Update `.agents/context.md` with complete details.
