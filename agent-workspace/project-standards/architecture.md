# G-Marketing architecture

Public marketing site for G-Marketing (`https://www.g-marketing.net`).
English only. Production is the Vercel Hobby project `g-marketing` on team `Mcontrol`.

## Stack

- Next.js App Router, React, TypeScript, Tailwind CSS
- Original raster images in `public/images/`
- Inline SVG icons in `components/icons.tsx` (no icon library)
- Contact leads stored locally in `.data/leads.json` (gitignored) until an email provider is approved

## Layers

- `lib/site.ts` — canonical URL, nav, brand constants
- `lib/seo.ts` — metadata helpers and JSON-LD builders
- `data/copy.ts` — all marketing copy and service models
- `app/` — routes, metadata, sitemap, robots
- `components/` — layout chrome and page sections
- `app/api/contact/route.ts` — lead intake only

## Hosting

Production points `www.g-marketing.net` at the Vercel Hobby project `g-marketing` under the `Mcontrol` team.

Preferred public host is `www`. Apex redirects to `www`.

## Constraints

- Do not invent named client case studies or fake testimonials
- Effectiveness is explained through the measurement system, not fabricated ROI
- No production deploy, no git push, unless the user asks
- Analytics / ads pixels stay unwired until IDs are provided (dataLayer stub only)
