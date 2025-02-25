import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title = 'Pips Vision - Forex Trading Services' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Pips Vision offers professional forex trading services including account management, free gold signals, and mentorship classes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;