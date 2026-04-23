"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import { HeroSoundtrack } from "./hero-soundtrack";

export function HomeSailingHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const easedProgress = useSpring(scrollYProgress, {
    stiffness: 58,
    damping: 34,
    mass: 0.38,
  });
  const heroProgress = prefersReducedMotion ? scrollYProgress : easedProgress;

  const boatX = useTransform(
    heroProgress,
    [0, 0.18, 0.55, 0.92, 1],
    prefersReducedMotion
      ? ["0vw", "0vw", "0vw", "0vw", "0vw"]
      : ["-42vw", "-16vw", "34vw", "88vw", "106vw"],
  );
  const boatY = useTransform(
    heroProgress,
    [0, 0.26, 0.6, 0.86, 1],
    prefersReducedMotion ? [0, 0, 0, 0, 0] : [12, -5, 9, -4, 2],
  );
  const boatRotate = useTransform(
    heroProgress,
    [0, 0.22, 0.52, 0.78, 1],
    prefersReducedMotion ? [0, 0, 0, 0, 0] : [-1.8, 1.2, -0.8, 1.1, 0],
  );
  const brandOpacity = useTransform(
    heroProgress,
    [0, 0.08, 0.78, 0.96],
    [0, 1, 1, 0.86],
  );
  const brandY = useTransform(
    heroProgress,
    [0, 0.18],
    prefersReducedMotion ? [0, 0] : [24, 0],
  );
  const storyOpacity = useTransform(heroProgress, [0.28, 0.46, 1], [0, 1, 1]);
  const storyY = useTransform(
    heroProgress,
    [0.28, 0.5],
    prefersReducedMotion ? [0, 0] : [26, 0],
  );
  const actionsOpacity = useTransform(heroProgress, [0.5, 0.66, 1], [0, 1, 1]);
  const imageOpacity = useTransform(heroProgress, [0.58, 0.76], [0, 1]);
  const imageY = useTransform(
    heroProgress,
    [0.54, 0.78],
    prefersReducedMotion ? [0, 0] : [30, 0],
  );
  const skyShift = useTransform(
    heroProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "3%"],
  );
  const cloudDrift = useTransform(
    heroProgress,
    [0, 1],
    prefersReducedMotion ? ["0vw", "0vw"] : ["-8vw", "9vw"],
  );
  const farCloudDrift = useTransform(
    heroProgress,
    [0, 1],
    prefersReducedMotion ? ["0vw", "0vw"] : ["7vw", "-6vw"],
  );
  const islandDrift = useTransform(
    heroProgress,
    [0, 1],
    prefersReducedMotion ? ["0vw", "0vw"] : ["-4vw", "5vw"],
  );
  const lightOpacity = useTransform(heroProgress, [0, 0.24, 0.72, 1], [0.48, 0.72, 0.58, 0.34]);
  const shoreOpacity = useTransform(heroProgress, [0.65, 0.86, 1], [0, 0.85, 1]);
  const contentLift = useTransform(
    heroProgress,
    [0.72, 1],
    prefersReducedMotion ? [0, 0] : [0, -18],
  );

  return (
    <section
      ref={sectionRef}
      data-home-hero
      className="relative z-10 h-[285dvh] bg-[linear-gradient(180deg,#dff7f3_0%,#b7dad5_34%,#0f766e_72%,#f8fafc_100%)] text-white"
      aria-label="Welcome to Qima Qama"
    >
      <div className="sticky top-0 min-h-dvh overflow-hidden bg-[#dff7f3]">
        <motion.div
          aria-hidden="true"
          className="sailing-composited absolute inset-x-0 -inset-y-[14%]"
          style={{ y: skyShift }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#e6faf7_0%,#acd8d5_31%,#f8e1b2_59%,#13665f_100%)]" />
          <motion.div
            className="absolute inset-x-0 top-[12%] mx-auto h-32 w-32 rounded-full bg-amber-200/85 blur-[2px] md:h-44 md:w-44"
            style={{ opacity: lightOpacity }}
          />
          <motion.div
            className="sailing-cloud-bank sailing-composited absolute left-[-12%] top-[13%] h-28 w-[68vw] opacity-75"
            style={{ x: cloudDrift }}
          />
          <motion.div
            className="sailing-cloud-bank sailing-cloud-bank-soft sailing-composited absolute right-[-12%] top-[24%] h-24 w-[58vw] opacity-60"
            style={{ x: farCloudDrift }}
          />
          <motion.div
            className="sailing-island-line sailing-composited absolute inset-x-[-8%] bottom-[29%] h-28"
            style={{ x: islandDrift }}
          />
          <div className="absolute inset-x-[-10%] bottom-[26%] h-[34%] rounded-[50%] bg-[linear-gradient(180deg,rgba(255,255,255,0.26),rgba(15,118,110,0.08))]" />
          <div className="absolute inset-x-0 bottom-[20%] h-28 bg-[linear-gradient(180deg,rgba(20,83,45,0),rgba(20,83,45,0.32))]" />
        </motion.div>

        <div
          aria-hidden="true"
          className="absolute inset-x-[-18%] bottom-[-2dvh] h-[48dvh]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_28%_0%,rgba(255,255,255,0.5),transparent_30%),radial-gradient(ellipse_at_70%_18%,rgba(255,255,255,0.24),transparent_28%),linear-gradient(180deg,#0f766e_0%,#0f5f68_48%,#0c3d4b_100%)]" />
          <div className="sailing-wave sailing-wave-back absolute left-0 top-0 h-24 w-[130%]" />
          <div className="sailing-wave sailing-wave-front absolute left-[-8%] top-16 h-28 w-[140%]" />
          <div className="sailing-current-lines absolute inset-y-0 left-[-80px] right-[-80px] opacity-[0.42]" />
        </div>

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[34dvh] bg-[linear-gradient(180deg,rgba(248,250,252,0)_0%,rgba(248,250,252,0.18)_38%,#f8fafc_100%)]"
          style={{ opacity: shoreOpacity }}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-28 bg-[linear-gradient(180deg,rgba(230,250,247,0.96),rgba(230,250,247,0.6),rgba(230,250,247,0))]" />

        <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-between px-6 pb-7 pt-24 md:pt-28">
          <div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
            <motion.div
              className="relative z-10 max-w-3xl"
              style={{ y: contentLift }}
            >
              <motion.div style={{ opacity: brandOpacity, y: brandY }}>
                <p className="text-sm font-semibold uppercase text-emerald-950/85">
                  Welcome to
                </p>
                <div className="relative mt-5 inline-block">
                  <div className="hero-title-glow absolute inset-0 rounded-[2rem]" />
                  <h1 className="hero-title relative rounded-[1.6rem] border border-white/65 bg-white/88 px-6 py-5 text-5xl font-black uppercase text-slate-950 shadow-lg backdrop-blur sm:px-8 sm:text-7xl md:text-8xl">
                    Qima Qama
                  </h1>
                </div>

                <p className="mt-4 text-sm font-semibold uppercase text-emerald-950">
                  Digital cultural knowledge platform
                </p>
              </motion.div>

              <motion.div style={{ opacity: storyOpacity, y: storyY }}>
                <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl">
                  Preserving the wisdom,
                  <span className="block text-emerald-100">traditions,</span>
                  and living heritage of the vanua.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86">
                  A digital cultural knowledge platform for exploring iTaukei
                  traditions, practices, stories, language, and identity through a
                  clean and modern experience.
                </p>

                <motion.div
                  className="mt-8 flex flex-wrap gap-4"
                  style={{ opacity: actionsOpacity }}
                >
                  <Link
                    href="/traditions"
                    className="min-h-11 rounded-full bg-emerald-700 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
                  >
                    Explore Traditions
                  </Link>

                  <Link
                    href="/provinces"
                    className="min-h-11 rounded-full border border-white/70 bg-white/90 px-7 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white hover:text-emerald-800"
                  >
                    Browse Provinces
                  </Link>

                  <Link
                    href="#definitions"
                    className="min-h-11 rounded-full border border-white/70 bg-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-emerald-800"
                  >
                    Definitions
                  </Link>
                </motion.div>

                <HeroSoundtrack />
              </motion.div>
            </motion.div>

            <motion.div
              style={{ opacity: imageOpacity, y: imageY }}
              className="relative z-10 hidden lg:block"
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
            </motion.div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-[21dvh] z-0 h-40 px-0">
            <motion.div
              className="sailing-composited absolute bottom-0 left-[2%] w-[230px] sm:w-[305px] md:w-[380px]"
              style={{ x: boatX, y: boatY, rotate: boatRotate }}
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
                  strokeWidth="9"
                  strokeLinecap="round"
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
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                <path
                  d="M206 28 C228 68 236 112 224 160"
                  fill="none"
                  stroke="#ffffff"
                  strokeOpacity="0.45"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M191 48 C173 92 170 126 182 160"
                  fill="none"
                  stroke="#fff7db"
                  strokeOpacity="0.5"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M203 30 L76 160"
                  stroke="#5b3b28"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.72"
                />
                <path
                  d="M203 31 L342 159"
                  stroke="#5b3b28"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.72"
                />
                <path
                  className="sailing-boat-wake"
                  d="M18 207 C84 223 124 204 176 217 C230 231 292 211 402 222"
                  fill="none"
                  stroke="url(#qima-water-wake)"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>

          <div className="relative z-10 flex items-center justify-between gap-5 text-white/82">
            <p className="max-w-xs text-xs font-semibold uppercase">
              Vanua, language, and memory
            </p>
            <div className="hidden h-px flex-1 bg-white/30 sm:block" />
            <p className="text-sm font-medium">Ceremony, identity, and story</p>
          </div>
        </div>
      </div>
    </section>
  );
}
