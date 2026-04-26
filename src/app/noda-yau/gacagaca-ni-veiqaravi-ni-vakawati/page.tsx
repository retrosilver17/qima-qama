import Image from "next/image";
import Link from "next/link";

const topicGreetings = [
  {
    phrase: "Noda iYau",
    className:
      "left-[4%] top-[8%] text-[2rem] text-emerald-700/12 md:text-[4rem]",
  },
  {
    phrase: "Vakawati",
    className:
      "right-[8%] top-[20%] text-[1.6rem] text-slate-900/10 md:text-[3rem]",
  },
  {
    phrase: "Veiqaravi",
    className:
      "left-[12%] top-[68%] text-[1.7rem] text-amber-700/12 md:text-[3.2rem]",
  },
];

const title = "Gacagaca ni veiqaravi ni vakawati";

const sections = [
  {
    heading: "Tabailago kei na vakadonu gusu",
    paragraphs: [
      "E dua na cauravou e sa domona lo toka e dua na gone yalewa. Ni sa vakadeitaka na nona gagadre, e sa na tukuna vei tamana kei tinana. Rau sa na taroga sara se sa vosaki koya oti, ka cava sa tukuna na gone yalewa. Na cauravou ena kaya ni sega. Rau sa na vaqara tabua, ia, ke sa tiko e dua era na kacivi e vica na turaga na wekadratou me ratou laki tabailagotaki gone yalewa.",
      "E sega ni dau vakaraitaki na iqa iqa oqo. E ratou qai lo ga yani ki nodratou vale o yalewa ni sa karobo. Ratou vakabogi ga yani e tautuba, ratou curu ka ratou tubera sara na tabua ni tabailago. E kidacalataki vei iratou na veitama ni gone yalewa. Rau veivosaki na veitinani, se sa kila tiko o Lewa. E segai. E sa na ciqomi sara na tabua ka vakamaluataki. Tarogi o gone yalewa ka sa vakadonunya. Laki tukuna yani ni sa ciqoma ka vakadonunya ko gone yalewa. Sa na duatani na nodratou marau na turaga na laki tabailago. Ratou sa tubera tale e dua na tabua me ivakadonu gusu. Ena ciqomi oqori ka sa na vakatau tiko ga vei iratou na weka-i-tagane na siga me rau bukiliku ka solevutaki kina na veiwatini.",
      "Na cauravou e sa na dau gade yani ena so na yakavi me sikovi gone yalewa. E ratou dau ciqomi koya, veitalanoa, gunu yaqona. E rau sa na veirai tiko ka sa na rau dui gagadre lo toka ka veikilai. Oqori ke rau tabavata ka vatukai vinaka ruarua. Ia, ke rui qase sara o tagane se leqa tu e dua na tiki ni yagona, sa na leqa na draki ni yalo iyalewa. Ia, e sa na vosota ga ka ni sa tabailagotaki oti. E sega ni rawata me saqati rau nona qase, ka ni ivakarau beci.",
    ],
  },
  {
    heading: "Ivakana",
    paragraphs: [
      "O tamai tagane kei tamai yalewa rau na caka magiti me ra kacivi mai kina na dui wekadrau ka tukuna kina na nodrau sa na bukilikutaki na nodrau gone. Era na dui bole na wekadrau ena veika me vakarautaki: tabua, vivivi ibe, isulu masi, waiwai, magiti ni soqo, yaqona kei na kena veigacagaca kece ni solevu.",
      "Era sa na loku bogi sara na weka ni tagane.",
      "Era maqosa na marama ena samu masi, tali ibe, toni vau ni liku, sigani waiwai, kari manawi me ibena, yaca yasi, qarai na malaga, uci, rerega me soloti kina na gone yalewa. O ira na turaga era na ta buka ni lovo, tara vakatunuloa, tali bolabola, sigani yaqona, keli uvi, tivoli. Na solevutaki ni vakamau e dau yaco ena vula imatua. E vulici na meke kei na vucu ni solevu.",
    ],
  },
  {
    heading: "Duguci",
    paragraphs: [
      "Na tabua e laki duguci, se vosaki kina na gone yalewa me mai watina e dua na cauravou e yacana na iduguci. Ke gadrevi me vakusakusataka na Tabailago, Duguci, Vakadonugusu e dau caka vata ga ena dua na gauna. E dau vakayacori oqo ke sa rogova tiko na nodra gagadre na weka ni so tale na gone tagane ni ra sa sasagataka tiko me vakawati taki na gone yalewa maqosa o ya ena nodratou mataqali se yavusa.",
    ],
  },
  {
    heading: "Tevutevu",
    paragraphs: [
      "O ira na marama ena yasana ruarua era na tevuka na nodrau idavodavo ka conaka na nodrau vale. Oqo ena dau vakaitavi vakalevu kina na yasana ni yalewa. Dau dumu na gatu, na taunamu ni Viti, me lati kina na nodrau idavodavo.",
    ],
  },
  {
    heading: "Lakovi",
    paragraphs: [
      "Ena siga ni solevutaki ni buki ni liku e lewe rua na turaga mai vei ira na weka ni tagane me rau qaivi yalewa kei ira na wekana ena nodra icili me ra cavu vakoro yani me laki vakayacori na solevu. Sa qaravi na veiqaravi kece ni bukiliku: cabo na ise vusevu, magiti kei na iyau.",
    ],
  },
  {
    heading: "Bukiliku",
    paragraphs: [
      "Oqori na gauna namaki. E rau cokaidrauna na vakawati ena nodrau isulu masi digitaki. Rau dabe ena matadra na turaga ni vanua. Tauci na vosa ni veivakamemenei, veivakadeitaki, veivakalougatataki vei rau.",
    ],
  },
  {
    heading: "Na buki liku",
    paragraphs: [
      "Rau sa na qai tucake ka bukia na liku vau nei yalewa o tagane ka vaka talega kina o yalewa vei watina (tagane). Rau drata sobu ena nodrau idratadrata vakarautaki ka vakacobocobo.",
    ],
  },
  {
    heading: "Kali ni sucu",
    paragraphs: [
      "Oqo na tabua, iyau kei na kena magiti. Ratou vakacabora na weka ni tagane me vakavinavinakataki kina na veisusu ni tina vei luvena ka sa mai vakawati taki. Tau na veivosa bibi ni vakacabo ka vakalougatataki kina na tina ena nona veisusugi. Na tabua, iyau kei na magiti e cabo me nona kece o tina ni yalewa kei ira na wekana.",
    ],
  },
  {
    heading: "Tataunaki",
    paragraphs: [
      "Tabua e tataunaki kina o gone yalewa vei ira na weka i tagane. Nona bula, marau, tiko vinaka sa nodratou itavi na weka ni tagane. Me qai vakavulici ka tuberi ena veika e dodonu me kila me na dau qarava ena nodratou itikotiko.",
    ],
  },
  {
    heading: "Bikabika",
    paragraphs: [
      "Era digitaki na marama ena tabana ruarua me ra bikabika vei rau na veiwatini. E va na bogi me ra bikabika kina. Era na kana magiti, vucu, ka veimeketi ena siga kei na bogi; oqori ni oti na bukiliku.",
    ],
  },
  {
    heading: "Mataka iravuaka",
    paragraphs: [
      "Ni cecegi na nodrau idavodavo masi vulavula ka laurai ni takava tu na dra se suasua ena roka sei-qele, sa na ivakatakilakila ni o marama vou e yaco vinaka yani ena nona vale ni vakawati, ka sega ni sa vaqasei. Ra mekemeke na marama bikabika, qiri lali, sabica na ibe kei na lalaga, ka ra vakarewasasa. Oqori me ra vakatakilakilataka na marautaki ni nona yaco vinaka yani na gone yalewa.",
      "Era vavavi na weka ni tagane me baleta na vakabogiva; na vuaka era na sosogo vinaka ena drauni ivi ka sega ni dolavi tu ga vakasabusabu. Kevaka e tadola tu ga e ivakaraitaki ni sa yalewa qase o marama. Cabo na vuaka, na kena magiti (sulo vavi) kei na ivesu waka, se vu ni yaqona. Tau na kena vosa ni veivakamemenei. Era kana vata kece ena kakana ni vakabogiva.",
    ],
  },
  {
    heading: "Vakasobusobu (Rau laki sili ina sova)",
    paragraphs: [
      "Rau tabu sili na vakawati me yacova na vakabogiva. E rau na lumulumu tikoga. Rau na curu ga ituba me rau lako ina vanua ni vakacegu (valelailai). Vuqa ga na gauna e rau na tiko voli ga ena nodrau loqi; na loma ni gatu. O ira na nodra ilala gone yalewa kei na cauravou era na laki veitomani vei rau ena gauna rau sa na sili kina. Silimi na kai, se tagavi mai na moci, kadikadi me lewe ni noke ni ra lesu mai.",
    ],
  },
  {
    heading: "Qalu (vakalololo) kei na ivakamamaca",
    paragraphs: [
      "O ira na qase e vanua (tataba ni tagane) era na qalu, se caka vakalolo. Na kena ikovu me kakua ni kasei me vakaraitaka ni o marama vou e yaco vinaka yani ina nona vale ni vakawati. Cabo na vakalolo kei na ivakamamaca; ibe, masi, waiwai.",
    ],
  },
  {
    heading: "Veisukayaki",
    paragraphs: [
      "Era sa na qai veisukayaki na bikabika kei na mataveiwekani.",
      "O marama vou sa na tiko ena nona vale ni vakawati ka me tekivutaka na nona itavi vakaradini vale; vakariri, sili kai, taga, tali ibe, kari sasa, sasamaki kei na veicakacaka vakamarama kece ga.",
    ],
  },
  {
    heading: "Ivetiveti (icovicovi) ni ilou (draudrau)",
    paragraphs: [
      "Oqo e dua na itovo dokai ka vakamareqeti e liu e Toga - Naqavoka. E dau soli e dua na tiki ni qele ni nona mataqali, se yavusa na gone yalewa me nona icovicovi ni ilou se draudrau ena nona vale ni vakawati.",
      "E vakayacori oqori me vaka ni ra dau vakayagataki na marama na drau ni via, tiaina kei na yalu me isoso ni kuro-ni-Viti, baovitaki kina na kai, ologi kina na veikakana buta, ka itatara ni lalaka,i se sova, se itabe ni kakana, ka tevuki talega me ra kana kina ena tabakau, se ibe ni kana (ibe kilukilu e tali vakamaqosa,e balavu ka raba lalai).",
      "E sauvi na tiki ni qele oqori, ni ratou nanuma na wekana me kakua ni laki covi ilou se draudrau ena dua tale na vanua.",
      "E daidai e vuqa na tiki ni qele era veilatai se kosova e dua tale na suasuva ni dua na mataqali. Na tiki ni qele o Naulu, e tiki ni qele vaka-Naitasiri. E daidai e sa tiki ni qele vaka-Toga, e Rewa. Na tiki ni qele oqo a nona icovicovi ni ilou e dua na marama mai Navuso ka vakawati taki yani ina mataqali o Nakausoqo e Vunisei, Toga.",
    ],
  },
];

