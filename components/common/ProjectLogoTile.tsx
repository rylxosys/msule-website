// components/common/ProjectLogoTile.tsx
import Image from "next/image";

export function ProjectLogoTile({
  logo,
  name,
  className = "",
}: {
  logo?: string;
  name: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center bg-gradient-to-br from-accent-soft via-white to-accent2-soft ${className}`}
    >
      {logo ? (
        <Image
          src={logo}
          alt={`${name} logo`}
          width={160}
          height={160}
          className="max-h-20 w-auto object-contain"
        />
      ) : (
        // Fallback until a real logo file is added — clean wordmark, not a broken image
        <span className="font-display text-2xl font-bold tracking-tight text-accent">
          {name}
        </span>
      )}
    </div>
  );
}
