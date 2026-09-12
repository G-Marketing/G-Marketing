# Memory

- Canonical public host is `www.g-marketing.net`. Apex 308s to www.
- Vercel project `g-marketing` sits on the Hobby team `Mcontrol`. The GitHub repo `G-Marketing/G-Marketing` must stay **public** or Hobby cannot deploy from the org.
- Do not invent client case studies. Effectiveness is explained via the scoreboard.
- Contact leads (local) write to `.data/leads.json`. Email delivery is not wired.
- Conversion event stub: `generate_lead` on `window.dataLayer`.
- Local preview: `npm run dev` → http://localhost:3010
- Rollback of first production site: git commit `48bbeb6` (Hebrew placeholder). Snapshot in `backups/pre-deploy.20260911-1641/` (gitignored).
- Production verify: `node agent-workspace/tickets/001-marketing-site/verify-production.mjs`
- Accessibility toolbar (ticket 002): English port of bina-6. Storage key `gm-a11y`. Footer event `gm-a11y-statement`.
- Ticket 003 production: light canvas, globe lockup, homepage reel. Dark images in `backups/pre-light.20260912-0034/`. Pre-deploy snapshot in `backups/pre-deploy.light.*`. Rollback git SHA before this ship: `48bd3fe`.
- Nav/terms/service-hero ship: primary nav is Advertising, Marketing, Growth. Footer holds Services, Markets, Approach, Contact, Privacy, Terms of Use. Pre-deploy snapshot in `backups/pre-deploy.nav-terms.*`. Rollback git SHA before this ship: `28d2305`.
- OG lockup + transparent favicon ship. Preview image: `public/images/og-lockup.jpg` (mid-size). Pre-deploy snapshot in `backups/pre-deploy.og-favicon.*`. Rollback git SHA before this ship: `488502b`.
