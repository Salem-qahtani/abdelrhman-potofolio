// 9 Blender thumbnails (480×360 @2x) and 3 After Effects video cards (1280×720 + mp4).
// Drop real assets into public/images/blender/, public/images/ae/, public/videos/.

const placeholder43 = (label) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 360"><rect width="480" height="360" fill="#222"/><text x="50%" y="50%" fill="#6E6E6E" font-family="Inter, sans-serif" font-size="22" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`,
  )}`;

const placeholder169 = (label) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720"><rect width="1280" height="720" fill="#222"/><text x="50%" y="50%" fill="#6E6E6E" font-family="Inter, sans-serif" font-size="42" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`,
  )}`;

export const blenderProjects = [
  { id: 'b1', title: 'Lunar Drift', description: 'Stylized moon scene with custom shaders.', thumbSrc: placeholder43('B1') },
  { id: 'b2', title: 'Volume Lab', description: 'Volumetric fog R&D for product reveals.', thumbSrc: placeholder43('B2') },
  { id: 'b3', title: 'Iridescent Bloom', description: 'Procedural petals with caustic lighting.', thumbSrc: placeholder43('B3') },
  { id: 'b4', title: 'Glass House', description: 'Architectural still with dispersion.', thumbSrc: placeholder43('B4') },
  { id: 'b5', title: 'Studio Loop', description: 'Looping product turntable for ecommerce.', thumbSrc: placeholder43('B5') },
  { id: 'b6', title: 'Particle Choir', description: 'Audio-reactive particle systems.', thumbSrc: placeholder43('B6') },
  { id: 'b7', title: 'Soft Bodies', description: 'Cloth & jelly simulation studies.', thumbSrc: placeholder43('B7') },
  { id: 'b8', title: 'Microcosm', description: 'Macro miniatures with depth of field.', thumbSrc: placeholder43('B8') },
  { id: 'b9', title: 'Aurora Frame', description: 'Atmospheric volumetrics for a brand spot.', thumbSrc: placeholder43('B9') },
];

export const aeProjects = [
  {
    id: 'ae1',
    title: 'Brand Reveal — Kintsu',
    description: 'Logo reveal with kinetic shape morphs and grain.',
    thumbSrc: placeholder169('AE Reel 01'),
    videoSrc: '/videos/ae1.mp4',
  },
  {
    id: 'ae2',
    title: 'Motion Reel 2025',
    description: 'A 60-second cut of recent commercial work.',
    thumbSrc: placeholder169('AE Reel 02'),
    videoSrc: '/videos/ae2.mp4',
  },
  {
    id: 'ae3',
    title: 'Type In Motion',
    description: 'Typographic studies in expressive timing.',
    thumbSrc: placeholder169('AE Reel 03'),
    videoSrc: '/videos/ae3.mp4',
  },
];
