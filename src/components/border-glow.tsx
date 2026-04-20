"use client";

import { useCallback, useEffect, useRef } from "react";
import type { CSSProperties, ReactNode, PointerEvent as ReactPointerEvent } from "react";

import styles from "./border-glow.module.css";

type BorderGlowProps = {
  children: ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  fillOpacity?: number;
};

function parseHsl(hslString: string) {
  const match = hslString.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);

  if (!match) {
    return { h: 158, s: 45, l: 43 };
  }

  return {
    h: Number.parseFloat(match[1]),
    s: Number.parseFloat(match[2]),
    l: Number.parseFloat(match[3]),
  };
}

function buildGlowVars(glowColor: string, intensity: number) {
  const { h, s, l } = parseHsl(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  const keys = ["", "-60", "-50", "-40", "-30", "-20", "-10"];

  return opacities.reduce<Record<string, string>>((vars, opacity, index) => {
    vars[`--glow-color${keys[index]}`] = `hsl(${base} / ${Math.min(
      opacity * intensity,
      100,
    )}%)`;
    return vars;
  }, {});
}

const GRADIENT_POSITIONS = [
  "80% 55%",
  "69% 34%",
  "8% 6%",
  "41% 38%",
  "86% 85%",
  "82% 18%",
  "51% 4%",
] as const;

const GRADIENT_KEYS = [
  "--gradient-one",
  "--gradient-two",
  "--gradient-three",
  "--gradient-four",
  "--gradient-five",
  "--gradient-six",
  "--gradient-seven",
] as const;

const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1] as const;

function buildGradientVars(colors: string[]) {
  const safeColors = colors.length > 0 ? colors : ["#2f855a", "#d4a373", "#94a3b8"];

  const vars = GRADIENT_KEYS.reduce<Record<string, string>>((accumulator, key, index) => {
    const color = safeColors[Math.min(COLOR_MAP[index], safeColors.length - 1)];
    accumulator[key] = `radial-gradient(at ${GRADIENT_POSITIONS[index]}, ${color} 0px, transparent 50%)`;
    return accumulator;
  }, {});

  vars["--gradient-base"] = `linear-gradient(${safeColors[0]} 0 100%)`;

  return vars;
}

function easeOutCubic(value: number) {
  return 1 - (1 - value) ** 3;
}

function easeInCubic(value: number) {
  return value ** 3;
}

function animateValue({
  start = 0,
  end = 100,
  duration = 1000,
  delay = 0,
  ease = easeOutCubic,
  onUpdate,
  onEnd,
}: {
  start?: number;
  end?: number;
  duration?: number;
  delay?: number;
  ease?: (value: number) => number;
  onUpdate: (value: number) => void;
  onEnd?: () => void;
}) {
  const startTime = performance.now() + delay;

  function tick() {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    onUpdate(start + (end - start) * ease(progress));

    if (progress < 1) {
      requestAnimationFrame(tick);
      return;
    }

    onEnd?.();
  }

  const timeoutId = window.setTimeout(() => requestAnimationFrame(tick), delay);

  return () => window.clearTimeout(timeoutId);
}

export function BorderGlow({
  children,
  className = "",
  edgeSensitivity = 12,
  glowColor = "158 45 43",
  backgroundColor = "#ffffff",
  borderRadius = 24,
  glowRadius = 36,
  glowIntensity = 1.25,
  coneSpread = 22,
  animated = true,
  colors = ["#2f855a", "#d4a373", "#94a3b8"],
  fillOpacity = 0.38,
}: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const getCenterOfElement = useCallback((element: HTMLDivElement) => {
    const { width, height } = element.getBoundingClientRect();
    return [width / 2, height / 2] as const;
  }, []);

  const getEdgeProximity = useCallback(
    (element: HTMLDivElement, x: number, y: number) => {
      const [centerX, centerY] = getCenterOfElement(element);
      const deltaX = x - centerX;
      const deltaY = y - centerY;

      let ratioX = Number.POSITIVE_INFINITY;
      let ratioY = Number.POSITIVE_INFINITY;

      if (deltaX !== 0) {
        ratioX = centerX / Math.abs(deltaX);
      }

      if (deltaY !== 0) {
        ratioY = centerY / Math.abs(deltaY);
      }

      return Math.min(Math.max(1 / Math.min(ratioX, ratioY), 0), 1);
    },
    [getCenterOfElement],
  );

  const getCursorAngle = useCallback(
    (element: HTMLDivElement, x: number, y: number) => {
      const [centerX, centerY] = getCenterOfElement(element);
      const deltaX = x - centerX;
      const deltaY = y - centerY;

      if (deltaX === 0 && deltaY === 0) {
        return 0;
      }

      const radians = Math.atan2(deltaY, deltaX);
      let degrees = radians * (180 / Math.PI) + 90;

      if (degrees < 0) {
        degrees += 360;
      }

      return degrees;
    },
    [getCenterOfElement],
  );

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const card = cardRef.current;

      if (!card) {
        return;
      }

      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const edge = getEdgeProximity(card, x, y);
      const angle = getCursorAngle(card, x, y);

      card.style.setProperty("--edge-proximity", `${(edge * 100).toFixed(3)}`);
      card.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
    },
    [getCursorAngle, getEdgeProximity],
  );

  const handlePointerEnter = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      handlePointerMove(event);
    },
    [handlePointerMove],
  );

  const handlePointerLeave = useCallback(() => {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    card.style.setProperty("--edge-proximity", "0");
  }, []);

  useEffect(() => {
    const card = cardRef.current;

    if (!animated || !card) {
      return;
    }

    const angleStart = 110;
    const angleEnd = 465;

    card.classList.add(styles.sweepActive);
    card.style.setProperty("--cursor-angle", `${angleStart}deg`);

    const cleanups = [
      animateValue({
        duration: 500,
        onUpdate: (value) => card.style.setProperty("--edge-proximity", value.toFixed(3)),
      }),
      animateValue({
        ease: easeInCubic,
        duration: 1500,
        end: 50,
        onUpdate: (value) => {
          const angle = ((angleEnd - angleStart) * value) / 100 + angleStart;
          card.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
        },
      }),
      animateValue({
        ease: easeOutCubic,
        delay: 1500,
        duration: 2250,
        start: 50,
        end: 100,
        onUpdate: (value) => {
          const angle = ((angleEnd - angleStart) * value) / 100 + angleStart;
          card.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
        },
      }),
      animateValue({
        ease: easeInCubic,
        delay: 2500,
        duration: 1500,
        start: 100,
        end: 0,
        onUpdate: (value) => card.style.setProperty("--edge-proximity", value.toFixed(3)),
        onEnd: () => card.classList.remove(styles.sweepActive),
      }),
    ];

    return () => {
      cleanups.forEach((cleanup) => cleanup?.());
      card.classList.remove(styles.sweepActive);
    };
  }, [animated]);

  const style = {
    "--card-bg": backgroundColor,
    "--edge-sensitivity": edgeSensitivity,
    "--border-radius": `${borderRadius}px`,
    "--glow-padding": `${glowRadius}px`,
    "--cone-spread": coneSpread,
    "--fill-opacity": fillOpacity,
    ...buildGlowVars(glowColor, glowIntensity),
    ...buildGradientVars(colors),
  } as CSSProperties;

  return (
    <div
      ref={cardRef}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      className={`${styles.card} ${className}`.trim()}
      style={style}
    >
      <span className={styles.edgeLight} />
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
