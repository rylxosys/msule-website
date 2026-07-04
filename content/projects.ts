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
    slug: "healthtrack",
    title: "HealthTrack — Patient Management Platform",
    industry: "Healthcare",
    overview:
      "A unified patient records and scheduling platform built to replace three disconnected legacy tools used across a multi-clinic healthcare network.",
    problem:
      "Staff were juggling separate systems for records, scheduling, and billing, leading to duplicate data entry, missed appointments, and slow patient intake.",
    solution:
      "We designed and built a single platform consolidating records, scheduling, and billing, with role-based access and real-time sync across all clinic locations.",
    features: [
      "Unified patient record across all clinics",
      "Real-time appointment scheduling with conflict detection",
      "Role-based access for staff, doctors, and admins",
      "Automated billing and insurance claim tracking",
    ],
    tech: ["Next.js", "PostgreSQL", "AWS", "TypeScript"],
    timeline: "14 weeks, from discovery to production launch",
    results: [
      { label: "Patient intake time", value: "-40%" },
      { label: "Data entry errors", value: "-65%" },
      { label: "Clinics onboarded", value: "12" },
    ],
  },
  {
    slug: "buildflow",
    title: "BuildFlow — Construction Site Management",
    industry: "Construction",
    overview:
      "Real-time site tracking, resource allocation, and reporting built for construction firms managing multiple active sites at once.",
    problem:
      "Project managers relied on spreadsheets and phone calls to track site progress, resulting in delayed reporting and poor resource visibility across sites.",
    solution:
      "We built a mobile-first platform giving site supervisors real-time logging tools, with dashboards giving management live visibility across every active site.",
    features: [
      "Mobile site logging for supervisors in the field",
      "Live resource allocation across multiple sites",
      "Automated daily and weekly progress reports",
      "Offline mode for low-connectivity job sites",
    ],
    tech: ["React Native", "Node.js", "GCP", "PostgreSQL"],
    timeline: "10 weeks, from discovery to pilot rollout",
    results: [
      { label: "Reporting speed", value: "3x faster" },
      { label: "Sites actively using platform", value: "8" },
      { label: "Manual reporting hours saved/week", value: "20+" },
    ],
  },
  {
    slug: "factorylens",
    title: "FactoryLens — Manufacturing Analytics",
    industry: "Manufacturing",
    overview:
      "An IoT-driven analytics dashboard giving plant managers live visibility into production line performance and downtime causes.",
    problem:
      "Downtime causes were only discovered after the fact through manual logs, making it difficult to identify recurring equipment issues early.",
    solution:
      "We integrated existing IoT sensors into a live analytics dashboard, surfacing downtime patterns and alerting managers in real time as issues emerge.",
    features: [
      "Live production line monitoring dashboard",
      "Automated downtime cause classification",
      "Real-time alerts for anomalies and threshold breaches",
      "Historical trend analysis for maintenance planning",
    ],
    tech: ["TypeScript", "Kafka", "Azure", "React"],
    timeline: "16 weeks, from discovery to full plant rollout",
    results: [
      { label: "Unplanned downtime", value: "-18%" },
      { label: "Issue detection time", value: "-70%" },
      { label: "Production lines monitored", value: "24" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
