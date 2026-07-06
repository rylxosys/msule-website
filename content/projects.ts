export type Project = {
  slug: string;
  title: string;
  industry: string;
  url: string;
  status: "Live" | "In Development" | "Completed" | "Maintenance";
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  timeline: string;
  results: { label: string; value: string }[];
  image: string;
  logo?: string;
};

export const STATUS_STYLES: Record<Project["status"], string> = {
  Live: "bg-accent2-soft text-accent2",
  "In Development": "bg-accent-soft text-accent",
  Completed: "bg-accent2-soft text-accent2",
  Maintenance: "bg-border text-muted",
};

export const PROJECTS: Project[] = [
  {
    slug: "swis-foundation",
    title: "SWIS Foundation — Fundraising Platform",
    status: "Completed",
    industry: "Non-Profit",
    url: "https://integrated-action-network.vercel.app",
    image: "/assets/swis-platform.png",
    logo: "/assets/swis-foundation-logo.png",
    overview:
      "A fundraising platform built for SWIS Foundation, giving the organization the tools to create and manage fundraising campaigns and accept donations directly online.",
    problem:
      "SWIS Foundation needed a way to run multiple fundraising campaigns independently, accept donations securely online, and communicate with donors.",
    solution:
      "We built a dedicated platform where the foundation can create and manage campaigns, share unique campaign links publicly, and accept donations directly through an integrated payment gateway, with automated email communication keeping donors updated.",
    features: [
      "Campaign creation and management dashboard",
      "Shareable public campaign URLs",
      "Direct online donations via Razorpay integration",
      "Automated donor communication via EmailJS",
    ],
    tech: ["Next.js", "Razorpay", "EmailJS", "Google Cloud"],
    timeline: "Built as a dedicated platform for SWIS Foundation",
    results: [
      { label: "Donation platform fee", value: "Removed third-party cut" },
      { label: "Campaign control", value: "Fully owned by the foundation" },
      { label: "Donor communication", value: "Automated, no manual follow-up" },
    ],
  },
  {
    slug: "rylxo-cms",
    title: "Rylxo CMS — Clinic Management System",
    status: "Maintenance",
    industry: "Healthcare",
    url: "https://rylxo.in",
    image: "/assets/rylxo-platform.png",
    logo: "/assets/rylxo-wordmark-logo.png",
    overview:
      "A complete clinic management platform for Rylxo Pvt Ltd, giving clinics a public-facing booking presence alongside a full internal system for managing doctors, schedules, patient queues, and communication.",
    problem:
      "Clinics lacked a unified way to let patients discover them and book appointments online, while staff had no real-time visibility into doctor schedules, patient queues, or appointment status.",
    solution:
      "We built a two-sided platform: a public-facing page for every registered clinic where patients can view doctors and book appointments directly, paired with an internal system app giving clinic staff live queue monitoring, schedule management, and automated WhatsApp updates to patients.",
    features: [
      "Public-facing clinic pages with doctor profiles and availability",
      "Online appointment booking directly from the public page",
      "Doctor schedule and leave planning for clinic admins",
      "System app for staff to view and manage patient appointments",
      "Live queue management and real-time monitor display",
      "Automated WhatsApp notifications for booking, reminders, and updates",
    ],
    tech: [
      "Next.js",
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
      "MSG91",
    ],
    timeline: "Ongoing product build, delivered in phased releases",
    results: [
      { label: "Patient no-shows", value: "Reduced via WhatsApp reminders" },
      { label: "Front-desk workload", value: "Cut through self-serve booking" },
      {
        label: "Queue wait visibility",
        value: "Real-time for staff and patients",
      },
    ],
  },
  {
    slug: "ab-associates",
    title: "AB Associates — Business Portfolio Website",
    status: "Completed",
    industry: "Construction",
    url: "https://ab-associates-profile.vercel.app",
    image: "/assets/ab-associates-platform.png",
    logo: "/assets/ab-associates-platform-logo.png",
    overview:
      "A modern portfolio website for AB Associates, a contracting business, built to showcase completed work and generate client inquiries.",
    problem:
      "AB Associates relied on word-of-mouth and informal channels to reach new clients, with no professional online presence to showcase completed projects.",
    solution:
      "We built a modern, dynamic website giving AB Associates a professional online presence — showcasing their work and capturing client inquiries directly through the site, with content management so they can keep it updated independently.",
    features: [
      "Modern, dynamic page design tailored to the contracting business",
      "Content management so the team can update projects and services independently",
      "Client contact and inquiry capture built into the site",
      "Work showcase highlighting completed projects and services",
    ],
    tech: ["Next.js", "EmailJS"],
    timeline: "Delivered as a business portfolio website",
    results: [
      { label: "Client inquiries", value: "Now captured directly online" },
      {
        label: "Business credibility",
        value: "Professional storefront, not word-of-mouth only",
      },
      {
        label: "Portfolio updates",
        value: "Self-managed, no developer needed",
      },
    ],
  },
  {
    slug: "agro-sathi",
    title: "Agro-Sathi — Localized Agriculture Advisory Platform",
    status: "Live",
    industry: "Agriculture",
    url: "https://agro-sathi.in",
    image: "/assets/agro-sathi-platform.png",
    logo: "/assets/agro-sathi-logo.png",
    overview:
      "A multilingual agriculture advisory platform giving farmers localized weather forecasts, crop guidance, and nearby resource information.",
    problem:
      "Farmers often struggle to access timely, easy-to-understand agricultural advisories in their own language, with weather bulletins and government guidance typically published in dense, technical formats.",
    solution:
      "We built a platform that automatically scrapes official IMD advisory bulletins on a scheduled basis, uses AI to condense them into short, actionable points, and delivers everything in localized languages alongside live weather data, crop planning tools, and nearby resource discovery.",
    features: [
      "Localized regional language support (English, Bengali)",
      "Automated weekly scraping of IMD agriculture advisory bulletins",
      "AI-powered summarization turning dense bulletins into concise, actionable points",
      "Live weekly weather updates from open weather data sources",
      "Interactive crop calculator for planning",
      "Nearby agri-shop, MSP center, and KVK location discovery",
    ],
    tech: ["Next.js", "Firebase", "Anthropic API", "Open Weather Data"],
    timeline: "Built as an internal product initiative",
    results: [
      {
        label: "Advisory reading time",
        value: "Cut from paragraphs to key points",
      },
      { label: "Language access", value: "Available in English and Bengali" },
      { label: "Bulletin updates", value: "Fully automated, weekly" },
    ],
  },
  {
    slug: "gyan-porichoy",
    title: "Gyan Porichoy — Visual Learning Platform for Students",
    status: "Maintenance",
    industry: "Education",
    url: "https://gyanporichoy.vercel.app",
    image: "/assets/gyan-porichoy-platform.png",
    logo: "/assets/gyan-porichoy-logo.png",
    overview:
      "A free, community-contributed learning platform for students, using comic-style visuals and character-driven storytelling to make complex topics easier to explore.",
    problem:
      "Traditional study material is often dense and disconnected from how curious learners actually explore a subject — jumping between the how, why, when, and where of a topic.",
    solution:
      "We built Gyan Porichoy as a free contribution to student learning — presenting topics through comic-style visuals narrated by recurring characters, with a node-based structure letting students branch from one concept into related topics.",
    features: [
      "Cartoon, comic-style visual storytelling",
      "Recurring narrator characters — Dadu, Khoka, and Khuki — guiding each topic",
      "Node-based learning structure connecting related topics",
      "Branching exploration from a single node into multiple related concepts",
      "Deep-dive content covering the how, why, when, and where of each topic",
    ],
    tech: ["Next.js", "Anthropic API", "Firestore"],
    timeline: "Built and contributed as a free resource for students",
    results: [
      { label: "Cost to students", value: "Completely free" },
      { label: "Engagement style", value: "Story-driven, not textbook-style" },
      {
        label: "Topic exploration",
        value: "Branches naturally across related concepts",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
