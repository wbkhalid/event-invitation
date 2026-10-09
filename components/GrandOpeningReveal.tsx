"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeIcon } from "@/components/HugeIcon";
import Image from "next/image";
import { invitationConfig } from "@/lib/invitation-config";

const lines = ["YOU'RE CORDIALLY INVITED", invitationConfig.company.name];

export function GrandOpeningReveal() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="grand-opening" className="invitation-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(218,55,59,.16),transparent_26rem)]" />
      <motion.div className="brand-shimmer absolute top-8 h-px w-1/3" animate={{ x: ["-80vw", "130vw"] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
      <div className="hero-content relative mx-auto text-center">
        <motion.div className="hero-monogram mx-auto grid place-items-center" initial={{ opacity: 0, scale: 0.84 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <Image src={invitationConfig.company.logoSrc} alt={`${invitationConfig.company.name} logo`} width={311} height={311} className="h-full w-full object-contain" />
        </motion.div>
        <div className="hero-intro">
          {lines.map((line, index) => (
            <motion.p key={line} className={index === 1 ? "hero-company font-display text-ivory" : "hero-eyebrow uppercase text-brand/80"} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.16, duration: 0.7 }}>
              {line}
            </motion.p>
          ))}
        </div>
        <motion.div className="mx-auto flex w-full max-w-md items-center gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-brand" />
          <span className="h-2 w-2 rotate-45 bg-brand" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-brand" />
        </motion.div>
        <motion.h1 className="hero-title font-display uppercase text-brand" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.42, duration: 0.9 }}>
          {invitationConfig.event.titleLines.map((line, index) => <span className="block" key={index}>{line}</span>)}
        </motion.h1>
        <motion.p className="hero-eyebrow uppercase text-ivory/78" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.58 }}>
          {invitationConfig.event.occasions}
        </motion.p>
        <motion.blockquote className="hero-quote mx-auto max-w-2xl font-display italic text-ivory" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
          &quot;A New Beginning. A Greater Vision. An Exciting Future.&quot;
        </motion.blockquote>
        <motion.p className="hero-message mx-auto max-w-2xl text-ivory/72" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.82 }}>
          {invitationConfig.event.welcomeMessage}
        </motion.p>
      </div>
      <motion.a href="#countdown" className="hero-scroll-cue relative" aria-label="Scroll to explore the invitation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }}>
        <span>Scroll to explore</span>
        <motion.span aria-hidden="true" animate={reduceMotion ? undefined : { y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <HugeIcon icon={ArrowDown01Icon} size={24} />
        </motion.span>
      </motion.a>
    </section>
  );
}
