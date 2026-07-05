// components/sections/cta-banner.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "../common/Reveal";

export function CTABanner() {
  return (
    <section className="bg-ink py-24">
      <Reveal variant="zoomIn" duration={0.7}>
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let&apos;s Build Something
            <br />
            Great Together
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Tell us about your product idea — we&apos;ll help you figure out the
            right way to build it.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="gap-2 rounded-full bg-accent px-8 text-accent-fg hover:bg-accent/90"
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
              className="rounded-full border-white/20 px-8 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
