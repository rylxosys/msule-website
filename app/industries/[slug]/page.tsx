// app/industries/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INDUSTRIES, getIndustryBySlug } from "@/content/industries";
import { PROJECTS } from "@/content/projects";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return { title: `${industry.title} — Msule`, description: industry.intro };
}

export default async function IndustryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const Icon = industry.icon;
  const relatedProjects = PROJECTS.filter((p) =>
    industry.relatedProjectSlugs.includes(p.slug),
  );

  return (
    <main className="bg-bg">
      {/* Hero */}
      <section className="border-b border-border bg-white py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            All Industries
          </Link>
          <div className="mt-6 flex size-14 items-center justify-center rounded-2xl bg-accent-soft">
            <Icon className="size-6 text-accent" />
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {industry.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">{industry.intro}</p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Common Challenges
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {industry.challenges.map((c) => (
              <div
                key={c}
                className="rounded-2xl border border-border bg-white p-5 text-sm text-muted"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="border-t border-border bg-white py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <h2 className="font-display text-2xl font-semibold text-ink">
            How Msule Helps
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            {industry.howWeHelp}
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Solutions We Offer
          </h2>
          <div className="mt-8 flex flex-col gap-3">
            {industry.solutions.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 rounded-xl border border-border bg-white p-4"
              >
                <Check className="size-4 shrink-0 text-accent" />
                <span className="text-sm text-ink">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example projects (only if any exist) */}
      {relatedProjects.length > 0 && (
        <section className="border-t border-border bg-white py-20">
          <div className="mx-auto max-w-[900px] px-6">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Example Work
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {relatedProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group rounded-2xl border border-border p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{p.overview}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-ink py-20 text-center">
        <div className="mx-auto max-w-[600px] px-6">
          <h2 className="font-display text-3xl font-bold text-white">
            Building for {industry.title.toLowerCase()}? Let&apos;s talk.
          </h2>
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
        </div>
      </section>
    </main>
  );
}
