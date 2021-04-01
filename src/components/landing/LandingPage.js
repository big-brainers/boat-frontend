import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import sailboat from '../../images/sailboat.png';

const LandingMain = styled.main`
	display: grid;
	grid-template-columns: 3fr 1fr;
	width: 635px;
	height: 968px;
`;

const HeroDiv = styled.div`
	padding: 60px 0 60px 60px;
`;

const HeaderOne = styled.h1`
	font-size: 3rem;
`;

const HeaderSix = styled.h6`
	font-size: 1rem;
	color: #505f98;
	line-height: 1.5rem;
`;

function Hero() {
	return (
		<HeroDiv>
			<HeaderOne>Bridging Our Advocates Together</HeaderOne>

			<HeaderSix>
				Join our private networking space, The BOAT, where you can keep
				organized and keep in touch with amazing advocates, like yourself.
			</HeaderSix>
			<ButtonDiv padding='0'>
				<Link to='/signup'>
					<Button className='primary' margin='0'>
						Join Us
					</Button>
				</Link>
				<a href='https://github.com/big-brainers' target='_blank'>
					<Button className='tertiary' margin='0 8px'>
						Learn More
					</Button>
				</a>
			</ButtonDiv>
		</HeroDiv>
	);
}

const HeroPic = styled.figure`
	margin: 0 auto;
	padding: 80px;
	width: 40vw;
`;

const Boat = styled.img`
	width: 800px;
	filter: drop-shadow(22px 13px 4px rgba(0, 0, 0, 0.25));
`;

const LandingNavStyle = styled.nav`
	margin: 0 auto;
	padding: 16px 24px;
	display: flex;
	flex-grow: 3;
	width: 100vw;
	align-items: center;
	justify-content: space-between;
	height: 72px;
	font-size: 3rem;
	.nav-tag {
		color: #222f65;
		font-weight: 700;
		text-decoration: none;
		display: inline-block;
		margin: 0 auto;
		align-content: flex-start;
		width: 80vw;
	}
`;

const ButtonDiv = styled.div`
	padding: ${(props) => props.padding || '24px'};
	margin: 0 auto;
	display: inline-flex;

	& a {
		margin: 0;
	}
`;

const Button = styled.button`
	width: 128px;
	height: 32px;
	font-family: 'Inconsolata', monospace;
	font-size: 1rem;
	border-radius: 2px;
	margin: ${(props) => props.margin || '0 16px 16px'};
	border: 1px solid #111b47;
	font-decoration: none;

	&.primary {
		background-color: #111b47;
		color: #fff;
	}

	&.tertiary {
		color: #222f65;
		background-color: #fff;
		border: none;
	}
`;

function LandingNav() {
	return (
		<LandingNavStyle>
			<a className='nav-tag'>BOAT</a>

			<ButtonDiv>
				<Link to='/signup'>
					<Button className='tertiary'>Sign In</Button>
				</Link>
				<Link to='/signin'>
					<Button className='primary'>Sign Up</Button>
				</Link>
			</ButtonDiv>
		</LandingNavStyle>
	);
}

const FooterStyle = styled.footer`
	position: fixed;
	display: block;
	bottom: 0;
	background-color: #f2f2f2;
	color: #222f65;
	height: 70px;
	width: 100vw;
	text-align: center;
	padding-top: 45px;

	.footer-text {
		display: inline-block;
		color: #222f65;
		font-weight: 700;
		text-decoration: none;
		padding: 0 4px;
	}
`;

function Footer() {
	let currentyear = new Date().getFullYear();
	return (
		<FooterStyle>
			<hr />
			<p className='footer-text'>{currentyear} Copyright ⓒ </p>
			<a
				className='footer-text'
				href='https://github.com/big-brainers'
				target='_blank'>
				Big Brainers
			</a>
		</FooterStyle>
	);
}

function LandingPage() {
	return (
		<Fragment>
			<LandingNav />
			<LandingMain>
				<Hero />
				<HeroPic>
					<Boat src={sailboat} alt='sailboat'></Boat>
				</HeroPic>
			</LandingMain>
			<Footer />
		</Fragment>
	);
}
export default LandingPage;
