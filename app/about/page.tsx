import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-blue-950">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">About Upashaya</h1>
          <p className="text-xl text-blue-200">
            Revolutionizing healthcare record management through blockchain technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-blue-200 mb-4">
              At Upashaya, we're committed to transforming healthcare record management through the 
              power of blockchain technology. Our mission is to create a transparent, secure, and 
              efficient ecosystem where hospitals, patients, and insurance companies can seamlessly 
              interact with complete trust in the integrity of medical records.
            </p>
            <p className="text-blue-200 mb-4">
              We believe that by decentralizing medical record storage and leveraging smart contracts, 
              we can eliminate administrative inefficiencies, reduce fraud, and ultimately improve 
              patient outcomes.
            </p>
            <p className="text-blue-200">
              Our platform ensures that patients have control over their medical data while allowing 
              healthcare providers and insurance companies to access verified information when needed, 
              creating a win-win situation for all stakeholders.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Medical professionals" 
              fill 
              style={{objectFit: "cover"}}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Blockchain technology visualization" 
              fill 
              style={{objectFit: "cover"}}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-blue-200 mb-4">
              Upashaya was founded in 2023 by a team of healthcare professionals, blockchain experts, 
              and technology innovators who recognized the significant challenges in medical record 
              management and insurance claim processing.
            </p>
            <p className="text-blue-200 mb-4">
              After witnessing countless cases of records being lost, claims being delayed, and 
              patients struggling to access their own medical history, our founders decided there 
              had to be a better way.
            </p>
            <p className="text-blue-200">
              By combining their expertise in healthcare and blockchain technology, they created 
              Upashaya – a revolutionary platform that addresses these critical issues and sets 
              a new standard for healthcare data management.
            </p>
          </div>
        </div>

        <div className="bg-blue-900 rounded-xl p-8 md:p-12 shadow-xl mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Security",
                description: "We prioritize the security and privacy of medical data above all else, implementing the most advanced encryption and blockchain technologies."
              },
              {
                title: "Transparency",
                description: "We believe in complete transparency in healthcare processes, from record creation to insurance claims, ensuring all stakeholders have visibility."
              },
              {
                title: "Innovation",
                description: "We continuously push the boundaries of what's possible in healthcare technology, always seeking new ways to improve our platform."
              }
            ].map((value, index) => (
              <div key={index} className="bg-blue-800 rounded-lg p-6 transition-transform duration-300 hover:translate-y-[-5px]">
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-blue-200">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Team</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-12">
            Upashaya is powered by a diverse team of experts dedicated to transforming healthcare through blockchain technology.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-blue-900 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:translate-y-[-5px]">
                <div className="w-32 h-32 bg-blue-800 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-white">Team Member {index + 1}</h3>
                <p className="text-blue-300 text-sm">Position Title</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Are you interested in being part of the healthcare revolution? Explore our platform,
            partner with us, or join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact Us
              </Button>
            </Link>
            <Link href="/careers">
              <Button variant="outline" className="border-blue-400 text-blue-200 hover:bg-blue-800">
                View Careers <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}