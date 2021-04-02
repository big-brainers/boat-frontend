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
	grid-template-rows: 532px 2em;
	grid-template-columns: repeat(8, 32px 1fr 3fr);
`;

function LogsOne(props) {
	return (
		<DashboardMain>
			<NavPanel />
			<DashboardContainer>
				<h1>Title</h1>
				<p>Content</p>
			</DashboardContainer>
		</DashboardMain>
	);
}

export default LogsOne;
