import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LandingPage from './landing-components/LandingPage';
import SignIn from './landing-components/signin';
import SignUp from './landing-components/signup';
import NavPanel from './dashboard/NavPanel';
import Dashboard from './dashboard/Dashboard';
import Schedule from './dashboard/Schedule';
import Logs from './dashboard/Logs';
// import SignIn from './landing-components/signin';

import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
const GlobalStyle = createGlobalStyle`
body {
	font-family: 'Inconsolata', monospace;
}
`;

export default function App() {
	return (
		<Router>
			<Link to='/'>Home</Link>
			<Link to='/signin'>Sign In</Link>
			<Link to='/signup'>Sign Up</Link>

			<Switch>
				<Route exact path='/'>
					<LandingPage />
				</Route>
				<Route path='/signin'>
					<SignInPage />
				</Route>
				<Route path='/signUp'>
					<SignUp />
				</Route>
				<Route path='/dashboard'>
					<Dashboard />
				</Route>
				<Route path='/schedule'>
					<Schedule />
				</Route>
				<Route path='/logs'>
					<Logs />
				</Route>
			</Switch>
		</Router>
	);
}
