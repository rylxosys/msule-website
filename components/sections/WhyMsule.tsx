// components/sections/why-msule.tsx
import {
  Target,
  Cpu,
  Layers3,
  MessageSquare,
  LifeBuoy,
  ShieldCheck,
} from "lucide-react";

const STRENGTHS = [
  {
    icon: Target,
    title: "Business-first approach",
    description:
      "Every technical decision is weighed against real business outcomes, not just what's technically interesting.",
  },
  {
    icon: Cpu,
    title: "Modern engineering",
    description:
      "We build with current, well-supported tools — no legacy patterns or unnecessary complexity.",
  },
  {
    icon: Layers3,
    title: "Scalable architecture",
    description:
      "Systems designed to handle growth from day one, so you don't rebuild from scratch at scale.",
  },
  {
    icon: MessageSquare,
    title: "Transparent communication",
    description:
      "Clear timelines, honest tradeoffs, and no surprises — you always know where your project stands.",
  },
  {
    icon: LifeBuoy,
    title: "Long-term support",
    description:
      "We stay involved after launch, as a partner responsible for your product's continued success.",
  },
  {
    icon: ShieldCheck,
    title: "Security-focused development",
    description:
      "Security is built in from the start, not patched on afterward.",
  },
];

export function WhyMsule() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Why Msule
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            A partner, not a vendor
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
          {STRENGTHS.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="flex gap-5 border-t border-white/10 pt-6"
            >
              <span className="font-mono text-sm text-white/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <Icon className="size-5 text-accent" />
                  <h3 className="font-display text-lg font-semibold text-white">
                    {title}
                  </h3>
                </div>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
