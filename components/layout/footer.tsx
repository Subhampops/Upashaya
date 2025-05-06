import Link from "next/link";
import { FacebookIcon, TwitterIcon, LinkedinIcon, GithubIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 border-t border-blue-900">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Upashaya</h3>
            <p className="text-blue-300 mb-4">
              Secure blockchain medical record keeping system connecting hospitals, patients, and insurance companies.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-300 hover:text-white">
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white">
                <LinkedinIcon className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Features", href: "/features" },
                { name: "Contact", href: "/contact" },
                { name: "Careers", href: "/careers" },
                { name: "Partners", href: "/partners" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-blue-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { name: "Documentation", href: "/docs" },
                { name: "API Reference", href: "/api-reference" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-blue-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic text-blue-300 space-y-2">
              <p>123 Medical Center Drive</p>
              <p>Suite 456</p>
              <p>Healthville, MED 78901</p>
              <p className="mt-4">
                <a href="mailto:contact@upashaya.com" className="hover:text-white">
                  contact@upashaya.com
                </a>
              </p>
              <p>
                <a href="tel:+1-234-567-8900" className="hover:text-white">
                  +1-234-567-8900
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-blue-900 mt-8 pt-8 text-center text-blue-400 text-sm">
          <p>© {new Date().getFullYear()} Upashaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}