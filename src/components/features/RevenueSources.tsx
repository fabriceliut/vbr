
import { Database } from 'lucide-react';

const RevenueSources = () => {
  return (
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
  );
};

export default RevenueSources;
