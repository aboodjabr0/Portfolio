"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { contactLinks } from "@/data/contact";

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" aria-labelledby="contact-heading" className="home-section-depth home-section-contact relative border-t border-white/[0.055] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1420px] gap-12 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.8fr)] lg:items-start lg:gap-20 lg:px-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[620px]"
        >
          <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">CONTACT</p>
          <h2 id="contact-heading" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">
            Let&apos;s Build Something
          </h2>
          <p className="mt-5 max-w-[560px] text-[15px] leading-[1.75] text-[#9aa8b6]">
            I&apos;m open to discussing software opportunities, technical challenges, and interesting products or systems.
          </p>
        </motion.div>

        <div className="space-y-3">
          {contactLinks.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                aria-label={`${contact.label}: ${contact.value} (opens in a new tab)`}
                className="group flex min-h-[76px] items-center justify-between gap-5 rounded-[7px] border border-white/[0.1] bg-[#0a1015] px-4 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-[#0d151c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:px-5"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[5px] border border-white/[0.1] bg-white/[0.035] text-[#8295a7] transition-colors group-hover:border-accent/40 group-hover:text-[#8dbfff]">
                    <Icon className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[12px] font-medium text-[#e1eaf1]">{contact.label}</span>
                    <span className="mt-1 block truncate text-[11px] text-[#8f9eac]">{contact.value}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#627282] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#8dbfff]" strokeWidth={1.5} aria-hidden="true" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
