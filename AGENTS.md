# Repository Guidelines
Project Crayon's website is a single-page static front end. Follow these practices to keep contributions coherent and lightweight.

## Project Structure & Module Organization
- `index.html` contains the full layout, arranged chronologically: hero, intro, domain sections, contact, footer.
- `styles.css` holds all styling, starting with CSS custom properties and shared utilities (`.center`, `.h2`, `.hero`).
- `script.js` is limited to the intersection observer reveal; wrap any new logic in functions and avoid polluting the global scope.
- The `assets/` directory stores imagery such as `galaxy.png`; optimize files before adding new assets and keep names kebab-case.

## Build, Test, and Development Commands
- Preview locally with `python3 -m http.server 5173` from the repo root and load `http://localhost:5173/index.html`.
- If you prefer Node tooling, run `npx serve --single .` to get a simple static server with history fallback.
- Format check before committing: `npx prettier@latest --check index.html styles.css script.js`.
- Validate markup quickly with `npx htmlhint@latest index.html` and address any blocking issues it reports.

## Coding Style & Naming Conventions
- Use two-space indentation across HTML, CSS, and JavaScript; target lines below ~100 characters.
- Keep HTML attributes in double quotes and class names in kebab-case, following the existing BEM-flavored pattern (`intro__grid`).
- Lean on the utilities and custom properties defined in `styles.css` rather than duplicating color or spacing values.
- JavaScript should stay framework-free, ES2015+, and defer-executed; gate DOM queries to elements that exist on the page.

## Testing Guidelines
- Smoke test in Chrome and Firefox, verifying parallax background, reveal animation, and responsive navigation toggle.
- Resize around 840px and 520px to confirm the card grids stack correctly and the burger menu displays.
- Capture a Lighthouse report (`npx lighthouse http://localhost:5173 --view`) when significant UI changes land.
- Record manual test steps and note any accessibility follow-ups in the pull request.

## Commit & Pull Request Guidelines
- Git history is not yet committed here; adopt short, imperative commit subjects (`Add hero animation`, `Refine contact CTA`) ≤72 characters.
- Include context in body paragraphs: what changed, why, and any follow-up tasks or assets touched.
- Pull requests should link to briefs/issues, provide before/after screenshots for visual tweaks, and list the manual test steps you executed.
- Request at least one peer review before merging and ensure preview links stay accessible until approval.
