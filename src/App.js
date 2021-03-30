import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

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