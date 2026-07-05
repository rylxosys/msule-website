import Image from "next/image";

export function MsuleLogo({
  size = "sm",
  variant = "light",
}: {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "dark" | "light";
}) {
  const sizeMap = { xs: 50, sm: 80, md: 110, lg: 148 }[size];
  const src =
    variant === "light"
      ? "/brand/msule-logo.png"
      : "/brand/msule-dark-logo.png";

  return (
    <Image
      src={src}
      alt="Msule"
      width={sizeMap}
      height={48}
      style={{ height: "auto" }}
    />
  );
}
