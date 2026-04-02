import { Check, Clock, Rocket } from "lucide-react";

const milestones = [
  {
    phase: "Alpha",
    title: "Internal Testing",
    date: "Q2 2026",
    status: "current" as const,
    description: "Core gameplay mechanics, 3D character models, and arena prototype.",
    icon: Clock,
  },
  {
    phase: "Closed Beta",
    title: "Early Access Players",
    date: "Q4 2026",
    status: "upcoming" as const,
    description: "Waitlist members get first access. Feedback-driven iteration.",
    icon: Rocket,
  },
  {
    phase: "Open Beta",
    title: "Public Testing",
    date: "Q1 2027",
    status: "upcoming" as const,
    description: "Open to all players. Ranked mode and Battle Pass debut.",
    icon: Rocket,
  },
  {
    phase: "Global Launch",
    title: "Full Release",
    date: "Q2 2027",
    status: "upcoming" as const,
    description: "Cross-platform launch with Season 1 content.",
    icon: Rocket,
  },
];

const Roadmap = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-3">Development Progress</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase">
            <span className="gradient-text">Roadmap</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-neon-purple to-border" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div key={m.phase} className={`relative flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    m.status === "current" ? "gradient-primary box-glow" : "bg-secondary border border-border"
                  }`}>
                    {m.status === "current" ? (
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    ) : (
                      <m.icon className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "" : "md:mr-auto"} ${i % 2 !== 0 ? "" : "md:ml-auto"}`}>
                  <div className={`glass rounded-xl p-5 ${m.status === "current" ? "box-glow border-primary/30" : ""}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-primary font-bold uppercase tracking-wider">{m.phase}</span>
                      <span className="text-xs text-muted-foreground">• {m.date}</span>
                      {m.status === "current" && (
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full gradient-primary text-primary-foreground font-bold">In Progress</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground">{m.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
