import Image from "next/image";
import CertificationsFAQ from "../common/certifications-faq";
import NewsAndContact from "../common/news-connect";
import Footer from "../common/footer";

const Journey = () => {
  return (
    <div className="relative py-16 font-inter bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        ENTREX – Our Journey
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <img
          src="/map.jpg"
          alt="Timeline"
          className="w-full max-w-5xl mx-auto"
        />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[8%] left-[5%] w-[40%] pointer-events-auto">
            <h3 className="text-lg font-bold">2017</h3>
            <p className="text-sm text-gray-700">
              ENTREX founded with a mission <br /> to redefine corporate
              transport services.
            </p>
          </div>

          <div className="absolute top-[25%] right-[5%] w-[40%] pointer-events-auto text-right">
            <h3 className="text-lg font-bold">2018</h3>
            <p className="text-sm text-gray-700">
              Recognized as one of the fastest-growing <br /> mobility startups
              in South India.
            </p>
          </div>

          <div className="absolute top-[42%] left-[5%] w-[40%] pointer-events-auto">
            <h3 className="text-lg font-bold">2019</h3>
            <p className="text-sm text-gray-700">
              Registered as Pro Entrex Logistics Pvt. <br /> Ltd. to scale
              nationwide operations.
            </p>
          </div>

          <div className="absolute top-[59%] right-[5%] w-[40%] pointer-events-auto text-right">
            <h3 className="text-lg font-bold">2020–21</h3>
            <p className="text-sm text-gray-700">
              Successfully navigated the COVID-19 pandemic, <br /> increasing
              client servicing amidst crisis.
            </p>
          </div>

          <div className="absolute top-[76%] left-[5%] w-[40%] pointer-events-auto">
            <h3 className="text-lg font-bold">2022</h3>
            <p className="text-sm text-gray-700">
              Expanded to become a PAN India corporate transport solutions
              provider.
            </p>
          </div>

          <div className="absolute top-[90%] right-[5%] w-[40%] pointer-events-auto text-right">
            <h3 className="text-lg font-bold">2024</h3>
            <p className="text-sm text-gray-700">
              Established as a prime partner for enterprise clients, with
              services extended to Tier 2 cities across India.
            </p>
          </div>
        </div>
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
      <CertificationsFAQ />
      <NewsAndContact />
      <Footer />
    </div>
  );
};

export default Journey;
