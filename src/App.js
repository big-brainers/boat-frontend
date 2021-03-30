import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Home from './landing-components/home'
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
            <Home />
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