/**
 * Static data for the portfolio site.
 * Kept in a single module so that content edits don't require touching component code.
 *
 * @typedef {Object} StatItem
 * @property {string} num
 * @property {string} label
 *
 * @typedef {Object} WorkedWithItem
 * @property {string} name
 *
 * @typedef {Object} SkuProFeature
 * @property {string} title
 * @property {string} description
 *
 * @typedef {Object} SkuProShot
 * @property {string} key
 * @property {string} src
 * @property {string} alt
 * @property {string} label
 * @property {string} testId
 * @property {string} ariaLabel
 * @property {boolean} [hero]
 *
 * @typedef {Object} Testimonial
 * @property {string} key
 * @property {string} quote
 * @property {string} initials
 * @property {string} name
 * @property {string} title
 *
 * @typedef {Object} PortfolioTag
 * @property {string} key
 * @property {string} label
 *
 * @typedef {Object} PortfolioSection
 * @property {'problem' | 'solution' | 'impact'} kind
 * @property {string} content
 *
 * @typedef {'article' | 'tool' | 'dashboard' | 'product'} PortfolioType
 *
 * @typedef {Object} PortfolioItem
 * @property {string} key
 * @property {string} testId
 * @property {string} href
 * @property {string} number
 * @property {PortfolioType} type
 * @property {string} typeLabel
 * @property {string} thumbText
 * @property {'teal' | 'amber' | 'red'} accent
 * @property {boolean} [flagship]
 * @property {string} title
 * @property {PortfolioSection[]} sections
 * @property {PortfolioTag[]} tags
 * @property {string} footerText
 *
 * @typedef {Object} TechGroup
 * @property {string} key
 * @property {string} label
 * @property {Array<{key: string, label: string, highlight?: boolean}>} items
 *
 * @typedef {Object} TimelineEntry
 * @property {string} key
 * @property {string} dateFrom
 * @property {string} dateTo
 * @property {string} role
 * @property {string} company
 * @property {string} description
 *
 * @typedef {Object} ContactLink
 * @property {string} key
 * @property {string} testId
 * @property {string} href
 * @property {string} iconSymbol
 * @property {string} iconBg
 * @property {string} iconColor
 * @property {string} label
 * @property {string} sub
 * @property {boolean} [external]
 */

/** External URL for the SKU.Pro flagship product. */
export const SKU_PRO_URL = "https://ecommerce-ai-pro-2.emergent.host/";

/** Primary email address (used in mailto links & contact card). */
export const CONTACT_EMAIL = "jayasurya210897@gmail.com";

/** LinkedIn profile URL. */
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/jayasuryaatla-8b573912a";

/** @type {StatItem[]} */
export const HERO_STATS = [
  { num: "25K+", label: "SKUs at scale" },
  { num: "30%", label: "Error reduction" },
  { num: "12%", label: "Conversion lift" },
  { num: "4+", label: "Years exp." },
];

/** @type {WorkedWithItem[]} */
export const WORKED_WITH = [
  { name: "CRED" },
  { name: "Angad Creations" },
  { name: "Glancia" },
  { name: "The Souled Store" },
  { name: "Akeneo" },
  { name: "Shopify" },
];

/** @type {string[]} Distinct tags shown in the scrolling marquee. */
export const MARQUEE_TAGS = [
  "SKU.Pro",
  "AI Content Enrichment",
  "Akeneo PIM",
  "Shopify",
  "Google Merchant Center",
  "Etsy",
  "Attribute Taxonomy",
  "Variant Management",
  "Feed Management",
  "Data Governance",
  "Beauty & Personal Care",
  "Catalog Audits",
  "Content Enrichment",
  "SOP Documentation",
];

/** @type {SkuProFeature[]} */
export const SKU_PRO_FEATURES = [
  {
    title: "Marketplace-optimized output",
    description:
      "Titles, descriptions, bullets & keywords tuned for Amazon, Shopify, Flipkart, Meesho and 6 more channels.",
  },
  {
    title: "Quality score you can trust",
    description:
      "Every generated SKU gets a health score so you know exactly what's ready to ship.",
  },
  {
    title: "Bulk upload & templates",
    description:
      "Process 10,000 SKUs before lunch. Reusable templates for repeat categories.",
  },
  {
    title: "Searchable history",
    description:
      "Review, copy, export or re-run every SKU you've ever generated. Nothing lost.",
  },
];

