"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function lerp(start: number, end: number, progress: number) {
  return start + (end - start) * progress;
}

function smoothstep(progress: number) {
  const clamped = clamp(progress, 0, 1);
  return clamped * clamped * (3 - 2 * clamped);
}

function appleEase(progress: number) {
  const clamped = clamp(progress, 0, 1);
  return 1 - Math.pow(1 - clamped, 3);
}

function rangeProgress(value: number, start: number, end: number) {
  return clamp((value - start) / (end - start), 0, 1);
}

function setTransform(element: HTMLElement | null, value: string) {
  if (element) {
    element.style.transform = value;
  }
}

function setOpacity(element: HTMLElement | null, value: number) {
  if (element) {
    element.style.opacity = String(clamp(value, 0, 1));
  }
}

export function HomeSailingHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const skyRef = useRef<HTMLDivElement | null>(null);
  const cloudOneRef = useRef<HTMLDivElement | null>(null);
  const cloudTwoRef = useRef<HTMLDivElement | null>(null);
  const islandRef = useRef<HTMLDivElement | null>(null);
  const sunRef = useRef<HTMLDivElement | null>(null);
  const shoreRef = useRef<HTMLDivElement | null>(null);
  const blendRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const brandRef = useRef<HTMLDivElement | null>(null);
  const storyRef = useRef<HTMLDivElement | null>(null);
  const actionsRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const boatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let current = 0;
    let target = 0;
    let destroyed = false;

    const readProgress = () => {
      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
      return clamp(-rect.top / scrollDistance, 0, 1);
    };

    const apply = (progress: number) => {
      const width = window.innerWidth;
      const eased = smoothstep(appleEase(progress));
      const mobile = width < 768;

      if (reduceMotion.matches) {
        setTransform(boatRef.current, "translate3d(0, 0, 0) rotate(0deg)");
        setOpacity(brandRef.current, 1);
        setOpacity(storyRef.current, 1);
        setOpacity(actionsRef.current, 1);
        setOpacity(imageRef.current, 1);
        setOpacity(shoreRef.current, 0.8);
        setOpacity(blendRef.current, 1);
        return;
      }

      const boatStart = mobile ? width * -0.58 : width * -0.34;
      const boatEnd = mobile ? width * 1.06 : width * 1.16;
      const boatX = lerp(boatStart, boatEnd, eased);
      const boatY = mobile
        ? 5 + Math.sin(progress * Math.PI * 2.4) * 4
        : 10 + Math.sin(progress * Math.PI * 3) * 6;
      const boatRotate = Math.sin(progress * Math.PI * 3.4) * (mobile ? 0.8 : 1.1);
      const storyReveal = smoothstep(rangeProgress(progress, 0.04, 0.22));
      const actionReveal = smoothstep(rangeProgress(progress, 0.18, 0.38));
      const imageReveal = smoothstep(rangeProgress(progress, 0.32, 0.58));
      const shoreReveal = smoothstep(rangeProgress(progress, 0.6, 0.84));
      const blendReveal = smoothstep(rangeProgress(progress, 0.74, 0.96));

      setTransform(skyRef.current, `translate3d(0, ${lerp(0, mobile ? 10 : 24, progress)}px, 0)`);
      setTransform(
        cloudOneRef.current,
        `translate3d(${lerp(width * -0.05, width * 0.06, progress)}px, 0, 0)`,
      );
      setTransform(
        cloudTwoRef.current,
        `translate3d(${lerp(width * 0.04, width * -0.045, progress)}px, 0, 0)`,
      );
      setTransform(
        islandRef.current,
        `translate3d(${lerp(width * -0.025, width * 0.035, progress)}px, 0, 0)`,
      );
      setTransform(
        contentRef.current,
        `translate3d(0, ${lerp(0, mobile ? -8 : -20, rangeProgress(progress, 0.7, 1))}px, 0)`,
      );
      setTransform(brandRef.current, "translate3d(0, 0, 0)");
      setTransform(storyRef.current, `translate3d(0, ${lerp(10, 0, storyReveal)}px, 0)`);
      setTransform(imageRef.current, `translate3d(0, ${lerp(24, 0, imageReveal)}px, 0)`);
      setTransform(
        boatRef.current,
        `translate3d(${boatX}px, ${boatY}px, 0) rotate(${boatRotate}deg)`,
      );

      setOpacity(sunRef.current, lerp(0.72, 0.36, rangeProgress(progress, 0.35, 1)));
      setOpacity(brandRef.current, 1);
      setOpacity(storyRef.current, mobile ? 1 : lerp(0.72, 1, storyReveal));
      setOpacity(actionsRef.current, mobile ? 1 : actionReveal);
      setOpacity(imageRef.current, imageReveal);
      setOpacity(shoreRef.current, shoreReveal * 0.92);
      setOpacity(blendRef.current, blendReveal);
    };

    const render = () => {
      if (destroyed) {
        return;
      }

      current += (target - current) * 0.115;

      if (Math.abs(target - current) < 0.0008) {
        current = target;
      }

      apply(current);

      if (current !== target) {
        raf = window.requestAnimationFrame(render);
      } else {
        raf = 0;
      }
    };

    const schedule = () => {
      target = readProgress();

      if (raf === 0) {
        raf = window.requestAnimationFrame(render);
      }
    };

    current = readProgress();
    target = current;
    apply(current);

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduceMotion.addEventListener("change", schedule);

    return () => {
      destroyed = true;
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduceMotion.removeEventListener("change", schedule);

      if (raf !== 0) {
        window.cancelAnimationFrame(raf);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-home-hero
      className="relative z-10 h-[215svh] bg-[linear-gradient(180deg,#dff7f3_0%,#b7dad5_35%,#0f766e_72%,#f8fafc_100%)] text-white md:h-[280dvh]"
      aria-label="Welcome to Qima Qama"
    >
      <div className="sticky top-0 min-h-[100svh] overflow-hidden bg-[#dff7f3] md:min-h-dvh">
        <div
          ref={skyRef}
          aria-hidden="true"
          className="sailing-composited absolute inset-x-0 -inset-y-[12%] md:-inset-y-[14%]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#e6faf7_0%,#acd8d5_30%,#f8e1b2_58%,#13665f_100%)]" />
          <div
            ref={sunRef}
            className="sailing-sun absolute inset-x-0 top-[12%] mx-auto h-28 w-28 rounded-full bg-amber-200/85 md:h-44 md:w-44"
          />
          <div
            ref={cloudOneRef}
            className="sailing-cloud-bank sailing-composited absolute left-[-14%] top-[13%] h-24 w-[76vw] opacity-70 md:h-28 md:w-[68vw]"
          />
          <div
            ref={cloudTwoRef}
            className="sailing-cloud-bank sailing-cloud-bank-soft sailing-composited absolute right-[-14%] top-[25%] h-20 w-[64vw] opacity-55 md:h-24 md:w-[58vw]"
          />
          <div
            ref={islandRef}
            className="sailing-island-line sailing-composited absolute inset-x-[-8%] bottom-[29%] h-24 md:h-28"
          />
          <div className="absolute inset-x-[-10%] bottom-[26%] h-[34%] rounded-[50%] bg-[linear-gradient(180deg,rgba(255,255,255,0.25),rgba(15,118,110,0.08))]" />
          <div className="absolute inset-x-0 bottom-[20%] h-28 bg-[linear-gradient(180deg,rgba(20,83,45,0),rgba(20,83,45,0.32))]" />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-[-18%] bottom-[-2dvh] h-[38dvh] md:h-[48dvh]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_28%_0%,rgba(255,255,255,0.44),transparent_30%),radial-gradient(ellipse_at_70%_18%,rgba(255,255,255,0.2),transparent_28%),linear-gradient(180deg,#0f766e_0%,#0f5f68_48%,#0c3d4b_100%)]" />
          <div className="sailing-wave sailing-wave-back absolute left-0 top-0 h-20 w-[130%] md:h-24" />
          <div className="sailing-wave sailing-wave-front absolute left-[-8%] top-14 h-24 w-[140%] md:top-16 md:h-28" />
          <div className="sailing-current-lines absolute inset-y-0 left-[-80px] right-[-80px] opacity-[0.28] md:opacity-[0.42]" />
        </div>

        <div
          ref={shoreRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[34dvh] bg-[linear-gradient(180deg,rgba(248,250,252,0)_0%,rgba(248,250,252,0.18)_38%,#f8fafc_100%)] opacity-0"
        />

        <div
          ref={blendRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-30 h-[22dvh] bg-[linear-gradient(180deg,rgba(248,250,252,0)_0%,#f8fafc_78%,#f8fafc_100%)] opacity-0"
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-[linear-gradient(180deg,rgba(230,250,247,0.96),rgba(230,250,247,0.56),rgba(230,250,247,0))] md:h-28" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-between px-5 pb-28 pt-20 sm:px-6 md:min-h-dvh md:pb-7 md:pt-28">
          <div className="grid flex-1 items-start gap-8 pt-2 md:items-center md:pt-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
            <div
              ref={contentRef}
              className="sailing-composited relative z-10 max-w-3xl"
            >
              <div ref={brandRef} className="sailing-composited">
                <p className="text-xs font-semibold uppercase text-emerald-950/85 sm:text-sm">
                  Welcome to
                </p>
                <div className="relative mt-4 inline-block md:mt-5">
                  <div className="hero-title-glow absolute inset-0 rounded-[1.5rem] md:rounded-[2rem]" />
                  <h1 className="hero-title relative rounded-[1.2rem] border border-white/65 bg-white/90 px-5 py-4 text-4xl font-black uppercase text-slate-950 shadow-md sm:px-7 sm:text-6xl md:rounded-[1.6rem] md:px-8 md:py-5 md:text-8xl">
                    Qima Qama
                  </h1>
                </div>

                <p className="mt-4 text-xs font-semibold uppercase text-emerald-950 sm:text-sm">
                  Digital cultural knowledge platform
                </p>
              </div>

              <div ref={storyRef} className="sailing-composited">
                <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl">
                  Preserving the wisdom,
                  <span className="block text-emerald-100">traditions,</span>
                  and living heritage of the vanua.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-white/88 sm:text-lg sm:leading-8">
                  A digital cultural knowledge platform for exploring iTaukei
                  traditions, practices, stories, language, and identity through a
                  clean and modern experience.
                </p>

                <div
                  ref={actionsRef}
                  className="sailing-composited mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-8 md:gap-4"
                >
                  <Link
                    href="/traditions"
                    className="min-h-11 rounded-full bg-emerald-700 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 sm:px-7"
                  >
                    Explore Traditions
                  </Link>

                  <Link
                    href="/provinces"
                    className="min-h-11 rounded-full border border-white/70 bg-white/90 px-6 py-3 text-center text-sm font-semibold text-slate-800 transition hover:bg-white hover:text-emerald-800 sm:px-7"
                  >
                    Browse Provinces
                  </Link>

                  <Link
                    href="#definitions"
                    className="min-h-11 rounded-full border border-white/70 bg-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-emerald-800 sm:px-7"
                  >
                    Definitions
                  </Link>
                </div>

              </div>
            </div>

            <div
              ref={imageRef}
              className="sailing-composited relative z-10 hidden opacity-0 lg:block"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/30 bg-white/20 p-3 shadow-lg shadow-slate-950/15">
                <div className="relative h-[460px] w-full">
                  <Image
                    src="/images/sevusevu.jpg"
                    alt="Fijian cultural welcome ceremony"
                    fill
                    priority
                    className="rounded-[1.5rem] object-cover"
                    sizes="(min-width: 1024px) 42vw, 100vw"
                  />
                </div>
              </div>

              <div className="absolute -bottom-6 left-6 rounded-2xl border border-white/50 bg-white/95 p-5 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Cultural Focus
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  Ceremony, identity, and vanua
                </p>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-[6dvh] z-0 h-32 px-0 md:bottom-[21dvh] md:h-40">
            <div
              ref={boatRef}
              className="sailing-composited absolute bottom-0 left-[2%] w-[190px] sm:w-[260px] md:w-[380px]"
            >
              <svg
                viewBox="0 0 420 235"
                role="img"
                aria-label="A sailing boat crossing the ocean"
                className="h-auto w-full"
              >
                <defs>
                  <linearGradient id="qima-sail-main" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#fffaf0" />
                    <stop offset="54%" stopColor="#f6e3b5" />
                    <stop offset="100%" stopColor="#d9a75a" />
                  </linearGradient>
                  <linearGradient id="qima-sail-light" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="66%" stopColor="#f1f5f9" />
                    <stop offset="100%" stopColor="#cbd5e1" />
                  </linearGradient>
                  <linearGradient id="qima-hull" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#9a5a35" />
                    <stop offset="48%" stopColor="#6f361f" />
                    <stop offset="100%" stopColor="#3f2218" />
                  </linearGradient>
                  <linearGradient id="qima-water-wake" x1="0" x2="1">
                    <stop offset="0%" stopColor="#dff7f3" stopOpacity="0" />
                    <stop offset="42%" stopColor="#f8fafc" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#dff7f3" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M203 18 L203 165"
                  stroke="#3d2a20"
                  strokeLinecap="round"
                  strokeWidth="9"
                />
                <path
                  d="M216 32 C280 56 328 104 350 160 L216 160 Z"
                  fill="url(#qima-sail-light)"
                  stroke="#c58f3b"
                  strokeWidth="4.5"
                />
                <path
                  d="M190 46 C126 78 84 120 62 160 L190 160 Z"
                  fill="url(#qima-sail-main)"
                  stroke="#c58f3b"
                  strokeWidth="4.5"
                />
                <path
                  d="M68 157 C120 180 295 181 364 157 C346 195 312 210 253 217 L140 217 C104 213 79 192 68 157 Z"
                  fill="url(#qima-hull)"
                />
                <path
                  d="M92 167 C158 184 280 184 338 167"
                  fill="none"
                  stroke="#f5c982"
                  strokeLinecap="round"
                  strokeWidth="7"
                />
                <path
                  d="M206 28 C228 68 236 112 224 160"
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeOpacity="0.45"
                  strokeWidth="3"
                />
                <path
                  d="M191 48 C173 92 170 126 182 160"
                  fill="none"
                  stroke="#fff7db"
                  strokeLinecap="round"
                  strokeOpacity="0.5"
                  strokeWidth="3"
                />
                <path
                  d="M203 30 L76 160"
                  opacity="0.72"
                  stroke="#5b3b28"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
                <path
                  d="M203 31 L342 159"
                  opacity="0.72"
                  stroke="#5b3b28"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
                <path
                  className="sailing-boat-wake"
                  d="M18 207 C84 223 124 204 176 217 C230 231 292 211 402 222"
                  fill="none"
                  stroke="url(#qima-water-wake)"
                  strokeLinecap="round"
                  strokeWidth="9"
                />
              </svg>
            </div>
          </div>

          <div className="relative z-10 hidden items-center justify-between gap-5 text-white/82 md:flex">
            <p className="max-w-xs text-xs font-semibold uppercase">
              Vanua, language, and memory
            </p>
            <div className="h-px flex-1 bg-white/30" />
            <p className="text-sm font-medium">Ceremony, identity, and story</p>
          </div>
        </div>
      </div>
    </section>
  );
}
