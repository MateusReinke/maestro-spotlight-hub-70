import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Instruments from "@/components/Instruments";
import InteractiveMusicians from "@/components/InteractiveMusicians";
import Repertoire from "@/components/Repertoire";
import Videos from "@/components/Videos";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyPlayer from "@/components/StickyPlayer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Index = () => {
  // Initialize scroll animations globally
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Repertoire />
      <InteractiveMusicians />
      <Videos />
      <Events />
      <Contact />
      <Footer />
      <StickyPlayer />
    </div>
  );
};

export default Index;