'use client';

import React, { useState } from 'react';

const Sample3: React.FC = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const cats = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg",
      title: "Plotting Cat"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg",
      title: "Angry Cat"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG",
      title: "Curious Cat"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg",
      title: "Prowling Cat"
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg",
      title: "Sleepy Cat"
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
      <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-10">
        <div 
          className="flex flex-col sm:flex-row items-center justify-center w-full max-w-7xl mx-auto overflow-hidden gap-2 md:gap-4"
          style={{ transform: 'skewX(5deg)' }}
        >
          {cats.map((cat, index) => (
            <div
              key={index}
              className="w-full sm:flex-1 min-w-0 transition-all duration-1000 ease-in-out h-40 sm:h-64 md:h-96 relative group hover:flex-[10] sm:hover:flex-[10] cursor-pointer"
              onClick={() => handleImageClick(cat.src)}
            >
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={cat.src}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-all duration-1000 ease-in-out grayscale group-hover:grayscale-0"
                />
                <div 
                  className="absolute bottom-0 left-0 text-black bg-pink-500/75 px-2 py-1 md:px-3 md:py-2 transition-all duration-500 ease-in-out w-full text-center whitespace-nowrap text-xs md:text-sm"
                  style={{ 
                    transform: 'sm:rotate(-90deg)',
                    transformOrigin: '0% 100%'
                  }}
                >
                  <span className="group-hover:hidden">{cat.title}</span>
                  <span 
                    className="hidden group-hover:inline-block text-white text-lg md:text-xl"
                    style={{ transform: 'skewX(-5deg)' }}
                  >
                    {cat.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={handleCloseFullscreen}
        >
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            <img
              src={fullscreenImage}
              alt="Fullscreen cat"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-pink-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-pink-600 transition-colors"
              onClick={handleCloseFullscreen}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sample3;