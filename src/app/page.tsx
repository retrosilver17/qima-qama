import Image from "next/image";
import Link from "next/link";

import { BorderGlow } from "../components/border-glow";
import { HomeCursorCompanion } from "../components/home-cursor-companion";
import { HomeGreetingsBackdrop } from "../components/home-greetings-backdrop";
import { HomeHeroReveal } from "../components/home-hero-reveal";
import { HomeOriginsSection } from "../components/home-origins-section";
import { MotionArticle, MotionReveal } from "../components/motion-reveal";
import { SmoothDisclosure } from "../components/smooth-disclosure";
import { definitions } from "./definitions";
import { traditions } from "./data/traditions";

const heroGreetings = [
  {
    phrase: "Bula Vinaka",
    className:
      "left-[4%] top-[8%] text-[2.1rem] text-emerald-700/14 md:text-[4.5rem]",
  },
  {
    phrase: "Colo Gali",
    className:
      "right-[7%] top-[18%] text-[1.8rem] text-slate-900/10 md:text-[3.6rem]",
  },
  {
    phrase: "Cola Vina Riki",
    className:
      "left-[10%] top-[46%] text-[1.65rem] text-emerald-900/10 md:text-[3rem]",
  },
  {
    phrase: "Bula Re",
    className:
      "right-[10%] top-[58%] text-[1.9rem] text-emerald-700/14 md:text-[3.8rem]",
  },
  {
    phrase: "Bula Sia",
    className:
      "left-[34%] top-[26%] text-[1.55rem] text-slate-900/10 md:text-[2.8rem]",
  },
  {
    phrase: "Malo Bula",
    className:
      "left-[40%] top-[72%] text-[1.75rem] text-amber-700/14 md:text-[3.3rem]",
  },
];

const pronunciationGuide = [
  { letter: "b", sound: "mb", example: "like member" },
  { letter: "d", sound: "nd", example: "like sandy" },
  { letter: "g", sound: "ng", example: "like singer" },
  { letter: "q", sound: "ngg", example: "like hunger" },
  { letter: "c", sound: "th", example: "like then" },
] as const;

