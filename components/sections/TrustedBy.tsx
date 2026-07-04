// components/sections/trusted-by.tsx
const INDUSTRIES = [
  "Healthcare",
  "Manufacturing",
  "Construction",
  "Retail",
  "Finance",
  "Education",
];

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-bg py-12">
      <div className="mx-auto max-w-[1280px] px-6">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-soft">
          Helping businesses across multiple industries
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {INDUSTRIES.map((industry) => (
            <span
              key={industry}
              className="font-display text-lg font-semibold text-muted"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
