import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { stateManager } from './stateManager';
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

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={stateManager}>
    			<App />
			</Provider>
    	</BrowserRouter>
  	</React.StrictMode>,
  	document.getElementById('root')
);


