"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { 
  Search, 
  Book, 
  Code, 
  Copy, 
  Check, 
  File, 
  FileText, 
  Users, 
  ShieldCheck, 
  Settings,
  ChevronRight
} from "lucide-react";

const sidebar = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "#introduction" },
      { title: "Installation", href: "#installation" },
      { title: "Quick Start", href: "#quick-start" },
      { title: "User Roles", href: "#user-roles" },
    ]
  },
  {
    title: "Core Concepts",
    links: [
      { title: "Blockchain Technology", href: "#blockchain" },
      { title: "Smart Contracts", href: "#smart-contracts" },
      { title: "Medical Records", href: "#medical-records" },
      { title: "Access Control", href: "#access-control" },
    ]
  },
  {
    title: "User Guides",
    links: [
      { title: "For Hospitals", href: "#for-hospitals" },
      { title: "For Patients", href: "#for-patients" },
      { title: "For Insurance Companies", href: "#for-insurance" },
    ]
  },
  {
    title: "Features",
    links: [
      { title: "Record Management", href: "#record-management" },
      { title: "Equipment Tracking", href: "#equipment-tracking" },
      { title: "Insurance Claims", href: "#insurance-claims" },
      { title: "Prescription Management", href: "#prescription-management" },
    ]
  },
  {
    title: "Technical Reference",
    links: [
      { title: "Contract Reference", href: "#contract-reference" },
      { title: "API Documentation", href: "#api-docs" },
      { title: "System Architecture", href: "#architecture" },
    ]
  }
];

