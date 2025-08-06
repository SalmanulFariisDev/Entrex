import Image from "next/image";
import React from "react";
import {
  FaClipboardList,
  FaRoute,
  FaTruckMoving,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import {
  MdBusiness,
  MdHeadsetMic,
  MdLocalHospital,
  MdFactory,
  MdLocationCity,
  MdChair,
  MdHotel,
  MdLocalShipping,
  MdAccountBalance,
} from "react-icons/md";

export default function HowItWorks() {
  const howItWorksSteps = [
    {
      icon: <FaClipboardList className="text-red-500 text-2xl" />,
      title: "Requirement Mapping",
      description:
        "We understand your workforce size, shifts, routes, and security requirements.",
      count: "01",
    },
    {
      icon: <FaRoute className="text-yellow-500 text-2xl" />,
      title: "Deployment Plan",
      description:
        "We prepare routing plans, driver assignments, and pickup/drop schedules using AI-based planning tools",
      count: "02",
    },
    {
      icon: <FaTruckMoving className="text-green-500 text-2xl" />,
      title: "Live Execution",
      description:
        "Vehicles are dispatched on time with real-time monitoring and backup protocols",
      count: "03",
    },
    {
      icon: <FaFileInvoiceDollar className="text-green-500 text-2xl" />,
      title: "Transparent Billing",
      description:
        "Automated trip logs, easy reconciliation, and centralized invoicing.",
      count: "04",
    },
  ];

  const serveItems = [
    { icon: <MdBusiness />, title: "IT Companies" },
    { icon: <MdHeadsetMic />, title: "BPO & Call Centers" },
    { icon: <MdLocalHospital />, title: "Hospitals & Clinics" },
    { icon: <MdFactory />, title: "Manufacturing Units" },
    { icon: <MdLocationCity />, title: "Colleges & Universities" },
    { icon: <MdBusiness />, title: "Business Parks" },
    { icon: <MdChair />, title: "Shared Workspaces" },
    { icon: <MdHotel />, title: "Hotels & Hospitality" },
    { icon: <MdLocalShipping />, title: "Warehousing & Logistics" },
    { icon: <MdAccountBalance />, title: "Government & PSU" },
  ];

  return (
    <section className="w-full px-4 py-16 font-inter">
      {/* How It Works Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">How It Works</h2>
        <p className="text-sm text-gray-600 max-w-3xl mx-auto">
          Choose from a wide range of well-maintained vehicles tailored for employee
          transportation across all business sizes and shift types.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-20">
        {howItWorksSteps.map((step, index) => (
          <div
            key={index}
            className="border border-orange-300 p-5 rounded-lg text-center relative h-full"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h4 className="font-semibold text-blue-900 mb-2">
              {step.title}
            </h4>
            <p className="text-gray-600 text-sm mb-6">{step.description}</p>
            <span className="absolute top-4 right-4 text-4xl text-gray-200 font-bold">
              {step.count}
            </span>
          </div>
        ))}
      </div>

      <div className=" w-full text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Who We Serve</h2>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort,
          safety, and satisfaction.
        </p>
      </div>

<div className=" flex justify-center">
  <Image
    src="/mix.png"
    alt="Who We Serve"
    width={1020}
    height={680}
    className=" object-contain"
    priority
  />
</div>


      <div className="flex justify-center mt-10">
        <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition">
          Book Your Journey Now
        </button>
      </div>
         <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-inter">
              <div className="max-w-6xl mx-auto text-center">
                {/* Capsule label */}
                <span className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full mb-4">
                  TESTIMONIALS
                </span>
      
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
                  What Our Clients Say
                </h2>
      
                {/* Testimonial cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                  {/* Card 1 */}
                  <div className="w-full max-w-[320px] bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-left">
                    <div className="text-yellow-500 text-sm mb-4">★★★★★</div>
                    <p className="text-gray-800 text-base font-medium mb-6">
                      “Reliable, courteous, and always on time. ENTREX is more than a
                      transport provider—they’re our mobility partner.”
                    </p>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/p1.png"
                        alt="Ramesh Iyer"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-sm font-semibold">Ramesh Iyer</p>
                        <p className="text-xs text-gray-500">
                          Cricket Enthusiast, Mumbai
                        </p>
                      </div>
                    </div>
                  </div>
      
                  {/* Card 2 */}
                  <div className="w-full max-w-[320px] bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-left">
                    <div className="text-yellow-500 text-sm mb-4">★★★★★</div>
                    <p className="text-gray-800 text-base font-medium mb-6">
                      “As an expat, I felt completely at ease with ENTREX. Every ride
                      was smooth, safe, and incredibly professional.”
                    </p>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/p2.png"
                        alt="Sneha Pillai"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-sm font-semibold">Sneha Pillai</p>
                        <p className="text-xs text-gray-500">
                          Fitness Coach, Bangalore
                        </p>
                      </div>
                    </div>
                  </div>
      
                  {/* Card 3 */}
                  <div className="w-full max-w-[320px] bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-left">
                    <div className="text-yellow-500 text-sm mb-4">★★★★★</div>
                    <p className="text-gray-800 text-base font-medium mb-6">
                      "Best football I’ve used in a while. My entire team now orders
                      from here – reliable and affordable."
                    </p>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/p3.png"
                        alt="Ayaan Khan"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-sm font-semibold">Ayaan Khan</p>
                        <p className="text-xs text-gray-500">
                          School Football Coach, Delhi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>
  );
}
