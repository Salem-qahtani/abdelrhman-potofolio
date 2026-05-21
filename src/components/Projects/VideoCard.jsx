import { useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import useVideoController from '../../hooks/useVideoController.js';
import styles from './VideoCard.module.css';

export default function VideoCard({
  id,
  title,
  description,
  thumbSrc,
  videoSrc,
  videoSrcWebm,
  isActive,
  onActivate,
  onDeactivate,
}) {
  const videoRef = useRef(null);
  const { isPlaying } = useVideoController(videoRef, { isActive, onDeactivate });

  const handlePlay = () => onActivate(id);
  const handlePause = () => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
    onDeactivate();
  };

  return (
    <article className={styles.card}>
      <div
        className={[styles.thumbWrap, isPlaying && styles.playing]
          .filter(Boolean)
          .join(' ')}
      >
        <video
          ref={videoRef}
          className={styles.video}
          poster={thumbSrc}
          preload="metadata"
          playsInline
        >
          {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
          <source src={videoSrc} type="video/mp4" />
        </video>

        <div className={styles.dim} aria-hidden="true" />

        <button
          type="button"
          className={styles.playBtn}
          onClick={handlePlay}
          aria-label={`Play ${title}`}
          tabIndex={isPlaying ? -1 : 0}
        >
          <Play
            size={20}
            strokeWidth={0}
            fill="currentColor"
            color="var(--text-on-light-primary)"
            aria-hidden="true"
            focusable="false"
            style={{ transform: 'translateX(2px)' }}
          />
        </button>

        <button
          type="button"
          className={styles.pauseBtn}
          onClick={handlePause}
          aria-label={`Pause ${title}`}
          tabIndex={isPlaying ? 0 : -1}
        >
          <Pause
            size={20}
            strokeWidth={0}
            fill="currentColor"
            color="var(--text-on-light-primary)"
            aria-hidden="true"
            focusable="false"
          />
        </button>
      </div>

      <div className={styles.text}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.desc}>{description}</p>
      </div>
    </article>
  );
}
