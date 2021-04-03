import React from 'react';
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import APIurl from '../../../config';
import axios from 'axios';
import styled from 'styled-components';
import NavPanel from '../NavPanel';
import prev from '../../../images/left.png';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

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
	height: 50vh;
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

const InputContainer = styled.div`
	padding: 16px 32px 8px 32px;
	width: 100%;
	border: none;

	outline: none;
	font-size: 1.2em;
	font-family: inherit;
	resize: none;
	& button {
		position: relative;
		right: 32px;
		bottom: -72px;
		background: #111b47;
		color: #fff;
		border: none;
		border-radius: 50%;
		width: 36px;
		height: 36px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
		cursor: pointer;
		outline: none;
	}
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

const InputStyle = styled.input`
	width: 70vw;
	height: ${(props) => props.height || '40px'};
	border-radius: 8px;
	border: 1px solid #b0b8bc;
	font-family: 'Inconsolata', monospace;
	font-size: 1rem;

	&.body {
		margin-top: 24px;
	}
`;

const Compose = (props) => {
	const history = useHistory();
	let initialState = {
		title: '',
		content: '',
	};
	const [entry, setEntry] = useState(initialState);
	const [isExpanded, setExpanded] = useState(false);

	const handleChange = (event) => {
		setEntry({ ...entry, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(event);

		axios
			.post(`${APIurl}/logs`, entry)
			.then(() => {
				props.onAdd(entry);
				setEntry(initialState);
				history.push('/logs');
			})
			.catch(console.error);
	};

	function expand() {
		setExpanded(true);
	}

	return (
		<DashboardMain>
			<NavPanel />
			<DashboardContainer>
				<PageNav>
					<HeaderOne>Compose</HeaderOne>
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
					</HeaderRow>
					<div>
						<form onSubmit={handleSubmit} className='create-form'>
							<InputContainer>
								<Label htmlFor='title'>Log Entry</Label>
								{isExpanded && (
									<InputStyle
										name='title'
										onChange={handleChange}
										value={entry.title}
										placeholder='Title'
									/>
								)}

								<InputStyle
									className='body'
									as='textarea'
									name='content'
									onClick={expand}
									onChange={handleChange}
									value={entry.content}
									placeholder='Tell us more!'
									rows={isExpanded ? 12 : 1}
								/>
								<Zoom in={isExpanded}>
									<Fab id='button' type='submit' onClick={handleSubmit}>
										<AddIcon />
									</Fab>
								</Zoom>
							</InputContainer>
						</form>
					</div>
				</CardDiv>
			</DashboardContainer>
		</DashboardMain>
	);
};

export default Compose;
