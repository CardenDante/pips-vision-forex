"use client";

import React from 'react';
import { FaCheck } from 'react-icons/fa';
import Button from '../ui/Button';

const About = () => {
  const whyChooseUs = [
    'Experienced traders with proven track record',
    'Transparent communication and results',
    'Personalized approach to every client',
    'Educational focus to help you learn and grow',
    'Consistent performance in various market conditions',
    'Responsive support via WhatsApp',
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About content */}
          <div>
            <h2 className="mb-6 text-primary">About Pips Vision</h2>
            <p className="text-lg text-gray-700 mb-6">
              Pips Vision was founded with a clear mission: to provide honest, 
              professional, and effective forex trading services to clients worldwide.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our team consists of experienced traders who have navigated the forex 
              markets through various economic cycles and market conditions. We combine 
              technical analysis, fundamental insights, and risk management to deliver 
              consistent results for our clients.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Whether you're looking for managed account services, reliable trading signals, 
              or comprehensive mentorship, Pips Vision is your trusted partner in the 
              forex market journey.
            </p>
            
            <Button href="/about" variant="primary">
              Learn More About Us
            </Button>
          </div>
          
          {/* Why choose us */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Why Choose Us</h3>
            
            <ul className="space-y-4">
              {whyChooseUs.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-accent text-white p-1 rounded-full mr-3 mt-1">
                    <FaCheck />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-primary/10 rounded-lg">
              <p className="text-primary font-medium">
                "Our primary goal is to help our clients achieve consistent profits while 
                learning the skills needed for long-term success in the forex market."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;