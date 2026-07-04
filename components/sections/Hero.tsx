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
    <section className="relative overflow-hidden bg-bg">
      {/* Ambient background glow — soft, blurred, off-canvas */}
      <div className="pointer-events-none absolute -top-40 right-0 size-[600px] rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 -right-20 size-[400px] rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-[1280px] gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-32">
        {/* Left: copy */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl"
          >
            Engineering Software
            <br />
            That Moves Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="mt-6 max-w-md text-lg text-muted"
          >
            We design, build, and scale digital products for businesses that
            need more than another dev shop — a long-term technology partner.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="gap-2 rounded-full bg-accent px-7 text-accent-fg shadow-lg shadow-accent/25 hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30"
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
          </motion.div>
        </div>

        {/* Right: visual */}
        <div className="mx-auto w-full max-w-md">
          <div className="relative hidden md:block md:aspect-square">
            {/* Layered glow rings for depth */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/10 via-accent-soft to-transparent blur-2xl" />
            <div className="absolute inset-8 rounded-[45%] bg-gradient-to-br from-accent-soft via-white to-accent-soft" />
            <div
              className="absolute inset-8 rounded-[45%] opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(#2F5EFF 1px, transparent 1px)",
                backgroundSize: "16px 16px",
                maskImage:
                  "radial-gradient(circle, black 40%, transparent 70%)",
              }}
            />

            {/* Glass centerpiece card */}
            <div className="absolute inset-20 flex items-center justify-center rounded-3xl border border-white/60 bg-white/40 shadow-xl backdrop-blur-md">
              <svg viewBox="0 0 200 200" className="size-2/3" fill="none">
                <path
                  d="M50 70 L100 100 L150 60"
                  stroke="#2F5EFF"
                  strokeWidth="2.5"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                />
                <path
                  d="M100 100 L70 150 L130 160"
                  stroke="#2F5EFF"
                  strokeWidth="2.5"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                />
                <path
                  d="M100 100 L150 140"
                  stroke="#2F5EFF"
                  strokeWidth="2.5"
                  strokeOpacity="0.5"
                  strokeLinecap="round"
                />
                <circle cx="50" cy="70" r="7" fill="#2F5EFF" />
                <circle cx="150" cy="60" r="5" fill="#0F172A" />
                <circle cx="70" cy="150" r="5" fill="#0F172A" />
                <circle cx="130" cy="160" r="7" fill="#2F5EFF" />
                <circle cx="150" cy="140" r="5" fill="#0F172A" />
                <circle cx="100" cy="100" r="10" fill="#2F5EFF" />
              </svg>
            </div>

            {/* Floating cards — glassy + gently animated */}
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
                  className={`absolute ${position} flex items-center gap-2 rounded-xl border border-white/70 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-sm`}
                >
                  <Icon className="size-4 text-accent" />
                  <span className="whitespace-nowrap text-sm font-medium text-ink">
                    {label}
                  </span>
                </motion.div>
              ),
            )}
          </div>

          {/* Mobile: static grid, no float animation (avoids jank on smaller/weaker devices) */}
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
