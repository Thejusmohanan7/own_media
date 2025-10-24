// components/Portfolio.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values for parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const y4 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const y5 = useTransform(scrollYProgress, [0, 1], ['0%', '-55%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
  
  // Portfolio items data with reliable image URLs
  const portfolioItems = [
    {
      id: 1,
      title: "Sarah & Michael",
      category: "wedding",
      image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Elegant vineyard wedding in Napa Valley"
    },
    {
      id: 2,
      title: "Jessica & David",
      category: "engagement",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Sunset engagement session at the beach"
    },
    {
      id: 3,
      title: "Amanda & Ryan",
      category: "wedding",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Intimate garden wedding ceremony"
    },
    {
      id: 4,
      title: "Lauren & James",
      category: "portrait",
      image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Bridal portrait session in the studio"
    },
    {
      id: 5,
      title: "Emily & Christopher",
      category: "wedding",
      image: "https://images.unsplash.com/photo-1549439602-43ebca2327af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Grand ballroom wedding reception"
    },
    {
      id: 6,
      title: "Nicole & Brandon",
      category: "engagement",
      image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Urban engagement session downtown"
    },
    {
      id: 7,
      title: "Olivia & William",
      category: "portrait",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description: "Couple's portrait session in the park"
    },
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-16 md:py-24 px-4 bg-[#FAF9F7] overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C1A35F] rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#232122] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#E5C97F] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Photography-themed decorative shapes - More visible version */}
      <motion.div 
        className="absolute top-20 left-10 opacity-20 pointer-events-none z-0"
        style={{ y: y1 }}
      >
        <svg width="140" height="140" viewBox="0 0 100 100" className="text-[#C1A35F]">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="50" y1="5" x2="50" y2="25" stroke="currentColor" strokeWidth="2.5" />
          <line x1="50" y1="75" x2="50" y2="95" stroke="currentColor" strokeWidth="2.5" />
          <line x1="5" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="2.5" />
          <line x1="75" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="2.5" />
          <path d="M35,35 L40,40 M65,35 L60,40 M35,65 L40,60 M65,65 L60,60" stroke="currentColor" strokeWidth="2" />
        </svg>
      </motion.div>

      <motion.div 
        className="absolute top-40 right-16 opacity-20 pointer-events-none z-0"
        style={{ y: y2, rotate }}
      >
        <svg width="160" height="100" viewBox="0 0 100 60" className="text-[#232122]">
          <rect x="5" y="5" width="90" height="50" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="15" y="10" width="20" height="15" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="40" y="10" width="20" height="15" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="65" y="10" width="20" height="15" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="15" y="30" width="20" height="15" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="40" y="30" width="20" height="15" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="65" y="30" width="20" height="15" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="8" cy="8" r="2.5" fill="currentColor" />
          <circle cx="8" cy="52" r="2.5" fill="currentColor" />
          <circle cx="92" cy="8" r="2.5" fill="currentColor" />
          <circle cx="92" cy="52" r="2.5" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div 
        className="absolute bottom-40 left-20 opacity-20 pointer-events-none z-0"
        style={{ y: y3 }}
      >
        <svg width="120" height="120" viewBox="0 0 100 100" className="text-[#C1A35F]">
          <path d="M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10 Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="7" fill="currentColor" />
          <path d="M65,35 L75,25" stroke="currentColor" strokeWidth="2.5" />
          <path d="M65,35 L55,45" stroke="currentColor" strokeWidth="2.5" />
          <path d="M35,35 L25,25" stroke="currentColor" strokeWidth="2.5" />
          <path d="M35,35 L45,45" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      </motion.div>

      <motion.div 
        className="absolute bottom-60 right-1/4 opacity-20 pointer-events-none z-0"
        style={{ y: y4, rotate: rotate }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-[#232122]">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M30,30 L70,70" stroke="currentColor" strokeWidth="2.5" />
          <path d="M70,30 L30,70" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div 
        className="absolute top-1/2 left-1/4 opacity-15 pointer-events-none z-0"
        style={{ y: y5 }}
      >
        <svg width="160" height="160" viewBox="0 0 100 100" className="text-[#E5C97F]">
          <path d="M20,20 L80,20 L80,80 L20,80 Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="7" fill="currentColor" />
          <rect x="35" y="35" width="30" height="30" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="30" cy="30" r="3" fill="currentColor" />
          <circle cx="70" cy="30" r="3" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Additional shapes for better coverage */}
      <motion.div 
        className="absolute top-1/3 left-1/2 opacity-15 pointer-events-none z-0"
        style={{ y: y2, rotate: rotate }}
      >
        <svg width="130" height="130" viewBox="0 0 100 100" className="text-[#C1A35F]">
          <path d="M20,50 Q50,10 80,50 Q50,90 20,50 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div 
        className="absolute bottom-20 right-20 opacity-15 pointer-events-none z-0"
        style={{ y: y3, rotate: rotate }}
      >
        <svg width="110" height="110" viewBox="0 0 100 100" className="text-[#232122]">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M35,35 L45,45 M65,35 L55,45 M35,65 L45,55 M65,65 L55,55" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header with elegant underline */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-light text-[#232122] mb-6">
            Our Portfolio
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-[#C1A35F] mx-auto relative">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#C1A35F] rounded-full"></div>
            </div>
          </div>
          <p className="text-[#7D6E5B] mt-4 max-w-2xl mx-auto font-light">
            Browse through our recent work and get inspired for your special day
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            { id: 'all', label: 'All' },
            { id: 'wedding', label: 'Weddings' },
            { id: 'engagement', label: 'Engagements' },
            { id: 'portrait', label: 'Portraits' }
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-sm text-sm md:text-base font-light transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#232122] text-white'
                  : 'bg-white text-[#232122] hover:bg-[#232122] hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9dfKZwSR6IwmCQp9M9HXaUc4O2uCVzUyw7WgucscISdHHW0mMlCrOkeL//2Q=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-playfair font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm font-light">{item.description}</p>
                  <button className="mt-4 text-white text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    View full gallery
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16 pt-12 border-t border-[#E5E0D6]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-2xl md:text-3xl font-playfair font-light text-[#232122] mb-6">
            Love What You See?
          </h3>
          <p className="text-[#5A5248] max-w-2xl mx-auto mb-8 font-light">
            Let&apos;s create beautiful memories for your special day. Contact us to discuss your vision.
          </p>
          <motion.button
            className="group relative bg-[#232122] hover:bg-[#C1A35F] text-white font-light py-3 md:py-4 px-8 md:px-10 rounded-sm transition-all duration-500 transform hover:-translate-y-1 shadow-md hover:shadow-xl text-sm md:text-base tracking-wide overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
           <Link href={'/contact'}> <span className="relative z-10">Schedule a Consultation</span></Link>
            <div className="absolute inset-0 bg-gradient-to-r from-[#C1A35F] to-[#E5C97F] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.button>
        </motion.div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
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

export default Portfolio;