// app/gallery/sample5.tsx
"use client";

import { useEffect, useRef} from "react";
import Image from "next/image";
import Link from "next/link";

interface WeddingImage {
    id: number;
    src: string;
    alt: string;
    caption: string;
    date?: string;
    location?: string;
}

const WeddingGallery = () => {
    const galleryRef = useRef<HTMLDivElement>(null);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Wedding photography images with your provided filenames and romantic captions
    const weddingImages: WeddingImage[] = [
        {
            id: 1,
            src: "/gallery16.JPG",
            alt: "Bride's delicate veil flowing in the breeze",
            caption: "A whisper of silk catching the morning light",
            date: "Spring 2024",
            location: "Garden Chapel"
        },
        {
            id: 2,
            src: "/gallery15.JPG",
            alt: "First look through the window",
            caption: "Hearts meeting before eyes do",
            date: "Spring 2024",
            location: "Historic Manor"
        },
        {
            id: 3,
            src: "/gallery1.jpg",
            alt: "Bride's intricate lace details",
            caption: "Every stitch telling a story of anticipation",
            date: "Spring 2024",
            location: "Preparation Suite"
        },
        {
            id: 4,
            src: "/gallery2.jpg",
            alt: "Bouquet of wildflowers",
            caption: "Nature's confection held with trembling joy",
            date: "Spring 2024",
            location: "Floral Studio"
        },
        {
            id: 5,
            src: "/gallery3.JPG",
            alt: "Bride adjusting her gown",
            caption: "The final touch before forever begins",
            date: "Spring 2024",
            location: "Bridal Suite"
        },
        {
            id: 6,
            src: "/gallery4.JPG",
            alt: "Groom's emotional moment",
            caption: "A deep breath before the beautiful plunge",
            date: "Spring 2024",
            location: "Groom's Quarters"
        },
        {
            id: 7,
            src: "/gallery5.JPG",
            alt: "Wedding rings on rustic wood",
            caption: "Circles of promise waiting to be worn",
            date: "Spring 2024",
            location: "Ceremony Altar"
        },
        {
            id: 8,
            src: "/gallery6.JPG",
            alt: "Aisle decorated with petals",
            caption: "A floral path to destiny",
            date: "Spring 2024",
            location: "Main Aisle"
        },
        {
            id: 9,
            src: "/gallery7.JPG",
            alt: "Couple holding hands secretly",
            caption: "Fingers intertwined before the walk",
            date: "Spring 2024",
            location: "Chapel Backstage"
        },
        {
            id: 10,
            src: "/gallery8.JPG",
            alt: "Bride's teary-eyed smile",
            caption: "Tears of joy reflecting a thousand dreams",
            date: "Spring 2024",
            location: "Chapel Entrance"
        },
        {
            id: 11,
            src: "/gallery9.JPG",
            alt: "Parents emotional embrace",
            caption: "Generations of love watching love begin",
            date: "Spring 2024",
            location: "Family Seating"
        },
        {
            id: 12,
            src: "/gallery10.JPG",
            alt: "Sunset silhouette kiss",
            caption: "Two shadows becoming one against the dying light",
            date: "Spring 2024",
            location: "Beach Cliffside"
        },
        {
            id: 13,
            src: "/gallery11.jpg",
            alt: "Reception sparkler exit",
            caption: "Walking through a tunnel of stars into forever",
            date: "Spring 2024",
            location: "Venue Exit"
        },
        {
            id: 14,
            src: "/gallery12.jpg",
            alt: "Dance floor dip",
            caption: "Falling into love's rhythm without fear",
            date: "Spring 2024",
            location: "Main Dance Floor"
        },
        {
            id: 15,
            src: "/gallery13.jpg",
            alt: "Candlelit dinner table",
            caption: "Flickering flames witnessing whispered promises",
            date: "Spring 2024",
            location: "Reception Hall"
        },
        {
            id: 16,
            src: "/gallery14.JPG",
            alt: "Final farewell wave",
            caption: "Goodbye to single life, hello to shared adventures",
            date: "Spring 2024",
            location: "Getaway Car"
        }
    ];

    // Handle scroll animations
    useEffect(() => {
        const currentImageRefs = imageRefs.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in");
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        currentImageRefs.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            currentImageRefs.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <>
            <style jsx global>{`
        .wedding-gallery-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #fdf6f0 0%, #f8edeb 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        }

        /* Hero Section */
        .gallery-hero {
          height: 70vh;
          min-height: 500px;
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
            linear-gradient(45deg, #667eea, #764ba2);
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
        }

        .hero-overlay {
          text-align: center;
          color: white;
          padding: 2rem;
          max-width: 800px;
          z-index: 2;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 300;
          margin-bottom: 1rem;
          font-family: 'Georgia', serif;
          letter-spacing: 3px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 3rem;
          opacity: 0.9;
          font-weight: 300;
          font-style: italic;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 4rem;
          margin-top: 3rem;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #ffd700;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        /* Gallery Intro */
        .gallery-intro {
          text-align: center;
          padding: 5rem 2rem 3rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .gallery-intro h2 {
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
          color: #333;
          font-family: 'Georgia', serif;
          position: relative;
          display: inline-block;
        }

        .gallery-intro h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(to right, #667eea, #764ba2);
        }

        .gallery-intro p {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #666;
          margin-top: 2rem;
        }

        /* Gallery Grid */
        .vertical-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2.5rem;
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        @media (min-width: 1400px) {
          .vertical-gallery {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .gallery-item {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gallery-item.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .image-container {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .image-container:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .image-container:hover .image-wrapper img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.95);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #333;
          font-size: 1rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }

        .image-content {
          padding: 2.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          background: linear-gradient(to bottom, white, #fcf9f7);
        }

        .image-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          color: #888;
        }

        .meta-date,
        .meta-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .meta-icon {
          width: 16px;
          height: 16px;
          color: #764ba2;
        }

        .image-caption {
          margin-bottom: 2rem;
          flex-grow: 1;
          position: relative;
          padding-left: 1rem;
        }

        .image-caption::before {
          content: '"';
          position: absolute;
          left: 0;
          top: -10px;
          font-size: 4rem;
          color: #667eea;
          opacity: 0.2;
          font-family: serif;
          line-height: 1;
        }

        .image-caption p {
          font-size: 1.3rem;
          line-height: 1.7;
          color: #333;
          font-style: italic;
          font-family: 'Georgia', serif;
          position: relative;
          z-index: 1;
        }

        .image-tags {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          border-top: 1px solid #eee;
          padding-top: 1.5rem;
        }

        .tag {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 0.5rem 1.2rem;
          border-radius: 25px;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        /* CTA Section */
        .gallery-cta {
          background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
          color: white;
          padding: 6rem 2rem;
          text-align: center;
          margin-top: 5rem;
          clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          font-family: 'Georgia', serif;
          background: linear-gradient(to right, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cta-content p {
          font-size: 1.3rem;
          line-height: 1.8;
          margin-bottom: 3rem;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
          color: white;
          border: none;
          padding: 1.2rem 4rem;
          font-size: 1.2rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          letter-spacing: 1px;
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
          position: relative;
          overflow: hidden;
          display: inline-block;
          text-decoration: none;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(255, 107, 107, 0.4);
        }

        /* Scroll to top button */
        .scroll-top-btn {
          position: fixed;
          bottom: 2.5rem;
          right: 2.5rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border: none;
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 1000;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.5s ease forwards 1s;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scroll-top-btn:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
        }

        .scroll-top-btn svg {
          width: 24px;
          height: 24px;
          color: white;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .vertical-gallery {
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
            padding: 1.5rem;
          }
          
          .hero-title {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .gallery-hero {
            height: 60vh;
            min-height: 400px;
          }

          .hero-title {
            font-size: 2.8rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .hero-stats {
            gap: 2rem;
            flex-wrap: wrap;
          }

          .vertical-gallery {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 1rem;
          }

          .gallery-intro {
            padding: 4rem 1rem 2rem;
          }

          .gallery-intro h2 {
            font-size: 2.2rem;
          }

          .gallery-intro p {
            font-size: 1.1rem;
          }

          .image-wrapper {
            height: 450px;
          }

          .image-content {
            padding: 2rem;
          }

          .gallery-cta {
            padding: 4rem 1rem;
          }

          .cta-content h2 {
            font-size: 2.2rem;
          }

          .cta-content p {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .gallery-intro h2 {
            font-size: 1.8rem;
          }

          .image-wrapper {
            height: 380px;
          }

          .image-content {
            padding: 1.5rem;
          }

          .image-caption p {
            font-size: 1.1rem;
          }

          .image-meta {
            flex-direction: column;
            gap: 0.5rem;
          }

          .scroll-top-btn {
            bottom: 1.5rem;
            right: 1.5rem;
            width: 50px;
            height: 50px;
          }

          .cta-button {
            padding: 1rem 3rem;
            font-size: 1.1rem;
          }
        }

        /* Animation delays for staggered effect */
        .gallery-item:nth-child(1) { transition-delay: 0.1s; }
        .gallery-item:nth-child(2) { transition-delay: 0.15s; }
        .gallery-item:nth-child(3) { transition-delay: 0.2s; }
        .gallery-item:nth-child(4) { transition-delay: 0.25s; }
        .gallery-item:nth-child(5) { transition-delay: 0.3s; }
        .gallery-item:nth-child(6) { transition-delay: 0.35s; }
        .gallery-item:nth-child(7) { transition-delay: 0.4s; }
        .gallery-item:nth-child(8) { transition-delay: 0.45s; }
        .gallery-item:nth-child(9) { transition-delay: 0.5s; }
        .gallery-item:nth-child(10) { transition-delay: 0.55s; }
        .gallery-item:nth-child(11) { transition-delay: 0.6s; }
        .gallery-item:nth-child(12) { transition-delay: 0.65s; }
        .gallery-item:nth-child(13) { transition-delay: 0.7s; }
        .gallery-item:nth-child(14) { transition-delay: 0.75s; }
        .gallery-item:nth-child(15) { transition-delay: 0.8s; }
        .gallery-item:nth-child(16) { transition-delay: 0.85s; }

        /* Loading animation */
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .image-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.2) 50%, 
            transparent 100%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          z-index: 1;
        }

        .image-container:hover .image-wrapper::before {
          animation: none;
        }
      `}</style>

            <div className="wedding-gallery-container">
                {/* Hero Section */}
                <section className="gallery-hero">
                    <div className="hero-overlay">
                        <h1 className="hero-title">Forever Moments</h1>
                        <p className="hero-subtitle">
                            Where love stories are captured, one frame at a time
                        </p>
                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-number">∞</span>
                                <span className="stat-label">Memories Made</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Love Captured</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">1/1</span>
                                <span className="stat-label">Once in a Lifetime</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Intro */}
                <div className="gallery-intro">
                    <h2>Cherished Memories</h2>
                    <p>
                        Every photograph is a heartbeat frozen in time—a delicate balance
                        of emotion, light, and love. These are the moments that become
                        your forever story.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="vertical-gallery" ref={galleryRef}>
                    {weddingImages.map((image, index) => (
                        <div
                            key={image.id}
                            ref={(el) => { imageRefs.current[index] = el; }} className="gallery-item"
                        >
                            <div className="image-container">
                                <div className="image-wrapper">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        loading="lazy"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="image-overlay">
                                        {image.id.toString().padStart(2, "0")}
                                    </div>
                                </div>

                                <div className="image-content">
                                    <div className="image-meta">
                                        {image.date && (
                                            <span className="meta-date">
                                                <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {image.date}
                                            </span>
                                        )}
                                        {image.location && (
                                            <span className="meta-location">
                                                <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {image.location}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <section className="gallery-cta">
                    <div className="cta-content">
                        <h2>Begin Your Forever Story</h2>
                        <p>
                            Let us transform your love into timeless art.
                            Every glance, every touch, every tear of joy—captured
                            perfectly to relive for generations.
                        </p>
                        <Link href="/contact" className="cta-button">Book Your Wedding Shoot</Link>
                    </div>
                </section>                
            </div>
        </>
    );
};

export default WeddingGallery;