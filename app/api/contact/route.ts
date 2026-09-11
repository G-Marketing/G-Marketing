import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Lead = {
  name?: string;
  email?: string;
  company?: string;
  website?: string;
  market?: string;
  service?: string;
  budget?: string;
  message?: string;
  company_website?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const body = (await request.json()) as Lead;

  if (body.company_website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const company = String(body.company || "").trim();
  const message = String(body.message || "").trim();

  if (name.length < 2 || !isEmail(email) || company.length < 2 || message.length < 12) {
    return NextResponse.json(
      { error: "Please complete name, work email, company, and a short brief." },
      { status: 400 },
    );
  }

  const record = {
    receivedAt: new Date().toISOString(),
    name,
    email,
    company,
    website: String(body.website || "").trim(),
    market: String(body.market || "").trim(),
    service: String(body.service || "").trim(),
    budget: String(body.budget || "").trim(),
    message,
    utm_source: String(body.utm_source || "").trim(),
    utm_medium: String(body.utm_medium || "").trim(),
    utm_campaign: String(body.utm_campaign || "").trim(),
  };

  const dir = path.join(process.cwd(), ".data");
  const file = path.join(dir, "leads.json");
  await mkdir(dir, { recursive: true });
  let existing: unknown[] = [];
  try {
    existing = JSON.parse(await readFile(file, "utf8")) as unknown[];
  } catch {
    existing = [];
  }
  existing.push(record);
  await writeFile(file, JSON.stringify(existing, null, 2), "utf8");

  return NextResponse.json({ ok: true });
}
