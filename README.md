# Project Crayon Website

A single-page marketing site for Project Crayon — showcasing Kivutar's in-development titles and outlining the studio's porting and technology services. The page is entirely static (HTML/CSS/JS) with polished UI details such as platform chips, animated mascots, on-scroll reveals, and clipboard-friendly contact actions.

## Preview

Serve the root directory with any static server. A quick option:

```bash
python3 -m http.server 5173
```

Then open [http://localhost:5173/index.html](http://localhost:5173/index.html).

> **Tip:** For live editing, use your editor's auto-reload plugin or `npx serve --single .` if you
> prefer Node-based tooling (requires network access for the CDN fonts).

## Structure

- `index.html` – Content and semantic structure for hero, games showcase, services, technology, and contact sections.
- `styles.css` – Global design tokens, responsive layout rules, component styling, and micro-interaction effects.
- `script.js` – Lightweight enhancements: intersection-observer reveals, mobile-nav state handling, copy-to-clipboard toasts, mascot animations, and tooltip plumbing.
- `assets/images/` – Hero artwork, game art, stickers, and supporting imagery (`galaxy.png`, `crayon.png`, `arcana-mundi-square.png`, `mystic-seals-square.png`, `sticker_2.png`, etc.).

## Key Features

- **Hero & Branding** – Static galaxy artwork with a dark header that blends into the illustration.
- **Games Gallery** – Responsive cards highlighting Arcana Mundi and Mystic Seals with platform chips (MegaDrive, Steam, Itch.io) and tooltips.
- **Porting & Publishing** – Service summary plus a clickable cat sticker that adds a playful animation when activated.
- **Technology Panels** – Gradient tiles that communicate core competencies with locally bundled SVG iconography.
- **Contact Actions** – Dual callouts for `justask@projectcrayon.dev` featuring copy buttons and subtle toast feedback.

## Development Notes

- The layout assumes modern browsers (Flexbox, Grid, IntersectionObserver) and intentionally avoids build tooling.
- Google Fonts load from a CDN; ensure network access if developing offline.
- Animations respect `prefers-reduced-motion` to keep the experience accessible.
- Section anchors use `scroll-margin-top` and smooth scrolling for comfortable navigation.
- Stick to BEM-flavored class names and reuse CSS custom properties rather than hardcoding values.
- Keep edits ASCII where possible and observe the two-space indentation convention across HTML/CSS/JS.

## Tooling & Checks

- Format check: `npx prettier@latest --check index.html styles.css script.js`
- HTML lint: `npx htmlhint@latest index.html`
- Preview refresher: `python3 -m http.server 5173`
- Image prep: compress PNG/WebP assets before dropping them in `assets/images/`

## Maintenance Checklist

- When adding new games, replicate a `.card` block and supply platform chips (include a `data-label` for tooltip text).
- Optimize any new imagery before committing (PNG compression or WebP conversion recommended).
- Keep `script.js` minimal—extend existing helper patterns rather than introducing frameworks.
- Run a manual pass on mobile breakpoints after significant layout tweaks (≤600px for cards, ≤480px for technology tiles).

## Testing Playbook

- Smoke test key widths: desktop (~1200px), tablet (~880px), small tablet (~600px), and mobile (~480px).
- Toggle the nav on mobile, jump across section anchors, and verify scroll snapping on the game cards.
- Hover/focus platform chips to confirm tooltip labels and activate the cat sticker to ensure animation + reset states work.
- Switch on reduced-motion in dev tools to confirm animations gracefully disable.
- Run Lighthouse (or similar) whenever layout or asset changes materially affect performance/accessibility.

## Contributing

- Use short, imperative commit messages ≤72 characters (e.g., `Adjust header tone`).
- In PR descriptions, call out assets touched, accessibility considerations, and manual test coverage.
- Include before/after screenshots for visible changes and list the browsers/viewports exercised.
- Keep preview servers live during review and request a peer review before merging.

## Contact

Questions or publishing inquiries? Use the built-in copy controls or email `justask@projectcrayon.dev` directly.
