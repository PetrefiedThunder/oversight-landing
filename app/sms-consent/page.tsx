export const metadata = {
  title: "SMS Consent — Sentinel",
  description:
    "How Sentinel records SMS consent for transactional approval text messages, including opt-in steps, disclosures, and sample messages.",
  robots: { index: true, follow: true },
};

const optInSteps = [
  "A workspace owner or admin signs in to the Sentinel dashboard.",
  "They open Contacts and choose Add SMS contact.",
  "They enter the approver display name, mobile number, and optional consent note.",
  "They must check the consent attestation before the contact can be saved.",
  "Sentinel records the consent source, timestamp, active status, and future revocations.",
  "Sentinel sends text messages only when an approval request needs that approver.",
];

const samples = [
  "Sentinel approval needed: transfer_funds. Risk: high. Approve: https://app.pauseapi.app/approve/act_example?d=approved&t=token Reject: https://app.pauseapi.app/approve/act_example?d=rejected&t=token Reply STOP to opt out, HELP for help.",
  "Sentinel approval needed: send_vendor_payment. Risk: medium. Approve: https://app.pauseapi.app/approve/act_example2?d=approved&t=token Reject: https://app.pauseapi.app/approve/act_example2?d=rejected&t=token Reply STOP to opt out, HELP for help.",
  "Sentinel approval needed: test_approval_from_dashboard. Risk: low. Approve: https://app.pauseapi.app/approve/act_test?d=approved&t=token Reject: https://app.pauseapi.app/approve/act_test?d=rejected&t=token Reply STOP to opt out, HELP for help.",
];

export default function SmsConsentPage() {
  return (
    <main className="min-h-screen bg-black text-neutral-300">
      <header className="border-b border-neutral-900">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight text-white">
            Sentinel
          </a>
          <nav className="text-sm flex flex-wrap justify-end gap-x-6 gap-y-2">
            <a href="/docs" className="hover:text-white">
              Docs
            </a>
            <a href="/privacy" className="hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms
            </a>
            <a href="https://app.pauseapi.app/signup" className="text-white">
              Sign up
            </a>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-14">
        <p className="text-sm text-neutral-500">Last updated: June 14, 2026</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-white">
          SMS consent for Sentinel approval texts
        </h1>
        <p className="mt-5 max-w-3xl text-neutral-400 leading-7">
          Sentinel sends transactional text messages for human approval of AI
          agent actions. Workspace owners must have consent before adding an
          SMS approver, and Sentinel blocks SMS approval notifications unless
          an active consent record exists for that workspace and phone number.
        </p>

        <section className="mt-12 grid md:grid-cols-[1.1fr_0.9fr] gap-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Opt-in flow
            </h2>
            <ol className="mt-5 space-y-3 leading-7">
              {optInSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-1 h-6 w-6 shrink-0 rounded-full border border-neutral-700 text-center text-xs leading-6 text-neutral-400">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="border border-neutral-800 bg-neutral-950 p-5 rounded">
            <p className="text-xs uppercase tracking-wider text-neutral-500">
              Reviewer-visible dashboard copy
            </p>
            <div className="mt-5 space-y-4">
              <label className="block text-sm text-neutral-400">
                Display name
                <span className="mt-2 block rounded border border-neutral-800 bg-black px-3 py-2 text-neutral-500">
                  Jane Approver
                </span>
              </label>
              <label className="block text-sm text-neutral-400">
                Mobile number
                <span className="mt-2 block rounded border border-neutral-800 bg-black px-3 py-2 font-mono text-neutral-500">
                  +15551234567
                </span>
              </label>
              <div className="rounded border border-neutral-800 bg-black p-3 text-sm leading-6 text-neutral-300">
                <span className="mr-2 inline-block h-4 w-4 translate-y-0.5 rounded-sm border border-neutral-500" />
                I attest this person consented to receive Sentinel
                transactional approval texts. They can reply STOP to opt out
                and HELP for help.{" "}
                <a href="/privacy" className="text-white underline">
                  Privacy
                </a>{" "}
                <a href="/terms" className="text-white underline">
                  Terms
                </a>
              </div>
              <p className="text-xs leading-5 text-neutral-500">
                The checkbox is required. Without this attestation, the contact
                is not created and approval texts cannot be sent.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 border-t border-neutral-900 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Required disclosures
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="border border-neutral-900 p-5 rounded">
              <h3 className="font-medium text-white">Message purpose</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Transactional approval notifications and service messages for
                Sentinel workspaces. No marketing messages are sent through this
                SMS campaign.
              </p>
            </div>
            <div className="border border-neutral-900 p-5 rounded">
              <h3 className="font-medium text-white">Frequency and fees</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Message frequency varies based on approval activity. Message
                and data rates may apply.
              </p>
            </div>
            <div className="border border-neutral-900 p-5 rounded">
              <h3 className="font-medium text-white">Opt out and help</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Reply STOP to revoke future SMS approval notifications. Reply
                HELP for help.
              </p>
            </div>
            <div className="border border-neutral-900 p-5 rounded">
              <h3 className="font-medium text-white">No marketing sharing</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Sentinel does not sell personal information or share SMS opt-in
                consent or phone numbers with third parties or affiliates for
                marketing or promotional purposes.
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm text-neutral-400">
            Privacy Policy:{" "}
            <a href="/privacy" className="text-white underline">
              https://pauseapi.app/privacy
            </a>
            {" "}Terms of Service:{" "}
            <a href="/terms" className="text-white underline">
              https://pauseapi.app/terms
            </a>
          </p>
        </section>

        <section className="mt-14 border-t border-neutral-900 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Sample messages
          </h2>
          <div className="mt-5 space-y-4">
            {samples.map((sample) => (
              <pre
                key={sample}
                className="whitespace-pre-wrap rounded border border-neutral-800 bg-neutral-950 p-4 text-sm leading-6 text-neutral-300"
              >
                {sample}
              </pre>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-neutral-900 pt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            STOP and START handling
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
            When Sentinel receives a STOP-like inbound text, it revokes matching
            SMS contacts and blocks future approval notifications to that phone
            number. When Sentinel receives a START-like inbound text from a
            previously revoked number, it reactivates the matching contact.
            Workspace owners can also revoke consent from the dashboard.
          </p>
        </section>
      </article>
    </main>
  );
}
