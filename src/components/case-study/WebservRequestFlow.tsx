"use client";

import {
  ArrowDown,
  ArrowRight,
  Code2,
  FileText,
  GitBranch,
  Laptop,
  Send,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type RequestFlowNode = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const flowNodes: RequestFlowNode[] = [
  { eyebrow: "CLIENT", title: "Client", description: "Sends an HTTP request to the server.", icon: Laptop },
  { eyebrow: "REQUEST", title: "HTTP Request", description: "Carries the requested resource, method, headers, and request data.", icon: FileText },
  { eyebrow: "ROUTING", title: "Route Matching", description: "Matches the request against the configured server and route behavior.", icon: GitBranch },
  { eyebrow: "HANDLER", title: "Request Handler", description: "Processes the request according to the selected route and requested operation.", icon: Workflow },
  { eyebrow: "CGI / STATIC", title: "Response Source", description: "Returns server content directly or delegates execution to CGI when required.", icon: Code2 },
  { eyebrow: "RESPONSE", title: "HTTP Response", description: "Returns the resulting status, headers, and response body to the client.", icon: Send },
];

export function WebservRequestFlow() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="request-flow" aria-labelledby="request-flow-heading" className="mx-auto w-full max-w-[1420px] border-t border-white/[0.06] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[720px]"
      >
        <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">02 / REQUEST FLOW</p>
        <h2 id="request-flow-heading" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">
          From Request to Response
        </h2>
        <p className="mt-6 max-w-[680px] text-[15px] leading-[1.75] text-[#9aa8b6]">
          A simplified view of how Webserv processes an incoming HTTP request and turns it into a response.
        </p>
      </motion.div>

      <div className="mt-12 rounded-[8px] border border-white/[0.1] bg-[#080f15] p-4 sm:p-5 lg:p-6">
        <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/[0.07] pb-4">
          <div>
            <p className="font-mono text-[9px] tracking-[0.18em] text-[#627282]">HTTP PIPELINE</p>
            <p className="mt-1 text-[12px] text-[#9aa8b6]">Configured routes determine how a request is handled</p>
          </div>
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
        </div>

        <div className="flex flex-col items-stretch xl:flex-row xl:items-stretch">
          {flowNodes.map((node, index) => {
            const Icon = node.icon;

            return (
              <div key={node.eyebrow} className="contents">
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.42, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group min-w-0 flex-1 rounded-[6px] border border-white/[0.1] bg-[#0c141b] p-4 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-[#0f1921]"
                >
                  <div className="flex items-start gap-3 xl:flex-col xl:gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[5px] border border-white/[0.1] bg-white/[0.035] text-[#8295a7] transition-colors group-hover:border-accent/40 group-hover:text-[#8dbfff]">
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[9px] tracking-[0.13em] text-[#5b91c3]">{node.eyebrow}</p>
                      <h3 className="mt-2 text-[13px] font-medium leading-tight text-[#e1eaf1]">{node.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-[11px] leading-[1.6] text-[#8f9eac]">{node.description}</p>
                </motion.div>

                {index < flowNodes.length - 1 ? (
                  <div className="flex h-8 shrink-0 items-center justify-center text-[#5b91c3] xl:h-auto xl:w-8" aria-hidden="true">
                    <ArrowDown className="h-4 w-4 xl:hidden" strokeWidth={1.5} />
                    <ArrowRight className="hidden h-4 w-4 xl:block" strokeWidth={1.5} />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
