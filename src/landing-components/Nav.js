import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
	background-color: #f2f2f2;
	color: #222f65;
	height: 70px;
	padding-bottom: 45px;
`;

// const SecondaryButton = styled.secondaryButton`
//   color: #111b47;
//   border-radius: 2px;
// `;

// const PrimaryButton = styled.primaryButton`
//   background: #111b47;
//   border-radius: 2px;
//   color: FFFFFF;
// `;

const Nav = () => {
	return (
		<div>
			{/* //having issues with styled components */}
			<NavBar>
				<h2> BOAT </h2>
				{/* <button onClick="">Sign In </button>
        <button onClick="">Sign Up </button> */}
				{/* <Route path='/signIn'>
					<SignIn />
				</Route>
				<Route path='/signUp'>
					<SignUp />
				</Route> */}
			</NavBar>
		</div>
	);
};

export default Nav;
