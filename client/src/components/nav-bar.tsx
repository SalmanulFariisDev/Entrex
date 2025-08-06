"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type Props = {
  textColor?: string;
};

export default function Navbar({ textColor = "text-black" }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full  ">
      <div className="bg-[#fff] text-sm  text-black px-16 py-1 flex flex-col sm:flex-row justify-between items-center">
        <span className="mb-1 sm:mb-0">bookings@entrex.in</span>
        <div className="flex gap-4 flex-wrap text-center justify-center">
          <span className="border-r border-black pr-2">+91 44 4953 0055</span>
          <span className="border-r border-black pr-2">+91 98400 27900</span>
          <span className="pr-4">+91 97167 81444</span>
        </div>
      </div>

      <div className="border-t border-gray-200"></div>

      <div className="absolute top-[34px] left-0 w-full px-16 py-2 flex items-center justify-between z-50">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Entrex Logo"
              width={120}
              height={80}
              className="object-contain"
            />
          </div>
        </Link>

        <nav
          className={`hidden lg:flex space-x-5 font-inter px-10 ${textColor} font-inter`}
        >
          <Link href="/about">About Us</Link>
          {/* <Link href="/">Services</Link> */}
          <div className="relative group">
            <span className="cursor-pointer">Services</span>

            {/* Dropdown Menu */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[850px] bg-white shadow-lg rounded-2xl p-6 hidden group-hover:flex z-50">
              <div className="grid grid-cols-3 gap-8 text-sm text-gray-700 w-full">
                {/* Column 1 */}
                <div>
                  <h3 className="font-semibold text-[#1a1a4c] mb-2">
                    Corporate Mobility Solutions
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <a href="#">Employee Transportation</a>
                    </li>
                    <li>
                      <a href="#">Employee Trips</a>
                    </li>
                    <li>
                      <a href="#">Executive Leasing</a>
                    </li>
                    <li>
                      <a href="#">Roster Planning & Routing</a>
                    </li>
                    <li>
                      <a href="#">Management Reporting</a>
                    </li>
                    <li>
                      <a href="#">Systemized Billing</a>
                    </li>
                    <li>
                      <a href="#">Transport Desk & Ticketing</a>
                    </li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div>
                  <h3 className="font-semibold text-[#1a1a4c] mb-2">
                    Event & Custom Travel
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <a href="#">Events & Seminars</a>
                    </li>
                    <li>
                      <a href="#">Elite Weddings</a>
                    </li>
                    <li>
                      <a href="#">Family Events & Holidays</a>
                    </li>
                    <li>
                      <a href="#">Customized Tours</a>
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div>
                  <h3 className="font-semibold text-[#1a1a4c] mb-2">
                    Tour & Rental Services
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <a href="#">Pilgrim Tours</a>
                    </li>
                    <li>
                      <a href="#">Package Tours</a>
                    </li>
                    <li>
                      <a href="#">Premium Rent-a-Cab</a>
                    </li>
                    <li>
                      <a href="#">Ticketing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link href="/">Tour Packages</Link>
          <Link href="/rentals">Luxury Car Rentals</Link>
          <Link href="/clients">Clients</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? (
              <X size={28} className="text-black" />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`lg:hidden flex font-inter flex-col px-4 pb-4 space-y-2  font-inter ${textColor} `}
        >
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          {/* <Link href="/" onClick={() => setMenuOpen(false)}>
            Services
          </Link> */}
          <div className="relative group">
            <span className="cursor-pointer">Services</span>

            {/* Dropdown Menu */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[850px] bg-white shadow-lg rounded-2xl p-6 hidden group-hover:flex z-50">
              <div className="grid grid-cols-3 gap-8 text-sm text-gray-700 w-full">
                {/* Column 1 */}
                <div>
                  <h3 className="font-semibold text-[#1a1a4c] mb-2">
                    Corporate Mobility Solutions
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <a href="#">Employee Transportation</a>
                    </li>
                    <li>
                      <a href="#">Employee Trips</a>
                    </li>
                    <li>
                      <a href="#">Executive Leasing</a>
                    </li>
                    <li>
                      <a href="#">Roster Planning & Routing</a>
                    </li>
                    <li>
                      <a href="#">Management Reporting</a>
                    </li>
                    <li>
                      <a href="#">Systemized Billing</a>
                    </li>
                    <li>
                      <a href="#">Transport Desk & Ticketing</a>
                    </li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div>
                  <h3 className="font-semibold text-[#1a1a4c] mb-2">
                    Event & Custom Travel
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <a href="#">Events & Seminars</a>
                    </li>
                    <li>
                      <a href="#">Elite Weddings</a>
                    </li>
                    <li>
                      <a href="#">Family Events & Holidays</a>
                    </li>
                    <li>
                      <a href="#">Customized Tours</a>
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div>
                  <h3 className="font-semibold text-[#1a1a4c] mb-2">
                    Tour & Rental Services
                  </h3>
                  <ul className="space-y-1">
                    <li>
                      <a href="#">Pilgrim Tours</a>
                    </li>
                    <li>
                      <a href="#">Package Tours</a>
                    </li>
                    <li>
                      <a href="#">Premium Rent-a-Cab</a>
                    </li>
                    <li>
                      <a href="#">Ticketing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Link href="/" onClick={() => setMenuOpen(false)}>
            Tour Packages
          </Link>
          <Link href="/rentals" onClick={() => setMenuOpen(false)}>
            Luxury Car Rentals
          </Link>
          <Link href="/clients" onClick={() => setMenuOpen(false)}>
            Clients
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
