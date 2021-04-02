import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import APIurl from '../../../config';
import axios from 'axios';
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

const InputContainer = styled.div`
	padding: 16px 32px 8px 32px;
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
	width: 384px;
	height: ${(props) => props.height || '40px'};
	border-radius: 8px;
	border: 1px solid #b0b8bc;
	font-family: 'Inconsolata', monospace;
	font-size: 1rem;
`;

const ButtonDiv = styled.div`
	padding: ${(props) => props.padding || '24px'};
	margin: 0 auto;
	text-align: right;

	& a {
		margin: 0;
	}
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

function Compose() {
	const initialState = {
		title: '',
		content: '',
	};
	const history = useHistory();

	const [entry, setEntry] = useState(initialState);
	const handleChange = (event) => {
		setEntry({ ...entry, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${APIurl}/logs`, entry)
			.then(() => {
				setEntry(initialState);
				history.push('/logs');
			})
			.catch(console.error);
	};

	return (
		<DashboardMain>
			<NavPanel />
			<DashboardContainer>
				<HeaderOne>Compose</HeaderOne>
				<div>
					<form onSubmit={handleSubmit} className='create-form'>
						<label htmlFor='title'>TITLE </label>
						<input
							onChange={handleChange}
							name='title'
							value={entry.title}
							placeholder='Title'
						/>
						<label htmlFor='content'>DETAILS </label>
						<input
							onChange={handleChange}
							name='content'
							value={entry.content}
							placeholder='Content'
						/>
						<button id='button' type='submit'>
							Submit
						</button>
					</form>
				</div>
				{/* <div class='form-group'>
					<form class='' action='/compose' method='post'>
						<Label>Title</Label>
						<input class='form-control' type='text' name='postTitle' />
						<Label>Details</Label>
						<textarea class='form-control' name='postBody' rows='5' cols='30' />
						<Button type='submit' name='button' className='primary'>
							Publish
						</Button>
					</form>
				</div> */}
			</DashboardContainer>
		</DashboardMain>
	);
}

export default Compose;
