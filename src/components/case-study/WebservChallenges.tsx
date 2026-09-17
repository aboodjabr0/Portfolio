"use client";

import { motion, useReducedMotion } from "motion/react";

const challenges = [
  {
    number: "01",
    title: "Configuration to Runtime Behavior",
    problem: "Server behavior is driven by configuration, so configuration data has to translate correctly into runtime request handling.",
    approach: "Structured configuration information so routing and handlers can use it when deciding how each request should be processed.",
    outcome: "Request behavior remains connected to the server configuration instead of being hard-coded into individual handlers.",
  },
  {
    number: "02",
    title: "Routing Requests Correctly",
    problem: "Different request paths can require different server behavior.",
    approach: "Connected route selection with the configured handling rules so requests can reach the appropriate processing logic.",
    outcome: "The server can apply different behavior according to the matched route.",
  },
  {
    number: "03",
    title: "CGI Integration",
    problem: "CGI requests require the server to coordinate HTTP handling with execution outside the normal static-response path.",
    approach: "Integrated CGI execution into the request-processing flow and returned the resulting output through the server response.",
    outcome: "Configured requests can move through either the normal response path or the CGI execution path.",
  },
];

const labels = ["Problem", "Approach", "Outcome"] as const;

export function WebservChallenges() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="challenges" aria-labelledby="webserv-challenges-heading" className="mx-auto w-full max-w-[1420px] border-t border-white/[0.06] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[720px]"
      >
        <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">04 / CHALLENGES</p>
        <h2 id="webserv-challenges-heading" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">
          Technical Challenges
        </h2>
        <p className="mt-6 max-w-[680px] text-[15px] leading-[1.75] text-[#9aa8b6]">
          Building Webserv required translating protocol and configuration rules into predictable server behavior.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {challenges.map((challenge, index) => {
          const content = [challenge.problem, challenge.approach, challenge.outcome];

          return (
            <motion.article
              key={challenge.number}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[7px] border border-white/[0.1] bg-[#0c141b] p-5 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-[#0f1921] sm:p-6"
            >
              <div className="border-b border-white/[0.07] pb-5">
                <span className="font-mono text-[9px] tracking-[0.16em] text-[#5b91c3]">{challenge.number}</span>
                <h3 className="mt-3 text-[17px] font-medium leading-tight tracking-[-0.03em] text-[#e1eaf1]">{challenge.title}</h3>
              </div>
              <dl className="divide-y divide-white/[0.07]">
                {labels.map((label, contentIndex) => (
                  <div key={label} className="grid gap-2 py-5 first:pt-5 last:pb-0 sm:grid-cols-[72px_1fr] sm:gap-4">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#6c8297]">{label}</dt>
                    <dd className="text-[12px] leading-[1.7] text-[#9eacba]">{content[contentIndex]}</dd>
                  </div>
                ))}
              </dl>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
