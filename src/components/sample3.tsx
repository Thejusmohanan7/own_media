'use client';

import React, { useState } from 'react';

const WeddingGallery: React.FC = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const weddingImages = [
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "First Kiss"
    },
    {
      src: "/img1.JPG",
      title: "Bridal Portrait"
    },
    {
      src: "/img2.JPG",
      title: "Ceremony Moments"
    },
    {
      src: "/img3.jpg",
      title: "Reception Joy"
    },
    {
      src: "https://images.unsplash.com/photo-1445452916036-9022dfd33aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      title: "Dance Floor"
    },
    {
      src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      title: "Romantic Sunset"
    }
  ];

  const handleImageClick = (src: string) => {
    if (fullscreenImage === src) {
      setFullscreenImage(null);
    } else {
      setFullscreenImage(src);
    }
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50 md:flex md:items-center md:justify-center p-4 md:p-10">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-serif font-light text-rose-800 mb-4">
              Wedding Moments
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Capturing timeless memories of love and celebration
            </p>
          </div>

          {/* Mobile View - Column Layout */}
          <div className="sm:hidden space-y-4 bg-black p-4 rounded-lg">
            {weddingImages.map((image, index) => (
              <div
                key={index}
                className="w-full relative group cursor-pointer rounded-lg overflow-hidden shadow-lg bg-white"
                onClick={() => handleImageClick(image.src)}
              >
                <div className="w-full h-64 relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="text-center">
                      <span className="text-lg font-medium">
                        {image.title}
                      </span>
                      <div className="mt-1">
                        <span className="text-sm text-rose-200">Tap to view →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Sliding Layout */}
          <div 
            className="hidden sm:flex flex-col sm:flex-row items-center justify-center w-full mx-auto overflow-hidden gap-2 md:gap-4"
            style={{ transform: 'skewX(3deg)' }}
          >
            {weddingImages.map((image, index) => (
              <div
                key={index}
                className="w-full sm:flex-1 min-w-0 transition-all duration-1000 ease-in-out h-48 sm:h-64 md:h-96 lg:h-[500px] relative group hover:flex-[8] sm:hover:flex-[8] cursor-pointer rounded-lg md:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl"
                onClick={() => handleImageClick(image.src)}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-all duration-1000 ease-in-out brightness-90 group-hover:brightness-100 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white transform transition-all duration-500 ease-in-out">
                    <div className="text-center">
                      <span className="text-sm md:text-base font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        {image.title}
                      </span>
                      <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                        <span className="text-xs md:text-sm text-rose-200">View Photo →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Instructions */}
          <div className="sm:hidden text-center mt-6">
            <p className="text-gray-600 text-sm">
              Tap on any image to view full screen
            </p>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={handleCloseFullscreen}
        >
          <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
            <img
              src={fullscreenImage}
              alt="Fullscreen wedding"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white bg-rose-600 hover:bg-rose-700 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110"
              onClick={handleCloseFullscreen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image Info in Fullscreen */}
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-lg font-light">
                {weddingImages.find(img => img.src === fullscreenImage)?.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeddingGallery;