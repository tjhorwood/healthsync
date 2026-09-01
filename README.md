# Health Sync — marketing site template

A small, static marketing/landing website built with the Next.js App Router and
Tailwind CSS. It ships as a handful of pages (home, about, contact, and the
usual legal pages) with scroll-reveal animations and a reusable component set.

> [!NOTE]
> **This is a template / demo, not a real product or company.**
> "Health Sync" is a fictional brand. All copy, team members, testimonials,
> contact details, effective dates, and references to third parties (insurers,
> health programs, etc.) are **placeholder content** for layout purposes only.
> Nothing here is a real service, real medical or legal advice, or a real data
> practice. Replace the content in `src/lib/data.js` and the page components
> before using this for anything real.

## Tech stack

| | |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, static export) |
| UI | React 19, [Tailwind CSS v4](https://tailwindcss.com/) |
| Components | [Radix UI](https://www.radix-ui.com/) primitives (accordion, slot), [Headless UI](https://headlessui.com/) transitions |
| Animation | [GSAP](https://gsap.com/) ScrollTrigger (reveal-on-scroll), CSS keyframes |
| Icons | `react-icons`, `lucide-react` |
| Tooling | [Biome](https://biomejs.dev/) (lint + format), TypeScript, [pnpm](https://pnpm.io/) |

The site is configured for **static export** (`output: 'export'` in
`next.config.js`) — `pnpm build` emits a fully static site into `./out/` that can
be served by any static host or CDN.

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

### Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the dev server |
| `pnpm build` | Produce the static export in `./out` |
| `pnpm start` | Serve the built site |
| `pnpm lint` | Biome check (no writes) |
| `pnpm check` | Biome check with autofix + import sorting |
| `pnpm format` | Biome format with writes |
| `pnpm typecheck` | `tsc --noEmit` |

## Project structure

```
src/
├── app/                  # App Router pages + root layout
│   ├── layout.jsx        # <html>/<body>, fonts, Header/Footer, ScrollAnimations
│   ├── page.jsx          # Home
│   ├── about/            # About
│   ├── contact/          # Contact (client form, simulated submit)
│   └── {privacy,terms-conditions,legal-notice}/
├── components/
│   ├── Header, Footer, MobileMenu, ScrollAnimations, GradientText, PlatformButtons
│   ├── home/             # Home page sections (Hero, Features, Interface, …)
│   ├── about/            # About page sections (Hero, Team, Vision, FAQs)
│   ├── legal/            # LegalDocument — shared layout for the legal pages
│   └── ui/               # Low-level primitives (button, input, textarea, accordion)
├── lib/
│   ├── data.js           # All page content (team, FAQs, legal text, …)
│   └── utils.ts          # cn(), sleep(), normalizePath()
├── images/               # Imported images (optimized at build via next/image)
└── styles/globals.css    # Tailwind entry + base layer
```

### Notes for customizing

- **Content** lives in `src/lib/data.js` and directly in the section components
  under `src/components/`.
- **Scroll animations**: add `data-animate="fade-up"` (optionally
  `data-animate-delay="150"`) to any element. See
  `src/components/ScrollAnimations.jsx`. Respects `prefers-reduced-motion` and
  degrades gracefully without JS.
- **The contact form does not send anything** — `handleSubmit` simulates a
  network delay and shows a success message. Wire it to a real endpoint or form
  service before use.
- **Theme tokens** (colors, spacing, fonts, animations) are in
  `tailwind.config.js` and the CSS variables in `src/styles/globals.css`.

## Docker

A multi-stage `Dockerfile` builds the static export and serves it with an
unprivileged nginx image (listening on `8080`).

```bash
docker compose up --build      # served at http://localhost:3030
```

`docker/nginx.conf` handles the `trailingSlash: true` routing, long-lived
caching for content-hashed assets, gzip, and a `/healthz` endpoint.

## License

No license is specified. Treat this as source-available for reference and
personal use; add your own `LICENSE` before distributing.
