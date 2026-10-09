"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { invitationConfig } from "@/lib/invitation-config";

export function RibbonCutting() {
  const [cut, setCut] = useState(false);

  return (
    <section className="relative overflow-hidden px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p className="text-xs uppercase tracking-[0.38em] text-champagne/80" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Ceremony Moment
        </motion.p>
        <motion.h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight text-ivory sm:text-6xl" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Join Us for the Ribbon Cutting Ceremony
        </motion.h2>

        <div className="relative mx-auto mt-14 h-36 max-w-4xl overflow-hidden rounded-sm border-y border-champagne/25">
          <motion.div className="absolute left-1/2 top-1/2 z-20 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#ffe8a3] bg-gradient-to-br from-[#f9e9a6] via-champagne to-[#9b7519] font-display text-xl text-[#1b1302] shadow-[0_0_34px_rgba(212,175,55,.45)]" animate={cut ? { scale: [1, 1.25, 0], rotate: [0, 18, 38], opacity: [1, 1, 0] } : { scale: 1 }} transition={{ duration: 0.7 }}>
            AS
          </motion.div>
          <motion.div className="absolute left-0 top-1/2 h-12 w-1/2 -translate-y-1/2 bg-gradient-to-r from-[#7b1113] via-[#d4af37] to-[#fff0a8] shadow-[0_0_24px_rgba(212,175,55,.24)]" animate={cut ? { x: "-104%", rotate: -4 } : { x: 0 }} transition={{ type: "spring", stiffness: 74, damping: 16 }} />
          <motion.div className="absolute right-0 top-1/2 h-12 w-1/2 -translate-y-1/2 bg-gradient-to-r from-[#fff0a8] via-[#d4af37] to-[#7b1113] shadow-[0_0_24px_rgba(212,175,55,.24)]" animate={cut ? { x: "104%", rotate: 4 } : { x: 0 }} transition={{ type: "spring", stiffness: 74, damping: 16 }} />
          {Array.from({ length: 16 }).map((_, index) => (
            <motion.span key={index} className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-champagne" initial={false} animate={cut ? { x: Math.cos(index) * (44 + index * 7), y: Math.sin(index) * (28 + index * 5), opacity: [0, 1, 0], scale: [0.2, 1, 0.4] } : { opacity: 0 }} transition={{ duration: 1, delay: 0.08 }} />
          ))}
          <motion.div className="absolute inset-0 grid place-items-center px-6 text-center" initial={false} animate={cut ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }} transition={{ delay: 0.45 }}>
            <p className="font-display text-3xl text-champagne">{invitationConfig.event.time}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-ivory/72">{invitationConfig.event.venue}</p>
          </motion.div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <motion.button type="button" onClick={() => setCut(true)} className="gold-button rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-midnight" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            Cut the Ribbon
          </motion.button>
          <a className="ghost-button inline-flex items-center justify-center rounded-full px-7 py-3 text-sm uppercase tracking-[0.18em]" href="#event-details">
            View Details
          </a>
        </div>
      </div>
    </section>
  );
}
