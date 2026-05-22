import { profile } from '../../data/profile.js';
import Reveal from '../Reveal/Reveal.jsx';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contact" className={styles.section}>
      <div className={['container', styles.inner].join(' ')}>
        <Reveal>
          <p className={styles.eyebrow}>Have a project in mind?</p>
        </Reveal>
        <Reveal delay={80}>
          <a className={styles.email} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </Reveal>
      </div>
    </footer>
  );
}
