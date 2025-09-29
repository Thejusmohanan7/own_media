// components/Sample4.tsx
'use client';

import React, { useEffect } from 'react';

const Sample4: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const imageElements = document.querySelectorAll('.gallery-image');
    imageElements.forEach((el) => observer.observe(el));

    return () => {
      imageElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50 py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-light text-rose-900 mb-4">
          Wedding Gallery
        </h1>
        <p className="text-lg text-rose-700 max-w-2xl mx-auto font-light">
          Capturing timeless moments of love and celebration
        </p>
        <div className="w-24 h-0.5 bg-rose-300 mx-auto mt-6"></div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 p-4 max-w-7xl mx-auto">
        {/* Column 1 */}
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-lg transform transition-all duration-500 opacity-0 translate-y-8 gallery-image">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center transition-all duration-700 hover:scale-110 hover:rotate-1 cursor-pointer"
              src="/h1.JPG"
              alt="Bride preparing for wedding ceremony"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
              <p className="text-white text-sm font-light">Bride Preparation</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg transform transition-all duration-500 opacity-0 translate-y-8 gallery-image delay-100">
            <div className="relative">
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center transition-all duration-700 hover:scale-110 hover:rotate-1 cursor-pointer"
                src="/v1.JPG"
                alt="Wedding bouquet details"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
                <p className="text-white text-sm font-light">Bridal Bouquet</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg transform transition-all duration-500 opacity-0 translate-y-8 gallery-image delay-200">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center transition-all duration-700 hover:scale-110 hover:-rotate-1 cursor-pointer"
              src="/h2.JPG"
              alt="Romantic wedding moment"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
              <p className="text-white text-sm font-light">Romantic Moment</p>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-lg transform transition-all duration-500 opacity-0 translate-y-8 gallery-image delay-150">
            <div className="relative">
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center transition-all duration-700 hover:scale-110 hover:-rotate-1 cursor-pointer"
                src="/v2.JPG"
                alt="Wedding ceremony"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
                <p className="text-white text-sm font-light">Ceremony</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg transform transition-all duration-500 opacity-0 translate-y-8 gallery-image delay-250">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center transition-all duration-700 hover:scale-110 hover:rotate-1 cursor-pointer"
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="Wedding rings"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
              <p className="text-white text-sm font-light">Wedding Rings</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg transform transition-all duration-500 opacity-0 translate-y-8 gallery-image delay-300">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center transition-all duration-700 hover:scale-110 hover:-rotate-1 cursor-pointer"
              src="/h3.JPG"
              alt="Wedding couple portrait"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
              <p className="text-white text-sm font-light">Couple Portrait</p>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-lg transform transition-all duration-500 opacity-0 translate-y-8 gallery-image delay-200">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center transition-all duration-700 hover:scale-110 hover:rotate-1 cursor-pointer"
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80"
              alt="Wedding venue"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
              <p className="text-white text-sm font-light">Venue Details</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg transform transition-all duration-500 opacity-0 translate-y-8 gallery-image delay-350">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center transition-all duration-700 hover:scale-110 hover:-rotate-1 cursor-pointer"
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="Wedding celebration"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
              <p className="text-white text-sm font-light">Celebration</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg transform transition-all duration-500 opacity-0 translate-y-8 gallery-image delay-400">
            <div className="relative">
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center transition-all duration-700 hover:scale-110 hover:rotate-1 cursor-pointer"
                src="/v3.JPG"
                alt="Wedding vows"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
                <p className="text-white text-sm font-light">Vows</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-lg transform transition-all duration-500 opacity-0 translate-y-8 gallery-image delay-300">
            <div className="relative">
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center transition-all duration-700 hover:scale-110 hover:-rotate-1 cursor-pointer"
                src="/v4.JPG"
                alt="Bride and groom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
                <p className="text-white text-sm font-light">Newlyweds</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg transform transition-all duration-500 opacity-0 translate-y-8 gallery-image delay-450">
            <img
              className="h-auto max-w-full rounded-lg object-cover object-center transition-all duration-700 hover:scale-110 hover:rotate-1 cursor-pointer"
              src="/v5.JPG"
              alt="Wedding decorations"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
              <p className="text-white text-sm font-light">Decorations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-12">
        <p className="text-rose-600 font-light italic">
          "Every love story is beautiful, but yours is our favorite to capture."
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Sample4;