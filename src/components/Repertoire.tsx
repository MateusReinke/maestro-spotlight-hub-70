import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Clock, Users, Play } from "lucide-react";
import MusicPlayer from "./MusicPlayer";

const Repertoire = () => {
  const [selectedSong, setSelectedSong] = useState<any>(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handlePlaySong = (piece: any) => {
    setSelectedSong(piece);
    setIsPlayerOpen(true);
  };
  const repertoireCategories = [
    {
      category: "Período Barroco",
      color: "bg-secondary",
      pieces: [
        {
          title: "As Quatro Estações",
          composer: "Antonio Vivaldi",
          duration: "40 min",
          formation: "Orquestra de Cordas e Solista",
          description: "Concertos para violino que retratam as estações do ano"
        },
        {
          title: "Suíte para Orquestra nº 3",
          composer: "Johann Sebastian Bach",
          duration: "25 min",
          formation: "Orquestra Completa",
          description: "Inclui a famosa 'Air on the G String'"
        },
        {
          title: "Música Aquática",
          composer: "Georg Friedrich Händel",
          duration: "60 min",
          formation: "Orquestra de Câmara",
          description: "Suíte composta para apresentação no rio Tâmisa"
        }
      ]
    },
    {
      category: "Período Clássico",
      color: "bg-primary",
      pieces: [
        {
          title: "Sinfonia nº 40 em Sol menor",
          composer: "Wolfgang Amadeus Mozart",
          duration: "35 min",
          formation: "Orquestra Sinfônica",
          description: "Uma das sinfonias mais reconhecidas de Mozart"
        },
        {
          title: "Sinfonia nº 9 'Coral'",
          composer: "Ludwig van Beethoven",
          duration: "70 min",
          formation: "Orquestra, Coro e Solistas",
          description: "Inclui o famoso 'Hino à Alegria'"
        },
        {
          title: "Concerto para Piano nº 23",
          composer: "Wolfgang Amadeus Mozart",
          duration: "30 min",
          formation: "Piano Solo e Orquestra",
          description: "Concerto em Lá maior, K. 488"
        }
      ]
    },
    {
      category: "Período Romântico",
      color: "bg-accent",
      pieces: [
        {
          title: "Sinfonia nº 9 'Do Novo Mundo'",
          composer: "Antonín Dvořák",
          duration: "45 min",
          formation: "Orquestra Sinfônica",
          description: "Inspirada nas melodias americanas"
        },
        {
          title: "Concerto para Violino",
          composer: "Felix Mendelssohn",
          duration: "25 min",
          formation: "Violino Solo e Orquestra",
          description: "Concerto em Mi menor, Op. 64"
        },
        {
          title: "Abertura 1812",
          composer: "Pyotr Ilyich Tchaikovsky",
          duration: "15 min",
          formation: "Orquestra Completa",
          description: "Peça comemorativa com efeitos sonoros de canhões"
        }
      ]
    }
  ];

  return (
    <section id="repertoire" className="py-32 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 scroll-fade-in">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-6">
            Nosso Repertório
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma seleção cuidadosa de obras-primas da música erudita, organizadas por períodos históricos 
            e apresentadas com a técnica e interpretação que essas composições merecem.
          </p>
        </div>

        <div className="space-y-16">
          {repertoireCategories.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="scroll-slide-left"
            >
              <div className="flex items-center mb-8">
                <Badge className={`${category.color} text-white font-inter font-medium px-4 py-2 text-sm`}>
                  {category.category}
                </Badge>
                <div className="flex-1 h-px bg-border ml-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.pieces.map((piece, pieceIndex) => (
                  <Card 
                    key={piece.title}
                    className="shadow-modern hover:shadow-elegant transition-elegant hover-modern animate-scale-in bg-card cursor-pointer"
                    onClick={() => handlePlaySong(piece)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="font-playfair text-lg text-foreground leading-tight">
                            {piece.title}
                          </CardTitle>
                          <p className="font-inter font-semibold text-primary">
                            {piece.composer}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="ml-2 flex-shrink-0 hover:bg-primary hover:text-primary-foreground"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlaySong(piece);
                          }}
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4">
                        {piece.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-2" />
                          <span>{piece.duration}</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Users className="h-3 w-3 mr-2" />
                          <span>{piece.formation}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 scroll-fade-in">
          <div className="bg-card shadow-modern rounded-3xl p-12 max-w-3xl mx-auto">
            <Music className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-playfair font-bold text-2xl text-foreground mb-4">
              Repertório Personalizado
            </h3>
            <p className="font-inter text-muted-foreground leading-relaxed mb-6">
              Além do nosso repertório padrão, criamos programas personalizados para eventos especiais, 
              casamentos, cerimônias e apresentações corporativas.
            </p>
            <p className="font-inter text-sm text-muted-foreground">
              Entre em contato conosco para discutir suas necessidades musicais específicas.
            </p>
          </div>
        </div>
      </div>
      
      <MusicPlayer 
        isOpen={isPlayerOpen}
        onClose={() => setIsPlayerOpen(false)}
        song={selectedSong}
      />
    </section>
  );
};

export default Repertoire;