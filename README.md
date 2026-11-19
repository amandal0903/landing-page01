# Reflex Landing Page

Next.js (App Router, TypeScript, static export) implementation of the Reflex landing page, rebuilt from `landing.html` and `HANDOFF.md`.

## Architecture

- **Framework**: Next.js 16 (App Router) with static export (`output: "export"`)
- **Typography**: `Newsreader`, `Hanken_Grotesk`, and `JetBrains_Mono` via `next/font/google`
- **Design Tokens**: Warm editorial palette (`#FAF9F5` ivory, `#F0EEE6` oat, `#141413` ink, `#D97757` clay accent), CSS `cqw` proportional mock-up windows (`44em`, `46em`, `40em`), `@property` integer counters, and `steps(n)` typing animations in `src/app/globals.css`
- **Brand Logos**: `BrandLogo` (`src/components/ui/BrandLogo.tsx`) via Logo.dev (`Slack`, `WhatsApp`, `Gmail`, `Outlook`, `SAP`, `Oracle`, `NetSuite`, `Salesforce`, etc.)
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

## Development & Build

```bash
npm ci
npm run typecheck
npm run lint
npm run build
```

## CI/CD (Auto-Deploy on Merge to `master` / `main`)

Merges or pushes to `master` (or `main`) trigger `.github/workflows/deploy.yml`, which builds `out/`, authenticates to AWS via GitHub OIDC (`arn:aws:iam::551670267044:role/github-actions-landing-page01-deploy`), syncs to S3 (`yourbrand-landing-page-551670267044`), and invalidates CloudFront (`E3ATV9RGH1UC0W`).

Public URL: https://d18cslgwdmnhqb.cloudfront.net
