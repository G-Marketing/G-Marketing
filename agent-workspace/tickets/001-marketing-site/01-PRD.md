# PRD — G-Marketing public site (ticket 001)

## Problem
`g-marketing.net` is live with a Hebrew placeholder. The business needs an English, action-oriented site that sells advertising, marketing, and growth for local and global markets, with production-grade SEO and ad-landing hygiene.

## Goal
Replace the placeholder with a multi-page Next.js site that:

1. Makes a visitor request a diagnostic or a conversation (primary conversion).
2. Explains three service lines with how effectiveness is measured.
3. Positions the firm for both local-market work and global rollouts.
4. Is indexable, shareable, and conversion-tracking-ready.

## Audience
- Founders and marketing leads of companies that already spend on media or are about to.
- English-speaking, operating in one country or many.

## Conversion
Primary: `/contact` form → thank-you.
Secondary: mailto `hello@g-marketing.net`, in-page CTAs.

## Pages
| Path | Purpose |
|---|---|
| `/` | Positioning, proof system, three lines, markets, FAQ, CTA |
| `/services` | Service hub |
| `/services/advertising` | Paid media |
| `/services/marketing` | Brand, content, SEO, lifecycle |
| `/services/growth` | CRO, analytics, experiments |
| `/markets` | Local vs global operating model |
| `/approach` | How work is run and proven |
| `/contact` | Lead form |
| `/thank-you` | Post-submit, `noindex` |
| `/privacy` | Privacy / cookies (required before pixels) |

## Non-goals
- Hebrew version
- Fake client logos, fake quotes, invented case-study numbers
- Live analytics, ads pixels, or email delivery
- Production deploy

## Success
Local preview at `http://localhost:3010` renders every route, passes a production build, and exposes sitemap/robots/JSON-LD/Open Graph.
