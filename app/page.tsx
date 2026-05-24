const codeExample = `from sentinel import oversight

@oversight(risk_level="high", approvers=["finance@acme.com"])
def transfer_funds(amount: float, to_account: str) -> dict:
    """Wire transfer. Requires human approval before executing."""
    return banking_api.transfer(amount, to_account)`;

const features = [
  {
    eyebrow: "Integration",
    title: "Framework agnostic",
    body: "Works with LangChain, LlamaIndex, CrewAI, AutoGen, or your own loop. Just decorate the function.",
  },
  {
    eyebrow: "Trust",
    title: "Hash-chained audit log",
    body: "Every approval, decision, and execution is recorded with a cryptographic hash chain. Tamper-evident by default.",
  },
  {
    eyebrow: "Control",
    title: "Configurable fallbacks",
    body: "Block on timeout, execute on timeout, or escalate. You decide what's safe for each function.",
  },
];

const tiers = [
  {
    name: "Free",
    price: "$0",
    features: [
      "1,000 approvals/mo",
      "1 user",
      "Slack + email",
      "7-day audit retention",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$99/mo",
    features: [
      "50,000 approvals/mo",
      "10 users",
      "All integrations",
      "1-year audit retention",
      "Email support",
    ],
  },
  {
    name: "Scale",
    price: "$499/mo",
    features: [
      "Unlimited approvals",
      "Unlimited users",
      "SSO",
      "Infinite audit retention",
      "SLA, priority support",
    ],
  },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-neutral-900 bg-black/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight">Sentinel</a>
          <nav className="flex items-center gap-6 text-sm text-neutral-300">
            <a href="https://github.com/PetrefiedThunder/sentinel-sdk" className="hover:text-white">GitHub</a>
            <a href="https://github.com/PetrefiedThunder/sentinel-sdk#readme" className="hover:text-white">Docs</a>
            <a href="https://app.oversight.sh/login" className="hover:text-white">Sign in</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
        <div className="text-xs uppercase tracking-wider text-neutral-400 mb-6">Open source · MIT</div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
          Oversight infrastructure for AI agents.
        </h1>
        <p className="mt-6 text-neutral-400 max-w-2xl text-lg leading-relaxed">
          Stop your agents before they spend money, delete data, or send the wrong email. Add one decorator. Get human-in-the-loop approval, an immutable audit log, and oversight that actually works in production.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://app.oversight.sh/login"
            className="bg-white text-black px-5 py-2.5 rounded text-sm font-medium hover:bg-neutral-200"
          >
            Get an API key
          </a>
          <a
            href="https://github.com/PetrefiedThunder/sentinel-sdk"
            className="border border-neutral-700 px-5 py-2.5 rounded text-sm font-medium hover:border-neutral-500"
          >
            View on GitHub
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <pre className="border border-neutral-900 bg-neutral-950 rounded p-6 overflow-x-auto text-sm leading-relaxed text-neutral-200">
          <code>{codeExample}</code>
        </pre>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-neutral-900">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title}>
              <div className="text-xs uppercase tracking-wider text-neutral-500 mb-3">{f.eyebrow}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-neutral-900">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-wider text-neutral-500 mb-3">Pricing</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Simple per-approval pricing.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="border border-neutral-900 rounded p-6 flex flex-col">
              <div className="text-sm text-neutral-400">{t.name}</div>
              <div className="text-3xl font-semibold mt-2 mb-6">{t.price}</div>
              <ul className="space-y-2 text-sm text-neutral-400 flex-1">
                {t.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
              <a
                href="https://app.oversight.sh/login"
                className="mt-6 inline-block text-center bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-neutral-200"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-neutral-900 mt-24 py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-neutral-400">
          <div>
            © 2026 Built by the team at{" "}
            <a href="https://regengine.co" className="text-neutral-200 hover:text-white">RegEngine</a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
