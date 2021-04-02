import React from 'react';
import styled from 'styled-components';
import NavPanel from '../NavPanel';

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
	grid-template-columns: repeat(8, 32px 1fr 3fr);
	grid-template-rows: 80px 1fr;
	text-align: left;
`;

const CardDiv = styled.div`
	grid-row: 2;
	grid-column: 2;
	padding: 24px;
`;

const HeaderOne = styled.h1`
	font-size: 3rem;
	color: #091133;
	padding: 24px;
	margin: 0;
`;

function LogsOne(props) {
	return (
		<DashboardMain>
			<NavPanel />
			<DashboardContainer>
				<HeaderOne>Compose Completed</HeaderOne>
				<CardDiv>
					<h1>Title</h1>
					<p>Content</p>
				</CardDiv>
			</DashboardContainer>
		</DashboardMain>
	);
}

export default LogsOne;