/** @type {SkuProShot[]} */
export const SKU_PRO_SHOTS = [
  {
    key: "landing",
    src: "/skupro/landing.png",
    alt: "SKU.Pro landing page — Ship 10,000 catalog SKUs before lunch",
    label: "Landing",
    testId: "skupro-shot-landing",
    ariaLabel: "View SKU.Pro landing page",
    hero: true,
  },
  {
    key: "dashboard",
    src: "/skupro/dashboard.png",
    alt: "SKU.Pro dashboard — catalog overview and metrics",
    label: "Dashboard",
    testId: "skupro-shot-dashboard",
    ariaLabel: "View SKU.Pro dashboard",
  },
  {
    key: "history",
    src: "/skupro/history.png",
    alt: "SKU.Pro generation history — searchable, exportable SKU records",
    label: "History",
    testId: "skupro-shot-history",
    ariaLabel: "View SKU.Pro generation history",
  },
];

/** @type {Testimonial[]} */
export const TESTIMONIALS = [
  {
    key: "angad",
    quote:
      "Working with Jayasurya on our Shopify catalog was straightforward — he understood the attribute structure quickly, kept the feed clean across GMC and Etsy without needing direction, and delivered solid SOPs our team actually uses.",
    initials: "AC",
    name: "Angad Creations",
    title: "Freelance Client · Dec 2025–Present",
  },
  {
    key: "daniel",
    quote:
      "Jayasurya demonstrates strong catalog thinking and genuine operational depth. The work is thorough, well-documented, and immediately usable — no fluff, just results. You can feel the experience managing SKUs at scale in every feature.",
    initials: "D",
    name: "Daniel",
    title: "LinkedIn Connection · E-commerce & Ops",
  },
];

