import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignUp from '../landing-components/signin';
import styled from 'styled-components';

import google from '../images/google-logo.png';

const SignInNav = styled.nav`
	height: 72px;
	font-size: 3rem;

	.nav-tag {
		color: #222f65;
		font-weight: 700;
		text-decoration: none;
	}
`;

const HeaderOne = styled.h1`
	font-size: 3rem;
`;

const SignUpContainer = styled.div`
	margin: 0 auto;
	text-align: center;
`;

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

const TertiaryButton = styled.button`
	width: 350px;
	height: 48px;
	border: 1px solid #111b47;
	border-radius: 2px;
	color: #222f65;
	background-color: #fff;
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
	margin-bottom: 24px;
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

function SignInPage() {
	return (
		<>
			<SignInNav>
				<a className='nav-tag' href=''>
					BOAT
				</a>
			</SignInNav>

			<SignUpContainer>
				<form>
					<HeaderOne>Welcome Back!</HeaderOne>
					<TertiaryButton>
						<Icon src={google} alt='google logo'></Icon>Continue with Google
					</TertiaryButton>
					<GrayText>or continue with email</GrayText>

					<div className='form-group'>
						<Label>Email</Label>
						<InputStyle
							type='email'
							className='form-control'
							placeholder='Email'
						/>
					</div>

					<div className='form-group'>
						<Label>Password</Label>
						<InputStyle
							type='password'
							className='form-control'
							placeholder='Password'
						/>
					</div>

					<PrimaryButton type='submit' className='btn'>
						Log In
					</PrimaryButton>

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
			</SignUpContainer>
		</>
	);
}

export default SignInPage;
