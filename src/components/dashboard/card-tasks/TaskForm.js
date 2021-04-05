import React, { useState } from 'react';
import styled from 'styled-components';

const TaskFormStyle = styled.form`
	min-height: 70px;
	width: 416px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #f1f1f1;

	&.item {
		text-align: center;
		margin-left: 20px;
	}

	&:last-child {
		border-bottom: 0;
	}

	&::placeholder {
		color: grey;
		opacity: 1;
	}
`;

const TaskInput = styled.input`
	font-family: 'Inconsolata', monospace;
	width: 372px;
	text-align: center;
	height: 60px;
	top: 10px;
	border: none;
	background: transparent;
	font-size: 20px;
	font-weight: 200;

	&:focus {
		outline: none;
		box-shadow: inset 0 -3px 0 0 #ffd166;
	}
`;

const AddBtn = styled.button`
	min-height: 48px;
	width: 48px;
	border-radius: 50%;
	border-color: transparent;
	background-color: #ffd166;
	color: #192a3e;
	font-size: 2rem;
	border-width: 0;
`;

function TaskForm(props) {
	const initialState = {
		content: '',
		complete: false,
	};
	const [tasks, setTasks] = useState(initialState);

	function handleChange(event) {
		setTasks(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		props.onAdd(tasks);
		setTasks(initialState);
	}

	return (
		<TaskFormStyle onSubmit={handleSubmit}>
			<TaskInput
				type='text'
				name='content'
				value={tasks.content}
				placeholder='Add a to-do item here->'
				onChange={handleChange}
			/>
			<AddBtn> +</AddBtn>
		</TaskFormStyle>
	);
}

export default TaskForm;
