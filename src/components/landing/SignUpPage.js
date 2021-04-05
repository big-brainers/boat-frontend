import React, { useState, Fragment } from 'react';
import SignUpFunc from './SignUpFunc';
import SignInPage from './SignInPage';

function SignUpPage(props) {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitSignUp() {
		setIsSubmitted(true);
	}

	return (
		<Fragment>
			<div>
				{!isSubmitted ? (
					<SignUpFunc handleNewSubmit={submitSignUp} />
				) : (
					<SignInPage />
				)}
			</div>
		</Fragment>
	);
}

export default SignUpPage;
