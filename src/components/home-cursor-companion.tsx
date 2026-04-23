"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CHARACTER_ASSET_PATH = "/images/fijian-character.png";

// Easy-to-tweak motion settings.
const CHARACTER_SIZE = 168;
const BASE_MOVEMENT_SPEED = 0.038;
const MAX_MOVEMENT_SPEED = 28;
const FOLLOW_INERTIA = 0.18;
const BOUNCE_INTENSITY = 10;
const BOTTOM_OFFSET = 22;

const VIEWPORT_PADDING = 18;
const LOWER_VIEWPORT_START = 0.58;
const IDLE_BOB_INTENSITY = 5;
const DUST_OPACITY_MULTIPLIER = 0.16;

type Mode = "desktop" | "mobile" | null;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function HomeCursorCompanion() {
  const characterRef = useRef<HTMLDivElement | null>(null);
  const spriteRef = useRef<HTMLDivElement | null>(null);
  const shadowRef = useRef<HTMLDivElement | null>(null);
  const dustRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [mode, setMode] = useState<Mode>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 1024px)",
    );
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMode = () => {
      setMode(
        mediaQuery.matches && !reducedMotionQuery.matches ? "desktop" : "mobile",
      );
    };

    updateMode();
    mediaQuery.addEventListener("change", updateMode);
    reducedMotionQuery.addEventListener("change", updateMode);

    return () => {
      mediaQuery.removeEventListener("change", updateMode);
      reducedMotionQuery.removeEventListener("change", updateMode);
    };
  }, []);

  useEffect(() => {
    if (mode !== "desktop") {
      return;
    }

    const definitionsSection = document.getElementById("definitions");

    if (!definitionsSection) {
      return;
    }

    const updateVisibility = () => {
      const rect = definitionsSection.getBoundingClientRect();
      const revealThreshold = window.innerHeight * 0.72;
      setIsVisible(rect.top <= revealThreshold);
    };

    const frame = window.requestAnimationFrame(updateVisibility);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [mode]);

  useEffect(() => {
    if (mode !== "desktop" || !isVisible) {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return;
    }

    const character = characterRef.current;
    const sprite = spriteRef.current;
    const shadow = shadowRef.current;
    const dust = dustRef.current;

    if (!character || !sprite || !shadow || !dust) {
      return;
    }

    const state = {
      x: window.innerWidth * 0.18,
      y: window.innerHeight * 0.72,
      vx: 0,
      vy: 0,
      facing: 1,
      runCycle: 0,
      idleCycle: 0,
      lastTime: 0,
      cursor: {
        x: window.innerWidth * 0.6,
        y: window.innerHeight * 0.72,
      },
    };

    const setCursorTarget = (clientX: number, clientY: number) => {
      const minX = VIEWPORT_PADDING;
      const maxX = window.innerWidth - CHARACTER_SIZE - VIEWPORT_PADDING;
      const minY = window.innerHeight * LOWER_VIEWPORT_START;
      const maxY =
        window.innerHeight - CHARACTER_SIZE - BOTTOM_OFFSET - VIEWPORT_PADDING;

      state.cursor.x = clamp(clientX - CHARACTER_SIZE * 0.35, minX, maxX);
      state.cursor.y = clamp(clientY - CHARACTER_SIZE * 0.5, minY, maxY);
    };

    const handlePointerMove = (event: PointerEvent) => {
      setCursorTarget(event.clientX, event.clientY);
    };

    const handleResize = () => {
      setCursorTarget(state.cursor.x + CHARACTER_SIZE * 0.35, state.cursor.y);
      state.x = clamp(
        state.x,
        VIEWPORT_PADDING,
        window.innerWidth - CHARACTER_SIZE - VIEWPORT_PADDING,
      );
      state.y = clamp(
        state.y,
        window.innerHeight * LOWER_VIEWPORT_START,
        window.innerHeight - CHARACTER_SIZE - BOTTOM_OFFSET - VIEWPORT_PADDING,
      );
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("resize", handleResize);

    const animate = (time: number) => {
      if (state.lastTime === 0) {
        state.lastTime = time;
      }

      const delta = Math.min((time - state.lastTime) / 16.6667, 2.2);
      state.lastTime = time;

      const dx = state.cursor.x - state.x;
      const dy = state.cursor.y - state.y;
      const distance = Math.hypot(dx, dy);
      const closeness = clamp(distance / 240, 0, 1);
      const speedBoost = Math.min(distance * BASE_MOVEMENT_SPEED, MAX_MOVEMENT_SPEED);
      const attraction = FOLLOW_INERTIA * (0.68 + closeness * 0.7);

      state.vx += dx * attraction * 0.012 * delta;
      state.vy += dy * attraction * 0.012 * delta;

      const maxVelocity = 2.4 + speedBoost;
      const velocity = Math.hypot(state.vx, state.vy);

      if (velocity > maxVelocity) {
        const ratio = maxVelocity / velocity;
        state.vx *= ratio;
        state.vy *= ratio;
      }

      state.vx *= distance < 54 ? 0.76 : 0.9;
      state.vy *= distance < 54 ? 0.76 : 0.9;

      state.x += state.vx * delta;
      state.y += state.vy * delta;

      state.x = clamp(
        state.x,
        VIEWPORT_PADDING,
        window.innerWidth - CHARACTER_SIZE - VIEWPORT_PADDING,
      );
      state.y = clamp(
        state.y,
        window.innerHeight * LOWER_VIEWPORT_START,
        window.innerHeight - CHARACTER_SIZE - BOTTOM_OFFSET - VIEWPORT_PADDING,
      );

      const moving = Math.abs(state.vx) > 0.1 || Math.abs(state.vy) > 0.1;

      if (moving) {
        state.facing = state.vx < 0 ? -1 : 1;
        state.runCycle += (0.18 + closeness * 0.26) * delta * (1 + velocity * 0.08);
        state.idleCycle = 0;
      } else {
        state.idleCycle += 0.07 * delta;
      }

      const bounce = moving
        ? Math.sin(state.runCycle) * (BOUNCE_INTENSITY * clamp(velocity / 10, 0.28, 1))
        : Math.sin(state.idleCycle) * IDLE_BOB_INTENSITY;

      const shadowScale = moving
        ? 1 - Math.abs(bounce) / (BOUNCE_INTENSITY * 4.2)
        : 0.96 + Math.sin(state.idleCycle) * 0.015;

      const dustOpacity = clamp((velocity - 1.4) * DUST_OPACITY_MULTIPLIER, 0, 0.2);

      character.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;
      sprite.style.transform = `translate3d(0, ${-bounce}px, 0) scaleX(${state.facing})`;
      shadow.style.transform = `translate3d(0, 0, 0) scale(${shadowScale})`;
      shadow.style.opacity = moving ? "0.22" : "0.16";
      dust.style.opacity = `${dustOpacity}`;
      dust.style.transform = `translate3d(${state.facing === 1 ? -8 : 8}px, ${
        10 + Math.abs(bounce) * 0.18
      }px, 0) scale(${0.92 + clamp(velocity / 16, 0, 0.22)})`;

      rafRef.current = window.requestAnimationFrame(animate);
    };

    handleResize();
    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [isVisible, mode]);

  if (mode === null) {
    return null;
  }

  if (mode === "mobile") {
    return null;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      ref={characterRef}
      className="pointer-events-none fixed left-0 top-0 z-20 hidden will-change-transform lg:block"
      style={{
        width: CHARACTER_SIZE,
        height: CHARACTER_SIZE,
      }}
    >
      <div
        ref={dustRef}
        className="absolute bottom-5 left-3 h-10 w-14 rounded-full bg-[radial-gradient(circle,rgba(226,232,240,0.9)_0%,rgba(226,232,240,0.55)_42%,transparent_76%)] blur-[1.5px]"
      />

      <div
        ref={shadowRef}
        className="absolute bottom-2 left-1/2 h-5 w-[58%] -translate-x-1/2 rounded-full bg-slate-950/20 blur-md"
      />

      <div
        ref={spriteRef}
        className="absolute inset-0 origin-bottom-center will-change-transform"
      >
        <Image
          src={CHARACTER_ASSET_PATH}
          alt=""
          fill
          sizes={`${CHARACTER_SIZE}px`}
          className="object-contain drop-shadow-[0_18px_26px_rgba(15,23,42,0.14)]"
        />
      </div>
    </div>
  );
}
