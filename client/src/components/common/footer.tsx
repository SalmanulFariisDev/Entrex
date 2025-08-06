import { Mail, Phone, Twitter, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-700">
        <div>
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Entrex Logo" width={160} height={50} />
          </div>
          <p className="mt-4">
            We are one of the leading Travel operators in South India with our registered office at Madipakkam, Chennai. We serve leading corporate clients in Chennai and Bangalore regions.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold text-black mb-2">Company</h4>
          <ul className="space-y-1">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Compliance Control</li>
            <li>Security Control</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-2">Tours</h4>
          <ul className="space-y-1">
            <li>Sales software</li>
            <li>Features</li>
            <li>Privacy and security</li>
            <li>Marketplace</li>
            <li>Status</li>
            <li>API</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-2">Contact</h4>
          <p>ASK Towers 1st floor, 183-184, 3rd Main Rd,<br />Sri Sai Nagar, Thoraipakkam, Tamil Nadu 600096</p>
          <div className="flex items-center gap-2 mt-3">
            <Mail className="h-4 w-4 text-gray-600" />
            <span>bookings@entrex.in</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Phone className="h-4 w-4 text-gray-600" />
            <span>+91 44 4953 0055</span>
          </div>
        </div>
      </div>

      <div className="border-t py-4  flex flex-col md:flex-row justify-evenly items-center text-xs text-gray-600">
        <div className="mb-2 md:mb-0">Copyright © 2025 Entrex. All Rights Reserved.</div>
        <div className="flex flex-wrap items-center gap-4">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Cookies</span>
          <div className="flex gap-3  text-gray-500">
            <Twitter className="h-4 w-4 hover:text-blue-500 cursor-pointer" />
            <Facebook className="h-4 w-4 hover:text-blue-700 cursor-pointer" />
            <Linkedin className="h-4 w-4 hover:text-blue-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
