// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];


  const useImageLogo = true;
  const logoImagePath = "/logo.png";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? 'bg-[#232122] shadow-md py-2'
          : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and Brand Name - with image option */}
        <Link href="/" className="flex items-center space-x-2 z-50">
  <div className="w-16 h-16 relative rounded-full flex items-center justify-center overflow-hidden">
    {useImageLogo ? (
      <Image
        src={logoImagePath}
        alt="Own Media Logo"
        width={200}  // bigger image source
        height={200}
        className="object-cover scale-125" // scales image inside container
      />
    ) : (
      <div className="w-full h-full bg-gradient-to-r from-[#C1A35F] to-[#E5C97F] flex items-center justify-center text-white font-bold text-xl">
        OM
      </div>
    )}
  </div>
</Link>



        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-white font-medium transition-all duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C1A35F] transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/20"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Placeholder to balance the layout */}
        <div className="hidden md:block w-40"></div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-between items-center">
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-[#232122] bg-opacity-95 transition-all duration-300 flex flex-col items-center justify-center md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
          <div className="flex flex-col items-center space-y-8 text-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#C1A35F] transition-colors relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C1A35F] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;