import React from 'react';
import styled from 'styled-components';
import DeleteIcon from '@material-ui/icons/Delete';

const TaskContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-flow: row wrap;
	height: 56px;
	align-items: center;
	border-bottom: 1px solid #b0b8bc;
	margin: 10px auto;
	padding: 16px;
	color: #111b47;
	font-size: 1.2rem;
`;

const TaskCheck = styled.input`
	margin: 20px;

	&:checked + p {
		text-decoration: line-through;
		text-decoration-color: #505f98;
	}
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

function TaskItem(props) {
	function handleClick() {
		props.onDelete(props.id);
	}

	return (
		<TaskContainer>
			<TaskCheck type='checkbox'></TaskCheck>
			<p>{props.content}</p>
			<Trash onClick={handleClick}>
				<DeleteIcon />
			</Trash>
		</TaskContainer>
	);
}

export default TaskItem;
