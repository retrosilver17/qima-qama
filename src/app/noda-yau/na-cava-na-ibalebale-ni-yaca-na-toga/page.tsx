import Image from "next/image";
import Link from "next/link";

const topicGreetings = [
  {
    phrase: "Noda iYau",
    className:
      "left-[4%] top-[8%] text-[2rem] text-emerald-700/12 md:text-[4rem]",
  },
  {
    phrase: "Toga-Naqavoka",
    className:
      "right-[8%] top-[20%] text-[1.5rem] text-slate-900/10 md:text-[2.9rem]",
  },
  {
    phrase: "Naqavoka",
    className:
      "left-[12%] top-[68%] text-[1.7rem] text-amber-700/12 md:text-[3.2rem]",
  },
];

const storyTitle = "Na Cava na Ibalebale ni Yaca na Toga-Naqavoka?";

const storyParagraphs = [
  "E vuga na veivanua e Viti e vakayacani ena Toga, me vakataki Togalevu, Togavere, Natogadravu, ia o Toga-Naqavoka e ivakananumi ni nodra a veisisivi siwa o Mocikiciki, na qase ni Toga, kei Nauluwavu mai Naitasiri. Na bati ni siwa nei Mocikiciki e a yaco sara iToga-Matanisiga ka siwata mai e dua na ucu ni qele ka bulu koto kina e dua na kawa vakaTui Toga. Ni sa yavia tiko mai o Mocikiciki na nona siwa e kurabui ni sa tu e matana e dua na yanuyanu lalai ka ra tu kina na veimatagali vuata; na vudi, jia, dawa, na liganimarama ... . Ni sa matasarasara tu o Mocikiciki sa rogo mai e dua na domo, “O au na luvei Tui Toga. Mo yalo vinaka mo maroroya noqu qavokavoka ka bulu toka ena ucu ni qele o siwata mai qo.” Sa mani buluta vakavinaka na ucuna oya o Mocikiciki ka vakatoka sara na vanua o ya me yacana o Toga-Naqavoka.",
  "Ena gauna oqo e se bula tiko nodra veiwekanu na vanua e rua, o Toga-Naqavoka kei Toga-Matanisiga, ka dua na kena ivakadinadina na nodraitou a mai qaravi tiko mai Toga-Naqavoka na iqaiqai mai Toga-Matanisiga ena Keba Levu ni Mataveitokani ni Lotu Wesele ena Pasifika ka a yaco mai Davuilevu ena 1952.",
];

const detailRows = [
  "Vanua: Toga-Naqavoka",
  "Tikina: Rewa",
  "Yasana: Rewa",
  "A i cavuti: Nanokonoko, Vunisa na Roko Tui Toga, Na Vunivalu",
  "Matanitu vakavanua: Burebasaga",
  "Iliuliu vakavanua: Roko Tui Dreketi, Na Vunivalu",
  "Itavi vakavanua: Bati; era dau yadrava na Turaga/Marama Roko Tui Dreketi ena veivanua era qiva.",
  "Nodra Kalou vu: Ro Nasau; na nodra gone lutu dra o Ro Sovanatabua, kena waqawaqa na Ose Vula.",
  "Nodra manumanu: Na Vokai",
  "Nodra kau: Na Vudi",
  "Nodra meke: Na Rua-sa; ra meke vata na turaga kei na marama.",
  "Vakayagataki na moto, iwau, iri, kiakava, iula, mada.",
  "Ukuuku ni meke:",
  "Liku: vasili se qai, suluka ni tiaina se vudi.",
  "Salusalu: vono",
  "Vesa: vono, icibi, suluka",
  "Iqisa: qilaiso loaloa, rerega",
  "Kedra vivili: kaibuli-ni-sova, sici-moto, sici-mata-dra, sici-qalikavutu.",
  "Kedra ika: kurukoto, vo-loa, rewai, deke, sikasika, kadikadi (ura), moci, tiatia, dudumoto.",
  "Kedra kakana dina: Sulo, rauva, tivoli, uvi, vudi, uto, tiaina, kaile, via.",
  "Kedra draunikau: Drau-ni-sulo, ota, dri-na-voka (karisi ni waidranu)",
  "Kedra vuata: Dawa Medra wai-ni-gunu: Waidroka, bu (niu), dovu ni Viti, yaqona.",
  "Nodra iyau: Tabua, ibe, masi, ketekete, liku, iroi, kituniwai, moto, iwau, mada, bavelo, tabili, i doko, sova ni magiti/sili kai (tali mai na veilawa; na veilawa e kau vaka na gasau, ia, e kadava na vunikau lelevu).",
  "Na Tama: Na tama sa ikoya na nodra vaka-yadrataki e dua na turaga, se dua na marama. Era dau tama na turaga kei na marama talega.",
  "Nodra vosa ni tama na turaga na: “Du -o-o!”",
  "Nodra vosa ni tama na marama na: “Dua! Dua! Dua!”",
  "E dau tamaki talega na ulu ni yau; na tabua, ka vaqo na vosa ni tama:",
  "Cavuta o ira na tubetube yani, “U..wa! Oi..Oi..U!”",
  "Sa na camani mai ena, “U…wa! Oi…Oi…U U U U!”",
];

