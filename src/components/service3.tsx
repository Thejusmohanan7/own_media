"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Check, Star, Calendar } from 'lucide-react';

export default function Service3() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  const packages = [
    {
      title: "Package-02",
      price: "49,999",
      popular: false,
      icon: <Calendar className="w-6 h-6" />,
      features: [
        "Wedding Pre & Wedding Day Coverage",
        "1 Photographer + 1 Videographer",
        "Teaser Video",
        "Wedding Reef",
        "Full Function Video",
        "Soft Copies of All Photos",
        "Complimentary - 2 Set Photo Frame Calendar & Mini Book"
      ]
    },
    {
      title: "Package-03",
      price: "59,999",
      popular: false,
      icon: <Star className="w-6 h-6" />,
      features: [
        "Engagement Pre / Wedding Pre, Engagement Day & Wedding Day",
        "1 Photographer + 1 Videographer",
        "Engagement + Wedding Combined Highlight (1080P FULL HD)",
        "Reef Video (1080P FULL HD)",
        "Premium Pages Album",
        "Soft Copies of All Photos",
        "Complimentary - 2 Set Photo Frame Calendar & Mini Book"
      ]
    }
  ];

  const handleWhatsAppClick = (pkgTitle: string, pkgPrice: string) => {
    const message = `Hi! I am interested in booking the ${pkgTitle} package for ₹${pkgPrice}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/919496609967?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
          <h2 className="text-3xl md:text-4xl font-serif text-[#232122] mb-4">Complete Wedding Packages</h2>
          <div className="w-20 h-1 bg-[#C1A35F] mx-auto"></div>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg border border-[#F5F3EF] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {pkg.popular && (
                <div className="bg-[#C1A35F] text-white py-2 text-center text-sm font-medium">
                  <Star className="w-4 h-4 inline mr-2" />
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-[#F5F3EF] rounded-full text-[#C1A35F]">
                    {pkg.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-serif text-[#232122] text-center mb-4 min-h-[60px] flex items-center justify-center">
                  {pkg.title}
                </h3>
                
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-[#C1A35F]">₹{pkg.price}</span>
                </div>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-[#333333] text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => handleWhatsAppClick(pkg.title, pkg.price)}
                  className="w-full bg-[#C1A35F] hover:bg-[#A88C4F] text-white font-medium py-3 rounded transition-colors duration-300 cursor-pointer mt-auto"
                >
                  Book This Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Original Content */}
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
              
              {/* <button className="bg-[#C1A35F] hover:bg-[#A88C4F] text-white font-medium py-2 px-6 rounded transition-colors duration-300">
                Explore Designs
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