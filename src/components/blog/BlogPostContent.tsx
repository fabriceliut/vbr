
interface BlogPostContentProps {
  content: string;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div 
        className="prose prose-invert prose-lg max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default BlogPostContent;
