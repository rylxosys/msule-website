// components/layout/footer.tsx
import Link from "next/link";
import {
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
} from "@/components/common/SocialIcons";
import { Mail } from "lucide-react";
import { MsuleLogo } from "../common/MsuleLogo";

const FOOTER_LINKS = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Product Engineering", href: "/services/product-engineering" },
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile Development", href: "/services/mobile-development" },
    { label: "AI Integration", href: "/services/ai-integration" },
    { label: "Cloud Engineering", href: "/services/cloud-engineering" },
  ],
  Industries: [
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Construction", href: "/industries/construction" },
    { label: "Finance", href: "/industries/finance" },
  ],
  Work: [
    { label: "Projects", href: "/projects" },
    { label: "Process", href: "/process" },
  ],
};

const SOCIALS = [
  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          {/* Brand column */}
          <div className="col-span-2">
            <Link
              href="/"
              className="font-display text-xl font-bold tracking-tight text-ink"
            >
              <MsuleLogo size="lg" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Your long-term technology partner — engineering software that
              moves business.
            </p>
            <a
              href="mailto:hello@msule.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent"
            >
              <Mail className="size-4" />
              hello@msule.com
            </a>

            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/30 hover:text-accent"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display text-sm font-semibold text-ink">
                {heading}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Msule. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-muted hover:text-ink"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted hover:text-ink">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
