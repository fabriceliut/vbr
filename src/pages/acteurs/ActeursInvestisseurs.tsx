
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { 
  LineChart, 
  Handshake, 
  Target, 
  TrendingUp, 
  Globe,
  Shield,
  ArrowRight
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FeaturedCard from '@/components/FeaturedCard';

const ActeursInvestisseurs = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Investisseurs" 
        subtitle="Participez à des investissements à impact positif avec des retours financiers attractifs"
      />
      
      <div className="page-container section-padding">
        <div className="max-w-3xl mx-auto mb-16 glass-morphism p-8 rounded-xl">
          <Badge variant="outline" className="mb-4 bg-white/5">Investissement Régénératif</Badge>
          <h2 className="text-3xl font-bold text-gradient mb-6">
            Un nouveau paradigme d'investissement qui réconcilie performance et impact
          </h2>
          <p className="text-gray-300 mb-4">
            Le Venture Builder Régénératif propose aux investisseurs une approche innovante qui 
            dépasse la simple notion d'investissement à impact. Notre modèle vise à générer 
            des retours financiers attractifs tout en contribuant activement à la régénération 
            des écosystèmes économiques, sociaux et environnementaux de notre territoire.
          </p>
          <p className="text-gray-300 mb-6">
            Grâce à notre expertise et notre méthodologie éprouvée, nous identifions, développons 
            et accompagnons des projets entrepreneuriaux qui répondent aux grands défis de notre époque 
            tout en créant de la valeur économique durable.
          </p>
          
          <div className="mt-8 flex justify-center">
            <Button 
              asChild 
              className="bg-white text-black hover:bg-white/90 transition-colors"
            >
              <NavLink to="/contact">
                Explorer les opportunités d'investissement
              </NavLink>
            </Button>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Les avantages pour les investisseurs</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedCard
              title="Performances financières"
              description="Accédez à des opportunités d'investissement soigneusement sélectionnées et structurées pour optimiser le retour sur investissement."
              icon={LineChart}
            />
            <FeaturedCard
              title="Impact mesurable"
              description="Bénéficiez d'une méthodologie rigoureuse de mesure d'impact pour quantifier la contribution de vos investissements."
              icon={Target}
            />
            <FeaturedCard
              title="Portefeuille diversifié"
              description="Investissez dans un portefeuille diversifié de startups, PME en transformation et projets collaboratifs innovants."
              icon={TrendingUp}
            />
            <FeaturedCard
              title="Ancrage territorial"
              description="Contribuez directement au développement économique du territoire d'Auvergne-Rhône-Alpes et à sa transition écologique."
              icon={Globe}
            />
            <FeaturedCard
              title="Réduction des risques"
              description="Profitez de notre approche unique d'accompagnement qui réduit significativement les risques liés aux investissements."
              icon={Shield}
            />
            <FeaturedCard
              title="Synergies stratégiques"
              description="Accédez à un réseau d'acteurs complémentaires pour créer des partenariats stratégiques et développer de nouvelles opportunités."
              icon={Handshake}
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Nos mécanismes d'investissement</h3>
          
          <div className="max-w-3xl mx-auto glass-morphism p-6 rounded-xl mb-10">
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">1. Fonds d'investissement régénératif</h4>
                <p className="text-gray-400 mb-3">
                  Notre fonds d'investissement principal permet de financer les startups et projets 
                  régénératifs à différents stades de développement.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Tickets d'investissement de 50K€ à 500K€ selon le stade de développement
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Ciblage de projets à fort potentiel de croissance et d'impact positif
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Stratégie d'investissement sur 5-7 ans avec possibilités de sortie adaptées
                    </p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-white mb-3">2. Co-investissement par projet</h4>
                <p className="text-gray-400 mb-3">
                  Possibilité pour les investisseurs de co-investir directement dans des projets 
                  spécifiques aux côtés du Venture Builder Régénératif.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Sélection personnalisée de projets selon vos critères d'investissement
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Accompagnement stratégique et opérationnel par nos équipes
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Participation active à la gouvernance selon le niveau d'investissement
                    </p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-white mb-3">3. Club Deal territorial</h4>
                <p className="text-gray-400 mb-3">
                  Structure permettant à des investisseurs locaux (particuliers, family offices, entreprises) 
                  de s'associer pour financer des projets à impact sur le territoire.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Mutualisation des ressources pour accéder à des projets de plus grande envergure
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Réunions trimestrielles d'analyse et de validation des investissements
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Impact direct et visible sur le développement économique local
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Notre processus d'investissement</h3>
          
          <div className="max-w-3xl mx-auto glass-morphism p-6 rounded-xl">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">1</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Identification des opportunités</h4>
                  <p className="text-gray-400 mt-1">
                    Sélection rigoureuse des projets à fort potentiel de croissance et d'impact positif.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">2</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Due diligence approfondie</h4>
                  <p className="text-gray-400 mt-1">
                    Analyse complète des aspects financiers, techniques, juridiques et des potentiels d'impact.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">3</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Structuration de l'investissement</h4>
                  <p className="text-gray-400 mt-1">
                    Définition des conditions d'investissement, des objectifs de performance et des 
                    mécanismes de gouvernance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">4</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Accompagnement stratégique et opérationnel</h4>
                  <p className="text-gray-400 mt-1">
                    Suivi actif des projets avec mobilisation d'expertises spécifiques pour maximiser 
                    les chances de succès.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">5</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Reporting transparent</h4>
                  <p className="text-gray-400 mt-1">
                    Communication régulière sur les performances financières et les impacts générés 
                    par les investissements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                asChild 
                variant="outline"
                className="glass-morphism hover:bg-white/10"
              >
                <NavLink to="/contact">
                  Discuter avec notre équipe d'investissement <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Prêt à investir dans l'économie de demain ?</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Contactez notre équipe d'investissement pour explorer les opportunités qui correspondent 
            à votre stratégie et à vos objectifs d'impact.
          </p>
          <Button 
            asChild 
            className="bg-white text-black hover:bg-white/90 transition-colors"
          >
            <NavLink to="/contact">
              Contacter le VBR
            </NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActeursInvestisseurs;
