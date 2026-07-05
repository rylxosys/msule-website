import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { COLORS } from "@/lib/theme";

type Card = {
  kind: "chart" | "stat" | "list" | "circle" | "avatar";
  accent: string;
};
const CARDS: Card[] = [
  { kind: "chart", accent: COLORS.coral },
  { kind: "stat", accent: COLORS.cream },
  { kind: "list", accent: COLORS.blueSoft },
  { kind: "circle", accent: COLORS.coral },
  { kind: "avatar", accent: COLORS.blueSoft },
  { kind: "stat", accent: COLORS.coral },
  { kind: "chart", accent: COLORS.blueSoft },
  { kind: "list", accent: COLORS.cream },
  { kind: "circle", accent: COLORS.coralSoft },
  { kind: "avatar", accent: COLORS.coral },
  { kind: "stat", accent: COLORS.blueSoft },
  { kind: "chart", accent: COLORS.coral },
];

const CardContent: React.FC<{ c: Card; frame: number }> = ({ c, frame }) => {
  if (c.kind === "chart") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: 14,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: 60,
            height: 6,
            borderRadius: 3,
            background: COLORS.dim,
            marginBottom: 10,
          }}
        />
        <svg
          viewBox="0 0 100 40"
          style={{ width: "100%", flex: 1 }}
          preserveAspectRatio="none"
        >
          <polyline
            points="0,30 15,20 30,25 45,10 60,15 75,5 90,12 100,4"
            fill="none"
            stroke={c.accent}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  if (c.kind === "stat") {
    return (
      <div style={{ padding: 14 }}>
        <div
          style={{
            width: 50,
            height: 6,
            borderRadius: 3,
            background: COLORS.dim,
            marginBottom: 12,
          }}
        />
        <div
          style={{
            width: 90,
            height: 22,
            borderRadius: 4,
            background: c.accent,
          }}
        />
        <div
          style={{
            width: 30,
            height: 5,
            borderRadius: 3,
            background: COLORS.dim,
            marginTop: 12,
          }}
        />
      </div>
    );
  }
  if (c.kind === "list") {
    return (
      <div
        style={{
          padding: 14,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {[100, 80, 110, 70].map((w, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                background: i === 1 ? c.accent : COLORS.dim,
              }}
            />
            <div
              style={{
                width: w,
                height: 6,
                borderRadius: 3,
                background: COLORS.line,
              }}
            />
          </div>
        ))}
      </div>
    );
  }
  if (c.kind === "circle") {
    const pct = 0.72;
    const r = 34;
    const C = 2 * Math.PI * r;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={r}
            stroke={COLORS.line}
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={r}
            stroke={c.accent}
            strokeWidth="6"
            fill="none"
            strokeDasharray={`${C * pct} ${C}`}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>
      </div>
    );
  }
  return (
    <div
      style={{ padding: 14, display: "flex", alignItems: "center", gap: 10 }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 20,
          background: c.accent,
        }}
      />
      <div style={{ flex: 1 }}>
        <div
          style={{
            width: 70,
            height: 6,
            borderRadius: 3,
            background: COLORS.cream,
            marginBottom: 5,
          }}
        />
        <div
          style={{
            width: 50,
            height: 5,
            borderRadius: 3,
            background: COLORS.dim,
          }}
        />
      </div>
    </div>
  );
};

export const SceneGrid: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const drift = interpolate(frame, [0, 120], [0, -30]);

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
          display: "grid",
          gridTemplateColumns: "repeat(4, 260px)",
          gridTemplateRows: "repeat(3, 190px)",
          gap: 24,
          transform: `translateY(${drift}px)`,
        }}
      >
        {CARDS.map((c, i) => {
          const row = Math.floor(i / 4);
          const col = i % 4;
          const delay = (row + col) * 5;
          const s = spring({
            frame: frame - delay,
            fps,
            config: { damping: 22, stiffness: 100 },
          });
          const bob = Math.sin((frame + i * 12) / 30) * 4;
          return (
            <div
              key={i}
              style={{
                background: COLORS.panel,
                border: `1px solid ${COLORS.line}`,
                borderRadius: 14,
                opacity: s,
                transform: `translateY(${(1 - s) * 24 + bob}px) scale(${0.9 + s * 0.1})`,
                boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                overflow: "hidden",
              }}
            >
              <CardContent c={c} frame={frame} />
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
