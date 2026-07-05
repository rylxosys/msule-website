import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { COLORS } from "@/lib/theme";

const LINES: Array<{
  tokens: Array<{ t: string; c: string }>;
  indent: number;
}> = [
  {
    indent: 0,
    tokens: [
      { t: "const ", c: COLORS.coral },
      { t: "build", c: COLORS.cream },
      { t: " = ", c: COLORS.muted },
      { t: "async ", c: COLORS.coral },
      { t: "() => {", c: COLORS.cream },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "await ", c: COLORS.coral },
      { t: "design", c: COLORS.blueSoft },
      { t: "(", c: COLORS.muted },
      { t: "'idea'", c: COLORS.coralSoft },
      { t: ");", c: COLORS.muted },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "await ", c: COLORS.coral },
      { t: "engineer", c: COLORS.blueSoft },
      { t: "(", c: COLORS.muted },
      { t: "product", c: COLORS.cream },
      { t: ");", c: COLORS.muted },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "await ", c: COLORS.coral },
      { t: "ship", c: COLORS.blueSoft },
      { t: "(", c: COLORS.muted },
      { t: "release", c: COLORS.cream },
      { t: ");", c: COLORS.muted },
    ],
  },
  {
    indent: 1,
    tokens: [
      { t: "return ", c: COLORS.coral },
      { t: "scale", c: COLORS.blueSoft },
      { t: "(", c: COLORS.muted },
      { t: "impact", c: COLORS.cream },
      { t: ");", c: COLORS.muted },
    ],
  },
  { indent: 0, tokens: [{ t: "};", c: COLORS.cream }] },
];

export const SceneCode: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const panelIn = spring({
    frame,
    fps,
    config: { damping: 22, stiffness: 90 },
  });
  const panelY = interpolate(panelIn, [0, 1], [40, 0]);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 980,
          borderRadius: 18,
          background: `linear-gradient(180deg, rgba(28,23,35,0.85), rgba(20,16,25,0.85))`,
          border: `1px solid ${COLORS.line}`,
          padding: "28px 36px 32px",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
          transform: `translateY(${panelY}px)`,
          opacity: panelIn,
          backdropFilter: "none",
        }}
      >
        {/* Window controls */}
        <div style={{ display: "flex", gap: 8, marginBottom: 22 }}>
          {[COLORS.coral, "#e8b84a", "#5ca866"].map((c, i) => (
            <div
              key={i}
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                background: c,
                opacity: 0.75,
              }}
            />
          ))}
          <div
            style={{
              marginLeft: 16,
              color: COLORS.muted,
              fontFamily: "monospace",
              fontSize: 13,
            }}
          >
            ~/product/build.ts
          </div>
        </div>
        {LINES.map((line, i) => {
          const start = 12 + i * 10;
          const totalChars = line.tokens.reduce((s, tk) => s + tk.t.length, 0);
          const revealed = Math.max(
            0,
            Math.min(totalChars, Math.floor((frame - start) * 1.6)),
          );
          const lineOpacity = interpolate(
            frame,
            [start - 4, start + 6],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          let consumed = 0;
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 10,
                opacity: lineOpacity,
                fontFamily: "monospace",
                fontSize: 22,
              }}
            >
              <span
                style={{
                  color: COLORS.dim,
                  width: 34,
                  display: "inline-block",
                  textAlign: "right",
                  marginRight: 20,
                }}
              >
                {i + 1}
              </span>
              <span style={{ marginLeft: line.indent * 26, whiteSpace: "pre" }}>
                {line.tokens.map((tk, ti) => {
                  const before = consumed;
                  consumed += tk.t.length;
                  const localReveal = Math.max(
                    0,
                    Math.min(tk.t.length, revealed - before),
                  );
                  return (
                    <span key={ti} style={{ color: tk.c }}>
                      {tk.t.slice(0, localReveal)}
                    </span>
                  );
                })}
                {revealed < totalChars && (frame >> 2) % 2 === 0 && (
                  <span style={{ color: COLORS.coral }}>▍</span>
                )}
              </span>
            </div>
          );
        })}
      </div>
      {/* Floating meta tag */}
      <div
        style={{
          position: "absolute",
          top: "22%",
          right: "12%",
          padding: "10px 18px",
          borderRadius: 999,
          background: "rgba(20,16,25,0.85)",
          border: `1px solid ${COLORS.line}`,
          color: COLORS.cream,
          fontFamily: "sans-serif",
          fontSize: 15,
          letterSpacing: 0.5,
          opacity: interpolate(frame, [20, 40], [0, 1], {
            extrapolateRight: "clamp",
          }),
          transform: `translateY(${interpolate(frame, [20, 60], [12, 0], { extrapolateRight: "clamp" })}px)`,
        }}
      >
        <span style={{ color: COLORS.coral }}>◆</span> engineering
      </div>
    </AbsoluteFill>
  );
};
