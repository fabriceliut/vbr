
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type NavItemType = {
  title: string;
  path: string;
  submenu?: { title: string; path: string }[];
};

const navItems: NavItemType[] = [
  { title: 'Accueil', path: '/' },
  { 
    title: 'Acteurs', 
    path: '#',
    submenu: [
      { title: 'Startups', path: '/acteurs/startups' },
      { title: 'PME/ETI', path: '/acteurs/pme-eti' },
      { title: 'Investisseurs', path: '/acteurs/investisseurs' },
      { title: 'Talents', path: '/acteurs/talents' },
      { title: 'Institutions', path: '/acteurs/institutions' },
      { title: 'Mentorat', path: '/acteurs/mentorat' }
    ]
  },
  { title: 'Fonctionnalités', path: '/fonctionnalites' },
  { title: 'Timeline', path: '/timeline' },
  { title: 'Articles', path: '/articles' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSubmenu = (title: string) => {
    if (openSubmenu === title) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(title);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-black/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="page-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <NavLink to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <span className="text-xl font-bold text-gradient">VBR Lyon</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.submenu ? (
                  <div className="flex items-center space-x-1 cursor-pointer group">
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {item.title}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    <div className="absolute top-full left-0 pt-2 w-48 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-black/90 backdrop-blur-lg border border-gray-800 rounded-md shadow-xl overflow-hidden">
                        {item.submenu.map((subItem) => (
                          <NavLink 
                            key={subItem.path}
                            to={subItem.path}
                            className={({isActive}) => cn(
                              "block px-4 py-2 text-sm hover:bg-gray-800 transition-colors",
                              isActive ? "text-white" : "text-gray-300"
                            )}
                          >
                            {subItem.title}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink 
                    to={item.path}
                    className={({isActive}) => cn(
                      "text-sm font-medium transition-colors",
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    )}
                  >
                    {item.title}
                  </NavLink>
                )}
              </div>
            ))}
            <Button 
              asChild 
              variant="outline" 
              size="sm" 
              className="ml-4 bg-white/5 border-white/10 hover:bg-white/10"
            >
              <NavLink to="/contact">
                Nous contacter
              </NavLink>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bg-black/95 backdrop-blur-lg border-b border-gray-800 transition-all duration-300 ease-in-out z-50 overflow-hidden",
          isOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-4 space-y-4">
          {navItems.map((item) => (
            <div key={item.title} className="py-1">
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleSubmenu(item.title)}
                    className="flex items-center justify-between w-full py-2 text-left text-gray-300 hover:text-white transition-colors"
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        openSubmenu === item.title ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "pl-4 space-y-2 overflow-hidden transition-all duration-200",
                      openSubmenu === item.title ? "max-h-60 pt-2" : "max-h-0"
                    )}
                  >
                    {item.submenu.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        onClick={closeMenu}
                        className={({isActive}) => cn(
                          "block py-1 text-sm",
                          isActive ? "text-white" : "text-gray-400 hover:text-gray-300"
                        )}
                      >
                        {subItem.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({isActive}) => cn(
                    "block py-2",
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  )}
                >
                  {item.title}
                </NavLink>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Button 
              asChild 
              className="w-full glass-morphism hover:bg-white/10"
            >
              <NavLink to="/contact" onClick={closeMenu}>
                Nous contacter
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
