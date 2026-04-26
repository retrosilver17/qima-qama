import Image from "next/image";
import Link from "next/link";

const topicGreetings = [
  {
    phrase: "Noda iYau",
    className:
      "left-[4%] top-[8%] text-[2rem] text-emerald-700/12 md:text-[4rem]",
  },
  {
    phrase: "Wainibuka",
    className:
      "right-[8%] top-[20%] text-[1.7rem] text-slate-900/10 md:text-[3.1rem]",
  },
  {
    phrase: "Veiliutaki",
    className:
      "left-[12%] top-[68%] text-[1.7rem] text-amber-700/12 md:text-[3.2rem]",
  },
];

const storyTitle = "VEILIUTAKI VAKOLONI ENA COLO KEI VITI LEVU, WILI KINA KO WAINIBUKA";

const storyParagraphs = [
  "E ra a veilewaitaki na Vunivalu ni veikoro e lima ena nodra taya e dua na vu ni vuga me duru se bou ni vale nei Buli Nailega. Na vuga, na neitou kau na Yavusa o Nasautoka, Tikina o Nasautoka ena yasana makawa o Colo East. Na veilewai qo e a vakayacori ena 1920, ka talanoataka vei au o Serupepeli Duimila, yabaki 102 ka se bula tiko e daidai (2011). E turaga mai na yavusa o Nabena e na vanua o Nasautoka.",
  "Au nanuma ni na sega ni vakaibalebale na italanoa kevaka era sega ni kila na wilika na cava na Turaga Buli ena veiliutaki e liu vakoloni. Na itutu na Buli, e dau toka e liu na “Turaga”, baleta ni ra dau taura na itutu qo o ira era sucu turaga, ka vaka talega kina na itutu ni Turaga ni Koro, era dau taura o ira mai na yavusa liu.",
  "Na tikina o Nailega, se na vanua o Nailega, na iotioti ni tikina ena yasana o Tailevu, ka rau veitikivi kei na tikina o Nakuailava kei na tikina o Nababa mai na yasana o Ra. E lima na koro ni tikina o Nailega. Ni da vakamuria cake na Wainibuka se na gaunisala na Kings Road, e koto yani e ra na koro o Wailevu, tarava o Nailega, o Naibita, tarava sara o Manu e tiko ena tai kadua ni Wainibuka, ka iotioti na koro o Nabulini. Na icavuti ni vanua o Nailega: “ki Naduadua vua na turaga na Vunivalu”. Era a taya na vu ni vuga na turaga ni Nailega me bou ni vale nei Buli Nailega, o Ratu Ilaisa Vakatawabai, ka vakaitikotiko ena koro o Naibita. A vakayacori na veivakaorei qo ena loma ni gauna rau a lewe ni yasana ruarua tiko kina o Colo East na tikina o Nasautoka kei Nailega, ka tiko na kena koro ni yasana e Vunidawa.",
  "Ena gauna a sa soli oti kina o Viti ki Peritania ena yabaki 1874, era a vidavida na noda veiyasana taucoko e Viti, ka qai vakavo tu na loma ena loma ni colo kei Viti Levu. Me vaka ni ra dui vanua vakataki ira ga na veivanua ena loma ni colo kei Viti Levu a mani vakataulewa na matanitu me sa wasei vakatolu na loma ni colo.",
  "Ena vualiku sa vakatokai me sa yasana o Colo Noca (Colo North), ka ra okati kina na veitikina o Tavua, Qaliyalatina, Savatu, Nabobuco, Nasau, Nadrau, Navatusila. Na veivanua era koto vaka ki Nadroga era sa vakatokai me yacana ko Colo Wesi (Colo West), ka okati kina na tikina o Namataku, Noikoro, Conua, Komave, Nakorolevuwai, Koroinsau, Bemana kei Nasikawa. E koto ena tokalau ni loma ni colo na yasana o Colo Isi, se Colo East. Era okati ena yasana qo na veitikina o Nailega, Nasautoka, Lutu, Waima, Soloira, Matailobau, Nagonenicolo, Nadaravakawalu, Muaira kei Noiemalu. Na tikina o Nailega, Nasautoka kei Lutu e ratou tiko ena bati ni uciwai na Wainibuka, ka ra tiko na kena vo ni tikina ena bati ni uciwai na Wainimala. Na itikotiko liu ni yasana o Colo Noca o Nadarivatu, Colo Wesi o Natuatuacoko, kei Vunidawa ena yasana o Colo Isi.",
  "Na tara ni nodra vale na Turaga Buli e ra a se dau tara ena gauna e liu na lewe ni tikina taucoko. E dau buli cake nodra yavu ni vale, ka dokai vakalevu me vaka na cere ni nodra vale na Turaga ni Vanua. Na itutu qo a se dau soli talega vei ira na Turaga ni Vanua, ena yavusa liu. Na itutu qo, a itutu talega vakamatanitu. E tiko e dua na nona ovisa, ka vakatokai na ovisa ni Buli, ka nona itavi me tabasaminitaki ira era cala ena lawa iTaukei ena loma ni tikina, ka me ra qai veilewaitaki ena mataveilewai ni tikina e matana na turaga ni lewa iTaukei ka vakailesilesi ni matanitu. Na itavi ni Buli me dau raica na nodra bula na nona lewe ni tikina, dau vola na sucu kei na mate ni lewe ni vanua, dau rai koro, o ya me raica ni ra tara na vale ni moce me salavata kei na lawa; me buli cake na kedra yavu me cere, me ra yadua na valenikuro, me tiko na kena valelailai ena ibili ni koro, ka me dau sova e loma ni valelailai na dravusa, ka sogo e veigauna me tarova na lago. Me rau dau raica kei Ovisa Buli ni wereci na koro kei na kena ibili, me ra vuli taucoko na gone era sa yacova na yabaki ono; me ra kakua ni qoli; dreke bi se were na marama bukete; ka me tabu talega na vakasausa ena loma ni koro. Na Buli e dau liutaka talega na Bose ni Tikina. Sa nona itavi talega me tabaka na kedra samani o ira taucoko era beca na lawa e so ka vakayavutaki ena tiko bulabula, na bula veilomani kei na bula sautu. E rau saumaki rau vakailesilesi ni yasana na Buli kei na Ovisa ni Yasana, ka rau saumaki mai na ilavo ni matanitu.",
  "Au nanuma me sa tei rauta toka mada e keya na ivakamacala lekaleka ni tutu vaka Buli ena noda veiliutaki vakaitaukei ni bera ni mai veisautaki na noda veiliutaki ena 1967.",
];

