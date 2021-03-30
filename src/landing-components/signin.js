import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignUp from './signup';

export default function SignIn() {
	return (
		<>
			<div className='Nav'>
				<h1>BOAT</h1>
			</div>
			<div className='Form'>
				<form>
					<h3>Welcome Back!</h3>
					<h5>Continue With GOOGLE</h5>
					<h6>or continue with email</h6>

					<div className='form-group'>
						<label>Email</label>
						<input type='email' className='form-control' placeholder='Email' />
					</div>

					<div className='form-group'>
						<label>Password</label>
						<input
							type='password'
							className='form-control'
							placeholder='Password'
						/>
					</div>

					<button type='submit' className='btn'>
						Log In
					</button>

					<div className='new-member'>
						<Router>
							Not yet a member? <Link to='/signUp'>Sign Up</Link>
							<Switch>
								<Route path='/signUp'>
									<SignUp />
								</Route>
							</Switch>
						</Router>
					</div>
				</form>
			</div>
		</>
	);
}