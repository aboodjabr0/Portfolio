"use client";

import { motion, useReducedMotion } from "motion/react";

const challenges = [
  {
    number: "01",
    title: "Device-Bound Member Access",
    problem: "Gym member credentials could otherwise be shared across multiple devices, reducing control over account access.",
    approach: "Tempo associates member access with an authorized device and validates that relationship during authentication.",
    outcome: "Access from additional unauthorized devices can be rejected while the approved member device continues to work normally.",
  },
  {
    number: "02",
    title: "Efficient Media Delivery",
    problem: "Media-heavy application experiences can become slow and consume unnecessary backend bandwidth when large assets are delivered directly through the application server.",
    approach: "Tempo uses a dedicated media-delivery path with Cloudflare between clients and media resources.",
    outcome: "Media delivery is separated from normal application API traffic and can take advantage of edge delivery behavior.",
  },
  {
    number: "03",
    title: "Connecting Multiple Gym Workflows",
    problem: "Tempo combines memberships, workouts, nutrition, classes, bookings, and check-ins inside one product, creating workflows that cross several business domains.",
    approach: "Backend responsibilities are separated into clear application workflows while relational data connects member activity across the platform.",
    outcome: "The platform can support multiple gym experiences through one connected backend without treating every feature as an isolated application.",
  },
];

const challengeLabels = ["Problem", "Approach", "Outcome"] as const;

export function ChallengesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="challenges" aria-labelledby="challenges-heading" className="mx-auto w-full max-w-[1420px] border-t border-white/[0.06] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[720px]"
      >
        <p className="font-mono text-[9px] tracking-[0.22em] text-[#627282]">06 / CHALLENGES</p>
        <h2 id="challenges-heading" className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.06em] text-[#f1f5f8]">
          Engineering Challenges
        </h2>
        <p className="mt-6 max-w-[680px] text-[15px] leading-[1.75] text-[#9aa8b6]">
          Some of Tempo&apos;s most valuable engineering work came from solving practical product and platform constraints rather than adding more features.
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
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.07] pb-5">
                <div>
                  <span className="font-mono text-[9px] tracking-[0.16em] text-[#5b91c3]">{challenge.number}</span>
                  <h3 className="mt-3 text-[17px] font-medium leading-tight tracking-[-0.03em] text-[#e1eaf1]">{challenge.title}</h3>
                </div>
              </div>
              <dl className="divide-y divide-white/[0.07]">
                {challengeLabels.map((label, contentIndex) => (
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
