import { tacticalConcepts } from "@/data/footballData";

export function TacticalSpotlight() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/40">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Tactical Library
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-white">
            Learn the Modern Game
          </h2>
        </div>
        <a
          href="/insights"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200"
        >
          Browse all lessons
          <span aria-hidden>→</span>
        </a>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {tacticalConcepts.map((concept) => (
          <article
            key={concept.title}
            className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/60 hover:bg-emerald-400/5"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {concept.focus}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {concept.title}
              </h3>
            </div>
            <p className="text-sm text-slate-300">{concept.description}</p>
            <p className="mt-auto text-xs font-medium text-emerald-300">
              {concept.duration}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
