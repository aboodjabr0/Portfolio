import type { Project } from "@/data/projects";
import { TechnologyTag } from "@/components/projects/TechnologyTag";

export function CompactProjectCard({ project }: { project: Project }) {
  const tags = [...project.technologies, ...(project.focus ?? [])].filter((tag, index, all) => all.indexOf(tag) === index).slice(0, 4);

  return (
    <article className="group flex h-full flex-col rounded-[7px] border border-white/[0.09] bg-[#0a1015] p-4 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-[#0d151c] sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <p className="font-mono text-[9px] tracking-[0.14em] text-[#627282]">{project.number} / {project.category?.toUpperCase() ?? project.metaLabel.toUpperCase()}</p>
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#5b91c3]" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-[17px] font-medium leading-tight tracking-[-0.03em] text-[#e1eaf1]">{project.name}</h3>
      <p className="mt-3 text-[12px] leading-[1.7] text-[#8f9eac]">{project.description}</p>
      <div className="mt-auto pt-5">
        <div className="flex flex-wrap gap-1.5" aria-label={`${project.name} technical tags`}>
          {tags.map((tag) => <TechnologyTag key={tag}>{tag}</TechnologyTag>)}
        </div>
        {project.technicalNote ? <p className="mt-4 border-t border-white/[0.07] pt-3 text-[10px] leading-[1.6] text-[#8eaed0]">{project.technicalNote}</p> : null}
      </div>
    </article>
  );
}
