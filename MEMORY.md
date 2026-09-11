# Memory

- Canonical public host is `www.g-marketing.net`. Apex 308s to www.
- Vercel project `g-marketing` sits on the Hobby team `Mcontrol`. The GitHub repo `G-Marketing/G-Marketing` must stay **public** or Hobby cannot deploy from the org.
- Do not invent client case studies. Effectiveness is explained via the scoreboard.
- Contact leads (local) write to `.data/leads.json`. Email delivery is not wired.
- Conversion event stub: `generate_lead` on `window.dataLayer`.
- Local preview: `npm run dev` → http://localhost:3010
- Rollback of first production site: git commit `48bbeb6` (Hebrew placeholder). Snapshot in `backups/pre-deploy.20260911-1641/` (gitignored).
- Production verify: `node agent-workspace/tickets/001-marketing-site/verify-production.mjs`
