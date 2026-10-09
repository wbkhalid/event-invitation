"use client";

import { motion } from "motion/react";
import { invitationConfig } from "@/lib/invitation-config";

const lines = ["WITH GREAT PLEASURE", invitationConfig.company.name, "CORDIALLY INVITES YOU TO THE"];

export function GrandOpeningReveal() {
  return (
    <section id="grand-opening" className="invitation-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,.16),transparent_26rem)]" />
      <motion.div className="gold-shimmer absolute top-8 h-px w-1/3" animate={{ x: ["-80vw", "130vw"] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
      <div className="hero-content relative mx-auto text-center">
        <motion.div className="hero-monogram mx-auto grid place-items-center rounded-full border border-champagne/60 bg-ivory/5 font-display text-champagne" initial={{ opacity: 0, scale: 0.84 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          {invitationConfig.company.logoText}
        </motion.div>
        <div className="hero-intro">
          {lines.map((line, index) => (
            <motion.p key={line} className={index === 1 ? "hero-company font-display text-ivory" : "hero-eyebrow uppercase text-champagne/80"} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.16, duration: 0.7 }}>
              {line}
            </motion.p>
          ))}
        </div>
        <motion.div className="mx-auto flex w-full max-w-md items-center gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-champagne" />
          <span className="h-2 w-2 rotate-45 bg-champagne" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-champagne" />
        </motion.div>
        <motion.h1 className="hero-title font-display uppercase text-champagne" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.42, duration: 0.9 }}>
          Grand<br />Opening
        </motion.h1>
        <motion.p className="hero-eyebrow uppercase text-ivory/78" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.58 }}>
          Of Our New Office
        </motion.p>
        <motion.blockquote className="hero-quote mx-auto max-w-2xl font-display italic text-ivory" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
          &quot;A New Beginning. A Greater Vision. An Exciting Future.&quot;
        </motion.blockquote>
        <motion.p className="hero-message mx-auto max-w-2xl text-ivory/72" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.82 }}>
          We are delighted to celebrate this important milestone and would be honored by your presence as we begin an exciting new chapter.
        </motion.p>
      </div>
    </section>
  );
}
