"use client";

import { motion, useReducedMotion } from "motion/react";
import { DatabaseDiagram } from "@/components/case-study/DatabaseDiagram";

const principles = [
  {
    number: "01",
    title: "Relational Structure",
    description: "PostgreSQL provides a relational foundation for Tempo's connected gym and member data.",
  },
  {
    number: "02",
    title: "Domain Separation",
    description: "Memberships, workouts, nutrition, bookings, and check-ins remain distinct application domains.",
  },
  {
    number: "03",
    title: "EF Core Integration",
    description: "EF Core maps application data between the ASP.NET Core backend and PostgreSQL.",
  },
  {
    number: "04",
    title: "Connected Member Activity",
    description: "Member activity can be associated across training, memberships, bookings, and attendance workflows.",
  },
];

export function DatabaseSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="database" aria-labelledby="database-heading" className="mx-auto w-full max-w-[1420px] border-t border-white/[0.06] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[720px]"
      >
        <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">04 / DATABASE</p>
        <h2 id="database-heading" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">
          Data Model
        </h2>
        <p className="mt-6 max-w-[680px] text-[15px] leading-[1.75] text-[#9aa8b6]">
          Tempo&apos;s data model connects members, memberships, training activity, nutrition, classes, bookings, and check-ins while keeping each domain clearly separated.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-8 xl:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.75fr)] xl:items-start xl:gap-10">
        <DatabaseDiagram />

        <aside className="rounded-[8px] border border-white/[0.1] bg-[#0a1015]">
          <div className="border-b border-white/[0.08] p-5 sm:p-6">
            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#7f8e9e]">Data design principles</p>
            <p className="mt-3 text-[13px] leading-[1.65] text-[#aebbc7]">A portfolio-level view of the relationships that support Tempo&apos;s core member workflows.</p>
          </div>
          <ol className="divide-y divide-white/[0.07]">
            {principles.map((principle) => (
              <li key={principle.number} className="flex gap-4 p-5 sm:p-6">
                <span className="pt-0.5 font-mono text-[10px] text-[#5b91c3]">{principle.number}</span>
                <div>
                  <h3 className="text-[13px] font-medium text-[#e1eaf1]">{principle.title}</h3>
                  <p className="mt-2 text-[11px] leading-[1.65] text-[#8f9eac]">{principle.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
