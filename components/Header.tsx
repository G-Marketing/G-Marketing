"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { IconClose, IconMenu } from "./icons";
import { NAV } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link href="/" aria-label="G-Marketing home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServices(true)}
                onMouseLeave={() => setServices(false)}
              >
                <Link
                  href={item.href}
                  className="text-sm text-mist transition hover:text-paper"
                  aria-expanded={services}
                >
                  {item.label}
                </Link>
                {services && (
                  <div className="absolute left-0 top-full w-52 pt-3">
                    <div className="rounded-xl border border-line bg-panel p-2 shadow-glow">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-mist hover:bg-white/5 hover:text-paper"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition hover:text-paper ${
                  item.href === "/contact" ? "text-paper" : "text-mist"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/contact"
            className="rounded-full bg-cobalt px-4 py-2 text-sm font-medium text-paper hover:bg-[#5b90ff]"
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
        <div id="mobile-nav" className="border-t border-line bg-ink px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {NAV.flatMap((item) => {
              const links: { href: string; label: string }[] = [
                { href: item.href, label: item.label },
              ];
              if ("children" in item && item.children) {
                for (const child of item.children) {
                  links.push({ href: child.href, label: child.label });
                }
              }
              return links;
            }).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-paper"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
