
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/home/VisionSection';
import ImpactSection from '@/components/home/ImpactSection';
import ActeursSection from '@/components/home/ActeursSection';
import PartenairesSection from '@/components/home/PartenairesSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection 
        title="Venture Builder Régénératif à Lyon"
        subtitle="Innovation économique territoriale • Vision durable pour l'Auvergne-Rhône-Alpes"
        description="Une nouvelle approche d'innovation économique qui réconcilie sens et rentabilité, en rassemblant startups, PME, investisseurs et talents dans un écosystème orienté impact positif."
        ctaText="Découvrir les fonctionnalités"
        ctaLink="/fonctionnalites"
        secondaryCtaText="Contactez-nous"
        secondaryCtaLink="/contact"
        backgroundClass="bg-[url('https://images.unsplash.com/photo-1603058401470-7eef06ca6ff6?q=80&w=2069')] bg-cover bg-center"
      />

      {/* Section Vision */}
      <VisionSection />

      {/* Section Impact */}
      <ImpactSection />

      {/* Section Acteurs */}
      <ActeursSection />

      {/* Section Partenaires */}
      <PartenairesSection />
    </div>
  );
};

export default Index;