/** @type {PortfolioItem[]} */
export const PORTFOLIO_ITEMS = [
  {
    key: "skupro",
    testId: "portfolio-skupro",
    href: SKU_PRO_URL,
    number: "00 · Featured",
    type: "product",
    typeLabel: "Live Product",
    thumbText: "🚀 SKU.Pro · Ship 10,000 SKUs before lunch",
    accent: "teal",
    flagship: true,
    title: "SKU.Pro — Ship 10,000 catalog SKUs before lunch",
    sections: [
      {
        kind: "problem",
        content:
          "E-commerce teams spend hours writing marketplace-optimized titles, descriptions and keywords for every SKU across Amazon, Shopify, Flipkart & more — and there's no fast, reliable way to do it at scale.",
      },
      {
        kind: "solution",
        content:
          "An AI catalog assistant powered by Claude Sonnet 4.5 that generates marketplace-ready content in one click. Titles, descriptions, bullets, keywords — with a quality score you can trust, bulk upload, templates and searchable history.",
      },
      {
        kind: "impact",
        content:
          "Live · 10 marketplaces supported · 100 free credits · No card required",
      },
    ],
    tags: [
      { key: "ai", label: "AI" },
      { key: "catalog", label: "Catalog" },
      { key: "marketplace", label: "Marketplace" },
      { key: "saas", label: "SaaS" },
    ],
    footerText: "Launch SKU.Pro ↗",
  },
  {
    key: "cred",
    testId: "portfolio-cred",
    href: "https://www.linkedin.com/in/jayasuryaatla-8b573912a/recent-activity/all/",
    number: "01",
    type: "article",
    typeLabel: "LinkedIn Article",
    thumbText: "📝 CRED · 25,000+ SKU Case Study",
    accent: "teal",
    title: "How I Managed 25,000+ SKUs Across 8 Categories at CRED",
    sections: [
      {
        kind: "problem",
        content:
          "Weak catalog foundations quietly kill conversion at 25K+ SKUs. Small errors compound into expensive problems. No visibility into data quality across 8 completely different categories.",
      },
      {
        kind: "solution",
        content:
          "Category-specific attribute taxonomy, quarterly audit cadence with error tracking, SEO-driven content enrichment for top-GMV SKUs, and SOPs that survived team changes at scale.",
      },
      {
        kind: "impact",
        content:
          "30% error reduction · 12% conversion lift · 20+ hrs saved/week · 40% faster onboarding",
      },
    ],
    tags: [
      { key: "taxonomy", label: "Taxonomy" },
      { key: "audit", label: "Audit" },
      { key: "sop", label: "SOP" },
      { key: "scale", label: "Scale" },
    ],
    footerText: "Read article ↗",
  },
  {
    key: "audit",
    testId: "portfolio-audit",
    href: "https://white-anni-53.tiiny.site/",
    number: "02",
    type: "tool",
    typeLabel: "Interactive Tool",
    thumbText: "🔍 Catalog Health Audit Tool",
    accent: "amber",
    title: "Catalog Health Audit Tool",
    sections: [
      {
        kind: "problem",
        content:
          "Most D2C brands don't know their catalog is broken until it shows up in their return rate or ad spend. No quick, accessible way to diagnose where product data is actually failing.",
      },
      {
        kind: "solution",
        content:
          "20 diagnostic questions across 4 audit areas. Live health score + prioritised fix list. No signup, no email, completely free. Expert guidance built from real audit experience.",
      },
      {
        kind: "impact",
        content:
          "4 min audit · 4 diagnostic dimensions · 100+ brands using · Free tool",
      },
    ],
    tags: [
      { key: "data-quality", label: "Data Quality" },
      { key: "feed-health", label: "Feed Health" },
      { key: "d2c", label: "D2C" },
      { key: "free", label: "Free Tool" },
    ],
    footerText: "Try live tool ↗",
  },
  {
    key: "dashboard",
    testId: "portfolio-dashboard",
    href: "https://maroon-sadie-90.tiiny.site/",
    number: "03",
    type: "dashboard",
    typeLabel: "Dashboard",
    thumbText: "📊 Catalog Governance Dashboard v1.0",
    accent: "red",
    title: "Catalog Governance Dashboard v1.0",
    sections: [
      {
        kind: "problem",
        content:
          "Most ecommerce teams manage catalog in spreadsheets. No real-time visibility into data quality, feed health, revenue risk, or which fixes actually matter for the business.",
      },
      {
        kind: "solution",
        content:
          "Enterprise-grade dashboard: catalog score, completeness tracking, feed health across GMC/Shopify/Etsy, AI recommendations, revenue-at-risk metrics, and today's priorities ranked by business impact.",
      },
      {
        kind: "impact",
        content:
          "5 tabs · 8 categories · Revenue risk in ₹ · Real-time simulated data",
      },
    ],
    tags: [
      { key: "pim", label: "PIM" },
      { key: "feed-health", label: "Feed Health" },
      { key: "gmc", label: "GMC" },
      { key: "ai-insights", label: "AI Insights" },
    ],
    footerText: "View dashboard ↗",
  },
];

/** @type {TechGroup[]} */
export const TECH_GROUPS = [
  {
    key: "pim",
    label: "PIM & Catalog",
    items: [
      { key: "akeneo", label: "Akeneo PIM", highlight: true },
      { key: "shopify", label: "Shopify", highlight: true },
      { key: "gmc", label: "Google Merchant Center", highlight: true },
      { key: "etsy", label: "Etsy" },
    ],
  },
  {
    key: "ai",
    label: "AI & Product",
    items: [
      { key: "skupro", label: "SKU.Pro", highlight: true },
      { key: "llm", label: "LLM-driven Enrichment", highlight: true },
      { key: "prompt", label: "Prompt Design" },
      { key: "aiqa", label: "AI QA" },
    ],
  },
  {
    key: "analytics",
    label: "Analytics & Data",
    items: [
      { key: "ga", label: "Google Analytics", highlight: true },
      { key: "shopify-analytics", label: "Shopify Analytics", highlight: true },
      { key: "notion", label: "Notion" },
      { key: "excel", label: "Excel (Advanced)" },
    ],
  },
  {
    key: "ops",
    label: "Operations & Process",
    items: [
      { key: "sop", label: "SOP Documentation", highlight: true },
      { key: "jira", label: "Jira" },
      { key: "sf", label: "Salesforce" },
      { key: "ps", label: "Photoshop" },
    ],
  },
  {
    key: "category",
    label: "Category Expertise",
    items: [
      { key: "bpc", label: "Beauty & Personal Care", highlight: true },
      { key: "hw", label: "Health & Wellness", highlight: true },
      { key: "fa", label: "Fashion & Accessories" },
      { key: "footwear", label: "Footwear & Apparel" },
    ],
  },
];

