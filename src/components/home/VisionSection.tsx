
import { Badge } from '@/components/ui/badge';
import FeaturedCard from '@/components/FeaturedCard';
import { Rocket, Zap, Users } from 'lucide-react';

const VisionSection = () => {
  return (
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
  );
};

export default VisionSection;
