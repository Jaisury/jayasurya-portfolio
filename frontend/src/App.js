import { useEffect, useState } from "react";
import "@/App.css";

const SKU_PRO_URL = "https://ecommerce-ai-pro-2.emergent.host/";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [contactStatus, setContactStatus] = useState(null);

  const goTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [activePage]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("fname")?.value?.trim();
    const email = document.getElementById("femail")?.value?.trim();
    const company = document.getElementById("fcompany")?.value?.trim() || "";
    const message = document.getElementById("fmessage")?.value?.trim() || "";
    if (!name || !email) return;
    const subject = encodeURIComponent(`Portfolio inquiry — ${name}${company ? ` (${company})` : ""}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
    );
    window.location.href = `mailto:jayasurya210897@gmail.com?subject=${subject}&body=${body}`;
    setContactStatus("Opening your email client…");
  };

  return (
    <>
      {/* NAV */}
      <nav data-testid="main-nav">
        <div
          className="nav-logo"
          data-testid="nav-logo"
          onClick={() => goTo("home")}
        >
          jayasurya<span>.</span>
        </div>
        <div className="nav-links">
          <button
            data-testid="nav-home"
            className={`nav-link ${activePage === "home" ? "active" : ""}`}
            onClick={() => goTo("home")}
          >
            Home
          </button>
          <button
            data-testid="nav-portfolio"
            className={`nav-link ${activePage === "portfolio" ? "active" : ""}`}
            onClick={() => goTo("portfolio")}
          >
            Portfolio
          </button>
          <button
            data-testid="nav-about"
            className={`nav-link ${activePage === "about" ? "active" : ""}`}
            onClick={() => goTo("about")}
          >
            About
          </button>
          <button
            data-testid="nav-contact"
            className={`nav-link ${activePage === "contact" ? "active" : ""}`}
            onClick={() => goTo("contact")}
          >
            Contact
          </button>
          <a
            data-testid="nav-cta-skupro"
            className="nav-cta"
            href={SKU_PRO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View SKU.Pro ↗
          </a>
        </div>
      </nav>

      {/* HOME */}
      <div className={`page ${activePage === "home" ? "active" : ""}`} id="page-home">
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
              I'm Jayasurya Atla. I build catalog systems that work at scale — managing 25,000+ SKUs across 8 categories, reducing errors by 30%, improving conversion by 12%, and keeping product data clean across every channel.
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
                onClick={() => goTo("contact")}
              >
                Contact Me
              </button>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">25K+</div>
                <div className="hero-stat-label">SKUs at scale</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">30%</div>
                <div className="hero-stat-label">Error reduction</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">12%</div>
                <div className="hero-stat-label">Conversion lift</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">4+</div>
                <div className="hero-stat-label">Years exp.</div>
              </div>
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

        {/* SKU.PRO FEATURED SECTION */}
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
                  AI-powered PIM &amp; catalog operations platform — built by a catalog specialist, for catalog teams.
                </div>
                <p className="skupro-desc">
                  Turn 25,000+ messy SKUs into clean, channel-ready product data. SKU.Pro combines attribute taxonomy intelligence, feed health monitoring, and AI content enrichment into one operating system for e-commerce catalog teams.
                </p>
                <div className="skupro-features">
                  <div className="skupro-feature">
                    <span className="skupro-feature-icon">◆</span>
                    <div>
                      <div className="skupro-feature-title">AI Content Enrichment</div>
                      <div className="skupro-feature-desc">Titles, descriptions, attributes — generated with catalog-aware AI trained on real PIM workflows.</div>
                    </div>
                  </div>
                  <div className="skupro-feature">
                    <span className="skupro-feature-icon">◆</span>
                    <div>
                      <div className="skupro-feature-title">Feed Health Intelligence</div>
                      <div className="skupro-feature-desc">Real-time diagnostics across Shopify, GMC &amp; Etsy with revenue-at-risk scoring.</div>
                    </div>
                  </div>
                  <div className="skupro-feature">
                    <span className="skupro-feature-icon">◆</span>
                    <div>
                      <div className="skupro-feature-title">Attribute Taxonomy Engine</div>
                      <div className="skupro-feature-desc">Category-specific schemas for Beauty, Fashion, Health &amp; more — enforced automatically.</div>
                    </div>
                  </div>
                  <div className="skupro-feature">
                    <span className="skupro-feature-icon">◆</span>
                    <div>
                      <div className="skupro-feature-title">Audit &amp; Governance</div>
                      <div className="skupro-feature-desc">Quarterly-grade audits in minutes. SOPs, error tracking &amp; ownership baked in.</div>
                    </div>
                  </div>
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
                    data-testid="skupro-learn-btn"
                    className="btn-ghost"
                    href={SKU_PRO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See it in action ↗
                  </a>
                </div>
              </div>

              <div className="skupro-preview" data-testid="skupro-preview">
                <div className="skupro-preview-frame">
                  <div className="skupro-preview-topbar">
                    <span className="skupro-dot" style={{ background: "#e24b4a" }}></span>
                    <span className="skupro-dot" style={{ background: "#ef9f27" }}></span>
                    <span className="skupro-dot" style={{ background: "#1d9e75" }}></span>
                    <span className="skupro-preview-url">sku.pro / dashboard</span>
                  </div>
                  <div className="skupro-preview-body">
                    <div className="skupro-metric-row">
                      <div className="skupro-metric">
                        <div className="skupro-metric-label">Catalog Score</div>
                        <div className="skupro-metric-value">
                          94<span className="skupro-metric-unit">/100</span>
                        </div>
                        <div className="skupro-metric-delta up">↑ 12 pts this week</div>
                      </div>
                      <div className="skupro-metric">
                        <div className="skupro-metric-label">Revenue at Risk</div>
                        <div className="skupro-metric-value amber">
                          ₹42<span className="skupro-metric-unit">K</span>
                        </div>
                        <div className="skupro-metric-delta down">↓ 68% MoM</div>
                      </div>
                    </div>
                    <div className="skupro-chart-block">
                      <div className="skupro-chart-title">Feed Health · 30 days</div>
                      <div className="skupro-chart-bars">
                        {[35, 55, 42, 68, 60, 78, 72, 85, 80, 92, 88, 96].map((h, i) => (
                          <div
                            key={i}
                            className="skupro-bar"
                            style={{ height: `${h}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="skupro-ai-row">
                      <div className="skupro-ai-badge">AI</div>
                      <div className="skupro-ai-text">
                        <strong>317 titles</strong> optimized for GMC · <span className="teal-text">+8% CTR projected</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skupro-live-tag">
                  <span className="skupro-live-dot"></span> Live product · Try it now
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKED WITH */}
        <div className="worked-section">
          <div className="worked-label">Worked with</div>
          <div className="worked-row">
            <div className="worked-item"><div className="worked-dot"></div>CRED</div>
            <div className="worked-item"><div className="worked-dot"></div>Angad Creations</div>
            <div className="worked-item"><div className="worked-dot"></div>Glancia</div>
            <div className="worked-item"><div className="worked-dot"></div>The Souled Store</div>
            <div className="worked-item"><div className="worked-dot"></div>Akeneo</div>
            <div className="worked-item"><div className="worked-dot"></div>Shopify</div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...Array(2)].map((_, k) => (
              <span key={k} style={{ display: "contents" }}>
                <span className="marquee-item">SKU.Pro</span>
                <span className="marquee-item">AI Content Enrichment</span>
                <span className="marquee-item">Akeneo PIM</span>
                <span className="marquee-item">Shopify</span>
                <span className="marquee-item">Google Merchant Center</span>
                <span className="marquee-item">Etsy</span>
                <span className="marquee-item">Attribute Taxonomy</span>
                <span className="marquee-item">Variant Management</span>
                <span className="marquee-item">Feed Management</span>
                <span className="marquee-item">Data Governance</span>
                <span className="marquee-item">Beauty &amp; Personal Care</span>
                <span className="marquee-item">Catalog Audits</span>
                <span className="marquee-item">Content Enrichment</span>
                <span className="marquee-item">SOP Documentation</span>
              </span>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="testi-section">
          <div className="page-eyebrow fade-in">What people say</div>
          <div className="testi-grid fade-in">
            <div className="testi-card">
              <div className="testi-quote">
                Working with Jayasurya on our Shopify catalog was straightforward — he understood the attribute structure quickly, kept the feed clean across GMC and Etsy without needing direction, and delivered solid SOPs our team actually uses.
              </div>
              <div className="testi-author">
                <div className="testi-avatar">AC</div>
                <div>
                  <div className="testi-name">Angad Creations</div>
                  <div className="testi-title">Freelance Client · Dec 2025–Present</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-quote">
                Jayasurya demonstrates strong catalog thinking and genuine operational depth. The work is thorough, well-documented, and immediately usable — no fluff, just results. You can feel the experience managing SKUs at scale in every feature.
              </div>
              <div className="testi-author">
                <div className="testi-avatar">D</div>
                <div>
                  <div className="testi-name">Daniel</div>
                  <div className="testi-title">LinkedIn Connection · E-commerce &amp; Ops</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PORTFOLIO */}
      <div className={`page ${activePage === "portfolio" ? "active" : ""}`} id="page-portfolio">
        <div className="page-inner">
          <div className="page-eyebrow fade-in">Product Portfolio</div>
          <h1 className="page-title fade-in">Work that proves the thinking.</h1>
          <p className="portfolio-intro fade-in">
            A flagship AI product and three case studies solving real catalog problems — each showing Problem → Solution → Impact.
          </p>

          <div className="portfolio-grid fade-in">
            {/* 00: SKU.PRO — FLAGSHIP */}
            <a
              data-testid="portfolio-skupro"
              className="portfolio-item portfolio-flagship"
              href={SKU_PRO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="p-thumb"
                style={{
                  background:
                    "linear-gradient(135deg,#0a1a14 0%,#0f2d24 50%,#0a1f18 100%)",
                  color: "var(--teal-light)",
                }}
              >
                <span className="flagship-tag">FLAGSHIP</span>
                🚀 SKU.Pro · AI-Powered PIM Platform
              </div>
              <div className="p-body">
                <div className="p-meta">
                  <span className="p-number">00 · Featured</span>
                  <span className="p-type product">Live Product</span>
                </div>
                <div className="p-title">SKU.Pro — AI catalog operations, built by a catalog specialist</div>
                <div className="p-section">
                  <div className="p-section-label">Problem</div>
                  <div className="p-section-content">
                    Catalog teams juggle 25K+ SKUs across Shopify, GMC, Etsy and Akeneo — but no tool actually thinks like a catalog operator. Existing PIMs are storage, not intelligence.
                  </div>
                </div>
                <div className="p-section">
                  <div className="p-section-label">Solution</div>
                  <div className="p-section-content">
                    An AI-powered platform combining attribute taxonomy intelligence, feed health diagnostics, revenue-at-risk scoring, and AI content enrichment — designed around real catalog workflows, not hypothetical ones.
                  </div>
                </div>
                <div
                  className="p-section"
                  style={{
                    background: "var(--teal-dim)",
                    border: "0.5px solid rgba(29,158,117,0.2)",
                  }}
                >
                  <div className="p-section-label" style={{ color: "var(--teal)" }}>
                    Impact
                  </div>
                  <div className="p-section-content" style={{ color: "var(--teal-light)" }}>
                    Live · Multi-channel feed support · AI-native enrichment · Built for Beauty, Fashion &amp; D2C
                  </div>
                </div>
                <div className="p-tags">
                  <span className="p-tag">AI</span>
                  <span className="p-tag">PIM</span>
                  <span className="p-tag">Feed Health</span>
                  <span className="p-tag">SaaS</span>
                </div>
              </div>
              <div className="p-footer">
                <span className="p-link-text">Launch SKU.Pro ↗</span>
              </div>
            </a>

            {/* 01: CRED CASE STUDY */}
            <a
              data-testid="portfolio-cred"
              className="portfolio-item"
              href="https://www.linkedin.com/in/jayasuryaatla-8b573912a/recent-activity/all/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="p-thumb"
                style={{
                  background: "linear-gradient(135deg,#0f2d24 0%,#0a1f18 100%)",
                  color: "var(--teal-light)",
                }}
              >
                📝 CRED · 25,000+ SKU Case Study
              </div>
              <div className="p-body">
                <div className="p-meta">
                  <span className="p-number">01</span>
                  <span className="p-type article">LinkedIn Article</span>
                </div>
                <div className="p-title">How I Managed 25,000+ SKUs Across 8 Categories at CRED</div>
                <div className="p-section">
                  <div className="p-section-label">Problem</div>
                  <div className="p-section-content">
                    Weak catalog foundations quietly kill conversion at 25K+ SKUs. Small errors compound into expensive problems. No visibility into data quality across 8 completely different categories.
                  </div>
                </div>
                <div className="p-section">
                  <div className="p-section-label">Solution</div>
                  <div className="p-section-content">
                    Category-specific attribute taxonomy, quarterly audit cadence with error tracking, SEO-driven content enrichment for top-GMV SKUs, and SOPs that survived team changes at scale.
                  </div>
                </div>
                <div
                  className="p-section"
                  style={{
                    background: "var(--teal-dim)",
                    border: "0.5px solid rgba(29,158,117,0.2)",
                  }}
                >
                  <div className="p-section-label" style={{ color: "var(--teal)" }}>
                    Impact
                  </div>
                  <div className="p-section-content" style={{ color: "var(--teal-light)" }}>
                    30% error reduction · 12% conversion lift · 20+ hrs saved/week · 40% faster onboarding
                  </div>
                </div>
                <div className="p-tags">
                  <span className="p-tag">Taxonomy</span>
                  <span className="p-tag">Audit</span>
                  <span className="p-tag">SOP</span>
                  <span className="p-tag">Scale</span>
                </div>
              </div>
              <div className="p-footer">
                <span className="p-link-text">Read article ↗</span>
              </div>
            </a>

            {/* 02: AUDIT TOOL */}
            <a
              data-testid="portfolio-audit"
              className="portfolio-item"
              href="https://white-anni-53.tiiny.site/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="p-thumb"
                style={{
                  background: "linear-gradient(135deg,#1a1400 0%,#2a1f00 100%)",
                  color: "var(--amber)",
                }}
              >
                🔍 Catalog Health Audit Tool
              </div>
              <div className="p-body">
                <div className="p-meta">
                  <span className="p-number">02</span>
                  <span className="p-type tool">Interactive Tool</span>
                </div>
                <div className="p-title">Catalog Health Audit Tool</div>
                <div className="p-section">
                  <div className="p-section-label">Problem</div>
                  <div className="p-section-content">
                    Most D2C brands don't know their catalog is broken until it shows up in their return rate or ad spend. No quick, accessible way to diagnose where product data is actually failing.
                  </div>
                </div>
                <div className="p-section">
                  <div className="p-section-label">Solution</div>
                  <div className="p-section-content">
                    20 diagnostic questions across 4 audit areas. Live health score + prioritised fix list. No signup, no email, completely free. Expert guidance built from real audit experience.
                  </div>
                </div>
                <div
                  className="p-section"
                  style={{
                    background: "rgba(239,159,39,0.12)",
                    border: "0.5px solid rgba(239,159,39,0.2)",
                  }}
                >
                  <div className="p-section-label" style={{ color: "var(--amber)" }}>
                    Impact
                  </div>
                  <div className="p-section-content" style={{ color: "var(--amber)" }}>
                    4 min audit · 4 diagnostic dimensions · 100+ brands using · Free tool
                  </div>
                </div>
                <div className="p-tags">
                  <span className="p-tag">Data Quality</span>
                  <span className="p-tag">Feed Health</span>
                  <span className="p-tag">D2C</span>
                  <span className="p-tag">Free Tool</span>
                </div>
              </div>
              <div className="p-footer">
                <span className="p-link-text">Try live tool ↗</span>
              </div>
            </a>

            {/* 03: DASHBOARD */}
            <a
              data-testid="portfolio-dashboard"
              className="portfolio-item"
              href="https://maroon-sadie-90.tiiny.site/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="p-thumb"
                style={{
                  background: "linear-gradient(135deg,#1a0a0a 0%,#2a0f0f 100%)",
                  color: "#f47f7e",
                }}
              >
                📊 Catalog Governance Dashboard v1.0
              </div>
              <div className="p-body">
                <div className="p-meta">
                  <span className="p-number">03</span>
                  <span className="p-type dashboard">Dashboard</span>
                </div>
                <div className="p-title">Catalog Governance Dashboard v1.0</div>
                <div className="p-section">
                  <div className="p-section-label">Problem</div>
                  <div className="p-section-content">
                    Most ecommerce teams manage catalog in spreadsheets. No real-time visibility into data quality, feed health, revenue risk, or which fixes actually matter for the business.
                  </div>
                </div>
                <div className="p-section">
                  <div className="p-section-label">Solution</div>
                  <div className="p-section-content">
                    Enterprise-grade dashboard: catalog score, completeness tracking, feed health across GMC/Shopify/Etsy, AI recommendations, revenue-at-risk metrics, and today's priorities ranked by business impact.
                  </div>
                </div>
                <div
                  className="p-section"
                  style={{
                    background: "rgba(226,75,74,0.1)",
                    border: "0.5px solid rgba(226,75,74,0.2)",
                  }}
                >
                  <div className="p-section-label" style={{ color: "#f47f7e" }}>
                    Impact
                  </div>
                  <div className="p-section-content" style={{ color: "#f47f7e" }}>
                    5 tabs · 8 categories · Revenue risk in ₹ · Real-time simulated data
                  </div>
                </div>
                <div className="p-tags">
                  <span className="p-tag">PIM</span>
                  <span className="p-tag">Feed Health</span>
                  <span className="p-tag">GMC</span>
                  <span className="p-tag">AI Insights</span>
                </div>
              </div>
              <div className="p-footer">
                <span className="p-link-text">View dashboard ↗</span>
              </div>
            </a>
          </div>

          {/* TECH STACK */}
          <div className="divider"></div>
          <div className="page-eyebrow fade-in">Tech stack</div>
          <div className="tech-grid fade-in">
            <div className="tech-group">
              <div className="tech-group-label">PIM &amp; Catalog</div>
              <div className="tech-items">
                <span className="tech-item highlight">Akeneo PIM</span>
                <span className="tech-item highlight">Shopify</span>
                <span className="tech-item highlight">Google Merchant Center</span>
                <span className="tech-item">Etsy</span>
              </div>
            </div>
            <div className="tech-group">
              <div className="tech-group-label">AI &amp; Product</div>
              <div className="tech-items">
                <span className="tech-item highlight">SKU.Pro</span>
                <span className="tech-item highlight">LLM-driven Enrichment</span>
                <span className="tech-item">Prompt Design</span>
                <span className="tech-item">AI QA</span>
              </div>
            </div>
            <div className="tech-group">
              <div className="tech-group-label">Analytics &amp; Data</div>
              <div className="tech-items">
                <span className="tech-item highlight">Google Analytics</span>
                <span className="tech-item highlight">Shopify Analytics</span>
                <span className="tech-item">Notion</span>
                <span className="tech-item">Excel (Advanced)</span>
              </div>
            </div>
            <div className="tech-group">
              <div className="tech-group-label">Operations &amp; Process</div>
              <div className="tech-items">
                <span className="tech-item highlight">SOP Documentation</span>
                <span className="tech-item">Jira</span>
                <span className="tech-item">Salesforce</span>
                <span className="tech-item">Photoshop</span>
              </div>
            </div>
            <div className="tech-group">
              <div className="tech-group-label">Category Expertise</div>
              <div className="tech-items">
                <span className="tech-item highlight">Beauty &amp; Personal Care</span>
                <span className="tech-item highlight">Health &amp; Wellness</span>
                <span className="tech-item">Fashion &amp; Accessories</span>
                <span className="tech-item">Footwear &amp; Apparel</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className={`page ${activePage === "about" ? "active" : ""}`} id="page-about">
        <div className="page-inner">
          <div className="page-eyebrow fade-in">About</div>
          <h1 className="page-title fade-in">
            Catalog Ops Specialist.
            <br />
            Builder of AI products.
          </h1>
          <div className="about-grid">
            <div className="about-bio fade-in">
              <p>
                I'm a <strong>Catalog &amp; PIM Specialist</strong> with 4+ years of hands-on experience in product information management, attribute taxonomy design, and large-scale multi-category catalog operations — and I'm now building <strong>AI-powered products</strong> for the same problems I've operated inside.
              </p>
              <p>
                At <strong>CRED</strong> (2022–2024), I owned catalog operations across 25,000+ SKUs spanning 8 categories — reducing listing errors by 30%, improving conversion by 12% through content enrichment, and saving 20+ hours per week via workflow automation.
              </p>
              <p>
                I'm the creator and developer of <strong>SKU.Pro</strong> — my latest personal product. It's an AI-powered catalog assistant for e-commerce teams that generates marketplace-ready product content, SEO metadata, and structured catalog information — the tool I wish existed while managing catalog at scale.
              </p>
              <p>
                I currently consult for <strong>Angad Creations</strong> and <strong>Glancia</strong> — managing end-to-end catalog operations independently across Shopify, Etsy, and Google Merchant Center for both brands. My particular focus is <strong>beauty &amp; personal care</strong> — where ingredient attributes, shade variants, compliance fields, and formulation types create catalog complexity that directly impacts discoverability and conversion.
              </p>
            </div>
            <div className="fade-in">
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>
                    Core strengths
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--text2)",
                      lineHeight: 1.8,
                    }}
                  >
                    ✓ Building AI products for catalog ops
                    <br />
                    ✓ Attribute taxonomy design
                    <br />
                    ✓ Variant management at scale
                    <br />
                    ✓ Catalog QA &amp; audit methodology
                    <br />
                    ✓ Feed optimization (GMC, Shopify, Etsy)
                    <br />
                    ✓ Content enrichment &amp; SEO
                    <br />
                    ✓ SOP documentation &amp; training
                    <br />
                    ✓ Compliance field management (BPC)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>
          <div className="page-eyebrow fade-in">Experience</div>
          <div className="timeline fade-in">
            <div className="timeline-item">
              <div className="t-date">
                2025<br />Present
              </div>
              <div>
                <div className="t-role">Creator &amp; Developer — SKU.Pro</div>
                <div className="t-company">Independent Product</div>
                <div className="t-desc">
                  Designed and developed an AI-powered catalog assistant for e-commerce teams to generate marketplace-ready product content, SEO metadata, and structured catalog information.
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="t-date">
                Dec 2025<br />Present
              </div>
              <div>
                <div className="t-role">Freelance Catalog Consultant</div>
                <div className="t-company">Angad Creations &amp; Glancia</div>
                <div className="t-desc">
                  End-to-end catalog operations for a 10-store Indian retail brand and Canadian fashion label. Product onboarding, taxonomy design, feed management (zero GMC errors), and performance reporting across Shopify, Etsy, and Google Merchant Center.
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="t-date">
                Jul 2022<br />Jun 2024
              </div>
              <div>
                <div className="t-role">Catalog &amp; QA Specialist</div>
                <div className="t-company">CRED</div>
                <div className="t-desc">
                  Owned PIM and catalog operations across 25,000+ SKUs in 8 categories. Reduced listing errors by 30%, improved conversion by 12% via content enrichment, saved 20+ hours/week through workflow fixes, and trained 5+ new hires with SOPs that cut onboarding time by 40%.
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="t-date">
                Jun 2021<br />Jun 2022
              </div>
              <div>
                <div className="t-role">Product Specialist</div>
                <div className="t-company">Ather Space Visakhapatnam</div>
                <div className="t-desc">
                  Market research, competitor analysis, and product roadmap support. Feature launches and vendor partnerships contributed to 15% sales uplift within one year.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className={`page ${activePage === "contact" ? "active" : ""}`} id="page-contact">
        <div className="page-inner">
          <div className="page-eyebrow fade-in">Contact</div>
          <h1 className="page-title fade-in">Let's work together.</h1>
          <div className="contact-grid">
            <div className="fade-in">
              <div className="open-badge">
                <span className="open-dot"></span>Open to opportunities &amp; SKU.Pro pilots
              </div>
              <p className="contact-p">
                Looking for senior catalog, PIM, or e-commerce operations roles — and open to design partners for SKU.Pro. Particularly interested in beauty &amp; personal care, D2C brands, or platforms that take product data quality seriously.
              </p>
              <p className="contact-p">
                Based in Hyderabad. Open to relocating to Bangalore for the right opportunity. Available within 7 days of selection.
              </p>
              <div className="contact-links">
                <a
                  data-testid="contact-email"
                  className="contact-link"
                  href="mailto:jayasurya210897@gmail.com"
                >
                  <div
                    className="contact-link-icon"
                    style={{ background: "var(--teal-dim)", color: "var(--teal)" }}
                  >
                    ✉
                  </div>
                  <div>
                    <div className="contact-link-text">jayasurya210897@gmail.com</div>
                    <div className="contact-link-sub">Email · Best for opportunities</div>
                  </div>
                </a>
                <a
                  data-testid="contact-linkedin"
                  className="contact-link"
                  href="https://www.linkedin.com/in/jayasuryaatla-8b573912a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="contact-link-icon"
                    style={{ background: "rgba(24,95,165,0.15)", color: "#5aa5e6" }}
                  >
                    in
                  </div>
                  <div>
                    <div className="contact-link-text">linkedin.com/in/jayasuryaatla</div>
                    <div className="contact-link-sub">LinkedIn · Connect &amp; message</div>
                  </div>
                </a>
                <a
                  data-testid="contact-phone"
                  className="contact-link"
                  href="tel:+919640755587"
                >
                  <div
                    className="contact-link-icon"
                    style={{ background: "rgba(239,159,39,0.1)", color: "var(--amber)" }}
                  >
                    📞
                  </div>
                  <div>
                    <div className="contact-link-text">+91 96407 55587</div>
                    <div className="contact-link-sub">Phone · 10am–7pm IST</div>
                  </div>
                </a>
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text3)",
                  marginBottom: "0.5rem",
                }}
              >
                Target roles
              </div>
              <div className="role-list">
                <div className="role-item">Senior Catalog Manager / Lead</div>
                <div className="role-item">PIM Implementation Specialist</div>
                <div className="role-item">E-commerce Operations Manager</div>
                <div className="role-item">Category Manager — Beauty &amp; Personal Care</div>
                <div className="role-item">SKU.Pro Design Partner</div>
              </div>
            </div>
            <div className="fade-in">
              <form
                id="contactForm"
                data-testid="contact-form"
                onSubmit={handleContactSubmit}
              >
                <div className="form-group">
                  <label className="form-label">Your name *</label>
                  <input
                    className="form-input"
                    type="text"
                    id="fname"
                    data-testid="contact-name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    className="form-input"
                    type="email"
                    id="femail"
                    data-testid="contact-email-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Company / Brand</label>
                  <input
                    className="form-input"
                    type="text"
                    id="fcompany"
                    data-testid="contact-company"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-textarea"
                    id="fmessage"
                    data-testid="contact-message"
                    placeholder="Tell me about the role or opportunity..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  data-testid="contact-submit"
                  className="form-submit"
                >
                  Send message →
                </button>
                {contactStatus && (
                  <div
                    data-testid="contact-status"
                    style={{
                      textAlign: "center",
                      marginTop: "0.75rem",
                      fontSize: 12,
                      color: "var(--teal-light)",
                    }}
                  >
                    {contactStatus}
                  </div>
                )}
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "1rem",
                    fontSize: 11,
                    color: "var(--text3)",
                  }}
                >
                  Or email:{" "}
                  <a
                    href="mailto:jayasurya210897@gmail.com"
                    style={{ color: "var(--teal)" }}
                  >
                    jayasurya210897@gmail.com
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-content">
          © 2026 Jayasurya Atla
          <span className="footer-divider">·</span>
          Catalog &amp; PIM Specialist
          <span className="footer-divider">·</span>
          Creator of{" "}
          <a
            href={SKU_PRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--teal)", textDecoration: "none" }}
          >
            SKU.Pro ↗
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
