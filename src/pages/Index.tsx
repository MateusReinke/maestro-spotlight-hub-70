import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Instruments from "@/components/Instruments";
import InteractiveMusicians from "@/components/InteractiveMusicians";
import Repertoire from "@/components/Repertoire";
import Videos from "@/components/Videos";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Index = () => {
  // Initialize scroll animations globally
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Instruments />
      <InteractiveMusicians />
      <Repertoire />
      <Videos />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;