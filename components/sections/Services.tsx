// components/sections/services.tsx
import Link from "next/link";
import {
  Layers,
  Globe,
  Smartphone,
  Building2,
  Sparkles,
  Cloud,
  Lightbulb,
  LifeBuoy,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Layers,
    title: "Product Engineering",
    description: "End-to-end product builds, from concept to scale.",
    href: "/services/product-engineering",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Fast, accessible web platforms built to last.",
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform apps users love.",
    href: "/services/mobile-development",
  },
  {
    icon: Building2,
    title: "Enterprise Software",
    description: "Reliable systems for complex business operations.",
    href: "/services/enterprise-software",
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    description: "Practical AI integration that drives real outcomes.",
    href: "/services/ai-integration",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable, secure cloud infrastructure and DevOps.",
    href: "/services/cloud-engineering",
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    description: "Strategic guidance to de-risk technical decisions.",
    href: "/services/consulting",
  },
  {
    icon: LifeBuoy,
    title: "Support & Maintenance",
    description: "Long-term care that keeps products running smoothly.",
    href: "/services/support-maintenance",
  },
];

export function Services() {
  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-[1280px] px-6">
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

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
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
          ))}
        </div>
      </div>
    </section>
  );
}
