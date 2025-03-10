
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { 
  Microscope, 
  BookOpen, 
  Users, 
  Network, 
  Share2, 
  Award,
  ArrowRight
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FeaturedCard from '@/components/FeaturedCard';

const ActeursRecherche = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Acteurs de la Recherche" 
        subtitle="Transformez vos travaux de recherche en solutions concrètes à impact positif grâce à notre écosystème d'innovation"
      />
      
      <div className="page-container section-padding">
        <div className="max-w-3xl mx-auto mb-16 glass-morphism p-8 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2069" 
              alt="Recherche background" 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </div>
          <div className="relative z-10">
            <Badge variant="outline" className="mb-4 bg-white/5">Coopération recherche-entreprise</Badge>
            <h2 className="text-3xl font-bold text-gradient mb-6">
              Transformez vos recherches en solutions concrètes à impact
            </h2>
            <p className="text-gray-300 mb-4">
              Le Venture Builder Régénératif offre aux chercheurs et équipes de recherche un environnement unique 
              pour transformer les travaux académiques en solutions concrètes. Coopérez avec des entrepreneurs, 
              des startups et des PME pour développer des applications pratiques de vos recherches.
            </p>
            <p className="text-gray-300 mb-6">
              Notre écosystème favorise le transfert de technologies et de connaissances entre le monde académique 
              et le monde entrepreneurial, dans une approche orientée vers l'impact positif et régénératif.
            </p>
            
            <div className="mt-8 flex justify-center">
              <Button 
                asChild 
                className="bg-white text-black hover:bg-white/90 transition-colors"
              >
                <NavLink to="/contact">
                  Coopérer avec le Venture Builder Régénératif
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Les avantages pour les acteurs de la recherche</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedCard
              title="Application concrète"
              description="Voyez vos recherches se transformer en solutions concrètes avec un impact mesurable sur le territoire."
              icon={Microscope}
            />
            <FeaturedCard
              title="Réseau d'entrepreneurs"
              description="Accédez à un réseau d'entrepreneurs et d'innovateurs pour co-développer des projets basés sur vos recherches."
              icon={Network}
            />
            <FeaturedCard
              title="Valorisation académique"
              description="Bénéficiez d'opportunités de valorisation de vos travaux au-delà des publications scientifiques traditionnelles."
              icon={BookOpen}
            />
            <FeaturedCard
              title="Approche régénérative"
              description="Participez à des projets alignés avec une vision régénérative du développement économique et territorial."
              icon={Share2}
            />
            <FeaturedCard
              title="Communauté pluridisciplinaire"
              description="Intégrez une communauté pluridisciplinaire pour enrichir vos approches et méthodologies de recherche."
              icon={Users}
            />
            <FeaturedCard
              title="Reconnaissance territoriale"
              description="Augmentez la visibilité et l'impact de vos recherches sur le territoire et auprès des acteurs économiques."
              icon={Award}
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Comment coopérer avec le VBR ?</h3>
          
          <div className="max-w-3xl mx-auto glass-morphism p-6 rounded-xl">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">1</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Présentez votre recherche</h4>
                  <p className="text-gray-400 mt-1">
                    Contactez-nous pour présenter vos domaines de recherche et explorer les possibilités de coopération.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">2</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Rencontre avec notre équipe</h4>
                  <p className="text-gray-400 mt-1">
                    Notre équipe évaluera avec vous les applications potentielles de votre recherche 
                    et les synergies possibles avec les projets existants.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">3</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Définition du projet</h4>
                  <p className="text-gray-400 mt-1">
                    Ensemble, nous définirons un projet de coopération concret, avec des objectifs 
                    et des étapes clairement définis.
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
                    Vous bénéficierez d'un accompagnement dans la réalisation du projet et la mesure de son impact.
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
                  Démarrer une coopération <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Envie de transformer votre recherche en impact concret ?</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos travaux de recherche et explorer 
            les possibilités de coopération au sein du Venture Builder Régénératif.
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

export default ActeursRecherche;
