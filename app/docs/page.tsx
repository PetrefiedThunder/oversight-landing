import Link from "next/link";

export const metadata = {
  title: "Docs — Sentinel",
  description:
    "Sentinel SDK docs — install, wrap a function with human approval, configure approvers, handle rejection and timeout.",
  robots: { index: true, follow: true },
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
        <a href={`#${id}`} className="hover:underline">
          {title}
        </a>
      </h2>
      <div className="space-y-4 leading-7 text-neutral-300">{children}</div>
    </section>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm overflow-x-auto leading-relaxed">
      <code className="font-mono">{children}</code>
    </pre>
  );
}

const TOC = [
  { id: "install", label: "Install" },
  { id: "quick-start", label: "Quick start" },
  { id: "approvers", label: "Approvers" },
  { id: "risk", label: "Risk levels" },
  { id: "errors", label: "Errors" },
  { id: "async", label: "Async functions" },
  { id: "langchain", label: "LangChain" },
  { id: "tenants", label: "Tenant settings" },
  { id: "audit", label: "Audit log" },
  { id: "webhooks", label: "Webhooks" },
  { id: "config", label: "Config" },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-300">
      <header className="border-b border-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-tight text-white"
          >
            Sentinel
          </Link>
          <nav className="text-sm flex gap-6">
            <Link href="/docs" className="text-white">
              Docs
            </Link>
            <a href="/pricing" className="hover:text-white">
              Pricing
            </a>
            <a
              href="https://github.com/PetrefiedThunder"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://app.pauseapi.app/signup"
              className="bg-white text-black px-3 py-1 rounded font-medium"
            >
              Get started
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        {/* Sticky sidebar */}
        <aside className="md:sticky md:top-12 md:self-start text-sm">
          <p className="text-xs uppercase tracking-wider text-neutral-500 mb-3">
            Documentation
          </p>
          <ul className="space-y-2">
            {TOC.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-neutral-400 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs uppercase tracking-wider text-neutral-500 mt-8 mb-3">
            Reference
          </p>
          <ul className="space-y-2">
            <li>
              <a
                href="https://api.pauseapi.app/docs"
                className="text-neutral-400 hover:text-white"
              >
                API Reference
              </a>
            </li>
          </ul>
          <p className="text-xs uppercase tracking-wider text-neutral-500 mt-8 mb-3">
            SDKs
          </p>
          <ul className="space-y-2">
            <li>
              <a
                href="https://pypi.org/project/sentinel-oversight/"
                className="text-neutral-400 hover:text-white"
              >
                Python (PyPI)
              </a>
            </li>
            <li>
              {/* JS/TS SDK is not published to npm yet — link disabled until release. */}
              <span className="text-neutral-600">JavaScript (npm) — coming soon</span>
            </li>
            <li>
              <a
                href="https://github.com/PetrefiedThunder/sentinel-examples"
                className="text-neutral-400 hover:text-white"
              >
                Examples repo
              </a>
            </li>
          </ul>
        </aside>

        {/* Content */}
        <article className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-white mb-3">
            Sentinel docs
          </h1>
          <p className="text-neutral-400 mb-12 leading-7">
            One wrapper. Your function pauses, a human gets an email with
            Approve / Reject buttons, and the function only runs once they
            click Approve.
          </p>

          <Section id="install" title="1. Install">
            <p>Python:</p>
            <Code>pip install sentinel-oversight</Code>
            <p className="text-neutral-400">
              JS/TS SDK — coming soon. The TypeScript package is not published to
              npm yet; the examples below show the planned API.
            </p>
          </Section>

          <Section id="quick-start" title="2. Quick start">
            <p>
              Grab an API key from{" "}
              <Link
                href="https://app.pauseapi.app/signup"
                className="text-white underline"
              >
                pauseapi.app/signup
              </Link>
              , then wrap any function:
            </p>
            <Code>{`# Python
from sentinel import configure, oversight

configure(api_key="sk_live_...")

@oversight(risk_level="high", approvers=["alice@acme.com"])
def transfer_funds(amount: int, recipient: str):
    return stripe.transfers.create(amount=amount, destination=recipient)

transfer_funds(50_000_00, "acct_xyz")  # pauses until approved`}</Code>
            <Code>{`// TypeScript
import { configure, oversight } from 'sentinel-oversight';

configure({ apiKey: process.env.SENTINEL_API_KEY! });

const wireTransfer = oversight(
  { riskLevel: 'high', approvers: ['alice@acme.com'] },
  async (amountCents: number, recipient: string) => {
    return stripe.transfers.create({ amount: amountCents, destination: recipient });
  }
);

await wireTransfer(50_000_00, 'acct_acme_corp');`}</Code>
            <p className="text-sm text-neutral-500">
              When the agent calls this: Sentinel pauses execution, an email
              goes to <code>alice@acme.com</code> with Approve / Reject
              buttons, and on approve the function runs with its original
              arguments — return value flows back.
            </p>
          </Section>

          <Section id="approvers" title="3. Approvers">
            <p>Each entry in <code>approvers=[...]</code> is a string. The format determines the notification channel.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-neutral-800">
                <thead className="bg-neutral-950 text-neutral-400">
                  <tr>
                    <th className="text-left px-3 py-2 border-b border-neutral-800">
                      Format
                    </th>
                    <th className="text-left px-3 py-2 border-b border-neutral-800">
                      Channel
                    </th>
                    <th className="text-left px-3 py-2 border-b border-neutral-800">
                      Example
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 border-b border-neutral-900 font-mono">
                      name@company.com
                    </td>
                    <td className="px-3 py-2 border-b border-neutral-900">
                      Email
                    </td>
                    <td className="px-3 py-2 border-b border-neutral-900 font-mono text-neutral-400">
                      alice@acme.com
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-b border-neutral-900 font-mono">
                      mailto:name@company.com
                    </td>
                    <td className="px-3 py-2 border-b border-neutral-900">
                      Email (explicit)
                    </td>
                    <td className="px-3 py-2 border-b border-neutral-900 font-mono text-neutral-400">
                      mailto:alice@acme.com
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono">sms:+15551234567</td>
                    <td className="px-3 py-2">SMS (requires consent)</td>
                    <td className="px-3 py-2 font-mono text-neutral-400">
                      sms:+14155550123
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Mix formats — every approver receives a notification, the{" "}
              <b>first decision wins</b>.
            </p>
            <p className="text-sm text-neutral-500">
              SMS approvers must be added in the dashboard with active consent
              before they can receive approval texts. See the{" "}
              <a href="/sms-consent" className="text-white underline">
                SMS consent flow
              </a>
              .
            </p>
          </Section>

          <Section id="risk" title="4. Risk levels">
            <p>
              <code>risk_level</code> is a string the dashboard uses for
              prioritization. Allowed values:{" "}
              <code>low</code>, <code>medium</code>, <code>high</code>,{" "}
              <code>critical</code>. Required.
            </p>
          </Section>

          <Section id="errors" title="5. Errors">
            <Code>{`# Python
from sentinel import (
    ApprovalRejected, ApprovalTimeout,
    SentinelAPIError, SentinelConfigError,
)

try:
    transfer_funds(50_000_00, "acct_xyz")
except ApprovalRejected as e:
    log.info(f"rejected: {e.reason}")
except ApprovalTimeout as e:
    log.warn(f"no decision in {e.timeout_seconds}s")
except SentinelAPIError as e:
    log.error(f"API {e.status_code}: {e.message}")`}</Code>
            <Code>{`// TypeScript
import {
  ApprovalRejected, ApprovalTimeout,
  SentinelAPIError, SentinelConfigError,
} from 'sentinel-oversight';

try {
  await wireTransfer(50_000_00, 'acct_xyz');
} catch (e) {
  if (e instanceof ApprovalRejected) console.log('rejected:', e.reason);
  if (e instanceof ApprovalTimeout)  console.log('no decision:', e.actionId);
  if (e instanceof SentinelAPIError) console.log('API err:', e.statusCode);
}`}</Code>
          </Section>

          <Section id="async" title="6. Async functions">
            <p>
              The decorator transparently supports <code>async def</code>{" "}
              (Python) and <code>async</code> functions (TypeScript). No
              additional config — just wrap as usual.
            </p>
          </Section>

          <Section id="langchain" title="7. LangChain">
            <p>
              Sentinel ships a LangChain callback handler for both Python and
              TypeScript. Drop it into a <code>callbacks=[...]</code> array
              and every tool call pauses for approval.
            </p>
            <Code>{`# Python
from sentinel.adapters.langchain import SentinelCallbackHandler

agent.run("...", callbacks=[SentinelCallbackHandler(risk_level="high")])`}</Code>
            <Code>{`// TypeScript
import { SentinelCallbackHandler } from 'sentinel-oversight/langchain';

await agent.invoke(
  { input: 'send Alice $50,000' },
  {
    callbacks: [
      new SentinelCallbackHandler({
        riskLevel: 'high',
        approvers: ['alice@acme.com'],
        toolAllowlist: ['wire_transfer', 'delete_database'],
      }),
    ],
  }
);`}</Code>
          </Section>

          <Section id="tenants" title="8. Tenant settings (default approvers)">
            <p>
              If you don't want to pass <code>approvers=[...]</code> on every
              decorator, set a default on your tenant:
            </p>
            <Code>{`from sentinel import SentinelClient

client = SentinelClient()
client.set_default_approvers([
  "sms:+15551234567",
  "ops@yourcompany.com",
])`}</Code>
            <p>
              Resolution order when an approval is created:
            </p>
            <ol className="list-decimal pl-6 space-y-1">
              <li>The caller's explicit <code>approvers=[...]</code></li>
              <li>The tenant's saved <code>default_approvers</code></li>
              <li>The global <code>DEFAULT_APPROVERS</code> env var</li>
              <li>400 error if all three are empty</li>
            </ol>
          </Section>

          <Section id="audit" title="9. Audit log">
            <p>
              Every approval creates a hash-chained audit trail. Fetch it:
            </p>
            <Code>{`from sentinel import SentinelClient

client = SentinelClient()
events = client.list_audit_events(action_id="act_...")
# each event has prev_hash + event_hash (SHA-256)`}</Code>
            <p>
              Chain integrity can be verified by recomputing{" "}
              <code>sha256(prev_hash + json(payload))</code> for each event.
            </p>
          </Section>

          <Section id="webhooks" title="10. Webhooks">
            <p>
              Register a URL on your tenant and Sentinel will POST to it
              whenever an approval is decided (approved or rejected). Use
              this to mirror events into your own audit system, ping
              Slack, fan out to other services, etc.
            </p>
            <p className="text-sm text-neutral-400">Register a new endpoint:</p>
            <Code>{`curl -X POST https://api.pauseapi.app/v1/webhooks \\
  -H "Authorization: Bearer $SENTINEL_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://api.yourcompany.com/sentinel-webhook",
    "description": "audit fan-out",
    "event_filter": ["approval.approved", "approval.rejected"]
  }'

# returns: { id, url, secret: "whsec_...", ... }
# the secret is shown ONCE — store it`}</Code>

            <p className="text-sm text-neutral-400 mt-6">
              Verify the signature on your side (every delivery has
              <code> X-Sentinel-Signature</code> header):
            </p>
            <Code>{`# Python
import hashlib, hmac

def is_authentic(request) -> bool:
    raw_body = request.body  # bytes — read BEFORE parsing JSON
    sent_sig = request.headers.get("X-Sentinel-Signature", "")
    expected = hmac.new(
        WEBHOOK_SECRET.encode(),
        raw_body,
        hashlib.sha256,
    ).hexdigest()
    return hmac.compare_digest(expected, sent_sig)`}</Code>

            <Code>{`// TypeScript / Node
import { createHmac, timingSafeEqual } from 'node:crypto';

function isAuthentic(req: Request): boolean {
  const sig = req.headers.get('x-sentinel-signature') ?? '';
  const expected = createHmac('sha256', WEBHOOK_SECRET)
    .update(req.rawBody)  // bytes, BEFORE parsing JSON
    .digest('hex');
  return sig.length === expected.length &&
    timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
}`}</Code>

            <p className="text-sm text-neutral-400 mt-4">
              Headers on every delivery:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><code>X-Sentinel-Signature</code> — HMAC-SHA256 hex digest</li>
              <li><code>X-Sentinel-Event</code> — <code>approval.approved</code> or <code>approval.rejected</code></li>
              <li><code>X-Sentinel-Delivery</code> — unique id per attempt</li>
            </ul>

            <p className="text-sm text-neutral-400 mt-4">
              Retry policy: up to 3 attempts (1s, 4s, 16s backoff) on 5xx
              and network errors. 4xx responses are treated as terminal
              rejections — we won't retry. Inspect attempts:
            </p>
            <Code>GET /v1/webhooks/deliveries?endpoint_id=whk_...&limit=50</Code>
          </Section>

          <Section id="config" title="11. Configuration">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-neutral-800">
                <thead className="bg-neutral-950 text-neutral-400">
                  <tr>
                    <th className="text-left px-3 py-2 border-b border-neutral-800">
                      Env var
                    </th>
                    <th className="text-left px-3 py-2 border-b border-neutral-800">
                      Default
                    </th>
                    <th className="text-left px-3 py-2 border-b border-neutral-800">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 border-b border-neutral-900 font-mono">
                      SENTINEL_API_URL
                    </td>
                    <td className="px-3 py-2 border-b border-neutral-900 font-mono text-neutral-500">
                      https://api.pauseapi.app
                    </td>
                    <td className="px-3 py-2 border-b border-neutral-900">
                      Backend URL
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-b border-neutral-900 font-mono">
                      SENTINEL_API_KEY
                    </td>
                    <td className="px-3 py-2 border-b border-neutral-900 italic text-neutral-500">
                      required
                    </td>
                    <td className="px-3 py-2 border-b border-neutral-900">
                      Your tenant API key
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-b border-neutral-900 font-mono">
                      SENTINEL_TIMEOUT
                    </td>
                    <td className="px-3 py-2 border-b border-neutral-900 font-mono text-neutral-500">
                      300
                    </td>
                    <td className="px-3 py-2 border-b border-neutral-900">
                      Default timeout (s)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono">
                      SENTINEL_FALLBACK
                    </td>
                    <td className="px-3 py-2 font-mono text-neutral-500">
                      reject
                    </td>
                    <td className="px-3 py-2">
                      <code>reject</code> or <code>execute</code> on timeout
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <hr className="border-neutral-900 my-12" />
          <p className="text-sm text-neutral-500">
            Need help? Open an issue on{" "}
            <a
              href="https://github.com/PetrefiedThunder/sentinel-sdk/issues"
              className="text-white underline"
            >
              GitHub
            </a>{" "}
            or DM{" "}
            <a
              href="https://x.com/PetrefiedThunder"
              className="text-white underline"
            >
              @PetrefiedThunder
            </a>
            .
          </p>
        </article>
      </div>
    </div>
  );
}
