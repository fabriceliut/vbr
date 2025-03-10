
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { 
  HelpCircle, 
  Handshake, 
  Users, 
  Network, 
  TrendingUp, 
  Award,
  ArrowRight
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FeaturedCard from '@/components/FeaturedCard';

const ActeursAccompagnants = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Accompagnants & Facilitateurs" 
        subtitle="Mettez votre expertise au service de projets innovants à impact positif au sein du Venture Builder Régénératif"
      />
      
      <div className="page-container section-padding">
        <div className="max-w-3xl mx-auto mb-16 glass-morphism p-8 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2069" 
              alt="Mentors background" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative z-10">
            <Badge variant="outline" className="mb-4 bg-white/5">Réseau d'accompagnement</Badge>
            <h2 className="text-3xl font-bold text-gradient mb-6">
              Rejoignez notre communauté d'experts en accompagnement
            </h2>
            <p className="text-gray-300 mb-4">
              Le Venture Builder Régénératif réunit des experts en accompagnement, mentors, coaches et facilitateurs 
              pour soutenir le développement de projets innovants à impact positif. Votre expertise est précieuse 
              pour aider les entrepreneurs à surmonter les défis et à maximiser leur impact.
            </p>
            <p className="text-gray-300 mb-6">
              Intégrez un réseau de professionnels partageant les mêmes valeurs et coopérez avec des projets 
              alignés avec une vision régénérative de l'économie et du développement territorial.
            </p>
            
            <div className="mt-8 flex justify-center">
              <Button 
                asChild 
                className="bg-white text-black hover:bg-white/90 transition-colors"
              >
                <NavLink to="/contact">
                  Rejoindre le réseau d'accompagnants
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Les avantages pour les accompagnants</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedCard
              title="Projets à impact"
              description="Accompagnez des projets innovants qui contribuent positivement à la transition écologique et sociale."
              icon={TrendingUp}
            />
            <FeaturedCard
              title="Réseau d'experts"
              description="Intégrez un réseau d'experts pluridisciplinaires pour enrichir vos approches et méthodologies."
              icon={Network}
            />
            <FeaturedCard
              title="Coopération fertile"
              description="Développez des coopérations avec d'autres accompagnants et partenaires du Venture Builder."
              icon={Handshake}
            />
            <FeaturedCard
              title="Approche régénérative"
              description="Participez à la mise en œuvre de méthodes d'accompagnement alignées avec une vision régénérative."
              icon={HelpCircle}
            />
            <FeaturedCard
              title="Communauté de valeurs"
              description="Rejoignez une communauté partageant des valeurs fortes autour de l'impact positif et de la coopération."
              icon={Users}
            />
            <FeaturedCard
              title="Visibilité et reconnaissance"
              description="Valorisez votre expertise au sein d'un écosystème d'innovation reconnu sur le territoire."
              icon={Award}
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Comment rejoindre notre réseau ?</h3>
          
          <div className="max-w-3xl mx-auto glass-morphism p-6 rounded-xl">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">1</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Présentez votre expertise</h4>
                  <p className="text-gray-400 mt-1">
                    Contactez-nous en précisant votre domaine d'expertise, votre expérience et vos approches méthodologiques.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">2</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Rencontre d'échange</h4>
                  <p className="text-gray-400 mt-1">
                    Nous vous inviterons à échanger avec notre équipe pour comprendre votre approche 
                    et explorer les synergies potentielles.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-medium">3</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Formalisation de la coopération</h4>
                  <p className="text-gray-400 mt-1">
                    Nous définirons ensemble les modalités de votre contribution au sein du Venture Builder 
                    Régénératif et les projets que vous pourriez accompagner.
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
                    Vous serez intégré(e) à notre réseau d'accompagnants et mis(e) en relation avec les projets 
                    correspondant à votre expertise.
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
                  Rejoindre le réseau <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Prêt à mettre votre expertise au service de l'innovation régénérative ?</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de la manière dont vous pourriez contribuer 
            au développement des projets au sein du Venture Builder Régénératif.
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

export default ActeursAccompagnants;
