"use client";

import { motion, useReducedMotion } from "motion/react";

const particles = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 23) % 100}%`,
  size: 2 + (index % 4),
  delay: (index % 8) * 0.35,
}));

export function AmbientParticles() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-champagne/70 shadow-[0_0_14px_rgba(212,175,55,.7)]"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={reduceMotion ? { opacity: 0.28 } : { y: [-8, -34, -8], opacity: [0.12, 0.8, 0.12], scale: [0.8, 1.25, 0.8] }}
          transition={{ duration: 4.5 + (particle.id % 5), repeat: Infinity, delay: particle.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
