"use client";

import React from 'react';
import { FaWhatsapp, FaEnvelope, FaUserAlt, FaCommentAlt } from 'react-icons/fa';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4 text-primary">Contact Us</h2>
          <p className="text-xl text-gray-600">
            Have questions about our services? Reach out to us directly via WhatsApp or email.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact options */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="bg-primary text-white p-4 rounded-lg mr-4">
                <FaWhatsapp size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-2">Quick responses within 24 hours</p>
                <Button 
                  href="https://wa.me/254796280700" 
                  variant="primary"
                  className="mt-2"
                  external
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="bg-primary text-white p-4 rounded-lg mr-4">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600 mb-2">Send us a detailed inquiry</p>
                <Button 
                  href="mailto:cardendante@gmail.com" 
                  variant="primary"
                  className="mt-2"
                  external
                >
                  Send Email
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="bg-accent text-white p-4 rounded-lg mr-4">
                <FaCommentAlt size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp Group</h3>
                <p className="text-gray-600 mb-2">Join our community for daily signals and discussions</p>
                <Button 
                  href="https://chat.whatsapp.com/G30ASx0P4qm3v1u2cy1FG6" 
                  variant="accent"
                  className="mt-2"
                  external
                >
                  Join Group
                </Button>
              </div>
            </div>
          </div>
          
          {/* Simple contact form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUserAlt className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                className="w-full"
              >
                Send Message
              </Button>
              
              <p className="text-sm text-gray-500 mt-4">
                By submitting this form, you agree to our privacy policy. We'll never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;