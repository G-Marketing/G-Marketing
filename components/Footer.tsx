import Link from "next/link";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

const FOOT = [
  { href: "/services", label: "Services" },
  { href: "/markets", label: "Markets" },
  { href: "/approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-8 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-6 text-mist">
            Advertising, marketing, and growth for companies that need to win
            locally and scale globally.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-4 inline-block text-sm text-paper underline-offset-4 hover:underline"
          >
            {SITE.email}
          </a>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
            {FOOT.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-mist hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-mist sm:flex-row sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Canonical site: www.g-marketing.net</p>
        </div>
      </div>
    </footer>
  );
}
