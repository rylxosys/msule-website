// components/common/abstract-tile.tsx
"use client";

const PATTERNS = {
  nodes: (
    <svg viewBox="0 0 300 200" className="size-full" fill="none">
      <path
        d="M40 60 L120 100 L200 50 L260 90"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.35"
        strokeLinecap="round"
      />
      <path
        d="M120 100 L80 160 L180 170"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.35"
        strokeLinecap="round"
      />
      <circle cx="40" cy="60" r="6" fill="currentColor" fillOpacity="0.6" />
      <circle cx="120" cy="100" r="9" fill="currentColor" />
      <circle cx="200" cy="50" r="5" fill="currentColor" fillOpacity="0.5" />
      <circle cx="260" cy="90" r="6" fill="currentColor" fillOpacity="0.6" />
      <circle cx="80" cy="160" r="5" fill="currentColor" fillOpacity="0.5" />
      <circle cx="180" cy="170" r="7" fill="currentColor" fillOpacity="0.7" />
    </svg>
  ),
  waves: (
    <svg viewBox="0 0 300 200" className="size-full" fill="none">
      <path
        d="M0 100 Q 75 60, 150 100 T 300 100"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.4"
      />
      <path
        d="M0 130 Q 75 90, 150 130 T 300 130"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.25"
      />
      <path
        d="M0 70 Q 75 30, 150 70 T 300 70"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.55"
      />
    </svg>
  ),
  blocks: (
    <svg viewBox="0 0 300 200" className="size-full" fill="none">
      <rect
        x="40"
        y="50"
        width="60"
        height="40"
        rx="8"
        fill="currentColor"
        fillOpacity="0.5"
      />
      <rect
        x="120"
        y="90"
        width="80"
        height="50"
        rx="8"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <rect
        x="220"
        y="40"
        width="50"
        height="70"
        rx="8"
        fill="currentColor"
        fillOpacity="0.65"
      />
      <rect
        x="60"
        y="120"
        width="50"
        height="35"
        rx="8"
        fill="currentColor"
        fillOpacity="0.4"
      />
    </svg>
  ),
};

export function AbstractTile({
  pattern = "nodes",
  className = "",
}: {
  pattern?: keyof typeof PATTERNS;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent-soft via-white to-accent2-soft text-accent ${className}`}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(#3654FF 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative w-3/4">{PATTERNS[pattern]}</div>
    </div>
  );
}
