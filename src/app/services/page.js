// src/app/services/page.js
import React from 'react';
import ServicesContent from './ServicesContent';

export const metadata = {
  title: 'Our Services - Pips Vision Forex Trading',
  description: 'Explore our professional forex trading services: account management, gold signals, and mentorship programs designed for traders of all experience levels.',
  keywords: 'forex account management, gold trading signals, forex mentorship, trading education, forex signals, forex trading programs, managed forex accounts',
  openGraph: {
    title: 'Forex Trading Services - Account Management, Signals & Mentorship',
    description: 'Explore our professional forex trading services: account management, gold signals, and mentorship programs.',
    url: 'https://www.pipsvision.com/services',
    siteName: 'Pips Vision',
    images: [
      {
        url: '/images/services-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pips Vision Forex Trading Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forex Trading Services - Account Management, Signals & Mentorship',
    description: 'Professional forex trading services to help you succeed in the markets.',
    images: ['/images/services-twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.pipsvision.com/services',
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}