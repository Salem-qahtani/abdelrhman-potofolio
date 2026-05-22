import { useEffect, useState } from 'react';

export default function useVideoController(
  videoRef,
  { isActive, onDeactivate, initialVolume },
) {
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
    const applyVolume = () => {
      if (initialVolume != null) video.volume = initialVolume;
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onEnded);
    video.addEventListener('loadedmetadata', applyVolume);
    if (video.readyState >= 1) applyVolume();
    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('loadedmetadata', applyVolume);
    };
  }, [videoRef, onDeactivate, initialVolume]);

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
