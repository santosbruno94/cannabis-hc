# Bruno Leite Advocacia — Design System

A boutique-law-firm visual identity for **Bruno Leite Advocacia e Consultoria**, currently expressed through a single landing page focused on legal services around medicinal cannabis cultivation in Brazil.

## Company Context

Bruno Leite (OAB/RJ 226.475) is a Brazilian criminal-law and health-rights advocate. The current public surface is a one-page site at **brunoleite.adv.br** that promotes a specific legal service: a **Habeas Corpus Preventivo with salvo-conduto** for patients who need to grow cannabis at home for medicinal use. The goal of the page is to convert a worried, often medically-vulnerable visitor into a WhatsApp conversation with the lawyer.

The brand voice is therefore both **institutional and human**: the gravitas of a tribunal-grade legal practice, but warm and reassuring enough to feel safe to families considering home cultivation as a treatment.

### Products represented
1. **brunoleite.adv.br landing page** — single-page marketing site (HC preventivo / cannabis medicinal). The only existing surface and the source of truth for this design system.

### Source materials
- **GitHub repo:** `santosbruno94/cannabis-hc` — a single `index.html` (≈70 KB) plus a CNAME pointing at `brunoleite.adv.br`. We imported the page as `index.html` in the project root for reference. The page contains all type, color, and copy fundamentals; it also embeds the brand wordmark as inline SVG and the lawyer's photo as base64. We extracted both into `assets/`.
- **No Figma.** No separate design-token file. The CSS in `index.html` is the de facto design system.

---

## Index

| Path | What's there |
|------|--------------|
| `colors_and_type.css` | All design tokens: color palette, type stack (Google Fonts `@import` for Fraunces + Inter + JetBrains Mono), semantic CSS for h1–h5, eyebrows, body, lists |
| `assets/` | Brand wordmark (gold, cream, navy variants), lawyer photo |
| `preview/` | Cards rendered into the Design System tab (colors, type, components, brand) |
| `ui_kits/landing-page/` | High-fidelity React/JSX recreation of the landing page, broken into reusable components |
| `index.html` | The original imported page (read-only reference) |
| `SKILL.md` | Cross-compatible Agent Skill manifest |

---

## CONTENT FUNDAMENTALS

The copy is **Brazilian Portuguese** throughout. Tone is **formal-but-warm**: technical enough to demonstrate authority, plain enough that a worried mother of an autistic child will not bounce.

### Voice
- **Third-person institutional**, never "I". The lawyer is referred to as *"o advogado"* or by full name. Visitor is addressed as **"você"** (informal but respectful, the standard register on Brazilian professional sites).
- **Calm, declarative sentences.** No exclamation marks anywhere on the existing page. No marketing hype.
- **Domain-specific Latin and legal terminology** is used confidently and italicized for editorial elegance — *Habeas Corpus*, *salvo-conduto*, *RDC 660*. This signals expertise.
- **Reassuring framing of risk.** Words like *segurança jurídica*, *amparo judicial*, *proteção* recur. The threat (criminal prosecution) is named once and then immediately answered with the remedy.

### Casing
- **Sentence case** for headlines. Headlines mix roman and italic spans for emphasis (`Proteção jurídica para o *cultivo medicinal* de Cannabis`).
- **UPPERCASE WITH WIDE LETTER-SPACING** (~0.2em) for eyebrows, button labels, footer chrome, OAB number, table headers. This is the signature editorial-typographic move of the brand.
- Title Case is *not* used. Anywhere.

### Punctuation & rhythm
- Em-dash (`—`) used as the primary editorial pause: *"salvo-conduto — documento que autoriza..."*
- En-dash never seen.
- No emoji decorating headings or body. **One** emoji exists on the whole site: the speech-bubble (💬) on the WhatsApp CTA — and even that is a single-glyph functional cue, not decorative. Treat emoji as effectively absent from the brand.
- No exclamation points.
- Numerals stylized as Roman numerals (I, II, III, IV) when used for ordered legal categories — reinforcing the tribunal-document feel.

