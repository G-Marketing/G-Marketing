# PRD — Accessibility toolbar (ticket 002)

## Problem
The public site has a skip-link and focus rings but no visitor-facing accessibility toolbar. bina-6 on m-control already has one that matches the expected bar.

## Goal
Add the same toolbar pattern, **English only**, on g-marketing.net: text size, readable font, contrast, invert, grayscale, underline links, stop motion, stronger keyboard focus, statement, reset. Persist in `localStorage`.

## Non-goals
- Hebrew UI
- lucide-react / framer-motion
- Changing m-control or bina-6
- New analytics pixels

## Success
Toolbar renders on every page. Statement opens from the bar and the footer. Production verify includes the English toolbar strings and m-control guards.
