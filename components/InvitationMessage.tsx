"use client";

import { motion } from "motion/react";
import { invitationConfig } from "@/lib/invitation-config";

export function InvitationMessage() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <motion.div className="luxury-panel mx-auto max-w-4xl rounded-sm px-6 py-12 text-center sm:px-12 sm:py-16" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}>
        <p className="text-xs uppercase tracking-[0.38em] text-champagne/80">A Personal Invitation</p>
        <p className="mt-7 font-display text-3xl leading-snug text-ivory sm:text-5xl">
          Every new beginning is more meaningful when shared.
        </p>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-ivory/74 sm:text-lg">
          Join us in offering prayers for a blessed beginning and sharing a joyful gathering at our office.
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ivory/74 sm:text-lg">
          Your prayers, good wishes, and presence will make this occasion even more memorable.
        </p>
        <p className="mt-8 font-display text-3xl text-champagne sm:text-4xl">We Look Forward to Celebrating With You.</p>
        <p className="mt-4 text-sm uppercase tracking-[0.28em] text-ivory/62">- The {invitationConfig.company.name} Team</p>
      </motion.div>
    </section>
  );
}
