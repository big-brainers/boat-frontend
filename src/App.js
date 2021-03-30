import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import LandingPage from './components/landing/LandingPage';
import SignInPage from './components/landing/SignInPage';
import SignUpPage from './components/landing/SignUpPage';
import NavPanel from './dashboard/NavPanel';
import Dashboard from './dashboard/Dashboard';
import Schedule from './dashboard/Schedule';
import Logs from './dashboard/Logs';

<<<<<<< HEAD
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
				</Switch>
			</Router>
		</>
	);
}
=======
import LandingPage from './landing-components/LandingPage';
import SignIn from './landing-components/signin';
import SignUp from './landing-components/signup';

export default function App() {
  return (
  <Router>
    <Link to='/'>Home</Link>
    <Link to='/signIn'>SignIn</Link>
    <Link to='/signUp'>SignUp</Link>

    <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
      </Switch>
  </Router>
  )
}
>>>>>>> c497d1d... set up landing page, nav, images folder added >
