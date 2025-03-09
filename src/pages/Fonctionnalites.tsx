
import PageHeader from '@/components/PageHeader';
import FeaturesList from '@/components/features/FeaturesList';
import RegenerativeMethodology from '@/components/features/RegenerativeMethodology';
import EconomicModel from '@/components/features/EconomicModel';

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

          <FeaturesList />
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

          <RegenerativeMethodology />
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

          <EconomicModel />
        </div>
      </section>
    </div>
  );
};

export default Fonctionnalites;
