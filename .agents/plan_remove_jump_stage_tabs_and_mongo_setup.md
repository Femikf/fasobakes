# Implementation Plan: Remove Jump to Stage Tabs & MongoDB Atlas URL Guide

## 1. Objectives
1. **Remove "Jump to Stage" Tabs from Hero Section**:
   - In `src/components/Hero/Hero.tsx`, completely remove the `stageTrackerDock` (lines 286-320) which contains the 4 stage buttons (`01. Bread`, `02. Cream Buns`, `03. Rusks`, `04. Plum Cake`).
   - Clean up the commented-out floating header controls (`topControlsDock`) to keep the code pristine and clean.
   - In `src/components/Hero/Hero.module.css`, remove the unused stage tracker styling rules (`stageTrackerDock`, `stageTrackerGrid`, `stageTrackBtn`, `activeStageTrack`, etc.) and optimize the overlay spacing.
   - Result: A pure, cinematic full-screen video background where only the elegant headline, subtitle, craft tags, and CTAs dynamically change as the video plays.

2. **MongoDB Atlas Connection URL Guide**:
   - Provide clear, numbered steps explaining where to find the connection string inside the MongoDB Atlas Web Console.
   - Explain how to format the URL (inserting DB user password and database name `faso_bakes`).
   - Show how to add `MONGODB_URI` into `.env.local` so the application connects to the MongoDB cluster.

---

## 2. Technical Modifications

### `src/components/Hero/Hero.tsx`
- Remove the unused `jumpToStage` function and `stageTrackerDock` JSX.
- Clean up the commented out header dock block.
- Keep the synchronized text overlay logic (`handleTimeUpdate`) so text continues to change automatically with video playback.

### `src/components/Hero/Hero.module.css`
- Remove `.stageTrackerDock`, `.stageTrackerGrid`, `.stageTrackBtn`, `.activeStageTrack`, `.stageTrackTop`, `.stageTrackNum`, `.stageTrackName`, `.trackBar`, `.trackFill`.
- Adjust `.overlayContainer` and `.overlayContent` padding for ideal vertical centering against the full-screen video.

---

## 3. Verification & Compliance
- Build check: `npm run build` (confirm 0 errors).
- Update `.agents/context.md`.
