import type { Metadata } from "next";
import {
  Match,
  editorialPicks,
  nextMatches,
} from "@/data/footballData";

const matchesByCompetition = nextMatches.reduce<Record<string, Match[]>>(
  (groups, match) => {
    if (!groups[match.competition]) {
      groups[match.competition] = [];
    }
    groups[match.competition]?.push(match);
    return groups;
  },
  {}
);

const formatter = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export const metadata: Metadata = {
  title: "Fixtures",
  description:
    "Stay on top of this week’s fixtures across global competitions with kickoff times, broadcast details, and key storylines to watch.",
};

export default function FixturesPage() {
  return (
    <div className="space-y-10">
      <header className="rounded-3xl border border-white/10 bg-slate-950/85 p-8 shadow-xl shadow-slate-900/50">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Match Center
            </p>
            <h1 className="text-3xl font-semibold text-white">
              This Week&apos;s Fixtures
            </h1>
            <p className="max-w-2xl text-sm text-slate-300">
              Times are listed in GMT. Tap the competitions below to reveal key
              tactical storylines and the latest availability updates from
              training grounds across the globe.
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-400/60 bg-emerald-400/10 p-5 text-xs uppercase tracking-[0.3em] text-emerald-200">
            <p className="font-semibold">Broadcast Spotlight</p>
            <p className="mt-2 font-medium">
              Northbank City vs Riverside Rovers · Sky Sports Main Event
            </p>
          </div>
        </div>
      </header>

      <section className="space-y-6">
        {Object.entries(matchesByCompetition).map(([competition, matches]) => (
          <article
            key={competition}
            className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/40"
          >
            <header className="flex flex-col gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  {competition}
                </h2>
                <p className="text-sm text-slate-300">
                  Form guides, probable lineups, and tactical talking points.
                </p>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-white"
              >
                Download match pack
                <span aria-hidden>↓</span>
              </button>
            </header>

            <ul className="space-y-4">
              {matches
                .slice()
                .sort(
                  (a, b) =>
                    new Date(a.kickoff).getTime() - new Date(b.kickoff).getTime()
                )
                .map((match) => (
                  <li
                    key={match.id}
                    className="grid gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-5 transition hover:border-emerald-400/60 hover:bg-emerald-400/5 md:grid-cols-[1.1fr_0.9fr]"
                  >
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                        Matchday {match.matchday}
                      </p>
                      <h3 className="text-xl font-semibold text-white">
                        {match.home} vs {match.away}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-xs text-slate-300">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                          {formatter.format(new Date(match.kickoff))}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                          {match.venue}
                        </span>
                        {match.broadcast && (
                          <span className="rounded-full border border-emerald-400/60 bg-emerald-400/10 px-3 py-1 text-emerald-200">
                            {match.broadcast}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="space-y-3 text-sm text-slate-300">
                      <p className="font-semibold text-emerald-200">Storyline</p>
                      <p>
                        {match.home} average 1.9 xG at home while {match.away}
                        concede the fewest big chances in the division. Watch the
                        midfield battle for control of the half-spaces.
                      </p>
                      <ul className="grid grid-cols-2 gap-2 text-xs">
                        <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                          <p className="font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Probable 11
                          </p>
                          <p className="mt-2 font-medium text-white">
                            3-2-4-1 vs 4-3-3
                          </p>
                        </li>
                        <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                          <p className="font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Key Duel
                          </p>
                          <p className="mt-2 font-medium text-white">
                            Midfield pivots vs advanced 8s
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-950/85 p-6 shadow-lg shadow-slate-900/40">
        <h2 className="text-xl font-semibold text-white">Don&apos;t Miss</h2>
        <p className="mt-2 text-sm text-slate-300">
          Editor-curated stories to pair with this week&apos;s fixtures.
        </p>
        <ul className="mt-4 grid gap-4 text-sm text-slate-300 md:grid-cols-3">
          {editorialPicks.map((article) => (
            <li key={article.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                {article.category}
              </p>
              <h3 className="mt-2 text-base font-semibold text-white">
                {article.title}
              </h3>
              <p className="mt-2 text-xs">{article.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
