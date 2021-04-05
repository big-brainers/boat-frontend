import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import NavPanel from '../NavPanel';
import prev from '../../../images/left.png';
import edit from '../../../images/edit-gray.png';
import Entry from './Entry';
import APIurl from '../../../config';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
// THE EDIT MODAL

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

const PageNav = styled.nav`
	padding: 0 16px;
	width: 75vw;
	height: 56px;
	grid-column: 1 / span 16;
	display: flex;
	align-items: center;
	justify-content: space-between;
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

const Background = styled.div`
	background-color: rgba(0, 0, 0, 0.4);
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
	overflow: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalWrapper = styled.div`
	width: 432px;
	height: 220px;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #fff;
	color: #000;
	display: grid;
	position: relative;
	z-index: 10;
	border-radius: 10px;
`;

const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.8;
	color: #141414;
`;

const ModalTextDiv = styled.div`
	height: 64px;
	padding-bottom: 8px;
	border-bottom: 1px solid #b0b8bc;
	border-radius: 2px;
	color: #222f65;
	background-color: #fff;
	margin: 0 auto;
	font-family: 'Inconsolata', monospace;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

const Icon = styled.img`
	height: 20px;
	width: 20px;
	padding: 8px;
`;

const HeaderSix = styled.h6`
	font-size: 2rem;
	color: #505f98;
`;

const ButtonDiv = styled.div`
	padding: ${(props) => props.padding || '24px'};
	margin: 0 auto;
	display: inline-flex;

	& a {
		margin: 0;
	}
`;

const Button = styled.button`
	width: 128px;
	height: 48px;
	font-family: 'Inconsolata', monospace;
	font-size: ${(props) => props.size || '1rem'};
	border-radius: 2px;
	margin: ${(props) => props.margin || '0 16px 16px'};
	border: 1px solid #111b47;
	font-decoration: none;

	&.primary {
		background-color: #111b47;
		color: #fff;
	}

	&.secondary {
		background-color: #e5e7f0;
		color: #222f65;
	}
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

// const EntryEdit = ({ match }) => {
// 	const history = useHistory();
// 	const [log, setLog] = useState(null);
// 	const [modal, setModal] = useState(false);

// 	useEffect(() => {
// 		const id = match.params.id;
// 		axios
// 			.get(`${APIurl}/logs/${id}`)
// 			.then(({ data }) => setLog(data))
// 			.catch(console.error);
// 	}, [match.params.id]);

// 	const handleChange = (event) => {
// 		setLog({ ...log, [event.target.name]: event.target.value });
// 	};

// 	const editEntryPage = () => {
// 		setModal(true);
// 	};

// 	const closeModal = () => {
// 		setModal(false);
// 	};

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		const id = match.params.id;
// 		axios
// 			.put(`${APIurl}/logs/${id}`, log)
// 			.then(() => {
// 				history.push(`/logs/${id}`);
// 				closeModal();
// 			})

// 			.catch(console.error);
// 	};

// 	if (!log) {
// 		return <h1>Loading...</h1>;
// 	}

// 	const handleDelete = () => {
// 		const id = match.params.id;
// 		axios
// 			.delete(`${APIurl}/logs/${id}`)
// 			.then(() => {
// 				history.push('/logs');
// 			})
// 			.catch(console.error);
// 	};

// 	return (
// 		<div>
// 			{modal ? (
// 				<div>
// 					<div>
// 						<h2>Edit this entry:</h2>
// 						<form onSubmit={handleSubmit}>
// 							<label htmlFor='title' />
// 							<input onChange={handleChange} name='title' value={log.title} />

// 							<input
// 								onChange={handleChange}
// 								name='content'
// 								value={log.content}
// 							/>
// 							<br />
// 							<button type='submit'>Submit</button>
// 						</form>
// 						<button onClick={closeModal}>Close</button>
// 					</div>
// 				</div>
// 			) : null}
// 			<h2>{log.title}</h2>
// 			<h3>content: {log.content}</h3>
// 			<button onClick={editEntryPage}>Edit</button>
// 			<button onClick={handleDelete}>Delete</button>
// 		</div>
// 	);
// };

// export default EntryEdit;

/**
 * <DashboardMain>
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
							<Trash onClick={handleDelete}>
								<DeleteIcon />
							</Trash>
						</IconDiv>
					</HeaderRow>
					<Entry />
				</CardDiv>
			</DashboardContainer>
		</DashboardMain>
 */
