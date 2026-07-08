import { SKU_PRO_URL, NAV_PAGES } from "@/constants/portfolioData";

/**
 * Sticky top navigation. Uses in-app view switching (not React Router) to
 * preserve the original site's page-swap UX.
 *
 * @param {{ activePage: string, onNavigate: (page: string) => void }} props
 */
function Nav({ activePage, onNavigate }) {
  return (
    <nav data-testid="main-nav">
      <div
        className="nav-logo"
        data-testid="nav-logo"
        onClick={() => onNavigate("home")}
      >
        jayasurya<span>.</span>
      </div>
      <div className="nav-links">
        {NAV_PAGES.map((page) => (
          <button
            key={page.id}
            data-testid={`nav-${page.id}`}
            className={`nav-link ${activePage === page.id ? "active" : ""}`}
            onClick={() => onNavigate(page.id)}
          >
            {page.label}
          </button>
        ))}
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
  );
}

export default Nav;
