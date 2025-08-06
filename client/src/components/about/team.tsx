import { ArrowLeft, Linkedin, X } from "lucide-react";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="px-4 py-10 font-inter">
      <div className="text-center mb-6">
        <span className="bg-green-200 text-green-800 rounded-full px-3 py-1 text-xs font-semibold">
          OUR TEAM
        </span>
        <h1 className="text-xl sm:text-2xl font-bold pt-2 pb-1">
          Meet the Founders
        </h1>
        <p className="text-xs font-semibold text-gray-600">
          Vision-Driven. Execution-Focused.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        <div className="bg-white border rounded-lg shadow-sm overflow-hidden max-w-sm mx-auto">
          <div className="h-52 bg-[#FFBF1C] relative overflow-hidden">
            <Image
              src="/founder1.png"
              alt="Mugundhan Sankar"
              fill
              className="object-cover scale-150"
            />
          </div>

          <div className="p-3">
            <h2 className="text-base font-bold font-manrope">
              Mugundhan Sankar
            </h2>
            <p className="text-xs text-gray-600 mb-1">
              Founder & Managing Director
            </p>
            <p className="text-xs text-gray-700 mb-2">
              With 15+ years in logistics and operations, Mugundhan built ENTREX
              to redefine Indian ground transport with global standards and
              Indian values. His vision continues to guide the company’s
              expansion and operational discipline.
            </p>
            <div className="flex gap-2">
              <Linkedin className="w-4 h-4 text-gray-700 hover:text-blue-600 cursor-pointer" />
              <X className="w-4 h-4 text-gray-700 hover:text-black cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg shadow-sm overflow-hidden max-w-sm mx-auto">
          <div className="h-52 bg-[#EE3B3D] relative overflow-hidden">
            <Image
              src="/founder2.png"
              alt="Mugundhan Sankar"
              fill
              className="object-cover scale-150"
            />
          </div>

          <div className="p-3">
            <h2 className="text-base font-bold font-manrope">
              Mugundhan Sankar
            </h2>
            <p className="text-xs text-gray-600 mb-1">
              Founder & Managing Director
            </p>
            <p className="text-xs text-gray-700 mb-2">
              With 15+ years in logistics and operations, Mugundhan built ENTREX
              to redefine Indian ground transport with global standards and
              Indian values. His vision continues to guide the company’s
              expansion and operational discipline.
            </p>
            <div className="flex gap-2 ">
              <Linkedin className="w-4 h-4 text-gray-700 hover:text-blue-600 cursor-pointer" />
              <X className="w-4 h-4 text-gray-700 hover:text-black cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

     <div className="px-4 sm:px-6 lg:px-8 py-10 mt-10 flex justify-center">
      <div className="bg-[#F5F5F5] w-full max-w-6xl rounded-xl px-6 sm:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 font-inter">
          <div>
            <h1 className="text-2xl sm:text-3xl px-5 font-bold text-gray-900">
              Join our team
            </h1>
          </div>

          <div>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              We believe it takes great people to make a great product. That’s why we hire
              not only the perfect professional fits, but people who embody our company values.
            </p>
            <p className="text-sm font-semibold text-blue-600 inline-flex items-center gap-2 cursor-pointer hover:underline">
              Explore integrations <ArrowLeft className="w-4 h-4" />
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  ); 
};

export default Team;