### Specific examples (lifted from the site)
- **Eyebrow:** `Direito Criminal & Saúde`
- **H1:** `Proteção jurídica para o *cultivo medicinal* de Cannabis`
- **Subheadline:** `Habeas Corpus Preventivo com pedido de salvo-conduto para pacientes que necessitam do cultivo doméstico de cannabis como tratamento de saúde.`
- **Pull quote:** `"A ação atua na interseção de dois direitos fundamentais: o direito à liberdade e o direito à saúde."`
- **Section label:** `O remédio jurídico` / `O processo` / `Documentação necessária`
- **Step title:** `Consulta inicial` (sentence case, two words, no period)
- **CTA primary:** `Falar pelo WhatsApp` (infinitive verb + channel)
- **CTA secondary:** `Entender o processo` (lower-stakes infinitive, no caps)
- **Disclaimer footer:** `OAB/RJ 226.475`

### What NOT to write
- No "Click here." No "Learn more!" No exclamatory marketing copy.
- No first-person plural marketing voice ("Nós cuidamos de tudo!"). Stay third-person institutional.
- No emoji in headlines, buttons, or section labels.
- No buzzword stacks ("inovador, ágil, completo").

---

## VISUAL FOUNDATIONS

The look is **editorial law journal meets quiet luxury hotel**: deep navy, brass gold hairlines, a cream serif italicized at moments of emphasis. Almost no rounded corners. Almost no shadows. Information is structured as if it were a printed brief.

### Color
- **Primary surface:** `--navy #0f1c2e`. Almost the entire site is on this color.
- **Alternating sections:** `--navy-mid #162438` — barely-perceptible-warmer alternation that rhythms the page without ever using two strong colors.
- **Card surface:** `--navy-light #1e3251` for elevated panels (lawyer card).
- **Footer:** `--navy-deep #09121e` — closes the page on a darker note.
- **Accent (single accent only):** `--gold #c9a84c`. Used for hairlines, eyebrow text, button fills, all numerals, italic headline highlights (`--gold-light #e0be7a`), and the logo wordmark itself.
- **CTA section uses an exception color:** `--green #2d4a3e` — a deep, herbal green that semantically nods to "saúde / cannabis" without being literal. Used **once** on the page, deliberately.
- **Body copy:** `--text-light #a8b5c4`, a cool desaturated blue-grey. Headlines and emphasis lift to `--cream #f5f0e8`.

This is a **2-color brand** (navy + gold) with cream typography and one supporting green moment. Resist the urge to introduce additional hues.

### Type
The original `brunoleite.adv.br` page is set in **Tiempos Headline** + **Founders Grotesk** — both commercial Klim Type Foundry families. To keep this design system distributable as an open repo, we substitute Google-hosted equivalents that preserve the same character and weight ladder:

- **Display: Fraunces** (Google Fonts) — variable transitional serif, weights 400–700 with italic. Stand-in for Tiempos Headline. Used for *every* headline, every numeral, every step title, every italic emphasis. The italic is the signature move; Fraunces' italic is appropriately expressive.
- **Body: Inter** (Google Fonts) — neutral grotesque, weights 300/400/500/600. Stand-in for Founders Grotesk. Body copy lives at 300 — light, airy, journal-like. UI labels at 500.
- **Mono: JetBrains Mono** (Google Fonts) — for meta labels (`OAB/RJ`, eyebrows that opt-in to mono). Optional; the live site does not currently use a mono.
- The brand is a strict serif-display + grotesque-sans pair. No third typeface.

If you ever ship a production surface with the original Klim families, just rebind the `--serif-display` / `--sans` tokens in `colors_and_type.css` and remove the Google Fonts `@import` — every component will pick up the new fonts automatically.

### Backgrounds
- **Solid navy fields**, not gradient washes.
- **One softening device:** a radial gradient placed behind the hero from the right (`radial-gradient(ellipse 60% 80% at 70% 50%, rgba(45,74,62,.35) 0%, transparent 70%)`) — a faint herbal-green halo behind the emblem. Same trick on the CTA section (gold halo at 50% 50%).
- **No images-as-backgrounds.** No textures, no grain, no patterns. No hand-drawn illustrations.
- **No full-bleed photography.** The only photo on the entire site is a portrait of the lawyer, used inside a **circular medallion** with a 2px gold ring.

