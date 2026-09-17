"use client";

import {
  ArrowRight,
  Bell,
  Cloud,
  Database,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type InfrastructureArea = {
  number: string;
  title: string;
  icon: LucideIcon;
  technologies?: string[];
  description: string;
  flow: Array<{ label: string; icon?: LucideIcon }>;
};

const infrastructureAreas: InfrastructureArea[] = [
  {
    number: "01",
    title: "Application & Data",
    icon: Server,
    technologies: ["ASP.NET Core", "PostgreSQL"],
    description: "The backend handles application workflows and persistent data access, with PostgreSQL providing the platform's relational data store.",
    flow: [{ label: "ASP.NET Core", icon: Server }, { label: "PostgreSQL", icon: Database }],
  },
  {
    number: "02",
    title: "Media Delivery",
    icon: Cloud,
    technologies: ["Cloudflare"],
    description: "Tempo uses Cloudflare in its media-delivery path to provide faster and more reliable access to application media.",
    flow: [{ label: "Tempo Client", icon: Smartphone }, { label: "Media Domain" }, { label: "Cloudflare", icon: Cloud }, { label: "Media Origin" }],
  },
  {
    number: "03",
    title: "Push Notifications",
    icon: Bell,
    description: "Push notification infrastructure allows Tempo to deliver relevant application updates and events to member devices.",
    flow: [{ label: "Platform", icon: Server }, { label: "Member Device", icon: Smartphone }],
  },
];

export function InfrastructureSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="infrastructure" aria-labelledby="infrastructure-heading" className="mx-auto w-full max-w-[1420px] border-t border-white/[0.06] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[720px]"
      >
        <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">05 / INFRASTRUCTURE</p>
        <h2 id="infrastructure-heading" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">
          Platform Infrastructure
        </h2>
        <p className="mt-6 max-w-[680px] text-[15px] leading-[1.75] text-[#9aa8b6]">
          Tempo&apos;s infrastructure supports application data, media delivery, and communication between the platform and member devices.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {infrastructureAreas.map((area, index) => {
          const Icon = area.icon;

          return (
            <motion.article
              key={area.number}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[7px] border border-white/[0.1] bg-[#0c141b] p-5 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-[#0f1921] sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[9px] tracking-[0.16em] text-[#627282]">{area.number}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-[5px] border border-white/[0.1] bg-white/[0.035] text-[#8295a7]">
                  <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-6 text-[17px] font-medium tracking-[-0.03em] text-[#e1eaf1]">{area.title}</h3>
              {area.technologies ? (
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${area.title} technologies`}>
                  {area.technologies.map((technology) => <li key={technology} className="rounded-[3px] border border-accent/20 bg-accent/[0.05] px-2 py-1 text-[9px] text-[#9fc9f5]">{technology}</li>)}
                </ul>
              ) : null}
              <p className="mt-5 text-[12px] leading-[1.7] text-[#8f9eac]">{area.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-white/[0.07] pt-4" aria-label={`${area.title} conceptual flow`}>
                {area.flow.map((step, stepIndex) => {
                  const StepIcon = step.icon;

                  return (
                    <span key={step.label} className="contents">
                      <span className="inline-flex items-center gap-1.5 text-[10px] text-[#aebbc7]">
                        {StepIcon ? <StepIcon className="h-3 w-3 text-[#5b91c3]" strokeWidth={1.5} aria-hidden="true" /> : null}
                        {step.label}
                      </span>
                      {stepIndex < area.flow.length - 1 ? <ArrowRight className="h-3 w-3 text-[#5b91c3]" strokeWidth={1.4} aria-hidden="true" /> : null}
                    </span>
                  );
                })}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
