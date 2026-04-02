import heroBg from "@/assets/hero-bg.jpg";

const LandingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Arena Legends Battle" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
      </div>

      {/* Animated particles/lines effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-float" />
        <div className="absolute top-1/3 right-1/3 w-px h-60 bg-gradient-to-b from-transparent via-neon-purple/20 to-transparent animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-20">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 animate-slide-up">
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
            Built with Unreal Engine 5
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-foreground">The Next Generation</span>
          <br />
          <span className="text-foreground">of Battle Royale</span>
          <br />
          <span className="gradient-text">is Coming</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Join the waitlist to get exclusive early access and rare skins.
          Experience Pixar-quality characters in an intense 100-player arena.
        </p>

        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <a href="#waitlist" className="inline-block gradient-primary text-primary-foreground font-bold px-8 py-4 rounded-lg box-glow hover:opacity-90 transition-all text-base uppercase tracking-wider">
            Join the Waitlist
          </a>
        </div>
      </div>

      {/* Bottom fade scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-glow">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default LandingHero;
