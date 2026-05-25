export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-neutral-900">
        <div className="mx-auto max-w-3xl px-6 py-4">
          <a href="/" className="font-semibold tracking-tight">Sentinel</a>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-14 text-neutral-300">
        <p className="text-sm text-neutral-500">Last updated: May 25, 2026</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">Terms of Service</h1>

        <section className="mt-10 space-y-4 leading-7">
          <p>
            These terms govern access to Sentinel, a human-in-the-loop approval and audit service
            operated by RegEngine, Inc. By using Sentinel, you agree to these terms.
          </p>
          <p>
            You are responsible for configuring approval policies, approvers, API keys, and
            integrations accurately. You must have authorization to send approval requests to any
            email address or phone number you configure in Sentinel.
          </p>
          <p>
            Before configuring a phone number for SMS approvals, you must confirm that the
            approver consented to receive Sentinel transactional approval texts. Sentinel records
            that attestation and may block approval requests to phone numbers without active
            consent.
          </p>
          <p>
            Sentinel text messages are transactional approval notifications and service messages.
            By providing or configuring a phone number for Sentinel approvals, you consent to
            receive text messages related to approval requests and service operation. Message
            frequency varies. Message and data rates may apply. Reply STOP to revoke future SMS
            approval notifications and HELP for help.
          </p>
          <p>
            Do not use Sentinel to send marketing, spam, unlawful content, sensitive regulated
            content without appropriate safeguards, or messages to people who have not consented to
            receive them.
          </p>
          <p>
            You must keep API keys, webhook secrets, and other credentials secure. Sentinel may
            suspend or limit access if we detect abuse, security risk, or use that violates these
            terms.
          </p>
          <p>
            Sentinel is provided as a developer and business workflow service. Except where
            required by law or a separate written agreement, the service is provided without
            warranties and RegEngine is not liable for indirect, incidental, special, or
            consequential damages.
          </p>
          <p>
            For questions about these terms, contact RegEngine through{" "}
            <a href="https://regengine.co" className="text-white underline">regengine.co</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
