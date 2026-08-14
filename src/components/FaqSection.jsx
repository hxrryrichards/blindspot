import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Reveal from '@/components/Reveal';

export default function FaqSection({ heading, items }) {
  return (
    <section className="px-6 pb-32 pt-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1000px]">
        <Reveal>
          <p className="metadata mb-6 text-gold">FAQ</p>
          <h2 className="max-w-2xl font-heading text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {heading}
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <Accordion type="single" collapsible className="mt-12 w-full">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-gold/20"
              >
                <AccordionTrigger className="py-7 text-left font-heading text-xl font-medium tracking-tight hover:no-underline md:text-2xl">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-7 text-base leading-relaxed text-foreground/65 md:text-lg">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}