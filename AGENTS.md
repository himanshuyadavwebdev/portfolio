# AGENTS.md

## Project Overview
This is a world-class interactive developer portfolio for Zex, a frontend
developer and CSE student graduating in 2026. The portfolio is built with
Next.js 14 App Router, TypeScript, Tailwind CSS v4, and Framer Motion. Every
section is heavily animated with micro-interactions, scroll reveals, 3D tilt
effects, a custom cursor, magnetic buttons, and a particle hero background.
The goal is to impress recruiters within 3 seconds of landing on the page.

---

## Commands
- Package manager: Bun. Committed lockfile is `bun.lock`. Never use npm or
  yarn.
- Dev server: `bun run dev` — starts Next.js with Turbopack.
- Production build: `bun run build`.
- Lint: `bun run lint`.
- Type check: `bun run typecheck`.
- Format: `bun run format` — writes `**/*.{ts,tsx}` only. Does not touch CSS,
  JSON, or Markdown.
- No test runner is configured. Do not claim tests ran unless you add one.

---

## App Structure
- Route entrypoint: `app/page.tsx` — renders `<Portfolio />` which composes
  all sections in order: Hero, About, Skills, Projects, Experience, Contact.
- Root layout: `app/layout.tsx` — wires Geist fonts, metadata, global CSS,
  ThemeProvider, and CustomCursor.
- All section components live in `components/sections/`.
- All reusable animation and UI primitives live in `components/ui/`.
- Layout components (Navbar, Footer) live in `components/layout/`.
- All personal data (name, skills, projects, experience, stats) is defined in
  `lib/constants.ts`. No personal data is hardcoded inside components.
- All custom hooks live in `hooks/`.
- All TypeScript interfaces live in `types/index.ts`.
- EmailJS config and send function live in `lib/emailjs.ts`.
- `cn()` utility lives in `lib/utils.ts`.

---

## Styling and UI

- Tailwind CSS v4 is configured through `app/globals.css` and
  `@tailwindcss/postcss`. There is no `tailwind.config.*` file.
- Use `cn()` from `lib/utils.ts` for all class merging.
- Use `@tabler/icons-react` for all icons. Never use emoji or inline SVG
  unless a brand asset has no Tabler equivalent.
- Theme switching uses `next-themes` with the `class` strategy on `<html>`.
  Dark mode is the default. Light mode is fully supported.
- All color values are defined as CSS variables in `globals.css`. Never
  hardcode hex values inside component files.
- The accent gradient is: from `#6366f1` (indigo) to `#a855f7` (purple).
  Use this gradient consistently for highlights, underlines, borders, and
  progress indicators acrosqs all sections.
- Font: Geist Sans for all body and heading text. Geist Mono for code
  elements, terminal text, and the typewriter effect. Both loaded via
  `next/font/google`.

---

## Animation Rules — Follow These Exactly

### General
- Framer Motion is the primary animation library. Use it for all component
  enter/exit animations, hover states, and layout animations.
- Three.js or React Three Fiber is used only for the hero particle background.
  Import it with `next/dynamic` and `ssr: false` to avoid hydration errors.
- Every animation must respect `prefers-reduced-motion`. Wrap all Framer
  Motion variants with a check: if reduced motion is preferred, set duration
  to 0 and disable transforms. Use the `useReducedMotion()` hook from Framer
  Motion.

### Section Reveal
- Every section must be wrapped in `<SectionWrapper>` from `components/ui/
  SectionWrapper.tsx`.
- SectionWrapper uses Framer Motion `whileInView` with `once: true`,
  `viewport={{ once: true, margin: "-100px" }}`, and a fade-up animation
  (opacity 0 to 1, y 40 to 0, duration 0.6s, ease "easeOut").
- Child elements inside each section use `staggerChildren: 0.1` so they
  animate in one after another, not all at once.

### Custom Cursor
- CustomCursor renders two div elements: a small dot (8px) and a large ring
  (32px).
- The dot follows the cursor with zero lag using `mousemove` event.
- The ring follows with a lerp factor of 0.12 using `requestAnimationFrame`.
- On hover over any `<a>`, `<button>`, or element with `data-cursor="pointer"`,
  the ring scales to 2x and its mix-blend-mode changes to `difference`.
