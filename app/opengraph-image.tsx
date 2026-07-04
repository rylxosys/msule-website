// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Msule — Product Engineering Company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#FFFFFF",
        backgroundImage:
          "radial-gradient(circle at 85% 30%, #EEF2FF 0%, #FFFFFF 60%)",
      }}
    >
      <div
        style={{
          fontSize: 36,
          fontWeight: 700,
          color: "#2F5EFF",
          marginBottom: 24,
        }}
      >
        Msule
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: 700,
          color: "#0F172A",
          lineHeight: 1.1,
          maxWidth: 900,
        }}
      >
        Engineering Software That Moves Business
      </div>
      <div
        style={{
          fontSize: 28,
          color: "#475569",
          marginTop: 28,
          maxWidth: 700,
        }}
      >
        Your long-term product engineering partner
      </div>
    </div>,
    { ...size },
  );
}
