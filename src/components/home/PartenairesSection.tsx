
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import PartnersList from '@/components/PartnersList';
import { partnersData } from '@/data/partners';

const PartenairesSection = () => {
  return (
    <section className="section-padding">
      <div className="page-container">
        <PartnersList 
          title="Nos partenaires"
          subtitle="Ils soutiennent déjà le Venture Builder Régénératif"
          partners={partnersData}
        />
        
        <div className="text-center mt-12">
          <Button 
            asChild 
            className="bg-white text-black hover:bg-white/90 transition-colors"
          >
            <NavLink to="/contact">
              Rejoignez l'écosystème
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartenairesSection;
