// app/projects/page.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealStagger } from "@/components/common/Reveal";
import { ScrollHint } from "@/components/common/ScrollHint";
import { AbstractTile } from "@/components/common/AbstractTile";
import { PROJECTS } from "@/content/projects";

export const metadata = { title: "Projects — Msule" };

// Maps each project slug to a distinct abstract pattern, so cards
// don't all look identical — same mapping used on the homepage.
const PATTERN_MAP: Record<string, "nodes" | "blocks" | "waves"> = {
  healthtrack: "nodes",
  buildflow: "blocks",
  factorylens: "waves",
};

export default function ProjectsIndexPage() {
  return (
    <main className="bg-bg">
      {/* Hero */}
      <section className="py-24 text-center">
        <Reveal variant="fadeUp" className="mx-auto max-w-2xl px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Our Work
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Products we&apos;ve engineered
          </h1>
          <p className="mt-4 text-lg text-muted">
            {`A look at the systems we've designed, built, and shipped for
            businesses across different industries.`}
          </p>
          <ScrollHint />
        </Reveal>
      </section>

      {/* Projects grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <RevealStagger
            className="grid grid-cols-1 gap-8 lg:grid-cols-3"
            staggerDelay={0.15}
          >
            {PROJECTS.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <AbstractTile
                  pattern={PATTERN_MAP[project.slug] ?? "nodes"}
                  className="aspect-[4/3] w-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-xs uppercase tracking-wide text-accent">
                    {project.industry}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.overview}
                  </p>
                </div>
              </Link>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-center">
        <Reveal variant="zoomIn" className="mx-auto max-w-[600px] px-6">
          <h2 className="font-display text-3xl font-bold text-white">
            Have a similar project in mind?
          </h2>
          <p className="mt-3 text-white/60">
            {`Let's talk about what you're building and how we can help.`}
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
