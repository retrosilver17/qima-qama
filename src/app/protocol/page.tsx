import Link from "next/link";

import { MotionArticle, MotionReveal } from "../../components/motion-reveal";

const protocolGreetings = [
  {
    phrase: "Bula Vinaka",
    className:
      "left-[4%] top-[8%] text-[2rem] text-emerald-700/12 md:text-[4rem]",
  },
  {
    phrase: "Malo Bula",
    className:
      "right-[8%] top-[20%] text-[1.7rem] text-slate-900/10 md:text-[3.1rem]",
  },
  {
    phrase: "Bula Re",
    className:
      "left-[14%] top-[66%] text-[1.8rem] text-amber-700/12 md:text-[3.3rem]",
  },
];

const protocolPrinciples = [
  {
    title: "Respect Context",
    body:
      "Not every cultural practice belongs in every setting. Some traditions are public and shared, while others should be approached with care, permission, and proper guidance.",
  },
  {
    title: "Value Community",
    body:
      "Meaning is often carried through people, relationships, and vanua rather than through information alone. Learning respectfully means honouring those connections.",
  },
  {
    title: "Avoid Oversimplifying",
    body:
      "Cultural language and ceremony should not be flattened into trends or aesthetics. A professional platform can still remain grounded in dignity and accuracy.",
  },
];

export default function ProtocolPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_42%,#ffffff_100%)] text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden"
      >
        <div className="relative mx-auto h-screen max-w-7xl">
          {protocolGreetings.map((greeting) => (
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
                Cultural Protocol
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                Learning With Respect
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                This page sets the tone for how cultural knowledge should be approached:
                thoughtfully, respectfully, and with awareness that some knowledge carries
                deeper communal meaning than what appears on a screen.
              </p>
            </div>

            <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Core Approach
              </p>
              <p className="mt-3 text-2xl font-semibold text-emerald-800">
                Care, humility, and context
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                The goal is not only to share information, but to frame it in a way
                that respects culture, people, and protocol.
              </p>
            </div>
          </div>
          </div>
        </MotionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {protocolPrinciples.map((principle, index) => (
            <MotionArticle
              key={principle.title}
              delay={Math.min(index * 0.035, 0.16)}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-emerald-200 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Principle
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                {principle.title}
              </h2>
              <p className="mt-4 leading-8 text-slate-700">{principle.body}</p>
            </MotionArticle>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Public Knowledge
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              What This Site Can Share
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Qima Qama can introduce terms, traditions, and provincial identity in a
              way that supports learning. Public-facing explanations can open the door
              to understanding without claiming to replace lived knowledge or community guidance.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Boundaries
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              What Requires More Care
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Some practices, meanings, and ceremonial relationships should only be
              explained in the right context or by the right people. A respectful cultural
              platform should leave room for those boundaries instead of forcing total access.
            </p>
          </section>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Platform Standard
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">
            A Professional Way Forward
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-700">
            As the site grows, each new page should balance clarity with respect. That
            means writing carefully, avoiding sensational language, and presenting cultural
            material in a way that feels trustworthy, grounded, and responsible.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/definitions"
            className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
          >
            Explore Definitions
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
