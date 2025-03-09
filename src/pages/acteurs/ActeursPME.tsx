
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { 
  Factory, 
  Lightbulb, 
  Shuffle, 
  TrendingUp, 
  Users, 
  Shield,
  ArrowRight
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FeaturedCard from '@/components/FeaturedCard';

const ActeursPME = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="PME & ETI" 
        subtitle="Accélérez votre transition vers des modèles d'affaires plus durables et innovants"
      />
      
      <div className="page-container section-padding">
        <div className="max-w-3xl mx-auto mb-16 glass-morphism p-8 rounded-xl">
          <Badge variant="outline" className="mb-4 bg-white/5">Innovation & Transformation</Badge>
          <h2 className="text-3xl font-bold text-gradient mb-6">
            Transformez votre entreprise pour répondre aux enjeux économiques et écologiques
          </h2>
          <p className="text-gray-300 mb-4">
            Le Venture Builder Régénératif accompagne les PME et ETI dans leur transformation vers des 
            modèles d'affaires plus durables et innovants. Notre approche permet de développer de 
            nouvelles activités en interne, d'adopter des pratiques régénératives et de collaborer 
            avec des startups innovantes de notre écosystème.
          </p>
          <p className="text-gray-300 mb-6">
            Nous vous aidons à naviguer dans la complexité de la transition écologique et sociale 
            tout en préservant votre rentabilité et en développant de nouveaux avantages compétitifs.
          </p>
          
          <div className="mt-8 flex justify-center">
            <Button 
              asChild 
              className="bg-white text-black hover:bg-white/90 transition-colors"
            >
              <NavLink to="/contact">
                Explorer les opportunités de collaboration
              </NavLink>
            </Button>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Les avantages pour votre entreprise</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedCard
              title="Innovation Intrapreneuriale"
              description="Développez de nouvelles activités innovantes en interne avec le soutien méthodologique et financier du VBR."
              icon={Lightbulb}
            />
            <FeaturedCard
              title="Accès à l'écosystème innovant"
              description="Connectez-vous à des startups innovantes et des talents pour accélérer votre transformation."
              icon={Shuffle}
            />
            <FeaturedCard
              title="Transformation régénérative"
              description="Adoptez des pratiques qui régénèrent l'environnement tout en améliorant votre performance économique."
              icon={TrendingUp}
            />
            <FeaturedCard
              title="Diversification"
              description="Créez de nouvelles sources de revenus à travers le développement de produits et services innovants."
              icon={Factory}
            />
            <FeaturedCard
              title="Attractivité RH"
              description="Renforcez votre attractivité auprès des talents en intégrant le sens et l'impact à votre stratégie."
              icon={Users}
            />
            <FeaturedCard
              title="Résilience"
              description="Anticipez les mutations économiques et écologiques pour assurer la pérennité de votre entreprise."
              icon={Shield}
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Scénarios de collaboration</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-morphism p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">Scénario 1: Intrapreneuriat</h4>
              <p className="text-gray-400 mb-4">
                Votre entreprise souhaite développer de nouvelles activités en interne qui répondent 
                aux enjeux de la transition écologique.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <p className="ml-3 text-gray-300">
                    Identification des opportunités d'innovation par nos experts
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <p className="ml-3 text-gray-300">
                    Mise en place d'un programme d'intrapreneuriat au sein de votre structure
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <p className="ml-3 text-gray-300">
                    Accompagnement des équipes internes par nos experts en innovation régénérative
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <p className="ml-3 text-gray-300">
                    Co-investissement dans les projets prometteurs issus du programme
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Button 
                  asChild 
                  variant="outline"
                  className="glass-morphism hover:bg-white/10"
                >
                  <NavLink to="/contact">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </NavLink>
                </Button>
              </div>
            </div>
            
            <div className="glass-morphism p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">Scénario 2: Partenariat avec startups</h4>
              <p className="text-gray-400 mb-4">
                Votre entreprise cherche à accélérer sa transformation en collaborant avec des 
                startups innovantes déjà établies.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <p className="ml-3 text-gray-300">
                    Analyse de vos besoins en innovation et de vos enjeux stratégiques
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <p className="ml-3 text-gray-300">
                    Identification des startups pertinentes au sein de notre écosystème
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <p className="ml-3 text-gray-300">
                    Facilitation des premiers POC (Proof of Concept) avec les startups sélectionnées
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                  <p className="ml-3 text-gray-300">
                    Structuration de partenariats commerciaux ou d'investissements stratégiques
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Button 
                  asChild 
                  variant="outline"
                  className="glass-morphism hover:bg-white/10"
                >
                  <NavLink to="/contact">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Prêt à transformer votre entreprise ?</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour explorer les possibilités de collaboration 
            et accélérer votre transition vers un modèle d'affaires régénératif.
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

export default ActeursPME;
