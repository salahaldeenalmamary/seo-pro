import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" href="/logo.png" />
        <title>SEO Salah </title>
        
        {/* Description */}
        <meta name="description" content="Improve your SEO and boost your business growth quickly with SEO Salah. Get advanced tools and innovative techniques for maximum online marketing effectiveness." />
        
        {/* Keywords */}
        <meta name="keywords" content="SEO, search engine optimization, marketing, online marketing, digital marketing, SEO tools" />
        
        {/* Author */}
        <meta name="author" content="Salah Aldeen" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
