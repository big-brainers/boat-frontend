import React from 'react';
import NavPanel from './NavPanel';
import styled from 'styled-components';

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

const Schedule = () => {
	return (
		<DashboardMain>
			<NavPanel />
			<DashboardContainer></DashboardContainer>
		</DashboardMain>
	);
};

export default Schedule;
