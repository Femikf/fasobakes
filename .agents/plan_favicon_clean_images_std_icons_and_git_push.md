# Implementation Plan: Favicon, High-Definition Images, Standardized Icons & Git Push

## 1. Project Objectives
1. **Add Favicon**:
   - Create a clean, high-resolution favicon & app icon based on the official FASO Bakes wheat emblem (`src/app/icon.png`, `public/favicon.ico`).
   - Configure Next.js metadata in `src/app/layout.tsx` to serve the icon across all desktop & mobile browsers.
2. **Remove Imperfections from Images (Delivery Van & Visual Assets)**:
   - Generate a photorealistic, clean delivery van image (`public/images/faso-delivery-trucks.png`) removing pixelated cutouts, balloon strings, and road artifacts.
   - Ensure all visual assets display sharply without artifacts.
3. **Standardize All Social & Action Icons**:
   - Replace emoji placeholders (`📸`, `▶️`, `💬`, `📞`) with official standard vector SVGs for:
     - **Instagram**: Standard camera glyph (`M12 2.163c3.204 0...`)
     - **WhatsApp**: Standard chat speech bubble with phone handset
     - **YouTube**: Standard rounded play button rectangle
     - **Phone / Call**: Standard clean telephone handset icon
     - **Location / Email**: Standard map pin and mail envelope icons
   - Update across `Navbar.tsx`, `Hero.tsx`, `Products.tsx`, `Contact.tsx`, `Footer.tsx`, and `FloatingWhatsApp.tsx`.
4. **Git Repository Setup & Push to GitHub**:
   - Ensure `.gitignore` protects sensitive files (`.env.local`, `.env`, credentials) while allowing `.env.example`.
   - Initialize git (`git init`).
   - Add all project files (`git add .`).
   - Create initial commit (`git commit -m "feat: complete FASO Bakes artisanal website with 360 video hero, dynamic banners, and MongoDB Atlas"`).
   - Set default branch to `main` (`git branch -M main`).
   - Add remote (`git remote add origin https://github.com/Femikf/fasobakes.git`).
   - Push to repository (`git push -u origin main`).

---

## 2. Technical Modifications

### A. Favicon Generation & App Icon
- Generate a 512x512 PNG app icon (`src/app/icon.png`) and `public/favicon.ico` featuring the golden wheat ear and FASO terracotta orange badge.
- Update `src/app/layout.tsx` icon configuration.

### B. Image Imperfection Fix: Delivery Van
- Generate a pristine commercial delivery van in FASO Bakes terracotta orange driving through scenic Wayanad landscape with clean tires, natural reflections, and crisp resolution using `generate_image`.
- Save as `public/images/faso-delivery-trucks.png`.

### C. Standard Icon SVGs
- Create reusable standard icon definitions / inline standard SVG paths for:
  - Phone: Standard tel handset
  - WhatsApp: Standard WhatsApp brand icon
  - Instagram: Standard Instagram camera
  - YouTube: Standard YouTube play button
- Update `src/components/Contact/Contact.tsx`, `src/components/Footer/Footer.tsx`, `src/components/Navbar/Navbar.tsx`, and `src/components/FloatingWhatsApp/FloatingWhatsApp.tsx`.

### D. Security & Git Push
- Verify `.gitignore`:
  ```gitignore
  .env.local
  .env*.local
  !.env.example
  ```
- Run git commands to commit and push to `https://github.com/Femikf/fasobakes.git`.

---

## 3. Verification & Compliance
- Verify `npm run build` passes with 0 errors.
- Verify favicon displays in browser tab.
- Verify git push completes successfully to `https://github.com/Femikf/fasobakes.git`.
- Update `.agents/context.md`.
