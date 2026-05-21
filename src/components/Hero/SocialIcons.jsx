import styles from './SocialIcons.module.css';

export default function SocialIcons({ items }) {
  return (
    <ul className={styles.row}>
      {items.map(({ id, href, Icon, label }) => (
        <li key={id}>
          <a
            href={href}
            className={styles.link}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={22} strokeWidth={1.75} aria-hidden="true" focusable="false" />
          </a>
        </li>
      ))}
    </ul>
  );
}
