"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Check, Star, Camera, Video, Heart } from 'lucide-react';

export default function Service2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  const packages = [
    {
      title: "Hindu Wedding Package - BRIDE SIDE",
      price: "50,000",
      popular: false,
      icon: <Camera className="w-6 h-6" />,
      features: [
        "Wedding Eve - Photo (Video optional +₹4000)",
        "Wedding Day - 1 Still Camera + 1 Video Camera",
        "40 leaf (80 page) HD Album with Special leaf",
        "Extra Leaf: ₹650 each",
        "Table top calendar, Photo Frame, Mini Book",
        "HD Video Highlights",
        "Full Video Coverage",
        "Free Pre-wedding Shoot (Photo only)"
      ],
      instagram: "https://www.instagram.com/ownmedia_wedding_planner?igsh=MTVjamN1ZHJ5dTNxeg=="
    },
    {
      title: "Hindu Wedding Package - BOTH SIDE",
      price: "120,000",
      popular: true,
      icon: <Video className="w-6 h-6" />,
      features: [
        "GROOM SIDE: Wedding Day - 1 Still + 1 Video Camera",
        "GROOM SIDE: Wedding Reception - 1 Still + 1 Video Camera",
        "GROOM SIDE: 50 leaf HD Album with Special leaf",
        "BRIDE SIDE: Wedding Eve - 1 Still + 1 Video Camera",
        "BRIDE SIDE: Wedding Day - 1 Still + 1 Video Camera",
        "BRIDE SIDE: 50 leaf HD Album with Special leaf",
        "Extra Leaf: ₹650 each",
        "Table top calendar, Photo Frame, Mini Book",
        "HD Video Highlights & Full Length Videos",
        "Complementary Pre-wed or Post-wed Shoot (Still Only)"
      ],
      instagram: "https://www.instagram.com/ownmedia_wedding_planner?igsh=MTVjamN1ZHJ5dTNxeg=="
    },
    {
      title: "Christian Wedding Package - BOTH SIDE",
      price: "160,000",
      popular: false,
      icon: <Heart className="w-6 h-6" />,
      features: [
        "GROOM SIDE: Engagement Day - 1 Still + 1 Video Camera",
        "GROOM SIDE: Wedding Eve - 1 Still + 1 Video Camera",
        "GROOM SIDE: Wedding Day - 1 Still + 1 Video Camera",
        "BRIDE SIDE: Engagement Day - 1 Still + 1 Video Camera",
        "BRIDE SIDE: Wedding Eve - 1 Still + 1 Video Camera",
        "BRIDE SIDE: Wedding Day - 1 Still + 1 Video Camera",
        "TWO 50 leaf (100 leaf total) HD Albums with Special leaf",
        "Extra Leaf: ₹650 each",
        "Table top calendar, Photo Frame, Mini Book",
        "HD Video Highlights & Full Length Videos",
        "Free Pre-wed or Post-wed Shoot (Photo & Video)"
      ],
      instagram: "https://www.instagram.com/ownmedia_wedding_planner?igsh=MTVjamN1ZHJ5dTNxeg=="
    }
  ];

  const handleWhatsAppClick = (pkgTitle: string, pkgPrice: string, instagramUrl: string) => {
    const message = `Hi! I am interested in booking the ${pkgTitle} package for ₹${pkgPrice}. Please provide more details.\n\nInstagram: ${instagramUrl}`;
    const whatsappUrl = `https://wa.me/919496609967?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden bg-white">
      {/* Background elements with parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-20 right-20 w-48 h-48 bg-[#C1A35F] opacity-5 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-[#C08B8B] opacity-5 rounded-full"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          style={{ opacity }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#232122] mb-4">Own Media Wedding Packages</h2>
          <div className="w-20 h-1 bg-[#C1A35F] mx-auto"></div>
          <p className="text-[#333333] mt-4 max-w-2xl mx-auto">
            Professional photography & videography packages tailored for Hindu and Christian weddings
          </p>
        </motion.div>
        
        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
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
                
                <div className="flex flex-col gap-3 mt-auto">
                  <button 
                    onClick={() => handleInstagramClick(pkg.instagram)}
                    className="w-full bg-[#E4405F] hover:bg-[#D32D4F] text-white font-medium py-2 px-4 rounded transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.088c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.088c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                    View Instagram Portfolio
                  </button>
                  
                  <button 
                    onClick={() => handleWhatsAppClick(pkg.title, pkg.price, pkg.instagram)}
                    className="w-full bg-[#C1A35F] hover:bg-[#A88C4F] text-white font-medium py-3 rounded transition-colors duration-300 cursor-pointer"
                  >
                    Book This Package
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Original Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-80 w-full rounded-lg overflow-hidden">
              <Image
                src="/sample1.jpg"
                alt="Wedding photography"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-serif">Professional Wedding Coverage</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/sample2.jpg"
                  alt="Bride preparation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src="/sample3.jpg"
                  alt="Ceremony shots"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#F5F3EF] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif text-[#232122] mb-4">Own Media Wedding Services</h3>
              <p className="text-[#333333] mb-4">
                Specializing in Hindu and Christian wedding photography & videography. We capture every precious 
                moment from engagement to reception, creating beautiful memories that last a lifetime.
              </p>
              <ul className="text-[#333333] mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="text-[#C1A35F] mr-2">✓</span>
                  Bride & Groom side coverage
                </li>
                <li className="flex items-center">
                  <span className="text-[#C1A35F] mr-2">✓</span>
                  HD Albums with special leaves
                </li>
                <li className="flex items-center">
                  <span className="text-[#C1A35F] mr-2">✓</span>
                  Video highlights & full coverage
                </li>
                <li className="flex items-center">
                  <span className="text-[#C1A35F] mr-2">✓</span>
                  Pre & post wedding shoots
                </li>
              </ul>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-[#232122] mb-2">What's Included</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded text-center">
                    <p className="font-medium text-[#C1A35F]">All Packages</p>
                    <p className="text-sm text-[#333333]">HD Albums & Videos</p>
                  </div>
                  <div className="bg-white p-3 rounded text-center">
                    <p className="font-medium text-[#C1A35F]">Premium</p>
                    <p className="text-sm text-[#333333]">Both side coverage</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => handleInstagramClick("https://www.instagram.com/ownmedia_wedding_planner?igsh=MTVjamN1ZHJ5dTNxeg==")}
                  className="bg-[#E4405F] hover:bg-[#D32D4F] text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.088c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.088c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                  Follow on Instagram
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}