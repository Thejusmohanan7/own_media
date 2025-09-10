'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Lead Photographer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
      description: "With over 10 years of experience, Sarah specializes in capturing authentic moments with artistic vision.",
      social: { instagram: "#", twitter: "#", website: "#" },
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description: "Michael brings stories to life through his unique perspective and attention to detail.",
      social: { instagram: "#", twitter: "#", website: "#" },
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Photo Editor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80",
      description: "Elena's expertise in post-processing ensures every image meets our quality standards.",
      social: { instagram: "#", twitter: "#", website: "#" },
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Videographer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      description: "David specializes in cinematic wedding films that capture the emotion of your special day.",
      social: { instagram: "#", twitter: "#", website: "#" },
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 md:px-8 overflow-hidden bg-[#F5F3EF]"
    >
      {/* Background decorations */}
      <div
        className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#C1A35F] opacity-15 blur-xl"
        style={{
          transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#C08B8B] opacity-15 blur-xl"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-[#232122] opacity-10 blur-lg"
        style={{
          transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * -30}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-[#C1A35F] opacity-15 blur-lg"
        style={{
          transform: `translate(${mousePosition.x * -50}px, ${mousePosition.y * 40}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      />
      <div
        className="absolute top-1/4 right-1/3 w-16 h-16 rounded-full bg-[#C08B8B] opacity-20"
        style={{
          transform: `translate(${mousePosition.x * 80}px, ${mousePosition.y * 80}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full bg-[#232122] opacity-20"
        style={{
          transform: `translate(${mousePosition.x * -80}px, ${mousePosition.y * -80}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' ... %3E")`,
          backgroundSize: '60px 60px',
          transition: 'transform 0.5s ease-out',
        }}
      />

      {/* Team Members */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#232122] mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-[#333333] max-w-2xl mx-auto">
            Talented professionals dedicated to capturing your special moments with creativity and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative group"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg)`,
                transition: 'transform 0.5s ease-out',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className="absolute -inset-3 bg-gradient-to-r from-[#C1A35F] to-[#C08B8B] rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-all duration-300"
                style={{
                  transform: `translateZ(-10px)`,
                  filter: 'blur(12px)',
                }}
              />
              <div className="relative h-full bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-[#F5F3EF] overflow-hidden shadow-lg">
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#232122]/30 to-transparent z-10"
                    style={{
                      transform: `translateY(${mousePosition.y * 10}px)`,
                      transition: 'transform 0.3s ease-out',
                    }}
                  />
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
                    style={{
                      transform: `scale(1.02) translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)`,
                      transition: 'transform 0.5s ease-out',
                    }}
                  />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#232122] mb-1">{member.name}</h3>
                <p className="text-[#C1A35F] mb-3">{member.role}</p>
                <p className="text-[#333333] text-sm mb-4">{member.description}</p>
                {/* Social Icons */}
                <div className="flex space-x-3">
                  {/* Keep your SVGs here */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
