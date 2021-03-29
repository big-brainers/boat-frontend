import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
=======

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> 9870d19... remove extraneous files for heroku build
