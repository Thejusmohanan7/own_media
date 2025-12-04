'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Camera, Video, Heart } from 'lucide-react';

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
      title: "Basic",
      subtitle: "Hindu Wedding - BRIDE SIDE",
      price: "50,000",
      popular: false,
      icon: <Camera className="w-6 h-6" />,
      features: [
        { text: "Wedding Eve - Photo (Video optional +₹4000)", included: true },
        { text: "Wedding Day - 1 Still Camera + 1 Video Camera", included: true },
        { text: "40 leaf (80 page) HD Album with Special leaf", included: true },
        { text: "Extra Leaf: ₹650 each", included: true },
        { text: "Table top calendar, Photo Frame, Mini Book", included: true },
        { text: "HD Video Highlights", included: true },
        { text: "Full Video Coverage", included: true },
        { text: "Free Pre-wedding Shoot (Photo only)", included: true }
      ],
      instagram: "https://www.instagram.com/ownmedia_wedding_planner?igsh=MTVjamN1ZHJ5dTNxeg=="
    },
    {
      title: "Standard",
      subtitle: "Hindu Wedding - BOTH SIDE",
      price: "120,000",
      popular: true,
      icon: <Video className="w-6 h-6" />,
      features: [
        { text: "GROOM SIDE: Wedding Day - 1 Still + 1 Video Camera", included: true },
        { text: "GROOM SIDE: Wedding Reception - 1 Still + 1 Video Camera", included: true },
        { text: "GROOM SIDE: 50 leaf HD Album with Special leaf", included: true },
        { text: "BRIDE SIDE: Wedding Eve - 1 Still + 1 Video Camera", included: true },
        { text: "BRIDE SIDE: Wedding Day - 1 Still + 1 Video Camera", included: true },
        { text: "BRIDE SIDE: 50 leaf HD Album with Special leaf", included: true },
        { text: "Extra Leaf: ₹650 each", included: true },
        { text: "Table top calendar, Photo Frame, Mini Book", included: true },
        { text: "HD Video Highlights & Full Length Videos", included: true },
        { text: "Complementary Pre-wed or Post-wed Shoot (Still Only)", included: true }
      ],
      instagram: "https://www.instagram.com/ownmedia_wedding_planner?igsh=MTVjamN1ZHJ5dTNxeg=="
    },
    {
      title: "Premium",
      subtitle: "Christian Wedding - BOTH SIDE",
      price: "160,000",
      popular: false,
      icon: <Heart className="w-6 h-6" />,
      features: [
        { text: "GROOM SIDE: Engagement Day - 1 Still + 1 Video Camera", included: true },
        { text: "GROOM SIDE: Wedding Eve - 1 Still + 1 Video Camera", included: true },
        { text: "GROOM SIDE: Wedding Day - 1 Still + 1 Video Camera", included: true },
        { text: "BRIDE SIDE: Engagement Day - 1 Still + 1 Video Camera", included: true },
        { text: "BRIDE SIDE: Wedding Eve - 1 Still + 1 Video Camera", included: true },
        { text: "BRIDE SIDE: Wedding Day - 1 Still + 1 Video Camera", included: true },
        { text: "TWO 50 leaf (100 leaf total) HD Albums with Special leaf", included: true },
        { text: "Extra Leaf: ₹650 each", included: true },
        { text: "Table top calendar, Photo Frame, Mini Book", included: true },
        { text: "HD Video Highlights & Full Length Videos", included: true },
        { text: "Free Pre-wed or Post-wed Shoot (Photo & Video)", included: true }
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
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden bg-[#f5f5f5]">
      {/* Background elements with parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-20 right-20 w-48 h-48 bg-[#fa0038] opacity-5 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-[#1a9b8b] opacity-5 rounded-full"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          style={{ opacity }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-4">Own Media Wedding Packages</h2>
          <div className="w-20 h-1 bg-[#fa0038] mx-auto"></div>
          <p className="text-[#333333] mt-4 max-w-2xl mx-auto">
            Professional photography & videography packages tailored for Hindu and Christian weddings
          </p>
        </motion.div>
        
        {/* Packages Grid */}
        <div className="flex flex-wrap justify-center gap-10 mb-12">
          {packages.map((pkg, index) => {
            const accentColor = index === 0 ? '#fa0038' : index === 1 ? '#164fa9' : '#1a9b8b';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="w-[340px] mx-6 flex flex-col"
              >
                {/* Package Card */}
                <div className="bg-white rounded-tl-[5rem] rounded-br-[5rem] shadow-lg overflow-hidden flex-1 flex flex-col"
                     style={{
                       borderTopLeftRadius: '5rem',
                       borderBottomRightRadius: '5rem',
                     }}
                >
                  {pkg.popular && (
                    <div className="py-2 text-center text-sm font-medium text-white"
                         style={{ backgroundColor: accentColor }}
                    >
                      <Star className="w-4 h-4 inline mr-2" />
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="p-6 flex flex-col flex-1">
                    {/* Title Section */}
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold mb-2"
                           style={{ color: accentColor }}
                      >
                        {pkg.title}
                      </div>
                      <div className="text-sm text-gray-600 min-h-[40px]">{pkg.subtitle}</div>
                    </div>
                    
                    {/* Price Tag with overlapping effect */}
                    <div className="relative mb-6 ml-5">
                      <div className="text-white py-2 px-6 text-right w-[calc(100%+1.5rem)] ml-auto relative"
                           style={{ backgroundColor: accentColor }}
                      >
                        <span className="text-3xl font-bold">₹{pkg.price}</span>
                        <div className="absolute w-6 h-6 right-0 top-full"
                             style={{ 
                               backgroundColor: accentColor,
                               backgroundImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.5), transparent)',
                               clipPath: 'polygon(0 0, 100% 0, 0 100%)'
                             }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Features List */}
                    <ul className="space-y-3 mb-6 flex-1 px-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} 
                            className={`flex items-start gap-2 ${featureIndex > 0 ? 'border-t border-gray-200 pt-3' : ''}`}
                        >
                          {feature.included ? (
                            <span className="text-green-500 text-lg mt-0.5">✓</span>
                          ) : (
                            <span className="text-red-500 text-lg mt-0.5">✗</span>
                          )}
                          <span className="text-gray-700 text-sm leading-relaxed">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Buttons with overlapping effect */}
                    <div className="flex flex-col gap-3 mt-4 items-center">
                      <button 
                        onClick={() => handleInstagramClick(pkg.instagram)}
                        className="bg-[#E4405F] hover:bg-[#D32D4F] text-white font-medium py-2 px-4 rounded transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2 w-52 mb-4"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.088c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.088c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                        View Portfolio
                      </button>
                      
                      <button 
                        onClick={() => handleWhatsAppClick(pkg.title, pkg.price, pkg.instagram)}
                        className="relative text-white font-bold py-3 px-8 transition-all duration-300 cursor-pointer w-52"
                        style={{ 
                          backgroundColor: accentColor,
                          backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.25))'
                        }}
                      >
                        <span className="relative z-10">Book Package</span>
                        <div className="absolute w-3 h-6 left-0 bottom-full"
                             style={{ 
                               backgroundColor: accentColor,
                               backgroundImage: 'linear-gradient(to top left, rgba(0,0,0,0.5), transparent)',
                               clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
                             }}
                        ></div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-80 w-full rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#fa0038]/20 via-[#164fa9]/10 to-[#1a9b8b]/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Capture Every Moment</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Professional wedding photography & videography that tells your love story
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-[#fa0038] mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-2xl font-bold text-[#164fa9] mb-2">500+</div>
                <div className="text-gray-600">Weddings Covered</div>
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
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Own Media?</h3>
              <p className="text-gray-600 mb-4">
                We specialize in capturing every precious moment from engagement to reception, 
                creating beautiful memories that last a lifetime with our professional team.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="text-[#fa0038] mr-2">✓</span>
                  Bride & Groom side full coverage
                </li>
                <li className="flex items-center">
                  <span className="text-[#164fa9] mr-2">✓</span>
                  HD Albums with premium quality
                </li>
                <li className="flex items-center">
                  <span className="text-[#1a9b8b] mr-2">✓</span>
                  Professional video highlights
                </li>
                <li className="flex items-center">
                  <span className="text-[#fa0038] mr-2">✓</span>
                  Free pre & post wedding shoots
                </li>
              </ul>
              
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

        {/* CSS for responsive design */}
        <style jsx>{`
          @media (max-width: 768px) {
            .w-\[320px\] {
              width: 280px;
            }
            .mx-6 {
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
          }
        `}</style>
      </div>
    </section>
  );
}