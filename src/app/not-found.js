// src/app/not-found.js
import React from 'react';
import Link from 'next/link';
import { FaHome, FaSearch, FaEnvelope } from 'react-icons/fa';

export const metadata = {
  title: 'Page Not Found - Pips Vision',
  description: 'The page you are looking for could not be found. Explore our forex trading services, including account management, gold signals, and mentorship.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <h1 className="text-primary text-7xl font-bold mb-4">404</h1>
          <p className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</p>
          <p className="text-gray-600">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Here are some helpful links:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaHome className="text-primary text-2xl mb-2" />
              <span className="font-medium">Homepage</span>
            </Link>
            
            <Link href="/services" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaSearch className="text-primary text-2xl mb-2" />
              <span className="font-medium">Our Services</span>
            </Link>
            
            <Link href="/contact" className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <FaEnvelope className="text-primary text-2xl mb-2" />
              <span className="font-medium">Contact Us</span>
            </Link>
          </div>
        </div>
        
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}