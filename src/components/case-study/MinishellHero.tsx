"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { TechnologyTag } from "@/components/projects/TechnologyTag";
import { publicPath } from "@/config/paths";

const technologies = ["C", "Unix", "Processes", "Shell"];
const builtIns = ["echo", "cd", "pwd", "export", "unset", "env", "exit"];

export function MinishellHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="overview" aria-labelledby="minishell-heading" className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(28,75,122,0.12),transparent_34%)]" />
      <div className="relative mx-auto grid min-h-[650px] w-full max-w-[1420px] items-center gap-12 px-6 py-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-12 lg:py-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-[580px]"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center text-[11px] font-medium text-[#7f8e9e] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span aria-hidden="true" className="mr-2 text-[#aab8c6]">←</span>
            Back to projects
          </Link>

          <div className="mt-16 flex items-center gap-4 sm:mt-20">
            <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#a8b5c2]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9aa8b7]" aria-hidden="true" />
              42 Curriculum · Systems Programming
            </span>
          </div>

          <h1 id="minishell-heading" className="mt-8 text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-[#f1f5f8]">
            Minishell
          </h1>
          <p className="mt-4 text-[clamp(1.25rem,2.4vw,1.8rem)] font-medium leading-none tracking-[-0.045em] text-[#83afe0]">Unix Shell in C</p>
          <p className="mt-6 max-w-[520px] text-[14px] leading-[1.65] text-[#9aa8b6] sm:text-[15px]">
            A Unix shell built from scratch in C, supporting command execution, pipes, redirections, environment expansion, signals, heredocs, and built-in commands.
          </p>
          <p className="mt-4 max-w-[520px] text-[13px] leading-[1.7] text-[#8f9eac]">
            Minishell is a systems-programming project inspired by Bash, built to explore how a shell parses user input, expands expressions, manages processes, connects commands through pipes, and executes programs.
          </p>
          <p className="mt-3 max-w-[520px] text-[13px] leading-[1.7] text-[#8f9eac]">
            Abdullah&apos;s work focused on parsing shell input and implementing command execution.
          </p>

          <div className="mt-7 flex flex-wrap gap-1.5">
            {technologies.map((technology) => <TechnologyTag key={technology} size="hero">{technology}</TechnologyTag>)}
          </div>
          <p className="mt-4 text-[10px] leading-[1.6] text-[#728294]">
            Built-ins: {builtIns.join(" · ")}
          </p>

          <a
            href="https://github.com/aboodjabr0/minishell"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Minishell on GitHub (opens in a new tab)"
            className="mt-7 inline-flex h-10 items-center gap-2 rounded-[6px] border border-white/[0.14] bg-white/[0.025] px-4 text-[12px] font-medium text-[#dce8f3] transition-[border-color,background-color,color] hover:border-accent/60 hover:bg-accent/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
            View on GitHub
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] border border-white/[0.1] bg-[#080f15] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.22)] sm:p-5">
            <Image
              src={publicPath("/images/projects/minishell-cover.jpeg")}
              alt="Minishell Unix shell project visual"
              fill
              priority
              sizes="(max-width: 1023px) 90vw, 570px"
              className="rounded-[4px] object-cover brightness-[0.58] contrast-[1.05] saturate-[0.8]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(7,11,14,0.42)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b0e]/50 via-transparent to-[#070b0e]/15" />
          </div>
          <p className="mt-3 text-right font-mono text-[9px] tracking-[0.16em] text-[#627282]">UNIX / PROCESSES / C</p>
        </motion.div>
      </div>
    </section>
  );
}
