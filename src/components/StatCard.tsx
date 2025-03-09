
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard = ({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className,
}: StatCardProps) => {
  return (
    <div
      className={cn(
        "glass-morphism rounded-xl p-6 transition-all duration-300 hover-lift",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-400 mb-1">{title}</p>
          <div className="flex items-baseline">
            <p className="text-3xl font-bold text-white">{value}</p>
            {trend && (
              <span
                className={cn(
                  "ml-2 text-xs font-medium",
                  trend.isPositive ? "text-green-400" : "text-red-400"
                )}
              >
                {trend.isPositive ? "+" : ""}
                {trend.value}%
              </span>
            )}
          </div>
        </div>
        {Icon && (
          <div className="p-2 rounded-lg bg-white/5">
            <Icon className="h-5 w-5 text-gray-300" />
          </div>
        )}
      </div>
      {description && <p className="mt-3 text-sm text-gray-400">{description}</p>}
    </div>
  );
};

export default StatCard;
