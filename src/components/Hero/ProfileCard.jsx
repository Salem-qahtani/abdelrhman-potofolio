import { Flame } from 'lucide-react';
import SocialIcons from './SocialIcons.jsx';
import styles from './ProfileCard.module.css';

export default function ProfileCard({ name, bio, socials }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.badge} aria-hidden="true">
        <Flame size={14} strokeWidth={2} color="#FFFFFF" />
      </span>
      <p className={styles.bio}>{bio}</p>
      <SocialIcons items={socials} />
    </article>
  );
}
