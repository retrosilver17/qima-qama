import Image from "next/image";
import Link from "next/link";

const topicGreetings = [
  {
    phrase: "Noda iYau",
    className:
      "left-[4%] top-[8%] text-[2rem] text-emerald-700/12 md:text-[4rem]",
  },
  {
    phrase: "Veitabani",
    className:
      "right-[8%] top-[20%] text-[1.7rem] text-slate-900/10 md:text-[3.1rem]",
  },
  {
    phrase: "Veiwekani Vakavanua",
    className:
      "left-[10%] top-[68%] text-[1.5rem] text-amber-700/12 md:text-[3rem]",
  },
];

const paragraphs = [
  "E dua tale ga na veiwekani vakavanua eda se vakadinadinataka tiko ena gauna edai na veitabani. Ena vosa na tabani eda kila kina ni, kevaka e caka e dua na ka, ena dua tale na ka e caka muria yani me vaka me veisa, se vakaruataki. Qo me vaka e dau caka ena gunu yaqona. Ni sa oti na imatai ni talo ena talo tale vakarua me tabani ra qai gunu na kena vo.",
  "Na veiwekani vakavanua qo e baleta tiko e rua na vanua. E dua na kena itukutuku e tukuni ni o rau na vanua qo e tautauvata na nodrau itutu vakavanua. Ke rau sa vanua turaga, se liga ni magiti ruarua, erau na veitabani tale ga. E dua tale na kena ivakamacala ni veitavaleni na nodrau vu na vanua e rua qo. Ena rawa ni tu tale eso na ivakamacala rau veitabani kina e rua na vanua.",
  "Ia e dua ga na tikina e matata nira dau vakayacora na lewenivanua e rua qo na ivakarau ni veiqati ena sala ni veivakadrukai. Era na veidouvaki, ra veisiosiotaki, me vaka ga na ivakarau ni veitavaleni. Ena sega ni vinakata e dua me malumalumu se druka. Ena cakava kecega na ivaliwale se ilawaki me vakadrukai kena isa kina. Eso eda na dredrevaka, eso eda na rarawa kina. Era na dau veisavosa ena kena ivakatagedegede kece, vinaka se ca. Eda na lega ga na rogoci ira tiko. Ia na veivosa kei na veika ra cakava era sega sara ni milamila kina.",
  "Na veiwekani vakavanua qo e sega ni dodonu me na lai vakamavoataka se vakaleqa na nodrau veimaliwai. E caka me ka ni lasa, cigomi tale ga ena yasana ruarua.",
  "E Tailevu e toka kina e vica na vanua veitabani, meu cavuta e vica. O Taivugalei (Natuva, Nameka, Vatukarasa) eratou veitabani kei Wainibuka. O Dawasamu, ratou veitabani kei Navunisole. O Tokatoka ratou veitabani kei Nakelo. Ratou dau kacivi ratou na wekadratou mai Tokatoka na turaga ni Nakelo me ratou bati kalavo, ratou dau sauma lesu mai na turaga ni Tokatoka ena bati balei.",
];

export default function VeitabaniTopicPage() {
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
                src="/resources/veitabani-hero.png"
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

                <h1 className="mt-4 text-4xl font-bold tracking-tight text-emerald-800 md:text-6xl">
                  Veiwekani vakavanua: Veitabani
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                  E dua na wilivola vakaViti me baleta na veitabani, na veiwekani
                  vakavanua, kei na iwalewale ni veivosaki kei na veimaliwai ni
                  veivanua.
                </p>
              </div>

              <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Wilivola
                </p>
                <p className="mt-3 text-2xl font-semibold text-emerald-800">
                  Veitabani
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  E vakarautaki me wiliki vakamalua, me rawarawa na muria na
                  italanoa, ka me tiko ga na vakaturaga ni kena irairai.
                </p>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/resources/veitabani-hero.png"
                  alt="Rua na tagane vakaViti era veivosaki ena marau"
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
              <div className="space-y-6">
                {paragraphs.map((paragraph, index) => (
                  <article
                    key={`${index}-${paragraph.slice(0, 24)}`}
                    className="rounded-[1.6rem] border border-slate-200 bg-white/88 p-6 shadow-sm backdrop-blur md:p-7"
                  >
                    <p className="text-[1.06rem] leading-9 text-slate-800">
                      {paragraph}
                    </p>
                  </article>
                ))}
              </div>

              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-[1.6rem] border border-slate-200 bg-white/88 p-6 shadow-sm backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                    iVakamacala
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Na ulutaga oqo e tabaka na ibalebale ni veitabani kei na sala
                    e vakayacori kina na veimaliwai vakavanua ena vosa, itovo, kei
                    na lasa vakavanua.
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