export default function TogaNaqavokaPage() {
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
                src="/resources/na-cava-na-ibalebale-ni-yaca-na-toga.png"
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

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-emerald-800 md:text-5xl">
                  {storyTitle}
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                  E dua na wilivola vakaViti me baleta na yaca, na itukutuku ni
                  vanua, kei na kena isema vakavanua kei Toga-Naqavoka.
                </p>
              </div>

              <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Wilivola
                </p>
                <p className="mt-3 text-2xl font-semibold text-emerald-800">
                  Toga-Naqavoka
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  E vakarautaki me vaka e dua na wilivola balavu, me maroroi tiko
                  ga na kena vosa kei na ibalebale ni italanoa.
                </p>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
              <div className="relative h-[280px] w-full md:h-[460px]">
                <Image
                  src="/resources/na-cava-na-ibalebale-ni-yaca-na-toga.png"
                  alt="iTaba e vakasamataki kina na italanoa kei Toga-Naqavoka"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
              <div className="space-y-6">
                {storyParagraphs.map((paragraph, index) => (
                  <article
                    key={`${index}-${paragraph.slice(0, 24)}`}
                    className="rounded-[1.6rem] border border-slate-200 bg-white/88 p-6 shadow-sm backdrop-blur md:p-7"
                  >
                    <p className="text-[1.06rem] leading-9 text-slate-800">
                      {paragraph}
                    </p>
                  </article>
                ))}

                <section className="rounded-[1.75rem] border border-slate-200 bg-white/88 p-6 shadow-sm backdrop-blur md:p-7">
                  <h2 className="text-2xl font-semibold tracking-tight text-emerald-800">
                    VEIKA BIBI ESO BALETI TOGA-NAQAVOKA.
                  </h2>

                  <div className="mt-6 grid gap-4">
                    {detailRows.map((item, index) => (
                      <article
                        key={`${index}-${item.slice(0, 18)}`}
                        className="rounded-[1.2rem] border border-slate-200 bg-slate-50/80 p-4"
                      >
                        <p className="text-[1.02rem] leading-8 text-slate-800">
                          {item}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-[1.6rem] border border-slate-200 bg-white/88 p-6 shadow-sm backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                    Reference
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    by Alita Sila Temo. “Na Cava na Ibalebale ni Yaca na
                    Toga-Naqavoka?” In Na Vuku ni Vanua: Wisdom of the Land:
                    Aspects of Fijian Knowledge, Culture and History, edited by
                    Tupeni L. Baba et al. Suva: Native Academy Publishers, 2013.
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
