import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Sentinel — Oversight layer for AI agents",
  description:
    "Human-in-the-loop approval, hash-chained audit log, and oversight infrastructure for AI agents. Open source.",
  openGraph: {
    title: "Sentinel — Oversight layer for AI agents",
    description:
      "Human-in-the-loop approval, hash-chained audit log, and oversight infrastructure for AI agents.",
    url: "https://pauseapi.app",
    siteName: "Sentinel",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
