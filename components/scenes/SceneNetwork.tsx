import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { COLORS } from "@/lib/theme";

type N = { x: number; y: number; r: number; c: string; delay: number };
const NODES: N[] = [
  { x: 960, y: 540, r: 22, c: COLORS.coral, delay: 0 },
  { x: 720, y: 380, r: 12, c: COLORS.blueSoft, delay: 6 },
  { x: 1220, y: 400, r: 12, c: COLORS.blueSoft, delay: 8 },
  { x: 720, y: 700, r: 12, c: COLORS.blueSoft, delay: 10 },
  { x: 1200, y: 700, r: 12, c: COLORS.coralSoft, delay: 12 },
  { x: 500, y: 540, r: 8, c: COLORS.cream, delay: 16 },
  { x: 1420, y: 540, r: 8, c: COLORS.cream, delay: 18 },
  { x: 960, y: 250, r: 8, c: COLORS.cream, delay: 20 },
  { x: 960, y: 830, r: 8, c: COLORS.cream, delay: 22 },
];
const LINKS: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [1, 5],
  [3, 5],
  [2, 6],
  [4, 6],
  [1, 7],
  [2, 7],
  [3, 8],
  [4, 8],
];

export const SceneNetwork: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill>
      <svg width={1920} height={1080}>
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={COLORS.coral} stopOpacity="0.4" />
            <stop offset="100%" stopColor={COLORS.coral} stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Central glow */}
        <circle
          cx={960}
          cy={540}
          r={260}
          fill="url(#glow)"
          opacity={
            interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" }) *
            (0.7 + Math.sin(frame / 15) * 0.15)
          }
        />

        {LINKS.map(([a, b], i) => {
          const A = NODES[a],
            B = NODES[b];
          const start = Math.max(NODES[a].delay, NODES[b].delay) + 4;
          const p = interpolate(frame, [start, start + 24], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const x2 = A.x + (B.x - A.x) * p;
          const y2 = A.y + (B.y - A.y) * p;
          const pulse = ((frame + i * 7) % 60) / 60;
          const px = A.x + (B.x - A.x) * pulse;
          const py = A.y + (B.y - A.y) * pulse;
          return (
            <g key={i}>
              <line
                x1={A.x}
                y1={A.y}
                x2={x2}
                y2={y2}
                stroke={COLORS.line}
                strokeWidth={1.5}
              />
              {p > 0.95 && (
                <circle
                  cx={px}
                  cy={py}
                  r={2.5}
                  fill={i % 3 === 0 ? COLORS.coral : COLORS.blueSoft}
                  opacity={0.9}
                />
              )}
            </g>
          );
        })}

        {NODES.map((n, i) => {
          const s = spring({
            frame: frame - n.delay,
            fps,
            config: { damping: 14, stiffness: 140 },
          });
          const bob = Math.sin((frame + i * 8) / 22) * 3;
          return (
            <g
              key={i}
              transform={`translate(${n.x}, ${n.y + bob})`}
              opacity={s}
            >
              <circle r={n.r + 8} fill={n.c} opacity={0.15} />
              <circle r={n.r * s} fill={n.c} />
              <circle r={n.r * 0.4} fill={COLORS.bgDeep} opacity={0.35} />
            </g>
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};
