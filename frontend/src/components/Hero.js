import { SKU_PRO_URL, HERO_STATS } from "@/constants/portfolioData";

/**
 * Hero section: eyebrow, creator badge, headline, sub-copy, AI tagline,
 * two CTAs, stats grid and the circular headshot.
 *
 * @param {{ onContactClick: () => void }} props
 */
function Hero({ onContactClick }) {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">
          E-commerce Catalog Ops · Builds AI Products
        </div>

        <div className="creator-badge" data-testid="creator-badge">
          <span className="creator-rocket" aria-hidden="true">🚀</span>
          <span>Creator of SKU.Pro</span>
          <span className="creator-live-dot" aria-hidden="true"></span>
          <span className="creator-live-text">Live</span>
        </div>

        <h1 className="hero-headline">
          Helping ecommerce
          <br />
          brands turn <span className="accent">messy data</span>
          <br />
          <span className="dim">into scalable revenue.</span>
        </h1>

        <p className="hero-sub" data-testid="hero-sub">
          I&apos;m Jayasurya Atla. I build catalog systems that work at scale — managing 25,000+ SKUs across 8 categories, reducing errors by 30%, improving conversion by 12%, and keeping product data clean across every channel.
        </p>

        <p className="hero-ai-line" data-testid="hero-ai-line">
          I build <span className="ai-emph">AI-powered solutions</span> for Catalog Operations, Product Information Management (PIM), and E-commerce.
        </p>

        <div className="hero-actions">
          <a
            data-testid="hero-cta-skupro"
            className="btn-primary"
            href={SKU_PRO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View SKU.Pro →
          </a>
          <button
            data-testid="hero-cta-contact"
            className="btn-ghost"
            onClick={onContactClick}
          >
            Contact Me
          </button>
        </div>

        <div className="hero-stats">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <div className="hero-stat-num">{stat.num}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-photo-wrap">
        <img
          src="/headshot.jpeg"
          alt="Jayasurya Atla — Creator of SKU.Pro"
          className="hero-photo"
          data-testid="hero-photo"
          loading="eager"
        />
        <div className="hero-photo-ring"></div>
      </div>
    </div>
  );
}

export default Hero;
