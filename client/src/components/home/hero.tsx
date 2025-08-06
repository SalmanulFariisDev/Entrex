"use client";

import Image from "next/image";
import Navbar from "../nav-bar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { booking } from "@/config/api";
import { toast } from "react-toastify";

const formSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  phone: z
    .string()
    .min(10, "Phone number should be at least 10 digits")
    .max(15, "Too long"),
  email: z.string().email("Invalid email"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  adults: z.string().min(1, "Adults field is required"),
  children: z.string().min(1, "Children field is required"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function HomePage() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit =async (data: FormValues) => {
    console.log("Submitted data:", data);
     const response = await booking(data);
          console.log("....", response);
if (response?.status == 201) {
        toast.success(response.data.message);
        reset()
}
  };

  return (
    <div className="relative">
      <Navbar textColor="text-white" />
      <div className="relative h-[90vh]">
        <Image
          src="/hero1.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 h-full text-white">
          <div className="max-w-xl text-center lg:text-left space-y-6">
            <div className="items-center">
              <div className="flex justify-center lg:justify-start items-center">
                <Image
                  src="/car-outline.gif"
                  width={116}
                  height={76}
                  alt="Car"
                  className="object-cover"
                />
              </div>
              <h1 className="text-4xl font-plusJakartaSans font-bold leading-tight">
                Premium Chauffeur <br /> Services for Every Journey
              </h1>
            </div>
            <p className="text-lg text-gray-200 font-inter font-semibold">
              From corporate travel to airport transfers, ENTREX ensures a safe,
              punctual, and comfortable ride—every time.
            </p>
            <button className="text-white px-6 py-3 rounded-full font-semibold transition bg-gradient-to-br from-[#E44D26] to-[#F9A825] ">
              Call Us Now
            </button>

            <div className="flex gap-8 pt-6 text-sm px-12 md:px-0">
              <div>
                <strong className="block text-2xl">Verified</strong>
                Chauffeurs
              </div>
              <div>
                <strong className="block text-2xl">Real-time</strong>
                Tracking
              </div>
              <div>
                <strong className="block text-2xl">24x7</strong>
                Support
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="mt-10 lg:mt-0 w-full max-w-md bg-gradient-to-br from-[#E44D26] to-[#F9A825] rounded-2xl p-6 shadow-xl">
            <h2 className="text-white text-xl font-bold mb-4">
              Book Your Ride Instantly
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex gap-4">
                <div className="w-full">
                  <Input
                    placeholder="Full Name"
                    className="text-black placeholder:text-white"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-red-100 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <Input
                    placeholder="Phone Number"
                    className="text-black placeholder:text-white"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-red-100 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="text-black placeholder:text-white"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-100 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
<div className="flex gap-4">
  <div className="w-full">
    <Controller
      control={control}
      name="date"
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value}>
          <SelectTrigger className="w-full text-white data-[placeholder]:text-white">
            <SelectValue placeholder="Select Date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="tomorrow">Tomorrow</SelectItem>
          </SelectContent>
        </Select>
      )}
    />
    {errors.date && (
      <p className="text-red-100 text-sm mt-1">{errors.date.message}</p>
    )}
  </div>

  <div className="w-full">
    <Controller
      control={control}
      name="time"
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value}>
          <SelectTrigger className="w-full text-white data-[placeholder]:text-white">
            <SelectValue placeholder="Select Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10am">10:00 AM</SelectItem>
            <SelectItem value="12pm">12:00 PM</SelectItem>
          </SelectContent>
        </Select>
      )}
    />
    {errors.time && (
      <p className="text-red-100 text-sm mt-1">{errors.time.message}</p>
    )}
  </div>
</div>

<div className="flex gap-4 w-full">
  <div className="w-full">
    <Controller
      control={control}
      name="adults"
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value}>
          <SelectTrigger className="w-full text-white data-[placeholder]:text-white">
            <SelectValue placeholder="Adults" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Adult</SelectItem>
            <SelectItem value="2">2 Adults</SelectItem>
          </SelectContent>
        </Select>
      )}
    />
    {errors.adults && (
      <p className="text-red-100 text-sm mt-1">{errors.adults.message}</p>
    )}
  </div>

  <div className="w-full">
    <Controller
      control={control}
      name="children"
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value}>
          <SelectTrigger className="w-full text-white data-[placeholder]:text-white">
            <SelectValue placeholder="Children" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">0</SelectItem>
            <SelectItem value="1">1</SelectItem>
          </SelectContent>
        </Select>
      )}
    />
    {errors.children && (
      <p className="text-red-100 text-sm mt-1">{errors.children.message}</p>
    )}
  </div>
</div>


              <div>
                <Textarea
                  placeholder="Message"
                  className="h-24 resize-none placeholder:text-white text-white"
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-100 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center pt-2">
                <Button
                  variant="outline"
                  type="reset"
                  className="bg-transparent hover:bg-transparent rounded-full w-36"
                >
                  RESET
                </Button>

                <Button
                  className="bg-white w-60 text-black rounded-full "
                  type="submit"
                >
                  LET’S BOOK NOW
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
