"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { projects, type Project } from "@/data/projects";
import { CompactProjectCard } from "@/components/projects/CompactProjectCard";
import { MajorProjectCard } from "@/components/projects/MajorProjectCard";

const filters = ["All", "Production", "Full Stack", "Systems", "42 Curriculum"] as const;
type Filter = (typeof filters)[number];

function matchesFilter(project: Project, filter: Filter) {
  if (filter === "All") return true;
  if (filter === "Production") return project.type === "Production";
  if (filter === "42 Curriculum") return project.type === "42 Curriculum";
  return project.categories?.includes(filter) ?? false;
}

export function AllProjectsPage() {
  const [filter, setFilter] = useStateFilter();
  const reduceMotion = useReducedMotion();
  const filteredProjects = projects.filter((project) => matchesFilter(project, filter));
  const majorProjects = filteredProjects.filter((project) => project.group === "major");
  const systemsProjects = filteredProjects.filter((project) => project.group === "systems");

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-primary-foreground">
      <div className="mx-auto w-full max-w-[1420px] px-6 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-12 lg:pb-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[760px]"
        >
          <Link href="/" className="inline-flex items-center text-[11px] font-medium text-[#7f8e9e] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <span aria-hidden="true" className="mr-2 text-[#aab8c6]">←</span>
            Back home
          </Link>
          <p className="mt-16 font-mono text-[9px] tracking-[0.22em] text-[#627282]">PROJECTS</p>
          <h1 className="mt-3 text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-none tracking-[-0.07em] text-[#f1f5f8]">All Projects</h1>
          <p className="mt-5 max-w-[700px] text-[15px] leading-[1.75] text-[#9aa8b6]">A broader look at what I&apos;ve built — from production platforms and interactive products to systems programming, networking, and low-level C projects.</p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-2 border-y border-white/[0.07] py-4" aria-label="Project filters">
          {filters.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
              className={`rounded-[5px] border px-3 py-2 text-[10px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${filter === option ? "border-accent/50 bg-accent/[0.1] text-[#cfe5ff]" : "border-white/[0.1] bg-white/[0.02] text-[#8493a2] hover:border-white/[0.2] hover:text-[#c1ceda]"}`}
            >
              {option}
            </button>
          ))}
        </div>

        {majorProjects.length ? (
          <ProjectGroup title="Major Work" description="Production products, substantial technical projects, and work that best represents my engineering range.">
            <div className="grid gap-5 lg:grid-cols-2">
              {majorProjects.map((project, index) => <motion.div key={project.slug} initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.05, ease: [0.22, 1, 0.36, 1] }}><MajorProjectCard project={project} /></motion.div>)}
            </div>
          </ProjectGroup>
        ) : null}

        {systemsProjects.length ? (
          <ProjectGroup title="Systems & 42 Projects" description="Projects focused on C, C++, Unix, algorithms, processes, concurrency, networking, graphics, and system administration.">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {systemsProjects.map((project, index) => <motion.div key={project.slug} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.035, ease: [0.22, 1, 0.36, 1] }}><CompactProjectCard project={project} /></motion.div>)}
            </div>
          </ProjectGroup>
        ) : null}
      </div>
    </main>
  );
}

function ProjectGroup({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <section className="mt-16 first:mt-14" aria-labelledby={`${title.toLowerCase().replaceAll(" ", "-")}-heading`}>
      <div className="mb-7">
        <h2 id={`${title.toLowerCase().replaceAll(" ", "-")}-heading`} className="text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-none tracking-[-0.055em] text-[#f1f5f8]">{title}</h2>
        <p className="mt-3 max-w-[680px] text-[13px] leading-[1.7] text-[#8b9aaa]">{description}</p>
      </div>
      {children}
    </section>
  );
}

function useStateFilter(): [Filter, (filter: Filter) => void] {
  const [filter, setFilter] = useState<Filter>("All");
  return [filter, setFilter];
}