/** @type {string[]} */
export const CORE_STRENGTHS = [
  "Building AI products for catalog ops",
  "Attribute taxonomy design",
  "Variant management at scale",
  "Catalog QA & audit methodology",
  "Feed optimization (GMC, Shopify, Etsy)",
  "Content enrichment & SEO",
  "SOP documentation & training",
  "Compliance field management (BPC)",
];

/** @type {TimelineEntry[]} */
export const TIMELINE = [
  {
    key: "skupro",
    dateFrom: "2025",
    dateTo: "Present",
    role: "Creator & Developer — SKU.Pro",
    company: "Independent Product",
    description:
      "Designed and developed an AI-powered catalog assistant for e-commerce teams to generate marketplace-ready product content, SEO metadata, and structured catalog information.",
  },
  {
    key: "freelance",
    dateFrom: "Dec 2025",
    dateTo: "Present",
    role: "Freelance Catalog Consultant",
    company: "Angad Creations & Glancia",
    description:
      "End-to-end catalog operations for a 10-store Indian retail brand and Canadian fashion label. Product onboarding, taxonomy design, feed management (zero GMC errors), and performance reporting across Shopify, Etsy, and Google Merchant Center.",
  },
  {
    key: "cred",
    dateFrom: "Jul 2022",
    dateTo: "Jun 2024",
    role: "Catalog & QA Specialist",
    company: "CRED",
    description:
      "Owned PIM and catalog operations across 25,000+ SKUs in 8 categories. Reduced listing errors by 30%, improved conversion by 12% via content enrichment, saved 20+ hours/week through workflow fixes, and trained 5+ new hires with SOPs that cut onboarding time by 40%.",
  },
  {
    key: "ather",
    dateFrom: "Jun 2021",
    dateTo: "Jun 2022",
    role: "Product Specialist",
    company: "Ather Space Visakhapatnam",
    description:
      "Market research, competitor analysis, and product roadmap support. Feature launches and vendor partnerships contributed to 15% sales uplift within one year.",
  },
];

/** @type {ContactLink[]} */
export const CONTACT_LINKS = [
  {
    key: "email",
    testId: "contact-email",
    href: `mailto:${CONTACT_EMAIL}`,
    iconSymbol: "✉",
    iconBg: "var(--teal-dim)",
    iconColor: "var(--teal)",
    label: CONTACT_EMAIL,
    sub: "Email · Best for opportunities",
  },
  {
    key: "linkedin",
    testId: "contact-linkedin",
    href: LINKEDIN_URL,
    iconSymbol: "in",
    iconBg: "rgba(24,95,165,0.15)",
    iconColor: "#5aa5e6",
    label: "linkedin.com/in/jayasuryaatla",
    sub: "LinkedIn · Connect & message",
    external: true,
  },
  {
    key: "phone",
    testId: "contact-phone",
    href: "tel:+919640755587",
    iconSymbol: "📞",
    iconBg: "rgba(239,159,39,0.1)",
    iconColor: "var(--amber)",
    label: "+91 96407 55587",
    sub: "Phone · 10am–7pm IST",
  },
];

/** @type {string[]} */
export const TARGET_ROLES = [
  "Senior Catalog Manager / Lead",
  "PIM Implementation Specialist",
  "E-commerce Operations Manager",
  "Category Manager — Beauty & Personal Care",
  "SKU.Pro Design Partner",
];

/** @type {Array<{id: 'home' | 'portfolio' | 'about' | 'contact', label: string}>} */
export const NAV_PAGES = [
  { id: "home", label: "Home" },
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
