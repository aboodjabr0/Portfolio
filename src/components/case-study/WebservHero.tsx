"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { TechnologyTag } from "@/components/projects/TechnologyTag";
import { publicPath } from "@/config/paths";

const technologies = ["C++", "HTTP", "CGI", "Networking"];

export function WebservHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="overview" aria-labelledby="webserv-heading" className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(28,75,122,0.12),transparent_34%)]" />
      <div className="relative mx-auto grid min-h-[650px] w-full max-w-[1420px] items-center gap-12 px-6 py-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-12 lg:py-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-[570px]"
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

          <h1 id="webserv-heading" className="mt-8 text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-[#f1f5f8]">
            Webserv
          </h1>
          <p className="mt-4 text-[clamp(1.25rem,2.4vw,1.8rem)] font-medium leading-none tracking-[-0.045em] text-[#83afe0]">HTTP Server in C++</p>
          <p className="mt-6 max-w-[510px] text-[14px] leading-[1.65] text-[#9aa8b6] sm:text-[15px]">
            A configurable HTTP server built from scratch in C++, with routing, request handling, CGI execution, and custom server configuration.
          </p>
          <p className="mt-4 max-w-[510px] text-[13px] leading-[1.7] text-[#8f9eac]">
            Webserv is a systems-programming project focused on understanding how an HTTP server processes configuration, matches routes, handles requests, generates responses, and executes CGI programs.
          </p>
          <p className="mt-3 max-w-[510px] text-[13px] leading-[1.7] text-[#8f9eac]">
            Abdullah&apos;s work focused on server configuration, routing, request handlers, and CGI integration.
          </p>

          <div className="mt-7 flex flex-wrap gap-1.5">
            {technologies.map((technology) => <TechnologyTag key={technology} size="hero">{technology}</TechnologyTag>)}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] border border-white/[0.1] bg-[#080f15] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.22)] sm:p-5">
            <Image
              src={publicPath("/images/projects/webserv-cover.jpeg")}
              alt="Webserv HTTP server project visual"
              fill
              priority
              sizes="(max-width: 1023px) 90vw, 570px"
              className="rounded-[4px] object-contain brightness-[0.72] contrast-[1.05]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_46%,rgba(7,11,14,0.3)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b0e]/30 via-transparent to-[#070b0e]/10" />
          </div>
          <p className="mt-3 text-right font-mono text-[9px] tracking-[0.16em] text-[#627282]">SYSTEMS / HTTP / C++</p>
        </motion.div>
      </div>
    </section>
  );
}
