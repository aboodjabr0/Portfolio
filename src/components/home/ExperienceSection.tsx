"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { experienceItems, type ExperienceItem } from "@/data/experience";

export function ExperienceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" aria-labelledby="experience-heading" className="home-section-depth home-section-experience relative border-t border-white/[0.055] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1420px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[720px]"
        >
          <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">EXPERIENCE</p>
          <h2 id="experience-heading" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">
            Experience &amp; Training
          </h2>
          <p className="mt-5 max-w-[680px] text-[15px] leading-[1.75] text-[#9aa8b6]">
            Production software work, systems programming, and hands-on experience working in real team environments.
          </p>
        </motion.div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute bottom-5 left-[7px] top-5 hidden w-px bg-white/[0.08] lg:block" aria-hidden="true" />
          <div className="space-y-3">
            {experienceItems.map((item, index) => (
              <ExperienceEntry key={`${item.title}-${item.organization ?? item.category}`} item={item} index={index} reduceMotion={Boolean(reduceMotion)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceEntry({ item, index, reduceMotion }: { item: ExperienceItem; index: number; reduceMotion: boolean }) {
  const Icon = item.icon;
  const isCompact = item.emphasis === "compact";

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.48, delay: reduceMotion ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={isCompact ? "border-t border-white/[0.07] py-5 lg:pl-8" : `rounded-[8px] border p-5 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 sm:p-6 lg:pl-8 ${item.emphasis === "primary" ? "border-accent/30 bg-[#0b141b] hover:border-accent/55" : "border-white/[0.1] bg-[#0a1015] hover:border-white/[0.2]"}`}
    >
      <div className="grid gap-5 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-8">
        <div className="relative lg:pl-5">
          <span className={`absolute left-0 top-1.5 hidden h-2 w-2 rounded-full border-2 border-ink lg:block ${item.emphasis === "primary" ? "bg-accent" : item.emphasis === "secondary" ? "bg-[#6d9bc9]" : "bg-[#536271]"}`} aria-hidden="true" />
          <p className={`font-mono text-[9px] tracking-[0.16em] ${isCompact ? "text-[#647584]" : "text-[#6e91b2]"}`}>{item.category}</p>
          {item.period ? <p className="mt-2 text-[11px] text-[#7f8e9e]">{item.period}</p> : null}
        </div>

        <div className="min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className={`${isCompact ? "text-[17px]" : "text-[20px]"} font-medium leading-tight tracking-[-0.035em] text-[#e5edf3]`}>{item.title}</h3>
              {item.subtitle ? <p className="mt-2 text-[12px] text-[#9fc9f5]">{item.subtitle}</p> : null}
              {item.organization ? <p className="mt-1 text-[12px] text-[#8b9aaa]">{item.organization}</p> : null}
            </div>
            <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${isCompact ? "text-[#627282]" : "text-[#5b91c3]"}`} strokeWidth={1.5} aria-hidden="true" />
          </div>

          <p className={`${isCompact ? "mt-3 max-w-[760px] text-[12px]" : "mt-5 max-w-[820px] text-[13px]"} leading-[1.7] text-[#8f9eac]`}>{item.description}</p>

          {!isCompact && item.technologies ? (
            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${item.title} experience areas`}>
              {item.technologies.map((technology) => <li key={technology} className="rounded-[4px] border border-white/[0.1] bg-white/[0.025] px-2.5 py-1.5 text-[10px] leading-none text-[#9eacba]">{technology}</li>)}
            </ul>
          ) : null}

          {!isCompact && item.links?.length ? (
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/[0.07] pt-4">
              {item.links.map((link) => (
                link.href ? (
                  <Link key={link.label} href={link.href} className="group/link inline-flex items-center gap-1.5 text-[11px] font-medium text-[#a9c9e8] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                    {link.label}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" strokeWidth={1.5} aria-hidden="true" />
                  </Link>
                ) : (
                  <span key={link.label} className="inline-flex items-center text-[11px] font-medium text-[#9bb0c3]">
                    {link.label}
                  </span>
                )
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
