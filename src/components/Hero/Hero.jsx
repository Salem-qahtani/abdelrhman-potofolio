import { profile } from '../../data/profile.js';
import Reveal from '../Reveal/Reveal.jsx';
import ProfileCard from './ProfileCard.jsx';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.section}>
      <div className={['container', styles.grid].join(' ')}>
        <Reveal className={styles.cardCol}>
          <ProfileCard
            name={profile.name}
            bio={profile.bio}
            socials={profile.socials}
          />
        </Reveal>

        <Reveal className={styles.textCol} delay={80}>
          <h1 className={styles.title}>
            <span className={styles.titleLine1}>{profile.headline.line1}</span>
            <br />
            <span className={styles.titleLine2}>{profile.headline.line2}</span>
          </h1>
          <p className={styles.intro}>{profile.intro}</p>
        </Reveal>
      </div>
    </section>
  );
}
