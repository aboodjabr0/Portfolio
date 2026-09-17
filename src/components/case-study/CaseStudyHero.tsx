"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/data/projects";
import { DeviceShowcase } from "@/components/case-study/DeviceShowcase";
import { TechnologyTag } from "@/components/projects/TechnologyTag";

export function CaseStudyHero({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const caseStudy = project.caseStudy;

  if (!caseStudy) return null;

  return (
    <section aria-labelledby="case-study-heading" className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_73%_47%,rgba(28,75,122,0.13),transparent_32%)]" />
      <div className="relative mx-auto grid min-h-[760px] w-full max-w-[1420px] items-center gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:px-12 lg:py-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-[560px]"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center text-[11px] font-medium text-[#7f8e9e] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span aria-hidden="true" className="mr-2 text-[#aab8c6]">←</span>
            Back to projects
          </Link>

          <div className="mt-16 flex items-center gap-4 sm:mt-20">
            <Image src={caseStudy.logo} alt={`${project.name} logo`} width={132} height={27} className="h-auto w-[116px] sm:w-[132px]" priority />
            <span className="h-4 w-px bg-white/[0.13]" aria-hidden="true" />
            <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#a8b5c2]">
              <span className="status-pulse h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
              {project.type}
            </span>
          </div>

          <h1 id="case-study-heading" className="mt-8 text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-[#f1f5f8]">
            {project.name}
          </h1>
          <p className="mt-4 text-[clamp(1.25rem,2.4vw,1.8rem)] font-medium leading-none tracking-[-0.045em] text-[#83afe0]">{caseStudy.subtitle}</p>
          <p className="mt-6 max-w-[480px] text-[14px] leading-[1.65] text-[#9aa8b6] sm:text-[15px]">{caseStudy.description}</p>

          <a
            href={project.live ?? undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Tempo Platform (opens in a new tab)"
            className="mt-8 inline-flex h-10 items-center gap-2 rounded-[6px] bg-accent px-4 text-[12px] font-semibold text-white shadow-button transition-all hover:bg-[#4699ff] hover:shadow-[0_10px_34px_rgba(47,140,255,0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Visit Platform
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <div className="mt-7 flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => <TechnologyTag key={technology} size="hero">{technology}</TechnologyTag>)}
          </div>
        </motion.div>

        <DeviceShowcase
          primaryImage={caseStudy.primaryImage}
          secondaryImage={caseStudy.secondaryImage}
          primaryAlt={`${project.name} workout tracking screen displayed on a mobile device`}
          secondaryAlt={`${project.name} member dashboard displayed on a mobile device`}
        />
      </div>
    </section>
  );
}
