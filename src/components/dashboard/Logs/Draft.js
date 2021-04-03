import React, { useState } from 'react';
import NavPanel from '../NavPanel';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import left from '../../../images/left.png';
import Modal from './Modal';
import { GlobalStyle } from './GlobalStyle';


const TextColor = '#222F65';
const DraftIconColor = '#9FA2B4';

const Header = styled.h1`
	position: absolute;
	left: 300px;
`;

const BackToLog = styled.h1`
	position: absolute;
	left: 330px;
	top: 90px;
	font-size: 15px;

	& .previous-page {
		position: absolute;
		left: -35px;
		bottom: -5px;
	}

	& .log-text {
		text-decoration: none;
		color: ${TextColor};
	}
`;

const LogBox = styled.div`
	position: absolute;
	width: 1700px;
	height: 850px;
	left: 300px;
	top: 140px;
	background: #ffffff;
	box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
	border-radius: 2px;
`;

const DraftIcon = styled.div`
	background: #f0f1f7;
	border-radius: 8px;
	width: 50px;
	height: 17px;
	position: relative;
	left: 30px;
	top: 30px;

	& .DraftIconText {
		color: ${DraftIconColor};
	}
`;

const ModalBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Button = styled.button`
	min-width: 100px;
	padding: 16px 32px;
	border-radius: 4px;
	border: none;
	background: #111b47;
	color: #fff;
	font-size: 24px;
	cursor: pointer;
`;


const Draft = () => {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal((prev) => !prev);
	};

	const [data, setData] = useState({
		title: '',
		description: '',
		comments: '',
	});

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setData(data);
		console.log(data);
	};

	return (
		<div>
			<NavPanel />
			<Header>Logs</Header>
			<BackToLog>
				<Link className='log-text' to='/logs'>
					<img className='previous-page' src={left} alt='back to logs' />
					Back to Logs
				</Link>
			</BackToLog>
			<LogBox>
				<DraftIcon>
					<p className='DraftIconText'>Draft</p>
				</DraftIcon>
				<h2>New Entry</h2>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Short, descriptive title'
						maxLength='150'
						name='title'
						value={data.title}
						onChange={handleChange}
						required
					/>

					<input
						type='text'
						placeholder='Any additional details...'
						maxLength='400'
						name='description'
						value={data.description}
						onChange={handleChange}
						required
					/>

					<h2>Publish</h2>
					<input
						type='text'
						placeholder='Add comments about your entry here'
						name='comments'
						value={data.comments}
						onChange={handleChange}
						required
					/>
					<ModalBox>
						<Button type='button' onClick={openModal}>Publish</Button>
						<Modal showModal={showModal} setShowModal={setShowModal}/>
						<GlobalStyle />
					</ModalBox>
				</form>
				<p>{data.title}</p>
				<p>{data.description}</p>
				<p>{data.comments}</p>
			</LogBox>
		</div>
	);
};

export default Draft;
