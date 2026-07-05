import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { COLORS } from "@/lib/theme";

export const SceneDeviceSync: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const dIn = spring({ frame, fps, config: { damping: 22, stiffness: 80 } });
  const mIn = spring({
    frame: frame - 12,
    fps,
    config: { damping: 20, stiffness: 90 },
  });

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 80,
      }}
    >
      {/* Desktop */}
      <div
        style={{
          position: "relative",
          opacity: dIn,
          transform: `translateX(${(1 - dIn) * -40}px)`,
        }}
      >
        <div
          style={{
            width: 900,
            height: 560,
            borderRadius: 14,
            background: COLORS.panelSoft,
            border: `1px solid ${COLORS.line}`,
            boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: 32,
              background: COLORS.panel,
              borderBottom: `1px solid ${COLORS.line}`,
              display: "flex",
              alignItems: "center",
              padding: "0 14px",
              gap: 6,
            }}
          >
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: 5,
                background: COLORS.coral,
                opacity: 0.7,
              }}
            />
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: 5,
                background: "#e8b84a",
                opacity: 0.7,
              }}
            />
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: 5,
                background: "#5ca866",
                opacity: 0.7,
              }}
            />
          </div>
          <div
            style={{
              flex: 1,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <div
              style={{
                width: 240,
                height: 26,
                borderRadius: 5,
                background: COLORS.cream,
              }}
            />
            <div
              style={{
                width: 420,
                height: 10,
                borderRadius: 3,
                background: COLORS.dim,
              }}
            />
            <div style={{ display: "flex", gap: 14, marginTop: 12 }}>
              {[0, 1, 2, 3].map((i) => {
                const s = spring({
                  frame: frame - (20 + i * 5),
                  fps,
                  config: { damping: 20 },
                });
                return (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: 130,
                      borderRadius: 10,
                      background: COLORS.panel,
                      border: `1px solid ${COLORS.line}`,
                      opacity: s,
                      transform: `translateY(${(1 - s) * 16}px)`,
                      padding: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 6,
                        background: i === 1 ? COLORS.coral : COLORS.blueSoft,
                        opacity: 0.9,
                      }}
                    />
                    <div
                      style={{
                        width: 50,
                        height: 8,
                        borderRadius: 3,
                        background: COLORS.dim,
                        marginTop: 16,
                      }}
                    />
                    <div
                      style={{
                        width: 70,
                        height: 12,
                        borderRadius: 3,
                        background: COLORS.cream,
                        marginTop: 10,
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <div
              style={{
                flex: 1,
                borderRadius: 10,
                background: COLORS.panel,
                border: `1px solid ${COLORS.line}`,
                padding: 18,
                marginTop: 6,
                opacity: spring({
                  frame: frame - 46,
                  fps,
                  config: { damping: 22 },
                }),
              }}
            >
              <div
                style={{
                  width: 130,
                  height: 8,
                  borderRadius: 3,
                  background: COLORS.dim,
                  marginBottom: 14,
                }}
              />
              {[220, 300, 260, 340].map((w, i) => (
                <div
                  key={i}
                  style={{
                    width: w,
                    height: 6,
                    borderRadius: 3,
                    background: COLORS.line,
                    marginBottom: 10,
                    opacity: 0.9,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sync flow */}
      <svg
        width="120"
        height="200"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
        }}
      >
        {(() => {
          const pulse = (frame % 45) / 45;
          const x = 60 + Math.sin(pulse * Math.PI * 2) * 40;
          const op = interpolate(frame, [30, 50], [0, 1], {
            extrapolateRight: "clamp",
          });
          return (
            <g opacity={op}>
              <line
                x1="10"
                y1="100"
                x2="110"
                y2="100"
                stroke={COLORS.line}
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <circle cx={x} cy="100" r="6" fill={COLORS.coral} />
              <circle
                cx={x}
                cy="100"
                r="14"
                fill="none"
                stroke={COLORS.coral}
                opacity={0.4}
              />
            </g>
          );
        })()}
      </svg>

      {/* Mobile */}
      <div
        style={{ opacity: mIn, transform: `translateX(${(1 - mIn) * 40}px)` }}
      >
        <div
          style={{
            width: 240,
            height: 500,
            borderRadius: 34,
            background: COLORS.panelSoft,
            border: `2px solid ${COLORS.line}`,
            boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
            padding: 12,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 14,
              left: "50%",
              transform: "translateX(-50%)",
              width: 80,
              height: 20,
              background: COLORS.bgDeep,
              borderRadius: 12,
              zIndex: 2,
            }}
          />
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 26,
              background: COLORS.panel,
              padding: "44px 16px 16px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 90,
                height: 10,
                borderRadius: 3,
                background: COLORS.cream,
              }}
            />
            <div
              style={{
                width: 140,
                height: 6,
                borderRadius: 3,
                background: COLORS.dim,
              }}
            />
            {[0, 1, 2].map((i) => {
              const s = spring({
                frame: frame - (28 + i * 6),
                fps,
                config: { damping: 20 },
              });
              return (
                <div
                  key={i}
                  style={{
                    height: 70,
                    borderRadius: 10,
                    background: COLORS.bg,
                    border: `1px solid ${COLORS.line}`,
                    opacity: s,
                    transform: `translateY(${(1 - s) * 14}px)`,
                    padding: 10,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      background: i === 1 ? COLORS.coral : COLORS.blueSoft,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        width: 90,
                        height: 6,
                        borderRadius: 3,
                        background: COLORS.cream,
                        marginBottom: 6,
                      }}
                    />
                    <div
                      style={{
                        width: 60,
                        height: 5,
                        borderRadius: 3,
                        background: COLORS.dim,
                      }}
                    />
                  </div>
                </div>
              );
            })}
            <div
              style={{
                flex: 1,
                borderRadius: 10,
                background: COLORS.bg,
                border: `1px solid ${COLORS.line}`,
                opacity: spring({
                  frame: frame - 52,
                  fps,
                  config: { damping: 22 },
                }),
              }}
            />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
