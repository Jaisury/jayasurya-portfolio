import { useCallback, useState } from "react";
import {
  CONTACT_EMAIL,
  CONTACT_LINKS,
  TARGET_ROLES,
} from "@/constants/portfolioData";

const TARGET_ROLES_HEADING_STYLE = {
  marginTop: "2rem",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--text3)",
  marginBottom: "0.5rem",
};
const CONTACT_STATUS_STYLE = {
  textAlign: "center",
  marginTop: "0.75rem",
  fontSize: 12,
  color: "var(--teal-light)",
};
const OR_EMAIL_STYLE = {
  textAlign: "center",
  marginTop: "1rem",
  fontSize: 11,
  color: "var(--text3)",
};

/**
 * Reads a trimmed value from a form input by id. Returns empty string when
 * the element or its value is missing.
 *
 * @param {string} id
 * @returns {string}
 */
function readTrimmedInput(id) {
  const el = /** @type {HTMLInputElement | HTMLTextAreaElement | null} */ (
    document.getElementById(id)
  );
  if (!el) return "";
  return typeof el.value === "string" ? el.value.trim() : "";
}

/**
 * Builds the mailto URL used to hand off a contact submission to the
 * visitor's email client.
 *
 * @param {{ name: string, email: string, company: string, message: string }} data
 * @returns {string}
 */
function buildMailtoUrl({ name, email, company, message }) {
  const companySuffix = company ? ` (${company})` : "";
  const subject = encodeURIComponent(`Portfolio inquiry — ${name}${companySuffix}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

/**
 * One contact link tile (email / linkedin / phone).
 *
 * @param {{ link: import('@/constants/portfolioData').ContactLink }} props
 */
function ContactLinkCard({ link }) {
  const externalProps = link.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a
      data-testid={link.testId}
      className="contact-link"
      href={link.href}
      {...externalProps}
    >
      <div
        className="contact-link-icon"
        style={{ background: link.iconBg, color: link.iconColor }}
      >
        {link.iconSymbol}
      </div>
      <div>
        <div className="contact-link-text">{link.label}</div>
        <div className="contact-link-sub">{link.sub}</div>
      </div>
    </a>
  );
}

/** Left column: badge, blurb, contact links and target roles. */
function ContactDetails() {
  return (
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
        {CONTACT_LINKS.map((link) => (
          <ContactLinkCard key={link.key} link={link} />
        ))}
      </div>
      <div style={TARGET_ROLES_HEADING_STYLE}>Target roles</div>
      <div className="role-list">
        {TARGET_ROLES.map((role) => (
          <div key={role} className="role-item">
            {role}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Right column: uncontrolled contact form that opens a mailto: on submit.
 * Uncontrolled inputs are used intentionally to avoid re-rendering the
 * whole page on every keystroke.
 */
function ContactForm() {
  const [status, setStatus] = useState(/** @type {string | null} */ (null));

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const name = readTrimmedInput("fname");
    const email = readTrimmedInput("femail");
    const company = readTrimmedInput("fcompany");
    const message = readTrimmedInput("fmessage");
    if (!name || !email) return;
    window.location.href = buildMailtoUrl({ name, email, company, message });
    setStatus("Opening your email client…");
  }, []);

  return (
    <div className="fade-in">
      <form id="contactForm" data-testid="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="fname">Your name *</label>
          <input
            className="form-input"
            type="text"
            id="fname"
            data-testid="contact-name"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="femail">Email *</label>
          <input
            className="form-input"
            type="email"
            id="femail"
            data-testid="contact-email-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="fcompany">Company / Brand</label>
          <input
            className="form-input"
            type="text"
            id="fcompany"
            data-testid="contact-company"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="fmessage">Message</label>
          <textarea
            className="form-textarea"
            id="fmessage"
            data-testid="contact-message"
            placeholder="Tell me about the role or opportunity..."
          ></textarea>
        </div>
        <button type="submit" data-testid="contact-submit" className="form-submit">
          Send message →
        </button>
        {status && (
          <div data-testid="contact-status" style={CONTACT_STATUS_STYLE}>
            {status}
          </div>
        )}
        <div style={OR_EMAIL_STYLE}>
          Or email:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--teal)" }}>
            {CONTACT_EMAIL}
          </a>
        </div>
      </form>
    </div>
  );
}

/**
 * Contact route: two-column layout (details + form).
 *
 * @param {{ active: boolean }} props
 */
function ContactPage({ active }) {
  return (
    <div className={`page ${active ? "active" : ""}`} id="page-contact">
      <div className="page-inner">
        <div className="page-eyebrow fade-in">Contact</div>
        <h1 className="page-title fade-in">Let&apos;s work together.</h1>
        <div className="contact-grid">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
