// components/sections/faq.tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope, but most products move from discovery to launch in 8–16 weeks. We'll give you a realistic timeline after understanding your requirements — not an inflated estimate to win the deal.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We scope projects based on outcomes, not hours billed. After discovery, you'll get a clear fixed-scope proposal or a retainer structure for ongoing work — whichever fits your needs better.",
  },
  {
    question: "Who owns the code and IP after the project?",
    answer:
      "You do — fully. Once the engagement is complete (or as agreed in your contract), all code, designs, and intellectual property belong to you.",
  },
  {
    question:
      "Do you only build new products, or can you improve an existing one?",
    answer:
      "Both. We regularly take over existing codebases — modernizing legacy systems, fixing technical debt, or extending products that are already live.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We don't disappear. Ongoing support, monitoring, and iteration are part of how we work — many of our clients stay with us long-term as their product evolves.",
  },
  {
    question: "How involved will I need to be during development?",
    answer:
      "As involved as you want. We run regular check-ins and keep communication transparent, but we're built to take ownership so you're not managing engineers day-to-day.",
  },
];

export function FAQ() {
  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-[900px] px-6">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Questions
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-14">
          {FAQS.map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`}>
              <AccordionTrigger className="font-display text-left text-base font-semibold text-ink hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
