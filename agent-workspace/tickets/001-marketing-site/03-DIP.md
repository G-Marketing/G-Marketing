# DIP — Ticket 001 marketing site

Replace `[ ]` with ✅ when done. Local only. No deploy.

## Phase 1 — Workspace and stack

- ✅ 1.1 Architecture + PRD + ADD in `agent-workspace`
- ✅ 1.2 Next.js / Tailwind scaffold, port 3010
- ✅ 1.3 Original images copied to `public/images/`
- ✅ 1.4 Remove Hebrew placeholder `index.html`

## Phase 2 — SEO foundation

- ✅ 2.1 `lib/site.ts`, `lib/seo.ts`, `data/copy.ts`
- ✅ 2.2 Root layout: fonts, skip-link, header, footer, JSON-LD
- ✅ 2.3 `sitemap.ts`, `robots.ts`, OG image, favicon, apple icon
- ✅ 2.4 Privacy page

## Phase 3 — Pages

- ✅ 3.1 Home
- ✅ 3.2 Services hub + advertising / marketing / growth
- ✅ 3.3 Markets
- ✅ 3.4 Approach
- ✅ 3.5 Contact + API + thank-you

## Phase 4 — Local verify (no deploy)

- ✅ 4.1 `npm run build` succeeds
- ✅ 4.2 Dev server on `http://localhost:3010`
- ✅ 4.3 Update CHANGELOG + MEMORY
- ✅ 4.4 Backup `backups/pre-deploy.20260911-1641/` then deploy **only** `G-Marketing/G-Marketing` → Vercel project `g-marketing`
- ✅ 4.5 `verify-production.mjs` against `https://www.g-marketing.net` — all checks passed, including m-control guards

