import styles from './Tooltip.module.css';

export default function Tooltip({ text, visible }) {
  return (
    <span
      className={[styles.tooltip, visible && styles.visible]
        .filter(Boolean)
        .join(' ')}
      role="tooltip"
    >
      {text}
    </span>
  );
}
