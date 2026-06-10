export const metadata = {
  title: "Pricing — Sentinel",
  description:
    "Sentinel pricing: a free tier for getting started, Pro at $199/mo with unlimited approvals and a 99.5% SLA, and Enterprise for custom needs.",
  robots: { index: true, follow: true },
};

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "",
    highlight: false,
    features: [
      "100 approvals/mo",
      "Email approver channel",
      "Dashboard",
      "Audit log (30-day retention)",
      "Community support",
    ],
    cta: { label: "Start free", href: "https://app.pauseapi.app/signup" },
  },
  {
    name: "Pro",
    price: "$199",
    period: "/mo",
    highlight: true,
    features: [
      "Unlimited approvals",
      "SMS approver channel",
      "Webhooks (HMAC-signed)",
      "Branded sender domain",
      "Audit CSV export",
      "99.5% SLA",
      "Priority email support",
    ],
    cta: { label: "Upgrade in dashboard", href: "https://app.pauseapi.app/billing" },
  },
  {
    name: "Enterprise",
    price: "Talk to us",
    period: "",
    highlight: false,
    features: [
      "Everything in Pro",
      "SSO (roadmap)",
      "Custom retention",
      "DPA",
      "Dedicated support channel",
      "Security review w/ threat model + pentest (under NDA)",
    ],
    cta: {
      label: "Email us",
      href: "mailto:support@regengine.co?subject=Sentinel%20Enterprise",
    },
  },
];

const FAQS = [
  {
    q: "What counts as an approval?",
    a: (
      <>
        One <code>POST /v1/approvals</code>. Each request your agent submits for
        human sign-off counts as one approval, regardless of how it's decided
        (approved, rejected, or expired).
      </>
    ),
  },
  {
    q: "Do unused approvals roll over?",
    a: <>No. The Free tier's 100 approvals reset each month and unused approvals do not roll over.</>,
  },
  {
    q: "Can I self-host?",
    a: (
      <>
        The backend is source-available, but the hosted service is the supported
        path. Enterprise on-prem deployment is on the roadmap — email us if
        that's a requirement.
      </>
    ),
  },
  {
    q: "How do I cancel?",
    a: (
      <>
        Anytime, from the dashboard. You keep access through the end of your
        current billing period.
      </>
    ),
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-300">
      <header className="border-b border-neutral-900">
        <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight text-white">
            Sentinel
          </a>
          <nav className="text-sm flex gap-6">
            <a href="/docs" className="hover:text-white">Docs</a>
            <a href="/status" className="hover:text-white">Status</a>
            <a href="/sla" className="hover:text-white">SLA</a>
            <a href="/pricing" className="text-white">Pricing</a>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-14 leading-7">
        <p className="text-sm text-neutral-500 mb-2">
          Launch pricing — locked in for early customers
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white mb-4">
          Pricing
        </h1>
        <p className="text-neutral-400 mb-12 max-w-2xl">
          Start free, upgrade when your agents need more than 100 approvals a
          month. No per-seat pricing — you pay for the approval pipeline, not
          headcount.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-lg border p-6 ${
                tier.highlight
                  ? "border-white bg-neutral-950"
                  : "border-neutral-800"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-medium px-3 py-0.5 rounded-full">
                  Most popular
                </span>
              )}
              <h2 className="text-lg font-semibold text-white">{tier.name}</h2>
              <p className="mt-2 mb-6">
                <span className="text-3xl font-semibold text-white">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-neutral-500">{tier.period}</span>
                )}
              </p>
              <ul className="space-y-2 text-sm flex-1 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-white" aria-hidden="true">✓</span>
                    <span>
                      {feature === "99.5% SLA" ? (
                        <a href="/sla" className="text-white underline">
                          99.5% SLA
                        </a>
                      ) : (
                        feature
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.cta.href}
                className={`block text-center text-sm font-medium px-4 py-2 rounded ${
                  tier.highlight
                    ? "bg-white text-black"
                    : "border border-neutral-700 text-white hover:border-neutral-500"
                }`}
              >
                {tier.cta.label}
              </a>
            </div>
          ))}
        </div>

        <section className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white mb-6">
            FAQ
          </h2>
          <div className="space-y-8">
            {FAQS.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-lg font-medium text-white mb-2">{faq.q}</h3>
                <p className="text-neutral-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

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
