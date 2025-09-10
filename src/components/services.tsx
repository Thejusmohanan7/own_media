// components/Services.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// Elegant SVG Icons for Services
const WeddingIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 11.5V7.5C17 6.83696 16.7366 6.20107 16.2678 5.73223C15.7989 5.26339 15.163 5 14.5 5H9.5C8.83696 5 8.20107 5.26339 7.73223 5.73223C7.26339 6.20107 7 6.83696 7 7.5V11.5M17 11.5H7M17 11.5V18.5C17 19.163 16.7366 19.7989 16.2678 20.2678C15.7989 20.7366 15.163 21 14.5 21H9.5C8.83696 21 8.20107 20.7366 7.73223 20.2678C7.26339 19.7989 7 19.163 7 18.5V11.5" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15C12.8284 15 13.5 14.3284 13.5 13.5C13.5 12.6716 12.8284 12 12 12C11.1716 12 10.5 12.6716 10.5 13.5C10.5 14.3284 11.1716 15 12 15Z" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 5V3.5C8.5 3.23478 8.60536 2.98043 8.79289 2.79289C8.98043 2.60536 9.23478 2.5 9.5 2.5H14.5C14.7652 2.5 15.0196 2.60536 15.2071 2.79289C15.3946 2.98043 15.5 3.23478 15.5 3.5V5" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12.5C20.5 13.5 19.5 15.5 17.5 16.5" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 12.5C3.5 13.5 4.5 15.5 6.5 16.5" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EngagementIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 9.5C9.5 9.5 10.5 8.5 12 8.5C13.5 8.5 14.5 9.5 14.5 9.5" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.5 13.5C10.5 13.5 11.5 14.5 12 14.5C12.5 14.5 13.5 13.5 13.5 13.5" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 16.5C8 16.5 10.5 18.5 12 18.5C13.5 18.5 16 16.5 16 16.5" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 5L15 9" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 5L9 9" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 19L9 15" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 19L15 15" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PortraitIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 21.5H5C4.46957 21.5 3.96086 21.2893 3.58579 20.9142C3.21071 20.5391 3 20.0304 3 19.5V4.5C3 3.96957 3.21071 3.46086 3.58579 3.08579C3.96086 2.71071 4.46957 2.5 5 2.5H19C19.5304 2.5 20.0391 2.71071 20.4142 3.08579C20.7893 3.46086 21 3.96957 21 4.5V19.5C21 20.0304 20.7893 20.5391 20.4142 20.9142C20.0391 21.2893 19.5304 21.5 19 21.5Z" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16.5C13.6569 16.5 15 15.1569 15 13.5C15 11.8431 13.6569 10.5 12 10.5C10.3431 10.5 9 11.8431 9 13.5C9 15.1569 10.3431 16.5 12 16.5Z" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 19.5C16.5 18.3065 16.0259 17.1619 15.182 16.318C14.3381 15.4741 13.1935 15 12 15C10.8065 15 9.66193 15.4741 8.81802 16.318C7.97411 17.1619 7.5 18.3065 7.5 19.5" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const VideographyServiceIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 8.5V15.5C22 16.163 21.7366 16.7989 21.2678 17.2678C20.7989 17.7366 20.163 18 19.5 18H5.5C4.83696 18 4.20107 17.7366 3.73223 17.2678C3.26339 16.7989 3 16.163 3 15.5V8.5C3 7.83696 3.26339 7.20107 3.73223 6.73223C4.20107 6.26339 4.83696 6 5.5 6H19.5C20.163 6 20.7989 6.26339 21.2678 6.73223C21.7366 7.20107 22 7.83696 22 8.5Z" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5 8V16" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section id="services" ref={ref} className="relative py-16 md:py-24 px-4 bg-white overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C1A35F] rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#232122] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#E5C97F] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header with elegant underline */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-light text-[#232122] mb-6">
            Our Services
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-[#C1A35F] mx-auto relative">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#C1A35F] rounded-full"></div>
            </div>
          </div>
          <p className="text-[#7D6E5B] mt-4 max-w-2xl mx-auto font-light">
            Comprehensive photography and videography packages tailored to your love story
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Wedding Photography",
              description: "Complete coverage of your special day with artistic, timeless imagery",
              icon: <WeddingIcon />,
              image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Engagement Sessions",
              description: "Capture the excitement and romance of your engagement period",
              icon: <EngagementIcon />,
              image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Portrait Sessions",
              description: "Elegant portraits for save-the-dates, announcements, and more",
              icon: <PortraitIcon />,
              image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Cinematic Videography",
              description: "Beautifully crafted films that tell the story of your wedding day",
              icon: <VideographyServiceIcon />,
              image: "https://images.unsplash.com/photo-1539622106114-e0df812097e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#FAF9F7] rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.div 
                  className="absolute inset-0"
                  style={{ y, opacity }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md z-10">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-[#232122] mb-3">{service.title}</h3>
                <p className="text-[#5A5248] font-light mb-4">{service.description}</p>
                <button className="text-[#C1A35F] font-light text-sm flex items-center group-hover:underline">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Parallax CTA Section */}
       <motion.div 
          className="text-center mt-16 pt-12 border-t border-[#E5E0D6] relative overflow-hidden rounded-sm bg-[#FAF9F7]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="relative z-10 py-12 px-4">
            <h3 className="text-2xl md:text-3xl font-playfair font-light text-[#232122] mb-6">
              Custom Packages Available
            </h3>
            <p className="text-[#5A5248] max-w-2xl mx-auto mb-8 font-light text-lg">
              Every love story is unique. Let us create a personalized package that perfectly captures your vision.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <motion.button
                className="group relative bg-[#232122] hover:bg-[#C1A35F] text-white font-light py-3 md:py-4 px-8 md:px-10 rounded-sm transition-all duration-500 transform hover:-translate-y-1 shadow-md hover:shadow-xl text-sm md:text-base tracking-wide overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">View Pricing</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#C1A35F] to-[#E5C97F] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.button>
              
              <motion.button
                className="group relative bg-transparent border border-[#232122] text-[#232122] hover:text-white font-light py-3 md:py-4 px-8 md:px-10 rounded-sm transition-all duration-500 transform hover:-translate-y-1 shadow-md hover:shadow-xl text-sm md:text-base tracking-wide overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-[#232122] opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>
              </motion.button>
            </div>
            
            <p className="text-sm text-[#7D6E5B]">
              <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 极速快3 0 01-1.933 0L9.854 12.2 6.5 10.266a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path>
              </svg>
              All packages include a complimentary consultation
            </p>
          </div>
        </motion.div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;