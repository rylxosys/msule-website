// components/sections/process.tsx
import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  Bug,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Discovery",
    description: "Understanding your business, users, and goals.",
  },
  {
    icon: ClipboardList,
    title: "Planning",
    description: "Scoping architecture, timelines, and priorities.",
  },
  {
    icon: Palette,
    title: "UX/UI",
    description: "Designing interfaces that are intuitive and on-brand.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Building with clean, scalable, well-tested code.",
  },
  {
    icon: Bug,
    title: "Testing",
    description: "Rigorous QA across devices, edge cases, and load.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Shipping to production with zero-downtime releases.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description: "Ongoing monitoring, fixes, and feature evolution.",
  },
];

export function Process() {
  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            How We Work
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            A process built for clarity
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-6 h-px bg-border" />
            <div className="relative grid grid-cols-7 gap-4">
              {STEPS.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-border bg-white">
                    <Icon className="size-5 text-accent" />
                  </div>
                  <h3 className="mt-4 font-display text-sm font-semibold text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/tablet: vertical steps */}
        <div className="mt-12 flex flex-col lg:hidden">
          {STEPS.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="relative flex gap-5 pb-10 last:pb-0">
              {i !== STEPS.length - 1 && (
                <div className="absolute left-6 top-12 h-full w-px bg-border" />
              )}
              <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-white">
                <Icon className="size-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
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
