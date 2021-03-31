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

const GlobalStyle = createGlobalStyle`
body {
	font-family: 'Inconsolata', monospace;
	margin: 0;
	height: 100vh;
	background-color: #e1effa;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2000' height='240' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23e5e7f0' stroke-width='5.8' stroke-opacity='0.37'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
}
`;

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Router>
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
					<Route to='/dashboard'>
						<Dashboard />
					</Route>
				</Switch>
			</Router>
		</>
	);
}
