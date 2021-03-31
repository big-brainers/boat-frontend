import React from 'react';
import styled from 'styled-components';
import next from '../images/right.png';

const CardContainerMedium = styled.div`
	width: 448px;
	height: 584px;
	background: #ffffff;
	box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
	border-radius: 2px;
	display: grid;
	grid-template-columns: repeat(8, 40px 16px);
	grid-template-rows: repeat(8, 64px auto);
`;

const CardHeader = styled.p`
	font-size: 1rem;
	color: #192a3e;

	&.card-link {
		grid-column: 11 / 14;
	}
`;

const HeaderRow = styled.nav`
	padding: 0 16px;
	display: grid;
	grid-template-columns: repeat(8, 40px 16px);
	border-bottom: 1px solid #b0b8bc;
	height: 56px;
	grid-column: 1 / span 16;
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

const TaskRow = styled.div`
	height: 56px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #b0b8bc;
	grid-column: 1 / 16;
`;

const TaskCheck = styled.input`
	margin: 24px;
`;

const TaskTitle = styled.input`
	grid-column: 3;
	font-family: 'Inconsolata', monospace;
	font-size: 1rem;
	color: #111b47;
	height: 48px;
	width: 372px;
	border: none;
`;

function TasksCard(props) {
	return (
		<CardContainerMedium>
			<HeaderRow>
				<CardHeader>Tasks</CardHeader>
				<CardHeader className='card-link'>Go to Tasks</CardHeader>
				<IconButton>
					<img src={next} alt='next' />
				</IconButton>
			</HeaderRow>
			<TaskRow>
				<TaskCheck type='checkbox'></TaskCheck>
				<TaskTitle placeholder='item' />
			</TaskRow>
		</CardContainerMedium>
	);
}

export default TasksCard;
