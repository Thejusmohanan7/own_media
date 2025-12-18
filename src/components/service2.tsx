'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Star, Camera, Video, Heart, Check, ChevronDown, Instagram, MessageCircle } from 'lucide-react';

export default function WeddingPackages() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);

  const packages = [
    {
      id: "basic",
      title: "Basic",
      subtitle: "Hindu Wedding - BRIDE SIDE",
      price: "50,000",
      originalPrice: "65,000",
      popular: false,
      accentColor: "#dc2626", // Red
      icon: <Camera className="w-8 h-8" />,
      mainFeatures: [
        "Wedding Eve - Photo (Video optional +₹4000)",
        "Wedding Day - 1 Still Camera + 1 Video Camera",
        "40 leaf (80 page) HD Album with Special leaf",
      ],
      allFeatures: [
        "Wedding Eve - Photo (Video optional +₹4000)",
        "Wedding Day - 1 Still Camera + 1 Video Camera",
        "40 leaf (80 page) HD Album with Special leaf",
        "Extra Leaf: ₹650 each",
        "Table top calendar, Photo Frame, Mini Book",
        "HD Video Highlights",
        "Full Video Coverage",
        "Free Pre-wedding Shoot (Photo only)"
      ],
      addons: [
        { name: "Video for Wedding Eve", price: "+₹4,000" },
        { name: "Extra Album Leaf", price: "+₹650 each" }
      ]
    },
    {
      id: "standard",
      title: "Standard",
      subtitle: "Hindu Wedding - BOTH SIDE",
      price: "120,000",
      originalPrice: "150,000",
      popular: true,
      accentColor: "#1e40af", // Blue
      icon: <Video className="w-8 h-8" />,
      mainFeatures: [
        "GROOM SIDE: Wedding Day - 1 Still + 1 Video Camera",
        "GROOM SIDE: Wedding Reception Coverage",
        "GROOM SIDE: 50 leaf HD Album with Special leaf",
      ],
      allFeatures: [
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
      addons: [
        { name: "Extra Album Leaf", price: "+₹650 each" },
        { name: "Additional Videographer", price: "+₹15,000" }
      ]
    },
    {
      id: "premium",
      title: "Premium",
      subtitle: "Christian Wedding - BOTH SIDE",
      price: "160,000",
      originalPrice: "200,000",
      popular: false,
      accentColor: "#059669", // Green
      icon: <Heart className="w-8 h-8" />,
      mainFeatures: [
        "Full BOTH SIDE Coverage",
        "Engagement Day Coverage",
        "TWO 50 leaf HD Albums (100 leaf total)",
      ],
      allFeatures: [
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
      addons: [
        { name: "Drone Aerial Coverage", price: "+₹10,000" },
        { name: "Same-Day Edit", price: "+₹15,000" }
      ]
    }
  ];

  const handleContactClick = (pkg: typeof packages[0]) => {
    const message = `Hi! I'm interested in the ${pkg.title} package (${pkg.subtitle}) for ₹${pkg.price}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/919496609967?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/ownmedia_wedding_planner?igsh=MTVjamN1ZHJ5dTNxeg==", '_blank');
  };

  const toggleExpand = (pkgId: string) => {
    setExpandedPackage(expandedPackage === pkgId ? null : pkgId);
  };

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-[#fef7f7] to-white">
      {/* Background elements */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-50 to-pink-50 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-blue-50 to-cyan-50 rounded-full opacity-50 blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, #dc2626 1px, transparent 1px),
                             linear-gradient(to bottom, #dc2626 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          style={{ opacity }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-[#dc2626] mb-6 border border-red-100">
            <Star className="w-4 h-4" />
            Premium Wedding Packages
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-gray-900 mb-6">
            <span className="block">Choose Your</span>
            <span className="text-[#dc2626]">Perfect Package</span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 via-red-400 to-red-500 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Professional photography & videography packages tailored for Hindu and Christian weddings. 
            All packages include premium quality albums and comprehensive coverage.
          </p>
        </motion.div>
        
        {/* Packages Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* First two packages side by side on desktop */}
          {packages.slice(0, 2).map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              {/* Package Card */}
              <div 
                className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col border ${
                  pkg.popular ? 'border-blue-200 border-2' : 'border-gray-200'
                }`}
              >
                {/* Header with gradient */}
                <div 
                  className="p-8 relative overflow-hidden"
                  style={{ backgroundColor: pkg.accentColor }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                            {pkg.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-white">{pkg.title}</h3>
                        </div>
                        <p className="text-white/90">{pkg.subtitle}</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-end gap-2">
                          <span className="text-4xl font-bold text-white">₹{pkg.price}</span>
                          <span className="text-white/70 line-through text-lg">₹{pkg.originalPrice}</span>
                        </div>
                        <p className="text-white/70 text-sm mt-1">One-time payment</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleContactClick(pkg)}
                        className="flex-1 bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Get Quote on WhatsApp
                      </button>
                      <button
                        onClick={handleInstagramClick}
                        className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  {/* Main features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {pkg.mainFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="p-1 rounded-full bg-green-100 mt-1">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Addons */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-3">Available Add-ons</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.addons.map((addon, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg"
                        >
                          {addon.name} <span className="font-semibold">{addon.price}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Expandable section */}
                  <AnimatePresence>
                    {expandedPackage === pkg.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-gray-200">
                          <h4 className="text-lg font-semibold text-gray-800 mb-4">All Features Included</h4>
                          <ul className="space-y-3">
                            {pkg.allFeatures.map((feature, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <div className="p-1 rounded-full bg-green-100 mt-1">
                                  <Check className="w-4 h-4 text-green-600" />
                                </div>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Expand button */}
                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <button
                      onClick={() => toggleExpand(pkg.id)}
                      className="w-full flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 font-medium py-3"
                    >
                      {expandedPackage === pkg.id ? 'Show Less' : 'View All Features'}
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedPackage === pkg.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Third package spanning full width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Package Card */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left side - Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">Premium</h3>
                        <p className="text-white/80">Christian Wedding - BOTH SIDE</p>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <div className="flex items-end gap-3 mb-4">
                        <span className="text-5xl font-bold text-white">₹160,000</span>
                        <span className="text-white/60 line-through text-xl">₹200,000</span>
                      </div>
                      <p className="text-white/70">Complete coverage for both families</p>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-1" />
                        <span className="text-white/90">Engagement, Wedding Eve & Day Coverage</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-1" />
                        <span className="text-white/90">TWO Premium HD Albums (100 leaves total)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-1" />
                        <span className="text-white/90">Free Pre/Post Wedding Shoot (Photo & Video)</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => handleContactClick(packages[2])}
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-3"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Book Premium Package
                      </button>
                      <button
                        onClick={() => toggleExpand(packages[2].id)}
                        className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-xl hover:bg-white/20 transition-colors"
                      >
                        {expandedPackage === packages[2].id ? 'Show Less' : 'View Details'}
                      </button>
                    </div>
                  </div>
                  
                  {/* Right side - Features list */}
                  <div>
                    <AnimatePresence>
                      {expandedPackage === packages[2].id ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="bg-white/5 backdrop-blur-sm rounded-xl p-6"
                        >
                          <h4 className="text-xl font-semibold text-white mb-6">All Features Included</h4>
                          <ul className="space-y-4">
                            {packages[2].allFeatures.slice(0, 8).map((feature, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                                <span className="text-white/90">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="grid grid-cols-2 gap-4"
                        >
                          {packages[2].addons.map((addon, index) => (
                            <div
                              key={index}
                              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center"
                            >
                              <div className="text-white/70 text-sm mb-1">{addon.name}</div>
                              <div className="text-white font-semibold">{addon.price}</div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Package Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-gray-600 font-medium">Features</th>
                  {packages.map((pkg) => (
                    <th key={pkg.id} className="text-center py-4 px-6">
                      <div className="font-bold text-lg" style={{ color: pkg.accentColor }}>
                        {pkg.title}
                      </div>
                      <div className="text-sm text-gray-500">{pkg.subtitle}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  "Wedding Day Coverage",
                  "Video Camera Included",
                  "HD Photo Album",
                  "Both Side Coverage",
                  "Reception Coverage",
                  "Engagement Coverage",
                  "Digital Gallery",
                  "Free Pre-wedding Shoot",
                  "Priority Editing",
                  "Multiple Photographers"
                ].map((feature, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">{feature}</td>
                    {packages.map((pkg) => (
                      <td key={pkg.id} className="text-center py-4 px-6">
                        <div className="flex justify-center">
                          {(() => {
                            // Logic to determine if feature is included
                            if (rowIndex < 3) return <Check className="w-5 h-5 text-green-500" />;
                            if (pkg.id === "basic") {
                              return rowIndex < 4 ? <Check className="w-5 h-5 text-green-500" /> : <span className="text-gray-300">—</span>;
                            }
                            if (pkg.id === "standard") {
                              return rowIndex < 8 ? <Check className="w-5 h-5 text-green-500" /> : <span className="text-gray-300">—</span>;
                            }
                            return <Check className="w-5 h-5 text-green-500" />;
                          })()}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-xl max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Need a Custom Package?</h3>
              <p className="text-white/80 mb-6">
                Tell us about your wedding and get a personalized quote within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleContactClick(packages[0])}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Request Custom Quote
              </button>
              <button
                onClick={handleInstagramClick}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all flex items-center gap-3"
              >
                <Instagram className="w-5 h-5" />
                View Portfolio
              </button>
            </div>
            <p className="text-white/60 text-sm">
              All packages include 100% satisfaction guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}