import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import NavPanel from '../NavPanel';
import prev from '../../../images/left.png';
import edit from '../../../images/edit-gray.png';
import APIurl from '../../../config';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from './Modal';
import x from '../../../images/x.png';

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

const ModalBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 100vh;
`;

// const Button = styled.button`
// 	min-width: 100px;
// 	padding: 16px 32px;
// 	border-radius: 4px;
// 	border: none;
// 	background: #111b47;
// 	color: #fff;
// 	font-size: 24px;
// 	cursor: pointer;
// `;

const EntryDiv = styled.div`
	background: #fff;
	padding: 0 8px 8px 8px;
	width: 70vw;
	margin: 16px;

	& p {
		font-size: 1.1em;
		margin-bottom: 10px;
		white-space: pre-wrap;
		word-wrap: break-all;
	}

	& button {
		position: relative;
		float: right;
		margin-right: 10px;
		background-color: #fff;
		color: #222f65;
		border: none;
		width: 36px;
		height: 36px;
		cursor: pointer;
		outline: none;
	}
`;

// const HeaderRow = styled.div`
// 	padding: 0 16px 16px 16px;
// 	border-bottom: ${(props) => props.bottom || '1px solid #b0b8bc'};
// 	height: 56px;
// 	display: flex;
// 	align-items: center;
// 	justify-content: ${(props) => props.justify || 'space-between'};
// `;

// const Label = styled.h6`
// 	color: #767676;
// 	text-transform: uppercase;
// 	margin-bottom: 8px;
// 	font-weight: 700;
// 	font-size: 1.2rem;
// `;

// const DashboardMain = styled.main`
// 	margin: 0;
// 	height: 100vh;
// 	text-align: center;
// 	display: grid;
// 	grid-template-columns: repeat(8, 1fr 3fr);
// `;

// const DashboardContainer = styled.section`
// 	grid-column: 2 / 18;
// 	display: grid;
// 	grid-template-columns: repeat(8, 32px 1fr 3fr);
// 	grid-template-rows: 80px 1fr;
// 	text-align: left;
// `;

// const CardDiv = styled.div`
// 	grid-row: 2;
// 	grid-column: 2;
// 	background: white;
// 	box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
// 	text-align: left;
// 	width: 75vw;
// 	overflow-y: scroll;
// 	overflow-x: hidden;
// `;

// const PageNav = styled.nav`
// 	padding: 0 16px;
// 	width: 75vw;
// 	height: 56px;
// 	grid-column: 1 / span 16;
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// `;

// const HeaderRow = styled.nav`
// 	padding: 0 16px;
// 	display: flex;
// 	flex-direction: row;
// 	border-bottom: 1px solid #b0b8bc;
// 	height: 56px;
// 	align-items: center;
// 	justify-content: space-between;
// `;

// const HeaderOne = styled.h1`
// 	font-size: 3rem;
// 	color: #091133;
// 	padding: 24px;
// 	margin: 0;
// `;

// const IconDiv = styled.div`
// 	margin: 0;
// 	display: inline-flex;

// 	& a {
// 		margin: 0;
// 	}
// `;

// const CardHeader = styled.p`
// 	font-size: 1rem;
// 	color: #192a3e;
// `;

// const IconButton = styled.button`
// 	height: 24px;
// 	width: 24px;
// 	background-color: #fff;
// 	color: #222f65;
// 	border: none;
// 	margin: 16px;
// 	display: inline-flex;
// 	align-items: center;
// 	justify-content: center;
// 	grid-column: 14;
// `;

// const Trash = styled.button`
// 	background-color: #fff;
// 	color: #222f65;
// 	border: none;
// 	width: 36px;
// 	height: 36px;
// 	cursor: pointer;
// 	outline: none;
// `;

const Entry = ({ match }) => {
	const history = useHistory();
	const [log, setLog] = useState(null);
	const [modal, setModal] = useState(false);

	useEffect(() => {
		const id = match.params.id;
		axios
			.get(`${APIurl}/logs/${id}`)
			.then(({ data }) => setLog(data))
			.catch(console.error);
	}, [match.params.id]);

	const handleChange = (event) => {
		setLog({ ...log, [event.target.name]: event.target.value });
	};

	const editEntryPage = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const id = match.params.id;
		axios
			.put(`${APIurl}/logs/${id}`, log)
			.then(() => {
				history.push(`/logs/${id}`);
				closeModal();
			})

			.catch(console.error);
	};

	if (!log) {
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

	const handleDelete = () => {
		const id = match.params.id;
		axios
			.delete(`${APIurl}/logs/${id}`)
			.then(() => {
				history.push('/logs');
			})
			.catch(console.error);
	};

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
						{/* {modal ? (
							<Background>
								<ModalWrapper modal={setModal}>
									<ModalContent>
										<ModalTextDiv>
											<Icon src={x} alt='question mark'></Icon>
											<HeaderSix>Ready to publish?</HeaderSix>
										</ModalTextDiv>
										<ButtonDiv>
											<Button
												className='secondary'
												onClick={() => setModal((prev) => !prev)}>
												Cancel
											</Button>
											<Button className='primary' type='submit'>
												Delete
											</Button>
										</ButtonDiv>
									</ModalContent>
								</ModalWrapper>
							</Background>
						) : null} */}

						<EntryDiv>
							<HeaderRow>
								<Label>{log.title}</Label>
								<Label>{log.date.substring(0, 10)}</Label>
							</HeaderRow>
							<p>{log.content}</p>
							<button onClick={editEntryPage}>
								<img src={edit} alt='edit' />
							</button>
							<button onClick={handleDelete}>
								<DeleteIcon />
							</button>
						</EntryDiv>
					</div>
				</CardDiv>
			</DashboardContainer>
		</DashboardMain>
	);
};

export default Entry;