### Hairlines, dividers, borders
This is the brand's signature mechanism:
- **1px gold-at-low-opacity hairlines** (`rgba(201,168,76,0.10–0.30)`) separate every section, every list row, every table row.
- **Section dividers:** a 1px line with horizontal gold gradient fading to transparent at both ends (`linear-gradient(90deg, transparent, rgba(201,168,76,.3), transparent)`).
- **Eyebrow rule:** every eyebrow label is preceded by a short 1.8rem gold hairline (`::before`).
- Borders are **always** 1px. Never 2px (except the photo medallion which is 2px). No 3px+ borders anywhere.

### Cards
- **Sharp 0px corners.** No rounding. The only rounded shapes on the page are circles (logo emblem, step numerals, photo medallion, WhatsApp float).
- **Minimal shadow.** The page uses **no drop shadows on cards** — it relies on hairline borders and small surface-color shifts to create depth.
- **Flat callouts** use a 2px gold left-border accent (`border-left: 2px solid var(--gold)`) on a `--navy-mid` background — used sparingly for italic pull-quotes only.

### Corner radii
- Sharp / 0 for most elements.
- **50% only** for: the hero emblem, the inner emblem ring, step numerals (4.4rem orbs), photo medallion, the WhatsApp float button. There is no in-between (no 4px, 8px, 16px chamfered cards).

### Buttons
- **Primary:** solid gold fill, navy text, all-caps, 0.06em tracking, sharp corners, ~0.85rem padding × 2rem horizontal. Hover lifts to `--gold-light` and `translateY(-1px)`.
- **Secondary:** transparent, cream text, 1px cream-at-25%-opacity border. Hover brightens border to full cream.
- **Nav CTA:** bordered gold-on-transparent variant. Hover inverts to gold-fill / navy-text.

### Hover & press states
- **Hover:** color invert (gold-fill on hovered border-only buttons), or 1px Y-translate, or border opacity increase. No glow effects, no scale on text.
- **Press:** none defined. The brand is restrained.
- **WhatsApp float** is the exception: `transform: scale(1.1)` on hover.

### Animation
- **Fade-in on scroll**: `opacity 0→1` + `translateY(24px→0)`, 0.7s ease. Triggered via IntersectionObserver. Used on every section.
- **Logo float**: a 6s `ease-in-out infinite` `translateY(0 ↔ -10px)` loop on the hero emblem SVG. The only continuously-running animation.
- **FAQ accordion**: max-height 0 ↔ 300px transition over 0.4s ease. Arrow rotates 45deg on open.
- **Easings:** plain `ease` everywhere. No cubic-bezier overshoot, no bounces, no springs.

### Transparency & blur
- **Sticky nav** uses `backdrop-filter: blur(12px)` over `rgba(15,28,46,0.95)` — the only blur on the site.
- All other surfaces are fully opaque.
- Gold-at-low-opacity is the dominant transparency effect (hairlines, faint fills, halo radial gradients).

### Imagery treatment
- **One photo only** (lawyer portrait), tightly cropped to face/shoulders, color-graded warm-neutral, sitting inside a circular gold ring. No filters, no grain, no duotone.
- No stock imagery. No illustrations. No icons-as-images.
- The cannabis leaf is **never depicted literally** anywhere — not as a logo, not as a watermark, not as decoration. The brand chose the calligraphic "BL" emblem instead. **This is an important and intentional restraint:** medicinal cannabis is the subject, but the visual language is law-firm, not dispensary.

### Layout rules
- **Vertical rhythm:** 7rem top/bottom padding on full-width sections (4rem at md, 3rem at sm). Horizontal: `8vw` at desktop, `6vw` at md, `5vw` at sm.
- **Two-column grids** with `6rem` gap between columns (collapse to 1-column at 900px).
- **Steps grid:** 4-col on desktop with a continuous 1px gold gradient line connecting numeral centers; 2-col at md (line hidden); single-column stacked rows at mobile.
- **Sticky elements:** only the nav. Everything else flows.
- **Max-width:** the FAQ section caps at 900px; everything else fluid-to-viewport.

### Inner shadows / glows
- None. The brand has no inset shadows, no soft glows, no neumorphism.

### Iconography
- The page uses **arrow glyphs (`→`) as bullet markers** — pure typography, gold-colored, no SVG.
- The FAQ uses a **`+` glyph** that rotates 45deg to become `×` on open.
- The WhatsApp float uses **`💬` emoji** (the single emoji on the entire site).
- See `ICONOGRAPHY` section below.

