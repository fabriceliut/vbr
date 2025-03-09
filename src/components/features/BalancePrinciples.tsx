
import { UserCheck } from 'lucide-react';

const BalancePrinciples = () => {
  return (
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
  );
};

export default BalancePrinciples;
