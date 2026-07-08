import { WORKED_WITH, MARQUEE_TAGS, TESTIMONIALS } from "@/constants/portfolioData";

/** Renders the "Worked with" label + logo row. */
function WorkedWith() {
  return (
    <div className="worked-section">
      <div className="worked-label">Worked with</div>
      <div className="worked-row">
        {WORKED_WITH.map((item) => (
          <div key={item.name} className="worked-item">
            <div className="worked-dot"></div>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Renders the infinite-scroll marquee. The tag list is doubled so the CSS
 * translateX(-50%) loop appears seamless. Both copies use stable, unique
 * keys derived from the tag name and copy index.
 */
function Marquee() {
  const copies = ["a", "b"];
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {copies.map((copyId) =>
          MARQUEE_TAGS.map((tag) => (
            <span key={`${copyId}-${tag}`} className="marquee-item">
              {tag}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

/** Renders a single testimonial card. */
function TestimonialCard({ quote, initials, name, title }) {
  return (
    <div className="testi-card">
      <div className="testi-quote">{quote}</div>
      <div className="testi-author">
        <div className="testi-avatar">{initials}</div>
        <div>
          <div className="testi-name">{name}</div>
          <div className="testi-title">{title}</div>
        </div>
      </div>
    </div>
  );
}

/** Renders the "What people say" testimonial grid. */
function Testimonials() {
  return (
    <div className="testi-section">
      <div className="page-eyebrow fade-in">What people say</div>
      <div className="testi-grid fade-in">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.key} {...t} />
        ))}
      </div>
    </div>
  );
}

/**
 * Small wrapper that groups the three below-hero home page blocks together
 * so `HomePage` stays readable.
 */
function HomeExtras() {
  return (
    <>
      <WorkedWith />
      <Marquee />
      <Testimonials />
    </>
  );
}

export default HomeExtras;
