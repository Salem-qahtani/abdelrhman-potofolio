import { useEffect, useRef, useState } from 'react';

/**
 * Enters at `threshold` but only leaves once the element is fully out of view —
 * the hysteresis prevents flicker near the edge because the reveal's own
 * translateY can otherwise re-trigger the boundary.
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

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio >= threshold) {
            setInView(true);
            if (once) observer.disconnect();
          } else if (!once && !entry.isIntersecting) {
            setInView(false);
          }
        }
      },
      { threshold: [0, threshold], rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
