"use client";

import { useEffect, useState } from "react";

export function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(localStorage.getItem("gm-cookie-ack") !== "1");
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-line bg-panel/95 p-4 text-sm text-mist shadow-glow backdrop-blur md:flex-row md:items-center">
        <p>
          Essential cookies only for now. Analytics and ads pixels stay off until
          you approve them. See{" "}
          <a href="/privacy" className="text-paper underline-offset-4 hover:underline">
            Privacy
          </a>
          .
        </p>
        <button
          type="button"
          className="shrink-0 rounded-full bg-cobalt px-4 py-2 text-paper"
          onClick={() => {
            localStorage.setItem("gm-cookie-ack", "1");
            setShow(false);
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}
