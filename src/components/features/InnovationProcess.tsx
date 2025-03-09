
import { Briefcase } from 'lucide-react';

const InnovationProcess = () => {
  return (
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
  );
};

export default InnovationProcess;
