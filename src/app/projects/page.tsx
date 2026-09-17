import type { Metadata } from "next";
import { AllProjectsPage } from "@/components/projects/AllProjectsPage";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Projects — Abdullah Sauafth",
  description: "A broader project history from Abdullah Sauafth.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar isCaseStudy />
      <AllProjectsPage />
    </>
  );
}
