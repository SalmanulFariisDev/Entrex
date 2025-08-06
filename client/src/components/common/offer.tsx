import React from 'react'
import { FaBusAlt, FaCarSide, FaFileInvoice, FaPlaneDeparture, FaSyncAlt, FaUserShield } from 'react-icons/fa'

const Offer = () => {
  return (
     <section className="w-full px-4 py-12 md:py-20 bg-white font-inter ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">What We Offer</h2>
          <p className="text-gray-600 mb-10 text-sm md:text-base">
            Our services are designed to simplify business mobility while
            delivering consistent, comfortable, and compliant ground
            transportation.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          {[
            {
              icon: <FaCarSide className="text-xl text-white" />,
              bg: "bg-sky-400",
              title: "Executive Chauffeur Services",
              desc: "Discreet, professional chauffeurs for directors, VIPs, and senior leadership.",
            },
            {
              icon: <FaPlaneDeparture className="text-xl text-white" />,
              bg: "bg-yellow-300",
              title: "Airport Transfers",
              desc: "Punctual pickups and drop-offs with live flight tracking and zero waiting time.",
            },
            {
              icon: <FaBusAlt className="text-xl text-white" />,
              bg: "bg-orange-300",
              title: "Employee Commute Programs",
              desc: "Safe, app-tracked transportation for staff with route optimization and rostering.",
            },
            {
              icon: <FaUserShield className="text-xl text-white" />,
              bg: "bg-purple-300",
              title: "Expat & Guest Handling",
              desc: "Hospitality-trained chauffeurs and multilingual support for global visitors and delegations.",
            },
            {
              icon: <FaFileInvoice className="text-xl text-white" />,
              bg: "bg-sky-400",
              title: "Centralized Billing & MIS Reports",
              desc: "Transparent invoicing with detailed ride history, analytics, and corporate summaries.",
            },
            {
              icon: <FaSyncAlt className="text-xl text-white" />,
              bg: "bg-yellow-300",
              title: "App-Based Booking & Trip Management",
              desc: "Real-time tracking, instant bookings, and secure ride monitoring via our digital platform.",
            },
          ].map((item, idx) => (
            <div key={idx} className=" items-start gap-4">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-md pb-2 mb-2 ${item.bg} pt-1`}
              >
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

  )
}

export default Offer
