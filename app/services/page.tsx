// app/services/page.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/content/services";

export const metadata = { title: "Services — Msule" };

export default function ServicesIndexPage() {
  return (
    <main className="bg-bg py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Services
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Everything you need to build and scale
          </h1>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ slug, title, overview, icon: Icon }) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent-soft">
                <Icon className="size-5 text-accent" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {overview}
              </p>
              <ArrowUpRight className="mt-auto self-end pt-4 size-4 text-muted-soft opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
