import { Eye } from "lucide-react";
import charactersImg from "@/assets/characters.png";
import gameMapImg from "@/assets/game-map.jpg";

const SneakPeek = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            <Eye className="w-4 h-4 inline mr-2" />Exclusive Look
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            <span className="gradient-text">Sneak Peek into the Arena</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Characters */}
          <div className="group relative rounded-2xl overflow-hidden glass">
            <img src={charactersImg} alt="Pixar-style Battle Royale Characters" loading="lazy" width={1280} height={720} className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs text-primary uppercase tracking-wider font-semibold">Character Design</span>
              <h3 className="text-lg font-bold text-foreground">Pixar-Quality Heroes</h3>
              <p className="text-sm text-muted-foreground">High-fidelity stylized characters with unique abilities</p>
            </div>
          </div>

          {/* Environment */}
          <div className="group relative rounded-2xl overflow-hidden glass">
            <img src={gameMapImg} alt="UE5 Game Environment" loading="lazy" width={1280} height={720} className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs text-primary uppercase tracking-wider font-semibold">Environment</span>
              <h3 className="text-lg font-bold text-foreground">Neon Skylands Arena</h3>
              <p className="text-sm text-muted-foreground">Powered by Nanite & Lumen in Unreal Engine 5</p>
            </div>
          </div>
        </div>

        {/* Video placeholder */}
        <div className="mt-6 rounded-2xl overflow-hidden glass aspect-video flex items-center justify-center relative group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-card to-neon-purple/5" />
          <div className="relative z-10 text-center space-y-3">
            <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto box-glow group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Gameplay Trailer Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SneakPeek;
