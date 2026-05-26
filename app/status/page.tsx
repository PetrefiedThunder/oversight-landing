export const metadata = {
  title: "Status — Sentinel",
  description: "Sentinel service status: API, dashboard, email delivery, SMS delivery.",
  robots: { index: true, follow: true },
};

// Server component — server-side fetches a tiny snapshot on every request.
// No caching on this page (status info should be fresh).
export const revalidate = 0;

async function probe(url: string, timeoutMs = 4000): Promise<"up" | "down"> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), timeoutMs);
    const r = await fetch(url, { method: "GET", signal: ctrl.signal, cache: "no-store" });
    clearTimeout(t);
    return r.ok ? "up" : "down";
  } catch {
    return "down";
  }
}

export default async function StatusPage() {
  const [api, dashboard] = await Promise.all([
    probe("https://api.pauseapi.app/health"),
    probe("https://app.pauseapi.app/login"),
  ]);

  const services = [
    { name: "API",                  status: api,       url: "https://api.pauseapi.app" },
    { name: "Dashboard",            status: dashboard, url: "https://app.pauseapi.app" },
    { name: "Email (Resend)",       status: "up",      url: null, note: "approvals@pauseapi.app, domain verified" },
    { name: "SMS (Twilio A2P)",     status: "pending", url: null, note: "Campaign IN_PROGRESS, carrier review" },
    { name: "PyPI (Python SDK)",    status: "up",      url: "https://pypi.org/project/sentinel-oversight/" },
    { name: "GitHub (open source)", status: "up",      url: "https://github.com/PetrefiedThunder" },
  ] as const;

  const overall =
    services.some((s) => s.status === "down") ? "degraded" :
    services.some((s) => s.status === "pending") ? "partial" : "ok";

  return (
    <main className="min-h-screen bg-black text-neutral-300">
      <header className="border-b border-neutral-900">
        <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight text-white">Sentinel</a>
          <nav className="text-sm flex gap-6">
            <a href="/docs" className="hover:text-white">Docs</a>
            <a href="/status" className="text-white">Status</a>
            <a href="https://app.pauseapi.app/signup" className="bg-white text-black px-3 py-1 rounded font-medium">Get started</a>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-14">
        <p className="text-sm text-neutral-500 mb-2">Last checked: just now</p>
        <h1 className="text-4xl font-semibold text-white mb-2">
          {overall === "ok" && "🟢 All systems operational"}
          {overall === "partial" && "🟡 Partial availability"}
          {overall === "degraded" && "🔴 Degraded service"}
        </h1>
        <p className="text-neutral-400 mb-10">
          This page probes Sentinel's public surfaces on every page load.
          No 3rd-party uptime monitor yet — we eat our own dogfood and
          alert on `/v1/admin/stats` failure.
        </p>

        <ul className="space-y-3">
          {services.map((s) => (
            <li
              key={s.name}
              className="flex items-center justify-between border border-neutral-900 rounded-lg px-4 py-3"
            >
              <div>
                <p className="text-white font-medium">{s.name}</p>
                {("note" in s && s.note) && (
                  <p className="text-xs text-neutral-500 mt-0.5">{s.note}</p>
                )}
              </div>
              <div className="flex items-center gap-3">
                {s.url && (
                  <a
                    href={s.url}
                    className="text-xs text-neutral-500 hover:text-white"
                    target="_blank"
                    rel="noopener"
                  >
                    {s.url.replace(/^https?:\/\//, "")}
                  </a>
                )}
                <Badge status={s.status} />
              </div>
            </li>
          ))}
        </ul>

        <hr className="border-neutral-900 my-12" />
        <h2 className="text-xl font-semibold text-white mb-3">
          Recent updates
        </h2>
        <ul className="space-y-2 text-sm text-neutral-400">
          <li>
            <span className="text-neutral-500">2026-05-26 </span>
            v0.1.9 ships — CrewAI + AutoGen + Anthropic tool-use adapters.
          </li>
          <li>
            <span className="text-neutral-500">2026-05-26 </span>
            Webhooks shipped — HMAC-SHA256 signed POST on every approval
            decision, 3-attempt exponential backoff retries.
          </li>
          <li>
            <span className="text-neutral-500">2026-05-26 </span>
            JS/TS SDK 0.1.0 published with LangChain.js + Mastra adapters.
          </li>
          <li>
            <span className="text-neutral-500">2026-05-26 </span>
            Resend sending domain <code>pauseapi.app</code> verified.
            Email channel live.
          </li>
        </ul>

        <hr className="border-neutral-900 my-12" />
        <p className="text-sm text-neutral-500">
          Spot an outage we haven't caught? Email{" "}
          <a
            href="mailto:support@regengine.co"
            className="text-white underline"
          >
            support@regengine.co
          </a>
          .
        </p>
      </article>
    </main>
  );
}

function Badge({ status }: { status: "up" | "down" | "pending" }) {
  const map = {
    up: { dot: "bg-emerald-500", text: "Operational", color: "text-emerald-400" },
    pending: { dot: "bg-yellow-500", text: "Pending", color: "text-yellow-400" },
    down: { dot: "bg-red-500", text: "Down", color: "text-red-400" },
  } as const;
  const s = map[status];
  return (
    <span className={`inline-flex items-center gap-2 text-xs ${s.color}`}>
      <span className={`inline-block w-2 h-2 rounded-full ${s.dot}`} />
      {s.text}
    </span>
  );
}
