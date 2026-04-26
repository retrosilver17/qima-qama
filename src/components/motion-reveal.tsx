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
  const duration = prefersReducedMotion ? 0.01 : 0.58;

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 26,
        filter: prefersReducedMotion ? "none" : "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
      transition={{
        duration,
        ease: [0.16, 1, 0.3, 1],
        delay: prefersReducedMotion ? 0 : delay,
      }}
      style={{
        willChange: prefersReducedMotion ? "auto" : "transform, opacity, filter",
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
  const duration = prefersReducedMotion ? 0.01 : 0.5;

  return (
    <motion.article
      className={className}
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 22,
        filter: prefersReducedMotion ? "none" : "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      whileHover={prefersReducedMotion ? undefined : { y: -5, scale: 1.01 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
      viewport={{ once: true, amount: 0.14, margin: "0px 0px -6% 0px" }}
      transition={{
        duration,
        ease: [0.16, 1, 0.3, 1],
        delay: prefersReducedMotion ? 0 : delay,
      }}
      style={{
        willChange: prefersReducedMotion ? "auto" : "transform, opacity, filter",
      }}
    >
      {children}
    </motion.article>
  );
}
