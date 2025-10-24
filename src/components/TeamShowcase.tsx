"use client";

import { useMemo, useState } from "react";

type Team = {
  name: string;
  manager: string;
  formation: string;
  form: string[];
  strengths: string[];
  badge: string;
};

type TeamShowcaseProps = {
  teams: Team[];
};

export function TeamShowcase({ teams }: TeamShowcaseProps) {
  const formations = useMemo(() => {
    const unique = new Set<string>();
    teams.forEach((team) => unique.add(team.formation));
    return ["All" as const, ...Array.from(unique)];
  }, [teams]);

  const [selectedFormation, setSelectedFormation] = useState(formations[0]);

  const visibleTeams = useMemo(() => {
    if (selectedFormation === "All") return teams;
    return teams.filter((team) => team.formation === selectedFormation);
  }, [selectedFormation, teams]);

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/40">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Team Focus
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-white">
            Featured Clubs & Tactical Identities
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-200">
          {formations.map((formation) => {
            const isActive = formation === selectedFormation;
            return (
              <button
                key={formation}
                type="button"
                onClick={() => setSelectedFormation(formation)}
                className={`rounded-full border px-4 py-2 transition ${
                  isActive
                    ? "border-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-950"
                    : "border-white/10 bg-white/5 hover:border-emerald-400/60 hover:bg-emerald-400/10"
                }`}
              >
                {formation}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {visibleTeams.map((team) => (
          <article
            key={team.name}
            className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/60 hover:bg-emerald-400/5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  {team.formation}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {team.name}
                </h3>
                <p className="text-sm text-emerald-300">Managed by {team.manager}</p>
              </div>
              <div className="h-14 w-14 rounded-full border border-emerald-400/60 bg-emerald-400/10 p-2 text-center text-2xl">
                🛡️
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold uppercase tracking-[0.3em] text-slate-400">
                Form
              </span>
              <div className="flex gap-1">
                {team.form.map((result, index) => (
                  <span
                    key={`${team.name}-form-${index}`}
                    className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold ${
                      result === "W"
                        ? "border-emerald-400/70 bg-emerald-400/10 text-emerald-200"
                        : result === "D"
                        ? "border-amber-400/70 bg-amber-400/10 text-amber-200"
                        : "border-rose-400/70 bg-rose-400/10 text-rose-200"
                    }`}
                    aria-label={`${result === "W" ? "Win" : result === "D" ? "Draw" : "Loss"}`}
                  >
                    {result}
                  </span>
                ))}
              </div>
            </div>

            <ul className="space-y-2 text-sm text-slate-300">
              {team.strengths.map((strength) => (
                <li key={`${team.name}-${strength}`} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 text-emerald-300">
                    •
                  </span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex items-center justify-between text-xs text-slate-400">
              <span>Latest tactical review</span>
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 font-semibold text-slate-200 transition hover:border-emerald-400/70 hover:text-white"
              >
                Watch video ↗
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
