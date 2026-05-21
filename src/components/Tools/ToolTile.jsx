import styles from './ToolTile.module.css';

export default function ToolTile({ name, Icon }) {
  return (
    <div className={styles.tile}>
      <Icon className={styles.icon} size={40} strokeWidth={1.75} aria-hidden="true" focusable="false" />
      <span className={styles.label}>{name}</span>
    </div>
  );
}
