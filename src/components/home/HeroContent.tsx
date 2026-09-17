"use client";

import { ArrowRight, Download } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/config/site";
import { HeroStats } from "@/components/home/HeroStats";

export function HeroContent() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 1, y: 14 }}
      animate={reveal}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 w-full max-w-[580px]"
    >
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.035] px-3.5 py-1.5 text-[11px] font-medium tracking-[-0.01em] text-[#a4b2c1] backdrop-blur-sm">
        <span className="status-pulse h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
        Available for opportunities
      </div>

      <h1 id="hero-heading" className="max-w-none text-[clamp(2.75rem,5.7vw,4.65rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-[#f4f7fa]">
        {siteConfig.name}
      </h1>

      <p className="mt-2 text-[clamp(1.25rem,2.2vw,1.55rem)] font-medium leading-none tracking-[-0.045em] text-accent">
        Software Engineer
      </p>

      <p className="mt-2 text-[12px] font-medium tracking-[0.01em] text-[#9aa8b6] sm:text-[13px]">
        Backend · Systems
      </p>

      <p className="mt-7 max-w-[510px] text-[14px] leading-[1.7] text-[#9aa8b6] sm:text-[15px]">
        I build products, backend systems, and low-level software — from production applications to C and C++ systems projects.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="group inline-flex h-10 items-center gap-2 rounded-[6px] bg-accent px-4 text-[12px] font-semibold text-white shadow-button transition-all hover:bg-[#4699ff] hover:shadow-[0_10px_34px_rgba(47,140,255,0.26)]"
        >
          View my work
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
        </a>
        <a
          href="#resume"
          className="inline-flex h-10 items-center gap-2 rounded-[6px] border border-white/[0.16] bg-white/[0.015] px-4 text-[12px] font-medium text-[#d7e0e9] transition-all hover:border-white/[0.3] hover:bg-white/[0.05] hover:text-white"
        >
          Resume
          <Download className="h-3.5 w-3.5 text-[#9aabbb]" strokeWidth={1.8} />
        </a>
      </div>

      <HeroStats />
    </motion.div>
  );
}
