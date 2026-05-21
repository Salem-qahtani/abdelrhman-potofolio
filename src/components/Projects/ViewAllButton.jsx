import { ArrowRight } from 'lucide-react';
import styles from './ViewAllButton.module.css';

/**
 * Placeholder external link. The `href` will eventually point to a Google
 * Drive URL; for now it's "#" so the element is keyboard-focusable and
 * styled, but doesn't navigate or scroll.
 */
export default function ViewAllButton() {
  return (
    <a
      className={styles.button}
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View all projects"
    >
      <span>View All Projects</span>
      <ArrowRight
        className={styles.icon}
        size={16}
        strokeWidth={2}
        aria-hidden="true"
        focusable="false"
      />
    </a>
  );
}
