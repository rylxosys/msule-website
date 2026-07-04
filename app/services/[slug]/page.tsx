// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES, getServiceBySlug } from "@/content/services";
import { JsonLd } from "@/components/common/JsonLd";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} — Msule`,
    description: service.overview,
  };
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <main className="bg-bg">
      {/* Hero */}
      <section className="mx-auto max-w-[900px] px-6 py-20 text-center md:py-28">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-accent-soft">
          <Icon className="size-6 text-accent" />
        </div>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          {service.title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
          {service.overview}
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 gap-2 rounded-full bg-accent px-8 text-accent-fg hover:bg-accent/90"
        >
          <Link href="/contact">
            Start a Project
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </section>

      {/* Benefits */}
      <section className="border-t border-border bg-white py-20">
        <div className="mx-auto max-w-[1000px] px-6">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Benefits
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {service.benefits.map((b) => (
              <div
                key={b}
                className="flex gap-3 rounded-2xl border border-border p-5"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                <p className="text-sm text-muted">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="mx-auto max-w-[1000px] px-6">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Our Process
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {service.process.map((step, i) => (
              <div
                key={step}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <span className="font-mono text-xs text-muted-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-medium text-ink">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="border-t border-border bg-white py-20">
        <div className="mx-auto max-w-[1000px] px-6">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Technologies
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-accent-soft/60 px-3 py-1 font-mono text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-center">
        <div className="mx-auto max-w-[600px] px-6">
          <h2 className="font-display text-3xl font-bold text-white">
            Ready to talk about your {service.title.toLowerCase()} project?
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: service.title,
          provider: { "@type": "Organization", name: "Msule" },
          description: service.overview,
        }}
      />
    </main>
  );
}
