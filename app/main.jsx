import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render(
	<App myProp="I'm a prop value" />,
	document.body.appendChild(document.createElement('div')),
);
