// components/sections/featured-projects.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealStagger } from "../common/Reveal";
import { AbstractTile } from "../common/AbstractTile";
import { pattern } from "framer-motion/client";

const PROJECTS = [
  {
    title: "HealthTrack — Patient Management Platform",
    industry: "Healthcare",
    description:
      "A unified patient records and scheduling system replacing three legacy tools, cutting admin time significantly.",
    tech: ["Next.js", "PostgreSQL", "AWS"],
    impact: "40% faster patient intake",
    image: "/assets/projects/healthtrack.jpg",
    href: "/projects/healthtrack",
    pattern: "nodes" as const,
  },
  {
    title: "BuildFlow — Construction Site Management",
    industry: "Construction",
    description:
      "Real-time site tracking, resource allocation, and reporting for multi-site construction firms.",
    tech: ["React Native", "Node.js", "GCP"],
    impact: "3x faster reporting cycles",
    image: "/assets/projects/buildflow.jpg",
    href: "/projects/buildflow",
    pattern: "blocks" as const,
  },
  {
    title: "FactoryLens — Manufacturing Analytics",
    industry: "Manufacturing",
    description:
      "IoT-driven dashboard giving plant managers live visibility into line performance and downtime.",
    tech: ["TypeScript", "Kafka", "Azure"],
    impact: "18% reduction in downtime",
    image: "/assets/projects/factorylens.jpg",
    href: "/projects/factorylens",
    pattern: "waves" as const,
  },
];

export function FeaturedProjects() {
  return (
    <section className="bg-accent-soft/40 py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal variant="slideRight">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Our Work
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
                Products we&apos;ve engineered
              </h2>
            </div>
          </Reveal>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent"
          >
            View all projects
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <RevealStagger
          className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3"
          staggerDelay={0.15}
        >
          {PROJECTS.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/*<div className="relative aspect-[4/3] w-full overflow-hidden bg-accent-soft">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>*/}
              <AbstractTile
                pattern={project.pattern}
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
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="text-sm font-semibold text-ink">
                    {project.impact}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-soft transition-colors group-hover:text-accent" />
                </div>
              </div>
            </Link>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
