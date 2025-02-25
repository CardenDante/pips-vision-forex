// src/app/page.js
import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

export const metadata = {
  title: 'Pips Vision - Professional Forex Trading Services',
  description: 'Pips Vision offers expert forex trading services including account management, free gold signals, and mentorship classes for traders of all levels.',
  keywords: 'forex trading, account management, gold signals, forex mentorship, trading education, forex market, trading signals',
  openGraph: {
    title: 'Pips Vision - Professional Forex Trading Services',
    description: 'Expert forex trading services including account management, free gold signals, and mentorship classes.',
    url: 'https://www.pipsvision.com',
    siteName: 'Pips Vision',
    images: [
      {
        url: '/images/og-image.jpg',
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
    title: 'Pips Vision - Professional Forex Trading Services',
    description: 'Expert forex trading services including account management, free gold signals, and mentorship classes.',
    images: ['/images/twitter-image.jpg'],
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
    canonical: 'https://www.pipsvision.com',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
}