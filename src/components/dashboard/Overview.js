import React from 'react';
import styled from 'styled-components';
import TasksCard from './Tasks/TasksCard';
import QuickEntry from './entries/QuickEntry';
import NavPanel from '../dashboard/NavPanel';

const CalBox = styled.figure`
	background: #ffffff;
	box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
	border-radius: 2px;
	height: 958px;
	width: 635px;
	grid-column: 3;
`;

const NavBox = styled.nav`
	width: 256px;
	height: 1024px;

	background: white;
	box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
	text-align: center;
`;

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
	grid-template-rows: 584px 2em;
	grid-template-columns: repeat(8, 32px 1fr 3fr);
`;

function Overview(props) {
	return (
		<DashboardMain>
			<NavPanel />
			<DashboardContainer>
				<TasksCard />
				<QuickEntry />
				<CalBox />
			</DashboardContainer>
		</DashboardMain>
	);
}

export default Overview;
