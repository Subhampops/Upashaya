export default function TermsOfServicePage() {
  return (
    <div className="bg-blue-950 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
          
          <div className="bg-blue-900 rounded-lg p-8 shadow-xl text-blue-200 space-y-6">
            <p>
              Last Updated: August 15, 2023
            </p>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Upashaya's blockchain medical record keeping system ("the Service"), you agree to be bound 
                by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the Service.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
              <p>
                Upashaya provides a blockchain-based platform for secure medical record management, connecting hospitals, patients, 
                and insurance companies. The Service includes functionality for storing medical records, tracking medical equipment, 
                processing insurance claims, and managing treatment information.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">3. User Accounts</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You must register for an account to use the Service, providing accurate and complete information.
                </li>
                <li>
                  You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.
                </li>
                <li>
                  You must immediately notify us of any unauthorized use of your account or any other breach of security.
                </li>
                <li>
                  We reserve the right to terminate accounts or suspend access at our discretion.
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">4. User Types and Roles</h2>
              <p className="mb-2">
                The Service supports three primary user types, each with specific rights and responsibilities:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="text-white font-medium">Hospitals/Healthcare Providers:</span> Authorized to create and manage medical 
                  records, document treatments, track equipment, and verify records.
                </li>
                <li>
                  <span className="text-white font-medium">Patients:</span> Can access their own medical records and grant/revoke access 
                  to insurance companies. Patients control who has access to their information.
                </li>
                <li>
                  <span className="text-white font-medium">Insurance Companies:</span> Can access patient records with explicit permission 
                  and process insurance claims based on verified records.
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">5. Smart Contract Usage</h2>
              <p className="mb-2">
                Our Service utilizes Ethereum-based smart contracts to process and store information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  By using the Service, you understand that transactions on the blockchain are immutable and cannot be reversed once confirmed.
                </li>
                <li>
                  You acknowledge that smart contract interactions may require payment of Ethereum gas fees.
                </li>
                <li>
                  We make no guarantees regarding transaction processing times on the Ethereum network.
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">6. User Conduct</h2>
              <p className="mb-2">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any illegal purpose or in violation of any laws</li>
                <li>Upload or transmit viruses or malicious code</li>
                <li>Attempt to gain unauthorized access to other user accounts or system components</li>
                <li>Interfere with or disrupt the integrity or performance of the Service</li>
                <li>Impersonate another person or entity</li>
                <li>Upload false, inaccurate, or misleading information</li>
                <li>Attempt to decompile, reverse engineer, or extract the source code of the Service</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">7. Medical Records and Data</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Healthcare providers are responsible for the accuracy of medical records they upload.
                </li>
                <li>
                  Patients have rights to access their medical records in accordance with applicable laws.
                </li>
                <li>
                  All users must respect the confidentiality and privacy of medical information.
                </li>
                <li>
                  The Service is designed to comply with relevant healthcare regulations, but users must ensure their own compliance with 
                  jurisdiction-specific requirements.
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">8. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by Upashaya and are protected by international 
                copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, or 
                create derivative works based on our Service without explicit permission.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Upashaya shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your access to or use of, or inability to access or use, the Service. This includes damages 
                for loss of profits, data, goodwill, or other intangible losses.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Upashaya, its officers, directors, employees, and agents, from and against any claims, 
                liabilities, damages, losses, and expenses, including without limitation reasonable attorney's fees, arising out of or in any 
                way connected with your access to or use of the Service or your violation of these Terms.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">11. Modifications to the Service</h2>
              <p>
                We reserve the right to modify or discontinue, temporarily or permanently, the Service or any features or portions thereof 
                without prior notice. We will make reasonable efforts to provide advance notice of significant changes.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict 
                of law provisions. Any disputes relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the 
                courts of [Jurisdiction].
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the new Terms 
                on this page and updating the "Last Updated" date. Your continued use of the Service after any such changes constitutes your 
                acceptance of the new Terms.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">14. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> legal@upashaya.com<br />
                <strong>Address:</strong> 123 Medical Center Drive, Suite 456, Healthville, MED 78901
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}