import Link from "next/link";

const greetings = [
  {
    phrase: "Noda iYau",
    className:
      "left-[4%] top-[8%] text-[2rem] text-emerald-700/12 md:text-[4rem]",
  },
  {
    phrase: "Coming Soon",
    className:
      "right-[8%] top-[20%] text-[1.5rem] text-slate-900/10 md:text-[3rem]",
  },
  {
    phrase: "Vakarautaki tiko",
    className:
      "left-[14%] top-[66%] text-[1.7rem] text-amber-700/12 md:text-[3.2rem]",
  },
];

export function NodaIYauComingSoon() {
  return (
    <main className="masi-page relative isolate min-h-screen text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden"
      >
        <div className="relative mx-auto h-screen max-w-7xl">
          {greetings.map((greeting) => (
            <span
              key={greeting.phrase}
              className={`hero-greeting absolute font-serif font-semibold uppercase tracking-[0.18em] ${greeting.className}`}
            >
              {greeting.phrase}
            </span>
          ))}
        </div>
      </div>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/50 p-8 shadow-sm md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Noda iYau
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Coming Soon
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Na tabana ni Noda iYau sa vakarautaki tiko vakamalua ena gauna qo.
              Era sa maroroi vinaka tiko na ulutaga kei na wilivola, ka na lesu
              tale mai ena dua na gauna lekaleka.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-[1.75rem] border border-white/80 bg-white/88 p-6 text-center shadow-sm backdrop-blur md:p-8">
            <p className="text-sm leading-7 text-slate-600">
              Keitou sa cakacaka tiko me vakavinakataki na tabana oqo me rawa ni
              dola tale ena dua na iwalewale e totoka, rawarawa na wiliki, ka
              sema vinaka kei na vo ni Qima Qama.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
            >
              Lesu i vale
            </Link>

            <Link
              href="/traditions"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
            >
              Raica na Traditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
