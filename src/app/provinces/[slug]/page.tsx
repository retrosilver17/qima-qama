import Link from "next/link";
import { notFound } from "next/navigation";

import { provinces } from "../../data/provinces";

const divisionThemes = {
  Central: {
    greeting: "Bula Vinaka",
    identity:
      "This province carries strong ties to leadership, river systems, inland communities, and enduring vanua relationships.",
    significance:
      "Its place within the Central Division connects cultural continuity with important historical and civic influence.",
  },
  Eastern: {
    greeting: "Malo Bula",
    identity:
      "This province is shaped by island movement, ocean pathways, ceremonial exchange, and closely held community identity.",
    significance:
      "Its maritime setting gives it a distinctive place in Fiji’s cultural memory and eastern provincial life.",
  },
  Northern: {
    greeting: "Bula Re",
    identity:
      "This province reflects close ties to land, community resilience, agricultural life, and inherited northern identity.",
    significance:
      "Its contribution to the Northern Division lies in both cultural depth and the strength of local community networks.",
  },
  Western: {
    greeting: "Colo Gali",
    identity:
      "This province brings together strong provincial character, active community life, and traditions shaped by both inland and coastal spaces.",
    significance:
      "Its regional role reflects cultural continuity, movement, and practical influence across western Fiji.",
  },
} as const;

const provinceAccents: Record<string, string[]> = {
  ba: ["Colo Gali", "Bula Vinaka", "Cola Vina Riki"],
  bua: ["Bula Re", "Malo Bula", "Bula Vinaka"],
  cakaudrove: ["Bula Re", "Bula Vinaka", "Malo Bula"],
  kadavu: ["Malo Bula", "Bula Vinaka", "Bula Sia"],
  lau: ["Malo Bula", "Bula Vinaka", "Bula Sia"],
  lomaiviti: ["Malo Bula", "Bula Re", "Bula Vinaka"],
  macuata: ["Bula Re", "Malo Bula", "Bula Vinaka"],
  "nadroga-navosa": ["Colo Gali", "Bula Vinaka", "Bula Sia"],
  naitasiri: ["Bula Vinaka", "Bula Re", "Malo Bula"],
  namosi: ["Bula Vinaka", "Bula Sia", "Malo Bula"],
  ra: ["Colo Gali", "Bula Vinaka", "Malo Bula"],
  rewa: ["Bula Vinaka", "Malo Bula", "Bula Re"],
  serua: ["Bula Vinaka", "Malo Bula", "Bula Sia"],
  tailevu: ["Bula Vinaka", "Bula Re", "Malo Bula"],
};

const accentPositions = [
  "left-[4%] top-[10%] text-[2rem] text-emerald-700/12 md:text-[4rem]",
  "right-[7%] top-[24%] text-[1.7rem] text-slate-900/10 md:text-[3.2rem]",
  "left-[16%] top-[64%] text-[1.8rem] text-amber-700/12 md:text-[3.4rem]",
];

export default async function ProvinceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const province = provinces.find((item) => item.slug === slug);

  if (!province) {
    notFound();
  }

  const divisionTheme = divisionThemes[province.division as keyof typeof divisionThemes];
  const accents = provinceAccents[province.slug] ?? [
    divisionTheme.greeting,
    "Bula Vinaka",
    "Malo Bula",
  ];

  return (
    <main className="relative isolate min-h-screen bg-slate-50 text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden"
      >
        <div className="relative mx-auto h-screen max-w-7xl">
          {accents.map((phrase, index) => (
            <span
              key={`${province.slug}-${phrase}`}
              className={`hero-greeting absolute font-serif font-semibold uppercase tracking-[0.18em] ${accentPositions[index]}`}
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/60 p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Province Profile
          </p>

          <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.9fr)] lg:items-end">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                {province.name}
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                {province.description}
              </p>
            </div>

            <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Welcome Accent
              </p>
              <p className="mt-3 text-2xl font-semibold text-emerald-800">
                {divisionTheme.greeting}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                A subtle cultural greeting layer helps each province page feel warm,
                grounded, and visually connected to the rest of the site.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Division
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {province.division}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Land Area
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {province.area}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Cultural Focus
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                Vanua, identity, community
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Overview
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              About {province.name}
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              {province.name} is part of Fiji’s {province.division} Division and covers{" "}
              {province.area}. {province.description}
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Cultural Identity
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              Provincial Character
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              {divisionTheme.identity}
            </p>
          </section>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Geography
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              Land And Place
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              The scale and setting of {province.name} help shape everyday life,
              movement, and cultural expression. Its land area of {province.area}
              contributes to how communities are connected across village, district,
              and provincial spaces.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Significance
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              Why {province.name} Matters
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              {province.name} contributes to Fiji’s broader cultural landscape through
              its people, vanua, and provincial identity. {divisionTheme.significance}
            </p>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/provinces"
            className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
          >
            Back to Provinces
          </Link>

          <Link
            href="/traditions"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
          >
            Explore Traditions
          </Link>
        </div>
      </section>
    </main>
  );
}
