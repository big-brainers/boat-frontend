// import { Label } from '@material-ui/icons';
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

const HeaderOne = styled.h1`
	font-size: 3rem;
	color: #091133;
`;

const Label = styled.label`
	color: #767676;
	margin: 0 auto;
	text-align: left;
	display: flex;
	text-transform: uppercase;
	margin-bottom: 8px;
	font-weight: 700;
	font-size: 1.2rem;
`;

const Logs = () => {
	return (
		<DashboardMain>
			<NavPanel />
			<DashboardContainer>
				<HeaderOne>Logs</HeaderOne>

				{/* 
				{ logs.forEach(() => {
	return (		<Label>{logs.title}</Label> 
		<p>{`{log.content.substring(0, 100)} ...`} 
	<a href='/logs/{log._id}'>Read More</a>
	</p> ))	} } */}
			</DashboardContainer>
		</DashboardMain>
	);
};

export default Logs;
