# AGENTS.md — Mahi's Portfolio

## Stack
- **Next.js 16 + React 18 + JavaScript (JSX)** — not TypeScript (TS deps installed but `ignoreBuildErrors: true` in `next.config.js`)
- **Tailwind CSS 3** (custom colors, glassmorphism, dark theme), **GSAP** + **Framer Motion** for animations
- **EmailJS** for contact form (`src/config/emailjs.js`)
- **npm** (lockfile: `package-lock.json`)

## Commands
| Action | Command |
|--------|---------|
| Dev | `npm run dev` (runs `next dev`) |
| Build | `npm run build` (`next build`) |
| Lint | `npm run lint` (`next lint`) |
| Deploy | `vercel --prod` |

No test, typecheck, format, or codegen commands exist.

## Path aliases
`@/` maps to `./src/*` (`jsconfig.json`).

## Key conventions
- All source lives under `src/app/`, `src/components/`, `src/config/`, `src/hooks/`
- Contact form credentials are in `src/config/emailjs.js`
- `.vercel/` is gitignored; CI/CD is none (manual deploy via Vercel CLI)
- No tests, no CI workflows, no pre-commit hooks
- Editor: `.vscode/settings.json` disables JS/TS auto-closing tags

## Performance
- **Background effects** are consolidated into `BackgroundEffects.jsx` (Canvas particles + CSS animations, no DOM thrashing)
- **Use `useIsClient()` hook** from `@/hooks/useIsClient` instead of manual `useState`/`useEffect` hydration pattern
- **GSAP hover handlers replaced with CSS transitions** — only keep GSAP for entrance/timeline animations, never for hover
- **All external images use `<Image>` with `sizes` and `loading="lazy"`** — never `backgroundImage` CSS URLs
- **Google Fonts** loaded via `next/font/google` only — never `@import` in CSS
- **`next.config.js`** enables AVIF/WebP formats and configures remote image patterns
