import { useEffect, useRef } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery.js';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js';
import styles from './Particles.module.css';

const rand = (a, b) => a + Math.random() * (b - a);

/**
 * Floating particle field — §7.2.
 * - 60 / 40 / 25 particles for desktop / tablet / mobile.
 * - Halve count under prefers-reduced-motion; also disable sway & twinkle.
 * - Upward drift + sine sway in x; gentle alpha twinkle.
 * - Re-enters at the bottom when leaving the top.
 * - Pauses rAF when document.hidden.
 */
export default function Particles() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });

  const isTablet = useMediaQuery('(max-width: 1023px)');
  const isMobile = useMediaQuery('(max-width: 639px)');
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const baseCount = isMobile ? 25 : isTablet ? 40 : 60;
    const count = reduced ? Math.floor(baseCount / 2) : baseCount;

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      sizeRef.current = { w, h, dpr };
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const makeParticle = () => {
      const { w, h } = sizeRef.current;
      return {
        x: Math.random() * w,
        baseX: 0,
        y: Math.random() * h,
        r: rand(1, 2.5),
        baseAlpha: rand(0.15, 0.55),
        vy: rand(0.15, 0.45) * 60,
        swayAmp: reduced ? 0 : rand(12, 24),
        swayPeriod: rand(4, 8),
        swayPhase: rand(0, Math.PI * 2),
        twinklePeriod: rand(3, 6),
        twinklePhase: rand(0, Math.PI * 2),
      };
    };

    const initParticles = () => {
      const arr = Array.from({ length: count }, makeParticle);
      arr.forEach((p) => {
        p.baseX = p.x;
      });
      particlesRef.current = arr;
    };

    setSize();
    initParticles();

    const onResize = () => {
      const prev = sizeRef.current.w;
      setSize();
      const { w } = sizeRef.current;
      if (prev > 0) {
        particlesRef.current.forEach((p) => {
          const ratio = p.baseX / prev;
          p.baseX = ratio * w;
          p.x = p.baseX;
        });
      }
    };
    window.addEventListener('resize', onResize);

    const tick = (now) => {
      const { w, h } = sizeRef.current;
      const last = lastTimeRef.current || now;
      const dt = Math.min((now - last) / 1000, 0.05);
      lastTimeRef.current = now;

      ctx.clearRect(0, 0, w, h);

      const elapsed = now / 1000;
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y -= p.vy * dt;
        if (p.y < -p.r) {
          p.y = h + p.r;
          p.baseX = Math.random() * w;
        }

        if (p.swayAmp > 0) {
          p.x =
            p.baseX +
            Math.sin((elapsed / p.swayPeriod) * Math.PI * 2 + p.swayPhase) *
              p.swayAmp;
        } else {
          p.x = p.baseX;
        }

        let alpha = p.baseAlpha;
        if (!reduced) {
          const t =
            (Math.sin(
              (elapsed / p.twinklePeriod) * Math.PI * 2 + p.twinklePhase,
            ) +
              1) /
            2;
          alpha = p.baseAlpha * (0.6 + 0.4 * t);
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const start = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = 0;
      rafRef.current = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener('visibilitychange', onVisibility);

    start();

    return () => {
      stop();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [isMobile, isTablet, reduced]);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
