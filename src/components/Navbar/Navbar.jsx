import { useMemo } from 'react';
import { navItems } from '../../data/navItems.js';
import useActiveSection from '../../hooks/useActiveSection.js';
import NavItem from './NavItem.jsx';
import styles from './Navbar.module.css';

export default function Navbar() {
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const active = useActiveSection(ids);

  return (
    <nav className={styles.nav} aria-label="Primary">
      <ul className={styles.list}>
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            id={item.id}
            label={item.label}
            Icon={item.Icon}
            isActive={active === item.id}
          />
        ))}
      </ul>
    </nav>
  );
}
