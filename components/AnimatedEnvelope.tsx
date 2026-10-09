"use client";

import { motion, useReducedMotion } from "motion/react";
import { invitationConfig } from "@/lib/invitation-config";

type AnimatedEnvelopeProps = { opened: boolean };

export function AnimatedEnvelope({ opened }: AnimatedEnvelopeProps) {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.8;

  return (
    <motion.div
      aria-hidden="true"
      className="relative mx-auto aspect-[1.5] w-[min(80vw,380px,65svh)] [perspective:1000px]"
      animate={{ y: opened || reduceMotion ? 0 : [0, -7, 0] }}
      transition={{ duration: 4.8, repeat: opened || reduceMotion ? 0 : Infinity, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-0 rounded-sm border border-champagne/50 bg-[#e8d8b2] shadow-[0_24px_60px_rgba(0,0,0,.4)]"
        animate={{ opacity: opened ? 0 : 1 }}
        transition={{ delay: reduceMotion ? 0 : 1.25, duration }}
      />
      <motion.div
        className="paper-texture absolute inset-x-[8%] inset-y-[8%] z-10 grid place-content-center border border-champagne/50 text-center text-midnight shadow-xl"
        initial={false}
        animate={{ y: opened ? "-45%" : "0%", opacity: opened ? 1 : 0 }}
        transition={{ delay: reduceMotion ? 0 : 0.6, duration, ease: "easeInOut" }}
      >
        <p className="text-[0.6rem] uppercase tracking-[0.15em] text-[#846515]">{invitationConfig.company.name}</p>
        <p className="mt-2 font-display text-3xl leading-none text-[#7d641a] sm:text-4xl">{invitationConfig.event.titleLines.map((line, index) => <span className="block" key={index}>{line}</span>)}</p>
      </motion.div>
      <motion.div
        className="absolute inset-0 z-20 border border-champagne/40 bg-[#f0e3c4]"
        style={{ clipPath: "polygon(0 0, 50% 52%, 100% 0, 100% 100%, 0 100%)" }}
        animate={{ opacity: opened ? 0 : 1, y: opened ? "10%" : "0%" }}
        transition={{ delay: reduceMotion ? 0 : 1.15, duration }}
      >
        <span className="absolute inset-0 bg-[linear-gradient(145deg,transparent_49.5%,rgba(143,108,26,.25)_50%,transparent_50.5%)]" />
        <span className="absolute inset-0 bg-[linear-gradient(35deg,transparent_49.5%,rgba(143,108,26,.25)_50%,transparent_50.5%)]" />
      </motion.div>
      <motion.div
        className="absolute inset-x-0 top-0 z-30 h-[58%] origin-top bg-[#f9efd5]"
        style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)", transformStyle: "preserve-3d" }}
        animate={{ rotateX: opened && !reduceMotion ? 180 : 0, opacity: opened ? 0 : 1 }}
        transition={{ rotateX: { delay: 0.25, type: "spring", stiffness: 65, damping: 15 }, opacity: { delay: reduceMotion ? 0 : 1.15, duration } }}
      />
      <motion.div
        className="absolute left-1/2 top-[48%] z-40 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#ffeaa0]/80 bg-gradient-to-br from-[#f4d978] via-champagne to-[#8c6812] font-display text-lg text-[#201704] shadow-lg sm:h-16 sm:w-16"
        animate={{ scale: opened ? 0 : 1, rotate: opened ? 25 : 0, opacity: opened ? 0 : 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.35 }}
      >
        {invitationConfig.company.logoText}
      </motion.div>
    </motion.div>
  );
}
