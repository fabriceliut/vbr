
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeaturedCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  children?: ReactNode;
  className?: string;
}

const FeaturedCard = ({
  title,
  description,
  icon: Icon,
  children,
  className,
}: FeaturedCardProps) => {
  return (
    <div
      className={cn(
        "glass-morphism rounded-xl p-6 transition-all duration-300 hover-lift",
        className
      )}
    >
      {Icon && (
        <div className="inline-flex items-center justify-center p-3 rounded-lg bg-white/5 mb-4">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      {children}
    </div>
  );
};

export default FeaturedCard;
