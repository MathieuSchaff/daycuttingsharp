
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const Faq = () => {
  return (
    <div id="faq" className="p-10 sm:p-20 border-t border-t-browney ">
      <h2 className="text-center text-2xl uppercase font-bold mb-10">Foire aux questions</h2>
      <div className="container mx-auto md:w-3/4 lg:w-1/2 bg-browney text-darkgrey rounded-xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Comment me contacter?</AccordionTrigger>
            <AccordionContent>
              Vous pouvez me joindre au 06 76 30 65 82
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>A quelle heure peut-on me joindre?</AccordionTrigger>
            <AccordionContent>
              Je suis joignable de 9h à 17h
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Ai-je besoin de matériel?</AccordionTrigger>
            <AccordionContent>
              Affûteur autonome. La seul chose dont j&apos;ai besoin est une place de parking.
              Je dispose d&apos;un groupe electrogène dans mon véhicule.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
export default Faq;
