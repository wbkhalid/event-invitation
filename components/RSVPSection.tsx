"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { Call02Icon } from "@hugeicons/core-free-icons";
import { HugeIcon } from "@/components/HugeIcon";
import { invitationConfig } from "@/lib/invitation-config";

export function RSVPSection() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("RSVP details are ready to connect to WhatsApp or a backend confirmation flow.");
  }

  const whatsappUrl = invitationConfig.event.contactNumber
    ? `https://wa.me/${invitationConfig.event.contactNumber.replace(/\D/g, "")}`
    : "";

  return (
    <section className="px-5 py-20 sm:py-28">
      <motion.div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div>
          <p className="text-xs uppercase tracking-[0.38em] text-brand/80">RSVP</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ivory sm:text-6xl">Reserve Your Moment</h2>
          <p className="mt-5 max-w-md leading-8 text-ivory/70">
            Kindly let the team know whether you will be joining the ribbon cutting ceremony.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="luxury-panel rounded-sm p-5 sm:p-7">
          <label className="block text-xs uppercase tracking-[0.24em] text-brand/80" htmlFor="guestName">Guest name</label>
          <input id="guestName" name="guestName" required className="mt-2 w-full rounded-sm border border-brand/25 bg-ivory/5 px-4 py-3 text-ivory outline-none transition placeholder:text-ivory/35 focus:border-brand" placeholder="Your name" />

          <label className="mt-5 block text-xs uppercase tracking-[0.24em] text-brand/80" htmlFor="guestCount">Number of guests</label>
          <input id="guestCount" name="guestCount" min="1" type="number" defaultValue="1" required className="mt-2 w-full rounded-sm border border-brand/25 bg-ivory/5 px-4 py-3 text-ivory outline-none transition focus:border-brand" />

          <label className="mt-5 block text-xs uppercase tracking-[0.24em] text-brand/80" htmlFor="attendance">Attendance confirmation</label>
          <select id="attendance" name="attendance" required className="mt-2 w-full rounded-sm border border-brand/25 bg-[#111116] px-4 py-3 text-ivory outline-none transition focus:border-brand">
            <option value="">Select attendance</option>
            <option value="attending">Joyfully attending</option>
            <option value="not-attending">Unable to attend</option>
          </select>

          <motion.button type="submit" className="brand-button mt-6 w-full rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em]" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            Confirm Attendance
          </motion.button>
          {status ? <p className="mt-4 text-sm leading-6 text-ivory/68" role="status">{status}</p> : null}
          {whatsappUrl ? (
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="ghost-button mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-3 text-sm uppercase tracking-[0.16em]">
              <HugeIcon icon={Call02Icon} size={18} /> WhatsApp Inquiry
            </a>
          ) : null}
        </form>
      </motion.div>
    </section>
  );
}
