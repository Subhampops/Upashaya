import { Card } from "@/components/ui/card";
import { Shield, Users, FileBadge, Calendar, FileCheck, Bell, Settings, Database, BarChart } from "lucide-react";
import Image from "next/image";

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: <Shield className="h-10 w-10 text-blue-400" />,
      title: "Secure Medical Records",
      description: "Store all medical records securely on the blockchain with end-to-end encryption and immutable record keeping."
    },
    {
      icon: <Users className="h-10 w-10 text-blue-400" />,
      title: "Multi-Role Access",
      description: "Tailored interfaces and permissions for hospitals, patients, and insurance companies with role-based access control."
    },
    {
      icon: <FileBadge className="h-10 w-10 text-blue-400" />,
      title: "Equipment Tracking",
      description: "Track medical equipment used in operations and treatments with detailed records and maintenance history."
    },
    {
      icon: <Calendar className="h-10 w-10 text-blue-400" />,
      title: "Treatment Management",
      description: "Comprehensive treatment plans with prescription uploads, dosage tracking, and medication management."
    },
    {
      icon: <FileCheck className="h-10 w-10 text-blue-400" />,
      title: "Smart Insurance Claims",
      description: "Automated insurance claim processing through Ethereum smart contracts with transparent verification."
    },
    {
      icon: <Bell className="h-10 w-10 text-blue-400" />,
      title: "Real-time Notifications",
      description: "Instant notifications for record updates, insurance claim status changes, and prescription renewals."
    }
  ];

  const additionalFeatures = [
    {
      icon: <Settings className="h-6 w-6 text-blue-400" />,
      title: "Customizable Settings",
      description: "Personalize your experience with customizable dashboards and notification preferences."
    },
    {
      icon: <Database className="h-6 w-6 text-blue-400" />,
      title: "Data Analytics",
      description: "Access insights and reports on healthcare patterns, treatment effectiveness, and more."
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-400" />,
      title: "Audit Trail",
      description: "Complete transparency with detailed audit trails for all record modifications and access."
    }
  ];

  return (
    <div className="bg-blue-950">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Features</h1>
          <p className="text-xl text-blue-200">
            Discover how Upashaya is revolutionizing medical record management with blockchain technology.
          </p>
        </div>

        {/* Main Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="bg-blue-900 border-blue-800 p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-blue-200">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Platform Showcase */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Platform</h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              A unified platform connecting all healthcare stakeholders through secure blockchain technology.
            </p>
          </div>

          <div className="bg-blue-900 rounded-xl overflow-hidden shadow-2xl">
            <div className="relative h-[500px] w-full">
              <Image 
                src="https://images.pexels.com/photos/5745781/pexels-photo-5745781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Upashaya platform interface" 
                fill 
                style={{objectFit: "cover"}}
              />
            </div>
          </div>
        </div>

        {/* Role-Specific Features */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Role-Specific Features</h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Tailored functionality for each stakeholder in the healthcare ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: "For Hospitals",
                features: [
                  "Patient record management",
                  "Equipment inventory tracking",
                  "Treatment documentation",
                  "Prescription management",
                  "Staff access controls"
                ]
              },
              {
                role: "For Patients",
                features: [
                  "Medical history access",
                  "Treatment tracking",
                  "Prescription reminders",
                  "Insurance claim monitoring",
                  "Appointment scheduling"
                ]
              },
              {
                role: "For Insurance Companies",
                features: [
                  "Verified claim processing",
                  "Smart contract automation",
                  "Fraud detection",
                  "Policy management",
                  "Claim analytics"
                ]
              }
            ].map((roleFeatures, index) => (
              <Card key={index} className="bg-blue-900 border-blue-800 p-6 shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{roleFeatures.role}</h3>
                <ul className="space-y-2">
                  {roleFeatures.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-blue-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="mb-24 bg-blue-900 rounded-xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Additional Features</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-blue-800 rounded-lg p-4 flex items-start">
                <div className="mr-3 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-blue-200 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blockchain Technology */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Powered by Ethereum</h2>
              <p className="text-blue-200 mb-4">
                Upashaya leverages the power of Ethereum blockchain technology to ensure the highest 
                levels of security, transparency, and trust in medical record management.
              </p>
              <p className="text-blue-200 mb-4">
                Our smart contracts automate insurance claim processing, record verification, and 
                access control, eliminating the need for intermediaries and reducing processing time.
              </p>
              <p className="text-blue-200">
                With decentralized storage, your medical records are protected from unauthorized 
                access and tampering, giving you complete peace of mind about your sensitive health information.
              </p>
            </div>
            <div className="relative h-[350px] rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Blockchain technology" 
                fill 
                style={{objectFit: "cover"}}
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                question: "How secure is the platform?",
                answer: "Upashaya uses advanced encryption and blockchain technology to ensure the highest level of security for all medical records. Our platform is regularly audited for security vulnerabilities."
              },
              {
                question: "Who can access my medical records?",
                answer: "Only authorized parties with explicit permission can access your medical records. You have complete control over who can view your information."
              },
              {
                question: "How are insurance claims processed?",
                answer: "Insurance claims are processed automatically through smart contracts once all required documentation is verified, reducing processing time from weeks to minutes."
              },
              {
                question: "Can I access my records offline?",
                answer: "Yes, you can download and export your medical records for offline access while maintaining the blockchain verification."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-blue-900 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-blue-200">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}