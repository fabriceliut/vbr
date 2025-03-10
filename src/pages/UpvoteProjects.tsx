
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  ThumbsUp, 
  Plus,
  ArrowUpCircle,
  Filter,
  Search,
  ArrowDown,
  Share2
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';
import { useToast } from "@/components/ui/use-toast";

// Mock data for projects
const initialProjects = [
  {
    id: 1,
    title: "AgroRegen",
    description: "Plateforme de mise en relation entre agriculteurs régénératifs et consommateurs locaux",
    upvotes: 42,
    hasUpvoted: false,
    category: "Agriculture",
    submittedBy: "Jean Dupont",
    date: "2023-08-15",
    tags: ["Agroécologie", "Circuit court", "Alimentation"]
  },
  {
    id: 2,
    title: "RenovEnergy",
    description: "Solution de rénovation énergétique complète pour l'habitat collectif avec financement innovant",
    upvotes: 38,
    hasUpvoted: false,
    category: "Énergie",
    submittedBy: "Marie Martin",
    date: "2023-09-02",
    tags: ["Rénovation", "Énergie", "Habitat"]
  },
  {
    id: 3,
    title: "CirculMaterials",
    description: "Valorisation des déchets industriels en matières premières secondaires pour l'artisanat local",
    upvotes: 35,
    hasUpvoted: false,
    category: "Économie circulaire",
    submittedBy: "Thomas Leroy",
    date: "2023-09-10",
    tags: ["Recyclage", "Artisanat", "Industrie"]
  },
  {
    id: 4,
    title: "MobilitéPartagée",
    description: "Service de mobilité partagée pour les zones rurales et périurbaines mal desservies",
    upvotes: 29,
    hasUpvoted: false,
    category: "Mobilité",
    submittedBy: "Sophie Dubois",
    date: "2023-09-18",
    tags: ["Transport", "Rural", "Partage"]
  },
  {
    id: 5,
    title: "EduNature",
    description: "Programme éducatif de sensibilisation à la biodiversité et aux écosystèmes locaux",
    upvotes: 27,
    hasUpvoted: false,
    category: "Éducation",
    submittedBy: "Pierre Moreau",
    date: "2023-09-22",
    tags: ["Biodiversité", "Éducation", "Nature"]
  }
];

