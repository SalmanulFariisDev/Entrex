import React from "react";
import { FaCarSide, FaShuttleVan, FaBusAlt, FaSnowflake } from "react-icons/fa";

export default function VehicleOptionsSection() {
  return (
    <section className="w-full py-12 px-4 md:px-16 font-inter">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Why Your Website Is Your Best Salesperson
        </h2>
        <p className="text-gray-600 text-xs md:text-sm max-w-5xl mx-auto">
          Choose from a wide range of well-maintained vehicles tailored for employee transportation across all business sizes and shift types.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="md:pl-6">
          <div className="w-full md:w-4/5 overflow-hidden rounded-3xl">
            <img
              src="/nano.jpg"
              alt="Red Car"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Vehicle Options */}
        <div className="space-y-6 border-l-2 border-gray-300 pl-6">
          <div className="flex items-start gap-4">
            <FaCarSide className="text-blue-600 text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900 text-lg">
                Hatchbacks & Sedans
              </h4>
              <p className="text-gray-600 text-sm">
                Ideal for individual pickups, senior staff, or compact city routes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaShuttleVan className="text-blue-600 text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900 text-lg">MUVs & SUVs</h4>
              <p className="text-gray-600 text-sm">
                Spacious, comfortable, and perfect for small teams or mid-range commutes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaBusAlt className="text-blue-600 text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900 text-lg">
                Mini & Large Tempo Travelers
              </h4>
              <p className="text-gray-600 text-sm">
                Best suited for shift-based staff transport and high-volume deployment.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaSnowflake className="text-blue-600 text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900 text-lg">
                Luxury Air-Conditioned Coaches (on request)
              </h4>
              <p className="text-gray-600 text-sm">
                Premium option for corporate events, long-distance staff movement, or executive group travel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
