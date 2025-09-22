# Project Crayon Website

A single-page marketing site for Project Crayon — showcasing Kivutar's in-development titles and outlining the studio's porting and technology services. The page is entirely static (HTML/CSS/JS) with polished UI details such as platform chips, animated mascots, on-scroll reveals, and clipboard-friendly contact actions.

## Preview

Serve the root directory with any static server. A quick option:

```bash
python3 -m http.server 5173
```

Then open [http://localhost:5173/index.html](http://localhost:5173/index.html).

> **Tip:** For live editing, use your editor's auto-reload plugin or `npx live-server` if you prefer Node-based tooling.

## Structure

- `index.html` – Content and semantic structure for hero, games showcase, services, technology, and contact sections.
- `styles.css` – Global design tokens, responsive layout rules, component styling, and micro-interaction effects.
- `script.js` – Lightweight enhancements: intersection-observer reveals, mobile-nav state handling, copy-to-clipboard toasts, mascot animations, and tooltip plumbing.
- `assets/` – Hero artwork, game art, stickers, and supporting imagery (`galaxy.png`, `crayon.png`, `arcana-mundi-square.png`, `mystic-seals-square.png`, `sticker_2.png`, etc.).

## Key Features

- **Hero & Branding** – Static galaxy artwork with a dark header that blends into the illustration.
- **Games Gallery** – Responsive cards highlighting Arcana Mundi and Mystic Seals with platform chips (MegaDrive, Steam, Itch.io) and tooltips.
- **Porting & Publishing** – Service summary plus a clickable cat sticker that adds a playful animation when activated.
- **Technology Panels** – Gradient tiles that communicate core competencies with Font Awesome iconography.
- **Contact Actions** – Dual callouts for `justask@projectcrayon.dev` featuring copy buttons and subtle toast feedback.

## Development Notes

- The layout assumes modern browsers (Flexbox, Grid, IntersectionObserver) and intentionally avoids build tooling.
- Font Awesome and Google Fonts are loaded from CDNs; ensure network access if developing offline.
- Animations respect `prefers-reduced-motion` to keep the experience accessible.
- Section anchors use `scroll-margin-top` and smooth scrolling for comfortable navigation.

## Maintenance Checklist

- When adding new games, replicate a `.card` block and supply platform chips (include a `data-label` for tooltip text).
- Optimize any new imagery before committing (PNG compression or WebP conversion recommended).
- Keep `script.js` minimal—extend existing helper patterns rather than introducing frameworks.
- Run a manual pass on mobile breakpoints after significant layout tweaks (≤600px for cards, ≤480px for technology tiles).

## Contact

Questions or publishing inquiries? Use the built-in copy controls or email `justask@projectcrayon.dev` directly.
