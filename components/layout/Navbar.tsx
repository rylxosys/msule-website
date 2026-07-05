// components/layout/navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MsuleLogo } from "../common/MsuleLogo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // "/" should only be active on the exact homepage.
  // Other links should be active on their page AND any nested route
  // (e.g. "/services" stays active while on "/services/product-engineering").
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-shadow",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-white/90 backdrop-blur-md border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-ink"
        >
          <MsuleLogo />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-ink",
                    active ? "text-ink" : "text-muted",
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 rounded-full bg-accent" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="gap-1.5 rounded-full bg-accent px-5 text-accent-fg hover:bg-accent/90"
          >
            <Link href="/contact">
              Let&apos;s Talk
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="size-6 text-ink" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-white">
            <div className="mt-10 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-lg px-3 py-3 text-base font-medium hover:bg-accent-soft",
                        active ? "bg-accent-soft text-accent" : "text-ink",
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                );
              })}
              <SheetClose asChild>
                <Button
                  asChild
                  className="mt-4 gap-1.5 rounded-full bg-accent text-accent-fg hover:bg-accent/90"
                >
                  <Link href="/contact">
                    Let&apos;s Talk
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
