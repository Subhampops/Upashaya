import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, FileText, Stethoscope } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-blue-950 to-blue-900 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                Secure Medical Records on the Blockchain
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Upashaya connects hospitals, patients, and insurance companies through secure, 
                immutable blockchain technology for transparent healthcare management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="border-blue-400 text-blue-200 hover:bg-blue-800">
                    Learn More
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button variant="outline" className="border-green-400 text-green-200 hover:bg-green-800">
                    Try Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl bg-blue-800 p-2">
              <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                <Image 
                  src="https://images.pexels.com/photos/3846005/pexels-photo-3846005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Medical technology" 
                  fill 
                  style={{objectFit: "cover"}}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-950 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Key Features</h2>
            <p className="mt-4 text-lg text-blue-200">How Upashaya is revolutionizing healthcare management</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-12 w-12 text-blue-400" />,
                title: "Secure & Immutable",
                description: "All medical records are secured with blockchain technology ensuring data integrity and preventing unauthorized modifications."
              },
              {
                icon: <FileText className="h-12 w-12 text-blue-400" />,
                title: "Smart Contracts",
                description: "Automated processing of insurance claims with transparent verification and approval processes."
              },
              {
                icon: <Stethoscope className="h-12 w-12 text-blue-400" />,
                title: "Equipment Tracking",
                description: "Comprehensive tracking of medical equipment for operations and treatments with detailed records."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-blue-900 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:translate-y-[-5px]">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Partners */}
      <section className="bg-blue-900 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Trusted By</h2>
            <p className="mt-4 text-lg text-blue-200">Leading healthcare providers and insurance companies</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg h-24 w-full flex items-center justify-center">
                <div className="text-blue-200 font-semibold">Partner Logo {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your medical record management?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Join Upashaya today and experience the future of healthcare data management with blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Register Now
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="border-green-400 text-green-200 hover:bg-green-800">
                Try Demo Access
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}