import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import Image from "next/image";
import { Phone, Star, MapPin } from "lucide-react";
import LoadingScreen from "@/components/Loading";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80"></div>

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 fade-in">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
                    <MapPin className="w-4 h-4" />
                    Sète et ses environs
                  </div>

                  <h1 className="text-gradient leading-tight">
                    Artisan Affûteur
                    <span className="block text-foreground">Professionnel</span>
                  </h1>

                  <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    Redonnez vie à vos couteaux, ciseaux et outils de jardinage
                    avec un service d&apos;affûtage professionnel à domicile.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 fade-in stagger-1">
                  <a
                    href="tel:+0676306582"
                    className="btn-primary inline-flex items-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    06 76 30 65 82
                  </a>
                  <a href="#about" className="btn-secondary">
                    Découvrir mes services
                  </a>
                </div>

                <div className="hidden sm:block flex items-center gap-6 pt-6 fade-in stagger-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Service de qualité artisanale
                  </span>
                </div>
              </div>

              {/* Right Content - Image */}
              <div className="relative fade-in stagger-3">
                <div className="relative floating-animation">
                  <Image
                    src="/knife2.png"
                    alt="Couteau professionnel affûté"
                    width={600}
                    height={400}
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Hidden on mobile */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-gradient mb-6">Services d'Affûtage</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tout ce qui coupe sera affûté avec précision et passion
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="service-card text-center fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔪</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Couteaux de Cuisine</h3>
                <p className="text-muted-foreground">
                  Professionnels ou particuliers, redonnez le tranchant parfait
                  à vos couteaux
                </p>
              </div>

              <div className="service-card text-center fade-in stagger-1">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✂️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Ciseaux & Outils</h3>
                <p className="text-muted-foreground">
                  Ciseaux professionnels, outils de coiffure et instruments de
                  précision
                </p>
              </div>

              <div className="service-card text-center fade-in stagger-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌿</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Outils de Jardinage</h3>
                <p className="text-muted-foreground">
                  Sécateurs, lames de tondeuse, outils de taille pour un jardin
                  parfait
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <About />
      <Contact />
      <Faq />
    </>
  );
}
