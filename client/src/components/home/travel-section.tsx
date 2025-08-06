import Image from "next/image";
import { FaArrowUp, FaBullseye } from "react-icons/fa";

export default function PremiumTravelSection() {
  return (
    <div className="bg-[#F6F5F8] w-full text-center py-10">
      <div className="w-full max-w-screen-xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-black">
          Why ENTREX Is the Preferred Partner <br className="hidden sm:block" />
          for Premium Tourist Travel in India
        </h2>
        <p className="text-black font-inter font-light text-sm sm:text-base max-w-3xl mx-auto mb-10 mt-4">
          Whether you're an international traveler, a corporate guest, or an
          expat exploring India, ENTREX delivers a seamless journey with
          professional chauffeurs, luxury vehicles, and end-to-end travel
          solutions.
        </p>

        {/* Main Image + Stats */}
        <div className="relative max-w-4xl mx-auto">
          {/* Stat Card - Left (hidden on small) */}
          <div className="hidden sm:block absolute top-24 -left-4 z-10">
            <div className="bg-white shadow-lg rounded-xl p-4 w-56 text-left">
              <p className="text-sm text-black mb-1 font-medium">Tours Completed</p>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-gray-900">27,632</p>
                <div className="flex items-center text-green-600 text-sm font-medium ml-2">
                  +2.5% <FaArrowUp className="ml-1" />
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Compared to (21,340 last year)
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden border-4 border-black">
            <Image
              src="/fam-car.jpg"
              alt="Family in car"
              width={960}
              height={600}
              className="object-cover w-full h-auto"
            />
          </div>

          {/* Stat Card - Right (hidden on small) */}
          <div className="hidden sm:flex absolute top-36 -right-4 z-10">
            <div className="bg-white shadow-lg rounded-xl p-4 w-48 flex items-center gap-3">
              <div className="text-green-500 p-3 text-3xl">
                <FaBullseye />
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-bold text-gray-900">68%</p>
                <p className="text-xs text-gray-500">Hit Rate this year</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats (visible only on small) */}
        <div className="mt-6 space-y-4 sm:hidden">
          <div className="bg-white shadow rounded-xl p-4 text-left">
            <p className="text-sm text-gray-500 mb-1 font-medium">
              Tours Completed
            </p>
            <p className="text-2xl font-bold text-gray-900">27,632</p>
            <div className="flex items-center text-green-600 text-sm font-medium mt-1">
              <FaArrowUp className="mr-1" /> +2.5%
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Compared to last year
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-4 text-center">
            <div className="flex justify-center text-green-500 text-3xl mb-1">
              <FaBullseye />
            </div>
            <p className="text-2xl font-bold text-gray-900">68%</p>
            <p className="text-xs text-gray-500">Hit Rate this year</p>
          </div>
        </div>
      </div>
    </div>
  );
}
