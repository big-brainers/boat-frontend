import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import LandingPage from './components/landing/LandingPage';
import SignInPage from './components/landing/SignInPage';
import SignUpPage from './components/landing/SignUpPage';
import NavPanel from './components/dashboard/NavPanel';
import Dashboard from './components/dashboard/Dashboard';
import Schedule from './components/dashboard/Schedule';
import Logs from './components/dashboard/Logs';
import Overview from './components/dashboard/Overview';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import LandingPage from './landing-components/LandingPage';
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
<<<<<<< HEAD
		<>
			<Router>
				<Link to='/'>Home</Link>
				<Link to='/signin'>Sign In</Link>
				<Link to='/signup'>Sign Up</Link>

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
			<Welcome />
		</>
=======
		<Router>
			<Link to='/'>Home</Link>
			<Link to='/signin'>Sign In</Link>
			<Link to='/signup'>Sign Up</Link>

			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/signin'>
					<SignInPage />
				</Route>
				<Route path='/signUp'>
					<SignUp />
				</Route>
			</Switch>
		</Router>
>>>>>>> 187d3cb... style sign in page
	);
}
