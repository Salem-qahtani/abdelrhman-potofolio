import { useEffect, useState } from 'react';

/**
 * Tracks which section id (by document.getElementById) is currently in the
 * "active band" of the viewport. Spec §2.4: active when ~40% visible; this
 * implementation biases toward the upper-middle 20% of the viewport via
 * rootMargin so the section whose heading is in view wins.
 */
export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] ?? null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    if (!sectionIds || sectionIds.length === 0) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (elements.length === 0) return;

    const visibility = new Map(elements.map((el) => [el.id, 0]));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        }
        let bestId = null;
        let bestRatio = 0;
        for (const [id, ratio] of visibility) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestId && bestRatio > 0) setActive(bestId);
      },
      {
        threshold: [0, 0.25, 0.4, 0.5, 0.75, 1],
        rootMargin: '-30% 0px -50% 0px',
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
