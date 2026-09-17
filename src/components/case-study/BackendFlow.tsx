"use client";

import {
  ChevronDown,
  ChevronRight,
  Database,
  Layers3,
  Smartphone,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type BackendFlowNode = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const flowNodes: BackendFlowNode[] = [
  {
    eyebrow: "CLIENT",
    title: "Client Request",
    description: "Requests are sent from Tempo's mobile app and management platform.",
    icon: Smartphone,
  },
  {
    eyebrow: "CONTROLLER",
    title: "Controller",
    description: "Receives HTTP requests, validates input, and delegates work to the appropriate service.",
    icon: Workflow,
  },
  {
    eyebrow: "SERVICE",
    title: "Service Layer",
    description: "Contains business logic and coordinates the operations required to complete a request.",
    icon: Layers3,
  },
  {
    eyebrow: "EF CORE",
    title: "EF Core",
    description: "Maps application data to PostgreSQL and handles database reads and writes.",
    icon: Database,
  },
  {
    eyebrow: "POSTGRESQL",
    title: "PostgreSQL",
    description: "Stores Tempo's persistent relational data.",
    icon: Database,
  },
];

export function BackendFlow() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="rounded-[8px] border border-white/[0.1] bg-[#080f15] p-4 sm:p-5 lg:p-6" aria-label="Tempo backend request flow">
      <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/[0.07] pb-4">
        <div>
          <p className="font-mono text-[9px] tracking-[0.18em] text-[#627282]">REQUEST FLOW</p>
          <p className="mt-1 text-[12px] text-[#9aa8b6]">From client request to persistent data</p>
        </div>
        <ShieldCheck className="h-4 w-4 shrink-0 text-[#5b91c3]" strokeWidth={1.5} aria-hidden="true" />
      </div>

      <div className="flex flex-col items-stretch lg:flex-row lg:items-stretch">
        {flowNodes.map((node, index) => {
          const Icon = node.icon;

          return (
            <div key={node.eyebrow} className="contents">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.42, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group min-w-0 flex-1 rounded-[6px] border border-white/[0.1] bg-[#0c141b] p-4 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-[#0f1921]"
              >
                <div className="flex items-start gap-3 lg:flex-col lg:gap-3">
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
                <div className="flex h-8 shrink-0 items-center justify-center text-[#5b91c3] lg:h-auto lg:w-8" aria-hidden="true">
                  <ChevronDown className="h-4 w-4 lg:hidden" strokeWidth={1.5} />
                  <ChevronRight className="hidden h-4 w-4 lg:block" strokeWidth={1.5} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
