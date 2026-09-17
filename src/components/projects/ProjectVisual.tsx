import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectVisual({ project }: { project: Project }) {
  const isProduction = project.type === "Production";
  const isWebserv = project.slug === "webserv";
  const isClinora = project.slug === "clinora";

  return (
    <div className={`relative aspect-[16/10] overflow-hidden border-b border-white/[0.1] ${isWebserv ? "bg-[#080d12] p-2 sm:p-2.5" : "bg-[#080d12]"}`}>
      <Image
        src={project.image}
        alt={`${project.name} project visual`}
        fill
        sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) calc(50vw - 44px), 430px"
        className={`${isWebserv ? "rounded-[4px] object-contain brightness-[0.7] contrast-[1.05]" : isClinora ? "object-contain" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.015]`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b0e]/45 via-transparent to-[#070b0e]/10" />
      {isWebserv ? <div className="pointer-events-none absolute inset-0 rounded-[4px] bg-[radial-gradient(ellipse_at_center,transparent_52%,rgba(7,11,14,0.22)_100%)]" /> : null}

      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="rounded-[4px] border border-white/[0.14] bg-[#070b0e]/70 px-2 py-1 font-mono text-[10px] leading-none text-[#cbd6e1] backdrop-blur-sm">
          {project.number}
        </span>
      </div>

      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[10px] font-medium text-[#e1e9f1]">
        <span className={`h-1.5 w-1.5 rounded-full ${isProduction ? "bg-success" : "bg-[#9aa8b7]"}`} aria-hidden="true" />
        {project.type}
        {project.live ? <ExternalLink className="ml-0.5 h-3 w-3 text-[#aab8c6]" aria-hidden="true" /> : null}
      </div>
    </div>
  );
}
