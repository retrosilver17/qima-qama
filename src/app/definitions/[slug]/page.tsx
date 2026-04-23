import Link from "next/link";
import { notFound } from "next/navigation";

import { definitions, fijianDefinitions } from "../../definitions";

const detailGreetings = [
  {
    phrase: "Bula Vinaka",
    className:
      "left-[4%] top-[10%] text-[2rem] text-emerald-700/12 md:text-[4rem]",
  },
  {
    phrase: "Bula Re",
    className:
      "right-[8%] top-[22%] text-[1.7rem] text-slate-900/10 md:text-[3.1rem]",
  },
  {
    phrase: "Malo Bula",
    className:
      "left-[16%] top-[68%] text-[1.75rem] text-amber-700/12 md:text-[3.2rem]",
  },
];

export default async function DefinitionDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ language?: string }>;
}) {
  const { slug } = await params;
  const { language } = await searchParams;
  const isFijianMode = language === "fijian";
  const collection = isFijianMode ? fijianDefinitions : definitions;
  const definition = collection.find((item) => item.slug === slug);

  if (!definition) {
    notFound();
  }

  const relatedDefinitions = collection
    .filter((item) => item.slug !== definition.slug)
    .slice(0, 4);
  const definitionsHref = isFijianMode
    ? "/definitions?language=fijian"
    : "/definitions";

  return (
    <main className="relative isolate min-h-screen bg-slate-50 text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden"
      >
        <div className="relative mx-auto h-screen max-w-7xl">
          {detailGreetings.map((greeting) => (
            <span
              key={greeting.phrase}
              className={`hero-greeting absolute font-serif font-semibold uppercase tracking-[0.18em] ${greeting.className}`}
            >
              {greeting.phrase}
            </span>
          ))}
        </div>
      </div>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/50 p-8 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(240px,0.8fr)] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Definition
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                {definition.term}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                {isFijianMode
                  ? "Na vosa qo e vakaraitaki vata kei na kena ivakamacala vakaViti."
                  : "A term used within Fijian ceremonial, cultural, and relational contexts, presented here with a clearer meaning and a small amount of surrounding context."}
              </p>
            </div>

            <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Category
              </p>
              <p className="mt-3 text-2xl font-semibold text-emerald-800">
                {isFijianMode ? "iVakamacala vakaViti" : "Cultural Glossary"}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {isFijianMode
                  ? "Oqo e dua na tiki ni kumuni vosa kei na kena ivakamacala vakaViti."
                  : "This page is part of the Definitions collection for ceremonial and cultural vocabulary."}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Meaning
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              What {definition.term} Refers To
            </h2>
            <p className="mt-4 leading-8 text-slate-700">{definition.meaning}</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Context
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              Why This Term Matters
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              {isFijianMode
                ? `Na vosa me vaka na ${definition.term} e vukea na maroroi ni vosa, kena ibalebale, kei na veika e dau vakayagataki kina.`
                : `Terms like ${definition.term} help explain important parts of Fijian ceremonial life, language, and traditional protocol. Building this glossary carefully makes the site more useful, respectful, and easier to learn from over time.`}
            </p>
          </section>
        </div>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Related Terms
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                Continue Exploring
              </h2>
            </div>

            <Link
              href={definitionsHref}
              className="text-sm font-medium text-emerald-700 hover:underline"
            >
              View all definitions
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {relatedDefinitions.map((item) => (
              <Link
                key={item.slug}
                href={
                  isFijianMode
                    ? `/definitions/${item.slug}?language=fijian`
                    : `/definitions/${item.slug}`
                }
              >
                <article className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-md">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.term}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.meaning}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={definitionsHref}
            className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
          >
            Back to Definitions
          </Link>

          <Link
            href="/"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
          >
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
