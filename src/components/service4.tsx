"use client";

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import professional icons (you'll need to install these or use your own)
import { Heart, Flower, Sparkles, Bird } from 'lucide-react';

export default function Service4() {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  // Floating elements data with professional icons
  const floatingElements = [
    { 
      icon: <Heart className="w-4 h-4" fill="currentColor" />, 
      size: "w-8 h-8", 
      position: "top-10 left-10", 
      delay: 0 
    },
    { 
      icon: <Flower className="w-5 h-5" />, 
      size: "w-10 h-10", 
      position: "top-20 right-16", 
      delay: 0.5 
    },
    { 
      icon: <Sparkles className="w-4 h-4" />, 
      size: "w-8 h-8", 
      position: "bottom-20 left-20", 
      delay: 1 
    },
    { 
      icon: <Bird className="w-5 h-5" />, 
      size: "w-10 h-10", 
      position: "bottom-10 right-10", 
      delay: 1.5 
    },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#F5F3EF] via-white to-[#F5F3EF]">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIgc3Ryb2tlPSIjQzFBMzVGIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')]"></div>
        
        {/* Floating elements with professional icons */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size} ${element.position} flex items-center justify-center text-[#C1A35F] opacity-40 bg-white rounded-full shadow-sm`}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            {element.icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          style={{ opacity, scale }}
          className="text-center max-w-3xl mx-auto"
        >

          {/* Main quote with typing animation effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-6 top-3 text-3xl text-[#C1A35F] opacity-60">"</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#232122] mb-6 leading-tight px-8">
              Your love story deserves to be told in the most <span className="text-[#C1A35F]">beautiful</span> way
            </h2>
            <div className="absolute -right-6 bottom-3 text-3xl text-[#C1A35F] opacity-60">"</div>
          </motion.div>

          {/* Author line */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-[#333333] mb-12 max-w-md mx-auto"
          >
            Let us transform your vision into an unforgettable celebration of love
          </motion.p>
          
          {/* Animated CTA Button - Enhanced with professional animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative inline-block"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px -5px rgba(193, 163, 95, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-[#C1A35F] text-white font-medium py-4 px-10 rounded-full text-lg overflow-hidden group"
              style={{
                background: "linear-gradient(45deg, #C1A35F, #D4B87A, #C1A35F)",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: isHovered ? ["0% 0%", "100% 0%"] : "0% 0%",
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut"
              }}
            >
              {/* Animated shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%", skewX: "-20deg" }}
                animate={{ x: isHovered ? "200%" : "-100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              
              {/* Text with enhanced animation */}
              <span className="relative z-10 flex items-center justify-center">
                <motion.span
                  initial={{ letterSpacing: "0em" }}
                  animate={{ 
                    letterSpacing: isHovered ? "0.05em" : "0em",
                  }}
                  transition={{ duration: 0.3 }}
                  className="font-medium tracking-wide"
                >
                  Start Planning Today
                </motion.span>
                <motion.span
                  initial={{ x: 0, opacity: 0.8 }}
                  animate={{ 
                    x: isHovered ? 8 : 0,
                    opacity: isHovered ? 1 : 0.8
                  }}
                  transition={{ 
                    duration: 0.3,
                    delay: isHovered ? 0.1 : 0
                  }}
                  className="ml-3"
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            {/* Enhanced glow effect */}
            <motion.div
              className="absolute -inset-3 bg-[#C1A35F] rounded-full opacity-0 blur-xl"
              animate={{ 
                opacity: isHovered ? 0.4 : 0,
                scale: isHovered ? 1.1 : 0.95
              }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Floating particles on hover */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isHovered ? [0, 1, 0] : 0,
                  y: isHovered ? [0, -20, -40] : 0,
                  x: isHovered ? [0, (i-1)*10, (i-1)*20] : 0,
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  times: [0, 0.5, 1]
                }}
                style={{
                  left: "50%",
                  bottom: "10%",
                }}
              />
            ))}
          </motion.div>

          {/* Additional decorative text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="text-sm text-[#333333] mt-8 opacity-70"
          >
            Schedule a complimentary consultation with our wedding specialists
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}