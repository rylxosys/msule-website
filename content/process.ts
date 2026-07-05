// content/process.ts
import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  Bug,
  Rocket,
  LifeBuoy,
} from "lucide-react";

export type ProcessStep = {
  icon: typeof Search;
  number: string;
  title: string;
  summary: string;
  duration: string;
  activities: string[];
  deliverables: string[];
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    summary:
      "We start by understanding your business, users, and goals before writing a single line of code.",
    duration: "1–2 weeks",
    activities: [
      "Stakeholder interviews and requirements gathering",
      "Competitive and market landscape review",
      "Technical feasibility assessment",
    ],
    deliverables: ["Discovery report", "Initial scope document"],
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Planning",
    summary:
      "We turn discovery insights into a concrete architecture and delivery plan.",
    duration: "1 week",
    activities: [
      "System architecture design",
      "Technology stack selection",
      "Timeline and milestone planning",
    ],
    deliverables: ["Technical architecture doc", "Project roadmap"],
  },
  {
    icon: Palette,
    title: "UX/UI",
    number: "03",
    summary:
      "We design interfaces that are intuitive, accessible, and aligned with your brand.",
    duration: "2–3 weeks",
    activities: [
      "Wireframing and user flow mapping",
      "High-fidelity UI design",
      "Design system and component library setup",
    ],
    deliverables: ["Wireframes", "Final UI designs", "Design system"],
  },
  {
    icon: Code2,
    number: "04",
    title: "Development",
    summary:
      "We build with clean, scalable, well-tested code, working in short iterative cycles.",
    duration: "6–12 weeks",
    activities: [
      "Sprint-based feature development",
      "Regular progress demos and check-ins",
      "Code review and continuous integration",
    ],
    deliverables: ["Working software increments", "Sprint reports"],
  },
  {
    icon: Bug,
    number: "05",
    title: "Testing",
    summary:
      "We test rigorously across devices, edge cases, and load conditions before anything ships.",
    duration: "1–2 weeks",
    activities: [
      "Functional and regression testing",
      "Cross-browser and device testing",
      "Performance and load testing",
    ],
    deliverables: ["QA test report", "Bug resolution log"],
  },
  {
    icon: Rocket,
    number: "06",
    title: "Deployment",
    summary:
      "We ship to production with zero-downtime releases and full rollback readiness.",
    duration: "2–5 days",
    activities: [
      "Production environment setup",
      "Staged rollout and monitoring",
      "Post-launch verification",
    ],
    deliverables: ["Live production release", "Deployment runbook"],
  },
  {
    icon: LifeBuoy,
    number: "07",
    title: "Support",
    summary:
      "We stay involved after launch with ongoing monitoring, fixes, and feature evolution.",
    duration: "Ongoing",
    activities: [
      "Proactive uptime and error monitoring",
      "Bug fixes and security patches",
      "Iterative feature development",
    ],
    deliverables: ["Monthly health reports", "Ongoing release notes"],
  },
];
