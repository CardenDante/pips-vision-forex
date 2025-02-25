// src/app/robots.js

export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      sitemap: 'https://www.pipsvision.com/sitemap.xml',
    };
  }
  