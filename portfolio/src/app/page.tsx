import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import TechStack from "@/components/TechStack";
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-zinc-700 selection:text-white">
      <Hero />
      <About />
      <Capabilities />
      <TechStack />
      <ProjectsSection />
      <Contact />
    </main>
  );
}
