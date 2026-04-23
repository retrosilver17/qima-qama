import Image from "next/image";
import Link from "next/link";

import { MotionArticle, MotionReveal } from "../../components/motion-reveal";
import { traditions } from "../data/traditions";

const traditionGreetings = [
  {
    phrase: "Bula Vinaka",
    className:
      "left-[5%] top-[9%] text-[1.9rem] text-emerald-700/12 md:text-[4rem]",
  },
  {
    phrase: "Colo Gali",
    className:
      "right-[9%] top-[16%] text-[1.6rem] text-slate-900/10 md:text-[3.2rem]",
  },
  {
    phrase: "Cola Vina Riki",
    className:
      "left-[9%] top-[44%] text-[1.5rem] text-emerald-900/10 md:text-[2.8rem]",
  },
  {
    phrase: "Bula Re",
    className:
      "right-[11%] top-[58%] text-[1.7rem] text-emerald-700/12 md:text-[3.4rem]",
  },
  {
    phrase: "Bula Sia",
    className:
      "left-[34%] top-[24%] text-[1.45rem] text-slate-900/10 md:text-[2.5rem]",
  },
  {
    phrase: "Malo Bula",
    className:
      "left-[41%] top-[72%] text-[1.6rem] text-amber-700/12 md:text-[3rem]",
  },
  {
    phrase: "Bula Nakwa",
    className:
      "right-[18%] top-[36%] text-[1.8rem] text-emerald-800/14 md:text-[3.6rem]",
  },
];

export default function TraditionsPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_42%,#ffffff_100%)] text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden"
      >
        <div className="relative mx-auto h-screen max-w-7xl">
          {traditionGreetings.map((greeting) => (
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
                  Qima Qama
                </p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                  Traditions
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  Explore important iTaukei traditions, practices, symbols, and ceremonies
                  through a clear cultural guide.
                </p>
              </div>

              <div className="rounded-3xl border border-white/80 bg-white/90 p-6 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Collection Overview
                </p>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Total Entries
                    </dt>
                    <dd className="mt-1 text-2xl font-semibold text-slate-900">
                      {traditions.length}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Focus
                    </dt>
                    <dd className="mt-1 text-base leading-7 text-slate-600">
                      Ceremony, identity, symbols, and vanua.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </MotionReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {traditions.map((tradition, index) => (
            <MotionArticle
              key={tradition.slug}
              delay={Math.min(index * 0.035, 0.2)}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:border-emerald-200 hover:shadow-lg"
            >
              <div className="h-1 bg-gradient-to-r from-emerald-600 via-amber-400 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <Image
                  src={tradition.image}
                  alt={tradition.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold">{tradition.title}</h2>

                <p className="mt-3 text-slate-600">{tradition.summary}</p>

                <Link
                  href={`/traditions/${tradition.slug}`}
                  className="mt-5 inline-block text-sm font-medium text-emerald-700 hover:underline"
                >
                  View tradition
                </Link>
              </div>
            </MotionArticle>
          ))}
        </div>
      </section>
    </main>
  );
}
