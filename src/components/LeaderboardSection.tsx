import { Trophy, Medal, Award } from "lucide-react";

const mockPlayers = [
  { rank: 1, name: "ShadowBlade", score: 15420, wins: 89, icon: Trophy },
  { rank: 2, name: "NeonHunter", score: 14850, wins: 76, icon: Medal },
  { rank: 3, name: "CyberWolf", score: 13200, wins: 71, icon: Award },
  { rank: 4, name: "PixelStorm", score: 12800, wins: 65 },
  { rank: 5, name: "VortexKing", score: 11950, wins: 58 },
  { rank: 6, name: "BlazeFury", score: 11200, wins: 52 },
  { rank: 7, name: "IcePhoenix", score: 10800, wins: 49 },
  { rank: 8, name: "ThunderAxe", score: 10100, wins: 44 },
];

const LeaderboardSection = () => {
  return (
    <section id="leaderboard" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-3">Global Rankings</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            <span className="gradient-text">Leaderboard</span>
          </h2>
        </div>

        <div className="glass rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[60px_1fr_100px_80px] md:grid-cols-[80px_1fr_120px_100px] px-6 py-3 border-b border-border/50 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            <span>Rank</span>
            <span>Player</span>
            <span className="text-right">Score</span>
            <span className="text-right">Wins</span>
          </div>

          {/* Rows */}
          {mockPlayers.map((player) => (
            <div
              key={player.rank}
              className={`grid grid-cols-[60px_1fr_100px_80px] md:grid-cols-[80px_1fr_120px_100px] px-6 py-4 items-center border-b border-border/30 hover:bg-primary/5 transition-colors ${
                player.rank <= 3 ? "bg-primary/5" : ""
              }`}
            >
              <span className="font-bold text-lg">
                {player.rank <= 3 && player.icon ? (
                  <player.icon className={`w-6 h-6 ${player.rank === 1 ? "text-neon-orange" : player.rank === 2 ? "text-muted-foreground" : "text-neon-orange/60"}`} />
                ) : (
                  <span className="text-muted-foreground">#{player.rank}</span>
                )}
              </span>
              <span className="font-semibold text-foreground">{player.name}</span>
              <span className="text-right text-primary font-bold">{player.score.toLocaleString()}</span>
              <span className="text-right text-muted-foreground">{player.wins}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6">
          Sign in to the <span className="text-primary">Player Portal</span> to see your ranking
        </p>
      </div>
    </section>
  );
};

export default LeaderboardSection;
