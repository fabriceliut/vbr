
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundClass?: string;
  alignment?: 'left' | 'center';
}

const HeroSection = ({
  title,
  subtitle,
  description,
  ctaText = "En savoir plus",
  ctaLink = "/fonctionnalites",
  secondaryCtaText,
  secondaryCtaLink,
  backgroundClass = "",
  alignment = 'center'
}: HeroSectionProps) => {
  return (
    <div className={`relative min-h-[80vh] flex items-center ${backgroundClass}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black to-black z-0"></div>
      
      <div className="relative z-10 w-full page-container">
        <div 
          className={`max-w-3xl ${
            alignment === 'center' 
              ? 'mx-auto text-center' 
              : 'text-left'
          }`}
        >
          <p className="text-gradient-accent text-sm sm:text-base font-medium mb-3 animate-slide-down">
            {subtitle}
          </p>
          <h1 className="text-gradient text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {title}
          </h1>
          
          {description && (
            <p className="text-gray-300 text-lg mb-8 animate-slide-up">
              {description}
            </p>
          )}
          
          <div className={`mt-8 flex items-center gap-4 ${
            alignment === 'center' ? 'justify-center' : 'justify-start'
          }`}>
            {ctaText && ctaLink && (
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90 transition-colors animate-fade-in"
              >
                <NavLink to={ctaLink}>
                  {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
                </NavLink>
              </Button>
            )}
            
            {secondaryCtaText && secondaryCtaLink && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="glass-morphism hover:bg-white/10 animate-fade-in"
              >
                <NavLink to={secondaryCtaLink}>
                  {secondaryCtaText}
                </NavLink>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
