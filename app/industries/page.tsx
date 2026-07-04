// app/industries/page.tsx
import Link from "next/link";
import { INDUSTRIES } from "@/content/industries";

export const metadata = { title: "Industries — Msule" };

export default function IndustriesIndexPage() {
  return (
    <main className="bg-bg py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Industries
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Industries we understand deeply
          </h1>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map(({ slug, title, icon: Icon }) => (
            <Link
              key={slug}
              href={`/industries/${slug}`}
              className="group flex flex-col items-start gap-4 rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent-soft">
                <Icon className="size-5 text-accent" />
              </div>
              <h3 className="font-display text-base font-semibold text-ink">
                {title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
