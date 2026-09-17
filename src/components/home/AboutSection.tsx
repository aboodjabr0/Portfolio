"use client";

import { motion, useReducedMotion } from "motion/react";

const principles = [
  {
    number: "01",
    title: "Build for real use",
    description: "Software should solve an actual problem, not exist only to demonstrate a technology.",
  },
  {
    number: "02",
    title: "Understand the system",
    description: "I like knowing what happens beyond the interface — through the backend, data, network, and operating system.",
  },
  {
    number: "03",
    title: "Keep learning",
    description: "I prefer learning through building, debugging, and understanding why something works rather than only memorizing how to use it.",
  },
];

const biography = [
  "I'm Abdullah Sauafth, a software engineer interested in building systems that are both useful to people and technically sound underneath.",
  "My path into software wasn't limited to classrooms or code. Before working deeply in engineering, I spent several years in customer-facing work environments, which taught me how to communicate, work under pressure, and understand the people on the other side of a product.",
  "At 42 Amman, I moved deeper into systems programming through projects involving C, C++, Unix processes, networking, HTTP, parsing, and shell execution.",
  "Today, my work spans production backend systems, mobile products, and lower-level software. I enjoy understanding how the pieces connect — from the interface a user sees to the backend, data, infrastructure, and operating-system behavior underneath it.",
];

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" aria-labelledby="about-heading" className="home-section-depth home-section-about relative border-t border-white/[0.055] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1420px] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(240px,0.72fr)_minmax(0,1.28fr)] lg:gap-16 xl:gap-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">ABOUT</p>
            <h2 id="about-heading" className="mt-4 max-w-[360px] text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[#f1f5f8]">
              A little more than the code.
            </h2>
            <div className="mt-8 h-px w-14 bg-accent/70" aria-hidden="true" />
          </motion.div>

          <div className="max-w-[720px]">
            <div className="space-y-5">
              {biography.map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.48, delay: reduceMotion ? 0 : index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className={`${index === 0 ? "text-[17px] leading-[1.7] text-[#d5e0ea]" : "text-[14px] leading-[1.8] text-[#9aa8b6]"}`}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.48, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 border-t border-white/[0.08] pt-6"
            >
              <p className="font-mono text-[9px] tracking-[0.18em] text-[#627282]">HOW I THINK ABOUT ENGINEERING</p>
              <ol className="mt-4 divide-y divide-white/[0.07]">
                {principles.map((principle) => (
                  <li key={principle.number} className="grid gap-2 py-4 sm:grid-cols-[34px_170px_minmax(0,1fr)] sm:items-baseline sm:gap-4">
                    <span className="font-mono text-[10px] text-[#5b91c3]">{principle.number}</span>
                    <h3 className="text-[13px] font-medium text-[#d6e1ea]">{principle.title}</h3>
                    <p className="text-[12px] leading-[1.7] text-[#8998a7]">{principle.description}</p>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
