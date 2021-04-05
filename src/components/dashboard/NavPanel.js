import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import pie from '../../images/pie-blue.png';
import sheet from '../../images/sheet-blue.png';
import schedule from '../../images/schedule-blue.png';
import avatar from '../../images/avatar-white.png';
import user from '../../images/user.png';

const DashboardNavStyle = styled.nav`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 auto;
	padding-top: 24px;
	width: 256px;
	height: 95vh;
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

const FlexDiv = styled.div``;

const Icon = styled.img`
	height: 20px;
	width: 20px;
	padding: ${(props) => props.padding || '8px 16px 8px 8px'};
	margin: ${(props) => props.margin || '0 0 0 32px'};
`;

const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({ activeClassName })`
	font-family: 'Inconsolata', monospace;
	margin: 0 auto;
	height: 48px;
	width: 248px;
	grid-column: ${(props) => props.column || '1'};
	background-color: #fff;
	color: #767676;
	height: 48px;
	display: flex;
	justify-content: left;
	align-items: center;
	font-size: 1rem;
	font-weight: 500;
	text-decoration: none;
	border: none;

	&.bottom {
		height: 72px;
		display: inline-flex;
		justify-content: center;
		border: ${(props) => props.border || '1px solid #b0b8bc'};
	}

	&.${activeClassName} {
		background-color: #929ecc;
		color: #37447e;
		font-weight: 700;
		border-left: 2px inset #222f65;
	}
`;

function TopLinks() {
	return (
		<div>
			<StyledLink to='/dashboard'>
				<Icon src={pie} alt='dashboard overview'></Icon>Dashboard
			</StyledLink>
			{/* <StyledLink to='/schedule'>
				<Icon src={schedule} alt='schedule'></Icon>Schedule
			</StyledLink> */}
			<StyledLink to='/logs'>
				<Icon src={sheet} alt='logs'></Icon>Logs
			</StyledLink>
		</div>
	);
}

function BottomLinks() {
	return (
		<div>
			<StyledLink className='bottom' to='/welcome'>
				<Icon
					padding='8px 8px 8px 0'
					margin='0 0 0 8px'
					src={user}
					alt='user'></Icon>
			</StyledLink>

			<StyledLink className='bottom' border='none' exact to='/'>
				Sign Out
			</StyledLink>
		</div>
	);
}

const NavPanel = () => {
	return (
		<DashboardNavStyle>
			<FlexDiv>
				<a href='/welcome' className='nav-tag'>
					BOAT
				</a>
				<TopLinks />
			</FlexDiv>
			<BottomLinks />
		</DashboardNavStyle>
	);
};

export default NavPanel;
