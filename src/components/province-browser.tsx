"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { provinces } from "../app/data/provinces";

const divisionColors = {
  "Wasewase E Loma": "text-sky-700 bg-sky-50 border-sky-100",
  "Wasewase E Na Tokalau": "text-amber-700 bg-amber-50 border-amber-100",
  "Wasewase E Na Vualiku": "text-teal-700 bg-teal-50 border-teal-100",
  "Wasewase E Na Yasayasa Vaka-Ra":
    "text-emerald-700 bg-emerald-50 border-emerald-100",
} as const;

type ViewMode = "cards" | "map";

export function ProvinceBrowser() {
  const [viewMode, setViewMode] = useState<ViewMode>("cards");

  return (
    <div className="mt-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Explore
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Browse Yasana
          </h2>
        </div>

        <div className="inline-flex w-fit rounded-full border border-slate-200 bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setViewMode("cards")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              viewMode === "cards"
                ? "bg-emerald-700 text-white"
                : "text-slate-600 hover:text-emerald-700"
            }`}
          >
            Yasana Cards
          </button>
          <button
            type="button"
            onClick={() => setViewMode("map")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              viewMode === "map"
                ? "bg-emerald-700 text-white"
                : "text-slate-600 hover:text-emerald-700"
            }`}
          >
            Fiji Map
          </button>
        </div>
      </div>

      {viewMode === "cards" ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {provinces.map((province) => {
            const divisionColor =
              divisionColors[province.division as keyof typeof divisionColors];

            return (
              <Link key={province.slug} href={`/provinces/${province.slug}`}>
                <article className="group h-full rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Yasana
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                        {province.name}
                      </h3>
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${divisionColor}`}
                    >
                      {province.division}
                    </span>
                  </div>

                  <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Land Area
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">
                      {province.area}
                    </p>
                  </div>

                  <p className="mt-5 leading-7 text-slate-600">
                    {province.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between text-sm font-medium">
                    <span className="text-emerald-700 transition group-hover:text-emerald-800">
                      View yasana
                    </span>
                    <span className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-700">
                      →
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm md:p-8">
          <div className="overflow-hidden rounded-[1.25rem] border border-slate-100 bg-slate-50/70 p-4">
            <div className="relative mx-auto aspect-[640/425] w-full max-w-5xl">
              <Image
                src="/maps/fiji-provinces.svg"
                alt="Map of Fiji yasana"
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
            <p>
              Use this map as a visual reference for Fiji’s yasana layout, then
              return to the yasana cards to explore each page in detail.
            </p>
            <p>
              Source:{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Fiji_Province.svg"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-emerald-700 hover:underline"
              >
                Wikimedia Commons
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
