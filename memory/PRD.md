# PRD — Jayasurya Atla Premium Product Portfolio

## Original Problem Statement
Upgrade existing GitHub Pages portfolio (https://jaisury.github.io/jayasurya_portfolio_index.html/) into a **Premium Product Portfolio** positioning Jayasurya as an *E-commerce Catalog Operations Specialist who also builds AI-powered products*.

**Hard constraints from user:**
- DO NOT redesign from scratch · DO NOT change branding · DO NOT remove existing sections · Keep existing design language

## Architecture
- **Stack**: React 19 SPA (single-page multi-view, no backend added)
- **Design**: Preserved original dark theme (`--black:#0a0a09`, `--teal:#1d9e75`, `--amber:#ef9f27`), noise texture, marquee, spinning photo ring
- **Nav**: In-app view switching (Home / Portfolio / About / Contact) + external "View SKU.Pro" CTA
- **Assets**: Real headshot in `/public/headshot.jpeg`; SKU.Pro screenshots in `/public/skupro/{landing,dashboard,history,login}.png`

## Personas
1. **Hiring managers** at D2C / beauty brands looking for catalog leads
2. **Founders / product teams** evaluating SKU.Pro
3. **LinkedIn network** — recruiters & peers verifying credibility

## Implemented Iterations

### Iter 1 (Jan 2026) — Premium Portfolio Upgrade
- Hero improved with "🚀 Creator of SKU.Pro" LIVE badge + AI-powered tagline block
- Two hero CTAs: **View SKU.Pro** (external) + **Contact Me**
- New flagship SKU.Pro section on Home + SKU.Pro added as `00 · Featured` in Portfolio
- About / Timeline updated with SKU.Pro entry
- Nav CTA, marquee & Tech Stack updated with SKU.Pro / AI tags
- data-testid on all interactive elements

### Iter 2 — Headshot & Content Alignment
- Replaced "JA" placeholder with real professional headshot (200x200 circular w/ teal ring)
- Timeline: *"Creator & Developer — SKU.Pro / Independent Product"* + user-provided description
- About bio: repositioned SKU.Pro as *"latest personal product… AI-powered catalog assistant"*

### Iter 3 — Production Polish
- ✅ **Removed all Emergent branding** — deleted `#emergent-badge`, posthog snippet, and Emergent script from `index.html`
- ✅ **Real SKU.Pro screenshots** — replaced mocked dashboard preview with a 3-shot gallery (Landing, Dashboard, History) using actual images; each with hover lift + zoom + label chip
- ✅ **Copy aligned to real product** — SKU.Pro section now reads *"Write marketplace-optimized titles for Amazon, Shopify, Flipkart, Meesho + 6 more"*; features updated to Marketplace-optimized output / Quality score / Bulk upload / Searchable history
- ✅ **Buttons verified** — Launch SKU.Pro, View Live Demo, Contact Me, nav CTA all functional and pointing to https://ecommerce-ai-pro-2.emergent.host/
- ✅ **SEO / OG / Twitter / Schema.org** — full meta suite added: title, description, keywords, OG tags, Twitter cards, Schema.org `Person` + `SoftwareApplication` JSON-LD
- ✅ **Performance** — All images have `loading="lazy"` and `decoding="async"`; hero image uses `loading="eager"`
- ✅ **Responsiveness** — Verified 1920×800 (desktop), 768×900 (tablet), 390×844 (mobile). Added mobile-specific breakpoints (`≤480px`)
- ✅ **QA** — No console errors, no overflow, all CTAs functional, no dark-on-dark issues

### Iter 4 — Code Review Fixes (current)
- ✅ **Refactored monolithic App.js** (997 → 45 lines) into modular components under `src/components/`
- ✅ **Extracted data + type definitions** to `src/constants/portfolioData.js` with JSDoc typedefs for every data shape (StatItem, PortfolioItem, TimelineEntry, ContactLink, etc.)
- ✅ **Custom hook** `useFadeInObserver` in `src/hooks/` — proper deps `[trigger, threshold]`, empty-list guard
- ✅ **useCallback** on `goTo`, `goToContact`, `handleSubmit` to stabilize identity across renders
- ✅ **Stable keys everywhere** — marquee now uses `${copyId}-${tag}`; all lists use `item.key` / `item.name` (no index keys)
- ✅ **Component decomposition** — 12 focused components (Nav, Hero, SkuProSection, HomeExtras, PortfolioItem, PortfolioPage, AboutPage, ContactPage, HomePage, Footer) + sub-components (SkuProShot, SkuProFeatureRow, SectionRow, StandardSection, ImpactSection, TechGroupCard, AboutBio, CoreStrengths, TimelineRow, ContactLinkCard, ContactDetails, ContactForm, TestimonialCard, WorkedWith, Marquee)
- ✅ **Helper functions** extracted: `readTrimmedInput`, `buildMailtoUrl` — each with `@param`/`@returns` JSDoc
- ✅ **Zero console statements** in production code
- ✅ **No visual/UX changes** — verified via screenshot diff + testid parity (creator-badge, hero-photo, skupro-shots × 3, 4 portfolio items, 4 timeline entries, 3 contact links)
- ✅ **Lint clean**: 0 issues on new files; 0 runtime console errors

## Buttons / CTAs (all verified)
| Button | Location | Destination |
|---|---|---|
| View SKU.Pro ↗ | Nav (top right) | https://ecommerce-ai-pro-2.emergent.host/ |
| View SKU.Pro → | Hero | https://ecommerce-ai-pro-2.emergent.host/ |
| Contact Me | Hero | Contact page (internal) |
| Launch SKU.Pro → | SKU.Pro section | https://ecommerce-ai-pro-2.emergent.host/ |
| View Live Demo ↗ | SKU.Pro section | https://ecommerce-ai-pro-2.emergent.host/ |
| Read article ↗ | Portfolio #01 (CRED) | LinkedIn article |
| Try live tool ↗ | Portfolio #02 (Audit) | white-anni-53.tiiny.site |
| View dashboard ↗ | Portfolio #03 (Dashboard) | maroon-sadie-90.tiiny.site |
| Email / LinkedIn / Phone | Contact page | mailto / linkedin / tel |
| Send message → | Contact form | Opens mailto with pre-filled body |

## SEO
- `<title>`: *Jayasurya Atla — Catalog Ops Specialist & Creator of SKU.Pro*
- `<meta description>`: full, keyword-rich
- OG image + Twitter summary_large_image using headshot
- Schema.org `Person` (Jayasurya) + `SoftwareApplication` (SKU.Pro) JSON-LD blocks

## Test Credentials
None — no auth in system.

## Backlog
- **P2**: Add remaining SKU.Pro screenshots when available (Generate SKU, Generated Output, Analytics) — gallery is designed to accept more shots without layout changes
- **P2**: Replace testimonial avatar chips with real client photos when available
- **P3**: Add UTM tags to all SKU.Pro links for traffic attribution
