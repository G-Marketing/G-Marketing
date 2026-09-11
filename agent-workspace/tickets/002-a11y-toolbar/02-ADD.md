# ADD — Accessibility toolbar (ticket 002)

Port of `m-control/bina-6/components/A11yToolbar.tsx` + `globals.css` a11y classes.

## Stack
Existing Next.js App Router. No new packages. Inline SVG icons. CSS show/hide instead of Framer Motion.

## Files
- `components/A11yToolbar.tsx` — client toolbar + statement dialog
- `components/icons.tsx` — missing glyphs
- `app/globals.css` — `.a11y-*` classes
- `app/layout.tsx` — mount toolbar
- `components/Footer.tsx` — statement trigger (`gm-a11y-statement`)

## Behaviour
Same toggles as bina-6. Storage key `gm-a11y`. Coordinator contact: `hello@g-marketing.net`.
