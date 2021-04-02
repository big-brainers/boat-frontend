// import { Label } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import NavPanel from '../NavPanel';
import { Link } from 'react-router-dom';

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

const Logs = (props) => {
	return (
		<DashboardMain>
			<NavPanel />
			<DashboardContainer>
				<HeaderOne>Logs</HeaderOne>
				<CardDiv>
					<Link to='/compose'>Compose</Link>
				</CardDiv>
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
