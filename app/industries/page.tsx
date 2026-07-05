// app/industries/page.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealStagger } from "@/components/common/Reveal";
import { ScrollHint } from "@/components/common/ScrollHint";
import { INDUSTRIES } from "@/content/industries";

export const metadata = { title: "Industries — Msule" };

export default function IndustriesIndexPage() {
  return (
    <main className="bg-bg">
      {/* Hero */}
      <section className="py-24 text-center">
        <Reveal variant="fadeUp" className="mx-auto max-w-2xl px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Industries
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Industries we understand deeply
          </h1>
          <p className="mt-4 text-lg text-muted">
            Domain expertise that goes beyond writing code — we understand the
            operational realities of the industries we build for.
          </p>
          <ScrollHint />
        </Reveal>
      </section>

      {/* Industry grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <RevealStagger
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            staggerDelay={0.08}
          >
            {INDUSTRIES.map(({ slug, title, icon: Icon }) => (
              <Link
                key={slug}
                href={`/industries/${slug}`}
                className="group flex flex-col items-start gap-4 rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-accent-soft">
                  <Icon className="size-5 text-accent" />
                </div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {title}
                </h3>
              </Link>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-center">
        <Reveal variant="zoomIn" className="mx-auto max-w-[600px] px-6">
          <h2 className="font-display text-3xl font-bold text-white">
            Don&apos;t see your industry listed?
          </h2>
          <p className="mt-3 text-white/60">
            {`We work across many domains beyond these — tell us what you're
            building and we'll figure out the right approach together.`}
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
