"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/config/api";
import { toast } from "react-toastify";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
 const form = useForm<LoginFormValues>({
  resolver: zodResolver(loginSchema),
  mode: "onTouched",
  defaultValues: {
    email: "",      
    password: "", 
  },
});

const router = useRouter();
  const onSubmit = async (data: LoginFormValues) => {
    try {
      console.log("Login Data: ", data);
      const response = await login(data);
        
      if (response?.status === 200) {
        toast.success(response.data.message);
         router.push("/");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-20 px-4 sm:px-6 md:px-8">
      <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-zinc-800 dark:text-white">Login</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email">Email</Label>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="password">Password</Label>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
