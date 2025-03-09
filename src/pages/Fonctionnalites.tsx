
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { 
  Lightbulb, 
  Rocket, 
  Workflow, 
  Factory, 
  GitBranch,
  CaseLower,
  CaseUpper,
  ArrowRight
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FeaturedCard from '@/components/FeaturedCard';

const Fonctionnalites = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Fonctionnalités du Venture Builder Régénératif" 
        subtitle="Découvrez notre approche unique d'innovation économique territoriale"
      />
      
      <div className="page-container section-padding">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-16 glass-morphism p-8 rounded-xl">
          <Badge variant="outline" className="mb-4 bg-white/5">Notre approche</Badge>
          <h2 className="text-3xl font-bold text-gradient mb-6">
            Un modèle hybride d'innovation économique territoriale
          </h2>
          <p className="text-gray-300 mb-4">
            Le Venture Builder Régénératif (VBR) combine les avantages d'un incubateur, d'un accélérateur et 
            d'un fonds d'investissement, tout en y ajoutant une dimension régénérative. 
            Notre modèle unique offre une approche systémique pour développer un écosystème économique 
            qui réconcilie rentabilité et impact positif sur le territoire lyonnais.
          </p>
          <p className="text-gray-300">
            Nous intervenons à tous les niveaux de l'écosystème entrepreneurial : 
            création et accélération de startups, transformation de PME/ETI, financement d'initiatives 
            innovantes et fédération d'acteurs autour de problématiques territoriales.
          </p>
        </div>
        
        {/* Comment ça fonctionne */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="outline" className="mb-4 bg-white/5">Comment ça fonctionne</Badge>
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Notre processus d'innovation et de coopération
            </h2>
            <p className="text-gray-300">
              Le VBR opère selon un modèle collaboratif qui implique différents acteurs et 
              plusieurs mécanismes d'innovation interconnectés.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <FeaturedCard
              title="Startup Studio"
              description="Création de startups à partir d'opportunités identifiées sur le territoire, avec un accompagnement de la conception jusqu'au lancement."
              icon={Rocket}
            />
            <FeaturedCard
              title="Innovation Collaborative"
              description="Facilitation de la coopération entre startups, PME/ETI, institutions et experts pour développer des solutions intégrées."
              icon={Workflow}
            />
            <FeaturedCard
              title="Intrapreneuriat"
              description="Accompagnement des PME et ETI dans la création de nouvelles branches d'activité régénératives au sein de leurs structures."
              icon={Factory}
            />
            <FeaturedCard
              title="Spin-off & Joint-ventures"
              description="Création d'entités autonomes issues de coopérations entre PME et startups pour développer de nouveaux produits et services."
              icon={GitBranch}
            />
            <FeaturedCard
              title="Incubation Ciblée"
              description="Programmes d'incubation sur mesure pour répondre à des problématiques spécifiques identifiées sur le territoire."
              icon={Lightbulb}
            />
            <FeaturedCard
              title="Financement Hybride"
              description="Mobilisation de fonds privés et publics pour financer les initiatives à différents stades de développement."
              icon={Factory}
            />
          </div>
        </div>
        
        {/* Cas d'usage */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="outline" className="mb-4 bg-white/5">Cas d'usage</Badge>
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Scénarios concrets pour comprendre notre action
            </h2>
            <p className="text-gray-300">
              Découvrez à travers ces exemples comment le VBR opère pour créer de la valeur économique 
              tout en générant un impact positif sur le territoire.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="glass-morphism p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-white/10 rounded-lg mr-3">
                  <CaseLower className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Cas d'usage 1: Transformation d'une PME industrielle</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Contexte</h4>
                <p className="text-gray-400 mb-4">
                  Une PME industrielle de 80 personnes dans la région lyonnaise cherche à transformer 
                  son modèle économique face aux contraintes environnementales et à la concurrence internationale.
                </p>
                
                <h4 className="text-lg font-semibold text-white mb-2">Action du VBR</h4>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Diagnostic de la chaîne de valeur et identification des opportunités d'innovation régénérative
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Mise en place d'un programme d'intrapreneuriat pour développer une nouvelle gamme de produits éco-conçus
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Association avec une startup spécialisée en économie circulaire pour créer une joint-venture dédiée
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Financement mixte (investissement VBR, fonds européens, capitaux de la PME)
                    </p>
                  </li>
                </ul>
                
                <h4 className="text-lg font-semibold text-white mb-2">Résultats</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Création d'une nouvelle entité économique viable employant 12 personnes
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Réduction de 30% de l'empreinte carbone de la production
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Développement de nouveaux marchés pour la PME et la startup partenaire
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-morphism p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-white/10 rounded-lg mr-3">
                  <CaseUpper className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Cas d'usage 2: Création d'une filière circulaire</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Contexte</h4>
                <p className="text-gray-400 mb-4">
                  Plusieurs acteurs du territoire (collectivités, entreprises, associations) identifient 
                  un problème de gestion des déchets textiles dans la région Auvergne-Rhône-Alpes.
                </p>
                
                <h4 className="text-lg font-semibold text-white mb-2">Action du VBR</h4>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Organisation d'ateliers collaboratifs pour concevoir une solution systémique
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Création de trois startups complémentaires couvrant la collecte, le tri et la valorisation des textiles
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Partenariat avec des entreprises textiles locales pour intégrer les matières recyclées
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Mobilisation d'investissements publics et privés pour financer l'infrastructure nécessaire
                    </p>
                  </li>
                </ul>
                
                <h4 className="text-lg font-semibold text-white mb-2">Résultats</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Création d'une filière économique locale créatrice de 35 emplois directs
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Valorisation de 75% des déchets textiles collectés dans la région
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      Réduction de l'impact environnemental et développement de l'économie circulaire
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Coopération interne */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="outline" className="mb-4 bg-white/5">Coopération interne</Badge>
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Notre fonctionnement en interne
            </h2>
            <p className="text-gray-300">
              Le VBR s'organise autour d'équipes multidisciplinaires qui collaborent pour accompagner les projets 
              et faciliter les synergies entre les différents acteurs de l'écosystème.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto glass-morphism p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Structure organisationnelle</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      <span className="font-medium text-white">Pôle Conception & Stratégie</span> : Identification des opportunités et conception des projets innovants
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      <span className="font-medium text-white">Pôle Accompagnement</span> : Soutien opérationnel aux entreprises et startups
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      <span className="font-medium text-white">Pôle Investissement</span> : Structuration et suivi des financements
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      <span className="font-medium text-white">Pôle Animation Écosystème</span> : Facilitation des connexions entre les acteurs
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <p className="ml-3">
                      <span className="font-medium text-white">Pôle Impact & Évaluation</span> : Mesure et optimisation de l'impact régénératif
                    </p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Processus de travail</h3>
                <ol className="space-y-4 text-gray-300">
                  <li className="flex">
                    <div className="bg-white/10 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">1</span>
                    </div>
                    <p className="ml-3">
                      <span className="font-medium text-white">Veille et prospective</span> : Identification des besoins et opportunités du territoire
                    </p>
                  </li>
                  <li className="flex">
                    <div className="bg-white/10 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">2</span>
                    </div>
                    <p className="ml-3">
                      <span className="font-medium text-white">Co-construction</span> : Conception collaborative des solutions avec les parties prenantes
                    </p>
                  </li>
                  <li className="flex">
                    <div className="bg-white/10 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">3</span>
                    </div>
                    <p className="ml-3">
                      <span className="font-medium text-white">Incubation</span> : Développement des projets avec apport de ressources mutualisées
                    </p>
                  </li>
                  <li className="flex">
                    <div className="bg-white/10 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">4</span>
                    </div>
                    <p className="ml-3">
                      <span className="font-medium text-white">Accélération</span> : Soutien au déploiement et à la croissance des initiatives
                    </p>
                  </li>
                  <li className="flex">
                    <div className="bg-white/10 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">5</span>
                    </div>
                    <p className="ml-3">
                      <span className="font-medium text-white">Mesure d'impact</span> : Évaluation régulière des impacts économiques, sociaux et environnementaux
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Intéressé par notre approche ?</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Rejoignez le Venture Builder Régénératif et participez à la création d'un nouveau modèle économique territorial 
            qui réconcilie rentabilité et impact positif sur notre territoire.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild 
              className="bg-white text-black hover:bg-white/90 transition-colors"
            >
              <NavLink to="/contact">
                Contactez-nous
              </NavLink>
            </Button>
            <Button 
              asChild 
              variant="outline"
              className="glass-morphism hover:bg-white/10"
            >
              <NavLink to="/acteurs/startups">
                Explorer les opportunités pour votre profil <ArrowRight className="ml-2 h-4 w-4" />
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fonctionnalites;
