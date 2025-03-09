
import { Trees } from 'lucide-react';

const RegenerativePrinciples = () => {
  return (
    <div className="glass-morphism rounded-xl p-6 transition-all duration-300">
      <h3 className="text-xl font-bold text-white mb-3 flex items-center">
        <Trees className="h-5 w-5 mr-2 text-green-400" /> 
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
  );
};

export default RegenerativePrinciples;
