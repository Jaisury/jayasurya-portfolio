# PRD — Jayasurya Atla Premium Product Portfolio

## Original Problem Statement
Upgrade existing GitHub Pages portfolio (https://jaisury.github.io/jayasurya_portfolio_index.html/) into a **Premium Product Portfolio** positioning Jayasurya as an *E-commerce Catalog Operations Specialist who also builds AI-powered products*.

**Hard constraints from user:**
- DO NOT redesign from scratch
- DO NOT change personal branding
- DO NOT remove existing sections
- Keep existing design language

## Architecture
- **Stack**: React 19 SPA (single-page multi-view)
- **Design**: Preserved original dark theme (`--black:#0a0a09`, `--teal:#1d9e75`, `--amber:#ef9f27`, etc.), noise texture, marquee, spinning photo ring
- **Nav**: In-app page switching (Home / Portfolio / About / Contact) + external "View SKU.Pro" CTA
- **No backend endpoints added** — purely static content

## User Personas
1. **Hiring managers** at D2C / beauty brands looking for catalog leads
2. **Founders / product teams** evaluating SKU.Pro as a potential PIM tool
3. **LinkedIn network** — recruiters & peers verifying credibility

## Core Requirements (Static)
- Preserve every original section
- Add "🚀 Creator of SKU.Pro" badge in hero (LIVE indicator)
- Add tagline: *"I build AI-powered solutions for Catalog Operations, PIM, and E-commerce."*
- Two hero CTAs: **View SKU.Pro** (→ https://ecommerce-ai-pro-2.emergent.host/) and **Contact Me**
- New flagship SKU.Pro section on Home
- SKU.Pro as `00 · Featured` in Portfolio grid
- About/Timeline updated to reflect AI product-building

## Implemented (Jan 2026)
- ✅ Hero improved (typography, spacing, Creator badge with LIVE pulse, AI-powered tagline block)
- ✅ CTAs updated (View SKU.Pro external link + Contact Me → Contact page)
- ✅ New SKU.Pro flagship section with feature list + animated dashboard preview (metrics, chart bars, AI badge)
- ✅ Portfolio flagship card (00 · SKU.Pro) added above CRED case study
- ✅ About page bio + timeline updated with "Creator · SKU.Pro" entry
- ✅ Contact page updated: "Open to opportunities & SKU.Pro pilots", added SKU.Pro Design Partner role
- ✅ Nav bar CTA: "View SKU.Pro ↗"
- ✅ Marquee updated to include SKU.Pro & AI Content Enrichment
- ✅ Tech stack: added "AI & Product" group (SKU.Pro, LLM-driven Enrichment, Prompt Design, AI QA)
- ✅ Footer updated: "Creator of SKU.Pro ↗"
- ✅ Data-testids on all interactive elements
- ✅ Preserved all original sections, colors, marquee animation, testimonials, worked-with, tech stack

## What's NOT Implemented
- Contact form uses `mailto:` (no backend). Submissions open user's email client with pre-filled body — no server storage
- Hero photo uses a placeholder ("JA" avatar). User did not supply a photo; the original portfolio's base64 photo was not preserved to keep the JS bundle lean

## Backlog / Next Actions
- **P1**: Replace hero placeholder with user's real headshot (user needs to provide)
- **P1**: Backend contact form (FastAPI endpoint + MongoDB storage) if user prefers not to rely on mailto
- **P2**: Add real SKU.Pro screenshots (currently uses a UI mock of dashboard)
- **P2**: Add scroll-based analytics / view counts for SKU.Pro CTA
- **P2**: Blog / case-study individual pages for deeper reads

## Test Credentials
None — no auth introduced.
