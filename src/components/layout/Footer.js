"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container section py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pips Vision</h3>
            <p className="mb-4">
              Professional forex trading services including account management, 
              free gold signals, and mentorship classes.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://wa.me/254796280700" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-light"
              >
                <FaWhatsapp size={24} />
              </a>
              <a 
                href="mailto:cardendante@gmail.com" 
                className="text-white hover:text-accent-light"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-accent-light flex items-center">
                  <FaArrowRight className="mr-2 text-sm" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent-light flex items-center">
                  <FaArrowRight className="mr-2 text-sm" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent-light flex items-center">
                  <FaArrowRight className="mr-2 text-sm" /> Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-light flex items-center">
                  <FaArrowRight className="mr-2 text-sm" /> Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaWhatsapp className="mr-2 mt-1" />
                <div>
                  <p className="font-bold">WhatsApp</p>
                  <a 
                    href="https://wa.me/254796280700" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent-light"
                  >
                    +254796280700
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="mr-2 mt-1" />
                <div>
                  <p className="font-bold">Email</p>
                  <a 
                    href="mailto:cardendante@gmail.com" 
                    className="hover:text-accent-light"
                  >
                    cardendante@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p>&copy; {currentYear} Pips Vision. All rights reserved.</p>
            
            <div className="mt-4 md:mt-0 flex items-center">
              <span className="text-sm text-blue-200 mr-2">Powered by</span>
              <a 
                href="https://www.chach-a.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <div className="flex items-center">
                  <span className="text-accent-light font-semibold">Chacha</span>
                  <span className="text-white font-semibold">Technologies</span>
                </div>
              </a>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-sm hover:text-accent-light">
                Privacy Policy
              </Link>{' '}
              |{' '}
              <Link href="/terms-of-service" className="text-sm hover:text-accent-light">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;