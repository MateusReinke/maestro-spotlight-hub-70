import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-ensemble.jpg";
import { Button } from "@/components/ui/button";
import { Music, Calendar, ArrowDown, Play } from "lucide-react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Modern Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Músicos da Gimenes Produções em apresentação elegante" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/90 via-secondary/80 to-primary/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 animate-float opacity-20">
        <Music className="h-16 w-16 text-primary-glow" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float opacity-20" style={{
        animationDelay: '1s'
      }}>
        <Music className="h-12 w-12 text-primary-glow" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="font-playfair font-bold text-6xl md:text-8xl lg:text-9xl mb-8 leading-none">
            <span className="block">A trilha sonora que</span>
            <span className="text-primary-glow block animate-glow">transforma seu momento</span>
          </h1>
          <p className="font-inter text-xl md:text-2xl lg:text-3xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Gimenes Produções leva emoção e sofisticação para o seu evento com coral, orquestra e músicos especializados
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-300 ${mounted ? 'animate-scale-in' : 'opacity-0'}`}>
          <Button variant="default" size="lg" className="gradient-primary shadow-elegant hover-modern font-inter font-medium text-lg px-8 py-4">
            <Calendar className="mr-3 h-6 w-6" />
            Pedir Orçamento
          </Button>
          <Button variant="outline" size="lg" className="border-white/30 text-white font-inter font-medium text-lg px-8 py-4 transition-elegant backdrop-blur-sm bg-white/10 hover:bg-white/20">
            <Play className="mr-3 h-6 w-6" />
            Ouvir Repertório
          </Button>
        </div>

        {/* Modern Stats */}
        <div className={`mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-playfair font-bold text-primary-glow mb-2">200+</div>
            <div className="text-sm font-inter text-gray-300">Eventos Realizados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-playfair font-bold text-primary-glow mb-2">15+</div>
            <div className="text-sm font-inter text-gray-300">Músicos Especialistas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-playfair font-bold text-primary-glow mb-2">10+</div>
            <div className="text-sm font-inter text-gray-300">Anos de Experiência</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/70 text-sm font-inter">Role para descobrir</span>
            <ArrowDown className="h-6 w-6 text-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;