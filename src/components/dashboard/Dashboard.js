import React from 'react';
import styled from 'styled-components';
import TasksCard from './card-tasks/TasksCard';
// import QuickEntry from './card-quickentry/QuickEntry';
import NavPanel from './NavPanel';
import Calendar from '../dashboard/nav-schedule/Calendar';

const CalBox = styled.figure`
	background: #ffffff;
	box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
	border-radius: 2px;
	height: 90vh;
	width: 635px;
	grid-column: 4;
`;

const DashboardMain = styled.main`
	margin: 0;
	height: 100vh;
	text-align: center;
	display: grid;
	grid-template-columns: repeat(8, 1fr 3fr);
`;

// const DashboardContainer = styled.section`
// 	grid-column: 2 / 18;
// 	display: grid;
// 	grid-template-rows: 532px 2em;
// 	grid-template-columns: repeat(8, 32px 1fr 3fr);
// `;

const DashboardContainer = styled.section`
	grid-column: 2 / 18;
	text-align: left;
`;

const CardDiv = styled.div`
	grid-row: 1;
	grid-column: 2;
	padding: 0 24px 24px 24px;
	display: grid;
	grid-template-columns: repeat(8, 32px 1fr 3fr);
	grid-template-rows: repeat(2, 80px 8px 1fr);
`;

function Dashboard(props) {
	return (
		<DashboardMain>
			<NavPanel />
			<DashboardContainer>
				<CardDiv>
					<TasksCard row='1' />
					{/* <CalBox> */}
					<Calendar />
					{/* </CalBox> */}
				</CardDiv>
			</DashboardContainer>
		</DashboardMain>
	);
}

export default Dashboard;
