"use client";

import React from 'react';
import { FaChartLine, FaWhatsapp } from 'react-icons/fa';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-0 -left-10 w-40 h-40 md:w-64 md:h-64 rounded-full bg-accent"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-72 md:h-72 rounded-full bg-primary-light"></div>
        <div className="absolute top-40 right-20 w-20 h-20 md:w-40 md:h-40 rounded-full bg-white"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 font-bold leading-tight">
            Master Forex Trading with Pips Vision
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Professional forex trading services including account management, 
            daily gold signals, and expert mentorship.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              href="/services" 
              variant="accent" 
              className="text-lg px-8 py-4"
            >
              <FaChartLine className="mr-2" /> Our Services
            </Button>
            
            <Button 
              href="https://wa.me/yourphonenumber" 
              variant="outline" 
              className="text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-primary"
              external
            >
              <FaWhatsapp className="mr-2" /> Contact Us
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <h3 className="text-2xl font-bold text-accent-light mb-1">10+</h3>
              <p className="text-blue-100">Years Experience</p>
            </div>
            
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <h3 className="text-2xl font-bold text-accent-light mb-1">1000+</h3>
              <p className="text-blue-100">Satisfied Clients</p>
            </div>
            
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <h3 className="text-2xl font-bold text-accent-light mb-1">Daily</h3>
              <p className="text-blue-100">Market Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;