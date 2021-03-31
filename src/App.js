import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavPanel from './dashboard/NavPanel';
import Dashboard from './dashboard/Dashboard';
import Schedule from './dashboard/Schedule';
import Logs from './dashboard/Logs';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import LandingPage from './components/landing/LandingPage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import Welcome from './components/Welcome';

const GlobalStyle = createGlobalStyle`
body {
	font-family: 'Inconsolata', monospace;
	margin: 0;
}
`;

export default function App() {
	return (
		<>
			<Router>
				{/* <Link to='/'>Home</Link>
				<Link to='/signin'>Sign In</Link>
				<Link to='/signup'>Sign Up</Link> */}

				<GlobalStyle />
				<Switch>
					<Route exact path='/'>
						<LandingPage />
					</Route>
					<Route path='/signin'>
						<SignInPage />
					</Route>
					<Route path='/signup'>
						<SignUpPage />
					</Route>
				</Switch>
			</Router>
			{/* <TasksCard /> */}
		</>
	);
}