const reference =
  "Seruvakula, Ratu Semi B. “Veiliutaki Vakoloni ena Colo kei Viti Levu, Wili Kina ko Wainibuka.” In Na Vuku ni Vanua: Wisdom of the Land: Aspects of Fijian Knowledge, Culture and History, edited by Tupeni L. Baba et al. Suva: Native Academy Publishers, 2013.";

export default function VeiliutakiVakoloniPage() {
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
                src="/resources/veiliutaki-vakoloni.png"
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
                  E dua na wilivola balavu e vakasama kina na dauwilika me baleta
                  na veiliutaki vakoloni, na yasana, na tikina, kei na vanua e
                  sema kina ko Wainibuka.
                </p>
              </div>

              <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Wilivola balavu
                </p>
                <p className="mt-3 text-2xl font-semibold text-emerald-800">
                  Veiliutaki Vakoloni
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  E maroroi taucoko eke na volai me rawa ni wiliki vakamalua ka
                  vakarokorokotaki na kena iwalewale ni tukutuku.
                </p>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="relative h-[280px] w-full md:h-[460px]">
                <Image
                  src="/resources/veiliutaki-vakoloni.png"
                  alt="iTaba e vakaraitaka na veidigidigi ni veigauna vakoloni kei na vanua vakaViti"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
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
              </div>

              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-[1.6rem] border border-slate-200 bg-white/88 p-6 shadow-sm backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                    Reference
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {reference}
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
