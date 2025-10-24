"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Service1() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden bg-[#F5F3EF]">
      {/* Background elements with parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#C1A35F] opacity-10 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#C08B8B] opacity-10 rounded-full"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          style={{ opacity }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#232122] mb-4">Complete Wedding Planning</h2>
          <div className="w-20 h-1 bg-[#C1A35F] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif text-[#232122] mb-4">Our Approach</h3>
              <p className="text-[#333333] mb-4">
                We handle every detail of your special day, from venue selection to timeline coordination, 
                ensuring a seamless and stress-free experience.
              </p>
              <ul className="text-[#333333] mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="text-[#C1A35F] mr-2">✓</span>
                  Venue selection & booking
                </li>
                <li className="flex items-center">
                  <span className="text-[#C1A35F] mr-2">✓</span>
                  Vendor coordination
                </li>
                <li className="flex items-center">
                  <span className="text-[#C1A35F] mr-2">✓</span>
                  Timeline management
                </li>
                <li className="flex items-center">
                  <span className="text-[#C1A35F] mr-2">✓</span>
                  Day-of coordination
                </li>
              </ul>
              {/* <button className="bg-[#C1A35F] hover:bg-[#A88C4F] text-white font-medium py-2 px-6 rounded transition-colors duration-300">
                Learn More
              </button> */}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-80 w-full rounded-lg overflow-hidden">
              <Image
                src="/sample1.jpg"
                alt="Wedding planning consultation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-serif">Personalized Planning Process</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/sample2.jpg"
                  alt="Venue selection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/sample3.jpg"
                  alt="Timeline management"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}