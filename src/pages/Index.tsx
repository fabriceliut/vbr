import { NavLink } from 'react-router-dom';
import { ChevronRight, Zap, Users, LineChart, Award, ArrowRight, Rocket, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import HeroSection from '@/components/HeroSection';
import FeaturedCard from '@/components/FeaturedCard';
import StatCard from '@/components/StatCard';
import PartnersList from '@/components/PartnersList';
import { partnersData } from '@/data/partners';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection 
        title="Venture Builder Régénératif à Lyon"
        subtitle="Innovation économique territoriale • Vision durable pour l'Auvergne-Rhône-Alpes"
        description="Une nouvelle approche d'innovation économique qui réconcilie sens et rentabilité, en rassemblant startups, PME, investisseurs et talents dans un écosystème orienté impact positif."
        ctaText="Découvrir les fonctionnalités"
        ctaLink="/fonctionnalites"
        secondaryCtaText="Contactez-nous"
        secondaryCtaLink="/contact"
        backgroundClass="bg-[url('https://images.unsplash.com/photo-1603058401470-7eef06ca6ff6?q=80&w=2069')] bg-cover bg-center"
      />

      {/* Section Vision */}
      <section className="section-padding">
        <div className="page-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 bg-white/5">Notre vision</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Innover pour régénérer l'économie de notre territoire
            </h2>
            <p className="text-gray-300">
              Le Venture Builder Régénératif (VBR) est un modèle d'innovation qui rassemble talents, entreprises, 
              investisseurs et acteurs territoriaux dans une logique d'impact positif et de création de valeur durable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeaturedCard
              title="Innovation économique territoriale"
              description="Nous développons un modèle économique ancré dans les besoins du territoire lyonnais et de la région AURA."
              icon={Rocket}
            />
            <FeaturedCard
              title="Approche systémique régénérative"
              description="Notre méthodologie combine rentabilité économique et impact positif sur l'environnement et la société."
              icon={Zap}
            />
            <FeaturedCard
              title="Écosystème collaboratif"
              description="Nous fédérons une communauté d'acteurs diversifiés dans une dynamique de co-création et d'innovation partagée."
              icon={Users}
            />
          </div>
        </div>
      </section>

      {/* Section Impact */}
      <section className="section-padding bg-gradient-to-b from-transparent to-black/40">
        <div className="page-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 bg-white/5">Notre impact</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Des résultats concrets et mesurables
            </h2>
            <p className="text-gray-300">
              Le VBR s'engage à produire un impact mesurable sur le territoire, 
              tant en termes économiques qu'environnementaux et sociaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Startups accompagnées"
              value="12+"
              description="Startups innovantes à visée régénérative"
              icon={Lightbulb}
              trend={{ value: 25, isPositive: true }}
            />
            <StatCard
              title="Partenariats PME"
              value="8"
              description="Collaborations avec le tissu économique local"
              icon={Award}
              trend={{ value: 15, isPositive: true }}
            />
            <StatCard
              title="Investissements"
              value="2.5M€"
              description="Capitaux mobilisés pour des projets à impact"
              icon={LineChart}
              trend={{ value: 30, isPositive: true }}
            />
            <StatCard
              title="Emplois créés"
              value="35+"
              description="Nouveaux emplois générés sur le territoire"
              icon={Users}
              trend={{ value: 20, isPositive: true }}
            />
          </div>
        </div>
      </section>

      {/* Section Acteurs */}
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
            <div className="glass-morphism rounded-xl p-6 transition-all duration-300 hover-lift">
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

            <div className="glass-morphism rounded-xl p-6 transition-all duration-300 hover-lift">
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

            <div className="glass-morphism rounded-xl p-6 transition-all duration-300 hover-lift">
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

            <div className="glass-morphism rounded-xl p-6 transition-all duration-300 hover-lift">
              <h3 className="text-xl font-bold text-white mb-3">Talents</h3>
              <p className="text-gray-400 mb-4">
                Mettez vos compétences au service de projets porteurs de sens et d'impact.
              </p>
              <NavLink 
                to="/acteurs/talents" 
                className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
              </NavLink>
            </div>

            <div className="glass-morphism rounded-xl p-6 transition-all duration-300 hover-lift">
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

            <div className="glass-morphism rounded-xl p-6 transition-all duration-300 hover-lift">
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

      {/* Section Partenaires */}
      <section className="section-padding">
        <div className="page-container">
          <PartnersList 
            title="Nos partenaires"
            subtitle="Ils soutiennent déjà le Venture Builder Régénératif"
            partners={partnersData}
          />
          
          <div className="text-center mt-12">
            <Button 
              asChild 
              className="bg-white text-black hover:bg-white/90 transition-colors"
            >
              <NavLink to="/contact">
                Rejoignez l'écosystème
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
