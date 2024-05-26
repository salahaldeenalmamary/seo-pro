import React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';

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
      message="Install this app for a better experience"
      action={
        <Button color="secondary" size="small" onClick={handleInstallClick}>
          INSTALL
        </Button>
      }
    />
  );
};

export default InstallPrompt;
