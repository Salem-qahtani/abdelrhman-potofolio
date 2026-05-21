import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, description, thumbSrc, alt }) {
  return (
    <article className={styles.card}>
      <div className={styles.thumbWrap}>
        <img
          className={styles.thumb}
          src={thumbSrc}
          alt={alt ?? title}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.text}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.desc}>{description}</p>
      </div>
    </article>
  );
}