export default function Home() {
  const featuredTraditions = traditions.slice(0, 3);

  return (
    <main className="masi-page relative isolate min-h-screen text-slate-900">
      <HomeCursorCompanion />
      <HomeGreetingsBackdrop greetings={heroGreetings} />

      <section
        data-home-hero
        className="relative z-10 mx-auto max-w-6xl overflow-hidden px-5 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16 lg:pb-16 lg:pt-20"
      >
        <HomeHeroReveal />
        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.92fr)] lg:gap-16">
          <div className="relative z-10 max-w-2xl">
            <div
              data-hero-badge
              className="heritage-badge inline-flex rounded-full px-4 py-1.5 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f766e]">
                Welcome to
              </p>
            </div>

            <div data-hero-brand className="relative mt-5 inline-block">
              <div className="hero-title-glow absolute inset-0 rounded-[1.75rem]" />
              <h1 className="hero-title masi-title-card relative rounded-[1.25rem] px-5 py-4 text-[clamp(2.35rem,8vw,4.35rem)] font-black uppercase tracking-[0.08em] text-slate-950 sm:rounded-[1.5rem] sm:px-7 sm:tracking-[0.13em] md:tracking-[0.16em]">
                Qima Qama
              </h1>
            </div>

            <p
              data-hero-kicker
              className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#0f766e]"
            >
              Digital cultural knowledge platform
            </p>

            <h2
              data-hero-headline
              className="mt-5 max-w-2xl text-[clamp(2rem,5.8vw,3.35rem)] font-black leading-[1.05] tracking-tight text-slate-950"
            >
              Preserving the wisdom,
              <span className="block text-[#0f766e]">traditions,</span>
              and living heritage of the vanua.
            </h2>

            <p
              data-hero-copy
              className="mt-5 max-w-xl text-base leading-8 text-slate-700 sm:text-lg"
            >
              A digital cultural knowledge platform for exploring iTaukei traditions,
              practices, stories, language, and identity through a clean and modern
              experience.
            </p>

            <div
              data-hero-signals
              className="mt-7 grid max-w-2xl gap-4 sm:grid-cols-3"
            >
              <div className="cultural-signal">
                <p>Vanua</p>
                <span>Land, people, belonging</span>
              </div>
              <div className="cultural-signal">
                <p>Vosa</p>
                <span>Language and memory</span>
              </div>
              <div className="cultural-signal">
                <p>iYau</p>
                <span>Heritage and knowledge</span>
              </div>
            </div>

            <div data-hero-actions className="mt-7 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/traditions"
                className="btn-primary rounded-full px-7 py-3 text-sm font-semibold text-white"
              >
                Explore Traditions
              </Link>

              <Link
                href="/provinces"
                className="btn-secondary rounded-full px-7 py-3 text-sm font-semibold"
              >
                Browse Provinces
              </Link>

              <Link
                href="#definitions"
                className="btn-secondary rounded-full px-7 py-3 text-sm font-semibold"
              >
                Definitions
              </Link>
            </div>
          </div>

          <div data-hero-visual className="relative z-10">
            <div className="masi-corner-mark absolute -left-4 -top-4 h-24 w-24" />
            <div className="masi-corner-mark absolute -bottom-5 -right-5 h-28 w-28 rotate-180" />

            <div
              data-hero-visual-inner
              className="cultural-frame relative overflow-hidden rounded-[1.75rem] p-2 shadow-xl sm:p-3"
            >
              <div className="relative h-[300px] w-full sm:h-[400px] lg:h-[460px]">
                <Image
                  src="/images/sevusevu.jpg"
                  alt="Fijian cultural welcome ceremony"
                  fill
                  priority
                  className="rounded-[1.35rem] object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>

            <div
              data-hero-card
              className="heritage-float-card static mt-4 rounded-2xl p-5 shadow-lg md:absolute md:-bottom-5 md:left-6 md:mt-0"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0f766e]">
                Cultural Focus
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                Ceremony, identity, and vanua
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomeOriginsSection />

      <div className="relative z-10 mx-auto max-w-6xl space-y-16 px-5 py-14 sm:px-6 md:space-y-20 md:py-20">
        <section id="definitions">
          <MotionReveal className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker text-sm font-semibold uppercase tracking-[0.2em] text-[#0f766e]">
                Learn
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">
                Definitions
              </h2>
              <p className="mt-4 max-w-3xl text-slate-700">
                Explore common ceremonial and cultural terms used in Fijian traditions.
              </p>
            </div>

            <Link
              href="/definitions"
              className="heritage-text-link self-start whitespace-nowrap text-sm font-semibold sm:self-auto"
            >
              View all
            </Link>
          </MotionReveal>

          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {definitions.slice(0, 4).map((item, index) => (
              <MotionReveal
                key={item.term}
                delay={index * 0.05}
                className="h-full"
              >
                <Link
                  href={`/definitions/${item.slug}`}
                  className="block h-full transition duration-300 ease-out hover:-translate-y-1"
                >
                  <BorderGlow className="h-full">
                    <article className="heritage-card h-full rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {item.term}
                      </h3>
                      <p className="mt-3 text-slate-700">{item.meaning}</p>
                      <p className="mt-5 text-sm font-semibold text-[#0f766e]">
                        Learn more
                      </p>
                    </article>
                  </BorderGlow>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section>
          <MotionReveal className="heritage-panel overflow-hidden rounded-[1.75rem] shadow-sm">
            <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="p-6 sm:p-10">
                <p className="section-kicker text-sm font-semibold uppercase tracking-[0.22em] text-[#0f766e]">
                  Language Guide
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                  Spelling and Pronunciation
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                  This alphabet is based on the Roman alphabet but assigns different
                  sound values to certain letters:
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {pronunciationGuide.map((item, index) => (
                    <MotionArticle
                      key={item.letter}
                      delay={index * 0.04}
                      className="heritage-tile rounded-2xl p-5 shadow-sm"
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
                        {item.letter}
                      </p>
                      <p className="mt-2 text-xl font-semibold text-slate-900">
                        {item.sound}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.letter} = {item.sound} ({item.example})
                      </p>
                    </MotionArticle>
                  ))}
                </div>

                <SmoothDisclosure summary="Learn more" className="mt-8">
                  <div className="space-y-4 text-slate-700">
                    <p>
                      The written form of the Fijian language is mainly based on the
                      Bauan dialect, which is the standard form used across the
                      islands. There are two writing systems:
                    </p>

                    <p>
                      a phonetic system (rarely used today), and
                      <br />
                      the modern alphabet system developed in the 1830s by missionary
                      David Cargill.
                    </p>

                    <p>
                      This alphabet is based on the Roman alphabet but assigns
                      different sound values to certain letters:
                    </p>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <ul className="space-y-2 text-slate-700">
                        {pronunciationGuide.map((item) => (
                          <li key={`full-${item.letter}`}>
                            {item.letter} = {item.sound} ({item.example})
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p>
                      Fijian vowels are pronounced clearly, similar to Spanish or
                      Italian, and the letter r is rolled.
                    </p>

                    <p>
                      In most words, the stress falls on the second-to-last syllable.
                    </p>

                    <p>
                      The spelling system may look unusual at first, but it is
                      logical and efficient once learned. It uses single letters to
                      represent sound combinations, which was done intentionally for
                      linguistic clarity—not by accident.
                    </p>

                    <p className="text-sm italic text-slate-500">
                      Wright, Ronald. On Fiji Islands. New York: Viking Penguin Inc.,
                      1986.
                    </p>
                  </div>
                </SmoothDisclosure>
              </div>

              <div className="relative min-h-[300px] border-t border-stone-300/70 bg-stone-100 sm:min-h-[360px] lg:min-h-full lg:border-l lg:border-t-0">
                <Image
                  src="/images/spelling-pronunciation.png"
                  alt="Classroom scene showing a Fijian spelling and pronunciation lesson"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </MotionReveal>
        </section>

        <section>
          <MotionReveal className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker text-sm font-semibold uppercase tracking-[0.2em] text-[#0f766e]">
                Explore
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">
                Featured Traditions
              </h2>
            </div>

            <Link
              href="/traditions"
              className="heritage-text-link self-start whitespace-nowrap text-sm font-semibold sm:self-auto"
            >
              View all
            </Link>
          </MotionReveal>

          <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
            {featuredTraditions.map((tradition, index) => (
              <MotionReveal
                key={tradition.slug}
                delay={index * 0.06}
                className="h-full"
              >
                <Link
                  href={`/traditions/${tradition.slug}`}
                  className="group block h-full transition duration-300 ease-out hover:-translate-y-1"
                >
                  <BorderGlow className="h-full">
                    <article className="heritage-card h-full rounded-2xl p-5 sm:p-6">
                      <div className="relative h-48 overflow-hidden rounded-xl bg-slate-100">
                        <Image
                          src={tradition.image}
                          alt={tradition.title}
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover transition duration-300 group-hover:scale-105"
                        />
                      </div>

                      <h3 className="mt-4 text-xl font-semibold text-slate-900">
                        {tradition.title}
                      </h3>
                      <p className="mt-3 text-slate-700">{tradition.summary}</p>
                      <p className="mt-5 text-sm font-semibold text-[#0f766e]">
                        Learn more
                      </p>
                    </article>
                  </BorderGlow>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
