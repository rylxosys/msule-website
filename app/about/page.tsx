// app/about/page.tsx
import { Target, Eye, Heart, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal, RevealStagger } from "@/components/common/Reveal";
import { ScrollHint } from "@/components/common/ScrollHint";
import Image from "next/image";

const VALUES = [
  {
    title: "Ownership",
    description:
      "We treat every project like it's our own product, not a ticket to close.",
  },
  {
    title: "Honesty",
    description:
      "We tell clients what they need to hear, not just what's easy to say.",
  },
  {
    title: "Craft",
    description:
      "We care about the quality of what we ship, even in the parts no one sees.",
  },
  {
    title: "Partnership",
    description:
      "We measure success by our clients' long-term outcomes, not billed hours.",
  },
];

const LEADERSHIP = [
  {
    name: "Sudipta Ghosh",
    role: "Founder & CEO",
    photo: "/assets/sudipta-ghosh-founder.jpeg",
  },
  {
    name: "Buddhadeb Das",
    role: "Head of Engineering",
    photo: "/assets/buddhadeb-das.jpeg",
  },
  {
    name: "Leena Mukherjee",
    role: "Head of Design",
    photo: "/assets/leena-mukherjee-lead.png",
  },
];

export const metadata = { title: "About — Msule" };

export default function AboutPage() {
  return (
    <main className="bg-bg">
      {/* Hero */}
      <section className="border-b border-border bg-white py-20 md:py-28">
        <Reveal
          variant="fadeUp"
          className="mx-auto max-w-[900px] px-6 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            About Msule
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            We&apos;re not another dev shop
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            {`Msule was built to be the technology partner businesses wish they'd
            found sooner — one that thinks about outcomes, not just output.`}
          </p>
          <ScrollHint />
        </Reveal>
      </section>

      {/* Company story */}
      <section className="py-20">
        <Reveal variant="fadeUp" className="mx-auto max-w-[800px] px-6">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Our Story
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            {`Msule started from a simple frustration: too many businesses were
            getting software built by teams that disappeared after launch,
            leaving them stuck with systems they didn't fully own or understand.
            We set out to do it differently — staying involved, being
            transparent about tradeoffs, and building things meant to last
            years, not just ship on time.`}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Today, we work with businesses across healthcare, manufacturing,
            construction, and beyond — helping them build software that actually
            fits how they operate.
          </p>
        </Reveal>
      </section>

      {/* Mission / Vision */}
      <section className="border-t border-border bg-white py-20">
        <RevealStagger
          className="mx-auto grid max-w-[900px] grid-cols-1 gap-10 px-6 md:grid-cols-2"
          staggerDelay={0.15}
        >
          <div>
            <div className="flex size-11 items-center justify-center rounded-xl bg-accent-soft">
              <Target className="size-5 text-accent" />
            </div>
            <h2 className="mt-5 font-display text-xl font-semibold text-ink">
              Mission
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              To be the long-term technology partner businesses can rely on to
              build, scale, and evolve their software products.
            </p>
          </div>
          <div>
            <div className="flex size-11 items-center justify-center rounded-xl bg-accent-soft">
              <Eye className="size-5 text-accent" />
            </div>
            <h2 className="mt-5 font-display text-xl font-semibold text-ink">
              Vision
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {`A world where businesses of any size have access to the same
              quality of product engineering as the world's best tech companies.`}
            </p>
          </div>
        </RevealStagger>
      </section>

      {/* Core values */}
      <section className="py-20">
        <div className="mx-auto max-w-[1000px] px-6">
          <Reveal variant="fadeUp">
            <div className="flex items-center gap-3">
              <Heart className="size-5 text-accent" />
              <h2 className="font-display text-2xl font-semibold text-ink">
                Core Values
              </h2>
            </div>
          </Reveal>

          <RevealStagger
            className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2"
            staggerDelay={0.1}
          >
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <h3 className="font-display text-base font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {v.description}
                </p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-border bg-white py-20">
        <div className="mx-auto max-w-[1000px] px-6">
          <Reveal variant="fadeUp">
            <div className="flex items-center gap-3">
              <Users className="size-5 text-accent" />
              <h2 className="font-display text-2xl font-semibold text-ink">
                Leadership
              </h2>
            </div>
          </Reveal>

          <RevealStagger
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3"
            staggerDelay={0.12}
          >
            {LEADERSHIP.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-border p-6 text-center"
              >
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-accent-soft font-display text-lg font-semibold text-accent">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-accent-soft font-display text-sm font-semibold text-accent">
                    {person.photo ? (
                      <Image
                        src={person.photo}
                        alt={person.name}
                        width={48}
                        height={48}
                        className="size-16 rounded-full"
                      />
                    ) : (
                      person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                    )}
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold text-ink">
                  {person.name}
                </p>
                <p className="text-xs text-muted">{person.role}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-center">
        <Reveal variant="zoomIn" className="mx-auto max-w-[600px] px-6">
          <h2 className="font-display text-3xl font-bold text-white">
            Want to work with us?
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
        </Reveal>
      </section>
    </main>
  );
}
