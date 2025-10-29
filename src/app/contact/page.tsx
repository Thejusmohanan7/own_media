"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import Sample2 from '@/components/sample2';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    weddingDate: '',
    package: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        weddingDate: '',
        package: '',
        message: ''
      });
    }, 3000);
  };
  return (
    <div className='mt-8'>
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
              Ready to capture your special day? Let&apos;s discuss how we can tell your unique love story through our lens.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#232122] mb-6">Contact Information</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className=" bg-opacity-10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#C1A35F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#232122]">Phone</h4>
                    <p className="text-[#333333]">+91 94966099677</p>
                    <p className="text-sm text-[#666666]">Mon-Fri from 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className=" bg-opacity-10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#C1A35F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#232122]">Email</h4>
                    <p className="text-[#333333]">info@ownmedia.com</p>
                    <p className="text-sm text-[#666666]">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className=" bg-opacity-10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#C1A35F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#232122]">Krishna auditorium building</h4>
                    <p className="text-[#333333]">opposite chakkumarassery temple</p>
                    <p className="text-[#333333]">MURAVANTHIRUTH</p>
                    <p className="text-sm text-[#666666]"> North Paravoor</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-serif font-semibold text-[#232122] mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className=" bg-opacity-5 hover:bg-opacity-10 p-3 rounded-lg transition-all">
                    <svg className="w-5 h-5 text-[#232122]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className=" bg-opacity-5 hover:bg-opacity-10 p-3 rounded-lg transition-all">
                    <svg className="w-5 h-5 text-[#232122]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className=" bg-opacity-5 hover:bg-opacity-10 p-3 rounded-lg transition-all">
                    <svg className="w-5 h-5 text-[#232122]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-serif font-bold text-[#232122] mb-6">Send us a Message</h3>

              {isSubmitted ? (
                <div className="bg-[#C1A35F] bg-opacity-10 border border-[#C1A35F] border-opacity-30 rounded-lg p-6 text-center">
                  <svg className="w-12 h-12 text-[#C1A35F] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-xl font-serif font-bold text-[#232122] mb-2">Thank You!</h4>
                  <p className="text-[#333333]">We&apos;ve received your message and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#C1A35F] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#C1A35F] focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="weddingDate" className="block text-sm font-medium text-[#333333] mb-2">Wedding Date</label>
                      <input
                        type="date"
                        id="weddingDate"
                        name="weddingDate"
                        value={formData.weddingDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#C1A35F] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="package" className="block text-sm font-medium text-[#333333] mb-2">Package Interest</label>
                      <select
                        id="package"
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#C1A35F] focus:border-transparent transition-all"
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
                    <label htmlFor="message" className="block text-sm font-medium text-[#333333] mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#C1A35F] focus:border-transparent transition-all"
                      rows={5} // ✅ Fix: number, not string
                    ></textarea>

                  </div>

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