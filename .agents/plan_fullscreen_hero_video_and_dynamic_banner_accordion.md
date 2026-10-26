# Implementation Plan: Full-Screen Video Hero with Dynamic Text Overlay & Dynamic Looped Accordion Banner Showcase

## 1. Project Context & Objectives
- **User Request**:
  1. Transform the Hero section into a **full-screen cinematic video hero** where the newly uploaded video (`public/gemini_generated_video_a2de6f4c.mp4`) plays as the immersive background.
  2. Overlay dynamic text content that transitions synchronized with the video playback across all 4 products:
     - **0:00 - 2.5s**: *Multigrain Sliced Bread* & Bread Pack
     - **2.5s - 5.0s**: *Velveteen Cream Buns* & Twin Packs
     - **5.0s - 7.5s**: *Crispy Milk Rusks* & Rusk Pack
     - **7.5s - 10.0s**: *Premium Italian Plum Cake* & Festive Gift Box
  3. Add a **dynamic banner section** where clients can add banners dynamically (connected to the existing `/api/banners` and admin dashboard), styled as an **interactive looped accordion with infinite cycling**.

---

## 2. Technical Design & Architecture

### A. Full-Screen Cinematic Video Hero (`src/components/Hero/Hero.tsx` & `Hero.module.css`)
- **Immersive Full-Screen Container**:
  - `min-height: calc(100vh - 76px)` on desktop (100% viewport immersion).
  - Background `<video>` set to `object-fit: cover`, autoplaying the 4-stage rotating pedestal video with smooth loop.
  - Multi-layer cinematic vignette & gradient overlay:
    - Left-to-right dark roast scrim (`rgba(20, 10, 5, 0.90)` to transparent) ensuring text legibility while keeping the rotating pedestal sharp.
    - Soft bottom fade into the subsequent page section.
- **Dynamic Synchronized Text Overlay**:
  - State tracking `currentTime` via `onTimeUpdate` throttled to prevent unnecessary re-renders.
  - 4 Dynamic Stages matching the video:
    1. **0.0s – 2.5s**: `Multigrain Sliced Bread` (Badge: 100% Artisanal Whole Grain, Heading, Subtitle, Toasted Seeds tag, Order CTA)
    2. **2.5s – 5.0s**: `Velveteen Cream Buns` (Badge: Pure Whipped Cream Indulgence, Heading, Subtitle, Brioche tag, Order CTA)
    3. **5.0s – 7.5s**: `Crispy Milk Rusks` (Badge: Quintessential Chai Companion, Heading, Subtitle, Double-Baked tag, Order CTA)
    4. **7.5s – 10.0s**: `Premium Italian Plum Cake` (Badge: Authentic Italian Heritage Recipe, Heading, Subtitle, Roasted Cashews tag, Order CTA)
  - Smooth CSS fade-in & slide transitions when the active stage transitions.
- **4-Segment Interactive Stage Bar**:
  - Clickable segmented timeline tracker (`01. Bread`, `02. Cream Buns`, `03. Rusks`, `04. Plum Cake`).
  - Active segment fills with golden progress bar as that chapter plays.
  - Clicking any segment seeks `videoRef.current.currentTime` directly to that stage (`0s`, `2.5s`, `5.0s`, `7.5s`).
- **Floating Controls**:
  - Mute / Unmute audio button & Play / Pause toggle.
  - "Behind the Craft" modal button to view master bakers dusting dough and glowing stone-hearth ovens.

### B. Dynamic Looped Accordion Banner Showcase (`src/components/BannerShowcase/`)
- **Component**: `src/components/BannerShowcase/BannerShowcase.tsx` and `BannerShowcase.module.css`.
- **Data Source**: Consumes `banners` prop fetched dynamically from the database (`getAllBanners()`), allowing clients to add, edit, or reorder banners at any time via `/admin/dashboard`.
- **Interactive Looped Accordion**:
  - Displays active banners in a luxury horizontal expanding accordion.
  - Auto-cycles through each banner in an infinite loop (e.g. 5s per slide), expanding the active card smoothly (`flex: 3.5` vs `flex: 1`).
  - Hovering or clicking a banner card expands it immediately and pauses the auto-loop.
  - Each accordion card displays:
    - Background image with luxury overlay.
    - Floating category badge & order index.
    - Bold headline and description.
    - Direct CTA button (`Explore Now` / `Order Now`).
- **Infinite Marquee Ticker**:
  - A subtle gold ticker ribbon running along the top of the banner section with key client announcements and brand values.
- **Placement**: Integrated in `src/app/page.tsx` right below `Hero` (above `About`), providing a high-impact promotional strip that clients can control dynamically.

---

## 3. Files to Create / Modify
1. `src/components/Hero/Hero.tsx`: Re-architect for full-screen video background, dynamic 4-stage overlay text, synchronized timeline, and floating controls.
2. `src/components/Hero/Hero.module.css`: Full-screen layout, responsive gradients, smooth text transitions, and mobile stacking.
3. `src/components/BannerShowcase/BannerShowcase.tsx`: New interactive looped accordion banner showcase.
4. `src/components/BannerShowcase/BannerShowcase.module.css`: Accordion expand animations, infinite ticker ribbon, and responsive styling.
5. `src/app/page.tsx`: Import and render `BannerShowcase` with dynamic `banners` data.
6. `.agents/context.md`: Update project state with full documentation.

---

## 4. Verification Plan
- Build check: `npm run build` (Turbopack + TypeScript check).
- Verify video playback and dynamic overlay transitions across all 4 stages.
- Verify accordion expansion, infinite auto-cycle, and responsive behavior.
