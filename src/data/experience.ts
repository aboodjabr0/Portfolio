import { BriefcaseBusiness, Coffee, GraduationCap, type LucideIcon } from "lucide-react";
import { projects } from "@/data/projects";

export type ExperienceItem = {
  category: string;
  title: string;
  subtitle?: string;
  organization?: string | null;
  period?: string | null;
  description: string;
  technologies?: string[];
  links?: Array<{ label: string; href?: string }>;
  emphasis: "primary" | "secondary" | "compact";
  icon: LucideIcon;
};

export const experienceItems: ExperienceItem[] = [
  {
    category: "PRODUCTION SOFTWARE",
    title: "Tempo",
    subtitle: "Software Engineering / Product Development",
    organization: null,
    period: null,
    description: "Contributed to a production gym management platform across backend architecture, backend feature development, and UI/UX design.",
    technologies: ["ASP.NET Core", "PostgreSQL", "Flutter", "Backend Architecture", "Backend Development", "UI/UX Design"],
    links: [{ label: "View case study", href: "/projects/tempo" }],
    emphasis: "primary",
    icon: BriefcaseBusiness,
  },
  {
    category: "ENGINEERING TRAINING",
    title: "42 Amman",
    subtitle: "Software Engineering Program",
    organization: null,
    period: null,
    description: "Hands-on software engineering training focused on problem solving, systems programming, Unix, C, C++, networking, processes, and collaborative project work.",
    technologies: ["C", "C++", "Unix", "Networking", "Processes", "HTTP"],
    links: projects
      .filter((project) => project.type === "42 Curriculum")
      .map((project) => ({ label: project.name, href: project.caseStudyPath })),
    emphasis: "secondary",
    icon: GraduationCap,
  },
  {
    category: "EARLIER EXPERIENCE",
    title: "Barista",
    subtitle: undefined,
    organization: "Trasimeno Coffee",
    period: "Jan 2023 — Mar 2025",
    description: "Worked in a fast-paced customer-facing environment, developing practical experience in communication, teamwork, reliability, and time-sensitive operations.",
    emphasis: "compact",
    icon: Coffee,
  },
  {
    category: "EARLIER EXPERIENCE",
    title: "Barista",
    subtitle: undefined,
    organization: "Marouf Cafe",
    period: "Jun 2022 — Jan 2023",
    description: "Worked in a customer-facing team environment, strengthening communication, consistency, teamwork, and the ability to perform under pressure.",
    emphasis: "compact",
    icon: Coffee,
  },
];
