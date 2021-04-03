import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import sailboat from '../../images/sailboat-desktop.png';

const LandingMain = styled.main`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
`;

const HeroDiv = styled.div`
	padding: 60px 0 0 60px;
	width: 50vw;
	display: inline-block;
`;

const HeaderOne = styled.h1`
	font-size: 3rem;
	display: inline;
`;

const HeaderSix = styled.h6`
	font-size: 1.5rem;
	color: #505f98;
	line-height: 2.2rem;
	display: inline-block;
	margin: 24px auto;
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
					<Button
						className='primary'
						width='348px'
						size='1.5rem'
						margin='0'
						height='56px'>
						Join Us
					</Button>
				</Link>
			</ButtonDiv>
		</HeroDiv>
	);
}

const HeroPicStyle = styled.figure`
	margin: 0 auto;
	text-align: center;
	padding: 40px;
	width: 20vw;
`;

const Boat = styled.img`
	width: 300px;
	filter: drop-shadow(22px 13px 4px rgba(0, 0, 0, 0.25));
`;

function HeroPic() {
	return (
		<motion.div
			initial={{ x: 500, y: 50 }}
			animate={{ x: -10, y: -50 }}
			transition={{
				type: 'spring',
				stiffness: 260,
				damping: 20,
			}}>
			<HeroPicStyle>
				<Boat src={sailboat} alt='sailboat'></Boat>
			</HeroPicStyle>
		</motion.div>
	);
}

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
	width: ${(props) => props.width || '128px'};
	height: ${(props) => props.height || '32px'};
	font-family: 'Inconsolata', monospace;
	font-size: ${(props) => props.size || '1rem'};
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
		background-color: #e5e7f0;
		border: ${(props) => props.border || 'none'};
	}
`;

function LandingNav() {
	return (
		<LandingNavStyle>
			<Link href='/' className='nav-tag'>
				BOAT
			</Link>

			<ButtonDiv>
				<Link to='/signin'>
					<Button className='tertiary'>Sign In</Button>
				</Link>
				<Link to='/signup'>
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
			<Link className='footer-text' to='/about'>
				Big Brainers
			</Link>
		</FooterStyle>
	);
}

function LandingPage() {
	return (
		<Fragment>
			<LandingNav />
			<LandingMain>
				<Hero />
				<HeroPic />
			</LandingMain>
			<Footer />
		</Fragment>
	);
}
export default LandingPage;
