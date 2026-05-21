import { useEffect, useState } from 'react';

/**
 * Imperative play/pause bridge for a single <video> element.
 * - When `isActive` flips true, calls play(); on autoplay-block, calls onDeactivate.
 * - When `isActive` flips false, calls pause().
 * - Mirrors the element's real playback into `isPlaying` via play/pause/ended events.
 * - On `ended`, calls onDeactivate so the parent clears its active id.
 */
export default function useVideoController(videoRef, { isActive, onDeactivate }) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      onDeactivate?.();
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onEnded);
    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('ended', onEnded);
    };
  }, [videoRef, onDeactivate]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      const result = video.play();
      if (result && typeof result.catch === 'function') {
        result.catch(() => onDeactivate?.());
      }
    } else {
      if (!video.paused) video.pause();
      if (video.currentTime > 0) video.currentTime = 0;
    }
  }, [isActive, videoRef, onDeactivate]);

  return { isPlaying };
}
