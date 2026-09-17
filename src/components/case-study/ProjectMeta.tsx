import type { Project } from "@/data/projects";

export function ProjectMeta({ project }: { project: Project }) {
  return (
    <aside className="rounded-[8px] border border-white/[0.1] bg-[#0a1015] p-5">
      <div className="border-b border-white/[0.08] pb-4">
        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#7f8e9e]">Status</p>
        <p className="mt-2 inline-flex items-center gap-2 text-[13px] font-medium text-[#e1eaf1]">
          <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
          {project.type}
        </p>
      </div>

      <div className="border-b border-white/[0.08] py-4">
        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#7f8e9e]">Role</p>
        <ul className="mt-3 space-y-2 text-[12px] text-[#b0bdc9]">
          {project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
        </ul>
      </div>

      <div className="pt-4">
        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#7f8e9e]">Stack</p>
        <ul className="mt-3 space-y-2 text-[12px] text-[#b0bdc9]">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
    </aside>
  );
}
