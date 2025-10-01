"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import FloatingSocials from "@/components/FloatingSocials";

export default function Home() {
  return (
    <div className="min-h-screen -mt-16 relative bg-[#F5F5F0]">
      <Hero />
      <div className="divider"></div>
      <About />
      <div className="divider"></div>
      <Experience />
      <div className="divider"></div>
      <Projects />
      <div className="divider"></div>
      <Contact />
      <FloatingSocials />
    </div>
  );
}
