
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { 
  Select, 
  SelectContent, 
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { MailCheck } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

// Types d'acteurs possibles
const actorTypes = [
  { value: 'startup', label: 'Startup / Entrepreneur' },
  { value: 'pme-eti', label: 'PME / ETI' },
  { value: 'investisseur', label: 'Investisseur' },
  { value: 'recherche', label: 'Acteur de la recherche action' },
  { value: 'institution', label: 'Institution' },
  { value: 'accompagnant', label: 'Accompagnant / Facilitateur' },
  { value: 'autre', label: 'Autre' }
];

// Tailles d'organisation
const organizationSizes = [
  { value: 'solo', label: 'Entrepreneur individuel' },
  { value: '1-10', label: '1-10 employés' },
  { value: '11-50', label: '11-50 employés' },
  { value: '51-200', label: '51-200 employés' },
  { value: '201-500', label: '201-500 employés' },
  { value: '500+', label: 'Plus de 500 employés' }
];

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [orgName, setOrgName] = useState('');
  const [orgType, setOrgType] = useState('');
  const [orgSize, setOrgSize] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi d'email (à remplacer par une vraie implémentation)
    setTimeout(() => {
      console.log({
        name,
        email,
        organizationName: orgName,
        organizationType: orgType,
        organizationSize: orgSize,
        subject,
        message
      });
      
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Message envoyé",
        description: "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.",
      });
      
      // Reset form after success
      setTimeout(() => {
        setName('');
        setEmail('');
        setOrgName('');
        setOrgType('');
        setOrgSize('');
        setSubject('');
        setMessage('');
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <PageHeader title="Contacter le Venture Builder Régénératif" />
      
      <div className="page-container section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 glass-morphism p-6 rounded-xl">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gradient">Rejoignez notre écosystème d'innovation régénérative</h2>
            <p className="text-gray-300 mb-4">
              Que vous soyez une startup, une PME, un investisseur, un chercheur ou une institution, 
              nous sommes impatients d'échanger avec vous sur les possibilités de collaboration au sein 
              du Venture Builder Régénératif de Lyon.
            </p>
            <p className="text-gray-300">
              Complétez le formulaire ci-dessous en précisant votre profil et vos motivations, 
              et notre équipe vous contactera rapidement pour approfondir les échanges.
            </p>
          </div>

          <div className="glass-morphism p-6 rounded-xl">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  {/* Coordonnées personnelles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Votre nom"
                        required
                        className="bg-white/5 border-white/10 focus:border-white/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email professionnel</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="votre@email.com"
                        required
                        className="bg-white/5 border-white/10 focus:border-white/20"
                      />
                    </div>
                  </div>

                  {/* Informations sur l'organisation */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="orgName">Nom de l'organisation</Label>
                      <Input
                        id="orgName"
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        placeholder="Nom de votre organisation"
                        required
                        className="bg-white/5 border-white/10 focus:border-white/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="orgType">Type d'acteur</Label>
                      <Select 
                        value={orgType} 
                        onValueChange={setOrgType}
                        required
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 focus:border-white/20">
                          <SelectValue placeholder="Sélectionnez votre profil" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {actorTypes.map(type => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="orgSize">Taille de l'organisation</Label>
                    <Select 
                      value={orgSize} 
                      onValueChange={setOrgSize}
                      required
                    >
                      <SelectTrigger className="bg-white/5 border-white/10 focus:border-white/20">
                        <SelectValue placeholder="Sélectionnez la taille" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {organizationSizes.map(size => (
                            <SelectItem key={size.value} value={size.value}>
                              {size.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sujet et message */}
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Sujet de votre message"
                      required
                      className="bg-white/5 border-white/10 focus:border-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Précisez votre intérêt pour le VBR et comment vous souhaiteriez collaborer..."
                      required
                      className="min-h-32 bg-white/5 border-white/10 focus:border-white/20"
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white text-black hover:bg-white/90 transition-colors"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="rounded-full bg-green-500/20 p-3">
                    <MailCheck className="w-8 h-8 text-green-500" />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white">Message envoyé !</h3>
                <p className="text-gray-400">
                  Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
