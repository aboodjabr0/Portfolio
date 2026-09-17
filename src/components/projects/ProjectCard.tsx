import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { TechnologyTag } from "@/components/projects/TechnologyTag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full min-h-[480px] flex-col overflow-hidden rounded-[8px] border border-white/[0.1] bg-[#0a1015] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-white/[0.2] hover:shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
      <ProjectVisual project={project} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#728294]">{project.metaLabel}</p>
          <h3 className="mt-2 text-[24px] font-semibold leading-none tracking-[-0.05em] text-[#eef3f7]">{project.name}</h3>
        </div>

        <p className="mt-4 text-[13px] leading-[1.55] text-[#91a0af]">{project.shortDescription}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <TechnologyTag key={technology}>{technology}</TechnologyTag>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/[0.1] pt-6">
          {project.slug === "tempo" || project.slug === "webserv" || project.slug === "minishell" ? (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex min-h-9 items-center gap-1.5 rounded-[5px] border border-accent/65 bg-accent/[0.12] px-3 text-[11px] font-medium text-[#eaf5ff] shadow-[0_0_18px_rgba(47,140,255,0.08)] transition-colors hover:border-accent hover:bg-accent/[0.2] group-hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              View case study
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          ) : (
            <span className="inline-flex min-h-9 items-center gap-1.5 rounded-[5px] border border-accent/65 bg-accent/[0.12] px-3 text-[11px] font-medium text-[#eaf5ff] shadow-[0_0_18px_rgba(47,140,255,0.08)] transition-colors group-hover:text-white">
              View case study
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </span>
          )}

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.name} on GitHub (opens in a new tab)`}
              className="inline-flex min-h-9 items-center justify-center rounded-[5px] border border-white/[0.14] bg-white/[0.035] px-2.5 text-[#b8c8d7] transition-colors hover:border-white/[0.28] hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.name} live platform (opens in a new tab)`}
              className="inline-flex min-h-9 items-center rounded-[5px] border border-white/[0.14] bg-white/[0.035] px-2.5 text-[10px] font-medium text-[#b8c8d7] transition-colors hover:border-white/[0.28] hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Visit live
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
