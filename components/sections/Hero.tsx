// components/sections/hero.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Cloud,
  Sparkles,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";

const FLOATING_CARDS = [
  {
    icon: Code2,
    label: "Product Engineering",
    angle: -60,
    floatDelay: 0,
  },
  {
    icon: Building2,
    label: "Enterprise Software",
    angle: 0,
    floatDelay: 0.5,
  },
  {
    icon: ShieldCheck,
    label: "24/7 Support",
    angle: 150,
    floatDelay: 1,
  },
  { icon: Cloud, label: "Cloud Native", angle: 60, floatDelay: 1.5 },
];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) videoRef.current?.pause();
  }, [reducedMotion]);

  return (
    <section className="relative min-h-160 overflow-hidden bg-ink">
      {!reducedMotion && (
        <video
          ref={videoRef}
          className="absolute inset-0 hidden size-full object-cover md:block"
          poster="/assets/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
      )}

      <div
        className={`absolute inset-0 size-full bg-cover bg-center ${
          reducedMotion ? "block" : "md:hidden"
        }`}
        style={{ backgroundImage: "url(/assets/hero-poster.jpg)" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/40" />

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-36">
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

        {/* Right: floating cards + connecting line, on a glass circle */}

        <div className="relative mx-auto hidden size-[440px] md:block">
          {/* Glass circle platform */}
          <div className="absolute left-1/2 top-1/2 size-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/2 shadow-2xl backdrop-blur-xs" />

          {/* Cards positioned via trig at fixed angles around the circle's edge.
              Circle center = (220, 220), radius = 170 (edge of the 340px circle). */}
          {FLOATING_CARDS.map(({ icon: Icon, label, angle, floatDelay }) => {
            const radius = 170;
            const rad = (angle * Math.PI) / 180;
            const x = 220 + radius * Math.cos(rad);
            const y = 220 + radius * Math.sin(rad);

            return (
              <motion.div
                key={label}
                style={{ left: x, top: y }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: floatDelay,
                  ease: "easeInOut",
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 whitespace-nowrap rounded-xl border border-white/20 bg-white/10 px-4 py-3 shadow-lg backdrop-blur-md"
              >
                <Icon className="size-4 text-white" />
                <span className="text-sm font-medium text-white">{label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: static grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {FLOATING_CARDS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md"
            >
              <Icon className="size-4 shrink-0 text-white" />
              <span className="text-sm font-medium text-white">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
