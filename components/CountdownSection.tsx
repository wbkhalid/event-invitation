"use client";

import { motion } from "motion/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { CountdownTimer } from "@/components/CountdownTimer";
import { HugeIcon } from "@/components/HugeIcon";
import { invitationConfig } from "@/lib/invitation-config";

export function CountdownSection() {
  const eventDate = new Date(invitationConfig.event.dateISO);
  const dateParts = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: invitationConfig.event.timezone,
  }).formatToParts(eventDate);
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    dateParts.find((value) => value.type === type)?.value;

  return (
    <section
      id="countdown"
      aria-labelledby="countdown-heading"
      className="countdown-scene"
    >
      <motion.div
        className="countdown-composition"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="countdown-kicker">
          <span aria-hidden="true" />{" "}
          <p>
            {invitationConfig.company.name} / {invitationConfig.event.title}
          </p>{" "}
          <span aria-hidden="true" />
        </div>
        <p className="countdown-prelude font-display">
          Every second brings us closer.
        </p>
        <h2 id="countdown-heading" className="countdown-heading font-display">
          The moment is
          <br />
          <em>almost here.</em>
        </h2>
        <div className="countdown-clock">
          <CountdownTimer targetISO={invitationConfig.event.dateISO} />
        </div>
        <div className="countdown-date-strip">
          <div className="countdown-date">
            <span className="countdown-day font-display">{part("day")}</span>
            <div>
              <p className="countdown-month">{part("month")}</p>
              <p className="countdown-year">{part("year")}</p>
            </div>
          </div>
          <span className="countdown-date-divider" aria-hidden="true" />
          <div className="countdown-time">
            <p>{invitationConfig.event.ceremonyLabel}</p>
            <p className="font-display">{invitationConfig.event.time}</p>
          </div>
        </div>
        {/* <a href="#event-details" className="countdown-next" title="View event details" aria-label="View event details">
          <HugeIcon icon={ArrowDown01Icon} size={24} />
        </a> */}
      </motion.div>
    </section>
  );
}
