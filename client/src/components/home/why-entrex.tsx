import { cards } from "@/data/dummy-data";
import { Bolt, Receipt } from "lucide-react";
import Image from "next/image";
import InCarProvisions from "./provisions";
import PremiumTravelSection from "./travel-section";





const features = [
  {
    icon: <Bolt className="text-orange-500" />,
    title: "Premium Chauffeurs",
    desc: "All our drivers are handpicked, background-verified, professionally dressed, and trained for top-tier customer service.",
  },
  {
    icon: <Receipt className="text-orange-500" />,
    title: "Transparent Pricing",
    desc: "No hidden charges. Transparent fare structure with real-time billing through our app.",
  },
  {
    icon: "🛠️",
    title: "Well-Maintained Vehicles",
    desc: "Our fleet is serviced regularly, sanitized daily, and equipped with modern amenities for a smooth and safe ride.",
  },
  {
    icon: "📍",
    title: "Real-Time Tracking",
    desc: "We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.",
  },
  {
    icon: "📞",
    title: "24×7 Dedicated Support",
    desc: "Our operations team is available around the clock to assist with bookings, changes, or emergencies.",
  },
  {
    icon: "⏱️",
    title: "Punctual & Reliable",
    desc: "Our chauffeurs arrive ahead of schedule and follow optimized routes for timely arrivals.",
  },
];

const EntrexFeatures = () => {
  return (
    <div className="relative bg-white py-24 px-6 md:px-12 lg:px-24 text-center">
      <h2 className="text-4xl font-bold mb-2">
        Why <span className="text-orange-500">ENTREX</span>?
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-20">
        Trusted by hundreds of travelers and corporates across India for a
        premium ride experience.
      </p>

      <div className="relative justify-center items-center hidden lg:flex">
        <Image
          src="/car.png"
          alt="Entrex Car"
          width={600}
          height={200}
          className="object-contain"
        />

        <div className="absolute -top-8 left-72 w-60 text-right">
          <div className="text-xl mb-1">
            <Bolt className="text-orange-500" />
          </div>
          <h4 className="font-semibold text-md mb-1">Premium Chauffeurs</h4>
          <p className="text-sm text-gray-600">
            All our drivers are handpicked, background-verified, professionally
            dressed, and trained for top-tier customer service.
          </p>
        </div>

        <div className="absolute -top-8 right-72 w-60 text-left">
          <div className="text-xl mb-1">
            <Receipt className="text-orange-500" />
          </div>
          <h4 className="font-semibold text-md mb-1">Transparent Pricing</h4>
          <p className="text-sm text-gray-600">
            No hidden charges. Transparent fare structure with real-time billing
            through our app.
          </p>
        </div>

        <div className="absolute bottom-0 left-32 w-64 text-left">
          <div className="text-xl mb-1">🛠️</div>
          <h4 className="font-semibold text-md mb-1">
            Well-Maintained Vehicles
          </h4>
          <p className="text-sm text-gray-600">
            Our fleet is serviced regularly, sanitized daily, and equipped with
            modern amenities for a smooth and safe ride.
          </p>
        </div>

        <div className="absolute bottom-40 left-32 w-64 text-left">
          <div className="text-xl mb-1">📍</div>
          <h4 className="font-semibold text-md mb-1">Real-Time Tracking</h4>
          <p className="text-sm text-gray-600">
            We offer GPS-enabled rides so you—and your loved ones—can track your
            journey with full transparency.
          </p>
        </div>

        <div className="absolute bottom-0 right-32 w-64 text-left">
          <div className="text-xl mb-1">📞</div>
          <h4 className="font-semibold text-md mb-1">24×7 Dedicated Support</h4>
          <p className="text-sm text-gray-600">
            Our operations team is available around the clock to assist with
            bookings, changes, or emergencies.
          </p>
        </div>

        <div className="absolute bottom-40 right-32 w-64 text-left">
          <div className="text-xl mb-1">⏱️</div>
          <h4 className="font-semibold text-md mb-1">Punctual & Reliable</h4>
          <p className="text-sm text-gray-600">
            Our chauffeurs arrive ahead of schedule and follow optimized routes
            for timely arrivals.
          </p>
        </div>
      </div>

      <div className="lg:hidden flex flex-col items-center">
        <Image
          src="/car.png"
          alt="Entrex Car"
          width={300}
          height={100}
          className="object-contain mb-6"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-4 text-left shadow-sm"
            >
              <div className="text-xl mb-2">{feature.icon}</div>
              <h4 className="font-semibold text-md mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>


<div className="w-full flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-4xl font-bold mb-2 mt-10">Our Services</h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Premium travel solutions tailored for businesses and individuals across India.
      </p>

      <div className="bg-[#ECECEC] rounded-full h-14 flex items-stretch w-full max-w-md overflow-hidden">
        <div className="bg-gradient-to-br from-[#E44D26] to-[#F9A825]  text-white text-sm rounded-full font-medium px-6 flex items-center">
          Corporate Solutions
        </div>

       <div className="bg-[#ECECEC] text-sm flex items-center px-4">
          Personal / Retail Rides
        </div>
      </div>
    </div>
    <div className="px-4 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`relative rounded-xl overflow-hidden shadow-md ${
              card.span && "lg:col-span-2"
            }`}
          >
            <Image
              src={card.image}
              alt={card.title}
              width={600}
              height={400}
              className="object-cover w-full h-60"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm mt-1">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <InCarProvisions/>

    </div>
  );
};

export default EntrexFeatures;

