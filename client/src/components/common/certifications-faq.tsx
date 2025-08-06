import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CertificationsFAQ() {
  return (
    <div className="px-4 w-full md:px-16 py-10 bg-white text-center">
      <div className="flex w-full flex-col items-center justify-center space-y-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Left Image */}
          <div className="max-w-[250px] text-sm">
            <Image
              src="/left-log.png"
              alt="Affiliation Left"
              width={350}
              height={150}
            />
            <p className="mt-2 font-medium">
              Affiliations: IATO – Indian Association of Tour Operators
            </p>
            <p className="text-gray-600 text-xs">
              We offer GPS-enabled rides so you—and your loved ones—can track
              your journey with full transparency.
            </p>
          </div>

          <div className="relative w-[420px] mx-auto">
            <div className="absolute top-28 left-1/2 -translate-x-1/2 text-center font-inter z-10">
              <h2 className="text-3xl font-bold text-black leading-tight">
                Our
              </h2>
              <h2 className="text-3xl font-bold text-black leading-tight">
                Certifications
              </h2>
            </div>

            <Image
              src="/leaf.png"
              alt="Badge"
              className="object-contain"
              width={420}
              height={120}
            />
          </div>

          <div className="max-w-[250px] text-sm">
            <Image
              src="/right-log.png"
              alt="Affiliation Right"
              width={350}
              height={150}
            />
            <p className="mt-2 font-medium">
              Affiliations: IATO – Indian Association of Tour Operators
            </p>
            <p className="text-gray-600 text-xs">
              We offer GPS-enabled rides so you—and your loved ones—can track
              your journey with full transparency.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold">❓❓❓</h2>
        <h2 className="text-3xl font-bold mt-2">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-gray-600 mt-2">
          Got questions? We’ve got answers! Find solutions to common queries
          about our services, processes, and technology.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <Accordion type="multiple" className="w-full pl-20 pr-10">
            <AccordionItem value="faq1">
              <AccordionTrigger>
                What is Webflow and why is it the best website builder?
              </AccordionTrigger>
              <AccordionContent>
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices...
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq2">
              <AccordionTrigger>
                What is your favorite template from BRIX Templates?
              </AccordionTrigger>
              <AccordionContent>
                Answer about favorite template...
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq3">
              <AccordionTrigger>
                How do you clone a template from the Showcase?
              </AccordionTrigger>
              <AccordionContent>
                Answer about cloning templates...
              </AccordionContent>
            </AccordionItem>
              <AccordionItem value="faq4">
              <AccordionTrigger>
                How do you clone a template from the Showcase?
              </AccordionTrigger>
              <AccordionContent>
                Answer about cloning templates...
              </AccordionContent>
            </AccordionItem>
              <AccordionItem value="faq5">
              <AccordionTrigger>
                How do you clone a template from the Showcase?
              </AccordionTrigger>
              <AccordionContent>
                Answer about cloning templates...
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="multiple" className="w-full pr-20">
            <AccordionItem value="faq6">
              <AccordionTrigger>
                Why is BRIX Templates the best Webflow agency?
              </AccordionTrigger>
              <AccordionContent>
                Answer about BRIX Templates...
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq7">
              <AccordionTrigger>
                When was Webflow officially launched?
              </AccordionTrigger>
              <AccordionContent>
                Answer about Webflow launch date...
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq8">
              <AccordionTrigger>
                How do you integrate Jetboost with Webflow?
              </AccordionTrigger>
              <AccordionContent>
                Answer about Jetboost integration...
              </AccordionContent>
            </AccordionItem>
              <AccordionItem value="faq9">
              <AccordionTrigger>
                How do you clone a template from the Showcase?
              </AccordionTrigger>
              <AccordionContent>
                Answer about cloning templates...
              </AccordionContent>
            </AccordionItem>
              <AccordionItem value="faq10">
              <AccordionTrigger>
                How do you clone a template from the Showcase?
              </AccordionTrigger>
              <AccordionContent>
                Answer about cloning templates...
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
