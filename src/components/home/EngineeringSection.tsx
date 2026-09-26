"use client";

import Link from "next/link";
import { ArrowRight, Database, Server, Terminal, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type EngineeringArea = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
  projects: Array<{ name: string; href: string }>;
};

const engineeringAreas: EngineeringArea[] = [
  {
    number: "01",
    title: "Backend Engineering",
    description: "Building application logic, APIs, authentication flows, and maintainable backend workflows.",
    icon: Server,
    capabilities: ["ASP.NET Core", "EF Core", "API Design", "Authentication", "Device Access Control", "Service-Based Backend Structure"],
    projects: [{ name: "Tempo", href: "/projects/tempo" }],
  },
  {
    number: "02",
    title: "Systems Programming",
    description: "Working closer to the operating system through processes, networking, parsing, and protocol-level behavior.",
    icon: Terminal,
    capabilities: ["C", "C++", "Unix Processes", "File Descriptors", "Parsing", "HTTP", "CGI", "Shell Execution", "Networking"],
    projects: [
      { name: "Webserv", href: "/projects/webserv" },
      { name: "Minishell", href: "/projects/minishell" },
    ],
  },
  {
    number: "03",
    title: "Data & Infrastructure",
    description: "Working with relational application data and supporting infrastructure used by production software.",
    icon: Database,
    capabilities: ["PostgreSQL", "Relational Data Modeling", "Cloudflare", "Media Delivery", "Push Notifications"],
    projects: [{ name: "Tempo", href: "/projects/tempo" }],
  },
];

export function EngineeringSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="engineering" aria-labelledby="engineering-heading" className="home-section-depth home-section-engineering relative border-t border-white/[0.055] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1420px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[720px]"
        >
          <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">ENGINEERING</p>
          <h2 id="engineering-heading" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">
            What I Work With
          </h2>
          <p className="mt-5 max-w-[680px] text-[15px] leading-[1.75] text-[#9aa8b6]">
            From production backend systems to low-level Unix programming, my work spans application architecture, data, and systems engineering.
          </p>
        </motion.div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
            <span className="absolute left-1/2 top-[14%] h-[72%] w-px bg-white/[0.055]" />
            <span className="absolute left-[14%] top-1/2 h-px w-[72%] bg-white/[0.055]" />
          </div>

          <div className="relative grid gap-4 md:grid-cols-2">
            {engineeringAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.48, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-[8px] border border-white/[0.1] bg-[#0a1015] p-5 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-[#0d151c] focus-within:border-accent/55 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[9px] tracking-[0.16em] text-[#5b91c3]">{area.number}</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-[5px] border border-white/[0.1] bg-white/[0.035] text-[#8295a7] transition-colors group-hover:border-accent/40 group-hover:text-[#8dbfff]">
                      <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className="mt-6 text-[19px] font-medium tracking-[-0.035em] text-[#e5edf3]">{area.title}</h3>
                  <p className="mt-3 max-w-[560px] text-[13px] leading-[1.7] text-[#8f9eac]">{area.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${area.title} capabilities`}>
                    {area.capabilities.map((capability) => (
                      <li key={capability} className="rounded-[4px] border border-white/[0.1] bg-white/[0.025] px-2.5 py-1.5 text-[10px] leading-none text-[#9eacba] transition-[border-color,background-color,color] duration-200 group-hover:border-white/[0.15] group-hover:text-[#b9c9d8]">
                        {capability}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-white/[0.07] pt-4 text-[10px]">
                    <span className="text-[#687888]">Used in</span>
                    <ArrowRight className="h-3 w-3 text-[#5b91c3]" strokeWidth={1.5} aria-hidden="true" />
                    {area.projects.map((project, projectIndex) => (
                      <span key={project.name} className="inline-flex items-center gap-2">
                        <Link href={project.href} className="font-medium text-[#a9c9e8] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                          {project.name}
                        </Link>
                        {projectIndex < area.projects.length - 1 ? <span className="text-[#526575]" aria-hidden="true">·</span> : null}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
