import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyNav } from "@/components/case-study/CaseStudyNav";
import { ArchitectureSection } from "@/components/case-study/ArchitectureSection";
import { BackendSection } from "@/components/case-study/BackendSection";
import { DatabaseSection } from "@/components/case-study/DatabaseSection";
import { InfrastructureSection } from "@/components/case-study/InfrastructureSection";
import { ChallengesSection } from "@/components/case-study/ChallengesSection";
import { ProjectOverview } from "@/components/case-study/ProjectOverview";
import { Navbar } from "@/components/layout/Navbar";
import { projects } from "@/data/projects";

const tempo = projects.find((project) => project.slug === "tempo");

export const metadata: Metadata = {
  title: "Tempo — Abdullah Sauafth",
  description: "Tempo gym management platform case study by Abdullah Sauafth.",
};

export default function TempoCaseStudyPage() {
  if (!tempo) notFound();

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-primary-foreground">
      <Navbar isCaseStudy />
      <CaseStudyHero project={tempo} />
      <CaseStudyNav projectName={tempo.name} />
      <ProjectOverview project={tempo} />
      <ArchitectureSection />
      <BackendSection />
      <DatabaseSection />
      <InfrastructureSection />
      <ChallengesSection />
    </main>
  );
}
