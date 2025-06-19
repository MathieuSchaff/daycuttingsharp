import Image from "next/image";
import { CheckCircle, Star, Car, Hammer } from "lucide-react";

// Import des images (assumant qu'elles existent)
const profil = "/profil.jpg";
const meleuse = "/meleuse1.jpg";
const car = "/car.jpg";
const jardinage = "/jardinage.jpg";

const About = () => {
  const services = [
    "Couteaux toutes dimensions",
    "Outillage de jardins",
    "Lames de tondeuses",
    "Sécateurs",
    "Outillages pros sur devis",
    "Ciseaux pros sur devis",
    "Outils à bois",
    "Lames de robots",
  ];

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expertise Artisanale",
      description: "Des années d'expérience pour un affûtage de précision",
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Service Mobile",
      description: "Je viens chez vous avec tout mon équipement",
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Équipement Pro",
      description: "Matériel moderne pour un résultat optimal",
    },
  ];

  return (
    <div id="about" className="section-padding">
      <div className="container-custom">
        {/* Introduction */}
        <div className="text-center mb-20">
          <h2 className="text-gradient mb-6">Qui suis-je ?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionné par l&apos;art de la précision, je mets mon expertise au
            service de vos outils tranchants
          </p>
        </div>

        {/* Main Profile Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
                <Star className="w-4 h-4" />
                Artisan Professionnel
              </div>

              <h3 className="text-3xl font-bold">
                PASSIONNÉ PAR L&apos;ART DE LA PRÉCISION
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Moi, c&apos;est{" "}
                <strong className="text-foreground">Jeff</strong>.
                <br />
                <br />
                Avec une passion pour l&apos;affûtage des couteaux, j&apos;ai
                développé mes compétences au fil des années pour offrir un
                service de qualité supérieure. Ayant acquis une expérience
                précieuse dans l&apos;art de l&apos;affûtage après avoir
                perfectionné mes techniques, je suis prêt à mettre mon
                savoir-faire au service de votre cuisine ou de votre
                établissement.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                    {feature.icon}
                  </div>
                  <h4 className="text-sm font-semibold mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={profil}
                alt="Jeff, artisan affûteur professionnel"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Affûtage */}
          <div className="service-card">
            <div className="relative overflow-hidden rounded-xl mb-6">
              <Image
                src={jardinage}
                alt="Affûtage d'outils de jardinage"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🔧</span>
              AFFÛTAGE PROFESSIONNEL
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              J&apos;affûte tous types de couteaux, de ciseaux et d&apos;outils
              de jardinage. Je peux également affûter vos outils de cuisine, de
              boucherie, de pêche, de chasse, etc. J&apos;utilise des techniques
              modernes pour redonner à vos outils leur tranchant d&apos;origine.
            </p>
          </div>

          {/* Mobilité */}
          <div className="service-card">
            <div className="relative overflow-hidden rounded-xl mb-6">
              <Image
                src={car}
                alt="Véhicule d'affûtage mobile équipé"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Car className="w-6 h-6 text-primary" />
              MOBILITÉ & DÉPLACEMENTS
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Ma voiture me permet de me déplacer auprès de vous et
              m&apos;adapter à vos besoins. Comme vous pouvez le constater,
              j&apos;ai moi-même aménagé ma voiture pour offrir un service
              professionnel directement chez vous !
            </p>
          </div>

          {/* Tarifs */}
          <div className="service-card" id="tarifs">
            <div className="relative overflow-hidden rounded-xl mb-6">
              <Image
                src={meleuse}
                alt="Équipement professionnel d'affûtage"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">💰</span>
              MES TARIFS
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Les tarifs peuvent varier selon l&apos;état, le nombre et la
              dimension.
              <span className="text-primary font-semibold">
                (à partir de 4€)
              </span>
            </p>

            <div className="grid grid-cols-1 gap-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm font-medium text-center">
                <strong>
                  Tout ce qui est tranchant sera affûté avec précision et
                  passion.
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a href="tel:+0676306582" className="btn-primary">
              Demander un devis gratuit
            </a>
            <a href="#contact" className="btn-secondary">
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
