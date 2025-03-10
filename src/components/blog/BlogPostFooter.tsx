
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';

const BlogPostFooter = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between py-6 border-t border-gray-800">
        <Button asChild variant="outline">
          <NavLink to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour au blog
          </NavLink>
        </Button>
        
        <Button variant="outline" className="flex items-center">
          <Share2 className="mr-2 h-4 w-4" /> Partager
        </Button>
      </div>
    </div>
  );
};

export default BlogPostFooter;
