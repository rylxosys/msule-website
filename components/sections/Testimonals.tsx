// components/sections/testimonials.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "../common/Reveal";
import { TESTIMONIALS } from "@/content/testimonials";
import Image from "next/image";

function getCardPosition(index: number, active: number, total: number) {
  const diff = (index - active + total) % total;

  if (diff === 0) {
    return { x: 0, scale: 1, opacity: 1, zIndex: 30, rotate: 0 };
  }
  if (diff === 1) {
    return { x: 260, scale: 0.9, opacity: 0.45, zIndex: 20, rotate: 4 };
  }
  if (diff === total - 1) {
    return { x: -260, scale: 0.9, opacity: 0.45, zIndex: 20, rotate: -4 };
  }
  return { x: 0, scale: 0.8, opacity: 0, zIndex: 10, rotate: 0 };
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;

  const next = () => setActive((i) => (i + 1) % total);
  const prev = () => setActive((i) => (i - 1 + total) % total);

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

        <div className="relative mt-16 overflow-hidden py-10">
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-2 top-1/2 z-40 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-ink shadow-sm transition hover:bg-accent-soft md:left-8"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Cards */}
          <div className="relative flex h-[300px] items-center justify-center">
            {TESTIMONIALS.map((t, index) => {
              const position = getCardPosition(index, active, total);
              return (
                <motion.div
                  key={t.name}
                  className="absolute w-[300px] rounded-2xl border border-border bg-white p-6 shadow-lg md:w-[380px]"
                  animate={position}
                  initial={false}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Quote className="size-6 text-accent" />

                  <p className="mt-4 text-sm italic leading-relaxed text-muted">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent">
                      {t.photo ? (
                        <Image
                          src={t.photo}
                          alt={t.name}
                          width={48}
                          height={48}
                          className="size-11 rounded-full"
                        />
                      ) : (
                        t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{t.name}</p>
                      <p className="text-xs text-muted">
                        {t.designation}, {t.company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-2 top-1/2 z-40 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-ink shadow-sm transition hover:bg-accent-soft md:right-8"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === active ? "w-8 bg-accent" : "w-2.5 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
