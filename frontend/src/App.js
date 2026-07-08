import { useCallback, useState } from "react";
import "@/App.css";

import Nav from "@/components/Nav";
import HomePage from "@/components/HomePage";
import PortfolioPage from "@/components/PortfolioPage";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";
import { useFadeInObserver } from "@/hooks/useFadeInObserver";

/** @typedef {'home' | 'portfolio' | 'about' | 'contact'} PageId */

/**
 * Portfolio root. Owns the in-app "active page" state and wires the fade-in
 * observer to re-run whenever the active page changes.
 */
function App() {
  const [activePage, setActivePage] = useState(
    /** @type {PageId} */ ("home")
  );

  const goTo = useCallback((/** @type {PageId} */ page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const goToContact = useCallback(() => goTo("contact"), [goTo]);

  useFadeInObserver(activePage);

  return (
    <>
      <Nav activePage={activePage} onNavigate={goTo} />
      <HomePage active={activePage === "home"} onContactClick={goToContact} />
      <PortfolioPage active={activePage === "portfolio"} />
      <AboutPage active={activePage === "about"} />
      <ContactPage active={activePage === "contact"} />
      <Footer />
    </>
  );
}

export default App;
