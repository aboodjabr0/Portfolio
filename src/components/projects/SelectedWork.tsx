"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function SelectedWork() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 1, y: 0 };

  return (
    <section id="projects" aria-labelledby="selected-work-heading" className="home-section-depth home-section-selected relative border-t border-white/[0.055] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1420px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reveal}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">02 / SELECTED WORK</p>
            <h2 id="selected-work-heading" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">
              Selected Work
            </h2>
            <p className="mt-3 text-[14px] text-[#8b9aaa]">Real projects. Real engineering.</p>
          </div>

          <Link href="/projects" className="group/all inline-flex items-center gap-1.5 pb-1 text-[11px] font-medium text-[#aab8c6] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            View all projects
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/all:translate-x-0.5" aria-hidden="true" />
          </Link>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.filter((project) => project.featured).map((project, index) => (
            <motion.div
              key={project.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reveal}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
