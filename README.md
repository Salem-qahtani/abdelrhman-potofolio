# Abdulrahman — Motion Designer Portfolio

A single-page portfolio site designed and built for **Abdulrahman Al‑Khalil**, a 3D motion designer and video editor. The site showcases his Blender renders and After Effects reels with a cinematic dark aesthetic, animated particle backdrop, and inline video playback.

> Freelance client project — design, frontend implementation, performance, and deployment configuration delivered end‑to‑end.

## Live demo

_https://abdelrhman-potofolio.netlify.app/_

## Tech stack

| Layer         | Choice                                              |
| ------------- | --------------------------------------------------- |
| Framework     | React 18                                            |
| Build tool    | Vite 5                                              |
| Styling       | CSS Modules + design-token CSS variables            |
| Icons         | lucide-react                                        |
| Fonts         | Google Fonts — Space Grotesk, Inter, JetBrains Mono |
| Video hosting | Cloudinary                                          |
| Tooling       | ESLint 8, Prettier 3                                |

## Features

- Hero section with profile card and display headline
- Project showcase with Blender image grid and After Effects video cards
- Inline video play/pause with Cloudinary-hosted streams
- Tools strip with iconified software list
- Animated particle field on canvas
- Floating glass-pill navbar with active-section highlighting
- Scroll-reveal animations on all sections
- Responsive design with tablet and mobile breakpoints
- Accessibility: skip-to-content link, ARIA labels, reduced-motion support, keyboard focus rings

## Project structure

```
src/
  components/   # Hero, Projects, Tools, Footer, Navbar, Particles, Reveal, SectionHeading
  hooks/        # useScrollReveal, useVideoController, useActiveSection, useMediaQuery, usePrefersReducedMotion
  data/         # profile.js, projects.js, tools.js, navItems.js
  styles/       # tokens.css, index.css
  App.jsx
  main.jsx
public/
  images/       # blender/ and ae/ thumbnails, profile photo
```

## Design system

All color, type, spacing, radius, shadow, and motion values live in `src/styles/tokens.css` as CSS variables. Components reference tokens — raw values are not hard-coded in component styles.

## License

Built for Abdulrahman Al‑Khalil. All visual assets © the client.
