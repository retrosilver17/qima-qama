"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const perspectiveCards = [
  {
    title: "Early Interpretation",
    body:
      "Some early writers believed there were similarities between the people of Fiji and those of Tanganyika in East Africa. They pointed to language, customs, and traditions and wondered whether these distant cultures were somehow connected.",
  },
  {
    title: "Modern Understanding",
    body:
      "Today, research in anthropology, genetics, and linguistics shows that Pacific Islanders originated mainly from Southeast Asian and Melanesian populations. There is no strong evidence of a direct migration link between Fiji and East Africa.",
  },
] as const;

let isScrollTriggerRegistered = false;

function registerScrollTrigger() {
  if (isScrollTriggerRegistered) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  isScrollTriggerRegistered = true;
}

export function HomeOriginsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    registerScrollTrigger();

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce), (max-width: 767px), (pointer: coarse)",
    );

    if (mediaQuery.matches) {
      return;
    }

    const section = sectionRef.current;
    const progress = progressRef.current;

    if (!section || !progress) {
      return;
    }

    const context = gsap.context(() => {
      gsap.from("[data-origins-hero-title]", {
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from("[data-origins-hero-copy]", {
        y: 14,
        duration: 0.72,
        delay: 0.06,
        ease: "power3.out",
      });

      gsap.from("[data-origins-scroll-cue]", {
        y: 10,
        duration: 0.64,
        delay: 0.12,
        ease: "power2.out",
      });

      gsap.to("[data-origins-hero-backdrop]", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-origins-hero]",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(progress, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          end: "bottom 25%",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-origins-block]").forEach((block) => {
        gsap.from(block, {
          y: 24,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 82%",
          },
        });
      });

      gsap.from("[data-origins-first-people-text]", {
        x: -16,
        duration: 0.72,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-origins-first-people]",
          start: "top 78%",
        },
      });

      gsap.from("[data-origins-first-people-visual]", {
        x: 16,
        duration: 0.72,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-origins-first-people]",
          start: "top 78%",
        },
      });

      gsap.to("[data-origins-currents]", {
        backgroundPositionX: "180px",
        ease: "none",
        scrollTrigger: {
          trigger: "[data-origins-ocean]",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to("[data-origins-map]", {
        scale: 1.04,
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-origins-fiji]",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from("[data-origins-card]", {
        y: 14,
        duration: 0.64,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-origins-theory]",
          start: "top 80%",
        },
      });

      gsap.from("[data-origins-closing-line]", {
        y: 10,
        duration: 0.64,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-origins-closing]",
          start: "top 80%",
        },
      });
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="origins"
      className="origins-section relative z-10 scroll-mt-20 overflow-hidden text-slate-900"
    >
      <div className="origins-top-blend pointer-events-none absolute inset-x-0 top-0 z-10 h-56" />
      <div className="origins-bottom-blend pointer-events-none absolute inset-x-0 bottom-0 z-10 h-56" />
      <div className="origins-masi-thread pointer-events-none absolute inset-x-0 top-0 z-10 h-px" />
      <div className="pointer-events-none absolute inset-y-0 right-5 z-20 hidden lg:flex">
        <div className="sticky top-32 h-56 w-[3px] rounded-full bg-white/25">
          <div
            ref={progressRef}
            className="h-full origin-top rounded-full bg-gradient-to-b from-amber-200 via-emerald-300 to-white"
            style={{ transform: "scaleY(0)" }}
          />
        </div>
      </div>

      <section
        data-origins-hero
        className="relative flex min-h-[100svh] items-center justify-center px-5 pb-28 pt-24 sm:px-6 sm:pb-32 sm:pt-28 lg:pb-36 lg:pt-32"
      >
        <div
          data-origins-hero-backdrop
          className="absolute inset-0"
        >
          <div className="origins-sun-glow absolute left-1/2 top-[18%] h-56 w-56 -translate-x-1/2 rounded-full bg-amber-100/70 blur-3xl sm:h-72 sm:w-72" />
          <div className="origins-ocean-layer origins-ocean-layer-back absolute inset-x-0 bottom-0 h-[48%]" />
          <div className="origins-ocean-layer origins-ocean-layer-front absolute inset-x-0 bottom-0 h-[36%]" />
          <div className="origins-island-line absolute inset-x-0 bottom-[24%] h-24" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h2
            data-origins-hero-title
            className="text-[clamp(3.75rem,11vw,8rem)] font-black leading-none tracking-tight text-slate-950"
          >
            Origins
          </h2>
          <p
            data-origins-hero-copy
            className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700 sm:mt-8 sm:text-2xl sm:leading-10"
          >
            How the earliest settlers moved across the Pacific and how Fiji became
            part of that story.
          </p>
        </div>

        <div
          data-origins-scroll-cue
          className="absolute bottom-14 left-1/2 z-10 -translate-x-1/2 text-center sm:bottom-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-700/75">
            Scroll to continue
          </p>
          <div className="mx-auto mt-3 flex h-12 w-7 justify-center rounded-full border border-slate-700/20 bg-white/45 backdrop-blur">
            <span className="origins-scroll-dot mt-2 block h-2.5 w-2.5 rounded-full bg-emerald-700/75" />
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-8 pt-14 md:px-6 md:pb-12 md:pt-18">
        <section
          data-origins-block
          data-origins-first-people
          className="origins-panel relative overflow-hidden rounded-[1.4rem] border border-white/55 bg-white/72 px-5 py-8 shadow-xl backdrop-blur sm:rounded-[2rem] sm:px-10 sm:py-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div data-origins-first-people-text>
              <h3 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                The First People
              </h3>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                The earliest settlers of the Pacific were Melanesian peoples,
                often referred to in older texts as “Papuans.” They were among
                the oldest human populations in the region and gradually moved
                through island chains near New Guinea and into parts of the wider
                Pacific.
              </p>
              <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-5">
                <p className="text-sm leading-7 text-slate-700">
                  Older descriptions often used outdated language. Today, these
                  communities are more respectfully understood as part of the
                  Melanesian heritage of the Pacific.
                </p>
              </div>
              <p className="mt-6 text-sm italic leading-7 text-slate-500">
                Wibberley, Leonard. Fiji: Islands of the Dawn. New York: Van Rees
                Press, 1964.
              </p>
            </div>

            <div data-origins-first-people-visual className="relative">
              <div className="origins-panel rounded-[1.75rem] border border-slate-200/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,247,243,0.85))] p-6 shadow-lg">
                <div className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_18%_20%,rgba(245,158,11,0.16),transparent_18%),linear-gradient(180deg,#edf7f4_0%,#dceae6_100%)] p-5 sm:min-h-[320px] sm:p-6">
                  <div className="origins-route absolute left-[14%] top-[34%] h-[2px] w-[58%] -rotate-[10deg]" />
                  <div className="origins-route absolute left-[38%] top-[46%] h-[2px] w-[36%] rotate-[18deg]" />
                  <div className="origins-route absolute left-[58%] top-[56%] h-[2px] w-[22%] rotate-[8deg]" />

                  <div className="origins-island-marker absolute left-[10%] top-[28%] h-16 w-16">
                    <span className="origins-island-dot block h-6 w-6 rounded-full bg-emerald-700" />
                    <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                      Near New Guinea
                    </span>
                  </div>

                  <div className="origins-island-marker absolute left-[36%] top-[40%] h-16 w-16">
                    <span className="origins-island-dot block h-5 w-5 rounded-full bg-emerald-600/90" />
                    <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                      Island Chains
                    </span>
                  </div>

                  <div className="origins-island-marker absolute left-[64%] top-[54%] h-16 w-16">
                    <span className="origins-island-dot block h-6 w-6 rounded-full bg-amber-500/95" />
                    <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                      Wider Pacific
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 backdrop-blur">
                    Migration pathways
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          data-origins-block
          data-origins-ocean
          className="relative mt-6 overflow-hidden rounded-[1.4rem] border border-white/25 bg-slate-950/84 px-5 py-12 text-white shadow-xl sm:rounded-[2rem] sm:px-10 md:mt-10 md:py-20"
        >
          <div
            data-origins-currents
            className="origins-currents absolute inset-0 opacity-80"
          />
          <div className="origins-current-glow absolute left-[10%] top-[18%] h-44 w-44 rounded-full bg-emerald-300/15 blur-3xl" />
          <div className="origins-current-glow absolute bottom-[16%] right-[12%] h-52 w-52 rounded-full bg-amber-200/10 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Carried by the Ocean
            </h3>
            <p className="mt-6 text-lg leading-8 text-slate-100/88">
              These early journeys were shaped by nature itself. Ocean currents
              acted like invisible pathways, winds pushed rafts and canoes across
              vast distances, and islands became stepping stones across an endless
              sea. The ocean did not just separate people. It guided them.
            </p>
            <p className="mt-6 text-sm italic leading-7 text-slate-300/72">
              Wibberley, Leonard. Fiji: Islands of the Dawn. New York: Van Rees
              Press, 1964.
            </p>
          </div>
        </section>

        <section
          data-origins-block
          data-origins-fiji
          className="origins-panel relative mt-6 overflow-hidden rounded-[1.4rem] border border-white/55 bg-white/74 px-5 py-8 shadow-xl backdrop-blur sm:rounded-[2rem] sm:px-10 sm:py-10 md:mt-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div
                data-origins-map
                className="relative min-h-[280px] overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.92),rgba(255,255,255,0.42)_18%,transparent_22%),linear-gradient(180deg,#dbebe8_0%,#bed7d2_42%,#8fb6bc_100%)] shadow-lg sm:min-h-[340px]"
              >
                <div className="origins-map-grid absolute inset-0" />
                <div className="origins-island absolute left-[18%] top-[26%] h-8 w-14 rounded-full" />
                <div className="origins-island absolute left-[36%] top-[42%] h-7 w-11 rounded-full" />
                <div className="origins-island absolute left-[52%] top-[54%] h-9 w-14 rounded-full" />
                <div className="origins-island absolute left-[68%] top-[48%] h-7 w-10 rounded-full" />
                <div className="origins-fiji-focus absolute left-[64%] top-[50%]">
                  <span className="block h-5 w-5 rounded-full bg-emerald-600 shadow-[0_0_0_6px_rgba(16,185,129,0.18)]" />
                  <span className="mt-3 block whitespace-nowrap text-xs font-semibold uppercase tracking-[0.24em] text-slate-800">
                    Fiji
                  </span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Fiji: The Edge of Expansion
              </h3>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                As early settlers moved eastward, Fiji became one of the last
                large island groups within reach. Beyond it lay vast stretches of
                open ocean, making further travel far more difficult without
                advanced navigation. For many early migrants, Fiji marked a
                natural stopping point.
              </p>
              <p className="mt-6 text-sm italic leading-7 text-slate-500">
                Wibberley, Leonard. Fiji: Islands of the Dawn. New York: Van Rees
                Press, 1964.
              </p>
            </div>
          </div>
        </section>

        <section
          data-origins-block
          data-origins-theory
          className="relative mt-6 overflow-hidden rounded-[1.4rem] border border-white/35 bg-[linear-gradient(180deg,rgba(17,35,50,0.92),rgba(15,23,42,0.96))] px-5 py-8 text-white shadow-xl sm:rounded-[2rem] sm:px-10 sm:py-10 md:mt-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                A Curious Theory
              </h3>
              <p className="mt-5 text-lg leading-8 text-slate-200/82">
                Earlier interpretations sometimes tried to connect Fiji to places
                far beyond the Pacific. Modern research offers a clearer picture,
                but the older theory remains part of how people once tried to
                understand origins.
              </p>
              <p className="mt-6 text-sm italic leading-7 text-slate-300/72">
                Wibberley, Leonard. Fiji: Islands of the Dawn. New York: Van Rees
                Press, 1964.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {perspectiveCards.map((card, index) => (
                <article
                  key={card.title}
                  data-origins-card
                  className="rounded-[1.75rem] border border-white/12 bg-white/7 p-7 shadow-lg backdrop-blur"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-200">
                    {index === 0 ? "Historical Idea" : "Current View"}
                  </p>
                  <h4 className="mt-3 text-2xl font-semibold text-white">
                    {card.title}
                  </h4>
                  <p className="mt-4 leading-8 text-slate-200/88">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          data-origins-block
          data-origins-closing
          className="relative mt-6 overflow-hidden rounded-[1.4rem] border border-white/15 bg-[linear-gradient(180deg,rgba(24,49,63,0.84),rgba(9,18,29,0.97))] px-5 py-14 text-white shadow-xl sm:rounded-[2rem] sm:px-10 sm:py-16 md:mt-10 md:py-24"
        >
          <div className="origins-night-sky absolute inset-0" />
          <div className="origins-island-dusk absolute inset-x-0 bottom-0 h-40" />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h3
              data-origins-closing-line
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              The Bigger Picture
            </h3>
            <p
              data-origins-closing-line
              className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-100/88"
            >
              The story of origins in the Pacific is a story of movement,
              adaptation, and interpretation. Nature shaped where people could go.
              Islands shaped where they stayed. And over time, different
              generations tried to explain what they saw. Fiji stands at the
              meeting point of migration, environment, and identity.
            </p>
            <p
              data-origins-closing-line
              className="mx-auto mt-8 max-w-2xl text-xl font-medium leading-8 text-white"
            >
              Origins is not just a story about where people came from. It is also
              a story about how the Pacific shaped human life.
            </p>
            <p
              data-origins-closing-line
              className="mx-auto mt-6 max-w-2xl text-sm italic leading-7 text-slate-300/72"
            >
              Wibberley, Leonard. Fiji: Islands of the Dawn. New York: Van Rees
              Press, 1964.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
