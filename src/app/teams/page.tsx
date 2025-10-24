import type { Metadata } from "next";
import { TeamShowcase } from "@/components/TeamShowcase";
import { featuredTeams } from "@/data/footballData";

export const metadata: Metadata = {
  title: "Teams",
  description:
    "Explore tactical identities, form, and strengths of the most compelling clubs across global football right now.",
};

export default function TeamsPage() {
  return (
    <div className="space-y-10">
      <header className="rounded-3xl border border-white/10 bg-slate-950/85 p-8 shadow-xl shadow-slate-900/50">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Club Reports
          </p>
          <h1 className="text-3xl font-semibold text-white">Team Intelligence Hub</h1>
          <p className="max-w-2xl text-sm text-slate-300">
            Deep dives on the sides setting the pace across Europe and North
            America. Filter by tactical shape to explore how coaches are
            evolving the beautiful game.
          </p>
        </div>
      </header>

      <TeamShowcase teams={featuredTeams} />

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/40">
        <h2 className="text-xl font-semibold text-white">Scouting Notes</h2>
        <p className="mt-2 text-sm text-slate-300">
          Weekly reports summarizing recruitment priorities and academy standouts.
        </p>
        <ul className="mt-4 grid gap-4 text-sm text-slate-300 md:grid-cols-3">
          <li className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Recruitment Radar
            </p>
            <h3 className="mt-2 text-base font-semibold text-white">
              Riverside target left-sided centre-back with elite ball carrying.
            </h3>
          </li>
          <li className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Academy Watch
            </p>
            <h3 className="mt-2 text-base font-semibold text-white">
              Northbank&apos;s U18s introduce dual pivot press-resistant build-up.
            </h3>
          </li>
          <li className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Wellness Report
            </p>
            <h3 className="mt-2 text-base font-semibold text-white">
              Seattle rotate attackers to manage congested schedule load.
            </h3>
          </li>
        </ul>
      </section>
    </div>
  );
}
