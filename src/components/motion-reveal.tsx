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
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: prefersReducedMotion ? 0 : delay }}
      style={{
        willChange: "auto",
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
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      whileHover={prefersReducedMotion ? undefined : { y: -5, scale: 1.01 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.22,
        ease: [0.16, 1, 0.3, 1],
        delay: prefersReducedMotion ? 0 : delay,
      }}
      style={{
        willChange: prefersReducedMotion ? "auto" : "transform",
      }}
    >
      {children}
    </motion.article>
  );
}
