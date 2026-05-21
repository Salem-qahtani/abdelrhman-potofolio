import { useState } from 'react';
import Tooltip from './Tooltip.jsx';
import styles from './NavItem.module.css';

export default function NavItem({ id, label, Icon, isActive }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <li className={styles.item}>
      <a
        href={`#${id}`}
        className={[styles.link, isActive && styles.active]
          .filter(Boolean)
          .join(' ')}
        aria-label={label}
        aria-current={isActive ? 'true' : undefined}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <Icon
          size={20}
          strokeWidth={1.75}
          aria-hidden="true"
          focusable="false"
        />
        <Tooltip text={label} visible={hovered} />
      </a>
    </li>
  );
}
