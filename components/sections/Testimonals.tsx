// components/sections/testimonials.tsx
import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal, RevealStagger } from "../common/Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Msule didn't just build what we asked for — they questioned our assumptions and delivered something better. Our platform now handles 5x the load without breaking a sweat.",
    name: "Anjali Mehra",
    designation: "VP of Engineering",
    company: "HealthTrack",
  },
  {
    quote:
      "What stood out was how transparent they were about tradeoffs. No sugarcoating, just honest engineering advice that saved us months of rework.",
    name: "Rohan Kapoor",
    designation: "Founder",
    company: "BuildFlow",
  },
  {
    quote:
      "They've become an extension of our own team. Long after launch, they're still there fixing, improving, and thinking ahead with us.",
    name: "Sarah Chen",
    designation: "Head of Product",
    company: "FactoryLens",
  },
];

export function Testimonials() {
  return (
    <section className="bg-accent-soft/40 py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal variant="zoomIn">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              What Clients Say
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Trusted by teams who build seriously
            </h2>
          </div>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-white p-8"
            >
              <Quote className="size-6 text-accent" />
              <p className="mt-5 flex-1 text-sm leading-relaxed text-ink">
                “{t.quote}”
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <div className="flex size-10 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">
                    {t.designation}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
