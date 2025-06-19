import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-6">Contactez-moi</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à redonner vie à vos outils ? Contactez-moi pour un devis
            gratuit ou pour toute question sur mes services d&apos;affûtage
            professionnel.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Phone */}
          <div className="service-card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Téléphone</h3>
            <a
              href="tel:+0676306582"
              className="text-primary hover:text-primary/80 transition-colors font-semibold text-lg"
            >
              06 76 30 65 82
            </a>
          </div>

          {/* Location */}
          <div className="service-card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Zone d'intervention</h3>
            <p className="text-muted-foreground">Sète et ses environs</p>
          </div>

          {/* Hours */}
          <div className="service-card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Horaires</h3>
            <p className="text-muted-foreground">
              9h - 17h
              <br />
              Du lundi au samedi
            </p>
          </div>

          {/* Service */}
          <div className="service-card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Devis</h3>
            <p className="text-muted-foreground">
              Gratuit et
              <br />
              sans engagement
            </p>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="max-w-4xl mx-auto">
          <div className="service-card">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📞</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Ne négligez pas l&apos;importance d&apos;avoir des couteaux bien
                affûtés
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">
                      👉 Un seul appel suffit !
                    </strong>
                    <br />
                    <br />
                    Envoyez-moi un message au{" "}
                    <strong className="text-primary">06 76 30 65 82</strong>
                    <br />
                    <br />
                    Je serai ravi de discuter de vos besoins spécifiques et de
                    vous fournir des conseils d&apos;expert en matière
                    d&apos;entretien des couteaux.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">Pourquoi me choisir ?</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>
                        Service à domicile avec équipement professionnel
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Expertise artisanale et techniques modernes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Tarifs transparents et compétitifs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>Conseils d&apos;entretien personnalisés</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-4 text-center">
                    Appelez maintenant
                  </h4>
                  <a
                    href="tel:+0676306582"
                    className="btn-primary w-full text-lg md:text-xl py-6 flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="whitespace-nowrap">06 76 30 65 82</span>
                  </a>
                  <p className="text-xs text-center text-muted-foreground mt-3">
                    Disponible de 9h à 17h, du lundi au samedi
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Vous préférez un autre moyen de contact ?
                  </p>
                  <div className="flex justify-center gap-4">
                    <span className="inline-flex items-center gap-1 text-xs bg-muted px-3 py-1 rounded-full">
                      <MessageCircle className="w-3 h-3" />
                      SMS acceptés
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs bg-muted px-3 py-1 rounded-full">
                      <Phone className="w-3 h-3" />
                      WhatsApp disponible
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              ⚡ Intervention rapide
            </span>
            <span className="flex items-center gap-1">🛡️ Service garanti</span>
            <span className="flex items-center gap-1">
              💰 Tarifs transparents
            </span>
            <span className="flex items-center gap-1">
              🎯 Résultats professionnels
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
