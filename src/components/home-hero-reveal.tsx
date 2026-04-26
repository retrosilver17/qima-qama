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
          duration: 0.72,
          ease: "power3.out",
        },
      });

      tl.from("[data-hero-badge]", {
        y: 12,
      })
        .from(
          "[data-hero-brand]",
          {
            y: 18,
            scale: 0.985,
          },
          "-=0.48",
        )
        .from(
          "[data-hero-kicker]",
          {
            y: 10,
          },
          "-=0.44",
        )
        .from(
          "[data-hero-headline]",
          {
            y: 18,
          },
          "-=0.44",
        )
        .from(
          "[data-hero-copy]",
          {
            y: 14,
          },
          "-=0.42",
        )
        .from(
          "[data-hero-signals]",
          {
            y: 12,
          },
          "-=0.36",
        )
        .from(
          "[data-hero-actions]",
          {
            y: 12,
            stagger: 0.08,
          },
          "-=0.36",
        )
        .from(
          "[data-hero-soundtrack]",
          {
            y: 10,
          },
          "-=0.32",
        )
        .from(
          "[data-hero-visual]",
          {
            y: 18,
            scale: 0.99,
          },
          "-=0.7",
        )
        .from(
          "[data-hero-card]",
          {
            y: 12,
          },
          "-=0.38",
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
