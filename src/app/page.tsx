import { HeroBanner } from "@/components/HeroBanner";
import { MatchSchedule } from "@/components/MatchSchedule";
import { ArticleGrid } from "@/components/ArticleGrid";
import { LeagueTable } from "@/components/LeagueTable";
import { PlayerSpotlight } from "@/components/PlayerSpotlight";
import { TacticalSpotlight } from "@/components/TacticalSpotlight";
import {
  editorialPicks,
  leagueStandings,
  nextMatches,
  spotlightPlayers,
} from "@/data/footballData";

export default function Home() {
  return (
    <div className="space-y-10">
      <HeroBanner />
      <MatchSchedule matches={nextMatches} />
      <ArticleGrid articles={editorialPicks} />
      <LeagueTable standings={leagueStandings} />
      <PlayerSpotlight players={spotlightPlayers} />
      <TacticalSpotlight />
    </div>
  );
}
