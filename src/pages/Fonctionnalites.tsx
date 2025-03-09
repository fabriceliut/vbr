
import { 
  Rocket, 
  Lightbulb, 
  Users, 
  Database, 
  Settings, 
  CreditCard, 
  Tree, 
  Briefcase, 
  UserCheck,
  GraduationCap,
  Target,
  LineChart
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FeaturedCard from '@/components/FeaturedCard';

const Fonctionnalites = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Fonctionnalités du VBR"
        subtitle="Découvrez les différentes composantes du Venture Builder Régénératif et comment elles s'articulent ensemble."
      />

      <section className="section-padding">
        <div className="page-container">
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-4">Une approche systémique et régénérative</h2>
            <p className="text-gray-300">
              Le VBR propose un écosystème complet et interconnecté, où chaque composante renforce les autres 
              dans une logique de création de valeur partagée et d'impact positif pour le territoire.
            </p>
          </div>

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
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-transparent to-black/40">
        <div className="page-container">
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-4">Méthodologie régénérative</h2>
            <p className="text-gray-300">
              Notre approche méthodologique s'articule autour de principes et processus qui garantissent 
              l'alignement entre performance économique et impact positif sur l'écosystème.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-morphism rounded-xl p-6 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <Tree className="h-5 w-5 mr-2 text-green-400" /> 
                Principes régénératifs
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> 
                  <span>Développement qui restaure et régénère les écosystèmes naturels et sociaux</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> 
                  <span>Logique d'abondance et de création de valeur partagée</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> 
                  <span>Vision systémique et holistique des enjeux territoriaux</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> 
                  <span>Équilibre entre court et long terme dans la prise de décision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span> 
                  <span>Mesure continue de l'impact et amélioration itérative</span>
                </li>
              </ul>
            </div>

            <div className="glass-morphism rounded-xl p-6 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-blue-400" /> 
                Processus d'innovation
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span> 
                  <span>Identification des besoins territoriaux et opportunités régénératives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span> 
                  <span>Co-création avec les parties prenantes locales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span> 
                  <span>Prototypage et expérimentation en conditions réelles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">4.</span> 
                  <span>Incubation et développement initial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">5.</span> 
                  <span>Accélération et scaling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">6.</span> 
                  <span>Mesure d'impact et optimisation continue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">7.</span> 
                  <span>Intégration dans l'écosystème territorial</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="page-container">
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-4">Modèle économique hybride</h2>
            <p className="text-gray-300">
              Le VBR développe un modèle économique innovant qui combine différentes sources de revenus 
              et garantit l'équilibre entre impact positif et viabilité financière.
            </p>
          </div>

          <div className="glass-morphism rounded-xl p-8 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Database className="h-5 w-5 mr-2 text-blue-400" /> 
                  Sources de revenus
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span> 
                    <span>
                      <strong className="text-white">Participations equity</strong> dans les startups créées et accompagnées
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span> 
                    <span>
                      <strong className="text-white">Revenus de services</strong> d'innovation et d'accompagnement pour PME/ETI
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span> 
                    <span>
                      <strong className="text-white">Management fees</strong> sur les investissements réalisés
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span> 
                    <span>
                      <strong className="text-white">Programmes d'innovation</strong> en partenariat avec institutions publiques
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span> 
                    <span>
                      <strong className="text-white">Formations et événements</strong> sur les méthodologies régénératives
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <UserCheck className="h-5 w-5 mr-2 text-green-400" /> 
                  Principes d'équilibre
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span> 
                    <span>
                      <strong className="text-white">Impact First, Finance Next</strong> : priorité à l'impact sans sacrifier la viabilité économique
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span> 
                    <span>
                      <strong className="text-white">Diversification des revenus</strong> pour réduire les risques et assurer la pérennité
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span> 
                    <span>
                      <strong className="text-white">Value-driven Pricing</strong> : tarification basée sur la valeur créée plutôt que sur les coûts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span> 
                    <span>
                      <strong className="text-white">Réinvestissement</strong> d'une part des bénéfices dans les projets à fort potentiel d'impact
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span> 
                    <span>
                      <strong className="text-white">Gouvernance partagée</strong> impliquant les parties prenantes dans les décisions stratégiques
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fonctionnalites;
