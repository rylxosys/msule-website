import {
  HeartPulse,
  Factory,
  HardHat,
  ShoppingCart,
  Wheat,
  GraduationCap,
  Landmark,
  HandHeart,
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
      "Clinic and patient management platforms",
      "Online appointment booking and scheduling",
      "Real-time queue management and patient communication",
    ],
    relatedProjectSlugs: ["rylxo-cms"],
  },
  {
    slug: "non-profit",
    title: "Non-Profit",
    icon: HandHeart,
    intro:
      "We build fundraising and outreach platforms that help non-profits run campaigns and connect with donors directly.",
    challenges: [
      "Reliance on third-party platforms that limit branding and take a cut of donations",
      "Difficulty running and tracking multiple campaigns independently",
      "Limited tools for keeping donors informed and engaged",
    ],
    howWeHelp:
      "We build dedicated platforms giving non-profits full control over campaigns, donations, and donor communication, without depending on third-party fundraising tools.",
    solutions: [
      "Campaign creation and management dashboards",
      "Direct online donation processing",
      "Automated donor communication",
    ],
    relatedProjectSlugs: ["swis-foundation"],
  },
  {
    slug: "construction",
    title: "Construction",
    icon: HardHat,
    intro:
      "We build websites and tools that help contractors and construction businesses showcase their work and win new clients.",
    challenges: [
      "Limited online presence to showcase completed work",
      "Relying on word-of-mouth for new client inquiries",
      "No easy way to keep a portfolio updated as new projects finish",
    ],
    howWeHelp:
      "We build modern, dynamic portfolio websites with content management built in, so businesses can showcase their work and capture client inquiries without relying on informal channels.",
    solutions: [
      "Business portfolio and showcase websites",
      "Content management for independent updates",
      "Client inquiry and contact capture",
    ],
    relatedProjectSlugs: ["ab-associates"],
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    icon: Wheat,
    intro:
      "We build software that brings localized data and automation to agricultural advisory and planning.",
    challenges: [
      "Advisory and weather information often published in dense, technical formats",
      "Limited access to localized-language agricultural guidance",
      "Disconnected access to planning tools and nearby resources",
    ],
    howWeHelp:
      "We build practical, localized tools that turn dense agricultural data into clear, actionable guidance for farmers.",
    solutions: [
      "Localized-language advisory platforms",
      "Automated weather and bulletin summarization",
      "Crop planning and nearby resource discovery tools",
    ],
    relatedProjectSlugs: ["krishi-mitra"],
  },
  {
    slug: "education",
    title: "Education",
    icon: GraduationCap,
    intro:
      "We build learning platforms that make complex topics easier to explore, understand, and retain.",
    challenges: [
      "Study material that's dense, text-heavy, and hard to engage with",
      "Limited tools for exploring how topics connect to one another",
      "Difficulty making complex subjects accessible to younger learners",
    ],
    howWeHelp:
      "We design learning experiences around visual storytelling and connected, explorable topics, rather than static text.",
    solutions: [
      "Visual, story-driven learning platforms",
      "Node-based, explorable topic structures",
      "Accessible content for younger learners",
    ],
    relatedProjectSlugs: ["gyan-porichoy"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    intro:
      "We're building capability in manufacturing technology — real-time monitoring, IoT integration, and operational visibility tools.",
    challenges: [
      "Limited visibility into line performance and downtime causes",
      "Legacy systems that don't integrate with modern IoT sensors",
      "Reactive rather than predictive maintenance",
    ],
    howWeHelp:
      "We'd approach this by connecting existing equipment and sensors into live analytics platforms, surfacing issues before they cause costly downtime — talk to us about your specific setup.",
    solutions: [
      "Real-time production monitoring dashboards",
      "IoT sensor integration and data pipelines",
      "Operational reporting tools",
    ],
    relatedProjectSlugs: [],
  },
  {
    slug: "retail",
    title: "Retail",
    icon: ShoppingCart,
    intro:
      "We're open to building unified commerce systems that bring online and in-store operations together.",
    challenges: [
      "Disconnected inventory across online and physical stores",
      "Scaling e-commerce platforms during demand spikes",
      "Fragmented customer data across channels",
    ],
    howWeHelp:
      "We'd approach this by building unified platforms that keep inventory, orders, and customer data in sync — let's discuss what your operations actually need.",
    solutions: [
      "E-commerce platform development",
      "Inventory and order management systems",
      "Customer data unification",
    ],
    relatedProjectSlugs: [],
  },
  {
    slug: "finance",
    title: "Finance",
    icon: Landmark,
    intro:
      "We're open to building secure, compliant software for financial organizations where reliability is non-negotiable.",
    challenges: [
      "Strict regulatory and security compliance requirements",
      "Legacy core systems that are costly to change",
      "Growing expectations for real-time digital experiences",
    ],
    howWeHelp:
      "We'd approach this with security and compliance as first-class requirements from day one — reach out to discuss your specific regulatory context.",
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