const reference =
  "by Alita Sila Temo. “Gacagaca ni veiqaravi ni vakawati” In Na Vuku ni Vanua: Wisdom of the Land: Aspects of Fijian Knowledge, Culture and History, edited by Tupeni L. Baba et al. Suva: Native Academy Publishers, 2013.";

export default function GacagacaNiVeiqaraviNiVakawatiPage() {
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
                src="/resources/gacagaca-ni-veiqaravi-ni-vakawati-v2.png"
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
                  {title}
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                  E dua na wilivola vakaViti e baleta na gacagaca, na itovo, kei
                  na veiqaravi vakavanua e dau sema ki na vakawati.
                </p>
              </div>

              <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Wilivola balavu
                </p>
                <p className="mt-3 text-2xl font-semibold text-emerald-800">
                  Veiqaravi ni vakawati
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  E maroroi tiko ga na ivakamacala kei na vosa me rawa ni wiliki
                  vakavinaka na italanoa vakavanua oqo.
                </p>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
              <div className="relative h-[280px] w-full md:h-[460px]">
                <Image
                  src="/resources/gacagaca-ni-veiqaravi-ni-vakawati-v2.png"
                  alt="iTaba e vakasamataki kina na solevu kei na veiqaravi ni vakawati"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
              <div className="space-y-6">
                {sections.map((section) => (
                  <section
                    key={section.heading}
                    className="rounded-[1.6rem] border border-slate-200 bg-white/88 p-6 shadow-sm backdrop-blur md:p-7"
                  >
                    <h2 className="text-2xl font-semibold tracking-tight text-emerald-800">
                      {section.heading}
                    </h2>

                    <div className="mt-5 space-y-5">
                      {section.paragraphs.map((paragraph, index) => (
                        <p
                          key={`${section.heading}-${index}-${paragraph.slice(0, 18)}`}
                          className="text-[1.06rem] leading-9 text-slate-800"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
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
