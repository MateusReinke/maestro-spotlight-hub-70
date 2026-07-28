import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import { upcomingEvents, pastEvents } from "@/data/events";

const Events = () => {
  return (
    <section id="events" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 scroll-fade-in">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-6">
            Eventos e Concertos
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Acompanhe nossa agenda de apresentações e não perca a oportunidade de vivenciar 
            momentos únicos com a melhor música clássica.
          </p>
        </div>

        {/* Próximos Eventos */}
        <div className="mb-20">
          <h3 className="font-playfair font-bold text-3xl text-foreground mb-12 text-center scroll-fade-in">
            Próximos Concertos
          </h3>
          
          {upcomingEvents.length === 0 ? (
            <div className="max-w-xl mx-auto text-center bg-card shadow-soft rounded-2xl p-10 scroll-fade-in">
              <Calendar className="h-10 w-10 text-primary/50 mx-auto mb-4" />
              <p className="font-inter text-muted-foreground leading-relaxed">
                Nenhum concerto agendado no momento. Fale conosco para reservar sua data ou
                acompanhe nossas redes sociais para ficar por dentro das novidades.
              </p>
            </div>
          ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.title}
                className={`shadow-modern hover:shadow-elegant transition-elegant hover-modern bg-card scroll-slide-${
                  index % 2 === 0 ? 'left' : 'right'
                } ${
                  event.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-playfair text-xl text-foreground leading-tight">
                      {event.title}
                    </CardTitle>
                    {event.featured && (
                      <Badge className="bg-primary text-white font-inter text-xs">
                        Destaque
                      </Badge>
                    )}
                  </div>
                  <Badge 
                    className={`w-fit font-inter text-xs ${
                      event.status === 'Ingressos Disponíveis' ? 'bg-green-100 text-green-800' :
                      event.status === 'Pré-venda' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {event.status}
                  </Badge>
                </CardHeader>
                
                <CardContent>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-4">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-foreground">
                      <Calendar className="h-4 w-4 mr-3 text-primary" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground">
                      <Clock className="h-4 w-4 mr-3 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground">
                      <MapPin className="h-4 w-4 mr-3 text-primary" />
                      <span>{event.venue} - {event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-foreground">
                      <Ticket className="h-4 w-4 mr-3 text-primary" />
                      <span className="font-medium">{event.price}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="default" 
                    className="w-full gradient-primary shadow-soft hover-lift font-inter font-medium"
                  >
                    {event.status === 'Em Breve' ? 'Notificar-me' : 'Comprar Ingressos'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          )}
        </div>

        {/* Eventos Passados */}
        <div className="scroll-fade-in">
          <h3 className="font-playfair font-bold text-3xl text-foreground mb-12 text-center">
            Apresentações Anteriores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card 
                key={event.title}
                className="shadow-soft hover:shadow-card transition-elegant bg-muted/30 scroll-slide-left"
              >
                <CardContent className="p-6">
                  <h4 className="font-playfair font-semibold text-lg text-foreground mb-2">
                    {event.title}
                  </h4>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <MapPin className="h-3 w-3 mr-2" />
                    <span>{event.venue}</span>
                  </div>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20 text-center scroll-fade-in">
          <div className="bg-card shadow-modern rounded-3xl p-12 max-w-3xl mx-auto">
            <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-playfair font-bold text-2xl text-foreground mb-4">
              Fique Por Dentro
            </h3>
            <p className="font-inter text-muted-foreground leading-relaxed mb-6">
              Cadastre-se em nossa newsletter e seja o primeiro a saber sobre novos concertos, 
              pré-vendas e eventos exclusivos.
            </p>
            <Button 
              variant="outline" 
              className="font-inter font-medium hover:bg-primary/5 border-primary/30"
            >
              Cadastrar na Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;