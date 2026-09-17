"use client";

import {
  Database,
  Dumbbell,
  Layers3,
  ShieldCheck,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { BackendFlow } from "@/components/case-study/BackendFlow";

type EngineeringArea = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
  domains?: string[];
};

const engineeringAreas: EngineeringArea[] = [
  {
    number: "01",
    title: "Backend Architecture",
    description: "Structured the backend around clear controller, service, and data-access responsibilities to keep business logic separated from HTTP and persistence concerns.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Authentication & Device Security",
    description: "Implemented member access controls that bind an account to an authorized device, helping prevent credential sharing and unauthorized access from additional devices.",
    icon: ShieldCheck,
    featured: true,
  },
  {
    number: "03",
    title: "Core Business Features",
    description: "Built backend functionality for key gym workflows, including workouts, memberships, nutrition, classes, bookings, and member check-ins.",
    icon: Dumbbell,
    domains: ["Workouts", "Memberships", "Nutrition", "Classes", "Bookings", "Check-ins"],
  },
  {
    number: "04",
    title: "Data Access",
    description: "Used EF Core with PostgreSQL to manage relational application data across Tempo's backend workflows.",
    icon: Database,
  },
];

export function BackendSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="backend" aria-labelledby="backend-heading" className="mx-auto w-full max-w-[1420px] border-t border-white/[0.06] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[720px]"
      >
        <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">03 / BACKEND</p>
        <h2 id="backend-heading" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">
          Backend Engineering
        </h2>
        <p className="mt-6 max-w-[680px] text-[15px] leading-[1.75] text-[#9aa8b6]">
          Tempo&apos;s ASP.NET Core backend powers the platform&apos;s core workflows, from authentication and member access to workouts, bookings, memberships, and persistent application data.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.9fr)] lg:items-start lg:gap-12">
        <BackendFlow />

        <div>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[9px] tracking-[0.18em] text-[#627282]">CONTRIBUTIONS</p>
              <h3 className="mt-2 text-[20px] font-medium tracking-[-0.04em] text-[#e5edf3]">Backend Contributions</h3>
            </div>
            <Workflow className="mb-1 h-4 w-4 text-[#5b91c3]" strokeWidth={1.5} aria-hidden="true" />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {engineeringAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.42, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className={`group rounded-[7px] border p-4 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 ${area.featured ? "border-accent/35 bg-[#0e1821] hover:border-accent/60" : "border-white/[0.1] bg-[#0c141b] hover:border-accent/45 hover:bg-[#0f1921]"}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className={`font-mono text-[9px] tracking-[0.16em] ${area.featured ? "text-[#72b0f2]" : "text-[#627282]"}`}>{area.number}</span>
                    <span className={`flex h-7 w-7 items-center justify-center rounded-[5px] border ${area.featured ? "border-accent/35 bg-accent/10 text-[#8dbfff]" : "border-white/[0.1] bg-white/[0.035] text-[#8295a7]"}`}>
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                  </div>
                  <h4 className="mt-5 text-[14px] font-medium leading-tight tracking-[-0.02em] text-[#e1eaf1]">{area.title}</h4>
                  <p className="mt-3 text-[11px] leading-[1.65] text-[#8f9eac]">{area.description}</p>
                  {area.domains ? (
                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Supported Tempo domains">
                      {area.domains.map((domain) => (
                        <li key={domain} className="rounded-[3px] border border-white/[0.09] px-2 py-1 text-[9px] text-[#9eacba]">{domain}</li>
                      ))}
                    </ul>
                  ) : null}
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-3 border-t border-white/[0.07] pt-5 text-[11px] text-[#758696]">
        <Smartphone className="h-3.5 w-3.5 text-[#5b91c3]" strokeWidth={1.5} aria-hidden="true" />
        <span>Backend work across member and management experiences.</span>
      </div>
    </section>
  );
}
