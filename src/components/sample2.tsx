"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { Calendar, Camera, Flower2, CheckCircle } from "lucide-react";

export default function WeddingServices() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  const services = [
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Complete Wedding Planning",
      description: "End-to-end coordination from concept to execution, ensuring your vision becomes reality.",
      features: [
        "Timeline & budget management",
        "Vendor coordination",
        "Day-of coordination",
        "Custom theme development"
      ],
      color: "from-[#f9f2e8] to-[#faead9]",
      accent: "#d4af37"
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Photography & Videography",
      description: "Capture every precious moment with our professional photography and cinematic videography services.",
      features: [
        "10+ hours of coverage",
        "500+ edited photos",
        "Cinematic highlight film",
        "Drone aerial shots"
      ],
      color: "from-[#f8e8e8] to-[#fad9d9]",
      accent: "#d4af37"
    },
    {
      icon: <Flower2 className="w-12 h-12" />,
      title: "Venue & Decoration",
      description: "Transform your venue into a dream setting with our exquisite floral arrangements and decor.",
      features: [
        "Custom floral designs",
        "Lighting & drapery",
        "Table settings",
        "Entrance & stage decor"
      ],
      color: "from-[#e8f0f8] to-[#d9e2fa]",
      accent: "#d4af37"
    }
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-[#fef9f5] to-white"
    >
      {/* Animated background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#fdf2f2] rounded-full mix-blend-multiply opacity-60 filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#fefce8] rounded-full mix-blend-multiply opacity-60 filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-[#eff6ff] rounded-full mix-blend-multiply opacity-60 filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235a3e2b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        ></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-[#fef2f2] text-[#dc2626] rounded-full text-sm font-medium mb-4">
            Our Premium Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[#2c1810] mb-6 leading-tight">
            Crafting Unforgettable <br />
            <span className="text-[#d4af37]">Wedding Experiences</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#d4af37] via-[#e6b450] to-[#d4af37] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-[#5a524c] max-w-3xl mx-auto leading-relaxed">
            From meticulous planning to breathtaking photography, we handle every detail 
            to create your perfect day
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#f0e6d9]">
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color}`}></div>
                
                {/* Icon section */}
                <div className={`p-8 bg-gradient-to-br ${service.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%235a3e2b' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <div className="text-[#d4af37] group-hover:text-[#b8942a] transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-semibold text-[#2c1810] mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#6b6259] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                        <span className="text-[#5a524c] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action button */}
                  <div className="flex items-center justify-between">
                    <button className="group/btn relative px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#e6b450] text-white font-medium rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <span className="relative z-10">Get Quote</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#e6b450] to-[#f0c966] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <span className="text-sm text-[#8c7d6d] font-medium">
                      Starting at ₹1,50,000
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-[#2c1810] via-[#3d2417] to-[#2c1810] rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          
          <div className="relative z-10 px-8 py-12 lg:px-16 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl lg:text-4xl font-serif text-white mb-4">
                  Ready to Begin Your <span className="text-[#d4af37]">Love Story</span>?
                </h3>
                <p className="text-[#d1c7bd] text-lg mb-6">
                  Schedule a free 30-minute consultation to discuss your vision, 
                  explore packages, and receive a personalized quote.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                    <span>No obligation consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                    <span>Custom package options</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                    <span>Flexible payment plans</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#e6b450] text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-[#e6b450] hover:to-[#f0c966]">
                  <Calendar className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <p className="text-[#a39588] text-sm mt-4">
                  Limited spots available. Response within 2 hours.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.95);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}