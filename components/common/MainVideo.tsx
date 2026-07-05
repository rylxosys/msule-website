import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { SceneCode } from "../scenes/SceneCode";
import { SceneDesktop } from "../scenes/SceneDesktop";
import { SceneDeviceSync } from "../scenes/SceneDeviceSync";
import { SceneNetwork } from "../scenes/SceneNetwork";
import { SceneGrid } from "../scenes/SceneGrid";
import { COLORS } from "@/lib/theme";

const D = 120; // per scene
const T = 20; // transition overlap
export const TOTAL = D * 5 - T * 4; // 540 frames = 18s

const Backdrop: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const drift = interpolate(frame, [0, durationInFrames], [0, 30]);
  const pulse = Math.sin((frame / durationInFrames) * Math.PI * 2) * 0.5 + 0.5;
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bgDeep }}>
      {/* Radial gradient wash */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(1200px 800px at ${30 + drift}% ${40 + drift * 0.3}%, rgba(232,93,58,${0.18 + pulse * 0.06}) 0%, rgba(232,93,58,0) 60%)`,
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(1000px 700px at ${75 - drift * 0.5}% ${65 - drift * 0.2}%, rgba(59,111,232,${0.12 + (1 - pulse) * 0.06}) 0%, rgba(59,111,232,0) 55%)`,
        }}
      />
      {/* Fine grid */}
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.6,
          transform: `translate(${-drift}px, ${-drift * 0.5}px)`,
        }}
      />
      {/* Vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};

export const MainVideo: React.FC = () => {
  const t = linearTiming({ durationInFrames: T });
  return (
    <AbsoluteFill>
      <Backdrop />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={D}>
          <SceneCode />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t} />
        <TransitionSeries.Sequence durationInFrames={D}>
          <SceneDesktop />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t} />
        <TransitionSeries.Sequence durationInFrames={D}>
          <SceneDeviceSync />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t} />
        <TransitionSeries.Sequence durationInFrames={D}>
          <SceneNetwork />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={t} />
        <TransitionSeries.Sequence durationInFrames={D}>
          <SceneGrid />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
