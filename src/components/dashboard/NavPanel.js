import './CSS/Navpanel.css';
import { Link } from 'react-router-dom';

import pie from '../../images/pie-gray.png';
import sheet from '../../images/sheet-gray.png';
import styled from 'styled-components';

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

const logo = styled.img`
	padding-right: 20px;
`;
const boath1 = styled.h1`
	text-align: center;
`;

export default function App() {
	return (
		<div className='leftNavBox'>
			<boath1>BOAT</boath1>
			<LinksNavBar>
				<logo>
					<img src={pie} alt='' />
				</logo>
				<Link className='link' to='/dashboard'>
					Dashboard
				</Link>
			</LinksNavBar>
			<LinksNavBar>
				<Link className='link' to='/schedule'>
					Schedule
				</Link>
			</LinksNavBar>
			<LinksNavBar>
				<logo>
					<img src={sheet} alt='' />
				</logo>
				<Link className='link' to='/logs'>
					Logs
				</Link>
			</LinksNavBar>
			<h1>BOAT</h1>
			<Link to='/dashboard'>Dashboard</Link>
			<Link to='/schedule'>Schedule</Link>
			<Link to='/logs'>Logs</Link>

			{/* Each one of these titles has to be enclosed in Link tags to set up routes for them.
            They are also going to need their own components.
            Make a main area for the routes */}
			<div>
				{/* extra div for bottom of leftNavBox
                contains the profile of the user 
                has icon that allows for a pull down */}
			</div>
			<div>
				{/* Another div for the link to sign out which should take you 
                back to the homepage and disconnect you from the database */}
			</div>
		</div>
	);
}
