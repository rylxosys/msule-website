// components/sections/industries.tsx
import Link from "next/link";
import {
  HeartPulse,
  Factory,
  HardHat,
  ShoppingCart,
  Wheat,
  GraduationCap,
  Landmark,
} from "lucide-react";

const INDUSTRIES = [
  { icon: HeartPulse, title: "Healthcare", href: "/industries/healthcare" },
  { icon: Factory, title: "Manufacturing", href: "/industries/manufacturing" },
  { icon: HardHat, title: "Construction", href: "/industries/construction" },
  { icon: ShoppingCart, title: "Retail", href: "/industries/retail" },
  { icon: Wheat, title: "Agriculture", href: "/industries/agriculture" },
  { icon: GraduationCap, title: "Education", href: "/industries/education" },
  { icon: Landmark, title: "Finance", href: "/industries/finance" },
];

export function Industries() {
  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Who We Work With
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Industries we understand deeply
          </h2>
          <p className="mt-4 text-lg text-muted">
            Domain expertise that goes beyond writing code — we understand the
            operational realities of the industries we build for.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map(({ icon: Icon, title, href }) => (
            <Link
              key={title}
              href={href}
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
    </section>
  );
}
