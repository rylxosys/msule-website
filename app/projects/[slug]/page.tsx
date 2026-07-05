// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROJECTS, getProjectBySlug } from "@/content/projects";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: `${project.title} — Msule`, description: project.overview };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <main className="bg-bg">
      {/* Hero */}
      <section className="border-b border-border bg-white py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            All Projects
          </Link>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-accent">
            {project.industry}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            {project.overview}
          </p>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="mx-auto max-w-[1100px] px-6 py-14">
        <div className="aspect-[16/9] w-full rounded-2xl bg-gradient-to-br from-accent-soft to-accent/10 flex items-center justify-center">
          <span className="font-mono text-xs text-muted-soft">
            {project.title} — Product Screenshots
          </span>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="border-t border-border bg-white py-20">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              The Problem
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {project.problem}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Our Solution
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-[1000px] px-6">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Key Features
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.features.map((f) => (
              <div
                key={f}
                className="rounded-2xl border border-border bg-white p-5 text-sm text-ink"
              >
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech + Timeline */}
      <section className="border-t border-border bg-white py-20">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Tech Stack
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-accent-soft/60 px-3 py-1 font-mono text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">
              Timeline
            </h2>
            <p className="mt-5 text-sm text-muted">{project.timeline}</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-[1000px] px-6">
          <h2 className="font-display text-2xl font-semibold text-white">
            Results
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {project.results.map((r) => (
              <div
                key={r.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="font-mono text-xs uppercase tracking-wide text-accent">
                  {r.label}
                </span>
                <p className="mt-3 font-display text-lg font-semibold leading-snug text-white">
                  {r.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="py-20">
        <div className="mx-auto max-w-[1000px] px-6">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Related Projects
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="font-mono text-xs uppercase tracking-wide text-accent">
                  {p.industry}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{p.overview}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-white py-20 text-center">
        <div className="mx-auto max-w-[600px] px-6">
          <h2 className="font-display text-3xl font-bold text-ink">
            Have a similar project in mind?
          </h2>
          <Button
            asChild
            size="lg"
            className="mt-6 gap-2 rounded-full bg-accent px-8 text-accent-fg hover:bg-accent/90"
          >
            <Link href="/contact">
              Let&apos;s Talk
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
