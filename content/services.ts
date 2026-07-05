// content/services.ts
import {
  Layers,
  Globe,
  Smartphone,
  Sparkles,
  Cloud,
  LifeBuoy,
  Blocks,
  RefreshCw,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: typeof Layers;
  overview: string;
  benefits: string[];
  process: string[];
  technologies: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "product-engineering",
    title: "Product Engineering",
    icon: Layers,
    overview:
      "We take products from a rough idea to a fully engineered, scalable system — owning architecture, execution, and quality end to end.",
    benefits: [
      "Single team accountable for the entire product lifecycle",
      "Architecture decisions made for 3-year scale, not just launch",
      "Reduced coordination overhead vs. multiple vendors",
    ],
    process: [
      "Discovery & scoping",
      "Architecture design",
      "Iterative development",
      "Launch & scale support",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    icon: Blocks,
    overview:
      "Purpose-built software for workflows that off-the-shelf tools can't handle — designed around how your business actually operates.",
    benefits: [
      "No paying for features you'll never use",
      "Built around your exact operational workflow",
      "Full ownership of the resulting system",
    ],
    process: [
      "Requirements mapping",
      "Solution design",
      "Build & test",
      "Rollout & training",
    ],
    technologies: ["TypeScript", "Python", "PostgreSQL", "Docker"],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    icon: Cloud,
    overview:
      "Multi-tenant SaaS platforms engineered for subscription billing, scale, and fast iteration from day one.",
    benefits: [
      "Multi-tenancy and billing built in from the start",
      "Architecture ready for rapid feature iteration",
      "Infrastructure that scales with your customer base",
    ],
    process: [
      "Market & tech scoping",
      "Multi-tenant architecture",
      "MVP build",
      "Growth iteration",
    ],
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Vercel"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    icon: Globe,
    overview:
      "Fast, accessible, SEO-friendly web applications built on modern frameworks — no bloated page builders.",
    benefits: [
      "Performance scores that actually convert visitors",
      "Fully accessible and SEO-optimized by default",
      "Built to scale beyond a simple marketing site",
    ],
    process: ["UX planning", "Design", "Development", "Performance QA"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    icon: Smartphone,
    overview:
      "Native-quality mobile apps for iOS and Android, built efficiently with cross-platform tooling where it makes sense.",
    benefits: [
      "One codebase for iOS and Android where appropriate",
      "Native performance where it matters most",
      "App store submission and release management included",
    ],
    process: ["Product scoping", "UI/UX design", "Development", "Store launch"],
    technologies: ["React Native", "Swift", "Kotlin", "Firebase"],
  },
  {
    slug: "cloud-engineering",
    title: "Cloud Engineering",
    icon: Cloud,
    overview:
      "Cloud infrastructure and DevOps practices that keep systems reliable, secure, and cost-efficient as you scale.",
    benefits: [
      "Infrastructure as code for repeatable deployments",
      "Cost optimization built into architecture decisions",
      "Reduced downtime through proper monitoring & alerts",
    ],
    process: [
      "Infrastructure audit",
      "Architecture design",
      "Migration/setup",
      "Monitoring & optimization",
    ],
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes"],
  },
  {
    slug: "api-development",
    title: "API Development",
    icon: Blocks,
    overview:
      "Well-documented, secure APIs that make it easy for your team and partners to build on top of your platform.",
    benefits: [
      "Clean, versioned APIs that don't break integrations",
      "Documentation partners can actually use",
      "Security and rate-limiting built in from day one",
    ],
    process: [
      "API design",
      "Development",
      "Documentation",
      "Testing & versioning",
    ],
    technologies: ["GraphQL", "REST", "Node.js", "PostgreSQL"],
  },
  {
    slug: "support-maintenance",
    title: "Support & Maintenance",
    icon: LifeBuoy,
    overview:
      "Ongoing care for products already in production — monitoring, fixes, and continuous improvement, not just break-fix support.",
    benefits: [
      "Proactive monitoring catches issues before users do",
      "Consistent, predictable response times",
      "Same team that understands your codebase long-term",
    ],
    process: [
      "Onboarding & audit",
      "Monitoring setup",
      "Ongoing support",
      "Continuous improvement",
    ],
    technologies: ["Datadog", "Sentry", "GitHub Actions"],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
