import { createElement } from 'react';
import styles from './SectionHeading.module.css';

/**
 * Reusable section heading. Renders H1 ("Projects", "Tools") by default, H2
 * for sub-headings ("Blender", "After Effects").
 *
 * Props:
 *  - as: 'h1' | 'h2' (default 'h1')
 *  - eyebrow: optional small uppercase label above the heading
 *  - className
 *  - children
 */
export default function SectionHeading({
  as = 'h1',
  eyebrow,
  className,
  children,
}) {
  const headingClass =
    as === 'h2' ? styles.h2 : styles.h1;

  return (
    <div className={[styles.wrap, className].filter(Boolean).join(' ')}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      {createElement(as, { className: headingClass }, children)}
    </div>
  );
}
