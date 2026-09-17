import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { TechnologyTag } from "@/components/projects/TechnologyTag";

export function MajorProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-white/[0.1] bg-[#0a1015] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-white/[0.2] hover:shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
      <ProjectHeader project={project} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#728294]">{project.category ?? project.metaLabel}</p>
            <h3 className="mt-2 text-[25px] font-semibold leading-none tracking-[-0.05em] text-[#eef3f7]">{project.name}</h3>
          </div>
          <span className="font-mono text-[10px] text-[#5b91c3]">{project.number}</span>
        </div>

        <p className="mt-4 text-[13px] leading-[1.65] text-[#91a0af]">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => <TechnologyTag key={technology}>{technology}</TechnologyTag>)}
        </div>

        {project.highlights?.length ? (
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-[#9eacba]" aria-label={`${project.name} highlights`}>
            {project.highlights.map((highlight) => <li key={highlight} className="before:mr-1.5 before:text-[#5b91c3] before:content-['·']">{highlight}</li>)}
          </ul>
        ) : null}

        <ProjectActions project={project} />
      </div>
    </article>
  );
}

function ProjectHeader({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.1] bg-[#080d12]">
        <Image src={project.image} alt={`${project.name} project visual`} fill sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) calc(50vw - 44px), 660px" className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015] ${project.slug === "minishell" ? "brightness-[0.58] contrast-[1.05] saturate-[0.8]" : project.slug === "webserv" ? "brightness-[0.7] contrast-[1.05]" : ""}`} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b0e]/55 via-transparent to-[#070b0e]/10" />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[16/10] items-end overflow-hidden border-b border-white/[0.1] bg-[#080d12] p-5 sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(47,140,255,0.11),transparent_40%)]" />
      <div className="relative">
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#5b91c3]">{project.type.toUpperCase()}</p>
        <p className="mt-2 text-[18px] font-medium tracking-[-0.04em] text-[#dbe6ef]">{project.name}</p>
        <p className="mt-1 text-[10px] text-[#728294]">{project.category}</p>
      </div>
    </div>
  );
}

function ProjectActions({ project }: { project: Project }) {
  const hasAction = project.caseStudy || project.caseStudyPath || project.live || project.github;
  if (!hasAction) return null;

  return (
    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/[0.08] pt-5">
      {project.caseStudy || project.caseStudyPath ? (
        <Link href={project.caseStudyPath ?? `/projects/${project.slug}`} className="group/action inline-flex items-center gap-1.5 text-[11px] font-medium text-[#dce8f3] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          View case study
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/action:translate-x-0.5" strokeWidth={1.8} aria-hidden="true" />
        </Link>
      ) : null}
      {project.live ? (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[10px] font-medium text-[#8e9dac] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          Visit live
          <ExternalLink className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
        </a>
      ) : null}
      {project.github ? (
        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on GitHub (opens in a new tab)`} className="inline-flex items-center gap-1.5 text-[10px] font-medium text-[#8e9dac] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          GitHub
          <Github className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}
