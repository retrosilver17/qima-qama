"use client";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

let isScrollTriggerRegistered = false;

function registerScrollTrigger() {
  if (isScrollTriggerRegistered) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  isScrollTriggerRegistered = true;
}

export function SmoothScrollProvider() {
  useEffect(() => {
    registerScrollTrigger();

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    const shouldStartAtTop = window.location.hash.length === 0;
    let resetScrollTimer = 0;

    const resetScrollPosition = () => {
      window.scrollTo(0, 0);
    };

    if (shouldStartAtTop) {
      resetScrollPosition();
      window.requestAnimationFrame(resetScrollPosition);
      resetScrollTimer = window.setTimeout(resetScrollPosition, 120);
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopPointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 768px)",
    );

    if (reducedMotionQuery.matches || !desktopPointerQuery.matches) {
      ScrollTrigger.refresh();
      return () => {
        window.clearTimeout(resetScrollTimer);
        window.history.scrollRestoration = previousScrollRestoration;
      };
    }

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.085,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.88,
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    const onRefresh = () => {
      lenis.resize();
    };

    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", onRefresh);

    if (shouldStartAtTop) {
      lenis.scrollTo(0, { immediate: true });
    }

    rafId = window.requestAnimationFrame(raf);
    ScrollTrigger.refresh();

    return () => {
      window.clearTimeout(resetScrollTimer);
      window.history.scrollRestoration = previousScrollRestoration;
      window.cancelAnimationFrame(rafId);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  return null;
}
