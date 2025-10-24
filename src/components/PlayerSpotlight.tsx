import { PlayerSpotlight as PlayerSpotlightType } from "@/data/footballData";

type PlayerSpotlightProps = {
  players: PlayerSpotlightType[];
};

export function PlayerSpotlight({ players }: PlayerSpotlightProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/40">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Player Focus
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-white">
            Spotlight Performers
          </h2>
        </div>
        <p className="text-sm text-slate-300">
          Tracking the players driving their clubs forward this week.
        </p>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {players.map((player) => (
          <article
            key={player.id}
            className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/70 hover:bg-emerald-400/5"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  {player.position}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {player.name}
                </h3>
                <p className="text-sm text-emerald-300">{player.club}</p>
              </div>
              <span className="rounded-full border border-emerald-400/50 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
                {player.nationality}
              </span>
            </div>
            <p className="text-sm text-slate-300">{player.summary}</p>
            <dl className="grid grid-cols-3 gap-3 text-xs">
              {player.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-white/10 bg-slate-950/70 p-3"
                >
                  <dt className="font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-white">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
