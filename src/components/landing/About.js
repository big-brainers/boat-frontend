import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import kim from '../../images/avatar-kim.png';
import susana from '../../images/avatar-susana.png';
import simi from '../../images/avatar-simi.png';
import jalen from '../../images/avatar-jalen.png';

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
	text-align: center;
`;

const Avatar = styled.figure`
	width: 280px;
	margin: 0 auto;
	margin-bottom: 24px;
	text-align: center;

	&.mobile {
		width: 180px;
	}
`;
const BrainerName = styled.a`
	padding-top: 8px;
	margin: 0 auto;
	font-size: 2rem;
	color: #222f65;
`;

const BrainerDiv = styled.section`
	display: flex;
	flex-flow: row wrap;
`;

function About(props) {
	return (
		<>
			<SignInNav>
				<Link className='nav-tag' to='/'>
					BOAT
				</Link>
			</SignInNav>
			<HeaderOne>Meet the Big Brainers</HeaderOne>
			<BrainerDiv>
				<Avatar>
					<a href='https://www.linkedin.com/in/susanacmartins/' target='blank'>
						<img src={susana} alt='susana avatar' />
					</a>
					<BrainerName href='https://github.com/5usana' target='blank'>
						Susana Martins
					</BrainerName>
				</Avatar>

				<Avatar>
					<a href='https://www.linkedin.com/in/simao-neves/' target='blank'>
						<img src={simi} alt='simi avatar' />
					</a>
					<BrainerName href='https://github.com/Nevsimao03' target='blank'>
						Simão Neves
					</BrainerName>
				</Avatar>

				<Avatar>
					<a
						href='https://www.linkedin.com/in/jalen-foreman-975a81207/'
						target='blank'>
						<img src={jalen} alt='jalen avatar' />
					</a>
					<BrainerName href='https://github.com/Jalen-Foreman' target='blank'>
						Jalen Foreman
					</BrainerName>
				</Avatar>

				<Avatar>
					<a href='https://www.linkedin.com/in/kimcinco/' target='blank'>
						<img src={kim} alt='kim avatar' />
					</a>
					<BrainerName href='https://github.com/kccrtv/' target='blank'>
						Kim Cinco
					</BrainerName>
				</Avatar>
			</BrainerDiv>
		</>
	);
}

export default About;
