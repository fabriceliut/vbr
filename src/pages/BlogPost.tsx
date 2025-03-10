
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBlogPostBySlug } from '@/utils/blogData';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogPostFooter from '@/components/blog/BlogPostFooter';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import NotFoundMessage from '@/components/common/NotFoundMessage';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      const foundPost = getBlogPostBySlug(slug || '');
      setPost(foundPost);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [slug]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!post) {
    return (
      <NotFoundMessage 
        title="Article introuvable"
        message="L'article que vous recherchez n'existe pas ou a été déplacé."
        backLinkText="Retour au blog"
        backLinkUrl="/blog"
      />
    );
  }

  return (
    <div className="min-h-screen">
      <BlogPostHeader 
        title={post.title}
        author={post.author}
        date={post.date}
        tags={post.tags}
        imageUrl={post.imageUrl}
      />
      
      <div className="page-container">
        <BlogPostContent content={post.content} />
        <BlogPostFooter />
      </div>
    </div>
  );
};

export default BlogPost;
