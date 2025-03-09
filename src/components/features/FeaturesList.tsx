
import { 
  Rocket, 
  Lightbulb, 
  Users, 
  Settings, 
  CreditCard, 
  LineChart,
  GraduationCap,
  Target
} from 'lucide-react';
import FeaturedCard from '@/components/FeaturedCard';

const FeaturesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeaturedCard
        title="Studio de création"
        description="Notre studio développe et lance des entreprises innovantes à visée régénérative, en collaboration avec les acteurs du territoire."
        icon={Rocket}
      />
      
      <FeaturedCard
        title="Innovation Lab"
        description="Espace de recherche et d'expérimentation pour créer des solutions à fort impact positif, en lien avec les besoins territoriaux."
        icon={Lightbulb}
      />
      
      <FeaturedCard
        title="Communauté de talents"
        description="Réseau de compétences diversifiées mobilisables pour les projets du VBR, favorisant l'emploi local et l'engagement des talents."
        icon={Users}
      />
      
      <FeaturedCard
        title="Fonds d'investissement"
        description="Véhicule financier dédié aux projets régénératifs, combinant rentabilité et impact positif mesurable."
        icon={CreditCard}
      />
      
      <FeaturedCard
        title="Accélérateur"
        description="Programme d'accompagnement des startups et projets internes pour accélérer leur développement et maximiser leur impact."
        icon={Rocket}
      />
      
      <FeaturedCard
        title="Open Innovation"
        description="Plateforme de collaboration entre PME, startups et autres acteurs pour co-développer des solutions innovantes."
        icon={Settings}
      />
      
      <FeaturedCard
        title="Impact Lab"
        description="Méthodologie de mesure et d'amélioration continue de l'impact des projets sur les dimensions environnementales et sociales."
        icon={LineChart}
      />
      
      <FeaturedCard
        title="Espace de formation"
        description="Programmes de formation aux méthodologies régénératives et compétences essentielles pour l'entrepreneuriat à impact."
        icon={GraduationCap}
      />
      
      <FeaturedCard
        title="Hub territorial"
        description="Espace physique et virtuel de rencontre et collaboration entre les différents acteurs de l'écosystème."
        icon={Target}
      />
    </div>
  );
};

export default FeaturesList;
