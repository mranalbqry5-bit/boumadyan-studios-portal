import Navbar from "@/components/Navbar";
import LandingHero from "@/components/LandingHero";
import WaitlistSection from "@/components/WaitlistSection";
import SneakPeek from "@/components/SneakPeek";
import Roadmap from "@/components/Roadmap";
import GameShowcase from "@/components/GameShowcase";
import LeaderboardSection from "@/components/LeaderboardSection";
import DevBlog from "@/components/DevBlog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <LandingHero />
      <WaitlistSection />
      <SneakPeek />
      <Roadmap />
      <GameShowcase />
      <LeaderboardSection />
      <DevBlog />
      <Footer />
    </div>
  );
};

export default Index;
