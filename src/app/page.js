import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

export const metadata = {
  title: 'Pips Vision - Professional Forex Trading Services',
  description: 'Pips Vision offers professional forex trading services including account management, free gold signals, and mentorship classes.',
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