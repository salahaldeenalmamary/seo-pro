import Head from 'next/head';
import { Suspense } from 'react';
import { circularProgressClasses } from '@mui/material';

import '@/styles/globals.css';

// Define metadata
const Metadata = {
  manifest: '/manifest.json',
  // Add other metadata properties as needed
};

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-50 text-black">
      <Head>
        {/* Add metadata */}
        <link rel="manifest" href={Metadata.manifest} />
        <title>SEO Salah - Your SEO Solution</title>
        
        {/* Description */}
        <meta name="description" content="Improve your SEO and boost your business growth quickly with SEO Salah. Get advanced tools and innovative techniques for maximum online marketing effectiveness." />
        
        {/* Keywords */}
        <meta name="keywords" content="SEO, search engine optimization, marketing, online marketing, digital marketing, SEO tools" />
        
        {/* Author */}
        <meta name="author" content="Salah Aldeen" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Suspense fallback={<circularProgressClasses />}>
        <Component {...pageProps} />
      </Suspense>
    </div>
  );
}
