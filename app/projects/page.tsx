// app/projects/page.tsx
import Link from "next/link";
import { PROJECTS } from "@/content/projects";

export const metadata = { title: "Projects — Msule" };

export default function ProjectsIndexPage() {
  return (
    <main className="bg-bg py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Our Work
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Products we&apos;ve engineered
          </h1>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-accent-soft to-accent/10 flex items-center justify-center">
                <span className="font-mono text-xs text-muted-soft">
                  {project.industry} Project
                </span>
              </div>
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
        </div>
      </div>
    </main>
  );
}
