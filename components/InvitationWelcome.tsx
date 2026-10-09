"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
} from "motion/react";
import { AmbientParticles } from "@/components/AmbientParticles";
import { AnimatedEnvelope } from "@/components/AnimatedEnvelope";
import { invitationConfig } from "@/lib/invitation-config";

type InvitationWelcomeProps = { children: ReactNode };

export function InvitationWelcome({ children }: InvitationWelcomeProps) {
  const [opened, setOpened] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!opened) return;
    const timer = window.setTimeout(
      () => setRevealed(true),
      reduceMotion ? 150 : 1900,
    );
    return () => window.clearTimeout(timer);
  }, [opened, reduceMotion]);

  useEffect(() => {
    if (revealed)
      document
        .getElementById("invitation-content")
        ?.focus({ preventScroll: true });
  }, [revealed]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.section
            key="welcome"
            className="relative grid h-[100svh] place-items-center overflow-hidden px-4 py-6 text-center"
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.4 }}
          >
            <AmbientParticles />
            <motion.div
              className="relative z-10 w-full max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-5 text-[0.65rem] uppercase tracking-[0.2em] text-champagne/85 sm:text-xs">
                You&apos;re Cordially Invited
              </p>
              <h1 className="mb-8 font-display text-3xl text-ivory sm:text-4xl">
                {invitationConfig.company.name}
              </h1>
              <motion.button
                type="button"
                onClick={() => setOpened(true)}
                disabled={opened}
                aria-label={`Open your invitation to ${invitationConfig.company.name}'s grand opening`}
                aria-expanded={opened}
                aria-controls={revealed ? "invitation-content" : undefined}
                className="mx-auto block cursor-pointer border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-champagne disabled:cursor-default"
                whileHover={opened ? undefined : { scale: 1.025 }}
                whileTap={opened ? undefined : { scale: 0.98 }}
              >
                <AnimatedEnvelope opened={opened} />
              </motion.button>
            </motion.div>
          </motion.section>
        ) : (
          <motion.div
            key="invitation"
            id="invitation-content"
            tabIndex={-1}
            className="outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}
