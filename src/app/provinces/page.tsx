import { MotionArticle, MotionReveal } from "../../components/motion-reveal";
import { ProvinceBrowser } from "../../components/province-browser";

const provinceDivisions = [
  {
    name: "Wasewase E Na Vualiku",
    provinces: ["Bua", "Cakaudrove", "Macuata"],
    className: "border-teal-100 bg-teal-50 text-teal-800",
  },
  {
    name: "Wasewase E Na Tokalau",
    provinces: ["Lau", "Lomaiviti", "Kadavu"],
    className: "border-amber-100 bg-amber-50 text-amber-800",
  },
  {
    name: "Wasewase E Loma",
    provinces: ["Tailevu", "Naitasiri", "Rewa", "Namosi", "Serua"],
    className: "border-sky-100 bg-sky-50 text-sky-800",
  },
  {
    name: "Wasewase E Na Yasayasa Vaka-Ra",
    provinces: ["Ba", "Nadroga", "Ra"],
    className: "border-emerald-100 bg-emerald-50 text-emerald-800",
  },
] as const;

const provinceGreetings = [
  {
    phrase: "Bula Vinaka",
    className:
      "left-[4%] top-[8%] text-[2rem] text-emerald-700/12 md:text-[4.25rem]",
  },
  {
    phrase: "Colo Gali",
    className:
      "right-[8%] top-[18%] text-[1.7rem] text-slate-900/10 md:text-[3.2rem]",
  },
  {
    phrase: "Malo Bula",
    className:
      "left-[12%] top-[62%] text-[1.8rem] text-amber-700/12 md:text-[3.4rem]",
  },
];

export default function ProvincesPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_42%,#ffffff_100%)] text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden"
      >
        <div className="relative mx-auto h-screen max-w-7xl">
          {provinceGreetings.map((greeting) => (
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
                  Yasana Directory
                </p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                  Vei Yasana E Viti
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  Explore Fiji’s 14 yasana through wasewase, land area, and
                  cultural identity in a clearer, more unified guide.
                </p>
              </div>

              <div className="rounded-3xl border border-white/80 bg-white/90 p-6 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  At A Glance
                </p>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Total Yasana
                    </dt>
                    <dd className="mt-1 text-2xl font-semibold text-slate-900">
                      14
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Wasewase Covered
                    </dt>
                    <dd className="mt-1 text-2xl font-semibold text-slate-900">
                      4
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Focus
                    </dt>
                    <dd className="mt-1 text-base leading-7 text-slate-600">
                      Vanua, geography, identity, and yasana character.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </MotionReveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {provinceDivisions.map((division, index) => (
            <MotionArticle
              key={division.name}
              delay={Math.min(index * 0.035, 0.16)}
              className={`rounded-2xl border px-4 py-4 shadow-sm ${division.className}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                Wasewase
              </p>
              <p className="mt-2 text-lg font-semibold leading-7">
                {division.name}
              </p>
              <p className="mt-3 text-sm leading-6 opacity-90">
                {division.provinces.join(" • ")}
              </p>
            </MotionArticle>
          ))}
        </div>
        <ProvinceBrowser />
      </section>
    </main>
  );
}
