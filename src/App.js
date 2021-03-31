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
import TasksCard from './components/dashboard/Tasks/TasksCard';

const GlobalStyle = createGlobalStyle`
body {
	font-family: 'Inconsolata', monospace;
	margin: 0;
	background-color: #e5e7f0;
	height: 100vh;
	// display: grid;
	// grid-template-columns: 448px 2fr;
	// grid-template-rows: auto
}
`;

export default function App() {
	return (
		<>
			<GlobalStyle />
			<TasksCard />

			{/* <Router>
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
			</Router> */}
		</>
	);
}
