import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import { ClinoraCaseStudyContent, ClinoraOverview } from "@/components/case-study/ClinoraCaseStudy";
import { Navbar } from "@/components/layout/Navbar";
import { projects } from "@/data/projects";

const clinora = projects.find((project) => project.slug === "clinora");

const clinoraSections = [
  { label: "Overview", href: "#overview", implemented: true },
  { label: "Roles", href: "#roles", implemented: true },
  { label: "Workflow", href: "#workflow", implemented: true },
  { label: "Billing", href: "#billing", implemented: true },
  { label: "Bilingual", href: "#bilingual", implemented: true },
  { label: "Reliability", href: "#reliability", implemented: true },
  { label: "Scope", href: "#boundaries", implemented: true },
];

export const metadata: Metadata = {
  title: "Clinora — Abdullah Sauafth",
  description: "Clinora dental clinic operations platform case study by Abdullah Sauafth.",
};

export default function ClinoraCaseStudyPage() {
  if (!clinora) notFound();

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-primary-foreground">
      <Navbar isCaseStudy />
      <ClinoraOverview />
      <CaseStudyNav projectName={clinora.name} sections={clinoraSections} />
      <ClinoraCaseStudyContent />
    </main>
  );
}
