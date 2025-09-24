import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Calendar, MapPin, Users } from "lucide-react";

const Videos = () => {
  const events = [
    {
      id: 1,
      title: "Concerto de Gala - Teatro Municipal",
      date: "15 de Dezembro, 2023",
      location: "Teatro Municipal de São Paulo",
      description: "Uma noite inesquecível com as mais belas peças do repertório clássico.",
      thumbnail: null, // Será adicionado posteriormente
      duration: "1:45:30",
      audience: "850 presentes"
    },
    {
      id: 2,
      title: "Quarteto de Cordas - Sala São Paulo",
      date: "22 de Novembro, 2023",
      location: "Sala São Paulo",
      description: "Apresentação intimista com quarteto de cordas em repertório barroco.",
      thumbnail: null,
      duration: "1:12:45",
      audience: "320 presentes"
    },
    {
      id: 3,
      title: "Concerto de Câmara - Centro Cultural",
      date: "08 de Outubro, 2023",
      location: "Centro Cultural Banco do Brasil",
      description: "Música de câmara com foco em compositores brasileiros contemporâneos.",
      thumbnail: null,
      duration: "58:20",
      audience: "180 presentes"
    },
    {
      id: 4,
      title: "Recital de Piano - Conservatório",
      date: "25 de Setembro, 2023",
      location: "Conservatório Dramático e Musical",
      description: "Recital solo apresentando obras de Chopin, Debussy e Villa-Lobos.",
      thumbnail: null,
      duration: "1:25:10",
      audience: "120 presentes"
    }
  ];

  return (
    <section id="videos" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
            <Play className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="font-playfair font-bold text-4xl md:text-6xl text-foreground mb-6">
            Nossos Eventos
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Reviva os momentos mais marcantes de nossas apresentações através 
            destes registros especiais de nossos concertos e recitais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event, index) => (
            <Card 
              key={event.id}
              className="group shadow-card hover:shadow-elegant transition-elegant hover-modern animate-scale-in bg-card overflow-hidden border-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-0">
                {/* Video Thumbnail */}
                <div className="relative h-64 bg-gradient-dark overflow-hidden">
                  {event.thumbnail ? (
                    <img 
                      src={event.thumbnail} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-dark flex items-center justify-center text-primary relative">
                      <div className="absolute inset-0 bg-black/30"></div>
                      <div className="relative z-10 text-center">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/30 transition-elegant">
                          <Play className="h-10 w-10 text-primary ml-1" />
                        </div>
                        <p className="text-primary text-sm font-inter">Vídeo será adicionado em breve</p>
                      </div>
                    </div>
                  )}

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-elegant flex items-center justify-center">
                    <Button
                      size="lg"
                      className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-elegant"
                    >
                      <Play className="h-8 w-8 ml-1" />
                    </Button>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-inter font-medium text-white">
                      {event.duration}
                    </span>
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-8">
                  <div className="space-y-4">
                    <h3 className="font-playfair font-bold text-2xl text-card-foreground group-hover:text-primary transition-elegant">
                      {event.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-inter">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-inter">{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-inter">{event.audience}</span>
                      </div>
                    </div>
                    
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up">
          <Button 
            variant="outline" 
            size="lg"
            className="font-inter font-medium hover:bg-primary hover:text-primary-foreground border-primary/50 px-8 py-3 text-lg"
          >
            <Play className="h-5 w-5 mr-2" />
            Ver Todos os Vídeos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Videos;