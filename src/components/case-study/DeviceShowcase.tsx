"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

type DeviceShowcaseProps = {
  primaryImage: string;
  secondaryImage: string;
  primaryAlt: string;
  secondaryAlt: string;
};

export function DeviceShowcase({ primaryImage, secondaryImage, primaryAlt, secondaryAlt }: DeviceShowcaseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto h-[480px] w-full max-w-[540px] sm:h-[560px] lg:h-[700px] lg:max-w-[600px] lg:-translate-x-5 lg:translate-y-3"
    >
      <div className="absolute inset-[18%_15%_10%_18%] rounded-full bg-[#1e6db2]/10 blur-[64px]" />

      <div className="absolute left-0 top-[12%] z-0 h-[80%] w-[50%] -rotate-[4deg] opacity-70">
        <Image
          src={secondaryImage}
          alt={secondaryAlt}
          fill
          sizes="(max-width: 639px) 42vw, (max-width: 1023px) 250px, 300px"
          className="object-contain"
        />
      </div>

      <div className="absolute right-0 top-0 z-10 h-[96%] w-[57%] rotate-[2deg]">
        <Image
          src={primaryImage}
          alt={primaryAlt}
          fill
          priority
          sizes="(max-width: 639px) 48vw, (max-width: 1023px) 290px, 340px"
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}
