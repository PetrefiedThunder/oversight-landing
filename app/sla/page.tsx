export const metadata = {
  title: "Service Level Agreement — Sentinel",
  description:
    "Sentinel's published SLA for the public API: uptime targets, calculation method, and credit structure for the Pro plan.",
  robots: { index: true, follow: true },
};

export default function SLAPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-300">
      <header className="border-b border-neutral-900">
        <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight text-white">
            Sentinel
          </a>
          <nav className="text-sm flex gap-6">
            <a href="/docs" className="hover:text-white">Docs</a>
            <a href="/pricing" className="hover:text-white">Pricing</a>
            <a href="/status" className="hover:text-white">Status</a>
            <a href="/sla" className="text-white">SLA</a>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-14 leading-7">
        <p className="text-sm text-neutral-500 mb-2">Last updated: 2026-05-26</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white mb-4">
          Service Level Agreement
        </h1>
        <p className="text-neutral-400 mb-12">
          This SLA covers the Sentinel public API at{" "}
          <code>api.pauseapi.app</code> and the dashboard at{" "}
          <code>app.pauseapi.app</code>. Effective for any customer on the Pro
          plan and above; Free tier is offered on a best-effort basis without
          SLA commitments.
        </p>

        <Section title="Uptime commitment">
          <table className="w-full text-sm border border-neutral-800 my-6">
            <thead className="bg-neutral-950 text-neutral-400">
              <tr>
                <th className="text-left px-3 py-2 border-b border-neutral-800">Plan</th>
                <th className="text-left px-3 py-2 border-b border-neutral-800">Monthly Uptime Target</th>
                <th className="text-left px-3 py-2 border-b border-neutral-800">Measurement window</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 border-b border-neutral-900">Free</td>
                <td className="px-3 py-2 border-b border-neutral-900">Best effort (no SLA)</td>
                <td className="px-3 py-2 border-b border-neutral-900">—</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-neutral-900">Pro</td>
                <td className="px-3 py-2 border-b border-neutral-900 text-white">99.5 %</td>
                <td className="px-3 py-2 border-b border-neutral-900">Calendar month, UTC</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Enterprise</td>
                <td className="px-3 py-2 text-white">99.9 % (negotiable to 99.99 %)</td>
                <td className="px-3 py-2">Calendar month, UTC</td>
              </tr>
            </tbody>
          </table>
        </Section>

        <Section title="What counts as downtime">
          <p>
            Sentinel is considered <b>down</b> for a given minute when both of
            the following hold:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>
              At least three consecutive synthetic probes against{" "}
              <code>https://api.pauseapi.app/health</code> from at least two
              regions return non-2xx or fail to connect.
            </li>
            <li>
              The failure is not caused by (a) maintenance announced ≥ 72 hours
              in advance, (b) customer-side networking, (c) abuse / DOS
              attempts, or (d) a Force Majeure event.
            </li>
          </ul>
          <p className="mt-4">
            Uptime % for a month is calculated as{" "}
            <code>(total_minutes − down_minutes) / total_minutes × 100</code>,
            rounded down to two decimals.
          </p>
        </Section>

        <Section title="Service credits (Pro)">
          <p>
            If we miss the monthly uptime target, you can claim a credit on
            your next invoice equal to the percentage shown:
          </p>
          <table className="w-full text-sm border border-neutral-800 my-6">
            <thead className="bg-neutral-950 text-neutral-400">
              <tr>
                <th className="text-left px-3 py-2 border-b border-neutral-800">Monthly Uptime achieved</th>
                <th className="text-left px-3 py-2 border-b border-neutral-800">Credit on next invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 border-b border-neutral-900">≥ 99.5 %</td>
                <td className="px-3 py-2 border-b border-neutral-900">0 %</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-neutral-900">99.0 % – 99.49 %</td>
                <td className="px-3 py-2 border-b border-neutral-900">10 %</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-neutral-900">95.0 % – 98.99 %</td>
                <td className="px-3 py-2 border-b border-neutral-900">25 %</td>
              </tr>
              <tr>
                <td className="px-3 py-2">&lt; 95.0 %</td>
                <td className="px-3 py-2">50 %</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-neutral-500">
            Credits are not refunds. The maximum monthly credit is 50 % of that
            month's invoice. Credits expire 12 months from issue.
          </p>
        </Section>

        <Section title="How to claim a credit">
          <p>
            Email <a href="mailto:support@regengine.co" className="text-white underline">support@regengine.co</a>{" "}
            within 30 days of the calendar month in question. Include:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Your tenant ID (<code>ten_…</code>)</li>
            <li>The month being claimed</li>
            <li>Optional: your own monitoring data, if relevant</li>
          </ul>
          <p className="mt-4">
            We review and respond within 5 business days. We publish historical
            uptime on the <a href="/status" className="text-white underline">status page</a> — if our number
            says we hit the target, we'll explain. If our number disagrees with
            your data, we'll investigate together.
          </p>
        </Section>

        <Section title="Maintenance">
          <p>
            Planned maintenance windows are announced at least 72 hours in
            advance via:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Email to the account-owner address on file</li>
            <li>Notice on the <a href="/status" className="text-white underline">status page</a></li>
          </ul>
          <p className="mt-4">
            We aim to schedule maintenance during low-traffic windows (Saturdays 06:00 UTC).
          </p>
        </Section>

        <Section title="Out of scope">
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <b>Webhook delivery</b> success to your endpoint — we retry 3
              times with exponential backoff (1 s, 4 s, 16 s) but cannot
              guarantee delivery if your endpoint is unreachable.
            </li>
            <li>
              <b>Notification delivery</b> via Resend (email) or Twilio (SMS) —
              their SLAs govern. We pass through any vendor-side outage.
            </li>
            <li>
              <b>Free-tier service</b> is offered without uptime guarantees.
            </li>
          </ul>
        </Section>

        <Section title="Force Majeure">
          <p>
            Outages caused by events outside our reasonable control (regional
            cloud-provider failures, cable cuts, sanctioned-network actor
            attacks, governmental action) are excluded from uptime calculations
            for the duration of the underlying event plus 4 hours of recovery.
          </p>
        </Section>

        <Section title="Changes to this SLA">
          <p>
            We may revise this SLA with at least 30 days' notice via the same
            channels used for maintenance announcements. Existing annual
            contracts are honored on the SLA in effect at signature for the
            duration of the contract term.
          </p>
        </Section>

        <p className="text-sm text-neutral-500 mt-12">
          Questions? Email{" "}
          <a href="mailto:support@regengine.co" className="text-white underline">
            support@regengine.co
          </a>
          .
        </p>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold tracking-tight text-white mb-3">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
