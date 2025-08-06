import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, MapPin, UserCheck, Clock, LayoutGrid, BarChart3 } from "lucide-react";

export default function WhyEntrex() {
  const features = [
    {
      icon: <BadgeCheck className="text-sky-500" />, // Real-Time GPS Tracking
      title: "Real-Time GPS Tracking",
      description:
        "Monitor routes, driver behavior, and vehicle status through our centralized tracking system.",
    },
    {
      icon: <LayoutGrid className="text-yellow-500" />, // Dynamic Shift Management
      title: "Dynamic Shift Management",
      description:
        "Auto-generated rosters based on employee shift timings, integrated with your HRMS or scheduling platform.",
    },
    {
      icon: <UserCheck className="text-orange-500" />, // Verified Chauffeurs
      title: "Verified Chauffeurs",
      description:
        "All drivers undergo background checks, safety training, and etiquette certification.",
    },
    {
      icon: <MapPin className="text-purple-500" />, // PAN India Coverage
      title: "PAN India Coverage",
      description:
        "Operations across Tier 1, Tier 2, and emerging metro regions — no location is out of reach.",
    },
    {
      icon: <Clock className="text-green-500" />, // 24×7 Control Room
      title: "24×7 Control Room",
      description:
        "Round-the-clock support for routing, rescheduling, or emergency handling.",
    },
    {
      icon: <BarChart3 className="text-blue-500" />, // Data-Driven Reporting
      title: "Data-Driven Reporting",
      description:
        "MIS reports, trip logs, billing summaries, and audit trails — all available via dashboard or export.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text and Features */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why ENTREX for <br /> Employee Commute?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-gray-100 p-2 rounded-md">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/women.jpg"
            alt="Passenger in car"
            width={500}
            height={400}
            className="rounded-2xl object-cover w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
