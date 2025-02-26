// src/app/about/page.js
import React from 'react';
import AboutContent from './AboutContent';

export const metadata = {
  title: 'About Us - Pips Vision Forex Trading',
  description: 'Learn about Pips Vision, our forex trading expertise, mission, values, and journey to become a trusted name in the forex market.',
  keywords: 'forex trading company, forex expertise, forex mission, forex values, forex team, forex journey, trading history, forex trading strategies, forex market analysis, forex education, forex trading tools, forex investment, forex signals, forex trading community, forex trading success, forex trading resources',

  openGraph: {
    title: 'About Pips Vision - Our Forex Trading Mission & Values',
    description: 'Learn about Pips Vision, our forex trading expertise, mission, values, and journey to become a trusted name in the forex market.',
    url: 'https://pipsvision.ahancha.com/about',
    siteName: 'Pips Vision',
    images: [
      {
        url: '/images/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pips Vision Team and Mission',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Pips Vision - Our Forex Trading Mission & Values',
    description: 'Learn about Pips Vision, our forex trading expertise, mission, values, and journey.',
    images: ['/images/about-twitter-image.jpg'],
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
    canonical: 'https://pipsvision.ahancha.com/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
