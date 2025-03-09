
import { Mail, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Contactez-nous"
        subtitle="Intéressé par le Venture Builder Régénératif ? Nous sommes à votre écoute pour échanger sur vos besoins et répondre à vos questions."
      />

      <section className="section-padding">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Informations de contact</h2>
              
              <div className="glass-morphism rounded-xl p-6 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-2 rounded-md bg-white/5 mr-4">
                      <Mail className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Email</h3>
                      <p className="text-gray-400">liut.fabrice@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-md bg-white/5 mr-4">
                      <MapPin className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Localisation</h3>
                      <p className="text-gray-400">Région Auvergne-Rhône-Alpes<br />Lyon, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-md bg-white/5 mr-4">
                      <Clock className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">Disponibilité</h3>
                      <p className="text-gray-400">
                        Lundi - Vendredi<br />
                        9:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Rejoignez notre écosystème</h3>
                <p className="text-gray-300 mb-4">
                  Le Venture Builder Régénératif est ouvert à de nouvelles collaborations. Quel que soit votre profil, 
                  nous serions ravis d'échanger sur les opportunités de collaboration.
                </p>
                
                <div className="space-y-3 mt-6">
                  <div className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-gray-300">Entreprises cherchant à innover</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-gray-300">Startups à visée régénérative</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-gray-300">Investisseurs impact-first</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-gray-300">Talents en recherche de sens</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-gray-300">Institutions et collectivités</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
