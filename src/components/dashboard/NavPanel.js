import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import pie from '../../images/pie-blue.png';
import sheet from '../../images/sheet-blue.png';
import schedule from '../../images/schedule-blue.png';
import avatar from '../../images/avatar-white.png';

const DashboardNavStyle = styled.nav`
	display: grid;
	grid-template-rows: repeat(20, 56px);
	margin: 0 auto;
	padding-top: 24px;
	width: 256px;
	height: 100vh;
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
	grid-row: ${(props) => props.row || '1'};

	&.bottom {
		height: 88px;
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

const NavPanel = () => {
	return (
		<DashboardNavStyle>
			<a className='nav-tag'>BOAT</a>

			<StyledLink row='2' to='/dashboard'>
				<Icon src={pie} alt='dashboard overview'></Icon>Dashboard
			</StyledLink>
			<StyledLink row='3' to='/schedule'>
				<Icon src={schedule} alt='schedule'></Icon>Schedule
			</StyledLink>
			<StyledLink row='4' to='/logs'>
				<Icon src={sheet} alt='logs'></Icon>Logs
			</StyledLink>

			<StyledLink className='bottom' row='16' to='/user'>
				<Icon
					padding='8px 8px 8px 0'
					margin='0 0 0 8px'
					src={avatar}
					alt='user'></Icon>
				bessie@email.com
			</StyledLink>
			<StyledLink className='bottom' border='none' row='18' exact to='/'>
				Sign Out
			</StyledLink>
		</DashboardNavStyle>
	);
};

export default NavPanel;
