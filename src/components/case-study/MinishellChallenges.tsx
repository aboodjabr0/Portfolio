"use client";

import { motion, useReducedMotion } from "motion/react";

const challenges = [
  {
    number: "01",
    title: "Parsing Shell Syntax",
    problem: "Shell input mixes commands, arguments, quotes, expansions, pipes, and redirections inside a single command line.",
    approach: "Process input in stages so tokenization, syntax validation, structured parsing, and expansion remain separate concerns.",
    outcome: "The execution layer receives structured command data instead of having to interpret raw user input.",
  },
  {
    number: "02",
    title: "Executing Pipelines",
    problem: "Commands connected by pipes must run as separate processes while sharing data through file descriptors.",
    approach: "Use Unix process creation and pipe handling to connect command output to the next command's input.",
    outcome: "Multiple commands can execute as a connected pipeline instead of isolated processes.",
  },
  {
    number: "03",
    title: "Redirections & Heredocs",
    problem: "Input and output may come from files or heredoc content instead of the terminal.",
    approach: "Adjust process file descriptors before execution so commands read from and write to the correct sources.",
    outcome: "Commands can support shell-style input, output, append, and heredoc behavior.",
  },
];

const labels = ["Problem", "Approach", "Outcome"] as const;

export function MinishellChallenges() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="challenges" aria-labelledby="minishell-challenges-heading" className="mx-auto w-full max-w-[1420px] border-t border-white/[0.06] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[720px]"
      >
        <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">04 / CHALLENGES</p>
        <h2 id="minishell-challenges-heading" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">
          Technical Challenges
        </h2>
        <p className="mt-6 max-w-[680px] text-[15px] leading-[1.75] text-[#9aa8b6]">
          Building a shell requires multiple low-level behaviors to work together correctly before even a simple command behaves as expected.
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
