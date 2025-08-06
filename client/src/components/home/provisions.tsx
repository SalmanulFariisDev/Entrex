import { NotebookPen } from "lucide-react";
import Image from "next/image";
import { CiLocationOn, CiUmbrella } from "react-icons/ci";
import { FaBoxTissue, FaChargingStation, FaCookieBite, FaFireExtinguisher } from "react-icons/fa";
import { FaBottleWater, FaBowlRice } from "react-icons/fa6";
import { GiDelicatePerfume, GiFirstAidKit } from "react-icons/gi";
import { IoFlashlightOutline, IoNewspaperSharp } from "react-icons/io5";

const provisions = [
  { label: "Water bottle", icon: <FaBottleWater />},
  { label: "Newspaper", icon: <IoNewspaperSharp />},
  { label: "Tissue Paper pouch", icon: <FaBoxTissue />},
  { label: "Cookies", icon: <FaCookieBite />},
  { label: "Writing slip & Pen", icon: <NotebookPen /> },
  { label: "Ice Box (Based on request)", icon: <FaBowlRice />},
  { label: "Fire Extinguisher Kit", icon: <FaFireExtinguisher />},
  { label: "Perfume", icon: <GiDelicatePerfume />},
  { label: "Hand-phone Charger", icon:<FaChargingStation />},
  { label: "GPS Tracking", icon: <CiLocationOn /> },
  { label: "Umbrella", icon: <CiUmbrella />},
  { label: "Torch Light", icon: <IoFlashlightOutline /> },
  { label: "First Aid Kit", icon: <GiFirstAidKit />
},
];

export default function InCarProvisions() {
  return (
    <div className=" px-4 text-center  min-h-screen">
      <h2 className="text-3xl font-inter font-bold mb-2">In-car Provisions</h2>
      <p className="text-sm text-gray-600 mb-10">
        Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.
      </p>

     <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-5xl mx-auto">
  {provisions.map((item, index) => (
    <div key={index} className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center">
      <div className="w-12 h-12 text-2xl text-red-500 mb-2 flex items-center justify-center">
        {item.icon}
      </div>
      <span className="text-sm font-medium text-gray-700 text-center">{item.label}</span>
    </div>
  ))}
</div>


      <button className="mt-12 bg-gradient-to-r from-red-500 to-orange-400 hover:opacity-90 text-white px-6 py-2 rounded-full text-sm shadow">
        Book Your Journey Now
      </button>
    </div>
  );
}
