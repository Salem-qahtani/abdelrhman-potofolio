import { ArrowRight } from 'lucide-react';
import styles from './ViewAllButton.module.css';

export default function ViewAllButton() {
  return (
    <a
      className={styles.button}
      href="https://drive.google.com/drive/folders/1Bk9Bx39q1RXOnrZ21z8KFyPA__3m06hf?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View all projects on Google Drive"
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
