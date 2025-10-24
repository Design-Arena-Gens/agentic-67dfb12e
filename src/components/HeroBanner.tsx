import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8 shadow-2xl shadow-slate-900/60 sm:p-12">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6 text-white">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
            Global Coverage · 24/7
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            All the drama, data, and detail from the world of football.
          </h1>
          <p className="max-w-xl text-lg text-slate-200">
            Football Central brings together tactical analysis, high-resolution
            data visualizations, and human storytelling to help you understand
            the game beyond the final scoreline.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <Link
              href="/fixtures"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 px-6 py-3 text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:from-cyan-400 hover:to-emerald-500"
            >
              View match center
              <span aria-hidden className="ml-2">→</span>
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-emerald-400/70 hover:text-emerald-200"
            >
              Explore tactical library
            </Link>
          </div>
        </div>

        <div className="relative isolate">
          <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-emerald-400/30 blur-3xl" aria-hidden />
          <div className="absolute -right-16 bottom-0 h-60 w-60 rounded-full bg-cyan-400/30 blur-3xl" aria-hidden />
          <div className="relative grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Next Match to Watch
            </p>
            <div>
              <p className="text-lg font-semibold text-white">
                Northbank City vs Riverside Rovers
              </p>
              <p className="text-sm text-slate-300">
                Premier League · Matchday 11
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3">
                <p className="font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Kickoff
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  26 Oct · 16:30 GMT
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3">
                <p className="font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Venue
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  Northbank Arena
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-emerald-400/50 bg-emerald-400/10 p-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Live on Sky Sports Main Event
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
