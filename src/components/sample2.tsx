"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Sample2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-[#faf7f2] to-[#fefbf6]"
    >
      {/* Background elements with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#f3e9df] rounded-full mix-blend-multiply opacity-70 filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#fdecef] rounded-full mix-blend-multiply opacity-70 filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#e6f0f7] rounded-full mix-blend-multiply opacity-70 filter blur-xl animate-blob animation-delay-4000"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div style={{ opacity }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5a3e2b] mb-4">
            OWN MEDIA WEDDING PLANNER
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-r from-[#f9f2e8] to-[#faead9] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
              <div className="text-5xl text-[#d4af37] group-hover:text-[#c19b2e] transition-colors duration-300">
                💒
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-[#5a3e2b] mb-3">
                Complete Wedding Planning
              </h3>
              <p className="text-[#7a6a5a] mb-4">
                End-to-end coordination from concept to execution, ensuring your
                vision becomes reality.
              </p>
              <button className="text-[#d4af37] font-medium group-hover:text-white group-hover:bg-[#d4af37] px-4 py-2 rounded border border-[#d4af37] transition-all duration-300">
                Learn more
              </button>
            </div>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-r from-[#f8e8e8] to-[#fad9d9] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
              <div className="text-5xl text-[#d4af37] group-hover:text-[#c19b2e] transition-colors duration-300">
                📸
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-[#5a3e2b] mb-3">
                Photography & Videography
              </h3>
              <p className="text-[#7a6a5a] mb-4">
                Capture every precious moment with our professional photography
                and cinematic videography services.
              </p>
              <button className="text-[#d4af37] font-medium group-hover:text-white group-hover:bg-[#d4af37] px-4 py-2 rounded border border-[#d4af37] transition-all duration-300">
                Learn more
              </button>
            </div>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-r from-[#e8f0f8] to-[#d9e2fa] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
              <div className="text-5xl text-[#d4af37] group-hover:text-[#c19b2e] transition-colors duration-300">
                🌸
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-[#5a3e2b] mb-3">
                Venue & Decoration
              </h3>
              <p className="text-[#7a6a5a] mb-4">
                Transform your venue into a dream setting with our exquisite
                floral arrangements and decor.
              </p>
              <button className="text-[#d4af37] font-medium group-hover:text-white group-hover:bg-[#d4af37] px-4 py-2 rounded border border-[#d4af37] transition-all duration-300">
                Learn more
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div style={{ opacity }} className="text-center mt-16">
          <p className="text-lg text-[#7a6a5a] max-w-2xl mx-auto mb-8">
            Let us transform your vision into an unforgettable celebration. With
            meticulous attention to detail and creative expertise, we craft
            weddings that reflect your unique love story.
          </p>
          
        </motion.div>
      </div>

      <style jsx global>{`
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
        .animate-blob {
          animation: blob 7s infinite;
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
