import Head from 'next/head';
import {  Suspense, useEffect, useState } from 'react';
import { circularProgressClasses } from '@mui/material';
import InstallPrompt from '@/components/ui/InstallPrompt';
import '@/styles/globals.css';

// Define metadata
const Metadata = {
  manifest: '/manifest.json',
  // Add other metadata properties as needed
};

export default function App({ Component, pageProps }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  return (
    <div className="bg-gray-50 text-black">
      <Suspense fallback={<circularProgressClasses />}>
        <Component {...pageProps} />
      </Suspense>
      {deferredPrompt && <InstallPrompt deferredPrompt={deferredPrompt} />}
    </div>
  );
}

