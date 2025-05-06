export default function PrivacyPolicyPage() {
  return (
    <div className="bg-blue-950 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="bg-blue-900 rounded-lg p-8 shadow-xl text-blue-200 space-y-6">
            <p>
              Last Updated: August 15, 2023
            </p>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Introduction</h2>
              <p>
                At Upashaya ("we", "our", or "us"), we take your privacy very seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our blockchain-based medical record keeping system.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Information We Collect</h2>
              <p className="mb-2">
                We collect information in several ways:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="text-white font-medium">Personal Information:</span> When you register for an account, we collect information 
                  such as your name, email address, and role (hospital, patient, or insurance company).
                </li>
                <li>
                  <span className="text-white font-medium">Medical Records:</span> As a medical record platform, we store medical information 
                  that is provided by hospitals and healthcare providers with patient consent.
                </li>
                <li>
                  <span className="text-white font-medium">Equipment Data:</span> We collect information about medical equipment used in 
                  procedures, including maintenance schedules and operational data.
                </li>
                <li>
                  <span className="text-white font-medium">Usage Data:</span> We collect information about how you interact with our platform, 
                  including log data, device information, and IP addresses.
                </li>
                <li>
                  <span className="text-white font-medium">Blockchain Data:</span> Transactions and records stored on the blockchain are 
                  immutable and may contain certain metadata about medical records.
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h2>
              <p className="mb-2">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and maintaining our service</li>
                <li>Processing and facilitating medical record access and insurance claims</li>
                <li>Ensuring secure and verified record management</li>
                <li>Improving our platform and user experience</li>
                <li>Communicating with you about your account or transactions</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Blockchain and Data Security</h2>
              <p className="mb-2">
                Upashaya utilizes blockchain technology to ensure the security and integrity of medical records. It's important to understand:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="text-white font-medium">Blockchain Immutability:</span> Information stored on the blockchain cannot be deleted 
                  or modified once confirmed. We use encryption and store sensitive data off-chain with only verification hashes on-chain.
                </li>
                <li>
                  <span className="text-white font-medium">Access Control:</span> Our platform implements role-based access control to ensure 
                  that only authorized parties can access specific medical records.
                </li>
                <li>
                  <span className="text-white font-medium">Data Encryption:</span> All sensitive data is encrypted both in transit and at rest.
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Sharing Your Information</h2>
              <p className="mb-2">
                We share information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="text-white font-medium">With Your Consent:</span> We share medical records with healthcare providers, 
                  patients, and insurance companies only with explicit consent and authorization.
                </li>
                <li>
                  <span className="text-white font-medium">Service Providers:</span> We may share information with trusted third-party 
                  service providers who assist us in operating our platform.
                </li>
                <li>
                  <span className="text-white font-medium">Legal Requirements:</span> We may disclose information if required to do so by 
                  law or in response to valid requests by public authorities.
                </li>
                <li>
                  <span className="text-white font-medium">Business Transfers:</span> If we are involved in a merger, acquisition, or sale 
                  of assets, your information may be transferred as part of that transaction.
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Your Rights and Choices</h2>
              <p className="mb-2">
                Depending on your jurisdiction, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and update your information</li>
                <li>Request deletion of your information (where applicable and where not required to be maintained by law)</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="mt-2">
                Please note that due to the nature of blockchain technology, complete deletion of information stored on the blockchain 
                may not be possible. We design our systems to minimize on-chain storage of personal information.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Data Retention</h2>
              <p>
                We retain your information for as long as your account is active or as needed to provide you services. For medical records, 
                we follow applicable laws and regulations regarding medical record retention, which typically require long-term storage.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Children's Privacy</h2>
              <p>
                Our service is not directed to children under the age of 18. We do not knowingly collect personal information from children 
                under 18. If we learn we have collected personal information of a child under 18, we will take steps to delete such information 
                from our files as soon as possible.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than the country in which you are a resident. 
                These countries may have data protection laws that are different from the laws of your country. We have taken appropriate 
                safeguards to require that your personal information will remain protected.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
                on this page and updating the "Last Updated" date at the top.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@upashaya.com<br />
                <strong>Address:</strong> 123 Medical Center Drive, Suite 456, Healthville, MED 78901
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}