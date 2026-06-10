export const metadata = {
  title: "Security & Data Residency — Sentinel",
  description:
    "Sentinel's security posture: data location, encryption, access controls, vulnerability handling, and current certifications.",
  robots: { index: true, follow: true },
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-300">
      <header className="border-b border-neutral-900">
        <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight text-white">Sentinel</a>
          <nav className="text-sm flex gap-6">
            <a href="/docs" className="hover:text-white">Docs</a>
            <a href="/pricing" className="hover:text-white">Pricing</a>
            <a href="/sla" className="hover:text-white">SLA</a>
            <a href="/subprocessors" className="hover:text-white">Subprocessors</a>
            <a href="/security" className="text-white">Security</a>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-14 leading-7">
        <p className="text-sm text-neutral-500 mb-2">Last updated: 2026-05-26</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white mb-4">
          Security &amp; Data Residency
        </h1>
        <p className="text-neutral-400 mb-12">
          This page is the source of truth for how Sentinel handles customer
          data. We update it whenever our posture changes.
        </p>

        <Section title="Data residency">
          <p>
            Customer data — tenants, API keys (hashed), approval records,
            audit events, webhook endpoints, billing state — is stored in{" "}
            <b>Railway's us-east region (Northern Virginia, AWS)</b>. We do not
            currently offer EU residency; if you need EU-only data location,
            email us before purchase.
          </p>
          <p>
            TLS termination happens at Vercel's global edge for{" "}
            <code>api.pauseapi.app</code> and <code>app.pauseapi.app</code> —
            this is connection-level only; request bodies flow through Vercel
            without storage.
          </p>
        </Section>

        <Section title="Encryption">
          <p>
            <b>At rest:</b> Postgres and Redis storage on Railway are encrypted
            at rest (AES-256, AWS-managed).
          </p>
          <p>
            <b>In transit:</b> All inbound and outbound HTTP traffic uses TLS
            1.2 or higher. HSTS is enabled on all public hosts.
          </p>
          <p>
            <b>API keys:</b> Stored as SHA-256 hashes only. Raw values are
            shown to you ONCE on creation. We cannot recover a lost API key —
            use the magic-link recovery flow at{" "}
            <a href="https://app.pauseapi.app/recover" className="text-white underline">app.pauseapi.app/recover</a>{" "}
            to rotate.
          </p>
          <p>
            <b>Approval and webhook tokens:</b> HMAC-SHA256 signed with
            per-tenant or per-endpoint secrets. Verifiable offline.
          </p>
        </Section>

        <Section title="Access controls">
          <ul className="list-disc pl-6 space-y-1">
            <li>API access requires a per-tenant Bearer API key</li>
            <li>Dashboard access requires the same API key (paste at login)</li>
            <li>Admin endpoints require a separate operator-only token (<code>ADMIN_TOKEN</code>)</li>
            <li>Magic-link approve/reject tokens are scoped to one action and expire with the approval's <code>timeout_seconds</code></li>
            <li>SSO via SAML/OIDC: planned for Q3 2026 (see <a href="https://github.com/PetrefiedThunder/sentinel-api/blob/main/docs/adr/README.md" className="text-white underline">ADR roadmap</a>)</li>
          </ul>
        </Section>

        <Section title="Audit log">
          <p>
            Every state change (approval created, decided, webhook delivered,
            api key issued/revoked) is appended to a hash-chained immutable
            log. Each event includes <code>prev_hash</code> and{" "}
            <code>event_hash</code> (SHA-256) — chain integrity can be
            verified offline by recomputing{" "}
            <code>sha256(prev_hash + canonical_json(payload))</code>.
          </p>
          <p>
            Cryptographic timestamping (RFC 3161) of each audit event is on
            the Phase 2 roadmap.
          </p>
        </Section>

        <Section title="Vulnerability handling">
          <p>
            Reporting path: email{" "}
            <a href="mailto:security@regengine.co" className="text-white underline">
              security@regengine.co
            </a>
            . See each SDK / repo's <code>SECURITY.md</code> for severity SLAs.
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Critical: 24 h acknowledgment / 72 h fix target</li>
            <li>High: 48 h ack / 7-day fix target</li>
            <li>Medium / Low: graded targets</li>
          </ul>
          <p className="mt-3">
            We support coordinated disclosure and credit reporters in release
            notes (or remain anonymous on request).
          </p>
        </Section>

        <Section title="Certifications">
          <p>
            Sentinel does not currently hold SOC 2 / ISO 27001 / HIPAA / FedRAMP
            certifications. We are in active preparation for SOC 2 Type I (Q4
            2026 target). Customers who need a certification today should hold
            for that issuance, or engage with us under a NDA for evidence of
            our control set.
          </p>
        </Section>

        <Section title="Penetration testing">
          <p>
            We engage external penetration testers annually starting Q3 2026.
            Reports are available under NDA to Pro and Enterprise customers.
          </p>
        </Section>

        <Section title="Incident response">
          <p>
            Internal runbook lives in{" "}
            <a
              href="https://github.com/PetrefiedThunder/sentinel-api/blob/main/docs/runbooks/incident-response.md"
              className="text-white underline"
            >
              sentinel-api/docs/runbooks/incident-response.md
            </a>
            . We commit to:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Status page update within 30 minutes of detection</li>
            <li>Customer email update within 2 hours for any Sev1 affecting their data</li>
            <li>Public postmortem within 5 business days for any Sev1</li>
          </ul>
        </Section>

        <Section title="Data retention &amp; deletion">
          <p>
            Approval records, audit events, and webhook delivery history are
            retained for the duration of the tenant's account. On account
            deletion (or via API key revoke + tenant close request), all
            tenant data is purged within 30 days. Stripe transaction records
            and our financial accounting are retained as required by tax /
            financial law (7 years).
          </p>
        </Section>

        <Section title="Subprocessors">
          <p>
            See the <a href="/subprocessors" className="text-white underline">subprocessor list</a> for
            every third-party vendor that processes customer data, with their
            DPA links and notification-on-change policy.
          </p>
        </Section>

        <p className="text-sm text-neutral-500 mt-12">
          Security questions or DPA requests: email{" "}
          <a href="mailto:security@regengine.co" className="text-white underline">
            security@regengine.co
          </a>
          .
        </p>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold tracking-tight text-white mb-3">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
