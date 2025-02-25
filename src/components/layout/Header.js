"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Set initial scroll state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-primary/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className={`text-xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Pips Vision
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className={`font-medium transition-colors ${
                isScrolled 
                  ? (pathname === link.path ? 'text-primary' : 'text-gray-700 hover:text-primary') 
                  : (pathname === link.path ? 'text-white font-bold' : 'text-white/80 hover:text-white')
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/yourphonenumber" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`btn ${isScrolled ? 'btn-accent' : 'bg-accent-light hover:bg-accent text-white'} flex items-center`}
          >
            <FaWhatsapp className="mr-2" /> WhatsApp
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden focus:outline-none ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className={`font-medium py-2 transition-colors hover:text-primary ${
                  pathname === link.path ? 'text-primary' : 'text-gray-700'
                }`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/yourphonenumber" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-accent flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;