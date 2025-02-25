"use client";

import React from 'react';
import { FaWhatsapp, FaEnvelope, FaUserAlt, FaCommentAlt, FaPhone, FaCheck } from 'react-icons/fa';
import Button from '../../components/ui/Button';

export default function ContactContent() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    alert("Form submitted! In a real application, this would send your message to Pips Vision.");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              We're here to answer your questions and help you get started
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaWhatsapp size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">WhatsApp</h3>
              <p className="text-gray-600 mb-6">
                Direct messaging for quick responses to your inquiries.
              </p>
              <Button 
                href="https://wa.me/254796280700" 
                variant="primary"
                external
              >
                Chat on WhatsApp
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaEnvelope size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-gray-600 mb-6">
                Send us a detailed message about your trading needs.
              </p>
              <Button 
                href="mailto:contact@pipsvision.com" 
                variant="primary"
                external
              >
                Email Us
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCommentAlt size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4">WhatsApp Group</h3>
              <p className="text-gray-600 mb-6">
                Join our community for daily signals and discussions.
              </p>
              <Button 
                href="https://chat.whatsapp.com/your-group-link" 
                variant="accent"
                external
              >
                Join Group
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6 text-primary">Send Us a Message</h2>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
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
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service of Interest</label>
                  <select
                    id="service"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="account">Account Management</option>
                    <option value="signals">Gold Signals</option>
                    <option value="mentorship">Mentorship Program</option>
                    <option value="other">Other</option>
                  </select>
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
            
            {/* FAQ */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 text-primary">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">How quickly will you respond?</h3>
                  <p className="text-gray-700">
                    We typically respond to all inquiries within 24 hours. For the fastest response, we recommend using WhatsApp.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">What information should I include in my message?</h3>
                  <p className="text-gray-700">
                    To help us assist you better, please include:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-start">
                      <FaCheck className="text-accent mt-1 mr-2" />
                      <span>Which service you're interested in</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-accent mt-1 mr-2" />
                      <span>Your trading experience level</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-accent mt-1 mr-2" />
                      <span>Any specific questions you have</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-accent mt-1 mr-2" />
                      <span>Your time zone (for scheduling discussions)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Are your services available internationally?</h3>
                  <p className="text-gray-700">
                    Yes, we serve clients worldwide. Our team can communicate in English, and our services are accessible regardless of your location.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Do you offer custom packages?</h3>
                  <p className="text-gray-700">
                    Yes, we can create customized solutions based on your specific needs and goals. Contact us to discuss your requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4 text-primary">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Hear from traders who have worked with Pips Vision
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                "The gold signals from Pips Vision have been incredibly accurate. Their risk management advice has transformed my trading approach."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                  JD
                </div>
                <div>
                  <p className="font-semibold">John D.</p>
                  <p className="text-gray-500 text-sm">Client since 2021</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                "The mentorship program gave me the structure and guidance I needed. I'm now trading confidently on my own with consistent profits."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-3">
                  SM
                </div>
                <div>
                  <p className="font-semibold">Sarah M.</p>
                  <p className="text-gray-500 text-sm">Client since 2020</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                "Having my account professionally managed by Pips Vision has been stress-free and profitable. Their transparency is refreshing."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                  RK
                </div>
                <div>
                  <p className="font-semibold">Robert K.</p>
                  <p className="text-gray-500 text-sm">Client since 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}