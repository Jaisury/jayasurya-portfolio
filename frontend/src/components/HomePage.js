import Hero from "@/components/Hero";
import SkuProSection from "@/components/SkuProSection";
import HomeExtras from "@/components/HomeExtras";

/**
 * Home route: hero + SKU.Pro flagship section + worked-with / marquee / testimonials.
 *
 * @param {{ active: boolean, onContactClick: () => void }} props
 */
function HomePage({ active, onContactClick }) {
  return (
    <div className={`page ${active ? "active" : ""}`} id="page-home">
      <Hero onContactClick={onContactClick} />
      <SkuProSection />
      <HomeExtras />
    </div>
  );
}

export default HomePage;
