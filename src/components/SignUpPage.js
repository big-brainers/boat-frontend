import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import UseForm from '../landing-components/UseForm';
import SignUpFunc from './SignUpFunc';
import SignInPage from './SignInPage';

const SignInNav = styled.nav`
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
			<SignInNav>
				<a className='nav-tag' href=''>
					BOAT
				</a>
			</SignInNav>
			<div>
				{!isSubmitted ? (
					<SignUpFunc submitSignUp={submitSignUp} />
				) : (
					<SignInPage />
				)}
			</div>
		</Fragment>
	);
}

export default SignUpPage;
