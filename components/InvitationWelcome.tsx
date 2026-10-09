"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
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
              className="welcome-content relative z-10 w-full max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Image src={invitationConfig.company.logoSrc} alt={`${invitationConfig.company.name} logo`} width={311} height={311} priority className="welcome-logo mx-auto object-contain" />
              <p className="welcome-eyebrow uppercase text-champagne/85">
                You&apos;re Cordially Invited
              </p>
              <h1 className="welcome-company font-display text-ivory">
                <span>{invitationConfig.company.name}</span>
              </h1>
              <motion.button
                type="button"
                onClick={() => setOpened(true)}
                disabled={opened}
                aria-label={`Open your invitation to ${invitationConfig.company.name}'s ${invitationConfig.event.title}`}
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
