"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MotionReveal({
  children,
  className,
  delay = 0,
}: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const duration = prefersReducedMotion ? 0.01 : 0.36;

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 14,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: false, amount: 0.12, margin: "0px 0px -5% 0px" }}
      transition={{
        duration,
        ease: [0.16, 1, 0.3, 1],
        delay: prefersReducedMotion ? 0 : delay,
      }}
      style={{
        willChange: prefersReducedMotion ? "auto" : "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionArticle({
  children,
  className,
  delay = 0,
}: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const duration = prefersReducedMotion ? 0.01 : 0.32;

  return (
    <motion.article
      className={className}
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={prefersReducedMotion ? undefined : { y: -5, scale: 1.01 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
      viewport={{ once: false, amount: 0.12, margin: "0px 0px -5% 0px" }}
      transition={{
        duration,
        ease: [0.16, 1, 0.3, 1],
        delay: prefersReducedMotion ? 0 : delay,
      }}
      style={{
        willChange: prefersReducedMotion ? "auto" : "transform, opacity",
      }}
    >
      {children}
    </motion.article>
  );
}
