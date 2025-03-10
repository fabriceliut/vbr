
import { useParams, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import PageHeader from '@/components/PageHeader';

// Temporary mock data for blog posts
const blogPosts = [
  {
    id: 1,
    slug: 'lancement-venture-builder',
    title: 'Lancement du Venture Builder Régénératif',
    author: {
      name: 'Équipe VBR',
      avatar: '/placeholder.svg'
    },
    date: '2023-09-15',
    content: `
      <p class="mb-4">Le Venture Builder Régénératif a officiellement été lancé aujourd'hui lors d'un événement regroupant des acteurs clés de l'écosystème d'innovation territorial.</p>
      
      <p class="mb-4">Face aux défis économiques, sociaux et environnementaux actuels, il devient crucial de repenser nos modèles de création et de développement d'entreprises. Le Venture Builder Régénératif propose une approche novatrice qui place l'impact positif au cœur de la stratégie entrepreneuriale.</p>
      
      <h3 class="text-xl font-bold my-4">Une vision régénérative de l'entrepreneuriat</h3>
      
      <p class="mb-4">Contrairement aux approches traditionnelles qui visent principalement la croissance économique, notre venture builder s'engage à développer des projets qui contribuent activement à la régénération des écosystèmes naturels et sociaux.</p>
      
      <p class="mb-4">Cette vision s'appuie sur trois piliers fondamentaux :</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>La création de valeur économique partagée</li>
        <li>La régénération des écosystèmes naturels</li>
        <li>Le renforcement du tissu social local</li>
      </ul>
      
      <h3 class="text-xl font-bold my-4">Un écosystème d'acteurs complémentaires</h3>
      
      <p class="mb-4">Le VBR réunit des entrepreneurs, des PME, des investisseurs, des chercheurs, des institutions publiques et des accompagnants au sein d'un écosystème collaboratif. Cette diversité d'acteurs permet de mobiliser des compétences et des ressources complémentaires pour développer des solutions innovantes.</p>
      
      <p class="mb-4">Les premiers projets accompagnés seront annoncés dans les prochaines semaines, avec un focus particulier sur les secteurs de l'agroécologie, de l'économie circulaire et des énergies renouvelables.</p>
      
      <h3 class="text-xl font-bold my-4">Rejoindre l'aventure</h3>
      
      <p class="mb-4">Si vous souhaitez contribuer à cette dynamique d'innovation régénérative, n'hésitez pas à nous contacter pour explorer les possibilités de collaboration.</p>
    `,
    excerpt: 'Le Venture Builder Régénératif a officiellement été lancé aujourd'hui lors d'un événement regroupant des acteurs clés de l'écosystème d'innovation territorial.',
    imageUrl: '/placeholder.svg',
    tags: ['Lancement', 'Innovation', 'Régénératif']
  },
  {
    id: 2,
    slug: 'recrutement-premieres-startups',
    title: 'Recrutement des premières startups du VBR',
    author: {
      name: 'Marie Dupont',
      avatar: '/placeholder.svg'
    },
    date: '2023-10-10',
    content: `
      <p class="mb-4">Le Venture Builder Régénératif lance aujourd'hui son premier appel à candidatures pour recruter des startups et projets innovants à fort potentiel d'impact positif.</p>
      
      <p class="mb-4">Nous recherchons des projets entrepreneuriaux qui proposent des solutions innovantes aux défis environnementaux et sociaux, tout en développant un modèle économique viable et scalable.</p>
      
      <h3 class="text-xl font-bold my-4">Critères de sélection</h3>
      
      <p class="mb-4">Les projets seront évalués selon plusieurs critères :</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Potentiel d'impact positif mesurable</li>
        <li>Viabilité économique du modèle d'affaires</li>
        <li>Caractère innovant de la solution proposée</li>
        <li>Qualité et complémentarité de l'équipe</li>
        <li>Potentiel de synergie avec l'écosystème existant</li>
      </ul>
      
      <h3 class="text-xl font-bold my-4">Processus de sélection</h3>
      
      <p class="mb-4">Le processus se déroulera en plusieurs étapes :</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Dépôt des candidatures (jusqu'au 15 novembre 2023)</li>
        <li>Pré-sélection sur dossier</li>
        <li>Entretiens avec les porteurs de projets pré-sélectionnés</li>
        <li>Pitch final devant le comité de sélection</li>
        <li>Annonce des projets retenus (15 décembre 2023)</li>
      </ul>
      
      <h3 class="text-xl font-bold my-4">Accompagnement proposé</h3>
      
      <p class="mb-4">Les projets sélectionnés bénéficieront d'un accompagnement complet incluant :</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Hébergement et ressources mutualisées</li>
        <li>Mentorat par des entrepreneurs expérimentés</li>
        <li>Accès à un réseau d'experts et de partenaires</li>
        <li>Soutien au développement commercial</li>
        <li>Accès à des financements adaptés</li>
      </ul>
      
      <p class="mb-4">Pour candidater, rendez-vous sur notre formulaire en ligne ou contactez-nous directement pour plus d'informations.</p>
    `,
    excerpt: 'Le Venture Builder Régénératif lance aujourd'hui son premier appel à candidatures pour recruter des startups et projets innovants à fort potentiel d'impact positif.',
    imageUrl: '/placeholder.svg',
    tags: ['Startups', 'Recrutement', 'Innovation']
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would be an API call
    const foundPost = blogPosts.find(post => post.slug === slug);
    
    // Simulate API delay
    setTimeout(() => {
      setPost(foundPost || null);
      setLoading(false);
    }, 300);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen page-container section-padding text-center">
        <h2 className="text-2xl font-bold mb-4">Article introuvable</h2>
        <p className="mb-6">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
        <Button asChild>
          <NavLink to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour au blog
          </NavLink>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <PageHeader 
        title={post.title} 
        subtitle=""
        className="pb-0"
      />
      
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          {post.imageUrl && (
            <div className="mb-8 rounded-xl overflow-hidden aspect-video">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-gray-400 flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(post.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              {post.tags.map((tag: string, index: number) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div 
            className="prose prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
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
      </div>
    </div>
  );
};

export default BlogPost;
