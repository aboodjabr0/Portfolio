import type { Metadata } from "next";
import { WebservChallenges } from "@/components/case-study/WebservChallenges";
import { WebservContributions } from "@/components/case-study/WebservContributions";
import { WebservHero } from "@/components/case-study/WebservHero";
import { WebservNav } from "@/components/case-study/WebservNav";
import { WebservRequestFlow } from "@/components/case-study/WebservRequestFlow";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Webserv — Abdullah Sauafth",
  description: "Webserv HTTP server case study by Abdullah Sauafth.",
};

export default function WebservCaseStudyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-primary-foreground">
      <Navbar isCaseStudy />
      <WebservHero />
      <WebservNav />
      <WebservRequestFlow />
      <WebservContributions />
      <WebservChallenges />
    </main>
  );
}
