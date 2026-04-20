"use client";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isScrollTriggerRegistered = false;

function registerScrollTrigger() {
  if (isScrollTriggerRegistered) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  isScrollTriggerRegistered = true;
}

export function HomeHeroReveal() {
  useEffect(() => {
    registerScrollTrigger();

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const context = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1.1,
          ease: "power3.out",
        },
      });

      tl.from("[data-hero-badge]", {
        y: 24,
        opacity: 0,
      })
        .from(
          "[data-hero-brand]",
          {
            y: 40,
            opacity: 0,
            scale: 0.96,
          },
          "-=0.75",
        )
        .from(
          "[data-hero-kicker]",
          {
            y: 20,
            opacity: 0,
          },
          "-=0.7",
        )
        .from(
          "[data-hero-headline]",
          {
            y: 36,
            opacity: 0,
          },
          "-=0.7",
        )
        .from(
          "[data-hero-copy]",
          {
            y: 28,
            opacity: 0,
          },
          "-=0.7",
        )
        .from(
          "[data-hero-actions]",
          {
            y: 24,
            opacity: 0,
            stagger: 0.08,
          },
          "-=0.65",
        )
        .from(
          "[data-hero-soundtrack]",
          {
            y: 20,
            opacity: 0,
          },
          "-=0.6",
        )
        .from(
          "[data-hero-visual]",
          {
            y: 44,
            opacity: 0,
            scale: 0.98,
          },
          "-=1",
        )
        .from(
          "[data-hero-card]",
          {
            y: 24,
            opacity: 0,
          },
          "-=0.75",
        );

      gsap.to("[data-hero-visual-inner]", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-home-hero]",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      context.revert();
    };
  }, []);

  return null;
}
