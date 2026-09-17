import type { Metadata } from "next";
import { MinishellChallenges } from "@/components/case-study/MinishellChallenges";
import { MinishellContributions } from "@/components/case-study/MinishellContributions";
import { MinishellHero } from "@/components/case-study/MinishellHero";
import { MinishellNav } from "@/components/case-study/MinishellNav";
import { MinishellPipeline } from "@/components/case-study/MinishellPipeline";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Minishell — Abdullah Sauafth",
  description: "Minishell Unix shell case study by Abdullah Sauafth.",
};

export default function MinishellCaseStudyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-primary-foreground">
      <Navbar isCaseStudy />
      <MinishellHero />
      <MinishellNav />
      <MinishellPipeline />
      <MinishellContributions />
      <MinishellChallenges />
    </main>
  );
}
