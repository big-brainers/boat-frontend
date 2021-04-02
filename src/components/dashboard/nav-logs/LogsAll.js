// import { Label } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import NavPanel from '../NavPanel';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';

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

const HeaderOne = styled.h1`
	font-size: 3rem;
	color: #091133;
	padding: 24px;
	margin: 0;
`;

const HeaderRow = styled.div`
	padding: 0 16px;
	border-bottom: 1px solid #b0b8bc;
	height: 56px;
	grid-column: 1 / span 16;
	display: flex;
	align-items: center;
	justify-content: center;
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
	margin: 0 auto;
	text-transform: uppercase;
	margin-bottom: 8px;
	font-weight: 700;
	font-size: 1.2rem;
	padding: 0 120px;
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
	justify-content: space-between;
	flex-flow: row wrap;
	height: 92px;
	align-items: center;
	border-bottom: 1px solid #b0b8bc;
	margin: 10px auto;
	padding: 0 16px;
	color: #111b47;
	font-size: 1.2rem;
`;

const RowSection = styled.div`
	height: 56px;
	padding: 0;
	margin: 0;

	&.title-section {
		width: 30%;
		font-weight: 700;
	}
	&.body-section {
		width: 30%;
	}
	&.date-section {
		width: 20%;
	}
	&.icon-section {
		width: 5%;
	}
`;

const RowSectionP = styled.p`
	margin: 0 auto;
	padding: 8px 0;
`;

const Trash = styled.button`
	background-color: #fff;
	color: #222f65;
	border: none;
	width: 36px;
	height: 36px;
	cursor: pointer;
	outline: none;
`;

const samplebodytext =
	'Im baby mlkshk pour-over edison bulb kogi, vexillologiststumptown hoodie vegan pok pok raw denim synth lo-fi occupy pabst.';

function concatBody() {
	return `${samplebodytext.substring(0, 60)} ...`;
}

const Logs = (props) => {
	// function handleClick() {
	// 	props.onDelete(props.id);
	// }

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
					<HeaderRow>
						<Label>Title</Label>
						<Label>Status</Label>
						<Label>Date</Label>
					</HeaderRow>
					<EntryContainer>
						<RowSection className='title-section'>
							<Link to='/logs/:id'>
								<RowSectionP>titletitletitletitletitletitle</RowSectionP>
							</Link>
						</RowSection>
						<RowSection className='body-section'>
							<RowSectionP>{concatBody()}</RowSectionP>
						</RowSection>
						<RowSection className='date-section'>
							<RowSectionP>10:20 AM, March 12, 2021</RowSectionP>
						</RowSection>
						<RowSection className='icon-section'>
							{/* <Trash onClick={handleClick}> */}
							<Trash>
								<DeleteIcon />
							</Trash>
						</RowSection>
					</EntryContainer>
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
