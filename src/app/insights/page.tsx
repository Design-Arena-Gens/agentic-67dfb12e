import type { Metadata } from "next";
import { ArticleGrid } from "@/components/ArticleGrid";
import { PlayerSpotlight } from "@/components/PlayerSpotlight";
import { TacticalSpotlight } from "@/components/TacticalSpotlight";
import { TrendExplorer } from "@/components/TrendExplorer";
import {
  editorialPicks,
  spotlightPlayers,
} from "@/data/footballData";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Analytics-driven football insights covering pressing trends, player evolutions, and tactical innovations shaping the global game.",
};

export default function InsightsPage() {
  return (
    <div className="space-y-10">
      <header className="rounded-3xl border border-white/10 bg-slate-950/85 p-8 shadow-xl shadow-slate-900/50">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Tactical Intelligence
          </p>
          <h1 className="text-3xl font-semibold text-white">
            Insights & Analysis Lab
          </h1>
          <p className="max-w-3xl text-sm text-slate-300">
            Deep dives on tactical blueprints, data visualizations, and player
            development. Each piece is distilled to help coaches, analysts, and
            supporters see the patterns emerging across the footballing world.
          </p>
        </div>
      </header>

      <TrendExplorer />
      <ArticleGrid
        articles={editorialPicks}
        title="Latest Deep Dives"
        eyebrow="Analysis"
        ctaHref={null}
      />
      <TacticalSpotlight />
      <PlayerSpotlight players={spotlightPlayers} />
    </div>
  );
}
