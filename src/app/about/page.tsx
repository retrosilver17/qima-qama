import Link from "next/link";

import { MotionArticle, MotionReveal } from "../../components/motion-reveal";

const aboutGreetings = [
  {
    phrase: "Bula Vinaka",
    className:
      "left-[4%] top-[8%] text-[2rem] text-emerald-700/12 md:text-[4rem]",
  },
  {
    phrase: "Bula Sia",
    className:
      "right-[8%] top-[20%] text-[1.7rem] text-slate-900/10 md:text-[3.1rem]",
  },
  {
    phrase: "Malo Bula",
    className:
      "left-[14%] top-[66%] text-[1.8rem] text-amber-700/12 md:text-[3.3rem]",
  },
];

const aboutPillars = [
  {
    label: "Mission",
    title: "Preserve and Share Cultural Knowledge",
    body:
      "Qima Qama exists to preserve, honour, and share aspects of iTaukei cultural knowledge through a digital platform that feels clear, respectful, and accessible to a wider audience.",
  },
  {
    label: "Audience",
    title: "For Learners, Youth, and Community",
    body:
      "The platform is for people who want to learn more about traditions, provinces, language, identity, and protocol, including young people, students, families, and anyone seeking a respectful starting point.",
  },
  {
    label: "Approach",
    title: "Learning With Care and Context",
    body:
      "Qima Qama is built on the understanding that culture is not only information. It is lived through people, vanua, ceremony, language, and relationships, and should be presented with humility and care.",
  },
];

export default function AboutPage() {
  return (
    <main className="masi-page relative isolate min-h-screen overflow-hidden text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 select-none overflow-hidden"
      >
        <div className="relative mx-auto h-screen max-w-7xl">
          {aboutGreetings.map((greeting) => (
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
                About Qima Qama
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                A Digital Space For Cultural Learning
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Qima Qama is a cultural knowledge platform created to support learning
                about iTaukei traditions, language, protocol, provincial identity, and
                the deeper meanings that connect people to vanua. It brings together
                design, storytelling, and cultural care in a format that feels modern
                while remaining grounded in respect.
              </p>
            </div>

            <div className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Created By
              </p>
              <p className="mt-3 text-2xl font-semibold text-emerald-800">
                Fijian youths Dawn and Sailasa
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                This platform reflects a youth-led effort to preserve and present
                culture in a way that feels meaningful, professional, and future-facing.
              </p>
            </div>
          </div>
          </div>
        </MotionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {aboutPillars.map((pillar, index) => (
            <MotionArticle
              key={pillar.title}
              delay={Math.min(index * 0.035, 0.16)}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-emerald-200 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                {pillar.label}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                {pillar.title}
              </h2>
              <p className="mt-4 leading-8 text-slate-700">{pillar.body}</p>
            </MotionArticle>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Origin Story
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              Where The Idea Began
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              The idea for Qima Qama began on February 12, 2025. It grew out of a
              personal struggle to better understand culture, identity, and the meanings
              carried through Fijian traditions. From that experience came a shared desire
              to build a solution that could also be useful to other young people and to
              the rest of Fiji.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              The Name
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              Why It Is Called Qima Qama
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              The platform is named after Qima Qama, a traditional Fijian game played
              by countless children across Fiji. The name carries a sense of familiarity,
              memory, and local identity, grounding the project in something that already
              belongs to everyday Fijian life.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              What The Site Covers
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              Key Areas Of Learning
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Qima Qama currently brings together traditions, definitions, protocol,
              and provinces so that visitors can explore culture from different angles.
              The goal is to make learning feel connected rather than fragmented,
              allowing people to move between words, places, practices, and identity.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Cultural Respect
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              Knowledge With Boundaries
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              The platform recognises that not every part of culture is meant to be
              reduced into simple content. Some knowledge is public and educational,
              while some meanings remain rooted in context, ceremony, and community.
              Qima Qama aims to honour that difference.
            </p>
          </section>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Vision
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">
            Building A Stronger Cultural Archive
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-700">
            As Qima Qama grows, it can become a richer archive of terms, traditions,
            provinces, stories, and cultural memory. The long-term vision is to
            create a digital space where learning supports preservation, youth
            engagement, and pride in identity while remaining respectful of the
            cultural values that give that knowledge meaning.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/traditions"
            className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
          >
            Explore Traditions
          </Link>
          <Link
            href="/provinces"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
          >
            Browse Provinces
          </Link>
          <Link
            href="/protocol"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
          >
            Read Protocol
          </Link>
        </div>
      </section>
    </main>
  );
}
