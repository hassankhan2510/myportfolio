import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import ResearchSection from "@/components/ResearchSection";
import ProjectsSection from "@/components/ProjectsSection";
import SocialImpact from "@/components/SocialImpact";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-theme-accent-purple selection:text-white">
      <Hero />
      <About />
      <Capabilities />
      <Experience />
      <ResearchSection />
      <TechStack />
      <ProjectsSection />
      <SocialImpact />
      <Contact />
    </main>
  );
}
