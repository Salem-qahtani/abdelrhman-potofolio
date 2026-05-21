import styles from './DecorativeArc.module.css';

/**
 * Pure SVG dashed arc. §3.2.2.
 * variant: 'upper' (top-right) or 'lower' (bottom-left)
 */
export default function DecorativeArc({ variant = 'upper', className }) {
  const cls = [
    styles.arc,
    variant === 'upper' ? styles.upper : styles.lower,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (variant === 'upper') {
    return (
      <svg
        className={cls}
        viewBox="0 0 200 160"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M 10 150 Q 10 30 190 10"
          stroke="var(--accent-primary)"
          strokeWidth="2.5"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      className={cls}
      viewBox="0 0 220 140"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M 210 10 Q 210 130 30 130"
        stroke="var(--accent-primary)"
        strokeWidth="2.5"
        strokeDasharray="8 8"
        strokeLinecap="round"
      />
    </svg>
  );
}
