// src/app/layout.js
import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Script from 'next/script';
import ClarityScript from './components/ClarityScript'


// Font configuration
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const viewport = {
  colorScheme: 'light',
};

export const metadata = {
  metadataBase: new URL('https://www.pipsvision.com'),
  title: {
    default: 'Pips Vision - Forex Trading Services',
    template: '%s | Pips Vision',
  },
  description: 'Professional forex trading services including account management, free gold signals, and mentorship classes.',
  keywords: ['forex trading', 'account management', 'gold signals', 'forex mentorship', 'trading education'],
  authors: [{ name: 'Pips Vision Team' }],
  creator: 'Pips Vision',
  publisher: 'Pips Vision',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.pipsvision.com',
    siteName: 'Pips Vision',
    title: 'Pips Vision - Forex Trading Services',
    description: 'Professional forex trading services including account management, free gold signals, and mentorship classes.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pips Vision',
      },
    ],
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
  // icons: {
  //   icon: [
  //     { url: '/favicon.ico' },
  //     { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
  //     { url: '/favicon.svg', type: 'image/svg+xml' },
  //   ],
  //   apple: [
  //     { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  //   ],
  //   shortcut: [
  //     { url: '/favicon.ico' },
  //   ],
  // },
  // manifest: '/site.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: 'Pips Vision - Forex Trading Services',
    description: 'Professional forex trading services including account management, free gold signals, and mentorship classes.',
    creator: '@pipsvision',
    images: ['/images/twitter-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://www.pipsvision.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex flex-col min-h-screen">
      <ClarityScript />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        
        {/* Structured Data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Pips Vision',
              url: 'https://www.pipsvision.com',
              logo: 'https://www.pipsvision.com/logo.png',
              sameAs: [
                'https://twitter.com/pipsvision',
                'https://www.facebook.com/pipsvision',
                'https://www.instagram.com/pipsvision'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+254796280700',
                contactType: 'customer service',
                availableLanguage: ['English'],
              },
              description: 'Professional forex trading services including account management, free gold signals, and mentorship classes.'
            })
          }}
        />
      </body>
    </html>
  );
}