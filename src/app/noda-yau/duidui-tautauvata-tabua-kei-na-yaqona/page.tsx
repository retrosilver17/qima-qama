import Image from "next/image";
import Link from "next/link";

const topicGreetings = [
  {
    phrase: "Noda iYau",
    className:
      "left-[4%] top-[8%] text-[2rem] text-emerald-700/12 md:text-[4rem]",
  },
  {
    phrase: "Tabua",
    className:
      "right-[8%] top-[20%] text-[1.7rem] text-slate-900/10 md:text-[3.1rem]",
  },
  {
    phrase: "Yaqona",
    className:
      "left-[12%] top-[68%] text-[1.7rem] text-amber-700/12 md:text-[3.2rem]",
  },
];

const tableRows = [
  {
    group: "iKau",
    tabua: [
      "1. Tama: A...oi...oi!!",
      "(våSawaieke)",
      "2. Cavuti ni vanua e cabo tiko kina na iyau",
      "3. Cavuti ni vanua e cabo tiko yani kina na iyau",
    ],
    yaqona: [
      "1. Keitou sa cakacaka mada yani!",
      "2. Cavuti ni vanua e cabo tiko kina na iyau",
      "3. Cavuti ni vanua e cabo tiko yani kina na iyau",
    ],
  },
  {
    group: "Lewena",
    tabua: [
      "4. Inaki ni iyau",
      "5. Kerei taumada na veivosoti de na mani basika na baleca/ malumalumu",
    ],
    yaqona: [
      "4. Inaki ni iyau",
      "5. Kerei taumada na veivosoti de na mani basika na baleca/ malumalumu",
    ],
  },
  {
    group: "Tinitini",
    tabua: [
      "6. Cavuti tale na vanua e cabo tiko yani kina na iyau",
      "7. Cavuti ni vanua e cabo tiko kina na iyau",
      "8. Soraki: Ena kena itinitini mai nomu vanua.",
    ],
    yaqona: [
      "6. Cavuti tale na vanua e cabo tiko yani kina na iyau",
      "7. Cavuti ni vanua e cabo tiko kina na iyau",
      "8. Soraki: Ena kena itinitini mai nomu vanua.",
    ],
  },
];

export default function TabuaYaqonaTopicPage() {
  return (
    <main className="masi-page relative isolate min-h-screen text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden"
      >
        <div className="relative mx-auto h-screen max-w-7xl">
          {topicGreetings.map((greeting) => (
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
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white/92 shadow-sm backdrop-blur">
          <div
            aria-hidden="true"
            className="noda-story-drift absolute inset-0 opacity-[0.08]"
          >
            <div className="relative h-full w-[130%]">
              <Image
                src="/resources/tabua-yaqona.png"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>

          <div className="relative z-10 p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                  Noda iYau
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-emerald-800 md:text-5xl">
                  Duidui/Tautauvata Ena Cabori Ni Tabua Kei Na Yaqona.
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                  E vakaraitaki eke na itukutuku vakaViti ena dua na ituvatuva
                  maroroi vinaka, me rawarawa na vakatauvatani ni tabua kei na
                  yaqona ena nodra cabori vakavanua.
                </p>
              </div>

              <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Tuvatuva
                </p>
                <p className="mt-3 text-2xl font-semibold text-emerald-800">
                  Tabua kei na Yaqona
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Na ulutaga oqo e vakayagataka e dua na teveli me vakaraitaka na
                  duidui kei na tautauvata ni rua na iwalewale ni cabori.
                </p>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
              <div className="relative h-[280px] w-full md:h-[460px]">
                <Image
                  src="/resources/tabua-yaqona.png"
                  alt="Tabua kei na waka yaqona"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
              <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
                <div className="grid grid-cols-[140px_minmax(0,1fr)_minmax(0,1fr)] border-b border-slate-200 bg-slate-50/80 text-base font-semibold text-slate-900 md:grid-cols-[180px_minmax(0,1fr)_minmax(0,1fr)] md:text-lg">
                  <div className="border-r border-slate-200 px-4 py-5 md:px-6">Tuvatuva</div>
                  <div className="border-r border-slate-200 px-4 py-5 md:px-6">Tabua</div>
                  <div className="px-4 py-5 md:px-6">Yaqona</div>
                </div>

                {tableRows.map((row) => (
                  <div
                    key={row.group}
                    className="grid grid-cols-[140px_minmax(0,1fr)_minmax(0,1fr)] border-b border-slate-200 last:border-b-0 md:grid-cols-[180px_minmax(0,1fr)_minmax(0,1fr)]"
                  >
                    <div className="border-r border-slate-200 bg-slate-50/60 px-4 py-6 text-xl font-semibold text-slate-900 md:px-6 md:text-2xl">
                      {row.group}
                    </div>

                    <div className="border-r border-slate-200 px-4 py-6 md:px-6">
                      <div className="space-y-4 text-base leading-8 text-slate-800 md:text-lg">
                        {row.tabua.map((item) => (
                          <p key={item}>
                            {item === "(våSawaieke)" ? (
                              <span className="pl-6 md:pl-10">{item}</span>
                            ) : item.startsWith("8. Soraki:") ? (
                              <>
                                8. <strong>Soraki:</strong>
                                {item.replace("8. Soraki:", "")}
                              </>
                            ) : (
                              item
                            )}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="px-4 py-6 md:px-6">
                      <div className="space-y-4 text-base leading-8 text-slate-800 md:text-lg">
                        {row.yaqona.map((item) => (
                          <p key={item}>
                            {item.startsWith("8. Soraki:") ? (
                              <>
                                8. <strong>Soraki:</strong>
                                {item.replace("8. Soraki:", "")}
                              </>
                            ) : (
                              item
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-[1.6rem] border border-slate-200 bg-white/88 p-6 shadow-sm backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                    iVakamacala
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    E maroroi tiko ga eke na teveli me vaka e gadrevi, ia sa
                    vakarautaki ena dua na irairai e sema vinaka kei na vo ni
                    Noda iYau.
                  </p>
                </div>
              </aside>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/noda-yau"
                className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
              >
                Lesu ki Noda iYau
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
