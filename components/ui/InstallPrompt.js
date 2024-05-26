import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Box, Typography } from '@mui/material';
import Image from 'next/image'; // Assuming you're using next/image for optimized images

const InstallPrompt = ({ deferredPrompt }) => {
  const [open, setOpen] = useState(true);

  const handleInstallClick = () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      setOpen(false);
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={
        <Box display="flex" alignItems="center">
          <Image src="/logo.png" alt="App Logo" width={24} height={24} />
          <Typography variant="body1" ml={1}>
            Install this app for a better experience
          </Typography>
        </Box>
      }
      action={
        <Button color="secondary" size="small" onClick={handleInstallClick}>
          INSTALL
        </Button>
      }
    />
  );
};

export default InstallPrompt;
