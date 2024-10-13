import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorker.js');
  });

  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();

    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    // Show the install button
    const installButton = document.getElementById('installButton');
    installButton.style.display = 'block';
    installButton.addEventListener('click', () => {
      // Show the install prompt
      deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        deferredPrompt = null;
        // Hide the install button
        installButton.style.display = 'none';
      });
    });
  });
}

const root = createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);


