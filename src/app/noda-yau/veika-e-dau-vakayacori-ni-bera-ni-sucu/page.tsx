import Image from "next/image";
import Link from "next/link";

const topicGreetings = [
  {
    phrase: "Noda iYau",
    className:
      "left-[4%] top-[8%] text-[2rem] text-emerald-700/12 md:text-[4rem]",
  },
  {
    phrase: "Gone vou",
    className:
      "right-[8%] top-[20%] text-[1.6rem] text-slate-900/10 md:text-[3rem]",
  },
  {
    phrase: "Sucu",
    className:
      "left-[12%] top-[68%] text-[1.7rem] text-amber-700/12 md:text-[3.2rem]",
  },
];

const title = "Veika e dau vakayacori ni bera ni sucu: ulumatua se gone vou.";

const sections = [
  {
    heading: "Ivakavotu",
    paragraphs: [
      "E sa dau lalau ka digidigitaki na marama vou ena veika e garova me kania. Ni sa vaka tu o ya na draki ni nona bula, sa ivakatakilakila ni sa tawa na matai Adi... se Ro.. se sa bukete.",
      "Na tagane kei ira na wekana eratou na vakarautaka e dua na magiti ni vakavotu. Oqori me vakabutari ka kau yani ki na vuvale iyalewa me ivakaraitaki ni sa bukete na nodratou yalewa. Era marau na wekana ka ra sa nanamaki ka vakavakarau ki na sucu ni gone.",
      "Me vaka ni vula ciwa ga nona buketetaki na gone, era na sosolevaki na marama ena tali ibe (idavodavo, itetete), samu masi, vakariri waiwai, na sinusinu (waiwai sega ni vakaisaluwaki) me nodra ilumu na veitinani.",
      "O ira na turaga era na tei vuci (loga sulo), susu na manumanu, ta buka (vakabalei na vuni ivi, dawa, tarawau), me vakarautaki na solevutaki ni sucu ni gone kei na nodra cola baba.",
    ],
  },
  {
    heading: "Veiqaravi nei Vunikalou",
    paragraphs: [
      "O Vunikalou na marama e dau qaravi ira na marama bukete ka veivakasucumi me vakataki ira na marama nasi e daidai.",
      "O irau na marama tina ni yalewa vou kei na ganetamana e rau sa na lakovi Vunikalou me mai tekivutaki na veiqaravi. Na Vunikalou sa na marautaka me mai qarava na nona itavi. Ena soli waidraudrau, yamoca na kerei tina ni gone, vakasilimi koya (me vaka na veiqaravi vakavuniwai) me vukea nodra bula vinaka na veitinani.",
      "E sega ni vakaivola na Vunikalou me vakataki ira na marama nasi (midwives) e daidai. Nona ivola tara ga na nona qaravi ira na bukete ka veivakasucumi vei ira e vuqa vata na gone era sa bula tu; cauravou kei na goneyalewa.",
    ],
  },
  {
    heading: "Isavasava (Magiti buta, se droka)",
    paragraphs: [
      "E vakatabui ni koti, se seru o yalewa bukete. Ena dau sili ka nunu ga.",
      "Era dau kaya na kena marama kei Vunikalou de tadoka o tina ni gone.",
      "Era rivarivabi talega de temaki watina turaga! Ia, ni sa qai vo ga e vica na siga me vakasucu sa na qai koti na marama bukete.",
      "E ratou na caka magiti vavi; dalo kei na kena icoi, vuaka, se rewai me kau ki na vuvale nei marama me isavasava, me vosoti ni ratou sa laki kotiva na uluna nodratou marama. Era na laki vota na magiti ni savasava na veiwekani kece nei yalewa (marama vou).",
    ],
  },
  {
    heading: "Siga e vakasucu se mamada kina na tina ni gone vou",
    paragraphs: [
      "Bikabika se bukaicaca",
      "Ena dumu na gatu, tevu na idavodavo, kumuni na itetete kei na masi me vakayagataki, ka vaka kina na dari sinusinu. O Vunikalou kei na vica na marama era na veivuke taka na veivakasucumi. Vakarautaki mai na wai draudrau me gunuva o tina me vukea nona vakasucu. Vakarautaki talega na qa-ni-kai, wa-vau se wa e sei mai na kabe ni niu se vuvi ni tiaina.",
      "Tauvulovulaki na dravusa, baovitaki ena vuvi ni tiaina ka tausala taki vakavinaka ena drau ni tiaina ka koto ena qilaiso katakata me yacova ni sa kaya o Vunikalou me kau yani vua. Buki na vicovico ni gone, koso ena qa ni kai. Na gone ena lumudrodro me katakata, viviraki ena masi ka vakotori ena itetete se itabe. Masiraki o tina; lumudrodro vinaka me moce ka vakacegu.",
    ],
  },
  {
    heading: "Bikabika, bukaicaca kei na vakariri baba",
    paragraphs: [
      "E dau digitaki e vica na marama kei na vica na gone yalewa me ra laki bikabika ka vakariri baba mai na yasana ruarua; mai vei tama kei tina ni gone talega. O ratou na kena marama e ratou tiko ivale ni gone. O ira na gone yalewa era vakariri. Ena digitaki e rua na gone yalewa maqosa me rau vakariri baba mei tina ni gone. O ira na vo ni gone yalewa me ra vakasaqarai na kedra na bikabika. Era laki kini rourou, sani ota, sili kai, visaraka buka, sasamaki e saqata ni vale me savasava ka totoka tu.",
      "E vica na cauravou era na cola buka ni lovo mai, se visana na kuro, ka lose yaqona me ra gunuva na marama bikabika. Era na qarava tiko na itavi oqori me yacova na vakabogiva se vakabogitini.",
      "Era vakatabui na gone yalewa mera seru, se veitalanoa kei ira na nodra itokani cauravou. Kevaka era kunei era na vakaorei. Tabu ni ra qai vakaveitalia; me ra dau tatau vei koya nodra iliuliu.",
      "Na nodra itavi na marama bikabika mera vucu, meke, ka keve gone ke tagi. Ni tubu cake na vucu, kena ibalebale ni tagi na gone. Kevaka e warai na vucu se meke, na gone e wele se moce. Era sa na moce talega na marama e so, ia, na kena vo era na gunu yaqona ka ni ratou na warai ni via druka na weka itama ni gone.",
      "Era dau yadrava na marama bikabika me kakua ni laki irovi rau na veitinani o tamadrau. Ena vakaorei kevaka e laki irovi rau yani na veitinani.",
    ],
  },
  {
    heading: "Na cola baba kei na veisiko",
    paragraphs: [
      "O ira na turaga kei na cauravou, era na cola baba ivale ni gone. Kena ivakarau me colati yani na sulo, tabana kei na drauna. Oqori me na laki roverove vakalalai na sulo, saqa me vakawai vakalevu ka sega ni vakamasima. Na tina ni gone ena kana sulo ka gunuva na kena wai. Vakaririgi na tabana kei na drauna me kena icoi.",
      "E Toga-Naqavoka era dau gunuva na waibuta ni kai me rawa ni to na wai ni sucu itina, ia, e tabu ga ni kania na lewe ni kai, ka tabu masima me yacova na bogiva, se, bogitini. Oqori na ivakaro nei Vunikalou ni sega ni vinakati me mavo totolo na mavo lalai ena ketei tina se na yaqona tabu vakamarama.",
      "Na veiwekani era na dau sikovi rau na veitinani kei ira na marama bikabika. Na sulo, kakana draudrau, vuata, ibe, waiwai, kai, rewai, moci e nodra ikaukau yani ena veisiko.",
    ],
  },
  {
    heading: "Na tunudra se burua bula",
    paragraphs: [
      "Ena gauna sa sucu kina na gone o ratou na weka itamana e ratou na caka magiti ni tunudra, se burua bula. Vakarautaki e dua na magiti buta; vavi na sulo kei na kena icoi (vuaka), ka kau vata yani kei na kena vu ni yaqona ki na vuvale nei tina.",
      "Na magiti oqori era na laki wase kece kina na wekana. E cakacaka ni veidokai kei na veivakamemenei ni sa laki vakatubu kawa na nodra marama. Sa semati vata na nodratou veiwekani ena waqa vou (gone) sa tokatu mai (sucu).",
    ],
  },
  {
    heading: "Vakasikasika",
    paragraphs: [
      "E rau sa na vakasikasikataki na veitinani ena siga ni vakabogiva, se bogitini. Oqori me rau sa vakaraitaki na veitinani, ka rau kidavaki mai vei ira na mataveiwekani.",
      "E rau uku na veitinani ka rau sulu mai vakaViti, vakasalusalu, soloti o tina ena rerega ka veivaki vata kei na sinusinu kei na cago (kari droka). Ena uku talega mai o tamadrau.",
      "Era vavavi na turaga ka ra takitaki na marama, icoi mosamosa.",
      "Ni sa kena gauna ni vakasikasika, o ira na marama kece na bikabika era drata ena yasa ni gatu ka dumu tu.",
      "O tamadrau sa na drata talega e loma ni vale ena nodratou idratadrata sa vakarautu tu. Ena dua ga na gauna lekaleka sa na lutu sobu na gatu ka rau sa lasika na veitinani. Era sabica na ibe na marama bikabika era kailavaka kece “Sikasika Idrevulakatakata!!! E!!! E!!!”.",
    ],
  },
  {
    heading: "Marautaki na gone vou",
    paragraphs: [
      "Era vucu na marama, o ira era tu e tuba era sabica na lalaga, ra vakasausau ka vakaresasa. O tamadrau e vaka ga e cavu na dalo matua ni sa laki reguci rau na veitinani, roqota na luvena ka cegu na yalona ni ratou sota bula vakamatavuvvale.",
    ],
  },
  {
    heading: "Kana baleti",
    paragraphs: [
      "Ena siga talega oqo sa na kana baleti kina na gone mai vei tukana, buna, se vugona. E digitaki na turaga rakorako, se dautei, se dausiwa, se dausivisivi. Na vakabauta e koto kina ni na ucu koya na turaga e kana baleta na gone vou. Vaka talega kina na marama; e digitaki me dautali, dauqoli, daumeke, se daucor i salusalu.",
    ],
  },
  {
    heading: "Vakatokayaca",
    paragraphs: [
      "Na ulumatua tagane, se yalewa ena vakatokayacataki mai na yasana vei tamana. O koya e vakatokayaca ena tubera e dua na tabua. E rau na dauvota tiko na yaca ni luvedrau. A imatai, na yaca mai vei tamana. A ikarua me vakayacani mai na yasa itinanana. Ena vakatikitoki oqori me yacova na iqimagiqima ni luvedrau. Na yaca e vakatakilakilataki na veiwekani.",
      "Cavulawetaki e so na yaca; na tikina oqo e dau vakayacani kina na yacadira na nodra veika vakacakacaka, se veitokani vakailala. Vei ira na qase, era dau levataka na tikina oqori. E uasivi vei rau na veiwatini me rau vakarogotaka ka kerea me yaca ni luvedrau o Grace se o Caleb se o Rita. Na yaca oqori e sa na laki toqai ena iVola-ni-Kawa. E so talega era dau vakayagataka na yaca mai na iVola Tabu: Taniela, Sisa, Mosese, Mere, Makitalena, Ana; me veicuci kei ira na tamata, se vada ni Kalou Bula. Ni cavulawetaki na yaca e semata na nodra veiwekani vakacakacaka.",
    ],
  },
  {
    heading: "Na ivisa",
    paragraphs: [
      "Na imatai ni dreke buka se vesu buka e dreketa se colata mai na gone. Na buka oqori me mai koto rawa mada e vata ni buka ka me visaraki kina e dua na uvi, dalo, ika, toa, vuaka se kakana ga e digitaki. Kena inaki me gone dau gugumatua ena cabuka. E liu era dau cabuka na gone me vukei ira na tinadra.",
    ],
  },
  {
    heading: "Kau mata ni gone",
    paragraphs: [
      "Nodra kau na veitinani vei ira na weka mai na koro itina ni gone (koro-ni-vasu). Era kumuni yau; tabua, ibe, sova, se iyau cava ga e kunei ena nodra vanua me iyau ni kau-mata-ni-gone. O ira na turaga wekai tina ni gone era na caka magiti, kei ira na marama era na caka ivakamamaca kei na iyau ni cere; butu voivoi, ibe, waiwai, masi, tabua, dari, tabakau, se iyau cava ga era digitaka me iyau ni cere.",
      "Taumada ena vakatadu itukutuku na turaga se marama veimataki ki na veimataki ena koro nei tina ni gone. Ena kena siga, era sa na qai yani. Ena cavu ivuvu na koro.",
      "O ira na marama itaukei era na cerevi rau mai na veitinani. Uvu na davui ni cere. Era ciciva yani na cere na vulagi. O koya ga e liu sa na nona na tabua ni cere. Ia, na waiwai, voivoi ni cere ena cabo mai ka kau yani ki na nodra icili. Rau vakaisulu kumi na veitinani, yau yani na iyau ki na rara, e na vakatunuloa, se ivale e vakayacori kina na veisolevuti.",
      "O nodra veimataki ena liutaka yani na iqaiqai, ka ra muri koya yani o ira na turaga, marama kei ira na kena katikati. O irau na veitinani kei koya e roqota na gone e ratou na lai drata sara ena ibe me ratou dratama. O ratou na marama e ratou veiciqomi mai e ratou na sulu kumi ka tauri tabua. Oti na veiqaravi Vakaturaga ena kena ivakarau, ratou sa na veilutuvatu ka veisautaki na isulu kei na tabua. Era suka na marama inodra icili.",
      "O ira na marama itaukei era na takitaki yani; icoi mosamosa, me kedra na vulagi. Kevaka era moce era na vakamarautaki na vulagi ena vucu, meke. O ira na turaga era na vocogi ga ena gunu yaqona. Me vaka ni soqoni ni marau, era na veimeketi ka tibivuru. Ena mataka era lesu na vulagi, e rau sa na tiko mai na veitinani me rau vakacagicagi mada.",
      "Na gone era na dau mai kauta na wekana inodra vale. Ni rau qai lesu sa roqoti koto mai na ibe, waiwai na nona icurucuru ena veivale e curuma me kedrau itala. Oqori e caka vakaveiwekani ka ivakadei ni nodra sa semati vata vakadra na gonevou kei ira na vuvale kece e curuma ena nona koro ni vasu.",
      "Dede vakalailai sa rau na qai tale mai na tuka-ni-gone me rau mai raici rau na veitinani. Kerei me rau sa lesu tale. E rau sa na lesu tale, ka rau talaci ena veika tale era dui lolomataki na weka. E rau na kau lesu tale inodra koro. Na gone sa na rua na nona koro, oqori na koro itamana kei na koro itinanana, e vasu kina.",
      "Na vasu e dua na tiki ni bula bibi ena koro itinanana. E rawa vua na gone me vasuta na iyau ni solevu, se vasuta na manumanu; vuaka, toa, ga, e tu e loma ni koro. Ni sa kauta na veika oqori inona koro, e dodonu me qai kauta e dua na tabua, se iyau cava ga era vakarautaka na wekana me dolei kina na iyau a vasuta. Oqori na ivakatakata ni liga.",
    ],
  },
  {
    heading: "Na vosa ni veivakalougatataki",
    paragraphs: [
      "E liu a sega na Papitaiso. O irau na veiwatini e rau na roqota yani na luvedrau me laki yamoci ka vosa vakalougatataki na Turaga ni Mataqali, se Turaga ni Yavusa.",
      "E rau na kau magiti, se dua na idavodavo, waiwai, se na ka ga e rau rawata me ivakavinavinaka ni cakacaka bibi o ya. Ena tauci na vosa e so me vaka: “I Aisake, mo tubu cake mo gone vinaka, gugumatua ena qaravi itavi. Dau vakarorogo vei tamamu, kei ira na qase cake vei iko.”",
      "Mo liga ni magiti ka colata na nomu vuvale, mataqali, vanua. Kakua ni cakava e dua na itovo ca vei ira na wekam u vakadra, se nomu veikilai”. Nodra vakabauta ni ra dau vosa mana na Turaga me vaka ni tu vei ira na sau ni vanua; mai bulu, mai lagi talega, vua nodra Kalou Vu.",
    ],
  },
  {
    heading: "Magiti ni butudravu",
    paragraphs: [
      "Nona yacova e dua na ulumatua yalewa, se dua na gone yalewa na mate ni marama, se mate ni vula, sa ivakatakilakila ni sa gone yalewa. O buna kei tinana e rau sa na tevuka na nona idavodavo. Era na vakabogivataka ka, caka na kena magiti ni Butudravu. Era kanavata na wekana me marautaki kina na ivakatagedegede ni bula e sa yacova.",
      "O ira na buna, tinana, ganetamana kei ira na marama qase era sa na vosa toka vua me kakua ni qalova uaua na moka. Sa na vakavulici ena samusamu, kesakesa, corisalisalu, tali ibe, butu somo, taga, sili kai, veisusu vei ira na tacina, qarava na vale, tabe ena solevu e vakayacori ena yavusa, koro, se mataqali. Ena tuberi ena veivosa maqosa ni veiwekani, o ira na nona tabu; vugona, ganetamana, ganena, nona turaga; me dau sulumaka na isulu rakorako; jaba kei na kena isulu. Ni tabu na kaci bale e loma ni koro, veicici, suluwabu, dredrekelakela. Me dau tamaka na nona turaga se marama, yara benu, ka veiqaravi vua na turaga se marama ni ra kana. E vakavulici me kakua ni dau vosa veisau vei ira era qase cake vua. Me vulica na tiko bulabula. Me dau sasamaki e vale, e tautuba, ka vakauasivi e vanua ni vakacegu.",
      "Ni sa vulica na veika oqori sa na ukucavu tu ni bera ni laki vakawatitaki. E sa na kalougata na tagane ena watina ka ni sa maqosa ka sa na dua na liga uasivi ni veiqaravi ena nona vuvale kei ira na mataveiwekani.",
    ],
  },
  {
    heading: "Magiti ni yauvou se tiko ibure",
    paragraphs: [
      "Oqo e sega ni dau caka wale ga vei ira na ulumatua cauravou. E dau caka vei ira kece na gone tagane me ra teve.",
      "E liu era teve na cauravou ni sa bi mai na domodra, lalaburabura na matadra ka so mai na kumidra. E Toga-Naqavoka e tiko e dua na kena turaga me qarava na itavi bibi oqori. E tiko sara ga e dua na bure ena ibili ni koro me qaravi kina na itavi bibi oqori. E tabu sara me dua na marama, gone yalewa, se gone me qaiva yani na bure, se saqata ni vanua o ya. E dau kau yani na nodra ibure. O ira ga na turaga kei na maqoli, bu, dovu me medra, se na veimatagali kakana bulabula, tavu, kovu se baovi me kedra.",
      "Ia, me qai dua na magiti, vutu sulo, me qai kau ki na vuvale ni gone yalewa se gone tagane e meke me ivakamalumu ni liga.",
      "E sega ni dau caka vakailoa. E digitaki vakamatau me vakadeitaka na veiwekani.",
    ],
  },
];

