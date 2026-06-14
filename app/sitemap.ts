import type { MetadataRoute } from "next";

const SITE_URL = "https://pauseapi.app";

// Public, indexable routes. Auth/app redirects (/signup, /login, /app) and
// external shortcuts (/github, /docs/sdk, etc.) are intentionally excluded.
const routes = [
  "",
  "/docs",
  "/pricing",
  "/security",
  "/subprocessors",
  "/sla",
  "/status",
  "/privacy",
  "/terms",
  "/sms-consent",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}
