/**
 * Production verification for g-marketing.net
 * Run after deploy: node agent-workspace/tickets/001-marketing-site/verify-production.mjs
 */
const BASE = process.argv[2] || "https://www.g-marketing.net";

const routes = [
  { path: "/", expect: 200, contains: ["G-Marketing", "Book a growth diagnostic", "Advertising. Marketing. Growth.", "Open accessibility menu", "Produce quality leads", "Terms of Use"] },
  { path: "/services", expect: 200, contains: ["Three lines"] },
  { path: "/services/advertising", expect: 200, contains: ["Paid media", "Buy media against CRM-qualified"] },
  { path: "/services/marketing", expect: 200, contains: ["findable", "commercial intent"] },
  { path: "/services/growth", expect: 200, contains: ["yield", "holdouts or geo splits"] },
  { path: "/markets", expect: 200, contains: ["A local win"] },
  { path: "/approach", expect: 200, contains: ["Diagnostic"] },
  { path: "/contact", expect: 200, contains: ["Book the diagnostic"] },
  { path: "/privacy", expect: 200, contains: ["Privacy"] },
  { path: "/terms", expect: 200, contains: ["Terms of Use"] },
  { path: "/thank-you", expect: 200, contains: ["Received"] },
  { path: "/sitemap.xml", expect: 200, contains: ["https://www.g-marketing.net"] },
  { path: "/robots.txt", expect: 200, contains: ["Sitemap:"] },
  { path: "/images/hero-command.jpg", expect: 200 },
];

const guards = [
  { url: "https://www.m-control.biz/", contains: "M-Control" },
  { url: "https://www.m-control.biz/iminterview", contains: "IM Interview" },
];

let failed = 0;

async function get(url, redirect = "follow") {
  const res = await fetch(url, { redirect, headers: { "user-agent": "g-marketing-verify" } });
  const text = res.status === 308 || res.status === 301 || res.status === 302 ? "" : await res.text();
  return { res, text };
}

async function checkRoute(route) {
  const url = BASE.replace(/\/$/, "") + route.path;
  const { res, text } = await get(url);
  const title = (text.match(/<title>(.*?)<\/title>/) || [])[1] || "";
  const missing = (route.contains || []).filter((s) => !text.includes(s));
  const ok = res.status === route.expect && missing.length === 0;
  if (!ok) failed += 1;
  console.log(
    `${ok ? "PASS" : "FAIL"} ${res.status} ${route.path}  title=${title}` +
      (missing.length ? ` missing=${missing.join("|")}` : ""),
  );
}

async function checkApex() {
  const res = await fetch("https://g-marketing.net/", { redirect: "manual" });
  const loc = res.headers.get("location") || "";
  const ok = res.status === 308 && loc.includes("www.g-marketing.net");
  if (!ok) failed += 1;
  console.log(`${ok ? "PASS" : "FAIL"} ${res.status} apex redirect -> ${loc}`);
}

async function checkSeoHome() {
  const { res, text } = await get(BASE + "/");
  const canonical = (text.match(/rel="canonical" href="([^"]+)"/) || [])[1];
  const jsonld = text.includes("application/ld+json");
  const og = (text.match(/property="og:image" content="([^"]+)"/) || [])[1];
  const ogTitle = (text.match(/property="og:title" content="([^"]+)"/) || [])[1];
  const hebrewPlaceholder = text.includes("האתר בהקמה");
  const ogOk = Boolean(og) && og.includes("og-preview.jpg");
  const titleOk = (ogTitle || "").includes("Advertising. Marketing. Growth.") && !(ogTitle || "").includes("and growth");
  const ok =
    res.status === 200 &&
    (canonical === "https://www.g-marketing.net/" ||
      canonical === "https://www.g-marketing.net") &&
    jsonld &&
    ogOk &&
    titleOk &&
    !hebrewPlaceholder;
  if (!ok) failed += 1;
  console.log(
    `${ok ? "PASS" : "FAIL"} home SEO canonical=${canonical} jsonld=${jsonld} og=${og} ogTitle=${ogTitle} placeholder=${hebrewPlaceholder}`,
  );
}

async function checkGuards() {
  for (const g of guards) {
    const { res, text } = await get(g.url);
    const ok = res.status === 200 && text.includes(g.contains);
    if (!ok) failed += 1;
    console.log(`${ok ? "PASS" : "FAIL"} GUARD ${res.status} ${g.url}`);
  }
}

async function checkLeadApi() {
  const res = await fetch(BASE.replace(/\/$/, "") + "/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: "Verify Bot",
      email: "verify@g-marketing.net",
      company: "G-Marketing",
      message: "Production verification lead — may delete.",
      market: "Local",
      service: "Advertising",
    }),
  });
  const body = await res.text();
  const ok = res.status === 200 && body.includes('"ok":true');
  if (!ok) failed += 1;
  console.log(`${ok ? "PASS" : "FAIL"} POST /api/contact ${res.status} ${body.slice(0, 80)}`);
}

async function checkFavicon() {
  const { res, text } = await get(BASE.replace(/\/$/, "") + "/icon.svg");
  const opaque = text.includes("#f4f6f8") || text.includes('fill="#f4f6f8"');
  const ok = res.status === 200 && text.includes("<svg") && !opaque;
  if (!ok) failed += 1;
  console.log(`${ok ? "PASS" : "FAIL"} /icon.svg opaqueFill=${opaque}`);
}

const results = [];
for (const route of routes) {
  await checkRoute(route);
}
await checkApex();
await checkSeoHome();
await checkFavicon();
await checkLeadApi();
await checkGuards();

console.log(failed === 0 ? `\nALL CHECKS PASSED against ${BASE}` : `\n${failed} CHECK(S) FAILED against ${BASE}`);
process.exit(failed === 0 ? 0 : 1);
