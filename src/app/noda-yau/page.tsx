import Link from "next/link";

import { MotionArticle, MotionReveal } from "../../components/motion-reveal";

const resourceGreetings = [
  {
    phrase: "Noda iYau",
    className:
      "left-[4%] top-[8%] text-[2rem] text-emerald-700/12 md:text-[4rem]",
  },
  {
    phrase: "Veiwekani",
    className:
      "right-[8%] top-[20%] text-[1.7rem] text-slate-900/10 md:text-[3rem]",
  },
  {
    phrase: "Vakavanua",
    className:
      "left-[14%] top-[66%] text-[1.8rem] text-amber-700/12 md:text-[3.3rem]",
  },
];

export default function NodaYauPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_42%,#ffffff_100%)] text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden"
      >
        <div className="relative mx-auto h-screen max-w-7xl">
          {resourceGreetings.map((greeting) => (
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
                Noda iYau
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                iYaya ni vuli vakaViti
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Oqo na tabana ni iyaya kei na veika me wiliki ena vosa vakaViti.
                Ena rawa ni vakadewataki kina na veika me baleta na vanua, na
                veiwekani, na itovo, kei na bula vakavanua.
              </p>
            </div>

            <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                iMatai ni ulutaga
              </p>
              <p className="mt-3 text-2xl font-semibold text-emerald-800">
                Veiwekani vakavanua: Veitabani
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Oqo na imatai ni itekivu ena loma ni Noda iYau, ka volai taucoko
                ga ena vosa vakaViti.
              </p>
            </div>
          </div>
          </div>
        </MotionReveal>

        <div className="mt-12">
          <div className="grid gap-6">
            <Link href="/noda-yau/gacagaca-ni-veiqaravi-ni-vakawati">
              <MotionArticle className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-emerald-200 hover:shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      Ulutaga
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-emerald-800">
                      Gacagaca ni veiqaravi ni vakawati
                    </h2>
                    <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                      E dua na wilivola vakaViti me baleta na gacagaca, na
                      veiqaravi, kei na veika bibi e dau vakayacori ena vakawati
                      vakavanua.
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                    Dolava
                  </span>
                </div>
              </MotionArticle>
            </Link>

            <Link href="/noda-yau/veika-e-dau-vakayacori-ni-bera-ni-sucu">
              <MotionArticle className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-emerald-200 hover:shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      Ulutaga
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-emerald-800">
                      Veika e dau vakayacori ni bera ni sucu: ulumatua se gone vou.
                    </h2>
                    <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                      E dua na wilivola vakaViti e baleta na itovo kei na veiqaravi
                      e sema ki na bukete, sucu, kei na marautaki ni gone vou.
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                    Dolava
                  </span>
                </div>
              </MotionArticle>
            </Link>

            <Link href="/noda-yau/na-cava-na-ibalebale-ni-yaca-na-toga">
              <MotionArticle className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-emerald-200 hover:shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      Ulutaga
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-emerald-800">
                      Na Cava na Ibalebale ni Yaca na Toga-Naqavoka?
                    </h2>
                    <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                      E dua na wilivola vakaViti me baleta na ibalebale ni yaca na
                      Toga-Naqavoka kei na veika bibi era sema kina na vanua.
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                    Dolava
                  </span>
                </div>
              </MotionArticle>
            </Link>

            <Link href="/noda-yau/veiliutaki-vakoloni-ena-colo-kei-viti-levu">
              <MotionArticle className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-emerald-200 hover:shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      Ulutaga
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-emerald-800">
                      VEILIUTAKI VAKOLONI ENA COLO KEI VITI LEVU, WILI KINA KO WAINIBUKA
                    </h2>
                    <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                      E dua na wilivola balavu e tomana na vakasama me baleta na
                      yasana, na tikina, na Buli, kei na veika e sema tiko kina
                      ko Wainibuka ena gauna vakoloni.
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                    Dolava
                  </span>
                </div>
              </MotionArticle>
            </Link>

            <Link href="/noda-yau/veiwekani-vakavanua-veitabani">
              <MotionArticle className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-emerald-200 hover:shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      Ulutaga
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-emerald-800">
                      Veiwekani vakavanua: Veitabani
                    </h2>
                    <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                      Wilika na itukutuku me baleta na veitabani ena loma ni
                      veiwekani vakavanua, kei na yavu ni vakasama me baleta na
                      veivosaki vakaturaga.
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                    Dolava
                  </span>
                </div>
              </MotionArticle>
            </Link>

            <Link href="/noda-yau/duidui-tautauvata-tabua-kei-na-yaqona">
              <MotionArticle className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-emerald-200 hover:shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      Ulutaga
                    </p>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-emerald-800">
                      Duidui/Tautauvata Ena Cabori Ni Tabua Kei Na Yaqona
                    </h2>
                    <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                      E tiko ena ulutaga oqo na itukutuku vakaViti kei na dua na
                      teveli e vakaraitaka na duidui kei na tautauvata ena cabori
                      ni tabua kei na yaqona.
                    </p>
                  </div>

                  <span className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                    Dolava
                  </span>
                </div>
              </MotionArticle>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
