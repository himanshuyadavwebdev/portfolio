# Portfolio — Himanshu Yadav

A premium, interactive developer portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. Features a custom cursor, smoothscroll, dark/light themes, animated skill rings, and cinematic section reveals.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4, CSS custom properties
- **Animation:** Framer Motion, GSAP, Lenis (smooth scroll)
- **3D:** React Three Fiber, Drei, Three.js
- **Icons:** Tabler Icons
- **Email:** EmailJS (contact form)
- **Fonts:** Playfair Display, DM Sans, JetBrains Mono (via next/font)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (v1.0+) — package manager and runtime

### Install

```bash
bun install
```

### Development

```bash
bun run dev
```

Opens at [http://localhost:3000](http://localhost:3000) with Turbopack for fast HMR.

### Build

```bash
bun run build
```

### Lint & Type Check

```bash
bun run lint
bun run typecheck
```

### Format

```bash
bun run format
```

## Project Structure

```
portfolio/
├── app/                  # Next.js App Router pages & layout
│   ├── globals.css       # Global styles, CSS variables, theme
│   ├── layout.tsx        # Root layout with fonts & providers
│   └── page.tsx          # Portfolio page composing all sections
├── components/
│   ├── layout/           # Navbar, Footer, SmoothScroll
│   ├── providers/        # ThemeProvider
│   ├── sections/         # Hero, About, Skills, Projects, Experience, Contact
│   └── ui/               # CustomCursor, MagneticButton, Badge, ProfileImage, etc.
├── hooks/                # Custom React hooks
├── lib/                  # Constants (personal data, skills, projects)
├── public/               # Static assets (images, resume PDF)
└── types/                # TypeScript interfaces
```

All personal data is centralized in `lib/constants.ts` — update your name, skills, projects, and experience there.

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **Add New → Project**.
3. Import your GitHub repository.
4. Vercel auto-detects Next.js — no configuration needed.
5. Click **Deploy**.

Your site will be live at `your-project.vercel.app`.

### Environment Variables

For the contact form to work, add these in Vercel's project settings → Environment Variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |

## Customization

1. Edit `lib/constants.ts` to update personal info, skills, projects, experience, and social links.
2. Replace placeholder images in `public/images/` with your own.
3. Add your resume PDF at `public/resume/Himanshu_Yadav_Resume.pdf`.
4. Tweak CSS variables in `app/globals.css` for theme colors.

## License

MIT
