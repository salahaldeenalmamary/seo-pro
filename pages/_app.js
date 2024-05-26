import '@/styles/globals.css';
import { motion } from 'framer-motion';
import { Suspense, useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import InstallPrompt from '../components/ui/InstallPrompt';

export default function App({ Component, pageProps }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      console.log('beforeinstallprompt event fired');
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  return (
    <div className="bg-gray-50 text-black">
      <Suspense fallback={<CircularProgress />}>
        <Component {...pageProps} />
      </Suspense>
      {deferredPrompt && <InstallPrompt deferredPrompt={deferredPrompt} />}
    </div>
  );
}
