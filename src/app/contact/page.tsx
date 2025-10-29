"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Sample2 from "@/components/sample2";

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

        // Hide success message after 3s
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

  return (
    <div className="mt-8">
      <div>
        <Sample2 />
      </div>

      <section id="contact" className="py-20 px-4 md:px-8 bg-[#F5F3EF]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#232122] mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-[#333333] max-w-2xl mx-auto">
              Ready to capture your special day? Let&apos;s discuss how we can
              tell your unique love story through our lens.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#232122] mb-6">
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-opacity-10 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-[#C1A35F]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#232122]">Phone</h4>
                    <p className="text-[#333333]">+91 94966099677</p>
                    <p className="text-sm text-[#666666]">
                      Mon–Fri from 9am to 6pm
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-opacity-10 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-[#C1A35F]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#232122]">Email</h4>
                    <p className="text-[#333333]">info@ownmedia.com</p>
                    <p className="text-sm text-[#666666]">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-opacity-10 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-[#C1A35F]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#232122]">
                      Krishna Auditorium Building
                    </h4>
                    <p className="text-[#333333]">
                      Opposite Chakkumarassery Temple
                    </p>
                    <p className="text-[#333333]">Muravanthiruth</p>
                    <p className="text-sm text-[#666666]">North Paravoor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-serif font-bold text-[#232122] mb-6">
                Send us a Message
              </h3>

              {isSubmitted ? (
                <div className="bg-[#C1A35F] bg-opacity-10 border border-[#C1A35F] border-opacity-30 rounded-lg p-6 text-center">
                  <svg
                    className="w-12 h-12 text-[#C1A35F] mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h4 className="text-xl font-serif font-bold text-[#232122] mb-2">
                    Thank You!
                  </h4>
                  <p className="text-[#333333]">
                    We&apos;ve received your message and will get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#333333] mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#C1A35F] focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#333333] mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#C1A35F] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="weddingDate"
                        className="block text-sm font-medium text-[#333333] mb-2"
                      >
                        Wedding Date
                      </label>
                      <input
                        type="date"
                        id="weddingDate"
                        name="weddingDate"
                        value={formData.weddingDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#C1A35F] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="package"
                        className="block text-sm font-medium text-[#333333] mb-2"
                      >
                        Package Interest
                      </label>
                      <select
                        id="package"
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#C1A35F] focus:border-transparent"
                      >
                        <option value="">Select a package</option>
                        <option value="essential">Essential Coverage</option>
                        <option value="premium">Premium Collection</option>
                        <option value="luxury">Luxury Experience</option>
                        <option value="custom">Custom Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#333333] mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#C1A35F] focus:border-transparent"
                      rows={5}
                    ></textarea>
                  </div>

                  {isError && (
                    <p className="text-red-500 text-sm text-center">
                      ❌ Failed to send message. Please try again later.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-[#C1A35F] hover:bg-[#b09352] text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
