"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function NewsAndContact() {
  return (
    <div className="space-y-16 px-4 sm:px-6 md:px-12 lg:px-20 py-10 bg-white">
      {/* News & Updates */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">News & Updates</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 justify-center">
  {[1, 2, 3].map((item, index) => (
    <Card key={index} className="w-full max-w-[300px] p-0 overflow-hidden rounded-md shadow-md mx-auto">
      <Image
        src={`/news${item}.jpg`}
        alt={`News ${item}`}
        width={300}
        height={160}
        className="object-cover w-full h-40"
      />
      <CardContent className="p-4 space-y-2">
        <CardTitle className="text-md font-semibold">
          SaaS customer development and no-code prototypes
        </CardTitle>
        <CardDescription>
          Self-service data analytics software that lets you create
          visually appealing data visualizations and dashboards in minutes.
        </CardDescription>
        <div className="flex justify-between text-xs text-muted-foreground pt-2">
          <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded">
            MARKETING
          </span>
          <span>Oct 3 · 7 min read</span>
        </div>
      </CardContent>
    </Card>
  ))}
</div>

        <Link
          href="#"
          className="mt-6 inline-block text-sm text-blue-600 hover:underline"
        >
          View more articles →
        </Link>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-2 sm:px-8 md:px-16">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold">Let’s Talk</h2>

          <div>
            <h3 className="text-lg font-medium">Email</h3>
            <p className="text-black">bookings@entrex.in</p>
          </div>

          <div>
            <h3 className="text-2xl mb-3 font-semibold">Socials</h3>
            <ul className="space-y-4 font-inter text-black">
              <li>
                <Link href="#" className="underline font-light">Instagram</Link>
              </li>
              <li>
                <Link href="#" className="underline font-light">Twitter</Link>
              </li>
              <li>
                <Link href="#" className="underline font-light">Facebook</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4 w-full">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input className="bg-white" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div>
            <Label>What service are you interested in</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="mobile">Mobile App</SelectItem>
                <SelectItem value="design">UI/UX Design</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Budget</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select project budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Below $1000</SelectItem>
                <SelectItem value="mid">$1000 - $5000</SelectItem>
                <SelectItem value="high">Above $5000</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Enter your message..." />
          </div>
          <Button className="w-full">Submit</Button>
        </form>
      </div>
    </div>
  );
}
