import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavPanel from '../NavPanel';
import { Link } from 'react-router-dom';
import APIurl from '../../../config';
import axios from 'axios';
import prev from '../../../images/left.png';
import EntryRow from './EntryRow';
import { set } from 'mongoose';

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
	height: 80vh;
	overflow-y: scroll;
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

const HeaderOne = styled.h1`
	font-size: 3rem;
	color: #091133;
	padding: 24px;
	margin: 0;
`;

const HeaderRow = styled.div`
	padding: 0 16px;
	border-bottom: ${(props) => props.bottom || '1px solid #b0b8bc'};
	height: 56px;
	grid-column: 1 / span 16;
	display: flex;
	align-items: center;
	justify-content: ${(props) => props.justify || 'space-between'};
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

const Label = styled.h6`
	color: #767676;
	margin: 0 80px;
	text-transform: uppercase;
	margin-bottom: 8px;
	font-weight: 700;
	font-size: 1.2rem;
	display: ${(props) => props.display || 'inline-flex'};
`;

const Button = styled.button`
	width: 128px;
	height: 32px;
	font-family: 'Inconsolata', monospace;
	font-size: 1rem;
	border-radius: 2px;
	border: 1px solid #111b47;
	font-decoration: none;

	&.primary {
		background-color: #111b47;
		color: #fff;
	}

	&.tertiary {
		color: #222f65;
		background-color: #fff;
		border: none;
	}
`;

const EntryContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${(props) => props.justify || 'space-between'};
	flex-flow: row wrap;
	height: 92px;
	align-items: center;
	border-bottom: 1px solid #b0b8bc;
	margin: 10px auto;
	padding: 0 16px;
	color: #111b47;
	font-size: 1.2rem;
`;

const Logs = () => {
	const [logs, setLogs] = useState([]);

	useEffect(() => {
		axios(`${APIurl}/logs`)
			.then((res) => {
				let logsArray = res.data;
				setLogs(logsArray);
			})
			.catch(console.error);
	}, []);

	if (!logs.length) {
		return (
			<DashboardMain>
				<NavPanel />
				<DashboardContainer>
					<PageNav>
						<HeaderOne>Logs</HeaderOne>
						<Link to='/compose'>
							<Button className='primary'>New Entry</Button>
						</Link>
					</PageNav>
					<CardDiv>
						<HeaderRow bottom='none' justify='flex-start'>
							<IconDiv>
								<IconButton>
									<Link to='/dashboard'>
										<img src={prev} alt='back' />
									</Link>
								</IconButton>
								<CardHeader className='card-link'>
									Back to the Dashboard
								</CardHeader>
							</IconDiv>
						</HeaderRow>
						<HeaderRow>
							<Label>Title</Label>
							<Label>Status</Label>
							<Label>Date</Label>
						</HeaderRow>
						<EntryContainer justify='center'>
							<Label display='block'>
								Let's start a new entry in your captain's log! ↗️
							</Label>
						</EntryContainer>
					</CardDiv>
				</DashboardContainer>
			</DashboardMain>
		);
	}

	return (
		<DashboardMain>
			<NavPanel />
			<DashboardContainer>
				<PageNav>
					<HeaderOne>Logs</HeaderOne>
					<Link to='/compose'>
						<Button className='primary'>New Entry</Button>
					</Link>
				</PageNav>
				<CardDiv>
					<HeaderRow bottom='none' justify='flex-start'>
						<IconDiv>
							<IconButton>
								<Link to='/dashboard'>
									<img src={prev} alt='back' />
								</Link>
							</IconButton>
							<CardHeader className='card-link'>
								Back to the Dashboard
							</CardHeader>
						</IconDiv>
					</HeaderRow>
					<HeaderRow>
						<Label>Title</Label>
						<Label>Status</Label>
						<Label>Date</Label>
					</HeaderRow>
					{logs.map((entry, index) => (
						<EntryRow
							title={entry.title.substring(0, 20)}
							content={entry.content.substring(0, 40)}
							date={entry.date.substring(0, 10)}
							index={entry._id}
						/>
					))}
				</CardDiv>
			</DashboardContainer>
		</DashboardMain>
	);
};

export default Logs;
