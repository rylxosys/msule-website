// components/sections/services.tsx
import Link from "next/link";
import { Reveal, RevealStagger } from "../common/Reveal";
import { SERVICES } from "@/content/services";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal variant="fadeUp">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              What We Do
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Services built around your product
            </h2>
            <p className="mt-4 text-lg text-muted">
              From first prototype to enterprise scale, we cover the full
              lifecycle of software product development.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(
            ({ icon: Icon, title, overview: description, slug: href }) => (
              <Link
                key={title}
                href={`/services/${href}`}
                className="group relative flex flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-accent-soft">
                  <Icon className="size-5 text-accent" />
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>

                <ArrowUpRight className="absolute right-6 top-6 size-4 text-muted-soft opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ),
          )}
        </RevealStagger>
      </div>
    </section>
  );
}
