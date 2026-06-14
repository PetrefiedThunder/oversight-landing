// Canonical pricing source of truth for the whole site.
// The /pricing page (app/pricing/page.tsx) is the authoritative spec — its
// metadata and copy ("$199/mo with unlimited approvals, 99.5% SLA") agree with
// these values. app/page.tsx renders a simplified view derived from this list,
// so the home page and /pricing can never drift apart again.

export type PricingTier = {
  name: string;
  price: string;
  period: string;
  highlight: boolean;
  features: string[];
  cta: { label: string; href: string };
};

export const TIERS: PricingTier[] = [
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
