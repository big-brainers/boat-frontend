import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import validate from './validate';
import UseForm from './UseForm';
import SignInPage from './SignInPage';
<<<<<<< HEAD
=======
<<<<<<<< HEAD:src/components/SignUpFunc.js
========
>>>>>>> 3bf4c9d... consolidate merges, style landing, set up routes for landing pages
import google from '../../images/google-logo.png';

const HeaderOne = styled.h1`
	font-size: 3rem;
`;
<<<<<<< HEAD
=======
>>>>>>>> 3bf4c9d... consolidate merges, style landing, set up routes for landing pages:src/components/landing/signupFunc.js
>>>>>>> 3bf4c9d... consolidate merges, style landing, set up routes for landing pages

const SignUpContainer = styled.div`
	margin: 0 auto;
	text-align: center;
`;

<<<<<<< HEAD
const PrimaryButton = styled.button`
	width: 350px;
	height: 48px;
	background-color: #111b47;
	color: #fff;
	font-size: 1.2rem;
	border-radius: 2px;
	margin: 0 auto;
	font-family: 'Inconsolata', monospace;
	margin: 24px 0;
`;

=======
>>>>>>> 3bf4c9d... consolidate merges, style landing, set up routes for landing pages
const TertiaryButton = styled.button`
	width: 350px;
	height: 48px;
	border: 1px solid #111b47;
	border-radius: 2px;
	color: #222f65;
	background-color: #fff;
<<<<<<< HEAD
	margin: 0 auto;
	font-family: 'Inconsolata', monospace;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

const Icon = styled.img`
	height: 20px;
	width: 20px;
	padding: 8px;
`;

const GrayText = styled.p`
	color: #767676;
`;

const Label = styled.label`
	color: #767676;
	margin: 0 auto;
	text-align: left;
	display: flex;
	width: 344px;
`;

const InputStyle = styled.input`
	width: 344px;
	height: 48px;
	border: none;
	border-bottom: 1px solid #b0b8bc;
	font-family: 'Inconsolata', monospace;
	font-size: 1rem;
	margin-bottom: 24px;
`;

const Asterisk = styled.span`
	color: red;
	font-weight: 800;
`;

const Required = styled.div`
	font-size: 1rem;
	text-align: left;
	display: inline-block;
	margin: 24px 0;
=======
	font-family: 'Inconsolata', monospace;
>>>>>>> 3bf4c9d... consolidate merges, style landing, set up routes for landing pages
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
<<<<<<< HEAD
					<HeaderOne>Sign Up</HeaderOne>
					<TertiaryButton>
						<Icon src={google} alt='google logo'></Icon>Continue with Google
					</TertiaryButton>
					<GrayText>or continue with email</GrayText>
					<Required>
						<Asterisk>*</Asterisk> indicates a required field
					</Required>

					<div className='signup-group'>
						<Label>
							<Asterisk>*</Asterisk> Email
						</Label>
						<InputStyle
=======
					<h1>Sign Up</h1>
					<TertiaryButton>Continue with Google</TertiaryButton>
					<h6>or continue with email</h6>

					<div className='signup-group'>
						<label>Email</label>
						<input
>>>>>>> 3bf4c9d... consolidate merges, style landing, set up routes for landing pages
							type='email'
							name='email'
							value={values.email}
							onChange={handleChange}
							className='signup-control'
<<<<<<< HEAD
							placeholder='Required'
						/>

=======
							placeholder='Email'
						/>
>>>>>>> 3bf4c9d... consolidate merges, style landing, set up routes for landing pages
						{errors.email && <p>{errors.email}</p>}
					</div>

					<div className='signup-group'>
<<<<<<< HEAD
						<Label>
							<Asterisk>*</Asterisk> Password
						</Label>
						<InputStyle
=======
						<label>Password</label>
						<input
>>>>>>> 3bf4c9d... consolidate merges, style landing, set up routes for landing pages
							type='password'
							name='password'
							value={values.password}
							onChange={handleChange}
							className='signup-control'
<<<<<<< HEAD
							placeholder='Required'
						/>

=======
							placeholder='Password'
						/>
>>>>>>> 3bf4c9d... consolidate merges, style landing, set up routes for landing pages
						{errors.password && <p>{errors.password}</p>}
					</div>

					<div className='signup-group'>
<<<<<<< HEAD
						<Label>
							<Asterisk>*</Asterisk> Confirm Password
						</Label>
						<InputStyle
=======
						<label>Confirm Password</label>
						<input
>>>>>>> 3bf4c9d... consolidate merges, style landing, set up routes for landing pages
							type='password'
							name='passconfirm'
							onChange={handleChange}
							value={values.passconfirm}
							className='signup-control'
<<<<<<< HEAD
							placeholder='Required'
=======
							placeholder='Confirm Password'
>>>>>>> 3bf4c9d... consolidate merges, style landing, set up routes for landing pages
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

<<<<<<< HEAD
					<PrimaryButton type='submit' className='btn'>
						Sign Up
					</PrimaryButton>
=======
					<button type='submit' className='btn'>
						Sign Up
					</button>
>>>>>>> 3bf4c9d... consolidate merges, style landing, set up routes for landing pages

					<div className='new-member'>
						<Router>
							Already have an account <Link to='/signin'>Sign In</Link>
							<Switch>
								<Route path='/signin'>
									<SignInPage />
								</Route>
							</Switch>
						</Router>
					</div>
				</form>
			</SignUpContainer>
		</>
	);
};

<<<<<<< HEAD
export default SignUpFunc;
=======
export default SignUpFunc;
>>>>>>> 3bf4c9d... consolidate merges, style landing, set up routes for landing pages
