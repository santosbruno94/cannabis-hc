---
name: bruno-leite-design
description: Use this skill to generate well-branded interfaces and assets for Bruno Leite Advocacia (a Brazilian law firm focused on cannabis-medicinal habeas corpus), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Tone:** formal-but-warm Brazilian Portuguese; tribunal-grade gravitas; no exclamation points; no emoji except 💬 on WhatsApp CTAs.
- **Colors:** navy `#0f1c2e` (primary), gold `#c9a84c` (single accent), cream `#f5f0e8` (text), green `#2d4a3e` (CTA only).
- **Type:** Fraunces (display serif, italics for emphasis) + Inter (body 300, UI 500). Both Google Fonts — see `colors_and_type.css` for the `@import` and the `--serif-display` / `--sans` tokens.
- **Borders:** 1px gold-at-low-opacity hairlines. Sharp corners. Circles only at 50%.
- **Iconography:** typographic glyphs (→, +, Roman numerals). No icon library.
- **Imagery:** no stock, no illustrations, no cannabis-leaf imagery. Photo only inside circular gold-ring medallions.

See `colors_and_type.css` for the full token set, `ui_kits/landing-page/` for the canonical component recreation, and `assets/` for the brand emblem (3 colorways) + lawyer photo.
