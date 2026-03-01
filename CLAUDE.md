# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server (hot reload)
npm run build    # Build for production
npm i            # Install dependencies
```

No lint, test, or type-check scripts are configured.

## Architecture

This is a single-page React 18 + Vite 6 presentation website exported from Figma Make. It is a static marketing/pitch deck for the "청춘을 찾아서" (Finding Your Youth) brand campaign proposal targeting the Everytime platform (Korean university student community).

**Tech stack:** React 18, Vite 6, Tailwind CSS v4 (via `@tailwindcss/vite` plugin), Shadcn/ui (Radix UI primitives), Motion (animations), Recharts (data visualization).

**Path alias:** `@` → `./src`

### Page structure (`src/app/App.tsx`)

The app renders a vertical sequence of anchor-linked sections — no routing is used:

| Section | Anchor ID | Purpose |
|---|---|---|
| `NavBar` | `#hero` | Fixed navigation with scroll-to-section links |
| `HeroSection` | — | Campaign tagline and visual hook |
| `BackgroundSection` | `#background` | 3-card problem statement |
| `WhyEverytimeSection` | `#why` | 4 reasons the platform fits |
| `ProgramSection` | `#program` | 5-day itinerary timeline |
| `BudgetSection` | `#budget` | Toggle between Option A (5–10 people) / Option B (30–50 people) |
| `ROISection` | `#roi` | Value proposition vs. traditional influencer marketing |
| `RoadmapSection` | `#roadmap` | 4-phase project roadmap |
| `ContactSection` | `#contact` | CTA and contact info |

### Styling conventions

- Dark base (`#080812`) with gradient accents: orange `#FF8C00`, indigo `#818CF8`, emerald `#34D399`.
- Glassmorphism via `backdrop-filter` and semi-transparent backgrounds.
- Styling is done with **inline React `style` objects** for theme-specific values and **Tailwind utility classes** for layout/spacing.
- Design tokens live in `src/styles/theme.css`; fonts in `src/styles/fonts.css`.
- `src/styles/index.css` is the master import that loads all style files.

### Component notes

- Each page section (`*Section.tsx`) is a large, self-contained component with no shared state — props flow only from `App.tsx`.
- `src/app/components/ui/` holds the full Shadcn/ui library (MIT). Most components exist but are not yet wired up — use them freely for new UI.
- `src/app/components/figma/ImageWithFallback.tsx` is a utility for images with graceful fallback.
- No global state management, no backend, no environment variables.
