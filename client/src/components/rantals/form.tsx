import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaShieldAlt,
} from "react-icons/fa";
import Image from "next/image";

export default function Rentals() {
  return (
    <>
      <section className="w-full px-4 py-16 bg-white mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="w-14 h-14">
              <FaShieldAlt className="text-4xl text-blue-500" />
            </div>
            <p className="uppercase text-sm font-semibold text-red-500">
              Employee{" "}
              <span className="text-orange-400">Transportation Services</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Seamless, Safe, and Smart Commute Solutions for{" "}
              <br className="hidden md:block" />
              Your Workforce
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              ENTREX delivers tech-enabled employee transport solutions that
              ensure your workforce arrives on time — safely, reliably, and at
              scale.
            </p>
          </div>

          <div className="border rounded-2xl p-6 md:p-8 w-full max-w-md mx-auto border-red-300 bg-white shadow-md">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center bg-gradient-to-r from-red-500 to-orange-400 text-transparent bg-clip-text">
              Book Your Ride Instantly
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Full Name" />
                <Input placeholder="Phone Number" />
              </div>
              <Input placeholder="Email Address" />
              <div className="grid grid-cols-2 gap-2">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9am">9 AM</SelectItem>
                    <SelectItem value="5pm">5 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Adults" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Children" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Textarea placeholder="Message" />
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="w-full sm:w-1/2 rounded-full"
                >
                  RESET
                </Button>
                <Button className="w-full sm:w-1/2 bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-full">
                  LET'S BOOK NOW
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
