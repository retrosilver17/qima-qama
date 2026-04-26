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

    if (window.location.hash.length === 0) {
      window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0 }));
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopPointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 768px)",
    );

    if (reducedMotionQuery.matches || !desktopPointerQuery.matches) {
      ScrollTrigger.refresh();
      return () => {
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

    rafId = window.requestAnimationFrame(raf);
    ScrollTrigger.refresh();

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
      window.cancelAnimationFrame(rafId);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  return null;
}
