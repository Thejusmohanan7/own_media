"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { Calendar, Camera, Heart, Sparkles, Clock, Users, BookOpen, Palette } from "lucide-react";

export default function WeddingExperience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  const experiences = [
    {
      phase: "01",
      title: "Dream & Design",
      icon: <Palette className="w-8 h-8" />,
      description: "We begin by understanding your vision and crafting a unique concept that reflects your love story.",
      highlights: [
        "Personalized theme development",
        "Mood board creation",
        "Venue selection assistance",
        "Color palette curation"
      ],
      color: "from-slate-50 to-blue-50",
      accent: "slate"
    },
    {
      phase: "02",
      title: "Capture & Create",
      icon: <Camera className="w-8 h-8" />,
      description: "Our creative team captures every authentic moment, turning emotions into timeless memories.",
      highlights: [
        "Candid storytelling photography",
        "Cinematic video documentation",
        "Natural light mastery",
        "Emotional moment preservation"
      ],
      color: "from-emerald-50 to-teal-50",
      accent: "emerald"
    },
    {
      phase: "03",
      title: "Story & Narrative",
      icon: <BookOpen className="w-8 h-8" />,
      description: "We weave your moments into a cohesive narrative that tells your unique love story.",
      highlights: [
        "Personal love story documentation",
        "Custom storytelling approach",
        "Memory preservation techniques",
        "Multi-generational legacy creation"
      ],
      color: "from-violet-50 to-purple-50",
      accent: "violet"
    }
  ];

  const principles = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Emotion First",
      description: "We prioritize capturing genuine emotions over posed perfection."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timeless Quality",
      description: "Creating memories that remain beautiful through generations."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personal Connection",
      description: "Building relationships to understand your unique story."
    }
  ];

  const storytellingApproach = [
    {
      title: "Before the Day",
      description: "Pre-wedding consultations and planning to understand your story",
      color: "border-l-4 border-slate-400"
    },
    {
      title: "During the Day",
      description: "Unobtrusive documentation capturing authentic moments",
      color: "border-l-4 border-emerald-400"
    },
    {
      title: "After the Day",
      description: "Artistic editing and narrative creation from your memories",
      color: "border-l-4 border-violet-400"
    }
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white"
    >
      {/* Animated background elements */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-slate-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-gradient-to-tr from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/4 w-48 h-48 bg-gradient-to-bl from-violet-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234f46e5' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }}
        ></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 mb-6 border border-slate-200 shadow-sm">
            <Sparkles className="w-4 h-4" />
            The Art of Visual Storytelling
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-slate-900 mb-6 leading-tight">
            Capturing Your Love <br />
            <span className="text-slate-700">Through Timeless Narratives</span>
          </h1>
          
          <div className="w-40 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-8"></div>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            We transform wedding moments into lifelong stories. Through creative vision, 
            emotional sensitivity, and artistic craftsmanship, we document your journey 
            in a way that feels authentic and timeless.
          </p>
        </motion.div>

        {/* Experience Journey */}
        <div className="relative mb-24">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 via-slate-400 to-slate-200 transform -translate-x-1/2 hidden lg:block"></div>
          
          {/* Experience Cards */}
          <div className="space-y-16 lg:space-y-24">
            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={experience.phase}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className={`relative group ${
                    isEven ? "lg:pr-1/2 lg:pl-8" : "lg:pl-1/2 lg:pr-8 lg:text-right"
                  }`}
                >
                  {/* Phase indicator on timeline */}
                  <div className={`absolute left-1/2 top-8 transform -translate-x-1/2 z-20 hidden lg:block ${
                    isEven ? "lg:translate-x-1/2" : "lg:-translate-x-1/2"
                  }`}>
                    <div className={`w-16 h-16 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-xl font-bold ${
                      experience.accent === "slate" ? "bg-slate-100 text-slate-700" :
                      experience.accent === "emerald" ? "bg-emerald-100 text-emerald-700" :
                      "bg-violet-100 text-violet-700"
                    }`}>
                      {experience.phase}
                    </div>
                  </div>
                  
                  {/* Experience Card */}
                  <div className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                    isEven ? "lg:mr-8" : "lg:ml-8"
                  }`}>
                    <div className={`p-1 bg-gradient-to-r ${
                      experience.accent === "slate" ? "from-slate-400 to-blue-400" :
                      experience.accent === "emerald" ? "from-emerald-400 to-teal-400" :
                      "from-violet-400 to-purple-400"
                    }`}>
                      <div className="bg-white p-8 lg:p-10">
                        {/* Header */}
                        <div className={`flex items-start gap-6 mb-8 ${
                          !isEven ? "lg:flex-row-reverse" : ""
                        }`}>
                          <div className={`p-4 rounded-xl ${
                            experience.accent === "slate" ? "bg-slate-50" :
                            experience.accent === "emerald" ? "bg-emerald-50" :
                            "bg-violet-50"
                          }`}>
                            <div className={
                              experience.accent === "slate" ? "text-slate-600" :
                              experience.accent === "emerald" ? "text-emerald-600" :
                              "text-violet-600"
                            }>
                              {experience.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-slate-900 mb-3">
                              {experience.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                              {experience.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Highlights */}
                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 ${
                          !isEven ? "lg:text-right" : ""
                        }`}>
                          {experience.highlights.map((highlight, i) => (
                            <div key={i} className={`flex items-center gap-3 ${
                              !isEven ? "lg:flex-row-reverse" : ""
                            }`}>
                              <div className={`w-2 h-2 rounded-full ${
                                experience.accent === "slate" ? "bg-slate-400" :
                                experience.accent === "emerald" ? "bg-emerald-400" :
                                "bg-violet-400"
                              }`}></div>
                              <span className="text-slate-700 text-sm lg:text-base">{highlight}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Decorative element */}
                        <div className="relative">
                          <div className={`h-px w-full ${
                            experience.accent === "slate" ? "bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100" :
                            experience.accent === "emerald" ? "bg-gradient-to-r from-emerald-100 via-emerald-300 to-emerald-100" :
                            "bg-gradient-to-r from-violet-100 via-violet-300 to-violet-100"
                          }`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Storytelling Approach */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-light text-slate-900 mb-4">
              Our Storytelling Approach
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A comprehensive journey from concept to cherished memories
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storytellingApproach.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full ${approach.color} pl-6`}>
                  <div className="mb-4">
                    <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
                      index === 0 ? "bg-slate-100 text-slate-700" :
                      index === 1 ? "bg-emerald-100 text-emerald-700" :
                      "bg-violet-100 text-violet-700"
                    }`}>
                      Phase {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {approach.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {approach.description}
                  </p>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <div className={`w-2 h-2 rounded-full ${
                      index === 0 ? "bg-slate-400" :
                      index === 1 ? "bg-emerald-400" :
                      "bg-violet-400"
                    }`}></div>
                    <span>Comprehensive coverage</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Creative Principles */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-serif font-light text-slate-900 mb-4">
                Creative Principles
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                The foundation of our approach to wedding storytelling
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 mb-6">
                    <div className="text-slate-700">
                      {principle.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-slate-600">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 via-slate-500/10 to-slate-600/10 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <div className="p-8 lg:p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 mb-6">
                  <Heart className="w-8 h-8 text-slate-700" />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-serif font-light text-slate-900 mb-4">
                  Ready to Document Your <span className="text-slate-700">Love Story</span>?
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Let&apos;s discuss how we can capture your unique journey with authenticity 
                  and artistry, preserving moments that will be cherished for generations.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Calendar className="w-5 h-5" />
                      Begin Your Story
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-300 hover:border-slate-400 hover:bg-slate-50">
                    View Our Portfolio
                  </button>
                </div>
                
                <p className="text-slate-500 text-sm mt-6">
                  Let&apos;s create something beautiful together
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}