"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, MapPin, Play, ArrowRight, Plus, Film, Settings, Lightbulb, Clock } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [activeProcess, setActiveProcess] = useState(0);
  
  // Portfolio gallery items with Unsplash images
  const portfolioItems = [
    {
      id: 1,
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500',
      title: 'Elegant Garden Wedding',
      description: 'A beautiful outdoor celebration with floral arrangements',
      location: 'Napa Valley, CA',
      date: 'June 2023'
    },
    {
      id: 2,
      category: 'engagement',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500',
      title: 'Sunset Beach Proposal',
      description: 'Romantic beach setup with custom decorations',
      location: 'Malibu, CA',
      date: 'April 2023'
    },
    {
      id: 3,
      category: 'reception',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500',
      title: 'Luxury Hotel Reception',
      description: 'Grand reception with custom lighting and centerpieces',
      location: 'Beverly Hills, CA',
      date: 'August 2023'
    },
    {
      id: 4,
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500',
      title: 'Vintage Theme Wedding',
      description: 'Classic celebration with antique decorations',
      location: 'Santa Barbara, CA',
      date: 'May 2023'
    },
    {
      id: 5,
      category: 'engagement',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500',
      title: 'Mountain Top Engagement',
      description: 'Breathtaking views for a special moment',
      location: 'Lake Tahoe, CA',
      date: 'July 2023'
    },
    {
      id: 6,
      category: 'reception',
      image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500',
      title: 'Barn Wedding Celebration',
      description: 'Rustic charm with modern elegance',
      location: 'Sonoma, CA',
      date: 'September 2023'
    }
  ];

  // Creative process steps with Unsplash images
  const processSteps = [
    {
      id: 1,
      title: "Concept & Vision",
      description: "We start by understanding your unique story and vision to create a cohesive design concept.",
      icon: Lightbulb,
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      color: "from-blue-50 to-blue-100"
    },
    {
      id: 2,
      title: "Planning & Design",
      description: "Our team meticulously plans every detail from color palettes to layout and flow of the event.",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      color: "from-amber-50 to-amber-100"
    },
    {
      id: 3,
      title: "Execution",
      description: "On the day of your event, our team brings the vision to life with precision and care.",
      icon: Film,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      color: "from-emerald-50 to-emerald-100"
    },
    {
      id: 4,
      title: "Final Touches",
      description: "We add those special finishing touches that transform your event into an unforgettable experience.",
      icon: Clock,
      image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      color: "from-purple-50 to-purple-100"
    }
  ];

  // Filter portfolio items based on active category
  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F3EF] via-white to-[#F5F3EF]">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-28 overflow-hidden mt-8">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#232122] mb-6">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-[#333333] max-w-2xl mx-auto">
              Browse through our collection of beautiful weddings and events we&apos;ve had the privilege to plan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-16 md:py-10 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-[#C1A35F]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#C1A35F]/10 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-opacity-10 rounded-full mb-6">
              <Heart className="w-8 h-8 text-[#C1A35F]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#232122] mb-4">
              Featured Work
            </h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              Each event is uniquely crafted to tell your love story
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center flex-wrap gap-3 mb-16"
          >
            {['all', 'wedding', 'engagement', 'reception'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full capitalize transition-all flex items-center gap-2 ${
                  activeCategory === category
                    ? 'bg-[#C1A35F] text-white shadow-md'
                    : 'bg-white text-[#232122] border border-[#E5E5E5] hover:border-[#C1A35F] hover:bg-[#F9F7F3]'
                }`}
              >
                {activeCategory === category && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
                {category === 'all' ? 'All Events' : category + 's'}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative overflow-hidden h-80">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center text-white/80 text-sm mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {item.location}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm mb-4">{item.description}</p>
                      <button className="flex items-center text-white text-sm font-medium">
                        View Project <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#232122] capitalize">
                    {item.category}
                  </div>
                  
                  {/* Date badge */}
                  <div className="absolute top-4 right-4 bg-[#C1A35F] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {item.date}
                  </div>
                  
                  {/* Hover expand button */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredItem === item.id ? 1 : 0,
                      scale: hoveredItem === item.id ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-14 h-14 bg-[#C1A35F] rounded-full flex items-center justify-center text-white">
                      <Plus className="w-6 h-6" />
                    </div>
                  </motion.div>
                </div>
                
                {/* Content for non-hover state */}
                <div className="p-5 group-hover:hidden">
                  <h3 className="text-lg font-serif text-[#232122] mb-2">{item.title}</h3>
                  <p className="text-[#333333] text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View More Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="inline-flex items-center px-6 py-3 border border-[#C1A35F] text-[#C1A35F] rounded-full hover:bg-[#C1A35F] hover:text-white transition-colors duration-300">
              View More Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Behind the Scenes Section (Replacing Testimonials) */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-[#C1A35F]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#C1A35F]/5 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-opacity-10 rounded-full mb-6">
              <Film className="w-8 h-8 text-[#C1A35F]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#232122] mb-4">
              Behind the Scenes
            </h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              Discover our creative process and how we bring your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Process Steps */}
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeProcess === index 
                      ? `bg-gradient-to-r ${step.color} shadow-lg scale-105` 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveProcess(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${
                      activeProcess === index ? 'bg-white text-[#C1A35F]' : 'bg-[#C1A35F] text-white'
                    }`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#232122] mb-2">{step.title}</h3>
                      <p className="text-[#333333]">{step.description}</p>
                    </div>
                    <div className="ml-auto">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        activeProcess === index 
                          ? 'border-[#C1A35F] bg-[#C1A35F] text-white' 
                          : 'border-gray-300'
                      }`}>
                        {activeProcess === index && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                            className="w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Process Visual */}
            <motion.div 
              key={activeProcess}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <div className={`aspect-video bg-gradient-to-br ${processSteps[activeProcess].color} rounded-2xl overflow-hidden relative`}>
                <Image 
                  src={processSteps[activeProcess].image} 
                  alt={processSteps[activeProcess].title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="object-cover mix-blend-multiply opacity-70"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <Play className="w-8 h-8 text-[#C1A35F] ml-1" fill="currentColor" />
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{processSteps[activeProcess].title}</h3>
                <p className="text-sm opacity-90">{processSteps[activeProcess].description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#F5F3EF] to-[#F9F7F3] relative">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#C1A35F]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-[#C1A35F]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#232122] mb-6">
              Ready to Create Your Dream Event?
            </h2>
            <p className="text-lg text-[#333333] mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your vision and start planning a day you&apos;ll remember forever
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(193, 163, 95, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#C1A35F] text-white font-medium py-4 px-10 rounded-full text-lg relative overflow-hidden group"
            >
              <Link href={'/contact'}><span className="relative z-10">Schedule a Consultation</span></Link>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#D4B87A] to-[#C1A35F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}