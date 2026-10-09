"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type CountdownTimerProps = { targetISO: string };
type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function getTimeLeft(targetISO: string): TimeLeft | null {
  if (!targetISO) return null;
  const target = new Date(targetISO).getTime();
  if (Number.isNaN(target)) return null;
  const difference = Math.max(target - Date.now(), 0);
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function CountdownTimer({ targetISO }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetISO));
    if (!targetISO) return;
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft(targetISO)), 1000);
    return () => window.clearInterval(timer);
  }, [targetISO]);

  const units = [
    ["Days", timeLeft?.days],
    ["Hours", timeLeft?.hours],
    ["Minutes", timeLeft?.minutes],
    ["Seconds", timeLeft?.seconds],
  ] as const;
  const started = timeLeft !== null && Object.values(timeLeft).every(value => value === 0);

  return (
    <div>
      <div className="countdown-units" role="timer" aria-label="Time until the dinner" aria-live="off">
        {units.map(([label, value]) => {
          const display = value === undefined ? "--" : String(value).padStart(2, "0");
          return (
            <div key={label} className="countdown-unit">
              <div className="countdown-number font-display">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.span key={display} initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }} transition={{ duration: reduceMotion ? 0 : 0.3 }}>{display}</motion.span>
                </AnimatePresence>
              </div>
              <p className="countdown-label">{label}</p>
            </div>
          );
        })}
      </div>
      <p className="countdown-status">{started ? "The dinner has begun." : "Counting down to an evening together"}</p>
    </div>
  );
}
