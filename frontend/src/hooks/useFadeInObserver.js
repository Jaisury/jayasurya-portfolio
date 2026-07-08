import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to every `.fade-in` element within the
 * document and adds the `visible` class as they scroll into view.
 *
 * Re-runs whenever `trigger` changes (typically the active page) so newly
 * rendered `.fade-in` nodes get observed after a route swap.
 *
 * @param {unknown} trigger Value that, when changed, re-scans the DOM.
 * @param {number} [threshold=0.08] IntersectionObserver threshold.
 * @returns {void}
 */
export function useFadeInObserver(trigger, threshold = 0.08) {
  useEffect(() => {
    const nodes = document.querySelectorAll(".fade-in");
    if (nodes.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [trigger, threshold]);
}
