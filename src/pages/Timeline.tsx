
import { useState } from 'react';
import { 
  Flag,
  CheckCircle, 
  Circle, 
  Rocket, 
  Users, 
  Target,
  Award
} from 'lucide-react';
import { cn } from '@/lib/utils';
import PageHeader from '@/components/PageHeader';

type TimelineItem = {
  id: string;
  date: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  icon: 'flag' | 'rocket' | 'users' | 'target' | 'award';
  milestones?: string[];
};

const timelineData: TimelineItem[] = [
  {
    id: '1',
    date: 'Janvier 2023',
    title: 'Phase de conception',
    description: 'Élaboration du modèle théorique et des principes fondateurs du Venture Builder Régénératif.',
    status: 'completed',
    icon: 'flag',
    milestones: [
      'Benchmarking des modèles existants',
      'Définition du cadre conceptuel régénératif',
      'Identification des parties prenantes clés',
      'Élaboration de la théorie du changement'
    ]
  },
  {
    id: '2',
    date: 'Avril 2023',
    title: 'Étude de faisabilité territoriale',
    description: 'Analyse des besoins du territoire lyonnais et de la région AURA pour adapter le modèle.',
    status: 'completed',
    icon: 'target',
    milestones: [
      'Cartographie des acteurs du territoire',
      'Identification des filières prioritaires',
      'Évaluation des ressources disponibles',
      'Analyse des besoins non couverts'
    ]
  },
  {
    id: '3',
    date: 'Septembre 2023',
    title: 'Création de l\'entité juridique',
    description: 'Formalisation de la structure porteuse du VBR avec une gouvernance adaptée à sa mission.',
    status: 'completed',
    icon: 'flag',
    milestones: [
      'Constitution juridique',
      'Mise en place de la gouvernance',
      'Élaboration des statuts',
      'Structuration de l\'équipe fondatrice'
    ]
  },
  {
    id: '4',
    date: 'Janvier 2024',
    title: 'Développement des premiers partenariats',
    description: 'Établissement de collaborations stratégiques avec les acteurs clés du territoire.',
    status: 'in-progress',
    icon: 'users',
    milestones: [
      'Signature de conventions avec les institutions',
      'Partenariats avec des PME locales',
      'Mobilisation des premiers investisseurs',
      'Intégration dans les réseaux d\'innovation territoriaux'
    ]
  },
  {
    id: '5',
    date: 'Avril 2024',
    title: 'Lancement des premiers projets pilotes',
    description: 'Démarrage des premières initiatives concrètes pour tester et valider le modèle.',
    status: 'in-progress',
    icon: 'rocket',
    milestones: [
      'Sélection de 3 projets pilotes',
      'Constitution des équipes dédiées',
      'Allocation des premières ressources',
      'Mise en place des indicateurs de suivi'
    ]
  },
  {
    id: '6',
    date: 'Septembre 2024',
    title: 'Création du fonds d\'investissement',
    description: 'Structuration du véhicule financier dédié aux projets à impact régénératif.',
    status: 'planned',
    icon: 'award',
    milestones: [
      'Définition de la stratégie d\'investissement',
      'Mobilisation des premiers LP',
      'Structuration juridique et fiscale',
      'Élaboration de la méthodologie d\'évaluation d\'impact'
    ]
  },
  {
    id: '7',
    date: 'Janvier 2025',
    title: 'Ouverture de l\'espace physique',
    description: 'Inauguration du hub territorial, lieu de rencontre et d\'innovation collaborative.',
    status: 'planned',
    icon: 'flag',
    milestones: [
      'Aménagement des espaces de travail',
      'Installation des équipements',
      'Organisation d\'événements d\'inauguration',
      'Lancement des premiers programmes sur site'
    ]
  },
  {
    id: '8',
    date: 'Mars 2025',
    title: 'Lancement de l\'accélérateur',
    description: 'Démarrage du programme d\'accélération pour startups à visée régénérative.',
    status: 'planned',
    icon: 'rocket',
    milestones: [
      'Définition du programme d\'accompagnement',
      'Recrutement des mentors et experts',
      'Processus de sélection des startups',
      'Mise en place des ressources dédiées'
    ]
  },
  {
    id: '9',
    date: '2026',
    title: 'Déploiement régional',
    description: 'Extension du modèle à l\'échelle de la région Auvergne-Rhône-Alpes.',
    status: 'planned',
    icon: 'target',
    milestones: [
      'Adaptation du modèle aux spécificités locales',
      'Nouveaux partenariats territoriaux',
      'Duplication des programmes à succès',
      'Mise en réseau des différentes antennes'
    ]
  }
];

