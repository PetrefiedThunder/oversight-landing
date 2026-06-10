export const metadata = {
  title: "Subprocessors — Sentinel",
  description:
    "Vendors Sentinel uses to operate the service, what data they process, and where they're located. Notification-on-change policy.",
  robots: { index: true, follow: true },
};

const subprocessors = [
  {
    name: "Railway",
    purpose: "Application hosting (sentinel-api), Postgres, Redis",
    region: "us-east (Northern Virginia)",
    data: "All tenant data including api keys (hashed), approval records, audit log",
    website: "https://railway.app",
    dpa: "https://railway.com/legal/dpa",
  },
  {
    name: "Vercel",
    purpose: "Hosting for dashboard (app.pauseapi.app) and marketing/docs (pauseapi.app), edge proxy for api.pauseapi.app",
    region: "Global edge network",
    data: "TLS termination only — request/response bodies passed through, never stored",
    website: "https://vercel.com",
    dpa: "https://vercel.com/legal/dpa",
  },
  {
    name: "Resend",
    purpose: "Transactional email delivery (approval emails, welcome, recovery)",
    region: "us-east-1 (AWS)",
    data: "Approver email addresses, approval metadata in email body",
    website: "https://resend.com",
    dpa: "https://resend.com/legal/dpa",
  },
  {
    name: "Twilio",
    purpose: "Transactional SMS delivery (approval texts) — when customer enables sms: approvers",
    region: "us1",
    data: "Approver phone numbers, approval metadata in SMS body",
    website: "https://twilio.com",
    dpa: "https://www.twilio.com/legal/dpa",
  },
  {
    name: "Stripe",
    purpose: "Subscription billing and payment processing for Pro plan and above",
    region: "us-east (Stripe-managed)",
    data: "Customer email, billing address, payment-method tokens (we never see card numbers)",
    website: "https://stripe.com",
    dpa: "https://stripe.com/legal/dpa",
  },
  {
    name: "Sentry (when enabled)",
    purpose: "Error monitoring on the API service",
    region: "us-east (AWS)",
    data: "Stack traces, request URLs, request IDs. Never request bodies, never approval contents (send_default_pii=False)",
    website: "https://sentry.io",
    dpa: "https://sentry.io/legal/dpa",
  },
  {
    name: "GitHub",
    purpose: "Source-code hosting, CI/CD (build, test, publish SDKs)",
    region: "us-east (Microsoft Azure)",
    data: "Source code (no customer data)",
    website: "https://github.com",
    dpa: "https://github.com/customer-terms/dpa",
  },
];

export default function SubprocessorsPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-300">
      <header className="border-b border-neutral-900">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight text-white">Sentinel</a>
          <nav className="text-sm flex gap-6">
            <a href="/docs" className="hover:text-white">Docs</a>
            <a href="/pricing" className="hover:text-white">Pricing</a>
            <a href="/sla" className="hover:text-white">SLA</a>
            <a href="/subprocessors" className="text-white">Subprocessors</a>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-14 leading-7">
        <p className="text-sm text-neutral-500 mb-2">Last updated: 2026-05-26</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white mb-4">
          Subprocessors
        </h1>
        <p className="text-neutral-400 mb-10">
          To operate Sentinel we use the third-party vendors listed below. We
          maintain executed Data Processing Agreements (DPAs) with each. We
          minimize the data shared, and never share customer approval content
          with vendors not in this list.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-neutral-800">
            <thead className="bg-neutral-950 text-neutral-400">
              <tr>
                <th className="text-left px-3 py-3 border-b border-neutral-800">Vendor</th>
                <th className="text-left px-3 py-3 border-b border-neutral-800">Purpose</th>
                <th className="text-left px-3 py-3 border-b border-neutral-800">Region</th>
                <th className="text-left px-3 py-3 border-b border-neutral-800">Data processed</th>
              </tr>
            </thead>
            <tbody>
              {subprocessors.map((s) => (
                <tr key={s.name} className="border-b border-neutral-900 align-top">
                  <td className="px-3 py-3 text-white font-medium">
                    {s.name}
                    <div className="text-xs text-neutral-500 mt-1 space-x-3 font-normal">
                      <a href={s.website} target="_blank" rel="noopener" className="hover:text-white">site</a>
                      <a href={s.dpa} target="_blank" rel="noopener" className="hover:text-white">DPA</a>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-neutral-300">{s.purpose}</td>
                  <td className="px-3 py-3 text-neutral-400">{s.region}</td>
                  <td className="px-3 py-3 text-neutral-300">{s.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-white mt-12 mb-3">
          Notification of changes
        </h2>
        <p className="mb-3">
          We will notify customers at least <b>14 days</b> before adding a new
          subprocessor that will process customer data. Notifications go to the
          account owner's email and are mirrored on this page.
        </p>
        <p>
          If you object to a new subprocessor, email{" "}
          <a href="mailto:support@regengine.co" className="text-white underline">
            support@regengine.co
          </a>{" "}
          within 14 days of the notification. We'll work with you to find an
          alternative or, if necessary, allow you to terminate the affected
          service with a pro-rated refund.
        </p>

        <h2 className="text-xl font-semibold text-white mt-10 mb-3">Sub-tier providers</h2>
        <p>
          Several of the vendors above run on AWS or GCP. We treat AWS and GCP
          as sub-processors of Railway, Resend, Twilio, and Sentry; we do not
          have direct contracts with them.
        </p>

        <p className="text-sm text-neutral-500 mt-12">
          For DPA execution requests, see <a href="/privacy" className="text-white underline">/privacy</a>{" "}
          or email{" "}
          <a href="mailto:support@regengine.co" className="text-white underline">
            support@regengine.co
          </a>
          .
        </p>
      </article>
    </main>
  );
}
