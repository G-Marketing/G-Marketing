export const SITE = {
  name: "G-Marketing",
  legalName: "G-Marketing",
  url: "https://www.g-marketing.net",
  email: "hello@g-marketing.net",
  locale: "en_US",
  tagline: "Advertising. Marketing. Growth.",
  description:
    "G-Marketing plans, buys, and proves advertising, marketing, and growth programs for companies that need to win locally and scale globally.",
  themeColor: "#f4f6f8",
} as const;

export const NAV = [
  { href: "/services/advertising", label: "Advertising" },
  { href: "/services/marketing", label: "Marketing" },
  { href: "/services/growth", label: "Growth" },
] as const;

export const FOOTER = [
  { href: "/services", label: "Services" },
  { href: "/markets", label: "Markets" },
  { href: "/approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms of Use" },
] as const;
