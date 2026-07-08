import { SKU_PRO_URL } from "@/constants/portfolioData";

const SKUPRO_LINK_STYLE = { color: "var(--teal)", textDecoration: "none" };

/** Site footer with attribution + a lightweight SKU.Pro link. */
function Footer() {
  return (
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
          style={SKUPRO_LINK_STYLE}
        >
          SKU.Pro ↗
        </a>
      </div>
    </footer>
  );
}

export default Footer;
