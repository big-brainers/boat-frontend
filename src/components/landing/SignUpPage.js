import React, { useState, Fragment } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import styled from 'styled-components';
import SignUpFunc from './SignUpFunc';
import SignInPage from './SignInPage';

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

function SignUpPage(props) {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitSignUp() {
		setIsSubmitted(true);
	}

	return (
		<Fragment>
			{/* <SignInNav>
				<Link className='nav-tag' to='/'>
					BOAT
				</Link>
			</SignInNav> */}
			<div>
				{/* {!isSubmitted ? (
					<SignUpFunc submitSignUp={submitSignUp} />
				) : (
					<SignInPage />
				)} */}
				{!isSubmitted ? (
					// <SignUpFunc handleSubmit={submitSignUp} />
					<SignUpFunc handleNewSubmit={submitSignUp} />
				) : (
					<SignInPage />
				)}
			</div>
		</Fragment>
	);
}

export default SignUpPage;
