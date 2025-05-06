"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success?: boolean; message?: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, userType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitResult({
        success: true,
        message: "Your message has been sent successfully! We'll get back to you soon."
      });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        userType: "",
        subject: "",
        message: ""
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitResult(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-blue-950">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-blue-200">
            Have questions about Upashaya? Our team is here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Mail className="h-8 w-8 text-blue-400" />,
              title: "Email",
              content: "contact@upashaya.com",
              link: "mailto:contact@upashaya.com"
            },
            {
              icon: <Phone className="h-8 w-8 text-blue-400" />,
              title: "Phone",
              content: "+1-234-567-8900",
              link: "tel:+12345678900"
            },
            {
              icon: <MapPin className="h-8 w-8 text-blue-400" />,
              title: "Address",
              content: "123 Medical Center Drive, Healthville, MED 78901",
              link: "https://maps.google.com"
            }
          ].map((contact, index) => (
            <Card key={index} className="bg-blue-900 border-blue-800 p-6 shadow-xl flex flex-col items-center text-center transition-transform duration-300 hover:translate-y-[-5px]">
              <div className="bg-blue-800 p-4 rounded-full mb-4">
                {contact.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
              <a href={contact.link} className="text-blue-200 hover:text-blue-100 transition-colors">
                {contact.content}
              </a>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-blue-200 mb-6">
              Whether you're a healthcare provider, patient, or insurance company interested in our 
              platform, we'd love to hear from you. Fill out the form and our team will respond 
              as soon as possible.
            </p>
            
            <h3 className="text-xl font-semibold text-white mb-4">Office Hours</h3>
            <div className="grid grid-cols-2 gap-2 text-blue-200 mb-8">
              <div>Monday - Friday</div>
              <div>9:00 AM - 6:00 PM EST</div>
              <div>Saturday</div>
              <div>10:00 AM - 2:00 PM EST</div>
              <div>Sunday</div>
              <div>Closed</div>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "LinkedIn", "GitHub"].map((social, index) => (
                <Button key={index} variant="outline" className="border-blue-400 text-blue-200 hover:bg-blue-800">
                  {social}
                </Button>
              ))}
            </div>
          </div>
          
          <Card className="bg-blue-900 border-blue-800 p-6 shadow-xl">
            <h2 className="text-2xl font-semibold text-white mb-6">Contact Form</h2>
            
            {submitResult && (
              <div className={`mb-6 p-4 rounded-lg ${submitResult.success ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`}>
                {submitResult.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-blue-200 mb-2">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-blue-800 border-blue-700 text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-blue-200 mb-2">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-blue-800 border-blue-700 text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="userType" className="block text-blue-200 mb-2">I am a</label>
                <Select value={formData.userType} onValueChange={handleSelectChange}>
                  <SelectTrigger className="bg-blue-800 border-blue-700 text-white">
                    <SelectValue placeholder="Select user type" />
                  </SelectTrigger>
                  <SelectContent className="bg-blue-800 border-blue-700 text-white">
                    <SelectItem value="hospital">Hospital / Healthcare Provider</SelectItem>
                    <SelectItem value="patient">Patient</SelectItem>
                    <SelectItem value="insurance">Insurance Company</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-blue-200 mb-2">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-blue-800 border-blue-700 text-white"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-blue-200 mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-blue-800 border-blue-700 text-white min-h-[150px]"
                  placeholder="Your message here..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}