import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { BackgroundSection } from "./components/BackgroundSection";
import { WhyEverytimeSection } from "./components/WhyEverytimeSection";
import { ProgramSection } from "./components/ProgramSection";
import { BudgetSection } from "./components/BudgetSection";
import { ROISection } from "./components/ROISection";
import { RoadmapSection } from "./components/RoadmapSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div style={{ background: "#080812", minHeight: "100vh" }}>
      <NavBar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="background">
        <BackgroundSection />
      </div>
      <div id="why">
        <WhyEverytimeSection />
      </div>
      <div id="program">
        <ProgramSection />
      </div>
      <div id="budget">
        <BudgetSection />
      </div>
      <div id="roi">
        <ROISection />
      </div>
      <div id="roadmap">
        <RoadmapSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
