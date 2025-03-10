
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface NotFoundMessageProps {
  title: string;
  message: string;
  backLinkText: string;
  backLinkUrl: string;
}

const NotFoundMessage = ({ title, message, backLinkText, backLinkUrl }: NotFoundMessageProps) => {
  return (
    <div className="min-h-screen page-container section-padding text-center">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-6">{message}</p>
      <Button asChild>
        <NavLink to={backLinkUrl}>
          <ArrowLeft className="mr-2 h-4 w-4" /> {backLinkText}
        </NavLink>
      </Button>
    </div>
  );
};

export default NotFoundMessage;
