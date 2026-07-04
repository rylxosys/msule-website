// content/industries.ts
import {
  HeartPulse,
  Factory,
  HardHat,
  ShoppingCart,
  Wheat,
  GraduationCap,
  Landmark,
} from "lucide-react";

export type Industry = {
  slug: string;
  title: string;
  icon: typeof HeartPulse;
  intro: string;
  challenges: string[];
  howWeHelp: string;
  solutions: string[];
  relatedProjectSlugs: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    intro:
      "We build software for healthcare organizations that need to move fast without compromising on compliance or patient safety.",
    challenges: [
      "Disconnected systems across records, scheduling, and billing",
      "Strict compliance and data privacy requirements",
      "Staff burden from manual, repetitive administrative work",
    ],
    howWeHelp:
      "We design systems around clinical and administrative workflows first, building in compliance and security from day one rather than retrofitting it later.",
    solutions: [
      "Patient record and scheduling platforms",
      "Telehealth and remote monitoring integrations",
      "Billing and insurance claim automation",
    ],
    relatedProjectSlugs: ["healthtrack"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    intro:
      "We help manufacturers gain real-time visibility into operations that used to rely on manual logs and after-the-fact reporting.",
    challenges: [
      "Limited visibility into line performance and downtime causes",
      "Legacy systems that don't integrate with modern IoT sensors",
      "Reactive rather than predictive maintenance",
    ],
    howWeHelp:
      "We connect existing equipment and sensors into live analytics platforms, surfacing issues before they cause costly downtime.",
    solutions: [
      "Real-time production monitoring dashboards",
      "Predictive maintenance analytics",
      "IoT sensor integration and data pipelines",
    ],
    relatedProjectSlugs: ["factorylens"],
  },
  {
    slug: "construction",
    title: "Construction",
    icon: HardHat,
    intro:
      "We build tools for construction firms managing multiple active sites, where visibility and coordination directly affect the bottom line.",
    challenges: [
      "Slow, manual site reporting across multiple locations",
      "Poor resource allocation visibility for management",
      "Field teams needing tools that work in low-connectivity environments",
    ],
    howWeHelp:
      "We build mobile-first tools designed for the field, with offline support and real-time syncing back to management dashboards.",
    solutions: [
      "Mobile site tracking and progress logging",
      "Resource and equipment allocation dashboards",
      "Automated reporting for stakeholders",
    ],
    relatedProjectSlugs: ["buildflow"],
  },
  {
    slug: "retail",
    title: "Retail",
    icon: ShoppingCart,
    intro:
      "We help retail businesses unify their online and in-store operations into systems that scale with demand.",
    challenges: [
      "Disconnected inventory across online and physical stores",
      "Scaling e-commerce platforms during demand spikes",
      "Fragmented customer data across channels",
    ],
    howWeHelp:
      "We build unified commerce platforms that keep inventory, orders, and customer data in sync across every channel.",
    solutions: [
      "E-commerce platform development",
      "Inventory and order management systems",
      "Customer data unification",
    ],
    relatedProjectSlugs: [],
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    icon: Wheat,
    intro:
      "We build software that brings modern data and automation to agricultural operations, from farm management to supply chain tracking.",
    challenges: [
      "Limited digital visibility into field and crop conditions",
      "Manual supply chain and inventory tracking",
      "Disconnected data across farming operations",
    ],
    howWeHelp:
      "We build practical, field-ready tools that digitize operations without adding unnecessary complexity for on-the-ground teams.",
    solutions: [
      "Farm management and monitoring platforms",
      "Supply chain and inventory tracking",
      "Data-driven yield and resource planning tools",
    ],
    relatedProjectSlugs: [],
  },
  {
    slug: "education",
    title: "Education",
    icon: GraduationCap,
    intro:
      "We build platforms for educational institutions that need to manage students, content, and operations efficiently.",
    challenges: [
      "Fragmented systems for admissions, records, and learning",
      "Difficulty scaling remote and hybrid learning tools",
      "Manual administrative processes across departments",
    ],
    howWeHelp:
      "We consolidate fragmented systems into unified platforms tailored to how institutions actually operate.",
    solutions: [
      "Student information and records systems",
      "Learning management platforms",
      "Admissions and enrollment automation",
    ],
    relatedProjectSlugs: [],
  },
  {
    slug: "finance",
    title: "Finance",
    icon: Landmark,
    intro:
      "We build secure, compliant software for financial organizations where reliability and data integrity are non-negotiable.",
    challenges: [
      "Strict regulatory and security compliance requirements",
      "Legacy core systems that are costly to change",
      "Growing expectations for real-time digital experiences",
    ],
    howWeHelp:
      "We build with security and compliance as first-class requirements, not afterthoughts, while modernizing systems incrementally.",
    solutions: [
      "Secure financial platforms and dashboards",
      "Legacy core system modernization",
      "Real-time reporting and analytics tools",
    ],
    relatedProjectSlugs: [],
  },
];

export function getIndustryBySlug(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
