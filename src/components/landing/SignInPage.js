import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import APIurl from '../../config';
import axios from 'axios';

const SignInNav = styled.nav`
	margin: 0 auto;
	padding: 16px 24px;
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
	const history = useHistory();

	const [customerSignIn, setCustomerSignIn] = useState({
		email: '',
		password: '',
	});

	const handleChange = (event) => {
		setCustomerSignIn({
			...customerSignIn,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${APIurl}/users/signin`, customerSignIn, {
				headers: { Accept: 'application/json' },
			})
			.then(function (response) {
				console.log(response);
			})
			.then(() => history.push('/welcome'))
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<>
			<SignInNav>
				<Link className='nav-tag' to='/'>
					BOAT
				</Link>
			</SignInNav>

			<SignUpContainer>
				<form onSubmit={handleSubmit}>
					<HeaderOne>Welcome Back!</HeaderOne>
					<div className='form-group'>
						<Label>Email</Label>
						<InputStyle
							type='text'
							value={customerSignIn.email}
							name='email'
							className='form-control'
							placeholder='Email'
							onChange={handleChange}
						/>
					</div>

					<div className='form-group'>
						<Label>Password</Label>
						<InputStyle
							type='password'
							name='password'
							value={customerSignIn.password}
							className='form-control'
							placeholder='Password'
							onChange={handleChange}
						/>
					</div>

					<PrimaryButton type='submit' className='btn'>
						Log In
					</PrimaryButton>

					<div className='new-member'>
						Not yet a crew member? <Link to='/signup'>Sign Up</Link>
					</div>
				</form>
			</SignUpContainer>
		</>
	);
}

export default SignInPage;
