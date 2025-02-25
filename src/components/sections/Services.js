"use client";

import React from 'react';
import { FaUserCog, FaChartLine, FaGraduationCap, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import Button from '../ui/Button';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaUserCog className="text-5xl text-primary mb-4" />,
      title: 'Account Management',
      description: 'Let our expert traders manage your forex account with proven strategies for consistent growth and managed risk.',
    },
    {
      id: 2,
      icon: <FaChartLine className="text-5xl text-primary mb-4" />,
      title: 'Free Gold Signals',
      description: 'Receive daily gold trading signals with clear entry/exit points and stop loss levels to maximize your profits.',
    },
    {
      id: 3,
      icon: <FaGraduationCap className="text-5xl text-primary mb-4" />,
      title: 'Mentorship Classes',
      description: 'Learn forex trading from experienced professionals through our comprehensive mentorship program.',
    },
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-primary">Our Services</h2>
          <p className="text-xl text-gray-600">
            Pips Vision provides premium forex trading services designed to help you succeed in the markets.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button 
                  href={`https://wa.me/254796280700?text=I'm interested in your ${service.title} service`}
                  variant="outline"
                  className="mt-auto"
                  external
                >
                  Inquire Now <FaArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-primary p-6 rounded-lg shadow-lg">
            <p className="text-white text-xl font-medium mb-4">
              Join our WhatsApp group for daily signals and updates
            </p>
            <Button 
              href="https://chat.whatsapp.com/G30ASx0P4qm3v1u2cy1FG6" 
              variant="accent"
              className="text-white"
              external
            >
              <FaWhatsapp className="mr-2" /> Join WhatsApp Group
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;