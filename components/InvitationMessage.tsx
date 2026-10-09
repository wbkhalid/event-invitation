"use client";

import { motion } from "motion/react";
import { invitationConfig } from "@/lib/invitation-config";

export function InvitationMessage() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <motion.div className="luxury-panel mx-auto max-w-4xl rounded-sm px-6 py-12 text-center sm:px-12 sm:py-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}>
        <p className="text-xs uppercase tracking-[0.38em] text-brand/80">A Personal Invitation</p>
        <p className="mt-7 font-display text-3xl leading-snug text-ivory sm:text-5xl">
          The best evenings are the ones we share.
        </p>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-ivory/74 sm:text-lg">
          We would love to have you join us for a get-together dinner at our office. Let us share good food, warm conversation, and a memorable evening together.
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ivory/74 sm:text-lg">
          Your presence will make this evening even more special.
        </p>
        <p className="mt-8 font-display text-3xl text-brand sm:text-4xl">We Look Forward to Celebrating With You.</p>
        <p className="mt-4 text-sm uppercase tracking-[0.28em] text-ivory/62">- The {invitationConfig.company.name} Team</p>
      </motion.div>
    </section>
  );
}
