import { Github, Twitter, Linkedin, Dribbble } from 'lucide-react';

export const profile = {
  name: 'Salem',
  photoSrc: '/images/profile.jpg',
  bio: '3D artist & motion designer crafting cinematic visuals with Blender and After Effects.',
  email: 'hello@yourdomain.com',
  credit: 'Designed & built — v1.0',
  headline: {
    line1: 'CREATIVE',
    line2: 'DESIGNER',
  },
  intro:
    'I blend 3D worlds with motion to tell stories that feel alive. Open to commissioned work, collaborations, and brand-driven creative direction.',
  socials: [
    { id: 'tw', href: 'https://twitter.com/', Icon: Twitter, label: 'Twitter' },
    { id: 'gh', href: 'https://github.com/', Icon: Github, label: 'GitHub' },
    { id: 'li', href: 'https://linkedin.com/', Icon: Linkedin, label: 'LinkedIn' },
    { id: 'db', href: 'https://dribbble.com/', Icon: Dribbble, label: 'Dribbble' },
  ],
};
