
import { Badge } from '@/components/ui/badge';
import StatCard from '@/components/StatCard';
import { Lightbulb, Award, LineChart, Users } from 'lucide-react';

const ImpactSection = () => {
  return (
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
  );
};

export default ImpactSection;