- On click, both elements briefly scale down to 0.7 then spring back.
- CustomCursor is rendered in `app/layout.tsx` outside all page content so it
  is always on top.
- CustomCursor is hidden on touch devices using a `window.matchMedia` check
  for `(pointer: coarse)`.

### Magnetic Button
- MagneticButton wraps any button or link.
- On mouse enter, it starts tracking cursor position relative to the element
  center using `mousemove`.
- It applies a `transform: translate(x, y)` where x and y are 30% of the
  distance from cursor to element center.
- On mouse leave, it springs back to `translate(0, 0)` using Framer Motion
  spring with `stiffness: 150, damping: 15`.
- Only apply MagneticButton to buttons that have enough padding around them.
  Do not apply it to small icon buttons.

### Scroll Progress Bar
- A thin 3px bar at the very top of the viewport, position fixed, z-index 100.
- Width goes from 0% to 100% as the user scrolls from top to bottom.
- Uses the accent gradient as background.
- Implemented in `components/ui/ScrollProgress.tsx` using
  `useScrollProgress` hook.

### Page Load Animation
- On first load, a full-screen overlay div slides upward and off the screen
  revealing the page content.
- This overlay is indigo-to-purple gradient.
- Animation duration is 1s with an ease-in-out curve.
- This only plays once. Do not replay on navigation.
- Implemented as a client component in `app/layout.tsx`.

### 3D Tilt Effect
- TiltCard component uses `onMouseMove` to calculate the mouse position
  relative to the card center.
- Applies `rotateX` and `rotateY` up to a max of 15 degrees using Framer
  Motion `useMotionValue` and `useTransform`.
- On mouse leave, springs back to flat using Framer Motion spring.
- Use `perspective: 1000px` on the wrapper div.
- Apply TiltCard to: project preview images and featured project cards.

### GlowCard
- GlowCard tracks mouse position and renders a radial gradient that follows
  the cursor inside the card.
- The gradient uses the card's accent color at 15% opacity.
- On mouse leave, the gradient fades out.
- Apply GlowCard to: small project cards, skill cards, and contact info cards.

### CountUp
- CountUp animates a number from 0 to its target value when it enters the
  viewport.
- Duration is 2 seconds with an ease-out curve.
- Use the `useInView` hook to trigger the count only once.
- Apply to all stats in the About section.

---

## Performance Rules

- Lighthouse score must stay above 90 on all four metrics in production.
- Always use `next/image` for all images. Never use a raw `<img>` tag.
- Three.js, GSAP, and any heavy library must be dynamically imported with
  `next/dynamic` and `{ ssr: false }`.
- Use `<LazyMotion features={domAnimation}>` from Framer Motion to reduce
  bundle size. Import `m` instead of `motion` inside LazyMotion.
- All fonts are loaded via `next/font`. Never load fonts from a `<link>` tag
  in HTML.
- Images in the public folder must be compressed. Use WebP format for all
  project screenshots and the avatar photo.

---

## Content Rules

- All personal data lives in `lib/constants.ts`. No name, email, URL, skill,
  or project data is written directly inside a component.
- When adding a new project, add it to the `PROJECTS` array in constants.ts
  only. The Projects section reads from this array and renders automatically.
- When adding a new skill, add it to the `SKILLS` array in constants.ts only.
- The resume PDF lives at `public/resume.pdf`. The download button always
  links to this path. Never hardcode an external URL for the resume.

---

## Conventions

### TypeScript
- Strict mode is enabled. Never use `any`.
- All data shapes are typed with interfaces in `types/index.ts`.
- Props for every component are typed with an explicit interface defined at
  the top of the component file.

### Component Rules
- Mark a component `'use client'` only if it uses hooks, event listeners,
  or browser APIs. Server components are the default.
- Three.js canvas, CustomCursor, and all animation-heavy components are
  client components.
- Every section component accepts no required props. All data comes from
  `lib/constants.ts` imports.

### File and Folder Naming
- React component files: `PascalCase.tsx`
- Hook files: `camelCase.ts`, always prefixed with `use`
- Utility files: `camelCase.ts`
- All section files are in `components/sections/`
- All UI primitive files are in `components/ui/`

### Formatting
- Prettier: 2 spaces, no semicolons, double quotes, trailing commas, LF
  line endings.
- Run `bun run format` before committing any `.ts` or `.tsx` file.

---

## Environment Variables

NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
