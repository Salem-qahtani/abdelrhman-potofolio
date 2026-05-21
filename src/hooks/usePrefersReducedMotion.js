import useMediaQuery from './useMediaQuery.js';

export default function usePrefersReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
