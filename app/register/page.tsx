"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Hospital, User, Building2 } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const [userType, setUserType] = useState("hospital");
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setRegisterData(prev => ({ 
      ...prev, 
      [name]: type === "checkbox" ? checked : value 
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setRegisterData(prev => ({ ...prev, agreeTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration attempted with:", { userType, ...registerData });
    // Here you would connect to the Ethereum wallet and create an account
  };

  const passwordsMatch = registerData.password === registerData.confirmPassword;
  const passwordsValid = registerData.password.length >= 8;

  return (
    <div className="bg-blue-950 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Join Upashaya</h1>
          <p className="text-blue-200 mt-2">Create an account to get started</p>
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
                    <label htmlFor={`${type}-name`} className="block text-sm font-medium text-blue-200">
                      {type === 'hospital' ? 'Hospital Name' : type === 'patient' ? 'Full Name' : 'Company Name'}
                    </label>
                    <Input
                      id={`${type}-name`}
                      name="name"
                      value={registerData.name}
                      onChange={handleChange}
                      required
                      className="bg-blue-800 border-blue-700 text-white"
                      placeholder={`Enter ${type === 'hospital' ? 'hospital' : type === 'patient' ? 'your' : 'company'} name`}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor={`${type}-email`} className="block text-sm font-medium text-blue-200">
                      Email Address
                    </label>
                    <Input
                      id={`${type}-email`}
                      name="email"
                      type="email"
                      value={registerData.email}
                      onChange={handleChange}
                      required
                      className="bg-blue-800 border-blue-700 text-white"
                      placeholder={`${type === 'hospital' ? 'hospital' : type === 'patient' ? 'patient' : 'company'}@example.com`}
                    />
                  </div>

                  {userType === "hospital" && (
                    <div className="space-y-2">
                      <label htmlFor="hospitalId" className="block text-sm font-medium text-blue-200">
                        Hospital Registration ID
                      </label>
                      <Input
                        id="hospitalId"
                        name="hospitalId"
                        required
                        className="bg-blue-800 border-blue-700 text-white"
                        placeholder="Official hospital registration ID"
                      />
                    </div>
                  )}

                  {userType === "insurance" && (
                    <div className="space-y-2">
                      <label htmlFor="licenseId" className="block text-sm font-medium text-blue-200">
                        Insurance License Number
                      </label>
                      <Input
                        id="licenseId"
                        name="licenseId"
                        required
                        className="bg-blue-800 border-blue-700 text-white"
                        placeholder="Insurance license number"
                      />
                    </div>
                  )}

                  {userType === "patient" && (
                    <div className="space-y-2">
                      <label htmlFor="patientId" className="block text-sm font-medium text-blue-200">
                        Patient ID (if available)
                      </label>
                      <Input
                        id="patientId"
                        name="patientId"
                        className="bg-blue-800 border-blue-700 text-white"
                        placeholder="Patient ID from your hospital (optional)"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <label htmlFor={`${type}-password`} className="block text-sm font-medium text-blue-200">
                      Password
                    </label>
                    <Input
                      id={`${type}-password`}
                      name="password"
                      type="password"
                      value={registerData.password}
                      onChange={handleChange}
                      required
                      className={`bg-blue-800 border-blue-700 text-white ${registerData.password && !passwordsValid ? 'border-red-500' : ''}`}
                      placeholder="••••••••"
                    />
                    {registerData.password && !passwordsValid && (
                      <p className="text-xs text-red-400 mt-1">Password must be at least 8 characters</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor={`${type}-confirm-password`} className="block text-sm font-medium text-blue-200">
                      Confirm Password
                    </label>
                    <Input
                      id={`${type}-confirm-password`}
                      name="confirmPassword"
                      type="password"
                      value={registerData.confirmPassword}
                      onChange={handleChange}
                      required
                      className={`bg-blue-800 border-blue-700 text-white ${registerData.confirmPassword && !passwordsMatch ? 'border-red-500' : ''}`}
                      placeholder="••••••••"
                    />
                    {registerData.confirmPassword && !passwordsMatch && (
                      <p className="text-xs text-red-400 mt-1">Passwords do not match</p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox 
                      id={`${type}-terms`} 
                      checked={registerData.agreeTerms}
                      onCheckedChange={handleCheckboxChange}
                      required
                    />
                    <label
                      htmlFor={`${type}-terms`}
                      className="text-sm font-medium leading-none text-blue-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the <Link href="/terms" className="text-blue-400 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>
                    </label>
                  </div>

                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      disabled={!passwordsMatch || !passwordsValid || !registerData.agreeTerms}
                    >
                      Create Account
                    </Button>
                  </div>

                  <div className="text-center text-sm text-blue-300 mt-2">
                    <span>Already have an account? </span>
                    <Link href="/login" className="text-blue-400 hover:underline">
                      Sign In
                    </Link>
                  </div>
                </form>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>
    </div>
  );
}