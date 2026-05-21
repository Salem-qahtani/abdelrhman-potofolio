import { createElement } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal.js';
import styles from './Reveal.module.css';

/**
 * Wraps children in an opacity/translateY reveal that fires once when the
 * element scrolls into view. Spec §7.1.
 *
 * Props:
 *  - as: tag name (default 'div')
 *  - delay: transition-delay in ms (default 0). Use for staggering siblings.
 *  - threshold: IO threshold (default 0.15)
 *  - className: extra class merged onto the wrapper
 *  - children
 */
export default function Reveal({
  as = 'div',
  delay = 0,
  threshold = 0.15,
  className,
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useScrollReveal({ threshold });

  const merged = [styles.reveal, inView && styles.in, className]
    .filter(Boolean)
    .join(' ');

  const finalStyle =
    delay > 0 ? { ...style, transitionDelay: `${delay}ms` } : style;

  return createElement(
    as,
    { ref, className: merged, style: finalStyle, ...rest },
    children,
  );
}
