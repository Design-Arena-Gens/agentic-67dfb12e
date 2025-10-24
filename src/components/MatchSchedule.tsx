"use client";

import { useMemo, useState } from "react";
import { Match } from "@/data/footballData";

const formatter = new Intl.DateTimeFormat("en-GB", {
  weekday: "short",
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZoneName: "short",
});

type MatchScheduleProps = {
  matches: Match[];
};

export function MatchSchedule({ matches }: MatchScheduleProps) {
  const filterOptions = useMemo(() => {
    const unique = Array.from(new Set(matches.map((match) => match.competition)));
    return ["All", ...unique];
  }, [matches]);

  const [selectedCompetition, setSelectedCompetition] = useState<string>(
    filterOptions[0] ?? "All"
  );

  const filteredMatches = useMemo(() => {
    if (!selectedCompetition || selectedCompetition === "All") return matches;
    return matches.filter((match) => match.competition === selectedCompetition);
  }, [matches, selectedCompetition]);

  const upcoming = filteredMatches
    .slice()
    .sort(
      (a, b) =>
        new Date(a.kickoff).getTime() - new Date(b.kickoff).getTime()
    );

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Match Center
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-white">
            Upcoming Fixtures
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          {filterOptions.map((competition) => {
            const isActive = competition === selectedCompetition;
            return (
              <button
                key={competition}
                type="button"
                onClick={() => setSelectedCompetition(competition)}
                className={`rounded-full border px-3 py-1.5 transition ${
                  isActive
                    ? "border-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-950"
                    : "border-white/15 bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                {competition}
              </button>
            );
          })}
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {upcoming.map((match) => {
          const kickoff = formatter.format(new Date(match.kickoff));
          return (
            <li
              key={match.id}
              className="group grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-emerald-400/70 hover:bg-emerald-400/5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  {match.competition} · Matchday {match.matchday}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {match.home} <span className="text-emerald-400">vs</span> {match.away}
                </p>
                <p className="text-sm text-slate-300">{match.venue}</p>
                <p className="text-xs text-slate-400">{kickoff}</p>
              </div>
              <div className="flex flex-col items-end justify-center gap-2 text-right text-xs text-slate-400">
                {match.broadcast ? (
                  <span className="rounded-full border border-emerald-400/60 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    {match.broadcast}
                  </span>
                ) : (
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    Live updates
                  </span>
                )}
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 transition hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-white"
                >
                  Add to calendar
                  <span aria-hidden>→</span>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
