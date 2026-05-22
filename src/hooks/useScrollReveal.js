import { useEffect, useRef, useState } from 'react';

/**
 * Adds an opacity/translateY reveal when the observed element scrolls into view.
 * Enters at the given threshold (default 0.15) and only leaves once the element
 * is fully out of the viewport — the hysteresis prevents flicker near the edge
 * because the reveal's own translateY can otherwise re-trigger the boundary.
 * Pass `once: true` to fire only once.
 */
export default function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = false,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const enterRatio = Array.isArray(threshold) ? Math.max(...threshold) : threshold;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio >= enterRatio) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once && !entry.isIntersecting) {
            setInView(false);
          }
        }
      },
      { threshold: [0, enterRatio], rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
