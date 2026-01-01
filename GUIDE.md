# Portfolio Site: Production & Admin Upgrade Guide

This document outlines the roadmap to transform the current codebase into a high-performance, production-ready application, and details how to add an "Admin" interface for easy content management.

## Phase 1: Immediate Codebase Fixes (Prerequisites)
*Before adding new features, stabilize the existing code.*

### 1. Fix Critical Bugs
- [x] **Navbar Typo**: In `src/components/navbar/navbar.jsx`, change `wigth` to `width`.
- [x] **Memory Leak**: Add cleanup to `useEffect` in `Navbar` to remove the resize event listener.
- [x] **Form Logic**: Move `onSubmit` from `<section>` to `<form>` in `Contact.jsx`.

### 2. Security & Configuration
- [x] **Environment Variables**: Create a `.env` file. Move EmailJS keys (`VITE_EMAILJS_SERVICE_ID`, etc.) there. Never commit secrets to GitHub.

---

## Phase 2: Making it "Production Ready"
*Optimize for speed, search engines, and user experience.*

### 1. Performance Optimization
- [x] **Lazy Loading**: Use `React.lazy` and `Suspense` for heavy sections (like `Work` or `Contact`) if the page grows large.
- [x] **Image Optimization**:
  - [x] Convert all PNG/JPG images to **WebP** format.
  - [x] Use explicitly sized `width` and `height` attributes to prevent Cumulative Layout Shift (CLS).
  - [x] Since you are using Cloudinary, ensure you are requesting optimized URLs (e.g., `f_auto,q_auto` parameters).

### 2. SEO (Search Engine Optimization)
Since this is a Single Page Application (SPA), SEO can be tricky.
- [x] **Meta Tags**: Install `react-helmet-async` to manage `<title>` and `<meta name="description">` dynamically.
- [x] **Sitemap**: Generate a `sitemap.xml` in the `public/` folder.
- [x] **Robots.txt**: Add a `robots.txt` file to guide crawlers.

### 3. User Experience (UX)
- [x] **Toast Notifications**: Replace `console.log` in the Contact form with user-facing alerts.
  - *Recommendation*: Install `react-hot-toast`.
- [x] **Form Validation**: Prevent empty submissions or invalid emails before sending to EmailJS.
- [x] **404 Page**: Create a custom "Not Found" component in case a user navigates to a wrong URL (if routing is added).

### 4. Accessibility (A11y)
- [x] **Semantic HTML**: Ensure buttons are `<button>`, links are `<a>`.
- [x] **Keyboard Nav**: Ensure the mobile menu and all interactive elements are focusable via `Tab`.
- [x] **Alt Text**: Ensure all `<img>` tags have descriptive `alt` attributes.

---

## Phase 3: Adding "Admin" Capabilities
*Goal: Allow you to update projects, skills, and text without touching the code.*

There are two main approaches to adding an Admin features. **Option A is highly recommended** for portfolios.

### Option A: Headless CMS (Sanity.io) - **INTEGRATION COMPLETE**

**Status**:
- [x] Frontend connected (`src/sanityClient.js`).
- [x] Components refactored to fetch data (`Work`, `Skills`, `About`).
- [x] Schemas defined and provided.
- [x] Project ID configured in `.env`.

**Reminders**:
- If you haven't already, ensure you added `http://localhost:5173` to your **CORS Origins** in the Sanity dashboard.
- The site will use **fallback data** (hardcoded) until you add content in your Sanity Studio (`npm run dev` in the studio folder).

---

## Recommended Upgrade Path

1.  **Week 1**: Complete **Phase 1** (Fixes) and **Phase 2** (SEO/UX).
2.  **Week 2**: Implement **Option A (Sanity.io)**.
    - It is faster, more secure, and provides a better editing experience (drag-and-drop images, rich text editors).
    - It keeps your frontend code clean and focused on display.

## Checklist for Production Launch
- [x] Run `npm run lint` and fix all warnings.
- [x] Run `npm run build` to ensure the build passes.
- [ ] Test the built version locally: `npm run preview`.
- [ ] deploy to Vercel/Netlify.
- [ ] Verify Contact form works in production.
- [ ] Verify all images load correctly.
