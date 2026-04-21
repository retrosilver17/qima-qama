import Link from "next/link";
import { notFound } from "next/navigation";

import { provinces } from "../../data/provinces";

const divisionThemes = {
  "Wasewase E Loma": {
    greeting: "Bula Vinaka",
    identity:
      "This yasana carries strong ties to leadership, river systems, inland communities, and enduring vanua relationships.",
    significance:
      "Its place within Wasewase E Loma connects cultural continuity with important historical and civic influence.",
  },
  "Wasewase E Na Tokalau": {
    greeting: "Malo Bula",
    identity:
      "This yasana is shaped by island movement, ocean pathways, ceremonial exchange, and closely held community identity.",
    significance:
      "Its maritime setting gives it a distinctive place in Fiji’s cultural memory and life within Wasewase E Na Tokalau.",
  },
  "Wasewase E Na Vualiku": {
    greeting: "Bula Re",
    identity:
      "This yasana reflects close ties to land, community resilience, agricultural life, and inherited northern identity.",
    significance:
      "Its contribution to Wasewase E Na Vualiku lies in both cultural depth and the strength of local community networks.",
  },
  "Wasewase E Na Yasayasa Vaka-Ra": {
    greeting: "Colo Gali",
    identity:
      "This yasana brings together strong local character, active community life, and traditions shaped by both inland and coastal spaces.",
    significance:
      "Its regional role reflects cultural continuity, movement, and practical influence across Wasewase E Na Yasayasa Vaka-Ra.",
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

const divisionCardStyles = {
  "Wasewase E Loma": "border-sky-100 bg-sky-50 text-sky-800",
  "Wasewase E Na Tokalau": "border-amber-100 bg-amber-50 text-amber-800",
  "Wasewase E Na Vualiku": "border-teal-100 bg-teal-50 text-teal-800",
  "Wasewase E Na Yasayasa Vaka-Ra":
    "border-emerald-100 bg-emerald-50 text-emerald-800",
} as const;

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
  const divisionCardStyle =
    divisionCardStyles[province.division as keyof typeof divisionCardStyles];
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
            Yasana Profile
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
                A subtle cultural greeting layer helps each yasana page feel warm,
                grounded, and visually connected to the rest of the site.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div
              className={`rounded-2xl border p-5 shadow-sm backdrop-blur ${divisionCardStyle}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Wasewase
              </p>
              <p className="mt-2 text-lg font-semibold">
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

        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                YASANA DATA
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">
                {province.name}
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              {province.description}
            </p>
          </div>

          {"yasanaData" in province && province.yasanaData ? (
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {province.yasanaData.map((item) => (
                <article
                  key={`${province.slug}-${item.label}`}
                  className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg leading-8 font-semibold text-slate-900">
                    {item.value}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-slate-50/80 p-6">
              <p className="text-sm leading-7 text-slate-600">
                Structured yasana data will be added here once the specific
                cavuti, turaga, and related details are prepared for this page.
              </p>
            </div>
          )}
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/provinces"
            className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
          >
            Back to Yasana
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
