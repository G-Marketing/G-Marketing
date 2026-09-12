"use client";

import { useEffect, useState } from "react";
import { IconArrowUp } from "./icons";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        const reduce =
          document.documentElement.classList.contains("a11y-motion") ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
      className={`fixed right-4 z-[80] flex h-12 w-12 items-center justify-center rounded-full border border-cobalt/40 bg-panel text-cobalt shadow-glow transition hover:border-cobalt hover:text-paper max-md:bottom-24 md:bottom-6 ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <IconArrowUp className="h-5 w-5" />
    </button>
  );
}