const UpvoteProjects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('upvotes');
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    category: '',
    tags: ''
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleUpvote = (id: number) => {
    setProjects(projects.map(project => {
      if (project.id === id) {
        const newHasUpvoted = !project.hasUpvoted;
        return {
          ...project,
          upvotes: newHasUpvoted ? project.upvotes + 1 : project.upvotes - 1,
          hasUpvoted: newHasUpvoted
        };
      }
      return project;
    }));
  };

  const handleNewProjectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProject(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitProject = () => {
    if (!newProject.title || !newProject.description || !newProject.category) {
      toast({
        title: "Champs obligatoires",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Creating a new project
    const newProjectToAdd = {
      id: projects.length + 1,
      title: newProject.title,
      description: newProject.description,
      upvotes: 0,
      hasUpvoted: false,
      category: newProject.category,
      submittedBy: "Vous", // In a real app, this would be the logged-in user
      date: new Date().toISOString().split('T')[0],
      tags: newProject.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };

    setProjects([newProjectToAdd, ...projects]);
    setNewProject({
      title: '',
      description: '',
      category: '',
      tags: ''
    });
    setIsDialogOpen(false);
    
    toast({
      title: "Projet soumis",
      description: "Votre projet a été ajouté avec succès !",
    });
  };

  const filteredProjects = projects
    .filter(project => {
      if (filter === 'all') return true;
      return project.category.toLowerCase() === filter.toLowerCase();
    })
    .filter(project => {
      if (!searchTerm) return true;
      return (
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    })
    .sort((a, b) => {
      if (sortBy === 'upvotes') {
        return b.upvotes - a.upvotes;
      } else if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });

  const categories = ['Agriculture', 'Énergie', 'Économie circulaire', 'Mobilité', 'Éducation', 'Santé', 'Habitat', 'Autres'];

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Upvote des projets" 
        subtitle="Découvrez et soutenez les projets innovants proposés pour le Venture Builder Régénératif"
      />
      
      <div className="page-container section-padding">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-16 glass-morphism p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-gradient mb-6">
            Soutenez les projets qui vous inspirent
          </h2>
          <p className="text-gray-300 mb-4">
            Le Venture Builder Régénératif invite la communauté à découvrir et soutenir les projets innovants 
            qui ont le potentiel de créer un impact positif sur notre territoire. Votez pour les projets qui 
            vous inspirent ou proposez vos propres idées !
          </p>
          <p className="text-gray-300 mb-6">
            Les projets les plus plébiscités seront étudiés en priorité par notre comité de sélection 
            pour intégrer le programme d'accompagnement du VBR.
          </p>
          
          <div className="mt-8 flex justify-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-white text-black hover:bg-white/90">
                  <Plus className="mr-2 h-4 w-4" /> Proposer un nouveau projet
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px] glass-morphism border-none">
                <DialogHeader>
                  <DialogTitle>Proposer un nouveau projet</DialogTitle>
                  <DialogDescription>
                    Décrivez votre idée de projet innovant à impact positif pour le territoire.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Titre du projet *</Label>
                    <Input
                      id="title"
                      name="title"
                      value={newProject.title}
                      onChange={handleNewProjectChange}
                      className="glass-input"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={newProject.description}
                      onChange={handleNewProjectChange}
                      className="glass-input min-h-[100px]"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="category">Catégorie *</Label>
                    <select
                      id="category"
                      name="category"
                      value={newProject.category}
                      onChange={handleNewProjectChange as any}
                      className="glass-input bg-transparent p-3 rounded-md border border-gray-700"
                    >
                      <option value="" disabled>Sélectionnez une catégorie</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="tags">Tags (séparés par des virgules)</Label>
                    <Input
                      id="tags"
                      name="tags"
                      value={newProject.tags}
                      onChange={handleNewProjectChange}
                      placeholder="ex: innovation, écologie, local"
                      className="glass-input"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleSubmitProject}>
                    Soumettre le projet
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        {/* Filters and search */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="flex items-center">
              <Filter className="h-5 w-5 mr-2 text-gray-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="glass-input bg-transparent p-2 rounded-md border border-gray-700"
              >
                <option value="all">Toutes catégories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center">
              <ArrowDown className="h-5 w-5 mr-2 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="glass-input bg-transparent p-2 rounded-md border border-gray-700"
              >
                <option value="upvotes">Trier par votes</option>
                <option value="date">Trier par date</option>
              </select>
            </div>
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Rechercher un projet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass-input w-full"
            />
          </div>
        </div>
        
        {/* Projects list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <Card key={project.id} className="glass-morphism border-none h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge className="mb-2">{project.category}</Badge>
                    <span className="text-sm text-gray-400">{project.date}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    Proposé par {project.submittedBy}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-800 pt-4 flex justify-between">
                  <Button 
                    variant={project.hasUpvoted ? "default" : "outline"} 
                    size="sm"
                    onClick={() => handleUpvote(project.id)}
                    className={project.hasUpvoted ? "bg-green-600 hover:bg-green-700" : "hover:bg-white/10"}
                  >
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    {project.upvotes}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Partager
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-400 mb-4">Aucun projet ne correspond à votre recherche.</p>
              <Button 
                onClick={() => {
                  setFilter('all');
                  setSearchTerm('');
                }}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
        
        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-gradient">Une idée de projet innovant ?</h3>
          <p className="text-gray-300 mb-8">
            Vous avez une idée de projet innovant à impact positif ? Proposez-la à la communauté 
            et rejoignez peut-être le prochain programme d'accompagnement du VBR !
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-white text-black hover:bg-white/90">
                <ArrowUpCircle className="mr-2 h-4 w-4" /> Proposer mon projet
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] glass-morphism border-none">
              <DialogHeader>
                <DialogTitle>Proposer un nouveau projet</DialogTitle>
                <DialogDescription>
                  Décrivez votre idée de projet innovant à impact positif pour le territoire.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title2">Titre du projet *</Label>
                  <Input
                    id="title2"
                    name="title"
                    value={newProject.title}
                    onChange={handleNewProjectChange}
                    className="glass-input"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description2">Description *</Label>
                  <Textarea
                    id="description2"
                    name="description"
                    value={newProject.description}
                    onChange={handleNewProjectChange}
                    className="glass-input min-h-[100px]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category2">Catégorie *</Label>
                  <select
                    id="category2"
                    name="category"
                    value={newProject.category}
                    onChange={handleNewProjectChange as any}
                    className="glass-input bg-transparent p-3 rounded-md border border-gray-700"
                  >
                    <option value="" disabled>Sélectionnez une catégorie</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tags2">Tags (séparés par des virgules)</Label>
                  <Input
                    id="tags2"
                    name="tags"
                    value={newProject.tags}
                    onChange={handleNewProjectChange}
                    placeholder="ex: innovation, écologie, local"
                    className="glass-input"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleSubmitProject}>
                  Soumettre le projet
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default UpvoteProjects;
