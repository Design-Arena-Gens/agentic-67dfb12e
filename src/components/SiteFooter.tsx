export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-slate-950/90 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">Football Central</h3>
          <p className="text-sm text-slate-400">
            Daily coverage, tactical analysis, and storytelling from the world
            of football. Built for supporters, analysts, and the next
            generation of coaches.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>
              <a className="hover:text-white" href="/fixtures">
                Match Center
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="/teams">
                Team Profiles
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="/insights">
                Tactical Insights
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Newsletter
          </h4>
          <p className="mt-3 text-sm text-slate-400">
            Join 100k+ coaches and analysts receiving weekly breakdowns, set
            piece playbooks, and data visualizations.
          </p>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition hover:from-cyan-400 hover:to-emerald-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Football Central. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
