import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import validate from '../landing-components/validate';
import UseForm from '../landing-components/UseForm';
import SignIn from '../landing-components/signin';

const SignUpContainer = styled.div`
	margin: 0 auto;
	text-align: center;
`;

const TertiaryButton = styled.button`
	width: 350px;
	height: 48px;
	border: 1px solid #111b47;
	border-radius: 2px;
	color: #222f65;
	background-color: #fff;
	font-family: 'Inconsolata', monospace;
`;

const SignUpFunc = ({ submitForm }) => {
	const { handleChange, handleSubmit, values, errors } = UseForm(
		submitForm,
		validate
	);

	return (
		<>
			<SignUpContainer>
				<form onSubmit={handleSubmit} className='form' noValidate>
					<h1>Sign Up</h1>
					<TertiaryButton>Continue with Google</TertiaryButton>
					<h6>or continue with email</h6>

					<div className='signup-group'>
						<label>Email</label>
						<input
							type='email'
							name='email'
							value={values.email}
							onChange={handleChange}
							className='signup-control'
							placeholder='Email'
						/>
						{errors.email && <p>{errors.email}</p>}
					</div>

					<div className='signup-group'>
						<label>Password</label>
						<input
							type='password'
							name='password'
							value={values.password}
							onChange={handleChange}
							className='signup-control'
							placeholder='Password'
						/>
						{errors.password && <p>{errors.password}</p>}
					</div>

					<div className='signup-group'>
						<label>Confirm Password</label>
						<input
							type='password'
							name='passconfirm'
							onChange={handleChange}
							value={values.passconfirm}
							className='signup-control'
							placeholder='Confirm Password'
						/>
						{errors.passconfirm && <p>{errors.passconfirm}</p>}
					</div>

					<div className='signup-group'>
						<div className='checkbox'>
							<input
								type='checkbox'
								className='control-input'
								id='customCheck'
							/>
							<label className='control-label' htmlFor='customCheck'>
								I accept our Terms of Service and Privacy Policy
							</label>
						</div>
					</div>

					<button type='submit' className='btn'>
						Sign Up
					</button>

					<div className='new-member'>
						<Router>
							Already have an account <Link to='/signIn'>Sign In</Link>
							<Switch>
								<Route path='/signIn'>
									<SignIn />
								</Route>
							</Switch>
						</Router>
					</div>
				</form>
			</SignUpContainer>
		</>
	);
};

export default SignUpFunc;