const Timeline = () => {
  const [selectedItem, setSelectedItem] = useState<string>(timelineData[3].id);

  const getIconComponent = (iconName: string, className: string) => {
    switch (iconName) {
      case 'flag':
        return <Flag className={className} />;
      case 'rocket':
        return <Rocket className={className} />;
      case 'users':
        return <Users className={className} />;
      case 'target':
        return <Target className={className} />;
      case 'award':
        return <Award className={className} />;
      default:
        return <Flag className={className} />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'in-progress':
        return (
          <div className="relative">
            <Circle className="w-5 h-5 text-blue-400" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        );
      case 'planned':
        return <Circle className="w-5 h-5 text-gray-500" />;
      default:
        return <Circle className="w-5 h-5 text-gray-500" />;
    }
  };

  const selectedTimelineItem = timelineData.find(item => item.id === selectedItem);

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Timeline du projet"
        subtitle="Découvrez les étapes clés du développement du Venture Builder Régénératif, de sa conception à son déploiement."
      />

      <section className="section-padding">
        <div className="page-container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Timeline Navigation */}
            <div className="w-full lg:w-3/5 overflow-hidden">
              <div className="glass-morphism rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Progression du projet</h2>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-gray-700 before:h-full">
                  {timelineData.map((item) => (
                    <div 
                      key={item.id}
                      className={cn(
                        "relative flex items-start cursor-pointer transition-all duration-300 pl-10 pr-4 py-3 -ml-0.5 hover:bg-white/5 rounded-lg group",
                        selectedItem === item.id ? "bg-white/5" : ""
                      )}
                      onClick={() => setSelectedItem(item.id)}
                    >
                      <div className={cn(
                        "absolute left-0 p-1 rounded-full transition-colors z-10",
                        item.status === 'completed' ? "bg-green-400/20" : 
                        item.status === 'in-progress' ? "bg-blue-400/20" : "bg-gray-700"
                      )}>
                        {getStatusIcon(item.status)}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                          <h3 className={cn(
                            "text-base font-semibold transition-colors",
                            item.status === 'completed' ? "text-white" : 
                            item.status === 'in-progress' ? "text-blue-300" : "text-gray-400"
                          )}>
                            {item.title}
                          </h3>
                          <time className="text-xs text-gray-500">{item.date}</time>
                        </div>
                        <p className="text-sm text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Item Details */}
            <div className="w-full lg:w-2/5">
              {selectedTimelineItem && (
                <div className="glass-morphism rounded-xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn(
                      "p-3 rounded-lg",
                      selectedTimelineItem.status === 'completed' ? "bg-green-500/10" : 
                      selectedTimelineItem.status === 'in-progress' ? "bg-blue-500/10" : "bg-white/5"
                    )}>
                      {getIconComponent(selectedTimelineItem.icon, cn(
                        "w-6 h-6",
                        selectedTimelineItem.status === 'completed' ? "text-green-400" : 
                        selectedTimelineItem.status === 'in-progress' ? "text-blue-400" : "text-gray-400"
                      ))}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{selectedTimelineItem.title}</h3>
                      <div className="flex items-center text-sm">
                        <span className="text-gray-400 mr-2">{selectedTimelineItem.date}</span>
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-xs font-medium",
                          selectedTimelineItem.status === 'completed' ? "bg-green-500/20 text-green-400" : 
                          selectedTimelineItem.status === 'in-progress' ? "bg-blue-500/20 text-blue-400" : "bg-gray-700 text-gray-400"
                        )}>
                          {selectedTimelineItem.status === 'completed' ? 'Complété' : 
                           selectedTimelineItem.status === 'in-progress' ? 'En cours' : 'Planifié'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{selectedTimelineItem.description}</p>

                  {selectedTimelineItem.milestones && (
                    <div>
                      <h4 className="text-white font-medium mb-3">Étapes clés :</h4>
                      <ul className="space-y-2">
                        {selectedTimelineItem.milestones.map((milestone, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span className="text-gray-300 text-sm">{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;