export default function DocumentationPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const CodeBlock = ({ code, language, id }: { code: string, language: string, id: string }) => (
    <div className="relative">
      <div className="absolute top-3 right-3">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-blue-300 hover:text-white hover:bg-blue-800"
          onClick={() => copyToClipboard(code, id)}
        >
          {copied === id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <pre className="p-4 rounded-lg bg-blue-950 text-blue-200 overflow-x-auto">
        <code className="language-typescript text-sm">{code}</code>
      </pre>
    </div>
  );

  return (
    <div className="bg-blue-950">
      <div className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <aside className="lg:w-64 lg:shrink-0 mb-6 lg:mb-0 lg:mr-8">
            <div className="sticky top-24">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-4 w-4" />
                <Input
                  placeholder="Search documentation..."
                  className="pl-10 bg-blue-900 border-blue-800 text-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="space-y-6">
                {sidebar.map((section, index) => (
                  <div key={index}>
                    <h3 className="font-medium text-white mb-2">{section.title}</h3>
                    <ul className="space-y-1">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a 
                            href={link.href} 
                            className="block px-2 py-1 text-blue-300 hover:text-white hover:bg-blue-900 rounded"
                          >
                            {link.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 rounded-lg bg-blue-900 p-4 border border-blue-800">
                <h3 className="font-medium text-white mb-2">Need Help?</h3>
                <p className="text-blue-200 text-sm mb-3">
                  If you can't find what you're looking for, reach out to our support team.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </aside>
          
          {/* Main content */}
          <main className="flex-1 bg-blue-900 rounded-lg p-8 shadow-xl text-blue-200">
            <div className="space-y-12">
              {/* Introduction */}
              <section id="introduction">
                <div className="flex items-center mb-4">
                  <Book className="h-6 w-6 text-blue-400 mr-2" />
                  <h2 className="text-2xl font-bold text-white">Introduction to Upashaya</h2>
                </div>
                <p className="mb-4">
                  Upashaya is a blockchain-based medical record keeping system designed to securely connect hospitals, 
                  patients, and insurance companies. Built on Ethereum smart contracts, Upashaya ensures 
                  the integrity, security, and appropriate access to sensitive medical information.
                </p>
                <p>
                  This documentation provides comprehensive guidance on using Upashaya, from basic concepts 
                  to detailed technical specifications.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  {[
                    {
                      icon: <FileText className="h-8 w-8 text-blue-400" />,
                      title: "Records Management",
                      description: "Secure storage and controlled access to medical records",
                    },
                    {
                      icon: <Users className="h-8 w-8 text-blue-400" />,
                      title: "Multi-Role System",
                      description: "Tailored interfaces for hospitals, patients, and insurers",
                    },
                    {
                      icon: <ShieldCheck className="h-8 w-8 text-blue-400" />,
                      title: "Blockchain Security",
                      description: "Immutable record keeping with cryptographic verification",
                    }
                  ].map((feature, index) => (
                    <div key={index} className="bg-blue-800 p-4 rounded-lg">
                      <div className="mb-2">{feature.icon}</div>
                      <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                      <p className="text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Installation */}
              <section id="installation">
                <div className="flex items-center mb-4">
                  <Settings className="h-6 w-6 text-blue-400 mr-2" />
                  <h2 className="text-2xl font-bold text-white">Installation</h2>
                </div>
                <p className="mb-4">
                  To start using Upashaya, you'll need to set up your environment with the following requirements:
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-white mb-2">Requirements</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>MetaMask or another Ethereum wallet</li>
                    <li>Web3-compatible browser (Chrome, Firefox, Brave)</li>
                    <li>Access to the Ethereum network (Mainnet or supported testnet)</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-white mb-2">Installation Steps</h3>
                  <ol className="list-decimal pl-6 space-y-4">
                    <li>
                      <p className="font-medium text-white">Install an Ethereum wallet</p>
                      <p className="text-sm">
                        Download and install MetaMask from <a href="https://metamask.io" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://metamask.io</a> or use another compatible wallet.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium text-white">Create a new account</p>
                      <p className="text-sm">
                        Visit the Upashaya registration page and create an account as a hospital, patient, or insurance company.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium text-white">Connect your wallet</p>
                      <p className="text-sm">
                        Connect your Ethereum wallet to the Upashaya platform to enable blockchain interactions.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium text-white">Complete verification</p>
                      <p className="text-sm">
                        Depending on your user type, complete the required verification steps to activate your account.
                      </p>
                    </li>
                  </ol>
                </div>
                
                <h3 className="text-lg font-medium text-white mb-2">For Developers</h3>
                <p className="mb-4">
                  If you're integrating with our platform as a developer, you'll need to set up the following:
                </p>
                
                <CodeBlock 
                  language="bash" 
                  id="installation-code"
                  code={`# Install the Upashaya SDK
npm install @upashaya/sdk

# Initialize the connection
import { UpashayaClient } from '@upashaya/sdk';

const upashaya = new UpashayaClient({
  provider: window.ethereum,
  contractAddress: '0x721F89D5eB1ae8A0988c4c7df2a79BE8f114a0b7'
});`} 
                />
              </section>
              
              {/* Quick Start */}
              <section id="quick-start">
                <div className="flex items-center mb-4">
                  <ChevronRight className="h-6 w-6 text-blue-400 mr-2" />
                  <h2 className="text-2xl font-bold text-white">Quick Start</h2>
                </div>
                
                <p className="mb-4">
                  After installing Upashaya, follow these steps to quickly get started with the platform:
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-white mb-2">For Hospitals</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Log in to your hospital account</li>
                    <li>Navigate to the "Records" section</li>
                    <li>Click "Create New Record" to add a patient record</li>
                    <li>Complete the required information and submit</li>
                    <li>The record will be securely stored on the blockchain</li>
                  </ol>
                  
                  <div className="mt-4">
                    <CodeBlock 
                      language="typescript" 
                      id="hospital-quick-start"
                      code={`// Example code for creating a medical record
async function createMedicalRecord() {
  const patientAddress = "0x123..."; // Patient's Ethereum address
  const recordData = {
    patientName: "John Doe",
    diagnosis: "Common Cold",
    treatmentPlan: "Rest and fluids",
    date: new Date().toISOString()
  };

  // Hash and store the record data securely
  const recordHash = await upashaya.hashRecord(recordData);
  
  // Create the record on the blockchain
  const tx = await upashaya.contracts.MedicalRecords.createMedicalRecord(
    patientAddress,
    recordHash,
    "Consultation"
  );

  return await tx.wait();
}`} 
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-white mb-2">For Patients</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Log in to your patient account</li>
                    <li>View your medical records in the "My Records" section</li>
                    <li>Grant access to an insurance company by clicking "Manage Access"</li>
                    <li>Select the insurance company and the specific records to share</li>
                    <li>Confirm the transaction using your Ethereum wallet</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">For Insurance Companies</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Log in to your insurance company account</li>
                    <li>View records shared with you in the "Shared Records" section</li>
                    <li>Process claims by navigating to the "Claims" section</li>
                    <li>Review the claim details and verify the medical records</li>
                    <li>Approve or reject the claim through the blockchain</li>
                  </ol>
                </div>
              </section>
              
              {/* Smart Contracts */}
              <section id="smart-contracts">
                <div className="flex items-center mb-4">
                  <Code className="h-6 w-6 text-blue-400 mr-2" />
                  <h2 className="text-2xl font-bold text-white">Smart Contracts</h2>
                </div>
                
                <p className="mb-4">
                  Upashaya is built on Ethereum smart contracts that handle the secure management of medical records, 
                  access control, and insurance claims. Understanding these contracts is essential for developers integrating 
                  with the platform.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-white mb-2">Contract Architecture</h3>
                  <p className="mb-4">
                    The main smart contract for Upashaya is the MedicalRecords contract, which handles:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>User registration and role management</li>
                    <li>Medical record creation and verification</li>
                    <li>Access control for records</li>
                    <li>Equipment tracking for medical procedures</li>
                    <li>Insurance claim processing</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-white mb-2">Contract Address</h3>
                  <div className="bg-blue-800 p-3 rounded-lg flex items-center">
                    <code className="text-blue-200 text-sm break-all flex-1">0x721F89D5eB1ae8A0988c4c7df2a79BE8f114a0b7</code>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-blue-300 hover:text-white hover:bg-blue-700 ml-2 flex-shrink-0"
                      onClick={() => copyToClipboard("0x721F89D5eB1ae8A0988c4c7df2a79BE8f114a0b7", "contract-address")}
                    >
                      {copied === "contract-address" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Example Contract Interaction</h3>
                  <CodeBlock 
                    language="typescript" 
                    id="contract-interaction"
                    code={`// Example of interacting with the MedicalRecords contract
const { ethers } = require("ethers");
const MedicalRecordsABI = require("./MedicalRecordsABI.json");

// Connect to the contract
async function connectToContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractAddress = "0x721F89D5eB1ae8A0988c4c7df2a79BE8f114a0b7";
  const contract = new ethers.Contract(contractAddress, MedicalRecordsABI, signer);
  return contract;
}

// Register as a patient
async function registerPatient(name, email) {
  const contract = await connectToContract();
  const tx = await contract.registerPatient(name, email);
  return await tx.wait();
}

// Get record details
async function getRecordDetails(recordId) {
  const contract = await connectToContract();
  const record = await contract.getRecordDetails(recordId);
  return {
    id: record.id.toString(),
    patientId: record.patientId,
    hospitalId: record.hospitalId,
    recordHash: record.recordHash,
    recordType: record.recordType,
    timestamp: new Date(record.timestamp.toNumber() * 1000),
    isVerified: record.isVerified,
    allowedInsurers: record.allowedInsurers
  };
}`} 
                  />
                </div>
              </section>
              
              {/* Medical Records */}
              <section id="medical-records" className="mb-8">
                <div className="flex items-center mb-4">
                  <File className="h-6 w-6 text-blue-400 mr-2" />
                  <h2 className="text-2xl font-bold text-white">Medical Records</h2>
                </div>
                
                <p className="mb-4">
                  Upashaya's core functionality revolves around secure medical record management. This section 
                  explains how medical records work within the platform.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-white mb-2">Record Structure</h3>
                  <p className="mb-2">Each medical record contains the following information:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Unique record ID</li>
                    <li>Patient's Ethereum address</li>
                    <li>Hospital's Ethereum address</li>
                    <li>Record hash (IPFS hash of the encrypted record data)</li>
                    <li>Record type (e.g., consultation, surgery, test result)</li>
                    <li>Timestamp</li>
                    <li>Verification status</li>
                    <li>List of insurance companies with access</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-white mb-2">Record Security</h3>
                  <p className="mb-4">
                    Upashaya employs a hybrid on-chain/off-chain approach to ensure data security and privacy:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="text-white font-medium">Off-chain storage:</span> The actual medical data is encrypted and stored off-chain using IPFS (InterPlanetary File System).
                    </li>
                    <li>
                      <span className="text-white font-medium">On-chain verification:</span> Only the hash of the record is stored on the blockchain, serving as a tamper-proof verification of the record's integrity.
                    </li>
                    <li>
                      <span className="text-white font-medium">Access control:</span> The blockchain manages who has permission to access each record.
                    </li>
                    <li>
                      <span className="text-white font-medium">End-to-end encryption:</span> Records are encrypted using the recipient's public key to ensure only authorized parties can decrypt the information.
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Working with Records</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-800 p-4 rounded-lg">
                      <h4 className="font-medium text-white mb-2">Creating Records</h4>
                      <p className="text-sm mb-2">
                        Hospitals can create new medical records by:
                      </p>
                      <ol className="list-decimal pl-4 text-sm space-y-1">
                        <li>Collecting the patient's medical information</li>
                        <li>Encrypting the data with the patient's public key</li>
                        <li>Uploading to IPFS to get a unique hash</li>
                        <li>Storing the hash on the blockchain with patient details</li>
                        <li>Setting appropriate access permissions</li>
                      </ol>
                    </div>
                    
                    <div className="bg-blue-800 p-4 rounded-lg">
                      <h4 className="font-medium text-white mb-2">Accessing Records</h4>
                      <p className="text-sm mb-2">
                        Authorized users can access records by:
                      </p>
                      <ol className="list-decimal pl-4 text-sm space-y-1">
                        <li>Querying the blockchain for records they have access to</li>
                        <li>Retrieving the IPFS hash for the desired record</li>
                        <li>Fetching the encrypted data from IPFS</li>
                        <li>Decrypting the data using their private key</li>
                        <li>Verifying the record's integrity against the on-chain hash</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Navigation footer */}
              <div className="border-t border-blue-800 pt-8 mt-12">
                <div className="flex flex-col sm:flex-row justify-between">
                  <div className="mb-4 sm:mb-0">
                    <span className="text-blue-400 text-sm">Previous</span>
                    <a href="#introduction" className="block text-white font-medium hover:underline">Introduction</a>
                  </div>
                  <div className="text-right">
                    <span className="text-blue-400 text-sm">Next</span>
                    <a href="#user-roles" className="block text-white font-medium hover:underline">User Roles</a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}