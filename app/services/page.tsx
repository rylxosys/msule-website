// app/services/page.tsx
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealStagger } from "@/components/common/Reveal";
import { ScrollHint } from "@/components/common/ScrollHint";
import { SERVICES } from "@/content/services";

export const metadata = { title: "Services — Msule" };

export default function ServicesIndexPage() {
  return (
    <main className="bg-bg">
      {/* Hero */}
      <section className="py-24 text-center">
        <Reveal variant="fadeUp" className="mx-auto max-w-2xl px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Services
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Everything you need to build and scale
          </h1>
          <p className="mt-4 text-lg text-muted">
            From first prototype to enterprise scale, we cover the full
            lifecycle of software product development.
          </p>
          <ScrollHint />
        </Reveal>
      </section>

      {/* Services grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <RevealStagger
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.08}
          >
            {SERVICES.map(({ slug, title, overview, icon: Icon }) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-accent-soft">
                  <Icon className="size-5 text-accent" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {overview}
                </p>
                <ArrowUpRight className="mt-auto self-end pt-4 size-4 text-muted-soft opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-center">
        <Reveal variant="zoomIn" className="mx-auto max-w-[600px] px-6">
          <h2 className="font-display text-3xl font-bold text-white">
            Not sure which service fits?
          </h2>
          <p className="mt-3 text-white/60">
            {`Tell us what you're building — we'll help you figure out the right
            approach together.`}
          </p>
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
