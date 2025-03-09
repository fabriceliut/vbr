
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
  }
];

export const getPartnersByCategory = (category: string) => {
  // Dans une implémentation réelle, vous pourriez filtrer les partenaires par catégorie
  // Pour l'instant, nous retournons tous les partenaires
  return partnersData;
};
