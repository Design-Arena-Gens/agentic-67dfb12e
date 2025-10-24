import { LeagueStanding } from "@/data/footballData";

type LeagueTableProps = {
  standings: LeagueStanding[];
};

export function LeagueTable({ standings }: LeagueTableProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/40">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Form Guide
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-white">
            League Standings
          </h2>
        </div>
        <p className="text-sm text-slate-300">Updated after the latest matchday.</p>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <table className="min-w-full divide-y divide-white/10 text-left text-sm text-slate-200">
          <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-slate-400">
            <tr>
              <th scope="col" className="px-4 py-3">#</th>
              <th scope="col" className="px-4 py-3">Club</th>
              <th scope="col" className="px-4 py-3 text-center">P</th>
              <th scope="col" className="px-4 py-3 text-center">W</th>
              <th scope="col" className="px-4 py-3 text-center">D</th>
              <th scope="col" className="px-4 py-3 text-center">L</th>
              <th scope="col" className="px-4 py-3 text-center">GF</th>
              <th scope="col" className="px-4 py-3 text-center">GA</th>
              <th scope="col" className="px-4 py-3 text-center">GD</th>
              <th scope="col" className="px-4 py-3 text-center">Pts</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {standings.map((club, index) => {
              const goalDifference = club.goalsFor - club.goalsAgainst;
              return (
                <tr
                  key={club.id}
                  className="transition hover:bg-emerald-400/10"
                >
                  <td className="px-4 py-3 text-slate-400">{index + 1}</td>
                  <th
                    scope="row"
                    className="px-4 py-3 text-sm font-semibold text-white"
                  >
                    {club.team}
                    <p className="text-xs font-normal uppercase tracking-[0.2em] text-emerald-300">
                      {club.competition}
                    </p>
                  </th>
                  <td className="px-4 py-3 text-center">{club.played}</td>
                  <td className="px-4 py-3 text-center">{club.won}</td>
                  <td className="px-4 py-3 text-center">{club.drawn}</td>
                  <td className="px-4 py-3 text-center">{club.lost}</td>
                  <td className="px-4 py-3 text-center">{club.goalsFor}</td>
                  <td className="px-4 py-3 text-center">{club.goalsAgainst}</td>
                  <td className={`px-4 py-3 text-center ${goalDifference >= 0 ? "text-emerald-300" : "text-rose-300"}`}>
                    {goalDifference >= 0 ? "+" : ""}
                    {goalDifference}
                  </td>
                  <td className="px-4 py-3 text-center font-semibold text-emerald-200">
                    {club.points}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
