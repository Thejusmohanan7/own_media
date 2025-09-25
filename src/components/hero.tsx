// components/HeroSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sample data - replace with your actual video and images
  const heroContent = [
    {
      type: 'video',
      src: '/video.mp4',
      quote: "Love is composed of a single soul inhabiting two bodies.",
      author: "Aristotle"
    },
    {
      type: 'image',
      src: '/hero1.jpg',
      quote: "The best thing to hold onto in life is each other.",
      author: "Audrey Hepburn"
    },
    {
      type: 'image',
      src: '/hero2.JPG',
      quote: "A successful marriage requires falling in love many times, always with the same person.",
      author: "Mignon McLaughlin"
    },
    {
      type: 'image',
      src: '/hero3.jpg',
      quote: "Where there is love there is life.",
      author: "Mahatma Gandhi"
    }
  ];

  // Handle automatic slideshow
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 20000); // Change slide every 20 seconds

    return () => clearTimeout(timer);
  }, [currentSlide, isPlaying, heroContent.length]);

  // Handle video ended event
  const handleVideoEnd = () => {
    setCurrentSlide(1); // Move to first image after video
  };

  // Navigate to specific slide
  const goToSlide = (index: number) => {
    setIsPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsPlaying(true), 3000);
  };

  // Navigate to next/previous slide
  const nextSlide = () => {
    setIsPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    setTimeout(() => setIsPlaying(true), 3000);
  };

  const prevSlide = () => {
    setIsPlaying(false);
    setCurrentSlide((prev) => (prev === 0 ? heroContent.length - 1 : prev - 1));
    setTimeout(() => setIsPlaying(true), 3000);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden -top-16">
      {/* Video/Image background */}
      <div className="relative h-full w-full">
        {heroContent.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {item.type === 'video' ? (
              <video
                ref={index === 0 ? videoRef : null}
                autoPlay
                muted
                loop={currentSlide === 0}
                onEnded={currentSlide === 0 ? handleVideoEnd : undefined}
                className="w-full h-full object-cover"
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={item.src}
                alt={`Wedding image ${index}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
            
            {/* Quote text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <div className="max-w-4xl transform transition-all duration-1000">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light mb-6">
                  {item.quote}
                </h2>
                <p className="text-xl md:text-2xl opacity-90">- {item.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 p-2"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 p-2"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Play/Pause button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-8 right-8 text-white/80 hover:text-white transition-colors z-10 p-2"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isPlaying ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          )}
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;