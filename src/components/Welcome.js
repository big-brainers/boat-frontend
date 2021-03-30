import React from 'react';
import styled from 'styled-components';
import sailboatsmall from '../images/sailboat.png';

const DashboardContainer = styled.main`
	// display: grid;
	// grid-template-columns: 448px 2fr;
	// grid-template-rows: auto
	margin: 0;
	padding: 0 24px;
	text-align: center;
	background-color: #e5e7f0;
	height: 100vh;
`;

const SmallLogo = styled.img`
	width: auto;
	height: 152px;
`;

const HeaderOne = styled.h1`
	font-size: 3rem;
	color: #091133;
`;

const LightBlueText = styled.p`
	color: #505f98;
`;

function Welcome(props) {
	return (
		<DashboardContainer>
			<SmallLogo src={sailboatsmall} alt='small sailboat' />
			<HeaderOne>Welcome aboard!</HeaderOne>
			<LightBlueText>Click on your Dashboard to get started.</LightBlueText>
			<LightBlueText>Anchors aweigh!</LightBlueText>
		</DashboardContainer>
	);
}

export default Welcome;
