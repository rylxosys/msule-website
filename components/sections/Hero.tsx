// components/sections/hero.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Cloud, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";

const FLOATING_CARDS = [
  {
    icon: Code2,
    label: "Product Engineering",
    position: "md:top-2 md:-left-8 lg:-left-12",
    floatDelay: 0,
  },
  {
    icon: Sparkles,
    label: "AI Solutions",
    position: "md:top-1/4 md:-right-6 lg:-right-12",
    floatDelay: 0.5,
  },
  {
    icon: Cloud,
    label: "Cloud Native",
    position: "md:bottom-1/4 md:-left-10 lg:-left-16",
    floatDelay: 1,
  },
  {
    icon: ShieldCheck,
    label: "24/7 Support",
    position: "md:bottom-4 md:-right-4 lg:-right-10",
    floatDelay: 1.5,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Layered blurred glow orbs — two hues, cult.fit-style depth */}
      <div className="pointer-events-none absolute -top-32 -left-20 size-[500px] rounded-full bg-accent/30 blur-[130px]" />
      <div className="pointer-events-none absolute top-10 right-0 size-[550px] rounded-full bg-warm/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 size-[400px] rounded-full bg-accent2/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-[1280px] gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-36">
        {/* Left: copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs text-white/70 backdrop-blur-sm">
              Product Engineering Company
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
              Engineering Software
              <br />
              That Moves Business
            </h1>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-6 max-w-md text-lg text-white/60">
              We design, build, and scale digital products for businesses that
              need more than another dev shop — a long-term technology partner.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 rounded-full bg-accent px-7 text-accent-fg shadow-lg shadow-accent/30 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/40"
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
                className="rounded-full border-white/20 bg-white/5 px-7 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
              >
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Right: visual */}
        <Reveal delay={0.3}>
          <div className="mx-auto w-full max-w-md">
            <div className="relative hidden md:block md:aspect-square">
              {/* Glass centerpiece */}
              <div className="absolute inset-10 flex items-center justify-center rounded-[2rem] border border-white/15 bg-white/[0.06] shadow-2xl backdrop-blur-xl">
                <svg viewBox="0 0 200 200" className="size-2/3" fill="none">
                  <path
                    d="M50 70 L100 100 L150 60"
                    stroke="#3654FF"
                    strokeWidth="2.5"
                    strokeOpacity="0.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M100 100 L70 150 L130 160"
                    stroke="#3654FF"
                    strokeWidth="2.5"
                    strokeOpacity="0.7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M100 100 L150 140"
                    stroke="#FF7A45"
                    strokeWidth="2.5"
                    strokeOpacity="0.7"
                    strokeLinecap="round"
                  />
                  <circle cx="50" cy="70" r="7" fill="#3654FF" />
                  <circle cx="150" cy="60" r="5" fill="#fff" />
                  <circle cx="70" cy="150" r="5" fill="#fff" />
                  <circle cx="130" cy="160" r="7" fill="#FF7A45" />
                  <circle cx="150" cy="140" r="5" fill="#fff" />
                  <circle cx="100" cy="100" r="10" fill="#3654FF" />
                </svg>
              </div>

              {/* Floating glass cards, gently bobbing */}
              {FLOATING_CARDS.map(
                ({ icon: Icon, label, position, floatDelay }) => (
                  <motion.div
                    key={label}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: floatDelay,
                      ease: "easeInOut",
                    }}
                    className={`absolute ${position} flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 shadow-lg backdrop-blur-md`}
                  >
                    <Icon className="size-4 text-white" />
                    <span className="whitespace-nowrap text-sm font-medium text-white">
                      {label}
                    </span>
                  </motion.div>
                ),
              )}
            </div>

            {/* Mobile: static grid */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
              {FLOATING_CARDS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md"
                >
                  <Icon className="size-4 shrink-0 text-white" />
                  <span className="text-sm font-medium text-white">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
