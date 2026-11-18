# YourBrand Landing Page

Next.js (App Router, TypeScript, static export) implementation of the YourBrand landing page, faithfully rebuilt from `landing-page.html` and `HANDOFF.md`.

## Architecture

- **Framework**: Next.js 16 (App Router) with static export (`output: "export"`)
- **Typography**: `Instrument_Sans` via `next/font/google` (`weight: "variable"`, `axes: ["wdth"]`)
- **Styling**: Exact CSS tokens, layout, breakpoints (`1080px`, `860px`, `720px`), and dual-copy (`p0` / `p1`) CSS keyframe timelines in `src/app/globals.css`
- **Sections** (`src/components/sections/`):
  1. `BannerSection`
  2. `NavbarSection`
  3. `HeroSection`
  4. `IndustriesStripSection`
  5. `ManifestoSection`
  6. `HowItWorksSection`
  7. `ChannelsSection`
  8. `OrgChartSection`
  9. `SystemsSection`
  10. `SecuritySection`
  11. `FinalCtaSection`
  12. `FaqSection`
  13. `FooterSection`
- **Interactive Demo Runtime** (`src/lib/demo-context.tsx`): Manages `p0`/`p1` timeline restarts, hover pause (`.is-paused`), `IntersectionObserver` scroll-into-view restarts, `ResizeObserver` CSS `zoom` scaling, `How it works` auto-advance (`6500ms`), tabs, accordions, FAQ, and `prefers-reduced-motion`.

## Development

```bash
npm install
npm run dev
```

## Verification & Build

```bash
npm run typecheck
npm run lint
npm run build
```

Static output is generated in `out/`.

## CI/CD (Auto-Deploy on Merge to `master` / `main`)

Merges or pushes to `master` (or `main`) trigger `.github/workflows/deploy.yml`, which:
1. Runs `npm ci`, `npm run typecheck`, `npm run lint`, and `npm run build`
2. Authenticates to AWS via GitHub OIDC (`arn:aws:iam::551670267044:role/github-actions-landing-page01-deploy`)
3. Syncs `out/` to S3 (`yourbrand-landing-page-551670267044`) and invalidates CloudFront (`E3ATV9RGH1UC0W`)

Public URL: https://d18cslgwdmnhqb.cloudfront.net

