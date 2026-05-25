export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-neutral-900">
        <div className="mx-auto max-w-3xl px-6 py-4">
          <a href="/" className="font-semibold tracking-tight">Sentinel</a>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-14 text-neutral-300">
        <p className="text-sm text-neutral-500">Last updated: May 25, 2026</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">Privacy Policy</h1>

        <section className="mt-10 space-y-4 leading-7">
          <p>
            Sentinel is operated by RegEngine, Inc. Sentinel provides human-in-the-loop approval
            workflows for AI agent actions, including approval requests sent by email or text
            message.
          </p>
          <p>
            We collect account information, API usage records, approval request metadata,
            approver contact information, decision history, and audit log data needed to operate
            the service, secure customer workspaces, and provide support.
          </p>
          <p>
            If you receive Sentinel text messages, we use your phone number only to deliver
            transactional approval notifications, security messages, and related service updates.
            Message frequency varies based on approval activity. Message and data rates may apply.
            Reply STOP to opt out and HELP for help.
          </p>
          <p>
            We do not sell personal information. We do not share SMS opt-in consent or phone
            numbers with third parties or affiliates for marketing or promotional purposes.
          </p>
          <p>
            We may share limited data with service providers that help us run Sentinel, such as
            hosting, database, email, text messaging, observability, and security providers. Those
            providers are allowed to process the data only for the services they provide to us.
          </p>
          <p>
            We retain approval and audit records for the retention period configured for the
            workspace or plan, unless a longer period is required for security, compliance, or
            legal obligations.
          </p>
          <p>
            To request access, correction, deletion, or other privacy support, contact RegEngine
            through <a href="https://regengine.co" className="text-white underline">regengine.co</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
