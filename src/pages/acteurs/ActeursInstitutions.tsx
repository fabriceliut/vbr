
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  LineChart, 
  Users, 
  Network, 
  Target, 
  Award,
  ArrowRight
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FeaturedCard from '@/components/FeaturedCard';

const ActeursInstitutions = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Institutions Publiques & Collectivités" 
        subtitle="Soutenez l'innovation territoriale et la création de valeur durable au sein du Venture Builder Régénératif"
      />
      
      <div className="page-container section-padding">
        <div className="max-w-3xl mx-auto mb-16 glass-morphism p-8 rounded-xl">
          <Badge variant="outline" className="mb-4 bg-white/5">Partenariat territorial</Badge>
          <h2 className="text-3xl font-bold text-gradient mb-6">
            Renforcez l'innovation et l'attractivité de votre territoire
          </h2>
          <p className="text-gray-300 mb-4">
            Le Venture Builder Régénératif propose aux institutions publiques et collectivités un modèle innovant 
            pour soutenir le développement économique local tout en répondant aux enjeux de transition écologique 
            et sociale. Notre approche favorise la création d'emplois qualifiés et d'entreprises à fort impact positif.
          </p>
          <p className="text-gray-300 mb-6">
            En vous associant au VBR, vous soutenez un écosystème d'innovation qui développe des solutions répondant 
            aux besoins spécifiques de votre territoire et de ses habitants.
          </p>
          
          <div className="mt-8 flex justify-center">
            <Button 
              asChild 
              className="bg-white text-black hover:bg-white/90 transition-colors"
            >
              <NavLink to="/contact">
                Devenir partenaire institutionnel
              </NavLink>
            </Button>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Les avantages pour votre institution</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedCard
              title="Développement territorial"
              description="Stimulez le développement économique local avec des projets innovants alignés avec les besoins du territoire."
              icon={Building}
            />
            <FeaturedCard
              title="Réseau d'innovateurs"
              description="Accédez à un réseau d'entrepreneurs, de chercheurs et d'innovateurs pour développer des solutions à impact."
              icon={Network}
            />
            <FeaturedCard
              title="Impact mesurable"
              description="Bénéficiez d'indicateurs d'impact précis pour évaluer les retombées économiques, sociales et environnementales."
              icon={LineChart}
            />
            <FeaturedCard
              title="Approche régénérative"
              description="Soutenez des modèles économiques qui contribuent positivement à la régénération des écosystèmes locaux."
              icon={Target}
            />
            <FeaturedCard
              title="Création d'emplois"
              description="Favorisez la création d'emplois qualifiés et durables sur votre territoire grâce aux entreprises accompagnées."
              icon={Users}
            />
            <FeaturedCard
              title="Rayonnement territorial"
              description="Renforcez l'attractivité et la visibilité de votre territoire comme lieu d'innovation régénérative."
              icon={Award}
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Comment devenir partenaire du VBR ?</h3>
          
          <div className="max-w-3xl mx-auto glass-morphism p-6 rounded-xl">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">1</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Prise de contact</h4>
                  <p className="text-gray-400 mt-1">
                    Contactez-nous pour échanger sur les enjeux spécifiques de votre territoire et vos objectifs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">2</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Présentation détaillée</h4>
                  <p className="text-gray-400 mt-1">
                    Nous vous présenterons en détail le fonctionnement du Venture Builder Régénératif 
                    et les modalités de partenariat possibles.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">3</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Convention de partenariat</h4>
                  <p className="text-gray-400 mt-1">
                    Nous établirons ensemble une convention de partenariat définissant les objectifs, 
                    les engagements et les indicateurs de suivi.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">4</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Mise en œuvre et suivi</h4>
                  <p className="text-gray-400 mt-1">
                    Nous mettrons en place un comité de suivi pour évaluer régulièrement l'avancement 
                    des projets et leur impact sur le territoire.
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
                  Engager un partenariat <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Votre territoire est prêt pour l'innovation régénérative ?</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter des opportunités de partenariat et de la manière 
            dont le Venture Builder Régénératif peut contribuer au développement durable de votre territoire.
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

export default ActeursInstitutions;
