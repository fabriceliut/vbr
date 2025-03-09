
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  User, 
  ArrowRight,
  Search,
  Tag
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import PageHeader from '@/components/PageHeader';

// Exemple de données pour les articles
const blogPosts = [
  {
    id: 1,
    slug: 'lancement-du-venture-builder-regeneratif',
    title: 'Lancement du Venture Builder Régénératif à Lyon',
    excerpt: 'Découvrez comment notre initiative va transformer l\'écosystème entrepreneurial de la région Auvergne-Rhône-Alpes avec une approche régénérative innovante.',
    date: '15 Juin 2023',
    author: 'Équipe VBR',
    category: 'Actualités',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070',
  },
  {
    id: 2,
    slug: 'premier-appel-a-projets',
    title: 'Premier appel à projets : Économie circulaire et alimentation durable',
    excerpt: 'Le VBR lance son premier appel à projets dédié à l\'économie circulaire et à l\'alimentation durable sur le territoire de la métropole lyonnaise.',
    date: '7 Juillet 2023',
    author: 'Marie Lefort',
    category: 'Appels à projets',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2274',
  },
  {
    id: 3,
    slug: 'partenariat-stratégique',
    title: 'Partenariat stratégique avec la Métropole de Lyon et la Région AURA',
    excerpt: 'Signature d\'un partenariat majeur avec les collectivités territoriales pour accélérer la transition écologique et économique du territoire.',
    date: '22 Septembre 2023',
    author: 'Thomas Durand',
    category: 'Partenariats',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070',
  },
  {
    id: 4,
    slug: 'premiere-levee-de-fonds',
    title: 'Première levée de fonds pour le fonds d\'investissement régénératif',
    excerpt: 'Le VBR annonce la clôture de sa première levée de fonds de 5 millions d\'euros pour financer des projets à impact sur le territoire.',
    date: '10 Novembre 2023',
    author: 'Sophie Martin',
    category: 'Financement',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070',
  },
  {
    id: 5,
    slug: 'prochains-ateliers-thematiques',
    title: 'Programme des prochains ateliers thématiques pour entrepreneurs',
    excerpt: 'Découvrez le calendrier des prochains ateliers dédiés à l\'innovation régénérative et aux nouvelles méthodes entrepreneuriales.',
    date: '5 Janvier 2024',
    author: 'Lucas Blanc',
    category: 'Événements',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069',
  },
];

// Catégories pour le filtre
const categories = [
  'Toutes les catégories',
  'Actualités',
  'Appels à projets',
  'Partenariats',
  'Financement',
  'Événements',
  'Témoignages',
  'Méthodologie'
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes les catégories');
  
  // Filtrage des articles
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Toutes les catégories' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Blog du Venture Builder Régénératif" 
        subtitle="Actualités, événements et insights sur notre démarche d'innovation territoriale"
      />
      
      <div className="page-container section-padding">
        {/* Barre de recherche et filtres */}
        <div className="mb-12 glass-morphism p-6 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Input
                  placeholder="Rechercher un article..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 focus:border-white/20"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full h-10 rounded-md bg-white/5 border border-white/10 focus:border-white/20 px-3 text-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map(post => (
            <article key={post.id} className="glass-morphism rounded-xl overflow-hidden transition-all duration-300 hover-lift">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="bg-white/5">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <User className="h-3 w-3 mr-1" />
                    {post.author}
                  </div>
                  <NavLink 
                    to={`/blog/${post.slug}`} 
                    className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    Lire l'article <ArrowRight className="w-3 h-3 ml-1" />
                  </NavLink>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold text-white mb-2">Aucun article ne correspond à votre recherche</h3>
            <p className="text-gray-400">Essayez de modifier vos critères de recherche</p>
          </div>
        )}
        
        {/* Tags populaires */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <Tag className="h-5 w-5 mr-2 text-gray-400" />
            <h3 className="text-lg font-medium text-white">Tags populaires</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Innovation', 'Impact', 'Territoire', 'Économie circulaire', 'Startup', 'PME', 'Investissement', 'Transition écologique', 'Lyon', 'Auvergne-Rhône-Alpes'].map(tag => (
              <Badge key={tag} variant="outline" className="px-3 py-1 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="max-w-3xl mx-auto glass-morphism p-8 rounded-xl text-center">
          <h3 className="text-xl font-bold text-white mb-3">Restez informé de nos actualités</h3>
          <p className="text-gray-400 mb-6">
            Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et événements du VBR.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              placeholder="Votre adresse email"
              className="flex-grow bg-white/5 border-white/10 focus:border-white/20"
            />
            <Button className="bg-white text-black hover:bg-white/90 transition-colors">
              S'inscrire
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
