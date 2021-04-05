import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
	Redirect,
} from 'react-router-dom';
import styled from 'styled-components';
import validate from './validate';
import useForm from './useForm';
import SignInPage from './SignInPage';
import google from '../../images/google-logo.png';
import APIurl from '../../config';
import axios from 'axios';
import Dashboard from '../dashboard/Dashboard';

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

const TertiaryButton = styled.button`
	width: 350px;
	height: 48px;
	// border: 1px solid #111b47;
	border: 1px solid #f14336;
	border-radius: 2px;
	color: #222f65;
	// background-color: #fff;
	background-color: rgba(241, 67, 54, 0.22);
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
	text-align: center;
	// display: inline-block;
	display: block;
	margin: 24px auto;
`;

const SignUpFunc = (/*{ submitForm },*/ props) => {
	// const { handleChange, handleSubmit, values, errors } = useForm(
	// 	submitForm,
	// 	validate
	// );

	const history = useHistory();
	// let initialState = {
	// 	email: '',
	// 	password: '',
	// }

	// const [email, setEmail] = useState({email: ""})
	// const [password, setPassword] = useState({password: ""})

	// const [entry, setEntry] = useState(initialState)

	const [customerSignUp, setCustomerSignUp] = useState({
		email: '',
		password: '',
	});

	const handleNewChange = (event) => {
		setCustomerSignUp({
			...customerSignUp,
			[event.target.name]: event.target.value,
		});
	};

	const handleNewSubmit = (event) => {
		event.preventDefault();
		// console.log(event)

		axios
			.post(`${APIurl}/users/signup`, customerSignUp, {
				headers: { Accept: 'application/json' },
			})
			.then(function (response) {
				console.log(response);
				// return <Redirect to= "/Dashboard"/>
			})
			.then(() => history.push('/dashboard'))
			.catch(function (error) {
				console.log(error);
			});

		// axios
		// .post({
		// 	method: 'post',
		// 	url: `${APIurl}/users/signup`
		// })
		// 	.post(`${APIurl}/users/signup`)
		// 	.then((props) => {
		// 		// props.onAdd(entry)
		// 		// setEntry(initialState)
		// 		// history.push('/users')
		// 		console.log(props)
		// 	})
		// 	.then(console.log('you are in'))
		// 	.catch(console.error)
	};

	// axios({
	// 	method: "GET",
	// 	url: "http://localhost:8000/users",
	// 	headers: {
	// 	  "Content-Type": "application/json"
	// 	}
	//   }).then(res => {
	// 	console.log(res);
	//   })

	return (
		<>
			<SignInNav>
				<Link className='nav-tag' to='/'>
					BOAT
				</Link>
			</SignInNav>
			<SignUpContainer>
				<form
					onSubmit={/*handleSubmit*/ handleNewSubmit}
					className='form'
					noValidate>
					<HeaderOne>Sign Up</HeaderOne>
					<TertiaryButton>
						<Icon src={alert} alt='alert'></Icon>Password must be 6 characters
						or more
					</TertiaryButton>
					{/* <GrayText>or continue with email</GrayText> */}
					<Required>
						<Asterisk>*</Asterisk> indicates a required field
					</Required>

					<div className='signup-group'>
						<Label>
							<Asterisk>*</Asterisk> Email
						</Label>
						<InputStyle
							type='text'
							name='email'
							// value={email.email}
							onChange={/*handleChange*/ handleNewChange}
							className='signup-control'
							placeholder='Required'
						/>

						{/* {errors.email && <p>{errors.email}</p>} */}
					</div>

					<div className='signup-group'>
						<Label>
							<Asterisk>*</Asterisk> Password
						</Label>
						<InputStyle
							type='password'
							name='password'
							// value={password.password}
							onChange={/*handleChange*/ handleNewChange}
							className='signup-control'
							placeholder='Required'
						/>
						{/* {errors.password && <p>{errors.password}</p>} */}
					</div>

					<div className='signup-group'>
						<Label>
							<Asterisk>*</Asterisk> Confirm Password
						</Label>
						<InputStyle
							type='password'
							name='passconfirm'
							onChange={/*handleChange*/ handleNewChange}
							// value={values.passconfirm}
							className='signup-control'
							placeholder='Required'
						/>
						{/* {errors.passconfirm && <p>{errors.passconfirm}</p>} */}
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

					<PrimaryButton type='submit' className='btn'>
						Sign Up
					</PrimaryButton>

					<div className='new-member'>
						{/* <Router> */}
						Already have an account <Link to='/signin'>Sign In</Link>
						{/* <Switch>
								<Route path='/signin'>
									<SignInPage />
								</Route>
							</Switch>
						</Router> */}
					</div>
				</form>
			</SignUpContainer>
		</>
	);
};

export default SignUpFunc;
