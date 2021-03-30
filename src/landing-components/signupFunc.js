import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom"
import validate from './validate'
import useForm from './useForm'
import SignIn from './signin'

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import validate from './validate';
import useForm from './UseForm';
import SignIn from './signin';




const SignupFunc = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    )

    return (
        <>
			<div className='Nav'>
				<h1>BOAT</h1>
			</div>
		<div className='signup'>
			<form onSubmit={handleSubmit} className='form' noValidate>
                <h3>Sign Up</h3>
				<h5>Continue With GOOGLE</h5>
				<h6>or continue with email</h6>

                <div className="signup-group">
                    <label>Email</label>
                    <input type="email" name='email' value={values.email} onChange={handleChange} className="signup-control" placeholder="Email" />
					{errors.email && <p>{errors.email}</p>}
				</div>

                <div className="signup-group">
                    <label>Password</label>
                    <input type="password" name='password' value={values.password} onChange={handleChange} className="signup-control" placeholder="Password" />
					{errors.password && <p>{errors.password}</p>}
				</div>

				<div className="signup-group">
                    <label>Confirm Password</label>
                    <input type="password" name='passconfirm' onChange={handleChange} value={values.passconfirm} className="signup-control" placeholder="Confirm Password" />
					{errors.passconfirm && <p>{errors.passconfirm}</p>}
				</div>

				<div className="signup-group">
                    <div className="checkbox">
                        <input type="checkbox" className="control-input" id="customCheck" />
                        <label className="control-label" htmlFor="customCheck">I accept our Terms of Service and Privacy Policy</label>
					</div>
                </div>

                <button type="submit" className="btn">Sign Up</button>

                <div className="new-member">
                     <Router>
						Already have an account <Link to='/singIn'>Sign In</Link>
						<Switch>
							<Route path="/signIn">
								<SignIn />
							</Route>
						</Switch>
					 </Router>
                </div>
            </form>
		</div>
		</>
    )
}

export default SignupFunc