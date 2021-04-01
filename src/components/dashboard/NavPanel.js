import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import pie from '../../images/pie-gray.png';
import sheet from '../../images/sheet-gray.png';
import schedule from '../../images/schedule-gray.png';

const DashboardNavStyle = styled.nav`
	margin: 0 auto;
	padding: 16px 24px;
	// display: flex;
	// flex-grow: 3;
	width: 256px;
	align-items: center;
	justify-content: space-between;
	max-height: 100vh;
	font-size: 3rem;
	background: white;
	box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
	text-align: center;
	.nav-tag {
		color: #222f65;
		font-weight: 700;
		text-decoration: none;
		display: block;
		margin: 0 auto;
		align-content: flex-start;
	}
`;

const LinkStyle = styled.button`
	font-family: 'Inconsolata', monospace;
	display: block;
	border: none
	margin: 0 auto;
	
`;

const hoverColor = '#929ECC';
const NavText = '37447E';
const LinksNavBar = styled.div`
	display: block;
	text-decoration: none;
	margin: 0 auto;
	padding: 16px;
	padding-left: 75px;
	padding-right: 0px;
	text-align: left;
	height: 48px;
	width: 181px;
	& .link {
		text-decoration: none;
		color: ${NavText};
	}
	&:hover {
		background-color: ${hoverColor};
		opacity: 0.35;
		margin: 0 auto;
	}
`;

const Logo = styled.img`
	padding-right: 20px;
`;
const Boath1 = styled.h1`
	text-align: center;
`;

const NavBox = styled.div`
	width: 256px;
	height: 1024px;

	background: white;
	box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
	text-align: center;
`;

const ProfileNav = styled.div`
	position: absolute;
	bottom: 50px;
	right: 1px;
`;

// const TaskBox = styled.

const NavPanel = () => {
	return (
		<DashboardNavStyle>
			<a className='nav-tag'>BOAT</a>
			<LinkStyle>Dashboard</LinkStyle>
		</DashboardNavStyle>

		// <NavBox>
		// 	<boath1>BOAT</boath1>

		// 	<LinksNavBar>
		// 		<img src={pie} alt='' />
		// 		<Link className='link' to='/dashboard'>
		// 			Dashboard
		// 		</Link>
		// 	</LinksNavBar>

		// 	<LinksNavBar>
		// 		<img src={schedule} alt='' />
		// 		<Link className='link' to='/schedule'>
		// 			Schedule
		// 		</Link>
		// 	</LinksNavBar>

		// 	<LinksNavBar>
		// 		<img src={sheet} alt='' />
		// 		<Link className='link' to='/logs'>
		// 			Logs
		// 		</Link>
		// 	</LinksNavBar>

		// 	<ProfileNav>
		// 		<p>profile</p>
		// 	</ProfileNav>

		// 	<div>
		// 		{/* Another div for the link to sign out which should take you
		//         back to the homepage and disconnect you from the database */}
		// 	</div>
		// </NavBox>
	);
};

export default NavPanel;
