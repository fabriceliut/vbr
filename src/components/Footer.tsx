
import { NavLink } from 'react-router-dom';
import { ExternalLink, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gradient mb-1">VBR Lyon</h2>
              <p className="text-sm text-gray-400">Venture Builder Régénératif</p>
            </div>
            <p className="text-gray-400 text-sm">
              Une plateforme d'innovation qui fédère talents, entreprises et capitaux dans une approche régénérative pour le territoire lyonnais.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://liut.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover-lift flex items-center text-sm text-gray-300 hover:text-white"
              >
                <span>liut.me</span>
                <ExternalLink className="ml-1 w-3 h-3" />
              </a>
              <a 
                href="https://thetandem.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover-lift flex items-center text-sm text-gray-300 hover:text-white"
              >
                <span>thetandem.fr</span>
                <ExternalLink className="ml-1 w-3 h-3" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/fonctionnalites" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Fonctionnalités
                </NavLink>
              </li>
              <li>
                <NavLink to="/timeline" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Timeline
                </NavLink>
              </li>
              <li>
                <NavLink to="/articles" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Articles
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5 mr-3" />
                <span className="text-sm text-gray-400">liut.fabrice@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 mr-3" />
                <span className="text-sm text-gray-400">Région Auvergne-Rhône-Alpes, Lyon</span>
              </div>
              <Button 
                asChild 
                className="mt-2 glass-morphism hover:bg-white/10"
              >
                <NavLink to="/contact">
                  Nous contacter
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Venture Builder Régénératif | Tous droits réservés
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <NavLink to="/mentions-legales" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
              Mentions légales
            </NavLink>
            <NavLink to="/confidentialite" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
              Politique de confidentialité
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
