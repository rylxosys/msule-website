// components/sections/trusted-by.tsx
import {
  HeartPulse,
  HardHat,
  GraduationCap,
  HandHeart,
  Wheat,
} from "lucide-react";
import { Reveal, RevealStagger } from "@/components/common/Reveal";

const INDUSTRIES = [
  { label: "Healthcare", icon: HeartPulse },
  { label: "Non-Profit", icon: HandHeart },
  { label: "Construction", icon: HardHat },
  { label: "Agriculture", icon: Wheat },
  { label: "Education", icon: GraduationCap },
];

export function TrustedBy() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink via-ink to-bg pb-16 pt-20">
      <div className="relative mx-auto max-w-[1280px] px-6">
        <Reveal variant="fadeUp">
          <p className="text-center font-mono text-xs uppercase tracking-widest text-accent">
            Helping Businesses Across Multiple Industries
          </p>
        </Reveal>

        <RevealStagger
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          staggerDelay={0.06}
        >
          {INDUSTRIES.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/90 px-5 py-2.5 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-md"
            >
              <Icon className="size-4 text-accent" />
              <span className="font-display text-sm font-semibold text-ink">
                {label}
              </span>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
