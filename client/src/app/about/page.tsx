import Journey from '@/components/about/journey';
import Team from '@/components/about/team';
import Navbar from '@/components/nav-bar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';



const cards = [
  {
    icon: "/telescope.png",
    title: "Our Vision",
    description:
      "To become the most trusted and technologically advanced ground mobility partner for corporates and expats.",
    points: [
      "Setting new standards in service",
      "Expanding with smart, scalable systems",
      "Earning trust through consistency"
    ]
  },
  {
    icon: "/note.png",
    title: "Our Mission",
    description:
      "To deliver consistent, secure, and high-quality chauffeur-driven experiences through:",
    points: [
      "Verified professionals",
      "A modern, compliant fleet",
      "A technology-first approach to mobility, safety, and customer support"
    ]
  },
  {
    icon: "/diamond.png",
    title: "Our Core Values",
    description:
      "We operate with principles that drive excellence in every journey.",
    points: [
      "Lead with integrity and professionalism",
      "Prioritize safety, transparency, and reliability",
      "Embrace innovation to improve every ride"
    ]
  }
];

const About = () => {
  return (
    <div>
      <Navbar textColor="text-black" />

      <section className="px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          
\          <div className="flex-1 text-center lg:text-left mt-10">
            <h1 className="text-5xl font-plusJakartaSans font-bold text-gray-800 mb-6 leading-tight mt-16">
              India’s Premier Chauffeur Partner for Corporates & Expats
            </h1>

            <p className="text-gray-600 text-lg mb-8 font-inter">
              ENTREX delivers reliable, professional, and tech-enabled ground transportation services across India. 
              Backed by premium vehicles, multilingual chauffeurs, and 24×7 operational support, we’re the preferred
              choice for corporates, expats, and high-value travelers seeking more than just a ride.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className='bg-gradient-to-br from-[#E44D26] to-[#F9A825] rounded-full'>Explore Our Services</Button>
              <Button className='rounded-full'>Talk to Our Team</Button>
            </div>
          </div>

          <div className="flex-1">
            <Image
              src="/aboutbg.png" 
              alt="About Background"
              width={898}
              height={734}
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section className="px-8 py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">

        <div className="flex-shrink-0 px-10">
          <Image
            src="/logo-big.png"
            alt="ENTREX Logo"
            width={380} 
            height={200}
            className="object-contain"
          />
        </div>

        <div className="flex-1 p-20">
<h1 className="text-3xl font-bold bg-gradient-to-br from-[#E44D26] to-[#F9A825] bg-clip-text text-transparent mb-4">
        Our Story
      </h1>

          <p className="text-black text-xs mb-4 leading-relaxed">
            Founded in 2015 with a mission to transform business travel in India, ENTREX started as a small operation in Chennai focused on consistent, premium chauffeur service. Over the years, we’ve evolved into a pan-India enterprise mobility partner, serving MNCs, diplomats, international consultants, and expats with personalized care and operational excellence.
          </p>

          <p className="text-black text-xs leading-relaxed">
            We don’t just move people. We manage experiences — using technology, compliance, and hospitality to create seamless journeys across cities and states.
          </p>
        </div>
      </div>
    </section>

  <div className="px-4 py-10 sm:px-6 md:px-10 lg:px-44 font-inter">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
    {cards.map((card, index) => (
      <div
        key={index}
        className="border border-red-300 rounded-xl p-5 md:p-6 lg:p-7 shadow-md bg-white flex flex-col gap-4 hover:shadow-lg transition duration-300"
      >
          <Image
            src={card.icon}
            alt="ENTREX Logo"
            width={100} 
            height={80}
            className="object-contain"
          />
        <h2 className="text-xl font-manrope font-bold">{card.title}</h2>
        <p className="text-black text-sm">{card.description}</p>
        <ul className="space-y-2">
          {card.points.map((point, idx) => (
            <li
              key={idx}
              className="border px-3 py-1 rounded-md bg-gray-100 text-sm"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
    <Team/>
    <Journey/>
    </div>
  );
};

export default About;