---

## ICONOGRAPHY

Bruno Leite Advocacia has **no icon system in the conventional sense**. There is no icon font, no SVG sprite, no Lucide/Heroicon import. The brand expresses itself almost entirely through typography and hairlines, and substitutes typographic glyphs where most sites would reach for icons.

### What's actually used on the site
- **`→`** (Unicode `U+2192`) — list-item bullet, gold, coloured to match accent. Replaces a checkmark.
- **`+`** (Unicode `U+002B`) — FAQ open/close indicator. Rotates 45° to become `×` when expanded. Gold.
- **`💬`** (Unicode `U+1F4AC`, speech balloon) — WhatsApp button glyph. The **only emoji** anywhere in the design.
- **The brand emblem itself** — an inline SVG of stylized "BL" calligraphic monogram with leaf-like flourishes, originally drawn from a 10240×10240 path set. We've extracted it to `assets/logo-gold.svg`, plus cream and navy variants for surface flexibility.

### Roman numerals as visual elements
The "Documentação Necessária" table uses **I / II / III / IV** rendered in Fraunces serif at 1rem 600-weight gold — these function as iconographic anchors for each row. This is on-brand and should be preserved when extending the system.

### Approach for new surfaces
1. **First preference:** typographic glyphs — arrow (`→`), bullet (`•`), em-dash (`—`), plus/cross (`+` / `×`), Roman numerals.
2. **Second preference:** if a real pictographic icon is unavoidable (e.g. dashboard navigation), use **Lucide** (`https://unpkg.com/lucide-static`) at **1.5px stroke**, gold color, no fill. Lucide's editorial line weight matches the brand's hairline aesthetic better than Heroicons or Feather.
   - **This is a substitution flag for the user**: the original site has zero pictographic icons. Lucide is a recommendation, not a documented choice. Confirm before using.
3. **Avoid:** filled icons, duotone icons, iOS SF Symbols, emoji (other than the WhatsApp 💬), cannabis-leaf glyphs, scales-of-justice clichés.

### Logo assets
- `assets/logo-gold.svg` — the primary brand mark in `--gold #c9a84c`.
- `assets/logo-cream.svg` — for use on gold or green backgrounds.
- `assets/logo-navy.svg` — for use on cream/light backgrounds.
- `assets/bruno-leite.jpg` — the lawyer's portrait, ~270×270 effective. Use only inside circular medallions.

### Font substitution notes
The original `index.html` (imported as the read-only reference at the project root) loads Klim Type Foundry families from a CDN. **This design system substitutes** open-licence Google Fonts so the repo can ship publicly:

| Original (Klim) | Substitute (Google Fonts) | Notes |
|-----------------|----------------------------|-------|
| Tiempos Headline | **Fraunces** | Variable; italic is more decorative than Tiempos but closer than any other open serif. |
| Founders Grotesk | **Inter** | Same neutral-grotesque register; pairs cleanly with Fraunces. |
| Founders Grotesk Mono | **JetBrains Mono** | For meta labels. Optional. |

All three are loaded via a single `@import` at the top of `colors_and_type.css`. Italic at 500 carries the gold emphasis spans (`em` inside `h1`/`h2`).

**To switch back to the Klim originals** for a production build: replace the `@import` with `@font-face` rules pointing at self-hosted `.woff2` files, and update the `--serif-display` / `--sans` / `--mono` tokens. Confirm the firm's license covers the new surface before shipping.

---

## Open questions / things to confirm with Bruno

1. Is the current single-page site the **only** brand surface, or are there additional products planned (full law-firm site, client portal, paid-content area)?
2. Should we treat the **green CTA section color** as a permanent brand secondary, or is it specific to the cannabis-medicinal landing page only?
3. Iconography: confirm whether **Lucide line icons in gold** are acceptable for any future internal/dashboard surfaces, or whether the brand should stay strictly typographic-glyph-only.
4. Tone of voice for any **English-language** surfaces (none currently exist) — does the brand stay Portuguese-only?
5. Production type: this skill ships **Fraunces + Inter** (Google Fonts) as open-licence stand-ins for the Klim originals. Confirm whether production builds should swap back to Klim Tiempos Headline + Founders Grotesk (requires a firm-side licence).
