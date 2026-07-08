import { CORE_STRENGTHS, TIMELINE } from "@/constants/portfolioData";

/** Static inline styles for the "Core strengths" panel. */
const STRENGTHS_WRAPPER_STYLE = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};
const STRENGTHS_INNER_STYLE = {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
};
const STRENGTHS_TITLE_STYLE = {
  fontSize: 13,
  fontWeight: 600,
  color: "var(--text)",
};
const STRENGTHS_LIST_STYLE = {
  fontSize: 12,
  color: "var(--text2)",
  lineHeight: 1.8,
};

/** Renders the four About-page bio paragraphs. */
function AboutBio() {
  return (
    <div className="about-bio fade-in">
      <p>
        I&apos;m a <strong>Catalog &amp; PIM Specialist</strong> with 4+ years of hands-on experience in product information management, attribute taxonomy design, and large-scale multi-category catalog operations — and I&apos;m now building <strong>AI-powered products</strong> for the same problems I&apos;ve operated inside.
      </p>
      <p>
        At <strong>CRED</strong> (2022–2024), I owned catalog operations across 25,000+ SKUs spanning 8 categories — reducing listing errors by 30%, improving conversion by 12% through content enrichment, and saving 20+ hours per week via workflow automation.
      </p>
      <p>
        I&apos;m the creator and developer of <strong>SKU.Pro</strong> — my latest personal product. It&apos;s an AI-powered catalog assistant for e-commerce teams that generates marketplace-ready product content, SEO metadata, and structured catalog information — the tool I wish existed while managing catalog at scale.
      </p>
      <p>
        I currently consult for <strong>Angad Creations</strong> and <strong>Glancia</strong> — managing end-to-end catalog operations independently across Shopify, Etsy, and Google Merchant Center for both brands. My particular focus is <strong>beauty &amp; personal care</strong> — where ingredient attributes, shade variants, compliance fields, and formulation types create catalog complexity that directly impacts discoverability and conversion.
      </p>
    </div>
  );
}

/** Renders the right-hand "Core strengths" checklist panel. */
function CoreStrengths() {
  return (
    <div className="fade-in">
      <div style={STRENGTHS_WRAPPER_STYLE}>
        <div style={STRENGTHS_INNER_STYLE}>
          <div style={STRENGTHS_TITLE_STYLE}>Core strengths</div>
          <div style={STRENGTHS_LIST_STYLE}>
            {CORE_STRENGTHS.map((strength, index) => (
              <span key={strength}>
                ✓ {strength}
                {index < CORE_STRENGTHS.length - 1 && <br />}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Renders one entry in the experience timeline.
 *
 * @param {{ entry: import('@/constants/portfolioData').TimelineEntry }} props
 */
function TimelineRow({ entry }) {
  return (
    <div className="timeline-item">
      <div className="t-date">
        {entry.dateFrom}
        <br />
        {entry.dateTo}
      </div>
      <div>
        <div className="t-role">{entry.role}</div>
        <div className="t-company">{entry.company}</div>
        <div className="t-desc">{entry.description}</div>
      </div>
    </div>
  );
}

/**
 * About route: bio grid + core strengths panel + experience timeline.
 *
 * @param {{ active: boolean }} props
 */
function AboutPage({ active }) {
  return (
    <div className={`page ${active ? "active" : ""}`} id="page-about">
      <div className="page-inner">
        <div className="page-eyebrow fade-in">About</div>
        <h1 className="page-title fade-in">
          Catalog Ops Specialist.
          <br />
          Builder of AI products.
        </h1>
        <div className="about-grid">
          <AboutBio />
          <CoreStrengths />
        </div>

        <div className="divider"></div>
        <div className="page-eyebrow fade-in">Experience</div>
        <div className="timeline fade-in">
          {TIMELINE.map((entry) => (
            <TimelineRow key={entry.key} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
