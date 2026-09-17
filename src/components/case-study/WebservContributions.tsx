"use client";

import { Code2, GitBranch, Settings2, Workflow, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const contributions: Array<{ number: string; title: string; description: string; icon: LucideIcon }> = [
  { number: "01", title: "Server Configuration", description: "Worked on the configuration layer that defines how the server behaves and how incoming requests should be handled.", icon: Settings2 },
  { number: "02", title: "Routing", description: "Implemented routing behavior that connects incoming requests with the appropriate configured server logic.", icon: GitBranch },
  { number: "03", title: "Request Handlers", description: "Worked on request-handling logic responsible for processing incoming HTTP operations and producing the appropriate server response.", icon: Workflow },
  { number: "04", title: "CGI Execution", description: "Implemented CGI-related behavior so configured requests can execute external programs and return their output through the HTTP response.", icon: Code2 },
];

export function WebservContributions() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contributions" aria-labelledby="contributions-heading" className="mx-auto w-full max-w-[1420px] border-t border-white/[0.06] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[720px]"
      >
        <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">03 / CONTRIBUTIONS</p>
        <h2 id="contributions-heading" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">
          What I Worked On
        </h2>
        <p className="mt-6 max-w-[680px] text-[15px] leading-[1.75] text-[#9aa8b6]">
          My work focused on the parts that determine how the server is configured, how requests are routed, and how different types of responses are produced.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {contributions.map((contribution, index) => {
          const Icon = contribution.icon;

          return (
            <motion.article
              key={contribution.number}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[7px] border border-white/[0.1] bg-[#0c141b] p-5 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-[#0f1921] sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[9px] tracking-[0.16em] text-[#5b91c3]">{contribution.number}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-[5px] border border-white/[0.1] bg-white/[0.035] text-[#8295a7]">
                  <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-6 text-[17px] font-medium tracking-[-0.03em] text-[#e1eaf1]">{contribution.title}</h3>
              <p className="mt-4 text-[12px] leading-[1.7] text-[#8f9eac]">{contribution.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
