import Image from "next/image";
import Link from "next/link";

import { BorderGlow } from "../components/border-glow";
import { HomeCursorCompanion } from "../components/home-cursor-companion";
import { HomeGreetingsBackdrop } from "../components/home-greetings-backdrop";
import { HomeHeroReveal } from "../components/home-hero-reveal";
import { HomeOriginsSection } from "../components/home-origins-section";
import { HeroSoundtrack } from "../components/hero-soundtrack";
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
    <main className="relative isolate min-h-screen bg-slate-50 text-slate-900">
      <HomeCursorCompanion />
      <HomeGreetingsBackdrop greetings={heroGreetings} />

      <section
        data-home-hero
        className="relative z-10 mx-auto max-w-6xl overflow-hidden px-6 py-24"
      >
        <HomeHeroReveal />
        <div
          className="relative grid items-center gap-12 lg:grid-cols-2"
        >
          <div className="relative z-10">
            <div
              data-hero-badge
              className="inline-flex rounded-full border border-emerald-200/80 bg-white/85 px-4 py-2 shadow-sm backdrop-blur"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Welcome to
              </p>
            </div>

            <div data-hero-brand className="relative mt-5 inline-block">
              <div className="hero-title-glow absolute inset-0 rounded-[2rem]" />
              <h1 className="hero-title relative rounded-[2rem] border border-emerald-100/80 bg-white/80 px-6 py-5 text-6xl font-black uppercase tracking-[0.26em] text-slate-900 shadow-lg backdrop-blur sm:px-8 sm:text-7xl md:text-8xl">
                Qima Qama
              </h1>
            </div>

            <p
              data-hero-kicker
              className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700"
            >
              Digital cultural knowledge platform
            </p>

            <h2
              data-hero-headline
              className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
            >
              Preserving the wisdom,
              <span className="block text-emerald-700">traditions,</span>
              and living heritage of the vanua.
            </h2>

            <p
              data-hero-copy
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
            >
              A digital cultural knowledge platform for exploring iTaukei traditions,
              practices, stories, language, and identity through a clean and modern
              experience.
            </p>

            <div data-hero-actions className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/traditions"
                className="rounded-full bg-emerald-700 px-7 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-800"
              >
                Explore Traditions
              </Link>

              <Link
                href="/provinces"
                className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-medium text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
              >
                Browse Provinces
              </Link>

              <Link
                href="#definitions"
                className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-medium text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
              >
                Definitions
              </Link>
            </div>

            <div data-hero-soundtrack>
              <HeroSoundtrack />
            </div>
          </div>

          <div data-hero-visual className="relative z-10">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-emerald-100 blur-3xl" />
            <div className="absolute -bottom-8 -right-6 h-40 w-40 rounded-full bg-amber-100 blur-3xl" />

            <div
              data-hero-visual-inner
              className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl"
            >
              <div className="relative h-[500px] w-full">
                <Image
                  src="/images/sevusevu.jpg"
                  alt="Fijian cultural welcome ceremony"
                  fill
                  className="rounded-[1.5rem] object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>

            <div
              data-hero-card
              className="absolute -bottom-6 left-6 rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-lg backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
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

      <section id="definitions" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Learn
            </p>
            <h2 className="mt-2 text-3xl font-bold">Definitions</h2>
            <p className="mt-4 max-w-3xl text-slate-600">
              Explore common ceremonial and cultural terms used in Fijian traditions.
            </p>
          </div>

          <Link
            href="/definitions"
            className="text-sm font-medium text-emerald-700 hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {definitions.slice(0, 4).map((item) => (
            <Link
              key={item.term}
              href={`/definitions/${item.slug}`}
              className="block h-full"
            >
              <BorderGlow className="h-full">
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.term}
                  </h3>
                  <p className="mt-3 text-slate-600">{item.meaning}</p>
                  <p className="mt-5 text-sm font-medium text-emerald-700">
                    Learn more
                  </p>
                </article>
              </BorderGlow>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Language Guide
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Spelling and Pronunciation
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                This alphabet is based on the Roman alphabet but assigns different
                sound values to certain letters:
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {pronunciationGuide.map((item) => (
                  <article
                    key={item.letter}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      {item.letter}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-slate-900">
                      {item.sound}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.letter} = {item.sound} ({item.example})
                    </p>
                  </article>
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

            <div className="relative min-h-[320px] border-t border-slate-200 bg-slate-100 lg:min-h-full lg:border-l lg:border-t-0">
              <Image
                src="/images/spelling-pronunciation.png"
                alt="Classroom scene showing a Fijian spelling and pronunciation lesson"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Explore
            </p>
            <h2 className="mt-2 text-3xl font-bold">Featured Traditions</h2>
          </div>

          <Link
            href="/traditions"
            className="text-sm font-medium text-emerald-700 hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredTraditions.map((tradition) => (
            <Link
              key={tradition.slug}
              href={`/traditions/${tradition.slug}`}
              className="group block h-full transition duration-300 hover:-translate-y-1"
            >
              <BorderGlow className="h-full">
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-6">
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
                  <p className="mt-3 text-slate-600">{tradition.summary}</p>
                  <p className="mt-5 text-sm font-medium text-emerald-700">
                    Learn more
                  </p>
                </article>
              </BorderGlow>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
