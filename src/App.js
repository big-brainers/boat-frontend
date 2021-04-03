import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import About from './components/landing/About';
import LandingPage from './components/landing/LandingPage';
import SignInPage from './components/landing/SignInPage';
import SignUpPage from './components/landing/SignUpPage';
import Dashboard from './components/dashboard/Dashboard';
import Schedule from './components/dashboard/nav-schedule/Schedule';
import LogsAll from './components/dashboard/nav-logs/LogsAll';
// import LogsOne from './components/dashboard/nav-logs/LogsOne';
import Entry from './components/dashboard/nav-logs/Entry';
import Compose from './components/dashboard/nav-logs/Compose';
import Welcome from './components/dashboard/Welcome';

const GlobalStyle = createGlobalStyle`
body {
	margin: 0;
	font-family: 'Inconsolata', monospace;
	box-sizing: border-box;
	// background-color: #e1effa; 
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2000' height='240' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23e5e7f0' stroke-width='5.8' stroke-opacity='0.37'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
}
`;

export default function App(props) {
	return (
		<>
			<Router>
				<GlobalStyle />
				<Switch>
					<Route exact path='/' render={LandingPage} />
					<Route exact path='/signin' component={SignInPage} />
					<Route exact path='/signup' component={SignUpPage} />
					<Route path='/about' render={About} />
					<Route path='/welcome' component={Welcome} />
					<Route path='/dashboard' render={Dashboard} />
					<Route path='/schedule' render={Schedule} />
					<Route exact path='/logs' component={LogsAll} />
					<Route path='/logs/:id' component={Entry} />
					<Route path='/compose' component={Compose} />
				</Switch>
			</Router>
		</>
	);
}
