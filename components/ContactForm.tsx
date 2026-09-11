"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const SERVICES = ["Advertising", "Marketing", "Growth", "Not sure yet"] as const;
const MARKETS = ["Local", "Global", "Both"] as const;

export function ContactForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [message, setMessage] = useState("");

  const defaults = useMemo(
    () => ({
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
      service: params.get("service") ?? "",
    }),
    [params],
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Could not send. Try email instead.");
      }
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "generate_lead",
        lead_source: data.utm_source || "site",
      });
      window.location.href = "/thank-you";
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Could not send.");
    }
  }

  const field =
    "w-full rounded-xl border border-line bg-ink px-4 py-3 text-sm text-paper outline-none ring-cobalt placeholder:text-mist/70 focus:ring-2";

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" />
      <input type="hidden" name="utm_source" defaultValue={defaults.utm_source} />
      <input type="hidden" name="utm_medium" defaultValue={defaults.utm_medium} />
      <input type="hidden" name="utm_campaign" defaultValue={defaults.utm_campaign} />

      <label className="grid gap-1 text-sm">
        <span>Name</span>
        <input className={field} name="name" required autoComplete="name" />
      </label>
      <label className="grid gap-1 text-sm">
        <span>Work email</span>
        <input className={field} name="email" type="email" required autoComplete="email" />
      </label>
      <label className="grid gap-1 text-sm">
        <span>Company</span>
        <input className={field} name="company" required autoComplete="organization" />
      </label>
      <label className="grid gap-1 text-sm">
        <span>Website</span>
        <input className={field} name="website" type="url" placeholder="https://" autoComplete="url" />
      </label>
      <label className="grid gap-1 text-sm">
        <span>Market focus</span>
        <select className={field} name="market" defaultValue="Both">
          {MARKETS.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        <span>Primary interest</span>
        <select className={field} name="service" defaultValue={defaults.service || "Not sure yet"}>
          {SERVICES.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        <span>Monthly media / growth budget</span>
        <select className={field} name="budget" defaultValue="Exploring">
          <option>Exploring</option>
          <option>Under $5k</option>
          <option>$5k–$20k</option>
          <option>$20k–$75k</option>
          <option>$75k+</option>
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        <span>What needs to move</span>
        <textarea
          className={`${field} min-h-32`}
          name="message"
          required
          minLength={12}
          placeholder="The number, the market, the constraint."
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-cobalt px-5 py-3 text-sm font-medium text-paper disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request the diagnostic"}
      </button>
      {message && <p className="text-sm text-red-300">{message}</p>}
      <p className="text-xs text-mist">
        We reply to work emails. No newsletter signup is attached to this form.
      </p>
    </form>
  );
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}
