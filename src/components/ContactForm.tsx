
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { MailCheck } from 'lucide-react';

interface ContactFormProps {
  sourcePageTitle?: string;
}

const ContactForm = ({ sourcePageTitle }: ContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(sourcePageTitle ? `Contact depuis la page ${sourcePageTitle}` : '');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi d'email (à remplacer par une vraie implémentation)
    // En production, vous devriez connecter ceci à un service d'envoi d'emails
    setTimeout(() => {
      console.log({
        to: 'liut.fabrice@gmail.com',
        from: email,
        subject,
        name,
        message
      });
      
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Message envoyé",
        description: "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setName('');
        setEmail('');
        setSubject(sourcePageTitle ? `Contact depuis la page ${sourcePageTitle}` : '');
        setMessage('');
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="glass-morphism p-6 rounded-xl">
      {!isSuccess ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
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
                <Label htmlFor="email">Email</Label>
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
                placeholder="Votre message..."
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
  );
};

export default ContactForm;
