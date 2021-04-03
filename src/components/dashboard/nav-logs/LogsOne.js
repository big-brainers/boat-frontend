import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavPanel from '../NavPanel';
import prev from '../../../images/left.png';
import edit from '../../../images/edit-gray.png';

import Entry from './Entry';

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
	background: white;
	box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
	text-align: left;
	width: 75vw;
	// height: 50vh;
	overflow-y: scroll;
	overflow-x: hidden;
`;

const PageNav = styled.nav`
	padding: 0 16px;
	width: 75vw;
	height: 56px;
	grid-column: 1 / span 16;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const HeaderRow = styled.nav`
	padding: 0 16px;
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #b0b8bc;
	height: 56px;
	align-items: center;
	justify-content: space-between;
`;

const HeaderOne = styled.h1`
	font-size: 3rem;
	color: #091133;
	padding: 24px;
	margin: 0;
`;

const IconDiv = styled.div`
	margin: 0;
	display: inline-flex;

	& a {
		margin: 0;
	}
`;

const CardHeader = styled.p`
	font-size: 1rem;
	color: #192a3e;
`;

const IconButton = styled.button`
	height: 24px;
	width: 24px;
	background-color: #fff;
	color: #222f65;
	border: none;
	margin: 16px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	grid-column: 14;
`;

function LogsOne(props) {
	return (
		<DashboardMain>
			<NavPanel />
			<DashboardContainer>
				<PageNav>
					<HeaderOne>Log Entry</HeaderOne>
				</PageNav>

				<CardDiv>
					<HeaderRow>
						<IconDiv>
							<IconButton>
								<Link to='/logs'>
									<img src={prev} alt='back' />
								</Link>
							</IconButton>
							<CardHeader className='card-link'>Go to Logs</CardHeader>
						</IconDiv>
						<IconDiv>
							<IconButton>
								<Link to='/compose'>
									<img src={edit} alt='edit' />
								</Link>
							</IconButton>
						</IconDiv>
					</HeaderRow>
					<Entry />
				</CardDiv>
			</DashboardContainer>
		</DashboardMain>
	);
}

export default LogsOne;
