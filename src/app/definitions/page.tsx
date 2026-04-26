import Link from "next/link";

import { MotionArticle, MotionReveal } from "../../components/motion-reveal";
import { definitions, fijianDefinitions } from "../definitions";

const definitionGreetings = [
  {
    phrase: "Bula Vinaka",
    className:
      "left-[4%] top-[8%] text-[2rem] text-emerald-700/12 md:text-[4.2rem]",
  },
  {
    phrase: "Bula Re",
    className:
      "right-[8%] top-[18%] text-[1.7rem] text-slate-900/10 md:text-[3.2rem]",
  },
  {
    phrase: "Malo Bula",
    className:
      "left-[14%] top-[64%] text-[1.8rem] text-amber-700/12 md:text-[3.4rem]",
  },
];

export default async function DefinitionsPage({
  searchParams,
}: {
  searchParams: Promise<{ language?: string }>;
}) {
  const { language } = await searchParams;
  const isFijianMode = language === "fijian";
  const activeDefinitions = isFijianMode ? fijianDefinitions : definitions;
  const activeTitle = isFijianMode
    ? "Fijian Words with Fijian Definitions"
    : "Fijian Words with English Definitions";
  const activeDescription = isFijianMode
    ? "Read Fijian words through Fijian explanations, preserving phrasing, cadence, and cultural context."
    : "Browse the wider English glossary for quick learning across ceremony, protocol, language, and vanua.";

  return (
    <main className="masi-page relative isolate min-h-screen overflow-hidden text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden"
      >
        <div className="relative mx-auto h-screen max-w-7xl">
          {definitionGreetings.map((greeting) => (
            <span
              key={greeting.phrase}
              className={`hero-greeting absolute font-serif font-semibold uppercase tracking-[0.18em] ${greeting.className}`}
            >
              {greeting.phrase}
            </span>
          ))}
        </div>
      </div>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <MotionReveal className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white/90 shadow-lg shadow-slate-200/70 backdrop-blur md:rounded-[2.5rem]">
          <div className="h-2 bg-[linear-gradient(90deg,#047857,#f59e0b,#0f766e)]" />
          <div className="bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/50 p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.85fr)] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Cultural Glossary
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                Definitions
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Choose between the wider English glossary and a Fijian-language
                definition set for words that should stay close to their original
                wording.
              </p>

              <div
                aria-label="Definition language"
                className="mt-8 inline-flex max-w-full flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white/80 p-2 shadow-sm"
              >
                <Link
                  href="/definitions"
                  className={`min-h-11 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                    !isFijianMode
                      ? "bg-emerald-700 text-white shadow-sm"
                      : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                  }`}
                >
                  English definitions
                </Link>
                <Link
                  href="/definitions?language=fijian"
                  className={`min-h-11 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                    isFijianMode
                      ? "bg-emerald-700 text-white shadow-sm"
                      : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                  }`}
                >
                  iVakamacala vakaViti
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/80 bg-white/90 p-6 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Collection Overview
              </p>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Total Terms
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-slate-900">
                    {activeDefinitions.length}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Focus
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-slate-600">
                    {activeTitle}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          </div>
        </MotionReveal>

        <MotionReveal
          delay={0.05}
          className="mt-8 grid gap-4 rounded-[1.75rem] border border-slate-200 bg-white/85 p-5 shadow-sm backdrop-blur sm:grid-cols-3"
        >
          {[
            ["Mode", isFijianMode ? "VakaViti" : "English"],
            ["Entries", `${activeDefinitions.length} terms`],
            ["Reading path", isFijianMode ? "Language first" : "Quick reference"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {label}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
            </div>
          ))}
          <p className="sm:col-span-3 text-sm leading-6 text-slate-600">
            {activeDescription}
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {activeDefinitions.map((item, index) => (
            <Link
              key={item.slug}
              href={
                isFijianMode
                  ? `/definitions/${item.slug}?language=fijian`
                  : `/definitions/${item.slug}`
              }
            >
              <MotionArticle
                delay={Math.min(index * 0.025, 0.18)}
                className="group relative h-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-emerald-200 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-600 via-amber-400 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {isFijianMode ? "Vosa" : "Term"}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                      {item.term}
                    </h2>
                  </div>

                  <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    {isFijianMode ? "Wilika" : "Learn"}
                  </span>
                </div>

                <p className="mt-5 leading-7 text-slate-600">{item.meaning}</p>

                <div className="mt-6 flex items-center justify-between text-sm font-medium">
                  <span className="text-emerald-700 transition group-hover:text-emerald-800">
                    {isFijianMode ? "Raica na ivakamacala" : "View definition"}
                  </span>
                  <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-700">
                    →
                  </span>
                </div>
              </MotionArticle>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
