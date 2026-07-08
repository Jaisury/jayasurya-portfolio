import {
  SKU_PRO_URL,
  SKU_PRO_FEATURES,
  SKU_PRO_SHOTS,
} from "@/constants/portfolioData";

/**
 * Renders a single feature row within the SKU.Pro section.
 *
 * @param {{ title: string, description: string }} props
 */
function SkuProFeatureRow({ title, description }) {
  return (
    <div className="skupro-feature">
      <span className="skupro-feature-icon">◆</span>
      <div>
        <div className="skupro-feature-title">{title}</div>
        <div className="skupro-feature-desc">{description}</div>
      </div>
    </div>
  );
}

/**
 * Renders a single clickable screenshot inside the SKU.Pro gallery.
 *
 * @param {import('@/constants/portfolioData').SkuProShot} props
 */
function SkuProShot({ src, alt, label, testId, ariaLabel, hero }) {
  const className = `skupro-shot${hero ? " skupro-shot-hero" : ""}`;
  return (
    <a
      href={SKU_PRO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-testid={testId}
      aria-label={ariaLabel}
    >
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      <span className="skupro-shot-label">{label}</span>
    </a>
  );
}

/**
 * SKU.Pro flagship section shown on the Home page.
 * Contains a copy/features column and a live-screenshot gallery column.
 */
function SkuProSection() {
  return (
    <section className="skupro-section fade-in" data-testid="skupro-section">
      <div className="skupro-inner">
        <div className="skupro-eyebrow">
          <span className="skupro-rocket">🚀</span>
          Flagship Product · AI × Catalog Ops
        </div>
        <div className="skupro-grid">
          <div>
            <h2 className="skupro-title">
              SKU.<span className="skupro-title-accent">Pro</span>
            </h2>
            <div className="skupro-tagline">
              AI-powered catalog assistant — write marketplace-optimized titles, descriptions, bullets and keywords for Amazon, Shopify, Flipkart, Meesho and 6 more, in one click.
            </div>
            <p className="skupro-desc">
              Turn messy product data into clean, channel-ready SKUs. SKU.Pro combines AI content generation, marketplace-specific optimization, quality scoring, and generation history into one operating system for e-commerce catalog teams.
            </p>
            <div className="skupro-features">
              {SKU_PRO_FEATURES.map((feature) => (
                <SkuProFeatureRow
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            <div className="skupro-actions">
              <a
                data-testid="skupro-launch-btn"
                className="btn-primary"
                href={SKU_PRO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch SKU.Pro →
              </a>
              <a
                data-testid="skupro-demo-btn"
                className="btn-ghost"
                href={SKU_PRO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Demo ↗
              </a>
            </div>
          </div>

          <div className="skupro-preview" data-testid="skupro-preview">
            <div className="skupro-gallery">
              {SKU_PRO_SHOTS.map((shot) => (
                <SkuProShot key={shot.key} {...shot} />
              ))}
            </div>
            <div className="skupro-live-tag">
              <span className="skupro-live-dot"></span> Live product · Try it now
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkuProSection;
