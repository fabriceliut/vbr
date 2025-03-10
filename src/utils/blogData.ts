
// Données temporaires pour les articles de blog
export const blogPosts = [
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
      
      <p class="mb-4">Le VBR réunit des entrepreneurs, des PME, des investisseurs, des chercheurs, des institutions publiques et des accompagnants au sein d'un écosystème coopératif. Cette diversité d'acteurs permet de mobiliser des compétences et des ressources complémentaires pour développer des solutions innovantes.</p>
      
      <p class="mb-4">Les premiers projets accompagnés seront annoncés dans les prochaines semaines, avec un focus particulier sur les secteurs de l'agroécologie, de l'économie circulaire et des énergies renouvelables.</p>
      
      <h3 class="text-xl font-bold my-4">Rejoindre l'aventure</h3>
      
      <p class="mb-4">Si vous souhaitez contribuer à cette dynamique d'innovation régénérative, n'hésitez pas à nous contacter pour explorer les possibilités de coopération.</p>
    `,
    excerpt: "Le Venture Builder Régénératif a officiellement été lancé aujourd'hui lors d'un événement regroupant des acteurs clés de l'écosystème d'innovation territorial.",
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2069',
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
    excerpt: "Le Venture Builder Régénératif lance aujourd'hui son premier appel à candidatures pour recruter des startups et projets innovants à fort potentiel d'impact positif.",
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2069',
    tags: ['Startups', 'Recrutement', 'Innovation']
  }
];

export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug) || null;
};
