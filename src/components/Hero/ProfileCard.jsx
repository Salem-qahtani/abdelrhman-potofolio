import { Flame } from 'lucide-react';
import DecorativeArc from './DecorativeArc.jsx';
import SocialIcons from './SocialIcons.jsx';
import styles from './ProfileCard.module.css';

export default function ProfileCard({ name, photoSrc, bio, socials }) {
  return (
    <article className={styles.card}>
      <DecorativeArc variant="upper" />
      <div className={styles.photoWrap}>
        <img
          className={styles.photo}
          src={photoSrc}
          alt={`Portrait of ${name}`}
          loading="eager"
          decoding="async"
          onError={(e) => {
            e.currentTarget.style.background = '#EAEAEA';
            e.currentTarget.removeAttribute('src');
          }}
        />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.badge} aria-hidden="true">
        <Flame size={14} strokeWidth={2} color="#FFFFFF" />
      </span>
      <p className={styles.bio}>{bio}</p>
      <SocialIcons items={socials} />
      <DecorativeArc variant="lower" />
    </article>
  );
}
