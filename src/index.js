import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { stateManager } from './stateManager';
import App from './App';

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

