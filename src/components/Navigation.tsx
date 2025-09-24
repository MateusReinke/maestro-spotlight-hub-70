import { useState, useEffect } from "react";
import { Menu, X, Music, Calendar, Users, FileText, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: "Início",
    href: "#home",
    icon: Music
  }, {
    name: "Sobre",
    href: "#about",
    icon: Users
  }, {
    name: "Artistas",
    href: "#musicians",
    icon: Users
  }, {
    name: "Repertório",
    href: "#repertoire",
    icon: FileText
  }, {
    name: "Eventos",
    href: "#events",
    icon: Calendar
  }, {
    name: "Contato",
    href: "#contact",
    icon: Headphones
  }];
  return <nav className={`fixed top-0 w-full z-50 transition-elegant ${isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-modern border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Music className={`h-10 w-10 transition-elegant ${isScrolled ? 'text-primary' : 'text-primary-glow'}`} />
              <div className="absolute inset-0 animate-glow opacity-30"></div>
            </div>
            <span className={`font-playfair font-bold text-2xl transition-elegant ${isScrolled ? 'text-foreground' : 'text-white'}`}>Gimenes Produções
          </span>
          </div>

          {/* Central Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className={`flex items-center space-x-8 px-8 py-3 rounded-full transition-elegant ${isScrolled ? 'bg-gradient-modern border border-border/30' : 'bg-white/10 backdrop-blur-sm border border-white/20'}`}>
              {navItems.map(item => <a key={item.name} href={item.href} className={`font-inter text-sm font-medium transition-elegant hover:scale-105 ${isScrolled ? 'text-muted-foreground hover:text-primary' : 'text-white/90 hover:text-primary-glow'}`}>
                  {item.name}
                </a>)}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="gradient-primary shadow-modern hover-modern font-inter font-medium">
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className={`h-6 w-6 transition-elegant ${isScrolled ? 'text-foreground' : 'text-white'}`} /> : <Menu className={`h-6 w-6 transition-elegant ${isScrolled ? 'text-foreground' : 'text-white'}`} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-modern">
            <div className="px-4 py-8 space-y-6">
              {navItems.map((item, index) => <a key={item.name} href={item.href} className="flex items-center space-x-4 font-inter text-lg font-medium text-muted-foreground hover:text-primary transition-elegant animate-fade-in-left hover:scale-105" style={{
            animationDelay: `${index * 0.1}s`
          }} onClick={() => setIsOpen(false)}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </a>)}
              <Button variant="default" className="w-full gradient-primary shadow-modern mt-6 font-inter font-medium">
                Contato
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;