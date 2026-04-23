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

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.32,
        ease: "easeOut",
        delay: prefersReducedMotion ? 0 : delay,
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

  return (
    <motion.article
      className={className}
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 14,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.28,
        ease: "easeOut",
        delay: prefersReducedMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.article>
  );
}
