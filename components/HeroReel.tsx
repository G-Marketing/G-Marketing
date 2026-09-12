"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./Logo";

type Slide =
  | { kind: "platform"; kicker: string; title: string; note: string; accent: string }
  | { kind: "end"; brand: string; line: string; promise: string; accent: string };

const SLIDES: Slide[] = [
  { kind: "platform", kicker: "Paid search", title: "Google Ads", note: "Intent, worldwide", accent: "#4285F4" },
  { kind: "platform", kicker: "Paid social", title: "Meta", note: "Demand where it starts", accent: "#0081FB" },
  { kind: "platform", kicker: "B2B", title: "LinkedIn", note: "Account-based reach", accent: "#0A66C2" },
  { kind: "platform", kicker: "Video", title: "YouTube", note: "Creative that sells", accent: "#FF0000" },
  { kind: "platform", kicker: "Organic", title: "SEO", note: "Demand you keep", accent: "#0F9D58" },
  { kind: "platform", kicker: "Local", title: "Maps & density", note: "Win the street", accent: "#F4B400" },
  { kind: "platform", kicker: "Global", title: "Market cells", note: "One system, many markets", accent: "#2563eb" },
  {
    kind: "end",
    brand: "G-Marketing",
    line: "Multi-Market Expertise",
    promise: "Advertising. Marketing. Growth.",
    accent: "#2563eb",
  },
];

const PLATFORM_MS = 900;
const END_MS = 3200;

function reducedMotion() {
  return (
    document.documentElement.classList.contains("a11y-motion") ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function Marks({ active, accent }: { active: string; accent: string }) {
  const items = [
    { id: "Google Ads", node: <GoogleMark />, wide: false },
    { id: "Meta", node: <MetaMark />, wide: true },
    { id: "LinkedIn", node: <LinkedInMark /> },
    { id: "YouTube", node: <YouTubeMark /> },
    { id: "SEO", node: <SeoMark /> },
    { id: "Maps & density", node: <MapsMark /> },
    { id: "Market cells", node: <GlobeMark /> },
  ];
  return (
    <div className="flex w-full flex-nowrap items-center justify-between gap-1 sm:gap-2" aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.id}
          className={`flex h-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm sm:h-11 ${
            item.wide ? "w-11 sm:w-14" : "w-9 sm:w-11"
          } ${active === item.id ? "opacity-100" : "opacity-75"}`}
          style={active === item.id ? { boxShadow: `0 0 0 2px ${accent}` } : undefined}
        >
          {item.node}
        </span>
      ))}
    </div>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-9 sm:w-9" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function MetaMark() {
  return (
    <svg viewBox="0 0 48 24" className="h-6 w-10 sm:h-8 sm:w-12" aria-hidden="true">
      <path
        fill="none"
        stroke="#0081FB"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.5 12c0-3.8 2.7-6.2 5.6-6.2 2.1 0 3.7 1.2 6 6.2 2.3-5 3.9-6.2 6-6.2 2.9 0 5.6 2.4 5.6 6.2s-2.7 6.2-5.6 6.2c-2.1 0-3.7-1.2-6-6.2-2.3 5-3.9 6.2-6 6.2-2.9 0-5.6-2.4-5.6-6.2z"
      />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-9 sm:w-9" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#fff"
        d="M8.4 9.2H6.1V18h2.3V9.2zM7.25 5.5A1.35 1.35 0 1 0 7.25 8.2 1.35 1.35 0 0 0 7.25 5.5zM18.4 12.5c0-2.3-1.2-3.4-2.9-3.4-1.3 0-2.1.7-2.5 1.3V9.2h-2.3c.03.5.03 8.8 0 8.8h2.3v-4.9c0-.3 0-.5.1-.7.3-.5.8-1.1 1.7-1.1 1.2 0 1.7.8 1.7 2.2V18h2.3v-5.5z"
      />
    </svg>
  );
}

function YouTubeMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-9 sm:w-9" aria-hidden="true">
      <path
        fill="#FF0000"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8z"
      />
      <path fill="#fff" d="M9.75 15.5v-7L16.5 12z" />
    </svg>
  );
}

function SeoMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-9 sm:w-9" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#0F9D58" />
      <path d="M6.5 15.5 10 12l3 2.5 4.5-5" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="17.2" cy="8.8" r="1.3" fill="#fff" />
    </svg>
  );
}

function MapsMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-9 sm:w-9" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#F4B400" />
      <path d="M12 18s5-4 5-7.2A5 5 0 0 0 7 10.8C7 14 12 18 12 18z" fill="#fff" />
      <circle cx="12" cy="10.6" r="1.5" fill="#F4B400" />
    </svg>
  );
}

function GlobeMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-9 sm:w-9" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#2563eb" />
      <circle cx="12" cy="12" r="5.2" fill="none" stroke="#fff" strokeWidth="1.4" />
      <ellipse cx="12" cy="12" rx="2.2" ry="5.2" fill="none" stroke="#fff" strokeWidth="1.2" />
      <path d="M6.8 12h10.4M8 9.2h8M8 14.8h8" stroke="#fff" strokeWidth="1.1" />
    </svg>
  );
}

export function HeroReel() {
  const endIndex = SLIDES.length - 1;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [staticMode, setStatic] = useState(false);

  useEffect(() => {
    const apply = () => {
      const reduce = reducedMotion();
      setStatic(reduce);
      if (reduce) setIndex(endIndex);
    };
    apply();
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", apply);
    const obs = new MutationObserver(apply);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => {
      mq.removeEventListener("change", apply);
      obs.disconnect();
    };
  }, [endIndex]);

  useEffect(() => {
    if (staticMode || paused) return;
    if (index >= endIndex) return;
    const ms = SLIDES[index]?.kind === "end" ? END_MS : PLATFORM_MS;
    const id = window.setTimeout(() => {
      setIndex((current) => Math.min(current + 1, endIndex));
    }, ms);
    return () => window.clearTimeout(id);
  }, [endIndex, index, paused, staticMode]);

  const slide = SLIDES[index];
  const activeTitle = slide.kind === "end" ? "end" : slide.title;

  return (
    <div
      className="relative h-full min-h-[280px] w-full overflow-hidden rounded-2xl border border-line bg-panel shadow-glow sm:min-h-[300px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-full min-h-[280px] w-full sm:min-h-[300px]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px), radial-gradient(circle at 88% 0%, rgba(37,99,235,0.10), transparent 42%)",
            backgroundSize: "28px 28px, 28px 28px, auto",
          }}
        />
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" viewBox="0 0 320 180" preserveAspectRatio="none" aria-hidden="true">
          <g fill="none" stroke="#2563eb" strokeWidth="0.7" opacity="0.35">
            <path d="M18 36h70l16 16v28" />
            <path d="M300 24v40h-28" />
            <path d="M40 150c40-18 90-18 140 0" />
            <circle cx="104" cy="52" r="2.2" fill="#2563eb" stroke="none" />
            <circle cx="272" cy="64" r="2.2" fill="#FF0000" stroke="none" />
            <circle cx="180" cy="150" r="2.2" fill="#F4B400" stroke="none" />
          </g>
        </svg>

        <div className="relative flex h-full min-h-[280px] flex-col items-center px-4 pb-8 pt-5 text-center sm:min-h-[300px] sm:px-6">
          <Marks active={activeTitle} accent={slide.accent} />
          <div className="mt-5 flex flex-1 items-center justify-center" aria-live="polite">
            {slide.kind === "end" ? (
              <div key="end" className="hero-reel-in">
                <BrandMark className="mx-auto h-14 w-14" />
                <p className="mt-3 font-sans text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                  {slide.brand}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-cobalt sm:text-sm">
                  {slide.line}
                </p>
                <p className="mt-2 text-base text-mist sm:text-lg">{slide.promise}</p>
              </div>
            ) : (
              <div key={slide.title} className="hero-reel-in">
                <p className="text-xs font-medium uppercase tracking-[0.18em] sm:text-sm" style={{ color: slide.accent }}>
                  {slide.kicker}
                </p>
                <p className="mt-2 font-sans text-3xl font-bold text-paper sm:text-4xl">{slide.title}</p>
                <p className="mt-2 text-sm text-mist sm:text-base">{slide.note}</p>
              </div>
            )}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1" aria-hidden="true">
          {SLIDES.map((item, i) => (
            <span
              key={item.kind === "end" ? "end" : item.title}
              className={`h-1 rounded-full transition-all ${i === index ? "w-4" : "w-1 bg-cobalt/25"}`}
              style={i === index ? { background: item.accent } : undefined}
            />
          ))}
        </div>
      </div>
      <p className="sr-only">
        Short loop of G-Marketing channels: Google Ads, Meta, LinkedIn, YouTube,
        SEO, local density, and global market cells. Ends on G-Marketing,
        Multi-Market Expertise, Advertising. Marketing. Growth.
      </p>
    </div>
  );
}
