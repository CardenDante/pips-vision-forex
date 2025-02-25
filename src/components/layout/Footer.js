"use client";

import React from 'react';
import Link from 'next/link';
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
                href="https://wa.me/yourphonenumber" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent-light"
              >
                <FaWhatsapp size={24} />
              </a>
              <a 
                href="mailto:contact@pipsvision.com" 
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
                    href="https://wa.me/yourphonenumber" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent-light"
                  >
                    +1234567890
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="mr-2 mt-1" />
                <div>
                  <p className="font-bold">Email</p>
                  <a 
                    href="mailto:contact@pipsvision.com" 
                    className="hover:text-accent-light"
                  >
                    contact@pipsvision.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Pips Vision. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy-policy" className="hover:text-accent-light">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="/terms-of-service" className="hover:text-accent-light">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;