# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

Emaculata (www.emaculata.com) — a climate risk consultancy website for Brad Jackson, migrated from WordPress/Avada to Next.js + Tailwind CSS. The site presents climate risk information for businesses, Brad's consulting profile, and a contact form.

## Commands

- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run lint` — run ESLint

## Architecture

- **Framework**: Next.js 16 (App Router) with TypeScript and Tailwind CSS
- **Pages**: Home (`/`), About (`/about`), Contact (`/contact`), Privacy Policy (`/privacy-policy`), Internal dashboard (`/internal`)
- **Components**: `src/components/Header.tsx` (sticky nav with mobile menu), `src/components/Footer.tsx`
- **Assets**: `public/images/` — logos, hero images, profile photo, all sourced from the original WordPress site
- **Styling**: Tailwind with custom theme colors defined in `src/app/globals.css` (forest greens, dark backgrounds, cream accents matching the original Emaculata brand palette)

## Key Design Decisions

- The homepage is a long-scroll layout with alternating light/dark sections covering climate business risks — this mirrors the original WordPress site structure
- Contact form currently has no backend — the `handleSubmit` in `src/app/contact/page.tsx` needs to be connected to a form service (Formspree, Netlify Forms, etc.)
- The `/internal` page links out to TradingView charts (the original site embedded them; we link externally to avoid widget maintenance)
- Color palette: `--color-forest` (#005604), `--color-forest-light` (#09ce63), `--color-dark-bg` (#1f211c), `--color-cream` (#f1efe6)

## Source Assets

The original WordPress assets are in `../emaculata-com (1)/` including PSD source files for logos and the color palette.
