import Navbar from "@/components/nav-bar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  FaBusAlt,
  FaCarSide,
  FaFacebookF,
  FaFileInvoice,
  FaInstagram,
  FaPlaneDeparture,
  FaSyncAlt,
  FaTwitter,
  FaUserShield,
} from "react-icons/fa";
import TrustedSection from "@/components/home/trusted-section";
import CertificationsFAQ from "@/components/common/certifications-faq";
import NewsAndContact from "@/components/common/news-connect";
import Footer from "@/components/common/footer";
import Offer from "@/components/common/offer";
import Companies from "@/components/common/companys";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full px-4 py-12 md:py-20 mt-10 font-inter">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12  items-start">
          <div className="space-y-4">
            <p className="text-sm text-gray-500 uppercase">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Get in touch with us.
              <br />
              We're here to assist you.
            </h2>
          </div>

          <div className="flex flex-col items-center  md:justify-end gap-4">
            <button className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100">
              <FaFacebookF className="text-gray-600" />
            </button>
            <button className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100">
              <FaInstagram className="text-gray-600" />
            </button>
            <button className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100">
              <FaTwitter className="text-gray-600" />
            </button>
          </div>
        </div>

        <form className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-4">
          <Input
            type="text"
            placeholder="Your Name"
            className="col-span-3 md:col-span-1 border-0 border-b border-gray-300 rounded-none focus:ring-0 focus:border-black"
          />
          <Input
            type="email"
            placeholder="Email Address"
            className="col-span-3 md:col-span-1 border-0 border-b border-gray-300 rounded-none focus:ring-0 focus:border-black"
          />
          <Input
            type="text"
            placeholder="Phone Number (optional)"
            className="col-span-3 md:col-span-1 border-0 border-b border-gray-300 rounded-none focus:ring-0 focus:border-black"
          />

          <Textarea
            placeholder="Message"
            className="col-span-3 min-h-[150px] border-0 border-b border-gray-300 rounded-none focus:ring-0 focus:border-black"
          />

          <div className="col-span-3">
            <Button className="bg-gradient-to-r from-red-500 to-yellow-400 text-white px-6 py-3 rounded-full text-lg">
              Leave us a Message →
            </Button>
          </div>
        </form>
      </section>
      <Offer />
      {/* <TrustedSection /> */}
           <Companies/>

      <CertificationsFAQ />
      <NewsAndContact />
      <Footer />
    </div>
  );
};

export default Contact;
