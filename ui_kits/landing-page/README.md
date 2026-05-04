# Bruno Leite Advocacia — Landing Page UI Kit

A high-fidelity recreation of the `brunoleite.adv.br` landing page as a single React app. All visuals lifted directly from the source `index.html` — colors, type, spacing, copy.

## Files
- `index.html` — Babel-transpiled React entry. Loads `styles.css` and runs `app.jsx`.
- `app.jsx` — All components in one file: `Nav`, `Hero`, `WhatIs`, `Steps`, `DocsTable`, `WhoCard`, `FAQ`, `CTASection`, `Footer`, `WhatsAppFloat`, plus shared primitives (`SectionEyebrow`, `Callout`, `CheckList`).
- `styles.css` — Local kit styles. Imports `../../colors_and_type.css` for tokens and Google Fonts.

## How to use
Open `index.html` in any browser — no build step. To extract a single component, copy its function from `app.jsx` and the matching CSS rules from `styles.css`.

## Notes
- Copy lifted verbatim from the source page; this is a faithful recreation, not a new design.
- Logo SVG referenced from `../../assets/logo-gold.svg`. Lawyer photo from `../../assets/bruno-leite.jpg`.
- Type ships as Fraunces + Inter (Google Fonts) — see the root `README.md` Type section if you need to swap back to Klim Tiempos + Founders Grotesk for production.
