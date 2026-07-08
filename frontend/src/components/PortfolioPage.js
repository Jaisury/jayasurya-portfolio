import PortfolioItem from "@/components/PortfolioItem";
import { PORTFOLIO_ITEMS, TECH_GROUPS } from "@/constants/portfolioData";

/**
 * Renders a single tech-stack column.
 *
 * @param {{ group: import('@/constants/portfolioData').TechGroup }} props
 */
function TechGroupCard({ group }) {
  return (
    <div className="tech-group">
      <div className="tech-group-label">{group.label}</div>
      <div className="tech-items">
        {group.items.map((item) => (
          <span
            key={item.key}
            className={`tech-item${item.highlight ? " highlight" : ""}`}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Portfolio route: intro copy, portfolio grid, and the tech-stack grid.
 *
 * @param {{ active: boolean }} props
 */
function PortfolioPage({ active }) {
  return (
    <div className={`page ${active ? "active" : ""}`} id="page-portfolio">
      <div className="page-inner">
        <div className="page-eyebrow fade-in">Product Portfolio</div>
        <h1 className="page-title fade-in">Work that proves the thinking.</h1>
        <p className="portfolio-intro fade-in">
          A flagship AI product and three case studies solving real catalog problems — each showing Problem → Solution → Impact.
        </p>

        <div className="portfolio-grid fade-in">
          {PORTFOLIO_ITEMS.map((item) => (
            <PortfolioItem key={item.key} item={item} />
          ))}
        </div>

        <div className="divider"></div>
        <div className="page-eyebrow fade-in">Tech stack</div>
        <div className="tech-grid fade-in">
          {TECH_GROUPS.map((group) => (
            <TechGroupCard key={group.key} group={group} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
