
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import PartnersList from '@/components/PartnersList';
import { partnersData } from '@/data/partners';

const PartenairesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559233312-e090345e0df1?q=80&w=2070" 
          alt="Partenaires background" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="page-container relative z-10">
        <PartnersList 
          title="Notre écosystème de partenaires"
          subtitle="Ils coopèrent déjà avec le Venture Builder Régénératif"
          partners={partnersData}
        />
        
        <div className="text-center mt-12">
          <Button 
            asChild 
            className="bg-white text-black hover:bg-white/90 transition-colors"
          >
            <NavLink to="/contact">
              Rejoignez l'écosystème régénératif
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartenairesSection;
