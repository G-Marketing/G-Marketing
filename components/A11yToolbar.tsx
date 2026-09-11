"use client";

import { useEffect, useState, type ReactNode } from "react";
import { SITE } from "@/lib/site";
import {
  IconA11y,
  IconClose,
  IconContrast,
  IconFile,
  IconLink,
  IconMinus,
  IconPause,
  IconPlus,
  IconReset,
  IconType,
} from "./icons";

const STORAGE_KEY = "gm-a11y";
const STATEMENT_EVENT = "gm-a11y-statement";

type A11yState = {
  zoom: number;
  readable: boolean;
  contrast: boolean;
  invert: boolean;
  gray: boolean;
  links: boolean;
  motion: boolean;
  focus: boolean;
};

const DEFAULTS: A11yState = {
  zoom: 100,
  readable: false,
  contrast: false,
  invert: false,
  gray: false,
  links: false,
  motion: false,
  focus: false,
};

function loadState(): A11yState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return DEFAULTS;
  }
}

function applyState(state: A11yState) {
  const root = document.documentElement;
  root.style.fontSize = `${state.zoom}%`;
  root.classList.toggle("a11y-readable", state.readable);
  root.classList.toggle("a11y-contrast", state.contrast);
  root.classList.toggle("a11y-invert", state.invert);
  root.classList.toggle("a11y-gray", state.gray);
  root.classList.toggle("a11y-links", state.links);
  root.classList.toggle("a11y-motion", state.motion);
  root.classList.toggle("a11y-focus", state.focus);
}

export function A11yToolbar() {
  const [open, setOpen] = useState(false);
  const [statement, setStatement] = useState(false);
  const [state, setState] = useState<A11yState>(DEFAULTS);

  useEffect(() => {
    const next = loadState();
    setState(next);
    applyState(next);
  }, []);

  useEffect(() => {
    const openStatement = () => {
      setOpen(true);
      setStatement(true);
    };
    window.addEventListener(STATEMENT_EVENT, openStatement);
    return () => window.removeEventListener(STATEMENT_EVENT, openStatement);
  }, []);

  useEffect(() => {
    if (!open && !statement) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (statement) setStatement(false);
      else setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, statement]);

  const update = (patch: Partial<A11yState>) => {
    const next = { ...state, ...patch };
    setState(next);
    applyState(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const reset = () => {
    setState(DEFAULTS);
    applyState(DEFAULTS);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <>
      <div className="fixed left-4 top-1/2 z-[90] -translate-y-1/2">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="a11y-panel"
          aria-label={open ? "Close accessibility menu" : "Open accessibility menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-cobalt/50 bg-ink/90 text-cobalt shadow-glow backdrop-blur-md hover:border-paper hover:text-paper"
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconA11y className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="fixed left-20 top-4 bottom-4 z-[90] flex items-center">
          <div
            id="a11y-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="a11y-title"
            className="flex max-h-full w-72 flex-col overflow-hidden rounded-3xl border border-line bg-panel/95 p-4 shadow-glow backdrop-blur-md"
          >
            <h2 id="a11y-title" className="shrink-0 text-base font-bold text-paper">
              Accessibility menu
            </h2>
            <p className="mt-1 shrink-0 text-xs leading-5 text-mist">
              Aligns with WCAG 2.2 Level AA and EN 301 549.
            </p>

            <div className="mt-4 min-h-0 flex-1 space-y-2 overflow-y-auto">
              <div className="flex items-center justify-between rounded-xl border border-line px-3 py-2">
                <span className="flex items-center gap-2 text-sm text-paper">
                  <IconType className="h-4 w-4" /> Text size
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    aria-label="Decrease text size"
                    className="rounded-lg p-1 hover:bg-white/10"
                    onClick={() => update({ zoom: Math.max(100, state.zoom - 12.5) })}
                  >
                    <IconMinus className="h-4 w-4" />
                  </button>
                  <span className="w-10 text-center text-xs tabular-nums">{state.zoom}%</span>
                  <button
                    type="button"
                    aria-label="Increase text size"
                    className="rounded-lg p-1 hover:bg-white/10"
                    onClick={() => update({ zoom: Math.min(175, state.zoom + 12.5) })}
                  >
                    <IconPlus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <Toggle
                active={state.readable}
                onClick={() => update({ readable: !state.readable })}
                icon={<IconType className="h-4 w-4" />}
                label="Readable font"
              />
              <Toggle
                active={state.contrast}
                onClick={() => update({ contrast: !state.contrast })}
                icon={<IconContrast className="h-4 w-4" />}
                label="High contrast"
              />
              <Toggle
                active={state.invert}
                onClick={() => update({ invert: !state.invert })}
                icon={<IconContrast className="h-4 w-4" />}
                label="Invert colours"
              />
              <Toggle
                active={state.gray}
                onClick={() => update({ gray: !state.gray })}
                icon={<IconContrast className="h-4 w-4" />}
                label="Greyscale"
              />
              <Toggle
                active={state.links}
                onClick={() => update({ links: !state.links })}
                icon={<IconLink className="h-4 w-4" />}
                label="Underline links"
              />
              <Toggle
                active={state.motion}
                onClick={() => update({ motion: !state.motion })}
                icon={<IconPause className="h-4 w-4" />}
                label="Stop animations"
              />
              <Toggle
                active={state.focus}
                onClick={() => update({ focus: !state.focus })}
                icon={<IconA11y className="h-4 w-4" />}
                label="Strong keyboard focus"
              />
            </div>

            <div className="mt-3 flex shrink-0 flex-col gap-2">
              <button
                type="button"
                onClick={() => setStatement(true)}
                className="flex items-center justify-center gap-2 rounded-xl border border-line px-3 py-2 text-sm text-cobalt hover:bg-white/5"
              >
                <IconFile className="h-4 w-4" /> Accessibility statement
              </button>
              <button
                type="button"
                onClick={reset}
                className="flex items-center justify-center gap-2 rounded-xl border border-line px-3 py-2 text-sm text-paper hover:bg-white/5"
              >
                <IconReset className="h-4 w-4" /> Reset settings
              </button>
            </div>
          </div>
        </div>
      )}

      {statement && (
        <div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/70 p-4"
          onClick={() => setStatement(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="a11y-statement-title"
            className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-line bg-panel p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="a11y-statement-title" className="text-xl font-bold text-paper">
              Accessibility statement
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-mist">
              <p>
                G-Marketing works to make this website usable in line with WCAG 2.2
                Level AA and EN 301 549.
              </p>
              <p>
                Use the accessibility menu to change text size, switch to a readable
                font, raise contrast, invert colours, greyscale the page, underline
                links, stop animations, and strengthen keyboard focus. The site also
                supports keyboard navigation and a skip-to-content link.
              </p>
              <p>
                Accessibility contact:{" "}
                <a className="text-cobalt underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
                .
              </p>
              <p>Statement updated 11 September 2026.</p>
            </div>
            <button
              type="button"
              onClick={() => setStatement(false)}
              className="mt-5 rounded-full bg-cobalt px-5 py-2 text-sm font-bold text-paper"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Toggle({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-sm transition ${
        active
          ? "border-cobalt/50 bg-cobalt/10 text-paper"
          : "border-line text-paper hover:bg-white/5"
      }`}
    >
      <span className="flex items-center gap-2">
        {icon} {label}
      </span>
      <span className="text-xs text-mist">{active ? "On" : "Off"}</span>
    </button>
  );
}
