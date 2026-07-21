import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/ProgressBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WhyTraineeship from "@/components/WhyTraineeship";
import Timeline from "@/components/Timeline";
import Playground from "@/components/Playground";
import Contact from "@/components/Contact";
import PitchModal from "@/components/PitchModal";
import EasterEgg from "@/components/EasterEgg";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WhyTraineeship />
        <Timeline />
        <Playground />
        <Contact />
      </main>
      <PitchModal />
      <EasterEgg />
    </>
  );
}
