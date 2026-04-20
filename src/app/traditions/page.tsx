import Image from "next/image";
import Link from "next/link";

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
    <main className="relative isolate min-h-screen bg-slate-50 text-slate-900">
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

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Qima Qama
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Traditions</h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Explore important iTaukei traditions, practices, symbols, and ceremonies.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {traditions.map((tradition) => (
            <article
              key={tradition.slug}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
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
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
