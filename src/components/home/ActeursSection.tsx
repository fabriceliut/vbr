
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

const ActeursSection = () => {
  return (
    <section className="section-padding">
      <div className="page-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 bg-white/5">Nos acteurs</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Un écosystème complet d'acteurs engagés
          </h2>
          <p className="text-gray-300">
            Découvrez comment chaque acteur contribue à la dynamique du Venture Builder Régénératif
            et comment vous pouvez y participer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass-morphism rounded-xl p-6 transition-all duration-300 hover-lift overflow-hidden">
            <div className="h-40 rounded-lg mb-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2069" alt="Startups et entrepreneurs" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Startups & Entrepreneurs</h3>
            <p className="text-gray-400 mb-4">
              Intégrez un environnement propice au développement de projets innovants à impact positif.
            </p>
            <NavLink 
              to="/acteurs/startups" 
              className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
            </NavLink>
          </div>

          <div className="glass-morphism rounded-xl p-6 transition-all duration-300 hover-lift overflow-hidden">
            <div className="h-40 rounded-lg mb-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2069" alt="PME et ETI" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">PME & ETI</h3>
            <p className="text-gray-400 mb-4">
              Accélérez votre transition vers des modèles d'affaires plus durables et innovants.
            </p>
            <NavLink 
              to="/acteurs/pme-eti" 
              className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
            </NavLink>
          </div>

          <div className="glass-morphism rounded-xl p-6 transition-all duration-300 hover-lift overflow-hidden">
            <div className="h-40 rounded-lg mb-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1639763402885-2c8f9e35a2d1?q=80&w=2069" alt="Investisseurs" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Investisseurs</h3>
            <p className="text-gray-400 mb-4">
              Participez à des investissements à impact positif avec des retours financiers attractifs.
            </p>
            <NavLink 
              to="/acteurs/investisseurs" 
              className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
            </NavLink>
          </div>

          <div className="glass-morphism rounded-xl p-6 transition-all duration-300 hover-lift overflow-hidden">
            <div className="h-40 rounded-lg mb-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2069" alt="Acteurs de la recherche" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Acteurs de la Recherche</h3>
            <p className="text-gray-400 mb-4">
              Mettez vos compétences au service de projets porteurs de sens et d'impact.
            </p>
            <NavLink 
              to="/acteurs/recherche" 
              className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
            </NavLink>
          </div>

          <div className="glass-morphism rounded-xl p-6 transition-all duration-300 hover-lift overflow-hidden">
            <div className="h-40 rounded-lg mb-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2069" alt="Institutions" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Institutions</h3>
            <p className="text-gray-400 mb-4">
              Soutenez une initiative structurante pour le développement durable du territoire.
            </p>
            <NavLink 
              to="/acteurs/institutions" 
              className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
            </NavLink>
          </div>

          <div className="glass-morphism rounded-xl p-6 transition-all duration-300 hover-lift overflow-hidden">
            <div className="h-40 rounded-lg mb-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2069" alt="Mentors et experts" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Mentors & Experts</h3>
            <p className="text-gray-400 mb-4">
              Partagez votre expertise pour accompagner des projets innovants à visée régénérative.
            </p>
            <NavLink 
              to="/acteurs/mentorat" 
              className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
            </NavLink>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild 
            variant="outline"
            className="glass-morphism hover:bg-white/10"
          >
            <NavLink to="/fonctionnalites">
              Découvrir toutes nos fonctionnalités <ArrowRight className="ml-2 h-4 w-4" />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActeursSection;
