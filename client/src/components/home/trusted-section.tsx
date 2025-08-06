import Image from "next/image";
import Companies from "../common/companys";

export default function TrustedSection() {
  return (
    <section className="bg-[#fffefc] py-12 px-4 sm:px-8">
      <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto mb-12">
        {[
          "Multilingual Chauffeurs",
          "Entrex Client Kit for every trip",
          "100% Statutory Compliance ensured",
          "Luxury and Well maintained vehicles",
          "Vehicles with average age of less than 3 years",
          "Best Pricing among the Premium segment service providers",
          "ZERO Payment commitment in case of any flaw in the trip service",
          "Safety & Security ensured through high-end GPS based solution and Remote vehicle control",
          "Packaged Solutioning covering Accommodation, Food, Sight-seeing, Tourist Guide etc for Expat / Executive Tourism.",
          "For long stay Clients, dedicated Chauffer & Vehicle for undisturbed service",
        ].map((item, index) => (
        <div
  key={index}
  className="border border-dashed border-gray-300 px-4 py-2 rounded-lg text-sm text-gray-800 max-w-4xl"
>
  {highlightKeywords(item)}
</div>

        ))}
        
      </div>

     <Companies/>
    </section>
  );
}

function highlightKeywords(text: string) {
  const keywords = [
    "Chauffeurs",
    "Client Kit",
    "Compliance ensured",
    "Luxury",
    "less than 3 years",
    "Best Pricing",
    "Premium segment",
    "ZERO Payment",
    "Safety & Security",
    "Expat / Executive Tourism",
    "dedicated Chauffer & Vehicle",
  ];

  const parts = text.split(
    new RegExp(`(${keywords.join("|")})`, "gi")
  );

  return parts.map((part, i) =>
    keywords.includes(part) ? (
      <span key={i} className="text-orange-500 font-medium">
        {part}
      </span>
    ) : (
      part
    )
  );
}
