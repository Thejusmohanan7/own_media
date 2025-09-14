"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Service3() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden bg-[#F5F3EF]">
      {/* Background elements with parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-[#C08B8B] opacity-10 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-[#C1A35F] opacity-10 rounded-full"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          style={{ opacity }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#232122] mb-4">Venue & Decoration</h2>
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
              <h3 className="text-2xl font-serif text-[#232122] mb-4">Transform Your Vision</h3>
              <p className="text-[#333333] mb-4">
                We specialize in creating breathtaking wedding environments that reflect your unique style 
                and personality, from intimate gatherings to grand celebrations.
              </p>
              <ul className="text-[#333333] mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="text-[#C1A35F] mr-2">✓</span>
                  Venue selection & styling
                </li>
                <li className="flex items-center">
                  <span className="text-[#C1A35F] mr-2">✓</span>
                  Floral arrangements
                </li>
                <li className="flex items-center">
                  <span className="text-[#C1A35F] mr-2">✓</span>
                  Lighting design
                </li>
                <li className="flex items-center">
                  <span className="text-[#C1A35F] mr-2">✓</span>
                  Custom decor elements
                </li>
              </ul>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-[#232122] mb-2">Popular Themes</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[#F5F3EF] text-[#333333] px-3 py-1 rounded-full text-sm">Rustic Elegance</span>
                  <span className="bg-[#F5F3EF] text-[#333333] px-3 py-1 rounded-full text-sm">Modern Minimalist</span>
                  <span className="bg-[#F5F3EF] text-[#333333] px-3 py-1 rounded-full text-sm">Garden Romance</span>
                  <span className="bg-[#F5F3EF] text-[#333333] px-3 py-1 rounded-full text-sm">Vintage Glamour</span>
                </div>
              </div>
              
              <button className="bg-[#C1A35F] hover:bg-[#A88C4F] text-white font-medium py-2 px-6 rounded transition-colors duration-300">
                Explore Designs
              </button>
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
                alt="Wedding venue decoration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-serif">Elegant Venue Styling</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/sample1.jpg"
                  alt="Floral arrangements"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/sample1.jpg"
                  alt="Table settings"
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