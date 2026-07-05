// app/process/page.tsx
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealStagger } from "@/components/common/Reveal";
import { PROCESS_STEPS } from "@/content/process";
import { ScrollHint } from "@/components/common/ScrollHint";

export const metadata = { title: "Our Process — Msule" };

export default function ProcessPage() {
  return (
    <main className="bg-bg">
      {/* Hero */}
      <section className="border-b border-border bg-white py-20 md:py-28">
        <Reveal
          variant="fadeUp"
          className="mx-auto max-w-[800px] px-6 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            How We Work
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            A process built for clarity
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            {`No black boxes. Every project moves through the same seven stages,
            so you always know what's happening and what's next.`}
          </p>
          <ScrollHint />
        </Reveal>
      </section>

      {/* Detailed steps */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <RevealStagger className="flex flex-col gap-6" staggerDelay={0.1}>
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-2xl border border-border bg-white p-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft">
                        <Icon className="size-5 text-accent" />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-muted-soft">
                          {step.number}
                        </span>
                        <h2 className="font-display text-xl font-semibold text-ink">
                          {step.title}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted">
                      <Clock className="size-3.5" />
                      {step.duration}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {step.summary}
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-wide text-accent">
                        What Happens
                      </h3>
                      <ul className="mt-3 flex flex-col gap-2">
                        {step.activities.map((a) => (
                          <li key={a} className="flex gap-2 text-sm text-ink">
                            <span className="text-accent">—</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-wide text-accent">
                        Deliverables
                      </h3>
                      <ul className="mt-3 flex flex-col gap-2">
                        {step.deliverables.map((d) => (
                          <li key={d} className="flex gap-2 text-sm text-ink">
                            <span className="text-accent">—</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-center">
        <Reveal variant="zoomIn" className="mx-auto max-w-[600px] px-6">
          <h2 className="font-display text-3xl font-bold text-white">
            Ready to start the discovery call?
          </h2>
          <Button
            asChild
            size="lg"
            className="mt-6 gap-2 rounded-full bg-accent px-8 text-accent-fg hover:bg-accent/90"
          >
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </main>
  );
}
