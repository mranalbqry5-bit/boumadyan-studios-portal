import { Play, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Battle Royale" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl space-y-6">
          <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm animate-slide-up">
            Season 1 • Now Live
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">ARENA</span>
            <br />
            <span className="gradient-text">LEGENDS</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Drop into a stunning 3D battle royale built in Unreal Engine 5. 
            100 players. One champion. Pixar-quality characters meet competitive gameplay.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="text-base px-8">
              <Play className="w-5 h-5" /> Play Now
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8">
              <Download className="w-5 h-5" /> Download
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "10M+", label: "Players" },
              { value: "4.8", label: "Rating" },
              { value: "UE5", label: "Engine" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
