"use client";

import { useEffect, useState } from "react";

type Greeting = {
  phrase: string;
  className: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function mapRange(value: number, start: number, end: number) {
  if (start === end) {
    return value >= end ? 1 : 0;
  }

  return clamp((value - start) / (end - start), 0, 1);
}

export function HomeGreetingsBackdrop({
  greetings,
}: {
  greetings: Greeting[];
}) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let frame = 0;

    const updateOpacity = () => {
      const originsSection = document.getElementById("origins");
      const definitionsSection = document.getElementById("definitions");
      const viewportHeight = window.innerHeight;

      if (!originsSection || !definitionsSection) {
        setOpacity(1);
        return;
      }

      const originsTop = originsSection.getBoundingClientRect().top;
      const definitionsTop = definitionsSection.getBoundingClientRect().top;

      const fadeOutStart = viewportHeight * 1.04;
      const fadeOutEnd = viewportHeight * 0.28;
      const fadeInStart = viewportHeight * 0.98;
      const fadeInEnd = viewportHeight * 0.48;

      const fadeOutProgress = mapRange(originsTop, fadeOutStart, fadeOutEnd);
      const fadeInProgress = 1 - mapRange(definitionsTop, fadeInStart, fadeInEnd);

      const fadedOutOpacity = 1 - fadeOutProgress;
      const nextOpacity = definitionsTop <= fadeInStart
        ? Math.max(fadedOutOpacity, fadeInProgress)
        : fadedOutOpacity;

      setOpacity(clamp(nextOpacity, 0, 1));
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateOpacity);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden transition-opacity duration-300"
      style={{ opacity }}
    >
      <div className="relative mx-auto h-screen max-w-7xl">
        {greetings.map((greeting) => (
          <span
            key={greeting.phrase}
            className={`hero-greeting absolute font-serif font-semibold uppercase tracking-[0.18em] ${greeting.className}`}
          >
            {greeting.phrase}
          </span>
        ))}
      </div>
    </div>
  );
}
