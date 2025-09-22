# Repository Guidelines
Project Crayon's marketing site is a static HTML/CSS/JS experience with a few deliberate micro-interactions. Treat it as a lightweight, design-first codebase.

## Project Structure & Module Organization
- `index.html` lays out the hero, games showcase, services, technology tiles, and contact/footer in page order. All copy edits happen here.
- `styles.css` houses design tokens, responsive layout rules, card/tile styling, and animation keyframes (nav states, platform chips, cat sticker, etc.).
- `script.js` keeps enhancement logic: intersection observer reveals, mobile-nav close, top-of-page brand link, copy-to-clipboard toasts, tooltip focus handling, and mascot/cat animations.
- `assets/images/` stores hero art (`galaxy.png`), mascot (`crayon.png`), game covers, stickers, and screenshots. Compress additions and stick to kebab-case names.

## Build, Test, and Development Commands
- Quick preview: `python3 -m http.server 5173` then open `http://localhost:5173/index.html`.
- Alternative: `npx serve --single .` (requires network for the CDN assets).
- Optional sanity checks: `npx prettier@latest --check index.html styles.css script.js` and `npx htmlhint@latest index.html` before committing.

## Coding Style & Naming Conventions
- Two-space indentation; keep line length ≲100 characters.
- Classes use BEM-flavored kebab-case (`card__platforms`, `pp-illustration__img`). Reuse utility classes and CSS custom properties rather than hardcoding values.
- Keep animations subtle and respect `prefers-reduced-motion`; add fallbacks when introducing new motion.
- Leave hero artwork static (no parallax/zoom) and keep the header background at `#100E1E` for contrast.
- Use the SVG set in `assets/images/icons/` for interface glyphs; ensure tooltip chips include `data-label` text for accessibility.

## UI & Interaction Patterns
- Game cards expect square art (`object-fit: contain`) and platform chips with tooltip labels (MegaDrive/Steam/Itch.io). Extend the pattern when adding titles.
- Porting section’s cat sticker (`pp-illustration__img`) animates on click/keyboard; mirror that style for future mascots.
- Technology tiles use soft gradients with a restrained overlay; avoid reintroducing heavy highlights.
- Copy-to-clipboard capsules should preserve the button + toast pattern already in use.

## Testing Guidelines
- Smoke test desktop + mobile widths (~1200px, 880px, 600px, 480px). Verify nav toggle, section anchors, and scroll snapping for cards.
- Hover/focus the platform chips to confirm tooltips, and activate the cat sticker to check the animation/reset behavior.
- Toggle reduced-motion in dev tools and ensure animations disable gracefully.
- Run Lighthouse or similar when visual/layout changes are significant.

## Commit & Pull Request Guidelines
- Use short, imperative commit subjects (`Adjust header tone`, `Add tooltip to platform chips`) ≤72 characters.
- Mention assets touched, accessibility considerations, and manual test notes in commit/PR descriptions.
- PRs should include before/after screenshots for visible changes and list browsers/viewports tested.
- Request peer review before merging; keep preview servers live until approvals land.

## Agent Operations
- CLI runs with `danger-full-access` sandboxing, network enabled, and `approval_policy: never`; all commands execute directly without escalation.
- Invoke shell commands with `bash -lc …`, always setting `workdir`; avoid unnecessary `cd` usage.
- Keep edits ASCII unless the file already uses Unicode; maintain two-space indentation and line lengths ≲100 characters.
- Use the planning tool for multi-step tasks (skip the simplest ~25%) and update it after completing plan items; never submit single-step plans.
- Favor `rg`/`rg --files` for searches; respect existing workspace changes and do not revert user-authored edits.
