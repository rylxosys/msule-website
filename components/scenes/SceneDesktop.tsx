import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { COLORS } from "@/lib/theme";

const Bar: React.FC<{
  w: number;
  h?: number;
  c?: string;
  delay: number;
  frame: number;
  fps: number;
}> = ({ w, h = 12, c = COLORS.line, delay, frame, fps }) => {
  const s = spring({ frame: frame - delay, fps, config: { damping: 20 } });
  return (
    <div
      style={{
        width: w * s,
        height: h,
        borderRadius: 4,
        background: c,
        marginBottom: 10,
      }}
    />
  );
};

export const SceneDesktop: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const frameIn = spring({
    frame,
    fps,
    config: { damping: 24, stiffness: 80 },
  });
  const scale = interpolate(frameIn, [0, 1], [0.92, 1]);

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
          width: 1280,
          height: 780,
          borderRadius: 20,
          background: COLORS.panelSoft,
          border: `1px solid ${COLORS.line}`,
          boxShadow: "0 60px 120px rgba(0,0,0,0.55)",
          overflow: "hidden",
          transform: `scale(${scale})`,
          opacity: frameIn,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Browser chrome */}
        <div
          style={{
            height: 44,
            display: "flex",
            alignItems: "center",
            padding: "0 18px",
            background: COLORS.panel,
            borderBottom: `1px solid ${COLORS.line}`,
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
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
          </div>
          <div
            style={{
              marginLeft: 24,
              width: 420,
              height: 22,
              borderRadius: 6,
              background: COLORS.bg,
              border: `1px solid ${COLORS.line}`,
            }}
          />
        </div>
        {/* Content */}
        <div style={{ display: "flex", flex: 1 }}>
          {/* Sidebar */}
          <div
            style={{
              width: 220,
              padding: 24,
              borderRight: `1px solid ${COLORS.line}`,
              background: "rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 6,
                background: COLORS.coral,
                marginBottom: 22,
              }}
            />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <Bar
                key={i}
                w={140 - (i % 3) * 20}
                h={10}
                c={i === 1 ? COLORS.coral : COLORS.line}
                delay={8 + i * 3}
                frame={frame}
                fps={fps}
              />
            ))}
          </div>
          {/* Main */}
          <div style={{ flex: 1, padding: 30 }}>
            <Bar
              w={280}
              h={22}
              c={COLORS.cream}
              delay={12}
              frame={frame}
              fps={fps}
            />
            <div style={{ height: 8 }} />
            <Bar
              w={420}
              h={10}
              c={COLORS.dim}
              delay={16}
              frame={frame}
              fps={fps}
            />
            <div style={{ height: 24 }} />
            {/* Stat cards */}
            <div style={{ display: "flex", gap: 16 }}>
              {[0, 1, 2].map((i) => {
                const s = spring({
                  frame: frame - (24 + i * 6),
                  fps,
                  config: { damping: 20 },
                });
                return (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: 110,
                      borderRadius: 12,
                      background: COLORS.panel,
                      border: `1px solid ${COLORS.line}`,
                      padding: 16,
                      opacity: s,
                      transform: `translateY(${(1 - s) * 20}px)`,
                    }}
                  >
                    <div
                      style={{
                        width: 60,
                        height: 8,
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
                        background: i === 1 ? COLORS.coral : COLORS.cream,
                      }}
                    />
                    <div
                      style={{
                        width: 40,
                        height: 6,
                        borderRadius: 3,
                        background: COLORS.dim,
                        marginTop: 14,
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <div style={{ height: 24 }} />
            {/* Chart card */}
            {(() => {
              const s = spring({
                frame: frame - 44,
                fps,
                config: { damping: 22 },
              });
              return (
                <div
                  style={{
                    height: 260,
                    borderRadius: 12,
                    background: COLORS.panel,
                    border: `1px solid ${COLORS.line}`,
                    padding: 20,
                    opacity: s,
                    transform: `translateY(${(1 - s) * 20}px)`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: 140,
                      height: 10,
                      borderRadius: 3,
                      background: COLORS.dim,
                      marginBottom: 20,
                    }}
                  />
                  {/* Chart line */}
                  <svg
                    width="100%"
                    height="180"
                    viewBox="0 0 700 180"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="gc" x1="0" x2="0" y1="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor={COLORS.coral}
                          stopOpacity="0.35"
                        />
                        <stop
                          offset="100%"
                          stopColor={COLORS.coral}
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    {(() => {
                      const pts = [
                        10, 140, 60, 120, 120, 150, 180, 90, 240, 110, 300, 60,
                        360, 80, 420, 40, 480, 70, 540, 30, 600, 55, 660, 20,
                        700, 35,
                      ];
                      const p = interpolate(frame, [50, 110], [0, 1], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                      });
                      const shown = Math.max(
                        2,
                        Math.floor((pts.length / 2) * p),
                      );
                      const path = pts.slice(0, shown * 2);
                      let d = `M ${path[0]} ${path[1]}`;
                      for (let i = 2; i < path.length; i += 2)
                        d += ` L ${path[i]} ${path[i + 1]}`;
                      const fill =
                        d +
                        ` L ${path[path.length - 2]} 180 L ${path[0]} 180 Z`;
                      return (
                        <g>
                          <path d={fill} fill="url(#gc)" />
                          <path
                            d={d}
                            stroke={COLORS.coral}
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      );
                    })()}
                  </svg>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
