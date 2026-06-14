import { ImageResponse } from "next/og";

// Generated favicon — a simple "S" (Sentinel) glyph on the site's black theme.
// Avoids committing a binary asset while still giving browsers/SEO a real icon.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          color: "#ffffff",
          fontSize: 24,
          fontWeight: 600,
        }}
      >
        S
      </div>
    ),
    size,
  );
}
