// content/projects.ts
export type Project = {
  slug: string;
  title: string;
  industry: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  timeline: string;
  results: { label: string; value: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "rylxo-cms",
    title: "Rylxo CMS — Clinic Management System",
    industry: "Healthcare",
    overview:
      "A complete clinic management platform for Rylxo Pvt Ltd, giving clinics a public-facing booking presence alongside a full internal system for managing doctors, schedules, patient queues, and communication.",
    problem:
      "Clinics lacked a unified way to let patients discover them and book appointments online, while staff had no real-time visibility into doctor schedules, patient queues, or appointment status — leading to walk-in overcrowding and manual, error-prone scheduling.",
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
      { label: "Clinics onboarded", value: "Live" },
      { label: "Booking flow", value: "Fully self-serve" },
      { label: "Patient updates", value: "Automated via WhatsApp" },
    ],
  },
  {
    slug: "agro-sathi",
    title: "Agro-sathi — Localized Agriculture Advisory Platform",
    industry: "Agriculture",
    overview:
      "A multilingual agriculture advisory platform giving farmers localized weather forecasts, crop guidance, and nearby resource information — combining government data sources with AI-simplified advisories.",
    problem:
      "Farmers often struggle to access timely, easy-to-understand agricultural advisories in their own language, with weather bulletins and government guidance typically published in dense, technical formats that are hard to act on quickly.",
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
    tech: [
      "Next.js",
      "Firebase",
      "Anthropic API",
      "Open-Meteo",
      "IMD Data Pipeline",
    ],
    timeline: "Built as an internal product initiative",
    results: [
      { label: "Languages supported", value: "2 (EN, BN)" },
      { label: "Advisory delivery", value: "Automated weekly" },
      { label: "Weather data", value: "Updated weekly" },
    ],
  },
  {
    slug: "swis-foundation",
    title: "SWIS Foundation — Fundraising Platform",
    industry: "Non-Profit",
    overview:
      "A fundraising platform built for SWIS Foundation, giving the organization the tools to create and manage fundraising campaigns, accept donations directly online, and keep donors informed.",
    problem:
      "SWIS Foundation needed a way to run multiple fundraising campaigns independently, accept donations securely online, and communicate with donors — without relying on third-party fundraising platforms that take a cut or limit branding and control.",
    solution:
      "We built a dedicated platform where the foundation can create and manage campaigns, share unique campaign links publicly, and accept donations directly through an integrated payment gateway, with automated email communication keeping donors updated.",
    features: [
      "Campaign creation and management dashboard",
      "Shareable public campaign URLs",
      "Direct online donations via Razorpay integration",
      "Automated donor communication via EmailJS",
    ],
    tech: ["Next.js", "Razorpay", "EmailJS"],
    timeline: "Built as a dedicated platform for SWIS Foundation",
    results: [
      { label: "Payment integration", value: "Razorpay" },
      { label: "Campaign sharing", value: "Public unique URLs" },
      { label: "Donor updates", value: "Automated" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
