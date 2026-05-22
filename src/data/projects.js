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
  { id: 'b1', title: 'Sunken Voyage', description: 'Underwater shipwreck scene with god rays and coral reefs.', thumbSrc: '/images/blender/1.png' },
  { id: 'b2', title: 'Vanille Cédrée', description: 'Cinematic perfume render for Zenogati Paris on warm dunes.', thumbSrc: '/images/blender/2.png' },
  { id: 'b3', title: 'Valentino Studs', description: 'Valentino lipstick reveal with studded packaging and silk ribbon.', thumbSrc: '/images/blender/3.png' },
  { id: 'b4', title: 'Crimson Cabinet', description: 'Moody fragrance still framed in deep crimson light.', thumbSrc: '/images/blender/4.png' },
  { id: 'b5', title: 'Aesop Karst', description: 'Earthy product still with dappled shadow play.', thumbSrc: '/images/blender/5.png' },
  { id: 'b6', title: 'Forgotten Shrine', description: 'Jungle temple ruins with volumetric sunlight and reflecting pool.', thumbSrc: '/images/blender/6.png' },
  { id: 'b7', title: 'Chanel in Bloom', description: 'Chanel bottle nestled in a moonlit mossy garden.', thumbSrc: '/images/blender/7.png' },
  { id: 'b8', title: 'Brass Geometry', description: 'Ceramic cup poised over a brushed brass block landscape.', thumbSrc: '/images/blender/8.png' },
  { id: 'b9', title: 'Endgame', description: 'Cinematic chess set wrapped in smoke and warm reflections.', thumbSrc: '/images/blender/9.png' },
];

export const aeProjects = [
  {
    id: 'ae1',
    title: 'Brand Reveal — Kintsu',
    description: 'Logo reveal with kinetic shape morphs and grain.',
    thumbSrc: placeholder169('AE Reel 01'),
    videoSrc: '/videos/1.mp4',
  },
  {
    id: 'ae2',
    title: 'Motion Reel 2025',
    description: 'A 60-second cut of recent commercial work.',
    thumbSrc: placeholder169('AE Reel 02'),
    videoSrc: '/videos/2.mp4',
  },
  {
    id: 'ae3',
    title: 'Type In Motion',
    description: 'Typographic studies in expressive timing.',
    thumbSrc: placeholder169('AE Reel 03'),
    videoSrc: '/videos/3.mp4',
  },
];
