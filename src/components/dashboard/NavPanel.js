import { Link } from 'react-router-dom';
import pie from '../../images/pie-gray.png';
import sheet from '../../images/sheet-gray.png';
import styled from 'styled-components';
import calender from '../../images/schedule.png';

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
		<NavBox>
			<boath1>BOAT</boath1>

			<LinksNavBar>
				<img src={pie} alt='' />
				<Link className='link' to='/dashboard'>
					Dashboard
				</Link>
			</LinksNavBar>

			<LinksNavBar>
				<img src={calender} alt='' />
				<Link className='link' to='/schedule'>
					Schedule
				</Link>
			</LinksNavBar>

			<LinksNavBar>
				<img src={sheet} alt='' />
				<Link className='link' to='/logs'>
					Logs
				</Link>
			</LinksNavBar>

			<ProfileNav>
				<p>profile</p>
			</ProfileNav>

			<div>
				{/* Another div for the link to sign out which should take you 
                back to the homepage and disconnect you from the database */}
			</div>
		</NavBox>
	);
};

export default NavPanel;
