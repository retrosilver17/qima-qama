import Link from "next/link";

import { definitions } from "../definitions";

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

export default function DefinitionsPage() {
  return (
    <main className="relative isolate min-h-screen bg-slate-50 text-slate-900">
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
        <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/50 p-8 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.85fr)] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Cultural Glossary
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                Definitions
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A clearer guide to commonly used Fijian ceremonial and cultural
                terms, presented in a format that is easier to explore and revisit.
              </p>
            </div>

            <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Collection Overview
              </p>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Total Terms
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-slate-900">
                    {definitions.length}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Focus
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-slate-600">
                    Ceremony, protocol, language, and cultural meaning.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {definitions.map((item) => (
            <Link key={item.slug} href={`/definitions/${item.slug}`}>
              <article className="group h-full rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Term
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                      {item.term}
                    </h2>
                  </div>

                  <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    Learn
                  </span>
                </div>

                <p className="mt-5 leading-7 text-slate-600">{item.meaning}</p>

                <div className="mt-6 flex items-center justify-between text-sm font-medium">
                  <span className="text-emerald-700 transition group-hover:text-emerald-800">
                    View definition
                  </span>
                  <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-700">
                    →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
