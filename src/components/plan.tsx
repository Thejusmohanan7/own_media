// components/ModernTimeline.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';

const ModernTimeline = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Create refs for each timeline step individually
  const stepRef1 = useRef(null);
  const stepRef2 = useRef(null);
  const stepRef3 = useRef(null);
  const stepRef4 = useRef(null);
  const stepRef5 = useRef(null);
  
  // Combine refs into an array with useMemo to maintain referential equality
  const stepRefs = useMemo(() => [
    stepRef1,
    stepRef2,
    stepRef3,
    stepRef4,
    stepRef5
  ], []);
  
  // Set up Intersection Observer to detect which step is in view
  useEffect(() => {
    const observers = stepRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },
        { threshold: 0.5 }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return observer;
    });
    
    return () => {
      observers.forEach((observer, index) => {
        if (stepRefs[index].current) {
          observer.unobserve(stepRefs[index].current);
        }
      });
    };
  }, [stepRefs]);
  
  // Parallax effects for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);
  
  // Timeline steps
  const timelineSteps = [
    {
      step: 1,
      title: "Discovery Call",
      description: "We begin with a conversation to understand your vision, preferences, and wedding day specifics.",
      duration: "30 mins"
    },
    {
      step: 2,
      title: "Proposal & Planning",
      description: "I create a customized photography package and we plan the details of your wedding day coverage.",
      duration: "1-2 days"
    },
    {
      step: 3,
      title: "Pre-Wedding Session",
      description: "We conduct an engagement or portrait session to get comfortable working together before the big day.",
      duration: "2-3 hours"
    },
    {
      step: 4,
      title: "Wedding Day",
      description: "I capture your special day with a perfect blend of artistic vision and discreet documentation.",
      duration: "8+ hours"
    },
    {
      step: 5,
      title: "Delivery & Album Design",
      description: "You receive your beautifully edited photos and we design heirloom-quality albums together.",
      duration: "4-6 weeks"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 px-4 bg-[#0a0a0a] overflow-hidden">
      {/* Gradient overlays for parallax effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: y1, opacity }}
      >
        <div className="absolute top-0 left-0 w-full极速快3 h-1/3 bg-gradient-to-b from-[#C1A35F] to-transparent opacity-10"></div>
      </motion.div>
      
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: y2, opacity }}
      >
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#232122极速快3] to-transparent opacity-15"></div>
      </motion.div>
      
      {/* Light effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#C1A35F] opacity-5 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#E5C97F] opacity-5 blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.07, 0.04],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16 md:极速快3mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6">
            Our Collaboration Process
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-[#C1A35F] mx-auto relative">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#C1A35F] rounded-full"></div>
            </div>
          </div>
          <p className="text-[#A0999B] mt-4 max-w-2xl mx-auto font-light">
            A seamless journey from our first conversation to delivering your cherished memories
          </p>
        </motion.div>

        {/* Modern Timeline */}
        <div className="relative">
          {/* Vertical progress line */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-1 bg-[#2A2829] transform -translate-x-1/2 hidden md:block overflow-hidden">
            <motion.div 
              className="h-full w-full bg-gradient-to-b from-[#C1A35F] to-[#E5C97F] origin-top"
              style={{ scaleY: scrollYProgress }}
            />
          </div>
          
          {/* Mobile progress line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-[#2A2829] md:hidden overflow-hidden">
            <motion.div 
              className="h-full w-full bg-gradient-to-b from-[#C1A35F] to-[#极速快3E5C97F] origin-top"
              style={{ scaleY: scrollYProgress }}
            />
          </div>
          
          <div className="space-y-12 md:space-y-24 pl-10 md:pl-0">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.step}
                ref={stepRefs[index]}
                className="flex items-start"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Step connector dot with highlight effect */}
                <motion.div 
                  className="absolute left-5 md:left-1/2 w-4 h-4 rounded-full border-4 border-[#0a0a0a] transform -translate-x-1/2 z-10"
                  animate={{
                    backgroundColor: activeStep === index ? "#E5C97F" : "#C1A35F",
                    scale: activeStep === index ? 1.2 : 1,
                    boxShadow: activeStep === index ? "0 0 0 6px rgba(197, 163, 95, 0.3)" : "none"
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ml-2 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <motion.div 
                    className="bg-[#1A191A] p-6 rounded-xl border transition-all duration-500 group"
                    animate={{
                      borderColor: activeStep === index ? "#C1A35F" : "#2A2829"
                    }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className={index % 2 !== 0 ? 'md:text-right' : ''}>
                        <span className="text-xs text-[#C1A35F] font-medium tracking-wider">STEP {step.step}</span>
                        <motion.h3 
                          className="text-xl font-semibold mt-1 transition-colors duration-300"
                          animate={{
                            color: activeStep === index ? "#E5C97F" : "#FFFFFF"
                          }}
                        >
                          {step.title}
                        </motion.h3>
                      </div>
                      <motion.span 
                        className="text-xs bg-[#2A2829] px-2 py-1 rounded-full"
                        animate={{
                          color: activeStep === index ? "#E5C97F" : "#A0999B",
                          border: activeStep === index ? "1px solid #C1A353F" : "1px solid #2A2829"
                        }}
                      >
                        {step.duration}
                      </motion.span>
                    </div>
                    <p className={`text-[#A0999B] font-light ${index % 2 !== 0 ? 'md:text-right' : ''}`}>{step.description}</p>
                    
                    {/* Hover effect line */}
                    <motion.div 
                      className="h-0.5 bg-gradient-to-r from-transparent via-[#C1A35F] to-transparent mt-4"
                      animate={{
                        width: activeStep === index ? "100%" : "0%"
                      }}
                      transition={{ duration: 0.7 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20 pt-12 border-t border-[#2A2829]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-[#A0999B] max-w-2xl mx-auto mb-8 font-light">
            Let&apos;s start planning how we can capture your unique love story together.
          </p>
          <motion.button
            className="group relative bg-[#C1A35F] hover:bg-[#D4B871] text-[#0a0a0a] font-medium py-3 md:py-4 px-8 md:px-10 rounded-sm transition-all duration-500 transform hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-[#C1A35F]/20 text-sm md:text-base tracking-wide overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-[#E5C97F] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernTimeline;