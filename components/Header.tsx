"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { IconClose, IconMenu } from "./icons";
import { NAV } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navClass(active: boolean) {
  return active
    ? "rounded-full bg-cobalt/50 px-3 py-2 text-sm font-medium text-white"
    : "rounded-full px-3 py-2 text-sm text-mist transition hover:text-paper";
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="/" aria-label="G-Marketing, Global Marketing, home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navClass(isCurrent(pathname, item.href))}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-cobalt px-4 py-2 text-sm font-medium text-white hover:bg-[#1d4ed8]"
          >
            Book a diagnostic
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-panel px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={navClass(isCurrent(pathname, item.href))}
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-cobalt px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#1d4ed8]"
              onClick={() => setOpen(false)}
            >
              Book a diagnostic
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
