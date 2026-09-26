"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { publicPath } from "@/config/paths";

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      initial={reduceMotion ? false : { opacity: 1, scale: 0.985, x: 18 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute left-[32%] top-[72%] z-0 -mt-[50%] aspect-square w-[580px] mix-blend-screen opacity-[0.45] sm:left-[38%] sm:top-1/2 sm:w-[820px] sm:opacity-80 md:left-[42%] md:w-[900px] lg:left-[49%] lg:top-[400px] lg:mt-0 lg:w-[900px] lg:opacity-100 xl:left-[51%] xl:top-[400px] xl:w-[960px]"
    >
      <div className="absolute inset-[10%] rounded-full bg-[#1e6db2]/10 blur-[70px] lg:-translate-y-1/2" />
      <div className="absolute inset-0 lg:-translate-y-1/2 [mask-image:radial-gradient(ellipse_at_center,black_54%,rgba(0,0,0,0.92)_72%,transparent_81%)]">
        <Image
          src={publicPath("/images/hero-earth.avif")}
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 75vw"
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}
