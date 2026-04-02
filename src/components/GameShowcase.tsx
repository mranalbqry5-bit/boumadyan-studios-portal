import { Swords, Shield, Zap } from "lucide-react";
import charactersImg from "@/assets/characters.png";
import gameMapImg from "@/assets/game-map.jpg";

const features = [
  { icon: Swords, title: "100-Player Battles", desc: "Massive battle royale with strategic combat" },
  { icon: Shield, title: "Pixar-Style Characters", desc: "High-fidelity 3D heroes with unique abilities" },
  { icon: Zap, title: "Unreal Engine 5", desc: "Next-gen visuals with Nanite and Lumen" },
];

const GameShowcase = () => {
  return (
    <section id="games" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-3">Our Flagship Title</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            <span className="gradient-text">Arena Legends</span>
          </h2>
        </div>

        {/* Characters Image */}
        <div className="relative mb-16 rounded-2xl overflow-hidden box-glow">
          <img src={charactersImg} alt="Game Characters" loading="lazy" width={1280} height={720} className="w-full h-auto" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-xl p-6 hover:box-glow transition-all duration-300 group">
              <f.icon className="w-10 h-10 text-primary mb-4 group-hover:animate-pulse-glow" />
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Map Preview */}
        <div className="relative rounded-2xl overflow-hidden box-glow-purple">
          <img src={gameMapImg} alt="Game Map" loading="lazy" width={1280} height={720} className="w-full h-auto" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-sm text-primary uppercase tracking-wider font-semibold">Featured Map</p>
            <h3 className="text-2xl font-bold text-foreground">Neon Skylands</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameShowcase;
