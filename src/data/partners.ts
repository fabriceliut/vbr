
import { PartnerType } from '@/components/PartnersList';

export const partnersData: PartnerType[] = [
  {
    id: "1",
    name: "Métropole de Lyon",
    description: "Partenaire institutionnel soutenant le développement territorial durable et l'innovation locale.",
    status: 'confirmed'
  },
  {
    id: "2",
    name: "Université Lyon 2",
    description: "Institution académique apportant expertise et recherche sur les modèles économiques régénératifs.",
    status: 'confirmed'
  },
  {
    id: "3",
    name: "ADEME Auvergne-Rhône-Alpes",
    description: "Agence de la transition écologique accompagnant les projets innovants à impact positif.",
    status: 'confirmed'
  },
  {
    id: "4",
    name: "Groupe SOS",
    description: "Acteur majeur de l'économie sociale et solidaire soutenant le développement d'entreprises à impact.",
    status: 'confirmed'
  },
  {
    id: "5",
    name: "BPI France",
    description: "Banque publique d'investissement finançant et accompagnant les entreprises innovantes.",
    status: 'confirmed'
  },
  {
    id: "6",
    name: "Région Auvergne-Rhône-Alpes",
    description: "Collectivité territoriale soutenant le développement économique et l'innovation à l'échelle régionale.",
    status: 'pending'
  },
  {
    id: "7",
    name: "INSA Lyon",
    description: "École d'ingénieurs apportant expertise technique et formation aux porteurs de projets.",
    status: 'pending'
  },
  {
    id: "8",
    name: "Fondation OL",
    description: "Fondation soutenant des projets à impact positif sur le territoire lyonnais.",
    status: 'pending'
  },
  // Nouveaux partenaires ajoutés
  {
    id: "9",
    name: "Pôle Emploi Innovation",
    description: "Accompagnement des talents vers les métiers d'avenir et soutien aux projets entrepreneuriaux innovants.",
    status: 'confirmed'
  },
  {
    id: "10",
    name: "CCI Lyon Métropole",
    description: "Chambre de commerce et d'industrie facilitant le développement des entreprises sur le territoire.",
    status: 'confirmed'
  },
  {
    id: "11",
    name: "Cluster Eco-Énergies",
    description: "Réseau d'entreprises spécialisées dans les solutions énergétiques durables et l'économie circulaire.",
    status: 'confirmed'
  },
  {
    id: "12",
    name: "Fondation Terre Solidaire",
    description: "Organisation soutenant les initiatives écologiques et les transitions socio-économiques régénératives.",
    status: 'confirmed'
  },
  {
    id: "13",
    name: "CRESS Auvergne-Rhône-Alpes",
    description: "Chambre régionale de l'économie sociale et solidaire promouvant les modèles économiques alternatifs.",
    status: 'pending'
  },
  {
    id: "14",
    name: "INRAE Centre Lyon",
    description: "Institut national de recherche sur l'agriculture, l'alimentation et l'environnement.",
    status: 'pending'
  },
  {
    id: "15",
    name: "École Centrale de Lyon",
    description: "Grande école d'ingénieurs contribuant à la recherche et au développement de solutions innovantes.",
    status: 'pending'
  },
  {
    id: "16",
    name: "Crédit Coopératif",
    description: "Banque éthique finançant les projets de l'économie sociale et solidaire et les initiatives écologiques.",
    status: 'confirmed'
  },
  {
    id: "17",
    name: "Fabrique des Transitions",
    description: "Alliance nationale d'acteurs engagés dans les transitions territoriales économiques et écologiques.",
    status: 'confirmed'
  },
  {
    id: "18",
    name: "TUBA Lyon",
    description: "Lieu d'innovation et d'expérimentation urbaine rassemblant startups, entreprises et collectivités.",
    status: 'pending'
  }
];

export const getPartnersByCategory = (category: string) => {
  // Dans une implémentation réelle, vous pourriez filtrer les partenaires par catégorie
  // Pour l'instant, nous retournons tous les partenaires
  return partnersData;
};
