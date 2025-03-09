
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader = ({ title, subtitle, className }: PageHeaderProps) => {
  return (
    <div className={cn(
      "py-20 mt-16 mb-12 text-center",
      className
    )}>
      <h1 className="text-gradient text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      {subtitle && <p className="text-gray-300 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
