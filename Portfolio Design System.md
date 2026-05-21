# Portfolio Website — Design Specification

> A complete, implementation-ready design reference for a single-page, dark & modern portfolio website. Every value is explicit (px / rem / hex / ms). No code — specs only.

**Document version:** 1.0
**Target stack-agnostic.** All measurements assume `1rem = 16px`.
**Direction:** LTR (English).
**Theme:** Dark, minimal, professional, with a single warm accent.

---

## Table of Contents

1. [Global Design Tokens](#1-global-design-tokens)
2. [Navbar](#2-navbar)
3. [Hero Section](#3-hero-section)
4. [Projects Section](#4-projects-section)
5. [Tools Section](#5-tools-section)
6. [Footer / Contact Section](#6-footer--contact-section)
7. [Animations](#7-animations)
8. [Responsive Behavior](#8-responsive-behavior)

---

## 1. Global Design Tokens

### 1.1 Color Palette

All colors are defined as design tokens. Use the token name in implementation; do not hard-code hex values inside components.

#### Backgrounds

| Token | Value | Usage |
|---|---|---|
| `--bg-page` | `#0E0E0E` | Page background (body) |
| `--bg-elevated` | `#161616` | Slight elevation: project cards, tools tiles |
| `--bg-elevated-2` | `#1C1C1C` | Hover state for elevated surfaces |
| `--bg-card-light` | `#FFFFFF` | The profile card (only light surface on the page) |
| `--bg-overlay-dim` | `rgba(0, 0, 0, 0.55)` | Video thumbnail dim overlay |
| `--bg-glass` | `rgba(22, 22, 22, 0.55)` | Navbar pill background (with backdrop blur) |

#### Text Hierarchy (on dark)

| Token | Value | Usage |
|---|---|---|
| `--text-primary` | `#F5F5F5` | Headings, primary copy on dark |
| `--text-secondary` | `#A8A8A8` | Body paragraphs, descriptions |
| `--text-tertiary` | `#6E6E6E` | Captions, meta, helper text |
| `--text-muted` | `#3A3A3A` | The dimmed second line of the hero title |
| `--text-disabled` | `#2A2A2A` | Disabled states |

#### Text Hierarchy (on light — profile card only)

| Token | Value | Usage |
|---|---|---|
| `--text-on-light-primary` | `#0E0E0E` | Name on profile card |
| `--text-on-light-secondary` | `#5A5A5A` | Bio paragraph on profile card |

#### Accents

| Token | Value | Usage |
|---|---|---|
| `--accent-primary` | `#FF6A1A` | Primary accent — arc, social icons, focus rings |
| `--accent-primary-hover` | `#FF8340` | Hover state for accent elements |
| `--accent-primary-soft` | `rgba(255, 106, 26, 0.12)` | Accent tint for backgrounds / hover halos |

> The accent is the **only** chromatic color in the system. Everything else is neutral. This keeps the page feeling minimal and professional.

#### Borders & Dividers

| Token | Value | Usage |
|---|---|---|
| `--border-subtle` | `rgba(255, 255, 255, 0.06)` | Default card border, navbar border |
| `--border-strong` | `rgba(255, 255, 255, 0.12)` | Hover border, focus border |
| `--border-divider` | `rgba(255, 255, 255, 0.04)` | Section dividers (if used) |

#### Particles

| Token | Value | Usage |
|---|---|---|
| `--particle-color` | `rgba(255, 255, 255, 0.55)` | Floating particle fill (max opacity) |

---

### 1.2 Typography

#### Font Families

| Token | Family | Fallback | Usage |
|---|---|---|---|
| `--font-display` | `"Space Grotesk"` | `"Helvetica Neue", Arial, sans-serif` | Hero title, H1, H2 |
| `--font-body` | `"Inter"` | `"Helvetica Neue", Arial, sans-serif` | Body, UI, labels, navigation tooltips |
| `--font-mono` | `"JetBrains Mono"` | `ui-monospace, "SF Mono", monospace` | Footer credit, version meta |

Weights to load: `400 Regular`, `500 Medium`, `600 SemiBold`, `700 Bold`, `800 ExtraBold`.

#### Type Scale

All sizes are listed as **desktop / tablet / mobile**.

| Level | Token | Size (desktop / tablet / mobile) | Weight | Line-height | Letter-spacing | Font |
|---|---|---|---|---|---|---|
| Display (Hero title) | `--text-display` | `120px / 88px / 56px` | 800 | 0.95 | `-0.03em` | Display |
| H1 (Section heading) | `--text-h1` | `56px / 44px / 36px` | 700 | 1.1 | `-0.02em` | Display |
| H2 (Sub-heading: "Blender", "After Effects") | `--text-h2` | `28px / 24px / 22px` | 600 | 1.2 | `-0.01em` | Display |
| H3 (Profile name) | `--text-h3` | `26px / 24px / 22px` | 700 | 1.15 | `-0.01em` | Display |
| H4 (Card project name) | `--text-h4` | `18px / 17px / 16px` | 600 | 1.3 | `0` | Body |
| Body Large (Hero paragraph) | `--text-body-lg` | `18px / 17px / 16px` | 400 | 1.55 | `0` | Body |
| Body (Profile bio, card descriptions) | `--text-body` | `15px / 15px / 14px` | 400 | 1.55 | `0` | Body |
| Body Small (Card description, "Have a project in mind?") | `--text-body-sm` | `14px / 14px | 13px` | 400 | 1.5 | `0` | Body |
| Footer Email | `--text-email` | `48px / 40px / 28px` | 600 | 1.1 | `-0.01em` | Display |
| Tools Label | `--text-label` | `14px / 14px / 13px` | 500 | 1.3 | `0.01em` | Body |
| Caption / Credit | `--text-caption` | `12px / 12px / 11px` | 400 | 1.4 | `0.04em` | Mono |
| Tooltip | `--text-tooltip` | `12px / 12px / 12px` | 500 | 1.2 | `0.02em` | Body |
| Button | `--text-button` | `14px / 14px / 14px` | 500 | 1 | `0.02em` | Body |

---

### 1.3 Spacing System

Base unit: **`4px`** (`0.25rem`). All spacing values are multiples of the base unit.

| Token | Value | Common usage |
|---|---|---|
| `--space-0` | `0` | — |
| `--space-1` | `4px` | Tight icon gaps |
| `--space-2` | `8px` | Inline label gaps |
| `--space-3` | `12px` | Within card padding |
| `--space-4` | `16px` | Default small gap |
| `--space-5` | `20px` | Card internal padding (sm) |
| `--space-6` | `24px` | Card internal padding (md) |
| `--space-8` | `32px` | Card internal padding (lg), grid gaps |
| `--space-10` | `40px` | Block separation |
| `--space-12` | `48px` | Inter-section small spacing |
| `--space-16` | `64px` | Column gap, sub-section gap |
| `--space-20` | `80px` | Section heading → content |
| `--space-24` | `96px` | Section vertical padding (mobile) |
| `--space-32` | `128px` | Section vertical padding (desktop) |
| `--space-40` | `160px` | Hero top spacing (desktop) |

---

### 1.4 Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-xs` | `4px` | Tooltip, micro-elements |
| `--radius-sm` | `8px` | Buttons, tool tiles, navbar icons hover surface |
| `--radius-md` | `12px` | Project card thumbnails, video thumbnails |
| `--radius-lg` | `16px` | Project cards, video cards, tool tiles container |
| `--radius-xl` | `24px` | Profile photo inside the profile card, large surfaces |
| `--radius-2xl` | `32px` | Profile card |
| `--radius-pill` | `999px` | Navbar pill, "View All Projects" button, social icon hit area |

---

### 1.5 Shadows & Elevation

The page is intentionally low-shadow. Elevation comes primarily from color contrast (dark surfaces against the darker page bg). Only the profile card and the navbar carry real shadows.

| Token | Value | Usage |
|---|---|---|
| `--shadow-none` | `none` | Default — all project cards |
| `--shadow-navbar` | `0 8px 24px rgba(0, 0, 0, 0.35)` | Navbar pill |
| `--shadow-card` | `0 24px 48px -16px rgba(0, 0, 0, 0.55), 0 8px 16px -8px rgba(0, 0, 0, 0.4)` | Profile card |
| `--shadow-focus` | `0 0 0 3px rgba(255, 106, 26, 0.35)` | Focus ring for keyboard nav |

---

### 1.6 Transitions & Easing

| Token | Value | Usage |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Default ease (entrance, hover) |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | State transitions |
| `--duration-fast` | `150ms` | Tooltip fade, simple hover |
| `--duration-base` | `220ms` | Card hover transform/color |
| `--duration-slow` | `420ms` | Color/opacity transitions on larger surfaces |
| `--duration-reveal` | `700ms` | Fade-in-on-scroll duration |

---

### 1.7 Layout

| Token | Value | Usage |
|---|---|---|
| `--container-max` | `1240px` | Max content width |
| `--container-pad-desktop` | `48px` | Horizontal page padding (desktop) |
| `--container-pad-tablet` | `32px` | Horizontal page padding (tablet) |
| `--container-pad-mobile` | `20px` | Horizontal page padding (mobile) |

---

### 1.8 Breakpoints

| Name | Range | Notes |
|---|---|---|
| Mobile | `0 – 639px` | Single column layouts |
| Tablet | `640px – 1023px` | Hybrid: some 2-column, reduced scales |
| Desktop | `1024px – 1439px` | Full layout |
| Desktop Large | `≥ 1440px` | Same layout, content capped at `--container-max` |

---

### 1.9 Z-Index Scale

| Token | Value | Usage |
|---|---|---|
| `--z-particles` | `0` | Particle canvas (behind everything) |
| `--z-content` | `10` | All page content |
| `--z-navbar` | `100` | Floating navbar |
| `--z-tooltip` | `110` | Navbar tooltips |
| `--z-overlay` | `200` | Future modal/lightbox overlays |

---

## 2. Navbar

A floating, pill-shaped, fixed-position icon bar.

### 2.1 Position & Dimensions

| Property | Value |
|---|---|
| Position | `fixed`, horizontally centered |
| Top offset from viewport | `24px` (desktop), `20px` (tablet), `16px` (mobile) |
| Height | `52px` |
| Min-width | `260px` |
| Padding (horizontal) | `12px` |
| Padding (vertical) | `8px` |
| Background | `--bg-glass` (`rgba(22, 22, 22, 0.55)`) |
| Backdrop filter | `blur(20px) saturate(140%)` |
| Border | `1px solid --border-subtle` |
| Border radius | `--radius-pill` |
| Shadow | `--shadow-navbar` |
| Z-index | `--z-navbar` |

### 2.2 Icon Items

Four items in order: **Home, Projects, Tools, Contact**.

| Property | Value |
|---|---|
| Hit area | `40px × 40px` |
| Icon size | `20px × 20px` |
| Icon stroke | `1.75px` (icons are line/outline style) |
| Icon color (default) | `--text-secondary` |
| Icon color (hover) | `--text-primary` |
| Icon color (active section) | `--accent-primary` |
| Item background (hover) | `rgba(255, 255, 255, 0.06)` |
| Item border radius (hover bg) | `--radius-sm` |
| Gap between items | `4px` |
| Transition | `color --duration-fast --ease-out, background --duration-fast --ease-out` |

### 2.3 Tooltip

Appears on hover, positioned below the icon.

| Property | Value |
|---|---|
| Distance below icon hit area | `10px` |
| Background | `#202020` |
| Text color | `--text-primary` |
| Font | `--text-tooltip` |
| Padding | `6px 10px` |
| Border radius | `--radius-xs` |
| Border | `1px solid --border-subtle` |
| Shadow | `0 4px 12px rgba(0, 0, 0, 0.4)` |
| Arrow | Optional 6px triangle, same color as bg, centered above tooltip |
| Animation in | opacity `0 → 1`, translateY `4px → 0`, `--duration-fast`, `--ease-out`, `80ms` delay |
| Animation out | opacity `1 → 0`, `100ms` |

### 2.4 Active State

The icon corresponding to the currently scrolled-to section is filled with `--accent-primary`. Use IntersectionObserver thresholds at `40%` viewport.

### 2.5 Mobile Behavior

- Navbar remains a floating pill, centered at the top.
- Top offset reduces to `16px`.
- Hit area shrinks to `36px × 36px`; icon stays at `20px`.
- Min-width drops to `220px`.
- Tooltips disabled on touch; tap = navigate.

---

## 3. Hero Section

### 3.1 Section Container

| Property | Value (desktop / tablet / mobile) |
|---|---|
| Top padding | `160px / 120px / 96px` (includes clearance for navbar) |
| Bottom padding | `128px / 96px / 64px` |
| Horizontal padding | `--container-pad-*` |
| Max width | `--container-max` |
| Layout | 2-column grid, `--space-16` (`64px`) gap on desktop |
| Vertical alignment | `center` |

Column ratio (desktop): `420px` (profile card) / `1fr` (text). On tablet, `360px / 1fr`. On mobile, single column, card on top.

---

### 3.2 Profile Card (Left)

| Property | Value |
|---|---|
| Background | `--bg-card-light` (`#FFFFFF`) |
| Width | `420px` desktop, `360px` tablet, `min(100%, 360px)` mobile |
| Padding | `24px 24px 28px 24px` |
| Border radius | `--radius-2xl` (`32px`) |
| Shadow | `--shadow-card` |
| Position | `relative` (anchor for the decorative arc) |
| Internal layout | Vertical flex, `align-items: center`, `gap: 0` (gaps controlled per element below) |

#### 3.2.1 Profile Photo

| Property | Value |
|---|---|
| Aspect ratio | `1 / 1.15` (slightly portrait) |
| Width | `100%` of card content area |
| Border radius | `--radius-xl` (`24px`) |
| Object-fit | `cover` |
| Background (loading) | `#EAEAEA` |
| Position | `relative`, z-index `2` (sits above arc) |
| Margin-bottom | `24px` (to name) |

#### 3.2.2 Decorative Dashed Arc

A pure decorative element, drawn as an SVG positioned absolutely.

| Property | Value |
|---|---|
| Stroke color | `--accent-primary` (`#FF6A1A`) |
| Stroke width | `2.5px` |
| Stroke dasharray | `8 8` |
| Stroke linecap | `round` |
| Shape | Two arc segments (upper-right curving behind the photo top; lower-left curving below the small icon) — together they trace ~270° of an implied ellipse. |
| Upper arc viewBox | `0 0 200 160`, positioned `top: 8px; right: -12px; width: 200px; height: 160px;` |
| Lower arc viewBox | `0 0 220 140`, positioned `top: calc(photo height + name + icon + 8px); left: -16px; width: 220px; height: 140px;` |
| Z-index | `1` (behind photo, above card bg) |
| Pointer-events | `none` |

#### 3.2.3 Name

| Property | Value |
|---|---|
| Font | `--text-h3` (`26px / 24px / 22px`, 700) |
| Color | `--text-on-light-primary` |
| Text align | `center` |
| Margin-bottom | `12px` |

#### 3.2.4 Small Icon Badge (below name)

| Property | Value |
|---|---|
| Shape | Circle |
| Diameter | `28px` |
| Background | `--accent-primary` |
| Icon | A single glyph (e.g., a flame or spark), white, `14px` |
| Margin-bottom | `20px` |

#### 3.2.5 Bio Paragraph

| Property | Value |
|---|---|
| Font | `--text-body` (`15px`, 400, line-height 1.55) |
| Color | `--text-on-light-secondary` |
| Text align | `center` |
| Max-width | `260px` |
| Margin-bottom | `24px` |

#### 3.2.6 Social Icons Row

| Property | Value |
|---|---|
| Layout | Horizontal flex, `justify-content: center` |
| Gap | `20px` |
| Count | 4 icons |
| Icon size | `22px × 22px` |
| Icon hit area | `40px × 40px` (for accessibility) |
| Icon color (default) | `--accent-primary` |
| Icon color (hover) | `--accent-primary-hover` |
| Hit area bg (hover) | `--accent-primary-soft` |
| Hit area radius | `--radius-pill` |
| Transition | `color --duration-fast --ease-out, background --duration-fast --ease-out` |

---

### 3.3 Text Content (Right)

#### 3.3.1 Job Title (Two-line treatment)

The job title is split across two lines. The first line is bright; the second line is dimmer (lower-contrast, **not** lower opacity — uses a dedicated dim color so it remains crisp).

| Property | Value |
|---|---|
| Font | `--text-display` (`120px / 88px / 56px`, 800) |
| Line-height | `0.95` |
| Letter-spacing | `-0.03em` |
| Text transform | `uppercase` |
| Line 1 color | `--text-primary` (`#F5F5F5`) |
| Line 2 color | `--text-muted` (`#3A3A3A`) |
| Line 2 weight | Same (800) — depth comes from color, not weight |
| Margin-bottom | `32px` (desktop), `24px` (tablet), `20px` (mobile) |

#### 3.3.2 Body Paragraph

| Property | Value |
|---|---|
| Font | `--text-body-lg` (`18px / 17px / 16px`, 400, line-height 1.55) |
| Color | `--text-secondary` |
| Max width | `460px` |
| Margin-bottom | `0` |

---

### 3.4 Hero — Mobile Stacking

- Layout flips to single column: profile card centered on top, text content below.
- Gap between card and text block: `48px`.
- Hero title left-aligned on mobile (matches text block alignment).
- Profile card max-width `360px`, horizontally centered.

---

## 4. Projects Section

### 4.1 Section Container

| Property | Value (desktop / tablet / mobile) |
|---|---|
| Vertical padding | `128px 0 / 96px 0 / 80px 0` |
| Horizontal padding | `--container-pad-*` |
| Max width | `--container-max` |

### 4.2 Section Heading

| Property | Value |
|---|---|
| Text | "Projects" |
| Font | `--text-h1` |
| Color | `--text-primary` |
| Margin-bottom | `64px / 48px / 40px` |

### 4.3 Two-Column Layout

| Property | Value |
|---|---|
| Layout | CSS grid, `grid-template-columns: 1fr 1fr` (desktop), `1fr` (tablet & mobile) |
| Gap (desktop) | `--space-16` (`64px`) |
| Row alignment | The grid rows MUST align: each row of 3 Blender cards is the same height as one After Effects video card. This is achieved by making both columns share row heights via implicit grid rows of equal height (see §4.6). |

### 4.4 Sub-heading (per column)

| Property | Value |
|---|---|
| Font | `--text-h2` (`28px / 24px / 22px`, 600) |
| Color | `--text-primary` |
| Margin-bottom | `32px` |
| Optional small uppercase eyebrow | `12px`, weight 500, `--text-tertiary`, letter-spacing `0.12em`, uppercase, sits above the sub-heading with `8px` margin-bottom (decorative; not required) |

### 4.5 Left Column — "Blender" (3×3 grid)

#### 4.5.1 Grid

| Property | Value |
|---|---|
| Layout | CSS grid, 3 columns |
| Column template | `repeat(3, 1fr)` |
| Column gap | `16px` |
| Row gap | `20px` |

#### 4.5.2 Project Card

| Property | Value |
|---|---|
| Background | `--bg-elevated` (`#161616`) |
| Border | `1px solid --border-subtle` |
| Border radius | `--radius-lg` (`16px`) |
| Padding | `12px 12px 16px 12px` |
| Min height | `auto` (driven by content) |
| Internal layout | Flex column, `gap: 12px` |
| Transition | `background --duration-base --ease-out, transform --duration-base --ease-out, border-color --duration-base --ease-out` |

#### 4.5.3 Thumbnail

| Property | Value |
|---|---|
| Aspect ratio | `4 / 3` |
| Width | `100%` |
| Border radius | `--radius-md` (`12px`) |
| Object-fit | `cover` |
| Background (loading) | `#222` |

#### 4.5.4 Card Text

| Property | Value |
|---|---|
| Project name font | `--text-h4` (`16px–18px`, 600) |
| Project name color | `--text-primary` |
| Margin between name and description | `4px` |
| Description font | `--text-body-sm` (`13–14px`, 400) |
| Description color | `--text-tertiary` |
| Description max lines | `2` (use `-webkit-line-clamp: 2`) |
| Horizontal padding | `4px` (inset slightly from card edge) |

#### 4.5.5 Card Hover

| Property | Value |
|---|---|
| Background | `--bg-elevated-2` |
| Border | `1px solid --border-strong` |
| Transform | `translateY(-2px)` |
| Thumbnail | `transform: scale(1.02)` over `--duration-base` |
| Project name color | unchanged (already primary) |

---

### 4.6 Right Column — "After Effects" (3 vertical video cards)

#### 4.6.1 Stack

| Property | Value |
|---|---|
| Layout | Flex column |
| Gap between cards | `20px` (matches Blender row gap; ensures 1 video card height ≈ 1 Blender row height) |

#### 4.6.2 Row-Alignment Mechanism

To guarantee row alignment between the two columns:
- The right column uses `display: grid; grid-template-rows: repeat(3, 1fr); gap: 20px;`.
- The left column uses `display: grid; grid-template-rows: repeat(3, 1fr); column-gap: 16px; row-gap: 20px;` with 3 columns and 3 rows. Each Blender card stretches to fill its row.
- The outer two-column grid uses `align-items: stretch` so both columns share total height.

#### 4.6.3 Video Card

| Property | Value |
|---|---|
| Background | `--bg-elevated` |
| Border | `1px solid --border-subtle` |
| Border radius | `--radius-lg` |
| Padding | `16px 16px 20px 16px` |
| Internal layout | Flex column, `gap: 16px` |
| Width | `100%` of column |
| Min height | matches one Blender row (~`260–280px` desktop) |

#### 4.6.4 Video Thumbnail

| Property | Value |
|---|---|
| Aspect ratio | `16 / 9` |
| Border radius | `--radius-md` |
| Object-fit | `cover` |
| Dim overlay (default) | `--bg-overlay-dim`, full cover, fades to `transparent` on hover over `--duration-base` |
| Loading bg | `#222` |

#### 4.6.5 Play Button Overlay

| Property | Value |
|---|---|
| Position | Absolute, centered |
| Diameter | `64px` (desktop), `56px` (tablet), `48px` (mobile) |
| Background | `rgba(255, 255, 255, 0.92)` |
| Backdrop blur | `4px` |
| Border radius | `--radius-pill` |
| Icon | Solid right-pointing triangle, `--text-on-light-primary`, `20px` wide, `22px` tall, optical-center-aligned (shift right by ~`2px`) |
| Shadow | `0 8px 24px rgba(0, 0, 0, 0.45)` |
| Hover scale | `1.06`, `--duration-base`, `--ease-out` |
| Active scale | `0.96` |

When the video is playing, the play button fades out (`opacity 0`, `--duration-base`), and the dim overlay disappears. A small pause control fades in on hover during playback (same dimensions, pause icon = two `4px × 18px` rounded rects spaced `4px` apart).

#### 4.6.6 Video Card Text

Same scale as Blender card text. Project name `--text-h4`; description `--text-body-sm`. Description max lines `2`. Sit below the thumbnail with the card's `gap: 16px` providing separation.

#### 4.6.7 Video Card Hover

Same as Blender card hover (bg/border shift, `translateY(-2px)`). Play button additionally scales to `1.06`.

---

### 4.7 "View All Projects" Button

Centered below both columns.

| Property | Value |
|---|---|
| Margin-top | `64px / 48px / 40px` |
| Container alignment | `flex; justify-content: center` |
| Element type | Anchor styled as button |
| Height | `48px` |
| Padding | `0 28px` |
| Background | `transparent` |
| Border | `1px solid --border-strong` |
| Border radius | `--radius-pill` |
| Font | `--text-button` |
| Color | `--text-primary` |
| Icon (optional) | `→` arrow, `16px`, `--space-2` (`8px`) gap, color `--accent-primary` |
| Hover background | `--accent-primary-soft` |
| Hover border | `1px solid --accent-primary` |
| Hover icon translate | `translateX(4px)` |
| Transition | `all --duration-base --ease-out` |
| Focus | `outline: none; box-shadow: --shadow-focus` |

---

## 5. Tools Section

### 5.1 Section Container

| Property | Value (desktop / tablet / mobile) |
|---|---|
| Vertical padding | `128px 0 / 96px 0 / 80px 0` |
| Horizontal padding | `--container-pad-*` |
| Max width | `--container-max` |

### 5.2 Heading

Same spec as Projects heading. Text: "Tools".

### 5.3 Grid of Tool Items

| Property | Value |
|---|---|
| Layout | CSS grid |
| Column template | `repeat(auto-fit, minmax(160px, 1fr))` |
| Gap | `16px` |
| Designed for | 6 items (placeholder) |

### 5.4 Tool Item

| Property | Value |
|---|---|
| Background | `--bg-elevated` |
| Border | `1px solid --border-subtle` |
| Border radius | `--radius-lg` |
| Padding | `28px 16px` |
| Internal layout | Flex column, `align-items: center`, `gap: 16px` |
| Height | `auto` (~`140px` desktop with content) |
| Transition | `background --duration-base --ease-out, border-color --duration-base --ease-out, transform --duration-base --ease-out` |

#### 5.4.1 Icon

| Property | Value |
|---|---|
| Size | `40px × 40px` (icon glyph itself; container is the tool card) |
| Stroke (if line icon) | `1.75px` |
| Color | `--text-primary` |
| If logo image | rendered at `40px`, `object-fit: contain` |

#### 5.4.2 Label

| Property | Value |
|---|---|
| Font | `--text-label` (`14px`, 500) |
| Color | `--text-secondary` |
| Text align | `center` |

#### 5.4.3 Hover State

| Property | Value |
|---|---|
| Background | `--bg-elevated-2` |
| Border | `1px solid --border-strong` |
| Transform | `translateY(-2px)` |
| Icon color | `--accent-primary` |
| Label color | `--text-primary` |

---

## 6. Footer / Contact Section

### 6.1 Container

| Property | Value (desktop / tablet / mobile) |
|---|---|
| Vertical padding | `120px 0 64px / 96px 0 56px / 72px 0 40px` |
| Horizontal padding | `--container-pad-*` |
| Background | `--bg-page` (same as page; visually continuous) |
| Text align | `center` |
| Internal layout | Flex column, `align-items: center`, `gap: 12px` |

### 6.2 Eyebrow Line

| Property | Value |
|---|---|
| Text | "Have a project in mind?" |
| Font | `--text-body-sm` (`14px`, 400) |
| Color | `--text-secondary` |
| Margin-bottom | `8px` |

### 6.3 Email

| Property | Value |
|---|---|
| Element | Anchor (`mailto:`) |
| Font | `--text-email` (`48px / 40px / 28px`, 600) |
| Color (default) | `--text-primary` |
| Color (hover) | `--accent-primary` |
| Text-decoration | `none` |
| Underline (hover) | `text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 6px;` |
| Transition | `color --duration-fast --ease-out` |
| Margin-bottom | `40px` |
| Word-break (mobile) | `break-word` to prevent overflow |

### 6.4 Credit Line

| Property | Value |
|---|---|
| Font | `--text-caption` (`12px`, mono) |
| Color | `--text-tertiary` |
| Text transform | none (or uppercase if preferred — pick one and stick) |
| Margin-top | `32px` |

---

## 7. Animations

### 7.1 Fade-In on Scroll

Applied to every section's content block (Hero text, Profile card, Projects heading + grid, Tools grid, Footer block).

| Property | Value |
|---|---|
| Initial state | `opacity: 0; transform: translateY(24px);` |
| Final state | `opacity: 1; transform: translateY(0);` |
| Duration | `--duration-reveal` (`700ms`) |
| Easing | `--ease-out` |
| Trigger | IntersectionObserver with `threshold: 0.15` (15% of element visible) and `rootMargin: 0px 0px -10% 0px` |
| Stagger (within a section) | `80ms` per direct child (cap stagger at 8 children to prevent runaway delays) |
| Reduced motion | If `prefers-reduced-motion: reduce`, set duration to `1ms` and translateY to `0`, but still apply the opacity transition for accessibility |

### 7.2 Floating Particles

A canvas layer behind all content.

| Property | Value |
|---|---|
| Layer | Full-viewport `position: fixed; inset: 0; z-index: --z-particles; pointer-events: none;` |
| Render | Canvas, full-bleed; resize-responsive |
| Particle count | `60` (desktop), `40` (tablet), `25` (mobile) |
| Particle shape | Circle |
| Particle size range | `1px – 2.5px` diameter |
| Particle color | `--particle-color` with per-particle alpha randomized between `0.15` and `0.55` |
| Movement | Slow vertical drift upward with subtle horizontal sine sway |
| Vertical speed | `0.15 – 0.45 px/frame` (at 60fps; tie to deltaTime so it stays consistent) |
| Horizontal sway amplitude | `12 – 24px` |
| Horizontal sway period | `4 – 8s` (randomized per particle) |
| Re-entry | When a particle exits the top, it re-enters at the bottom at a randomized x |
| Twinkle | Optional gentle sine on alpha over `3–6s`, range `0.6×–1.0×` of base alpha |
| Pause | Pause rendering when document is hidden (`document.hidden`) |
| Reduced motion | Reduce count by 50% and disable sway/twinkle |

### 7.3 No Other Animations

Hover transitions on cards/buttons/icons are micro-interactions, not "animations" — they are governed by the transition tokens in §1.6.

---

## 8. Responsive Behavior

A summary of all breakpoint changes, by section.

### 8.1 Navbar

| Property | Desktop | Tablet | Mobile |
|---|---|---|---|
| Top offset | `24px` | `20px` | `16px` |
| Hit area | `40px` | `40px` | `36px` |
| Min width | `260px` | `260px` | `220px` |
| Tooltips | Enabled | Enabled | Disabled (touch) |

### 8.2 Hero

| Property | Desktop | Tablet | Mobile |
|---|---|---|---|
| Layout | 2 columns (`420px / 1fr`) | 2 columns (`360px / 1fr`) | 1 column, card on top |
| Column gap | `64px` | `40px` | `48px` (vertical) |
| Top padding | `160px` | `120px` | `96px` |
| Bottom padding | `128px` | `96px` | `64px` |
| Hero title size | `120px` | `88px` | `56px` |
| Hero paragraph | `18px` | `17px` | `16px` |
| Profile card width | `420px` | `360px` | `min(100%, 360px)` |
| Title alignment | left | left | left |
| Card alignment | left | left | centered |

### 8.3 Projects

| Property | Desktop | Tablet | Mobile |
|---|---|---|---|
| Two-column layout | 1fr / 1fr | Stacked: Blender first, then After Effects | Stacked |
| Blender grid | 3 columns | 3 columns | 2 columns |
| After Effects | 3 stacked cards | 3 stacked cards | 3 stacked cards |
| Column gap | `64px` | `48px` (vertical gap between stacked sub-sections) | `40px` |
| Row alignment | Enforced (3 Blender rows align to 3 video cards) | Not enforced (sub-sections are independent when stacked) | Not enforced |
| Card padding | `12px / 16px 16px 20px 16px` | Same | Same |
| Heading | `56px` | `44px` | `36px` |
| Sub-heading | `28px` | `24px` | `22px` |
| "View All" button | `48px` height | Same | Same, full width if container < `360px` |

### 8.4 Tools

| Property | Desktop | Tablet | Mobile |
|---|---|---|---|
| Grid columns | `auto-fit minmax(160px, 1fr)` → typically 6 | `auto-fit minmax(140px, 1fr)` → typically 4 | `auto-fit minmax(120px, 1fr)` → typically 2–3 |
| Gap | `16px` | `12px` | `12px` |
| Tile padding | `28px 16px` | `24px 12px` | `20px 12px` |
| Icon size | `40px` | `36px` | `32px` |
| Label | `14px` | `14px` | `13px` |

### 8.5 Footer

| Property | Desktop | Tablet | Mobile |
|---|---|---|---|
| Top padding | `120px` | `96px` | `72px` |
| Bottom padding | `64px` | `56px` | `40px` |
| Email size | `48px` | `40px` | `28px` |
| Eyebrow size | `14px` | `14px` | `13px` |
| Credit size | `12px` | `12px` | `11px` |

### 8.6 Container Padding

| Property | Desktop | Tablet | Mobile |
|---|---|---|---|
| Horizontal page padding | `48px` | `32px` | `20px` |

---

## Appendix A — Accessibility Checklist

- All interactive elements have a minimum hit area of `40 × 40px` (`36px` minimum on mobile navbar — acceptable given pill density; document this exception).
- Focus states use `--shadow-focus` and are never removed.
- Color contrast: all text/background pairings meet WCAG AA at the specified weights.
  - `--text-primary` on `--bg-page`: 17.4:1 — AAA.
  - `--text-secondary` on `--bg-page`: 7.0:1 — AAA.
  - `--text-tertiary` on `--bg-page`: 4.6:1 — AA (use only for non-essential meta).
  - `--text-muted` on `--bg-page`: ~2.2:1 — **decorative only** (the dimmed hero title line — must not carry semantic meaning; the first line conveys the role).
  - `--accent-primary` on `--bg-page`: 5.2:1 — AA.
- `prefers-reduced-motion` reduces particle count and disables fade-in translateY.
- Skip-to-content link required at the very top (visually hidden until focused).

## Appendix B — Component Z-Index Reference

```
0    particles canvas
10   page content (sections)
50   floating decorations (arc behind photo)
100  navbar
110  navbar tooltip
200  reserved for future overlays
```

## Appendix C — Asset Specifications

| Asset | Format | Dimensions | Notes |
|---|---|---|---|
| Profile photo | JPG / WebP | `840 × 966px` @2x | Subject centered, plain background ideal |
| Project thumbnails (Blender) | WebP | `480 × 360px` @2x (4:3) | 9 images |
| Video thumbnails (After Effects) | WebP | `1280 × 720px` @2x (16:9) | 3 images; videos served via MP4/WebM |
| Tool icons | SVG | `40 × 40px` viewBox | Monochrome, currentColor-fillable |
| Social icons | SVG | `22 × 22px` viewBox | Line style, 1.75px stroke, currentColor |
| Navbar icons | SVG | `20 × 20px` viewBox | Line style, 1.75px stroke, currentColor |

---

**End of specification.**
