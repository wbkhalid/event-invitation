"use client";

import { motion } from "motion/react";
import { Calendar03Icon, CalendarAdd01Icon, Clock01Icon, Location01Icon, Call02Icon } from "@hugeicons/core-free-icons";
import { HugeIcon } from "@/components/HugeIcon";
import { invitationConfig } from "@/lib/invitation-config";

function googleCalendarUrl() {
  const { dateISO, title, venue, address, locationUrl } = invitationConfig.event;
  if (!dateISO) return "";
  const start = new Date(dateISO);
  if (Number.isNaN(start.getTime())) return "";
  const end = new Date(start.getTime() + 90 * 60 * 1000);
  const format = (date: Date) => date.toISOString().replace(/[-:]|\.\d{3}/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${invitationConfig.company.name} ${title}`,
    dates: `${format(start)}/${format(end)}`,
    location: `${venue}, ${address}`,
    details: `${invitationConfig.event.description} Directions: ${locationUrl}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function EventDetails() {
  const calendarUrl = googleCalendarUrl();
  const contactNumber = invitationConfig.event.contactNumber;
  const internationalNumber = contactNumber.replace(/^0/, "92");
  const details = [
    { label: "Date", value: invitationConfig.event.dateLabel, icon: Calendar03Icon },
    { label: "Time", value: invitationConfig.event.time, icon: Clock01Icon },
    { label: "Venue", value: invitationConfig.event.venue, icon: Location01Icon },
    { label: "Address", value: invitationConfig.event.address, icon: Location01Icon },
  ];

  return (
    <section id="event-details" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div className="text-center" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-xs uppercase tracking-[0.38em] text-champagne/80">Event Details</p>
          <h2 className="mt-4 font-display text-4xl text-ivory sm:text-6xl">{invitationConfig.event.ceremonyLabel}</h2>
        </motion.div>
        <motion.div className="mx-auto my-10 flex max-w-xl items-center gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-champagne/70" />
          <span className="h-2 w-2 rotate-45 bg-champagne" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-champagne/70" />
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((item, index) => (
            <motion.div key={item.label} className="luxury-panel rounded-sm p-5" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-full border border-champagne/35 text-champagne">
                <HugeIcon icon={item.icon} size={22} />
              </div>
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-champagne/80">{item.label}</p>
              <p className="mt-2 text-base leading-7 text-ivory/86">{item.value}</p>
            </motion.div>
          ))}
        </div>
<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {calendarUrl ? (
            <a href={calendarUrl} target="_blank" rel="noreferrer" className="gold-button inline-flex items-center justify-center gap-3 rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em]">
              <HugeIcon icon={CalendarAdd01Icon} size={18} /> Add to Calendar
            </a>
          ) : (
            <button type="button" disabled className="gold-button inline-flex cursor-not-allowed items-center justify-center gap-3 rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.16em] opacity-60">
              <HugeIcon icon={CalendarAdd01Icon} size={18} /> Add to Calendar
            </button>
          )}
          <a href={invitationConfig.event.locationUrl} target="_blank" rel="noreferrer" className="ghost-button inline-flex items-center justify-center gap-3 rounded-full px-7 py-3 text-sm uppercase tracking-[0.16em]">
            <HugeIcon icon={Location01Icon} size={18} /> Get Directions
          </a>
        </div>
        {contactNumber ? (
          <div className="mt-8 flex flex-col items-center gap-4 text-center">
            <a href={`tel:+${internationalNumber}`} className="inline-flex min-h-12 items-center gap-3 text-ivory/80 underline decoration-champagne/50 underline-offset-4">
              <HugeIcon icon={Call02Icon} size={20} /> {contactNumber}
            </a>
            <a href={`https://wa.me/${internationalNumber}`} target="_blank" rel="noreferrer" className="ghost-button inline-flex items-center justify-center gap-3 rounded-full px-7 py-3 text-sm">
              <HugeIcon icon={Call02Icon} size={18} /> WhatsApp Inquiry
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
