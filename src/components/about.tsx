// components/About.tsx
'use client';

import { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

//SVG Icons
const PhotographyIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25421C7.54758 6 7.69422 6 7.82224 5.9447C7.93524 5.8957 8.03487 5.8213 8.11417 5.72761C8.20439 5.62143 8.25632 5.4759 8.36019 5.18484L8.57143 4.56818C8.77387 3.9824 8.87509 3.68951 9.0924 3.50114C9.27719 3.33961 9.52274 3.25743 9.77465 3.27387C10.0643 3.29286 10.3332 3.49718 10.871 3.90582L11.0596 4.05442C11.4119 4.32178 11.5881 4.45546 11.7869 4.51868C11.9613 4.5749 12.1481 4.5749 12.3225 4.51868C12.5213 4.45546 12.6975 4.32178 13.0498 4.05442L13.2384 3.90582C13.7762 3.49718 14.0451 3.29286 14.3347 3.27387C14.5866 3.25743 14.8322 3.33961 15.017 3.50114C15.2343 3.68951 15.3355 3.9824 15.5379 4.56818L15.7492 5.18484C15.853 5.4759 15.905 5.62143 15.9952 5.72761C16.0745 5.8213 16.1741 5.8957 16.2871 5.9447C16.4151 6 16.5618 6 16.8551 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const VideographyIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 11.8C2 9.70261 2 8.65392 2.42393 7.88886C2.78414 7.24389 3.34389 6.68414 3.98886 6.32393C4.75392 5.9 5.80261 5.9 7.9 5.9H11.9C14.0274 5.9 15.0911 5.9 15.86 6.33105C16.5142 6.6978 17.0722 7.25577 17.439 7.91C17.87 8.67893 17.87 9.74263 17.87 11.87V12.13C17.87 14.2574 17.87 15.3211 17.439 16.09C17.0722 16.7442 16.5142 17.3022 15.86 17.669C15.0911 18.1 14.0274 18.1 11.9 18.1H7.9C5.80261 18.1 4.75392 18.1 3.98886 17.6761C3.34389 17.3159 2.78414 16.7561 2.42393 16.1111C2 15.3461 2 14.2974 2 12.2V11.8Z" stroke="#C1A35F" strokeWidth="1.5"/>
    <path d="M17.87 10.5L20.5281 8.97163C21.4463 8.433 22 8.51733 22 9.55989V14.4401C22 15.4827 21.4463 15.567 20.5281 15.0284L17.87 13.5" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const AlbumIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8Z" stroke="#C1A35F" strokeWidth="1.5"/>
    <path d="M4 7H20" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 4.5V5.5" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 4.5V5.5" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M13 4.5V5.5" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9.5 11L11.5 13L14.5 10" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DestinationIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z" stroke="#C1A35F" strokeWidth="1.5"/>
    <path d="M17.5 9C17.5 13.806 13.306 19.5 12 19.5C10.694 19.5 6.5 13.806 6.5 9C6.5 5.41015 9.41015 2.5 12 2.5C14.5899 2.5 17.5 5.41015 17.5 9Z" stroke="#C1A35F" strokeWidth="1.5"/>
    <path d="M20.5 9C20.5 13.806 17.5 19.5 17.5 19.5" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3.5 9C3.5 13.806 6.5 19.5 6.5 19.5" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17.5 19.5C15.5 21.5 12 21.5 12 21.5C12 21.5 8.5 21.5 6.5 19.5" stroke="#C1A35F" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Counter component for animated numbers
const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });
  const isPercentage = value === 100;

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-[#232122] mb-2 font-playfair">
      {isPercentage ? `${count}%` : count}+
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  // Wedding images array
  const weddingImages = [
    {
      src: "/about.JPG",
      alt: "Bride and groom"
    }
  ];

  return (
    <section id="about" ref={ref} className="relative py-16 md:py-24 px-4 bg-[#FAF9F7] overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C1A35F] rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#232122] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#E5C97F] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-[#C1A35F]">
          <path fill="currentColor" d="M50,0 C77.614,0 100,22.386 100,50 C100,77.614 77.614,100 50,100 C22.386,100 0,77.614 0,50 C0,22.386 22.386,0 50,0 Z M50,10 C27.909,10 10,27.909 10,50 C10,72.091 27.909,90 50,90 C72.091,90 90,72.091 90,50 C90,27.909 72.091,10 50,10 Z"></path>
        </svg>
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
            Our Story
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-[#C1A35F] mx-auto relative">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#C1A35F] rounded-full"></div>
            </div>
          </div>
          <p className="text-[#7D6E5B] mt-4 max-w-2xl mx-auto font-light">
            Capturing love stories with artistry and passion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image gallery with elegant frame */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Main image with decorative frame */}
            <div className="relative">
              <motion.div 
                className="relative h-80 sm:h-96 w-full overflow-hidden rounded-sm shadow-2xl"
                style={{ y, opacity, scale }}
              >
                <Image
                  src={weddingImages[0].src}
                  alt={weddingImages[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
              
              {/* Decorative frame corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#C1A35F]"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#C1A35F]"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#C1A35F]"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#C1A35F]"></div>
            </div>
            
            {/* Floating stats element with elegant design */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white text-[#232122] p-5 rounded-sm shadow-xl z-10 border border-[#E5E0D6]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="text-center">
                <Counter value={500} duration={3} />
                <div className="text-xs md:text-sm mt-1 text-[#7D6E5B] font-light tracking-wide">WEDDINGS CAPTURED</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content with elegant typography */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-3xl md:text-4xl font-playfair font-light text-[#232122] mb-6 md:mb-8 leading-tight">
              Creating Timeless Memories <span className="block text-[#C1A35F]">Since 2010</span>
            </h3>
            <p className="text-[#5A5248] mb-6 leading-relaxed font-light">
              At <span className="font-medium">Own Media</span>, we don&apos;t just take pictures—we craft visual stories that embody the 
              emotion, beauty, and unique connection of your special day. With over a decade of 
              experience, we&apos;ve mastered the art of capturing those fleeting moments that become 
              cherished memories for generations to come.
            </p>
            <p className="text-[#5A5248] mb-8 leading-relaxed font-light">
              Our approach blends artistic vision with technical expertise, ensuring that each 
              photograph and video reflects your personality and love story. We believe in 
              authentic, emotion-driven storytelling that stands the test of time.
            </p>

            {/* Features list with elegant icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-8 md:mb-28">
              {[
                { text: "Natural & Candid Photography", icon: <PhotographyIcon /> },
                { text: "4K Cinematic Videography", icon: <VideographyIcon /> },
                { text: "Custom Wedding Albums", icon: <AlbumIcon /> },
                { text: "Destination Wedding Coverage", icon: <DestinationIcon /> }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#F5F3EF] border border-[#E5E0D6] flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 text-lg">
                    {feature.icon}
                  </div>
                  <span className="text-[#5A5248] text-sm md:text-base font-light pt-1">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button with elegant hover effect */}
            <Link href={'/portfolio'}>
              <motion.button
                className="group relative bg-[#232122] hover:bg-[#C1A35F] text-white font-light py-3 md:py-4 px-8 md:px-10 rounded-sm transition-all duration-500 transform hover:-translate-y-1 shadow-md hover:shadow-xl text-sm md:text-base tracking-wide overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Discover Our Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#C1A35F] to-[#E5C97F] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Stats section with elegant dividers */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20 md:mt-28 pt-12 md:pt-16 border-t border-[#E5E0D6]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            { value: 12, label: "Years Experience" },
            { value: 500, label: "Weddings Captured" },
            { value: 50, label: "Destinations" },
            { value: 100, label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center relative">
              {index !== 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-px h-12 bg-[#E5E0D6]"></div>
              )}
              <div className="mb-2">
                <Counter value={stat.value} duration={3} />
              </div>
              <div className="text-[#7D6E5B] text-xs md:text-sm font-light tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Add to your globals.css */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
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

export default About;