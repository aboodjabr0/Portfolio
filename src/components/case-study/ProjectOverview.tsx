import type { Project } from "@/data/projects";
import { ProjectMeta } from "@/components/case-study/ProjectMeta";

export function ProjectOverview({ project }: { project: Project }) {
  const caseStudy = project.caseStudy;

  if (!caseStudy) return null;

  return (
    <section id="overview" aria-labelledby="project-overview-heading" className="mx-auto grid w-full max-w-[1420px] gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:px-12 lg:py-24 xl:grid-cols-[720px_320px] xl:gap-16">
      <div className="max-w-[720px]">
        <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">01 / OVERVIEW</p>
        <h2 id="project-overview-heading" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">
          Project Overview
        </h2>
        <p className="mt-7 text-[15px] leading-[1.75] text-[#9aa8b6]">{caseStudy.overview}</p>
        <p className="mt-6 text-[15px] leading-[1.75] text-[#9aa8b6]">{caseStudy.contributionStatement}</p>
      </div>

      <ProjectMeta project={project} />
    </section>
  );
}
