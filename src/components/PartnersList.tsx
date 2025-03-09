
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

// Types pour les partenaires
export type PartnerType = {
  id: string;
  name: string;
  logo?: string; // URL de l'image du logo
  description: string;
  url?: string;
  status: 'confirmed' | 'pending';
};

interface PartnersListProps {
  title?: string;
  subtitle?: string;
  partners: PartnerType[];
}

const PartnersList = ({ title = "Nos partenaires", subtitle, partners }: PartnersListProps) => {
  const [activePartner, setActivePartner] = useState<string | null>(null);

  // Séparer les partenaires confirmés et en attente
  const confirmedPartners = partners.filter(p => p.status === 'confirmed');
  const pendingPartners = partners.filter(p => p.status === 'pending');

  return (
    <div className="space-y-8">
      {(title || subtitle) && (
        <div className="text-center max-w-2xl mx-auto">
          {title && <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>}
          {subtitle && <p className="text-gray-400">{subtitle}</p>}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {confirmedPartners.map((partner) => (
          <div
            key={partner.id}
            className={cn(
              "glass-morphism p-4 rounded-lg text-center transition-all duration-300 cursor-pointer hover-lift group",
              activePartner === partner.id && "ring-1 ring-white/20"
            )}
            onClick={() => setActivePartner(activePartner === partner.id ? null : partner.id)}
          >
            <div className="flex flex-col items-center h-full">
              {partner.logo ? (
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-3">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-white/70">{partner.name.substring(0, 2)}</span>
                </div>
              )}
              <h4 className="text-sm font-medium text-white mb-1">{partner.name}</h4>
              <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20 text-xs">
                Partenaire confirmé
              </Badge>
              
              <div className={cn(
                "mt-3 text-xs text-gray-400 leading-relaxed overflow-hidden transition-all duration-300",
                activePartner === partner.id ? "max-h-36" : "max-h-0"
              )}>
                <p>{partner.description}</p>
                {partner.url && (
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-blue-400 hover:text-blue-300 transition-colors text-xs"
                  >
                    Visiter le site
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {pendingPartners.length > 0 && pendingPartners.map((partner) => (
          <div
            key={partner.id}
            className={cn(
              "glass-morphism p-4 rounded-lg text-center transition-all duration-300 cursor-pointer hover-lift group",
              activePartner === partner.id && "ring-1 ring-white/20"
            )}
            onClick={() => setActivePartner(activePartner === partner.id ? null : partner.id)}
          >
            <div className="flex flex-col items-center h-full">
              {partner.logo ? (
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-3">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-12 h-12 object-contain opacity-50 group-hover:opacity-70 transition-opacity" 
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-white/50">{partner.name.substring(0, 2)}</span>
                </div>
              )}
              <h4 className="text-sm font-medium text-white/80 mb-1">{partner.name}</h4>
              <Badge variant="outline" className="bg-yellow-500/10 text-yellow-400 border-yellow-500/20 text-xs">
                En cours de validation
              </Badge>
              
              <div className={cn(
                "mt-3 text-xs text-gray-400 leading-relaxed overflow-hidden transition-all duration-300",
                activePartner === partner.id ? "max-h-36" : "max-h-0"
              )}>
                <p>{partner.description}</p>
                {partner.url && (
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-blue-400 hover:text-blue-300 transition-colors text-xs"
                  >
                    Visiter le site
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersList;
