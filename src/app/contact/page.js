// src/app/contact/page.js
import React from 'react';
import ContactContent from './ContactContent';

export const metadata = {
  title: 'Contact Us - Pips Vision Forex Trading',
  description: 'Get in touch with Pips Vision for forex trading services. Reach us via WhatsApp, email, or our contact form for inquiries about account management, signals, or mentorship.',
  keywords: 'forex contact, forex WhatsApp, forex email, forex inquiry, forex consultation, trading support, forex questions',
  openGraph: {
    title: 'Contact Pips Vision - Get in Touch About Forex Trading Services',
    description: 'Reach us via WhatsApp, email, or contact form for inquiries about our forex trading services.',
    url: 'https://www.pipsvision.com/contact',
    siteName: 'Pips Vision',
    images: [
      {
        url: '/images/contact-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Pips Vision Forex Trading',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Pips Vision - Get in Touch About Forex Trading Services',
    description: 'Reach us via WhatsApp, email, or contact form for inquiries about our forex trading services.',
    images: ['/images/contact-twitter-image.jpg'],
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
    canonical: 'https://www.pipsvision.com/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}