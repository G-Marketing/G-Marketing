# ADD — G-Marketing public site (ticket 001)

Consistent with `agent-workspace/project-standards/architecture.md`.
Pattern source: `bina-6` (marketing site) and `m-control` (Next App Router), without copying their visual language.

## Stack (new, required)

| Package | Why |
|---|---|
| next, react, react-dom | App Router, metadata, sitemap, image optimization |
| typescript | Matches sibling projects |
| tailwindcss, postcss, autoprefixer | Layout/styling, same as bina-6 |
| @types/* | Typecheck |

No Framer Motion, no icon library, no CMS, no email SDK.

## Routes
File-based under `app/`. Canonical host `https://www.g-marketing.net`.

## SEO
- `metadataBase`, unique title/description per route, canonical
- Open Graph + Twitter using `public/images/og-share.jpg`
- `sitemap.ts`, `robots.ts`
- JSON-LD: Organization, ProfessionalService, WebSite, BreadcrumbList, FAQPage, Service
- Semantic headings, alt text, skip-link, focus styles
- `www` is canonical; thank-you is `noindex`

## Lead intake
`POST /api/contact` validates, rejects honeypots, appends JSON to `.data/leads.json`.
Thank-you fires a `dataLayer` `generate_lead` event so GTM can be attached later.

## Images
Original generated photography in `public/images/`. SVG wordmark in `components/Logo.tsx`.

## Out of scope for this ticket
Vercel env, Resend, GTM ID, Search Console, deploy.