export default function VeikaNiBeraNiSucuPage() {
  return (
    <main className="relative isolate min-h-screen bg-slate-50 text-slate-900">
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
                src="/resources/veika-e-dau-vakayacori-ni-bera-ni-sucu.png"
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
                  E dua na wilivola vakaViti me baleta na veiqaravi, na itovo, kei
                  na veika e dau vakayacori ena gauna ni bukete, sucu, kei na
                  marautaki ni gone vou.
                </p>
              </div>

              <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Wilivola balavu
                </p>
                <p className="mt-3 text-2xl font-semibold text-emerald-800">
                  Ulumatua se gone vou
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  E vakadodonutaki me rawarawa na wiliki, ia sa maroroi tiko ga na
                  vosa kei na irairai ni italanoa vakavanua.
                </p>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
              <div className="relative h-[280px] w-full md:h-[460px]">
                <Image
                  src="/resources/veika-e-dau-vakayacori-ni-bera-ni-sucu.png"
                  alt="iTaba e vakasamataki kina na marama bukete kei na nona vuvale"
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
                    by Alita Sila Temo. “Veika e dau vakayacori ni bera ni
                    sucu: ulumatua se gone vou.” In Na Vuku ni Vanua: Wisdom of
                    the Land: Aspects of Fijian Knowledge, Culture and History,
                    edited by Tupeni L. Baba et al. Suva: Native Academy
                    Publishers, 2013.
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
