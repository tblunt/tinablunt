
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import T from './service/translation.service';


// Initialize the app.
var app = ReactDOM.render(
	(<App />), 
	document.getElementById('app')
);

T.setOnLocaleChanged(() => app.forceUpdate());
