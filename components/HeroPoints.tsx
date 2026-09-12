"use client";

import { useEffect, useState } from "react";

const POINTS = [
  "Produce quality leads & online sales flow",
  "Across B2B and B2C markets",
  "Marketing AI tools Implementation",
  "Convert it through CTA systems",
];

function reducedMotion() {
  return (
    document.documentElement.classList.contains("a11y-motion") ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-6 w-6 shrink-0 text-[#16a34a] sm:h-7 sm:w-7"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12" />
      <path
        d="M7.2 12.4 10.2 15.5 16.8 8.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroPoints({ points = POINTS }: { points?: readonly string[] }) {
  const [play, setPlay] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    if (reducedMotion()) {
      setInstant(true);
      return;
    }
    const id = window.requestAnimationFrame(() => setPlay(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  return (
    <ul className="flex flex-1 flex-col justify-evenly gap-4">
      {points.map((text, i) => (
        <li
          key={text}
          className={`flex items-start gap-3 text-lg leading-7 text-paper sm:text-xl sm:leading-8 ${
            instant ? "" : play ? "hero-point-in" : "opacity-0"
          }`}
          style={play && !instant ? { animationDelay: `${i * 220}ms` } : undefined}
        >
          <Check />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}
