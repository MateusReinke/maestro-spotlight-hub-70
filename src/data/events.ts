export interface UpcomingEvent {
  title: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  price: string;
  description: string;
  status: "Ingressos Disponíveis" | "Pré-venda" | "Em Breve";
  featured: boolean;
}

export interface PastEvent {
  title: string;
  date: string;
  venue: string;
  description: string;
}

// Agenda de próximos concertos exibida na seção "Eventos" do site.
// Para divulgar um novo concerto, adicione um novo objeto a este array.
export const upcomingEvents: UpcomingEvent[] = [];

// Apresentações já realizadas, exibidas em "Apresentações Anteriores".
export const pastEvents: PastEvent[] = [
  {
    title: "Gala de Abertura 2024",
    date: "15 de Março, 2024",
    venue: "Theatro São Pedro",
    description: "Concerto de abertura da temporada com obras de Mozart e Brahms",
  },
  {
    title: "Festival de Música Clássica",
    date: "10 de Junho, 2024",
    venue: "Centro Cultural",
    description: "Participação no festival com recital de música de câmara",
  },
  {
    title: "Concerto Beneficente",
    date: "22 de Agosto, 2024",
    venue: "Auditório Ibirapuera",
    description: "Apresentação beneficente para instituições de caridade",
  },
];
