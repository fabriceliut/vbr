
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

interface BlogPostHeaderProps {
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  tags: string[];
  imageUrl?: string;
}

const BlogPostHeader = ({ title, author, date, tags, imageUrl }: BlogPostHeaderProps) => {
  return (
    <>
      <PageHeader 
        title={title} 
        subtitle=""
        className="pb-0"
      />
      
      <div className="max-w-4xl mx-auto">
        {imageUrl && (
          <div className="mb-8 rounded-xl overflow-hidden aspect-video">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{author.name}</div>
              <div className="text-sm text-gray-400 flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostHeader;
