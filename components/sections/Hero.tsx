// components/sections/hero.tsx
import Link from "next/link";
import { ArrowRight, Code2, Cloud, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const FLOATING_CARDS = [
  {
    icon: Code2,
    label: "Product Engineering",
    position: "md:top-4 md:-left-6 lg:-left-10",
  },
  {
    icon: Sparkles,
    label: "AI Solutions",
    position: "md:top-1/4 md:-right-4 lg:-right-10",
  },
  {
    icon: Cloud,
    label: "Cloud Native",
    position: "md:bottom-1/4 md:-left-8 lg:-left-14",
  },
  {
    icon: ShieldCheck,
    label: "24/7 Support",
    position: "md:bottom-6 md:-right-2 lg:-right-8",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-32">
        {/* Left: copy — unchanged */}
        <div>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
            Engineering Software
            <br />
            That Moves Business
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted">
            We design, build, and scale digital products for businesses that
            need more than another dev shop — a long-term technology partner.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="gap-2 rounded-full bg-accent px-7 text-accent-fg hover:bg-accent/90"
            >
              <Link href="/contact">
                Start a Project
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-border px-7 text-ink hover:bg-accent-soft"
            >
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>

        {/* Right: visual */}
        <div className="mx-auto w-full max-w-md">
          {/* Blob — only shown as backdrop on md+, where cards float on top of it */}
          <div className="relative hidden md:block md:aspect-square">
            <div className="absolute inset-8 rounded-[40%] bg-accent-soft" />
            {FLOATING_CARDS.map(({ icon: Icon, label, position }) => (
              <div
                key={label}
                className={`absolute ${position} flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-3 shadow-md`}
              >
                <Icon className="size-4 text-accent" />
                <span className="whitespace-nowrap text-sm font-medium text-ink">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile: static 2x2 grid, no absolute positioning, no overflow risk */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {FLOATING_CARDS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-xl border border-border bg-white px-4 py-3 shadow-sm"
              >
                <Icon className="size-4 shrink-0 text-accent" />
                <span className="text-sm font-medium text-ink">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
