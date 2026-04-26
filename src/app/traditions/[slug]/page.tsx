import Image from "next/image";
import Link from "next/link";

import { traditions } from "../../data/traditions";

const mekeStyles = [
  {
    title: "Seasea",
    description:
      "A graceful standing meke traditionally performed by women for special occasions and ceremonial entertainment.",
    image: "/images/meke-styles/seasea.png",
    imageClassName: "",
  },
  {
    title: "Vakamalolo",
    description:
      "A seated meke style, often performed with controlled movement and strong storytelling emphasis.",
    image: "/images/meke-styles/vakamalolo.png",
    imageClassName: "",
  },
  {
    title: "Meke i Wau",
    description:
      "A powerful men's club dance known for strength, precision, and ceremonial performance.",
    image: "/images/meke-styles/meke-i-wau.png",
    imageClassName: "",
  },
  {
    title: "Meke Wesi",
    description:
      "A spear-based men's meke with a warrior character, highlighting discipline, energy, and dramatic movement.",
    image: "/images/meke-styles/meke-wesi.png",
    imageClassName: "object-[center_28%]",
  },
] as const;

export default async function TraditionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tradition = traditions.find((item) => item.slug === slug);

  if (!tradition) {
    return (
      <main className="masi-page min-h-screen text-slate-900">
        <section className="mx-auto max-w-4xl px-6 py-20">
          <h1 className="text-3xl font-bold">Tradition not found</h1>
          <p className="mt-4 text-slate-600">
            We could not find the tradition you are looking for.
          </p>
          <Link
            href="/traditions"
            className="mt-6 inline-block text-sm font-medium text-emerald-700 hover:underline"
          >
            Back to Traditions
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="masi-page min-h-screen text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Fijian Tradition
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl md:text-6xl">
            {tradition.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-slate-600">
            {tradition.summary}
          </p>
        </div>

        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <Image
            src={tradition.image}
            alt={tradition.title}
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Cultural Meaning</h2>
            <p className="mt-4 text-slate-700">{tradition.meaning}</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Why It Matters</h2>
            <p className="mt-4 text-slate-700">{tradition.whyItMatters}</p>
          </section>
        </div>

        {tradition.slug === "meke" ? (
          <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Meke Styles
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                Meke Styles
              </h2>

              <p className="mt-4 text-slate-700">
                Meke includes several traditional styles, each with its own
                purpose, movement, and ceremonial meaning — from seated
                performances and graceful women&apos;s dances to powerful warrior
                forms.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {mekeStyles.map((style) => (
                <article
                  key={style.title}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm"
                >
                  <div className="relative aspect-[4/3] border-b border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
                    <Image
                      src={style.image}
                      alt={style.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className={`object-cover ${style.imageClassName ?? ""}`}
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {style.title}
                    </h3>
                    <p className="mt-3 text-slate-700">{style.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Styles and names may vary slightly by vanua and tradition.
            </p>
          </section>
        ) : null}

        <div className="mt-10 flex gap-4">
          <Link
            href="/traditions"
            className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-800"
          >
            Back to Traditions
          </Link>

          <Link
            href="/"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 hover:bg-slate-100"
          >
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}
