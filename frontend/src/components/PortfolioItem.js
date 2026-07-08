/**
 * Style tokens for the three accent variants used by portfolio thumbnails
 * and their impact sections. Keeps color logic out of JSX.
 */
const ACCENT_STYLES = {
  teal: {
    thumbBg: "linear-gradient(135deg,#0f2d24 0%,#0a1f18 100%)",
    thumbColor: "var(--teal-light)",
    impactBg: "var(--teal-dim)",
    impactBorder: "0.5px solid rgba(29,158,117,0.2)",
    impactLabelColor: "var(--teal)",
    impactContentColor: "var(--teal-light)",
  },
  amber: {
    thumbBg: "linear-gradient(135deg,#1a1400 0%,#2a1f00 100%)",
    thumbColor: "var(--amber)",
    impactBg: "rgba(239,159,39,0.12)",
    impactBorder: "0.5px solid rgba(239,159,39,0.2)",
    impactLabelColor: "var(--amber)",
    impactContentColor: "var(--amber)",
  },
  red: {
    thumbBg: "linear-gradient(135deg,#1a0a0a 0%,#2a0f0f 100%)",
    thumbColor: "#f47f7e",
    impactBg: "rgba(226,75,74,0.1)",
    impactBorder: "0.5px solid rgba(226,75,74,0.2)",
    impactLabelColor: "#f47f7e",
    impactContentColor: "#f47f7e",
  },
};

/** Distinctive gradient used only for the flagship SKU.Pro thumbnail. */
const FLAGSHIP_THUMB_BG =
  "linear-gradient(135deg,#0a1a14 0%,#0f2d24 50%,#0a1f18 100%)";

/**
 * Renders a Problem / Solution section.
 *
 * @param {{ label: string, content: string }} props
 */
function StandardSection({ label, content }) {
  return (
    <div className="p-section">
      <div className="p-section-label">{label}</div>
      <div className="p-section-content">{content}</div>
    </div>
  );
}

/**
 * Renders the accent-colored Impact section.
 *
 * @param {{ content: string, accent: 'teal' | 'amber' | 'red' }} props
 */
function ImpactSection({ content, accent }) {
  const styles = ACCENT_STYLES[accent];
  return (
    <div
      className="p-section"
      style={{ background: styles.impactBg, border: styles.impactBorder }}
    >
      <div className="p-section-label" style={{ color: styles.impactLabelColor }}>
        Impact
      </div>
      <div className="p-section-content" style={{ color: styles.impactContentColor }}>
        {content}
      </div>
    </div>
  );
}

/**
 * Maps a PortfolioSection descriptor to the correct rendered sub-component.
 *
 * @param {{ section: import('@/constants/portfolioData').PortfolioSection, accent: 'teal' | 'amber' | 'red' }} props
 */
function SectionRow({ section, accent }) {
  if (section.kind === "impact") {
    return <ImpactSection content={section.content} accent={accent} />;
  }
  const label = section.kind === "problem" ? "Problem" : "Solution";
  return <StandardSection label={label} content={section.content} />;
}

/**
 * Renders one portfolio card (link + thumb + body + tags + footer).
 *
 * @param {{ item: import('@/constants/portfolioData').PortfolioItem }} props
 */
function PortfolioItem({ item }) {
  const styles = ACCENT_STYLES[item.accent];
  const thumbBg = item.flagship ? FLAGSHIP_THUMB_BG : styles.thumbBg;
  const className = `portfolio-item${item.flagship ? " portfolio-flagship" : ""}`;

  return (
    <a
      data-testid={item.testId}
      className={className}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="p-thumb"
        style={{ background: thumbBg, color: styles.thumbColor }}
      >
        {item.flagship && <span className="flagship-tag">FLAGSHIP</span>}
        {item.thumbText}
      </div>
      <div className="p-body">
        <div className="p-meta">
          <span className="p-number">{item.number}</span>
          <span className={`p-type ${item.type}`}>{item.typeLabel}</span>
        </div>
        <div className="p-title">{item.title}</div>
        {item.sections.map((section) => (
          <SectionRow
            key={`${item.key}-${section.kind}`}
            section={section}
            accent={item.accent}
          />
        ))}
        <div className="p-tags">
          {item.tags.map((tag) => (
            <span key={tag.key} className="p-tag">
              {tag.label}
            </span>
          ))}
        </div>
      </div>
      <div className="p-footer">
        <span className="p-link-text">{item.footerText}</span>
      </div>
    </a>
  );
}

export default PortfolioItem;
