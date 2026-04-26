import Link from "next/link";

import { MotionArticle, MotionReveal } from "../../components/motion-reveal";
import { fijianIdioms } from "../data/idioms";

const idiomGreetings = [
  {
    phrase: "Na iVosavosa",
    className:
      "left-[4%] top-[10%] text-[1.8rem] text-emerald-700/12 md:text-[3.8rem]",
  },
  {
    phrase: "vakaViti",
    className:
      "right-[8%] top-[22%] text-[1.7rem] text-slate-900/10 md:text-[3.1rem]",
  },
  {
    phrase: "Vosa Vakaviti",
    className:
      "left-[14%] top-[68%] text-[1.65rem] text-amber-700/12 md:text-[3.2rem]",
  },
];

export default function NaIVosavosaVakaVitiPage() {
  return (
    <main className="masi-page relative isolate min-h-screen overflow-hidden text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden"
      >
        <div className="relative mx-auto h-screen max-w-7xl">
          {idiomGreetings.map((greeting) => (
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
                Fijian Idioms
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                Na iVosavosa vakaViti
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A growing collection of Fijian idioms and their meanings, kept in
                Fijian so the voice of each expression stays close to the language.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#idioms"
                  className="min-h-11 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
                >
                  Browse idioms
                </a>
                <Link
                  href="/definitions?language=fijian"
                  className="min-h-11 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
                >
                  Fijian definitions
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
                    Total Idioms
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-slate-900">
                    {fijianIdioms.length}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Focus
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-slate-600">
                    Figurative speech, everyday wisdom, and cultural expression.
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
            ["Purpose", "Everyday wisdom"],
            ["Format", "Fijian phrase and meaning"],
            ["Collection", `${fijianIdioms.length} idioms`],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {label}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
            </div>
          ))}
          <p className="sm:col-span-3 text-sm leading-6 text-slate-600">
            Idioms carry meaning through image, rhythm, and shared cultural memory.
            This page keeps each expression easy to scan while giving the wording
            room to breathe.
          </p>
        </MotionReveal>

        <div id="idioms" className="mt-12 grid scroll-mt-24 gap-6 md:grid-cols-2">
          {fijianIdioms.map((idiom, index) => (
            <MotionArticle
              key={idiom.slug}
              delay={Math.min(index * 0.035, 0.2)}
              className="group relative h-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-emerald-200 hover:shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-600 via-amber-400 to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                iVosavosa
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                {idiom.term}
              </h2>
              <p className="mt-5 leading-8 text-slate-700">{idiom.meaning}</p>
            </MotionArticle>
          ))}
        </div>
      </section>
    </main>
  );
}
