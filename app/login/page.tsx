"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Hospital, User, Building2 } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [userType, setUserType] = useState("hospital");
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", { userType, ...loginData });
    // Here you would connect to the Ethereum wallet and verify credentials
  };

  return (
    <div className="bg-blue-950 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back to Upashaya</h1>
          <p className="text-blue-200 mt-2">Sign in to access your secure medical records</p>
        </div>

        <Card className="bg-blue-900 border-blue-800 shadow-2xl overflow-hidden">
          <Tabs defaultValue="hospital" className="w-full" onValueChange={setUserType}>
            <TabsList className="grid grid-cols-3 bg-blue-800 rounded-none p-0">
              <TabsTrigger 
                value="hospital" 
                className="data-[state=active]:bg-blue-700 rounded-none py-3 text-blue-200 data-[state=active]:text-white"
              >
                <Hospital className="mr-2 h-4 w-4" />
                Hospital
              </TabsTrigger>
              <TabsTrigger 
                value="patient" 
                className="data-[state=active]:bg-blue-700 rounded-none py-3 text-blue-200 data-[state=active]:text-white"
              >
                <User className="mr-2 h-4 w-4" />
                Patient
              </TabsTrigger>
              <TabsTrigger 
                value="insurance" 
                className="data-[state=active]:bg-blue-700 rounded-none py-3 text-blue-200 data-[state=active]:text-white"
              >
                <Building2 className="mr-2 h-4 w-4" />
                Insurance
              </TabsTrigger>
            </TabsList>

            {["hospital", "patient", "insurance"].map((type) => (
              <TabsContent key={type} value={type} className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-blue-200">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={loginData.email}
                      onChange={handleChange}
                      required
                      className="bg-blue-800 border-blue-700 text-white"
                      placeholder={`${type === 'hospital' ? 'hospital' : type === 'patient' ? 'patient' : 'insurance'}@example.com`}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label htmlFor="password" className="block text-sm font-medium text-blue-200">
                        Password
                      </label>
                      <Link href="/forgot-password" className="text-sm text-blue-400 hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={loginData.password}
                      onChange={handleChange}
                      required
                      className="bg-blue-800 border-blue-700 text-white"
                      placeholder="••••••••"
                    />
                  </div>

                  {userType === "hospital" && (
                    <div className="space-y-2">
                      <label htmlFor="hospitalId" className="block text-sm font-medium text-blue-200">
                        Hospital ID
                      </label>
                      <Input
                        id="hospitalId"
                        name="hospitalId"
                        required
                        className="bg-blue-800 border-blue-700 text-white"
                        placeholder="Hospital registration ID"
                      />
                    </div>
                  )}

                  {userType === "insurance" && (
                    <div className="space-y-2">
                      <label htmlFor="companyId" className="block text-sm font-medium text-blue-200">
                        Company ID
                      </label>
                      <Input
                        id="companyId"
                        name="companyId"
                        required
                        className="bg-blue-800 border-blue-700 text-white"
                        placeholder="Insurance company ID"
                      />
                    </div>
                  )}

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Sign In
                    </Button>
                  </div>

                  <div className="text-center text-sm text-blue-300 mt-2">
                    <span>Don&apos;t have an account? </span>
                    <Link href="/register" className="text-blue-400 hover:underline">
                      Register
                    </Link>
                  </div>
                </form>
              </TabsContent>
            ))}
          </Tabs>
        </Card>

        <div className="mt-8 text-center text-sm text-blue-300">
          <p>By signing in, you agree to our</p>
          <div className="flex justify-center space-x-2 mt-1">
            <Link href="/terms" className="text-blue-400 hover:underline">
              Terms of Service
            </Link>
            <span>and</span>
            <Link href="/privacy" className="text-blue-400 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}