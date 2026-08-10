import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Documents from "@/components/Documents";
import Contact from "@/components/Contact";
import MotionProvider from "@/components/MotionProvider";

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Documents />
        <Contact />
      </main>
    </MotionProvider>
  );
}
