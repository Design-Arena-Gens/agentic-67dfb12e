import Image from "next/image";
import { Article } from "@/data/footballData";

type ArticleGridProps = {
  articles: Article[];
  title?: string;
  eyebrow?: string;
  ctaHref?: string | null;
  ctaLabel?: string;
};

const gradientPalette = [
  "from-indigo-500/30 via-blue-500/30 to-emerald-400/30",
  "from-rose-500/30 via-orange-500/30 to-amber-400/30",
  "from-cyan-500/30 via-teal-500/30 to-blue-500/30",
];

export function ArticleGrid({
  articles,
  title = "Editorial Picks",
  eyebrow = "Storytelling",
  ctaHref = "/insights",
  ctaLabel = "View all insights",
}: ArticleGridProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/40">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            {eyebrow}
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-white">{title}</h2>
        </div>
        {ctaHref && (
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200"
          >
            {ctaLabel}
            <span aria-hidden>→</span>
          </a>
        )}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {articles.map((article, index) => {
          const gradient = gradientPalette[index % gradientPalette.length];
          return (
            <article
              key={article.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-emerald-400/70 hover:bg-emerald-400/5"
            >
              <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_60%)]" />
                <Image
                  src="/texture/pattern.svg"
                  alt="Abstract football graphic"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover opacity-25"
                  priority={index === 0}
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  <span>{article.category}</span>
                  <time dateTime={article.publishedAt}>
                    {new Date(article.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-emerald-200">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-300">{article.excerpt}</p>
                </div>
                <div className="mt-auto flex items-center justify-between text-xs text-slate-400">
                  <span>By {article.author}</span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 font-medium text-slate-200 transition hover:border-emerald-400/70 hover:text-white"
                  >
                    Read story <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
