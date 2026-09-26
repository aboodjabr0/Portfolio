"use client";

import { ArrowUpRight, Code2, Mail, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function CallToActionSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="challenge" aria-labelledby="challenge-heading" className="home-section-depth home-section-cta relative border-t border-white/[0.055] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-[900px] overflow-hidden rounded-[8px] border border-white/[0.12] bg-[#0a1117] px-6 py-14 text-center transition-colors duration-300 hover:border-white/[0.2] sm:px-10 sm:py-16 lg:px-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(47,140,255,0.13),transparent_48%)]" aria-hidden="true" />
        <div className="relative">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex h-9 w-9 items-center justify-center rounded-[6px] border border-accent/35 bg-accent/[0.08] text-[#8dbfff]"
          >
            <Code2 className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
          </motion.div>
          <h2 id="challenge-heading" className="mt-6 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">
            Want to see how I think?
          </h2>
          <p className="mx-auto mt-5 max-w-[590px] text-[14px] leading-[1.75] text-[#9aa8b6] sm:text-[15px]">
            Have a technical challenge, product idea, or engineering problem? Choose how you&apos;d like to send it.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="https://wa.me/962777260633" target="_blank" rel="noopener noreferrer" className="group inline-flex h-10 items-center justify-center gap-2 rounded-[6px] bg-accent px-4 text-[12px] font-semibold text-white shadow-button transition-all hover:bg-[#4699ff] hover:shadow-[0_10px_34px_rgba(47,140,255,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              Send via WhatsApp
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} aria-hidden="true" />
            </a>
            <a href="mailto:abdullahsauafth@gmail.com" className="group inline-flex h-10 items-center justify-center gap-2 rounded-[6px] border border-white/[0.16] bg-white/[0.015] px-4 text-[12px] font-medium text-[#d7e0e9] transition-all hover:border-white/[0.3] hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              Send via email
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
