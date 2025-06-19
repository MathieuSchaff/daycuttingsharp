import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const Faq = () => {
  const faqs = [
    {
      question: "Comment me contacter ?",
      answer:
        "Vous pouvez me joindre au 06 76 30 65 82. Je suis également disponible par SMS et WhatsApp pour plus de praticité.",
    },
    {
      question: "À quelle heure peut-on me joindre ?",
      answer:
        "Je suis joignable de 9h à 17h, du lundi au samedi. Pour les urgences ou demandes spéciales, n'hésitez pas à laisser un message.",
    },
    {
      question: "Ai-je besoin de fournir du matériel ?",
      answer:
        "Pas du tout ! Je suis un affûteur autonome. La seule chose dont j'ai besoin est une place de parking. Je dispose d'un groupe électrogène dans mon véhicule et de tout l'équipement professionnel nécessaire.",
    },
    {
      question: "Quels types d'outils pouvez-vous affûter ?",
      answer:
        "J'affûte tous types de couteaux (cuisine, boucherie, chasse), ciseaux (coiffure, couture), outils de jardinage (sécateurs, lames de tondeuse), outils à bois, et bien plus. Si ça coupe, je peux l'affûter !",
    },
    {
      question: "Combien coûte l'affûtage ?",
      answer:
        "Les tarifs commencent à partir de 4€ et varient selon l'état, la taille et le type d'outil. Je fournis toujours un devis gratuit avant intervention.",
    },
    {
      question: "Dans quelles zones intervenez-vous ?",
      answer:
        "J'interviens principalement à Sète et dans les environs. Pour les zones plus éloignées, contactez-moi pour étudier la faisabilité.",
    },
    {
      question: "Combien de temps dure l'intervention ?",
      answer:
        "Cela dépend du nombre d'outils et de leur état. En général, comptez entre 30 minutes et 2 heures. Je travaille directement chez vous pour votre confort.",
    },
    {
      question: "Proposez-vous des conseils d'entretien ?",
      answer:
        "Absolument ! Je partage toujours mes conseils pour maintenir vos outils tranchants plus longtemps et optimiser leur durée de vie.",
    },
  ];

  return (
    <div id="faq" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-gradient mb-6">Questions Fréquentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur mes services
            d'affûtage
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="service-card">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 data-[state=open]:bg-muted/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-lg pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center">
          <div className="service-card max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Vous avez d'autres questions ?
                </h3>
                <p className="text-muted-foreground">
                  N'hésitez pas à me contacter directement. Je serai ravi de
                  répondre à toutes vos interrogations et de vous conseiller.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+0676306582" className="btn-primary">
                  Me poser une question
                </a>
                <a href="#contact" className="btn-secondary">
                  Voir les informations de contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl">⚡</div>
              <p className="text-sm text-muted-foreground">Réponse rapide</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">🎯</div>
              <p className="text-sm text-muted-foreground">Conseil expert</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">📞</div>
              <p className="text-sm text-muted-foreground">Contact direct</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl">💬</div>
              <p className="text-sm text-muted-foreground">Écoute attentive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
