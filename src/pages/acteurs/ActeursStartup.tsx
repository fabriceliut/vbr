
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  Network, 
  PiggyBank, 
  Award,
  ArrowRight
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FeaturedCard from '@/components/FeaturedCard';

const ActeursStartup = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Startups & Entrepreneurs" 
        subtitle="Développez des projets innovants à impact positif au sein du Venture Builder Régénératif"
      />
      
      <div className="page-container section-padding">
        <div className="max-w-3xl mx-auto mb-16 glass-morphism p-8 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2069" alt="Startup background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <Badge variant="outline" className="mb-4 bg-white/5">Rejoignez l'écosystème</Badge>
            <h2 className="text-3xl font-bold text-gradient mb-6">
              Accélérez votre startup dans un écosystème orienté impact
            </h2>
            <p className="text-gray-300 mb-4">
              Le Venture Builder Régénératif propose aux startups et entrepreneurs un environnement unique 
              alliant innovations technologiques, expertise sectorielle et approche régénérative. 
              Bénéficiez de ressources mutualisées et d'un accompagnement personnalisé pour développer 
              des solutions à fort impact positif sur le territoire.
            </p>
            <p className="text-gray-300 mb-6">
              Notre approche va au-delà de l'incubation traditionnelle en intégrant votre projet dans 
              un écosystème complet d'acteurs complémentaires orientés vers la création de valeur durable.
            </p>
            
            <div className="mt-8 flex justify-center">
              <Button 
                asChild 
                className="bg-white text-black hover:bg-white/90 transition-colors"
              >
                <NavLink to="/contact">
                  Rejoindre le Venture Builder Régénératif
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Les avantages pour votre startup</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedCard
              title="Financement adapté"
              description="Accédez à des investisseurs alignés avec vos valeurs et bénéficiez de financements adaptés à chaque étape de votre développement."
              icon={PiggyBank}
            />
            <FeaturedCard
              title="Réseau de partenaires"
              description="Intégrez un réseau de partenaires économiques, institutionnels et académiques pour faciliter votre développement commercial."
              icon={Network}
            />
            <FeaturedCard
              title="Expertise métier"
              description="Profitez de l'expertise de mentors et d'entrepreneurs expérimentés pour vous aider à surmonter les défis de croissance."
              icon={Briefcase}
            />
            <FeaturedCard
              title="Approche régénérative"
              description="Développez des modèles économiques innovants qui contribuent positivement à l'environnement et à la société."
              icon={TrendingUp}
            />
            <FeaturedCard
              title="Communauté d'entraide"
              description="Rejoignez une communauté d'entrepreneurs partageant les mêmes valeurs pour échanger des idées et coopérer."
              icon={Users}
            />
            <FeaturedCard
              title="Visibilité et crédibilité"
              description="Gagnez en visibilité et en crédibilité auprès des acteurs du territoire et des investisseurs potentiels."
              icon={Award}
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Comment rejoindre le VBR ?</h3>
          
          <div className="max-w-3xl mx-auto glass-morphism p-6 rounded-xl">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">1</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Contactez-nous</h4>
                  <p className="text-gray-400 mt-1">
                    Remplissez notre formulaire de contact en précisant votre projet et vos besoins.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">2</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Entretien initial</h4>
                  <p className="text-gray-400 mt-1">
                    Nous organiserons un entretien pour discuter de votre projet, évaluer l'adéquation 
                    avec notre approche régénérative et identifier les synergies potentielles.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">3</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Processus de sélection</h4>
                  <p className="text-gray-400 mt-1">
                    Les projets sont évalués sur leur potentiel d'impact, leur viabilité économique 
                    et leur complémentarité avec l'écosystème existant.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">4</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Intégration et accompagnement</h4>
                  <p className="text-gray-400 mt-1">
                    Une fois sélectionnée, votre startup intègre le VBR et bénéficie d'un 
                    accompagnement personnalisé et de ressources mutualisées.
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
                  Démarrer le processus <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Prêt à nous rejoindre ?</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir 
            comment le Venture Builder Régénératif peut vous aider à le développer.
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

export default ActeursStartup;
