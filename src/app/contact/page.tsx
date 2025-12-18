"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Sample2 from "@/components/sample2";
import { Phone, Mail, MapPin, Calendar, Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    weddingDate: "",
    package: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsError(false);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        console.log("✅ Email sent successfully!");
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          weddingDate: "",
          package: "",
          message: "",
        });

        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        console.error("❌ Error sending message:", await res.text());
        setIsError(true);
      }
    } catch (error) {
      console.error("⚠️ Error submitting form:", error);
      setIsError(true);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 94966099677",
      subtext: "Mon–Fri from 9am to 6pm"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@ownmedia.com",
      subtext: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Krishna Auditorium Building",
      details: "Opposite Chakkumarassery Temple",
      subtext: "Muravanthiruth, North Paravoor"
    }
  ];

  return (
    <div className="mt-8">
      <div>
        <Sample2 />
      </div>

      <section id="contact" className="relative py-24 px-4 md:px-8 bg-[#F5F3EF] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C1A35F]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#C1A35F]/3 rounded-full blur-3xl"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23232122' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header with enhanced design */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-[#C1A35F] mb-6 border border-[#C1A35F]/20 shadow-sm">
              <div className="w-2 h-2 bg-[#C1A35F] rounded-full"></div>
              Let&apos;s Connect
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#232122] mb-6">
              Get In <span className="text-[#C1A35F]">Touch</span>
            </h2>
            
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#C1A35F] to-transparent mx-auto mb-8"></div>
            
            <p className="text-xl text-[#333333] max-w-2xl mx-auto leading-relaxed">
              Ready to capture your special day? Let&apos;s discuss how we can tell your unique 
              love story through our lens.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information - Enhanced Design */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="mb-10">
                  <h3 className="text-3xl font-serif font-bold text-[#232122] mb-8 relative inline-block">
                    Contact Information
                    <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#C1A35F] rounded-full"></div>
                  </h3>
                </div>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="p-4 bg-[#C1A35F]/10 rounded-xl group-hover:bg-[#C1A35F]/20 transition-colors">
                        <div className="text-[#C1A35F]">
                          {info.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-bold text-[#232122] text-lg mb-2">
                          {info.title}
                        </h4>
                        <p className="text-[#333333] font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-[#666666]">
                          {info.subtext}
                        </p>
                      </div>
                      
                      <div className="w-2 h-2 rounded-full bg-[#C1A35F] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>

                {/* Additional info card */}
                <div className="mt-12 p-6 bg-gradient-to-br from-[#232122] to-[#333333] rounded-2xl shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[#C1A35F]/20 rounded-full">
                      <Calendar className="w-6 h-6 text-[#C1A35F]" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Quick Response</h4>
                      <p className="text-white/80 text-sm">We typically reply within 2-4 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-white/60 text-sm">Available now</span>
                    </div>
                    <span className="text-[#C1A35F] text-sm font-medium">✓ Priority support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Enhanced Design */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#E5E5E5]">
                {/* Form header with gradient */}
                <div className="p-8 bg-gradient-to-r from-[#232122] via-[#2a2828] to-[#232122] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C1A35F]/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">
                      Send us a Message
                    </h3>
                    <p className="text-white/80">
                      Fill out the form below and we&apos;ll get back to you promptly
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-6">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </div>
                      <h4 className="text-2xl font-serif font-bold text-[#232122] mb-3">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-[#333333] mb-6">
                        Thank you for reaching out. We&apos;ve received your message and will 
                        get back to you within 24 hours.
                      </p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C1A35F]/10 rounded-full">
                        <div className="w-2 h-2 bg-[#C1A35F] rounded-full animate-pulse"></div>
                        <span className="text-sm text-[#333333]">Processing your inquiry</span>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Name & Email */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-[#333333] mb-3"
                          >
                            <span className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#C1A35F] rounded-full"></div>
                              Your Name
                            </span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-5 py-4 border border-[#E5E5E5] rounded-xl focus:ring-2 focus:ring-[#C1A35F] focus:border-transparent transition-all group-hover:border-[#C1A35F]/50"
                            required
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div className="group">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-[#333333] mb-3"
                          >
                            <span className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#C1A35F] rounded-full"></div>
                              Email Address
                            </span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-5 py-4 border border-[#E5E5E5] rounded-xl focus:ring-2 focus:ring-[#C1A35F] focus:border-transparent transition-all group-hover:border-[#C1A35F]/50"
                            required
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      {/* Wedding Date & Package */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group">
                          <label
                            htmlFor="weddingDate"
                            className="block text-sm font-medium text-[#333333] mb-3"
                          >
                            <span className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#C1A35F] rounded-full"></div>
                              Wedding Date
                            </span>
                          </label>
                          <div className="relative">
                            <input
                              type="date"
                              id="weddingDate"
                              name="weddingDate"
                              value={formData.weddingDate}
                              onChange={handleChange}
                              className="w-full px-5 py-4 border border-[#E5E5E5] rounded-xl focus:ring-2 focus:ring-[#C1A35F] focus:border-transparent transition-all group-hover:border-[#C1A35F]/50 appearance-none"
                            />
                            {/* <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666666] pointer-events-none" /> */}
                          </div>
                        </div>

                        <div className="group">
                          <label
                            htmlFor="package"
                            className="block text-sm font-medium text-[#333333] mb-3"
                          >
                            <span className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#C1A35F] rounded-full"></div>
                              Package Interest
                            </span>
                          </label>
                          <div className="relative">
                            <select
                              id="package"
                              name="package"
                              value={formData.package}
                              onChange={handleChange}
                              className="w-full px-5 py-4 border border-[#E5E5E5] rounded-xl focus:ring-2 focus:ring-[#C1A35F] focus:border-transparent transition-all group-hover:border-[#C1A35F]/50 appearance-none"
                            >
                              <option value="">Select a package</option>
                              <option value="essential">Essential Coverage</option>
                              <option value="premium">Premium Collection</option>
                              <option value="luxury">Luxury Experience</option>
                              <option value="custom">Custom Package</option>
                            </select>
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#666666] pointer-events-none">
                              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="group">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-[#333333] mb-3"
                        >
                          <span className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#C1A35F] rounded-full"></div>
                            Your Message
                          </span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border border-[#E5E5E5] rounded-xl focus:ring-2 focus:ring-[#C1A35F] focus:border-transparent transition-all group-hover:border-[#C1A35F]/50 min-h-[150px] resize-y"
                          rows={5}
                          placeholder="Tell us about your wedding vision, special requests, or any questions you have..."
                        ></textarea>
                        <div className="text-right mt-2">
                          <span className="text-sm text-[#666666]">
                            {formData.message.length}/500 characters
                          </span>
                        </div>
                      </div>

                      {/* Error Message */}
                      {isError && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                          <p className="text-red-600 text-center">
                            ❌ Failed to send message. Please try again or contact us directly.
                          </p>
                        </div>
                      )}

                      {/* Submit Button */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="group relative w-full bg-gradient-to-r from-[#C1A35F] to-[#b09352] text-white font-semibold py-5 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-[#b09352] to-[#C1A35F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <span className="relative z-10 flex items-center justify-center gap-3">
                            <Send className="w-5 h-5" />
                            Send Message
                          </span>
                        </button>
                        
                        <p className="text-center text-sm text-[#666666] mt-4">
                          By submitting, you agree to our privacy policy and terms of service
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;