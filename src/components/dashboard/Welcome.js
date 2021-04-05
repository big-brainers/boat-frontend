import React from 'react';
import styled from 'styled-components';
import sailboatsmall from '../../images/sailboat-mobile.png';
import NavPanel from './NavPanel';

const DashboardMain = styled.main`
	margin: 0;
	height: 100vh;
	text-align: center;
	display: grid;
	grid-template-columns: repeat(8, 1fr 3fr);
`;

const DashboardContainer = styled.section`
	grid-column: 2 / 18;
	display: grid;
	grid-template-rows: 532px 2em;
	grid-template-columns: repeat(8, 32px 1fr 3fr);
`;

const WelcomeDiv = styled.div`
	grid-column: 2 / span 24;
`;

const SmallLogo = styled.img`
	margin: 0 auto;
	padding-top: 32px;
`;

const HeaderOne = styled.h1`
	font-size: 3rem;
	color: #091133;
`;

const LightBlueText = styled.p`
	color: #505f98;
	font-size: 2rem;
`;

function Welcome(props) {
	return (
		<DashboardMain>
			<NavPanel />
			<DashboardContainer>
				<WelcomeDiv>
					<SmallLogo src={sailboatsmall} alt='small sailboat' />
					<HeaderOne>Welcome aboard!</HeaderOne>
					<LightBlueText>
						↖️ Click on your Dashboard to get started.
					</LightBlueText>
					<LightBlueText>Anchors aweigh!</LightBlueText>
				</WelcomeDiv>
			</DashboardContainer>
		</DashboardMain>
	);
}

export default Welcome;
