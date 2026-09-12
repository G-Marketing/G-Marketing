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
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/advertising", label: "Advertising" },
      { href: "/services/marketing", label: "Marketing" },
      { href: "/services/growth", label: "Growth" },
    ],
  },
  { href: "/markets", label: "Markets" },
  { href: "/approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
] as const;
