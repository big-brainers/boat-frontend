import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import next from '../../../images/right.png';

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
	align-items: center;
	border-bottom: 1px solid #b0b8bc;
`;

const TaskCheck = styled.input`
	margin: 20px;
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

	&:checked {
		text-decoration: line-through;
		text-decoration-color: #505f98;
	}
`;

const TaskItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 56px;
	align-items: center;
	border-bottom: 1px solid #b0b8bc;
	margin: 10px auto;
	padding: 16px;
	color: #111b47;
`;

const TaskForm = styled.form`
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

const AddBtn = styled.button`
	min-height: 48px;
	width: 48px;
	border-radius: 50%;
	border-color: transparent;
	background-color: #222f65;
	color: #fff;
	font-size: 2rem;
	border-width: 0;
`;

function TaskFormFunc(props) {
	const [task, setTask] = useState({
		content: '',
		complete: false,
	});

	function handleChange(event) {
		const value = event.target.value;
		setTask(value);
	}

	function submitTask(event) {
		props.onAdd(task);
		setTask(task);
		event.preventDefault();
	}

	return (
		<TaskForm className='item' action='/' method='post'>
			<TaskInput
				type='text'
				name='content'
				onChange={handleChange}
				value={task.content}
				autocomplete='off'
				placeholder='type here'
			/>
			<AddBtn onClick={submitTask}>+</AddBtn>
		</TaskForm>
	);
}

function TaskItem(props) {
	function handleClick() {
		props.onDelete(props.id);
	}
	console.log(props.content);
	return (
		<form>
			<TaskItemContainer>
				<input type='checkbox' />
				<TaskCheck onChange={handleClick}></TaskCheck>
				<CardHeader>{props.content}</CardHeader>
			</TaskItemContainer>
		</form>
	);
}

function TasksCard(props) {
	const [tasks, setTasks] = useState([]);

	function addTask(newTask) {
		setTasks((prevItem) => {
			return [...prevItem, newTask];
		});
	}

	function deleteTask(id) {
		setTasks((prevItem) => {
			return prevItem.filter((taskItem, index) => {
				return index !== id;
			});
		});
	}

	return (
		<CardContainerMedium>
			<HeaderRow>
				<CardHeader>Tasks</CardHeader>
				<CardHeader className='card-link'>Go to Tasks</CardHeader>
				<IconButton>
					<img src={next} alt='next' />
				</IconButton>
			</HeaderRow>

			<TaskFormFunc onAdd={addTask} />
			{tasks.map((taskItem, index) => {
				return (
					console.log(taskItem, index),
					(
						<TaskItem
							key={index}
							id={index}
							content={taskItem}
							onDelete={deleteTask}
						/>
					)
				);
			})}
			{/* <TaskForm className='item' action='/' method='post'>
				<TaskInput
					type='text'
					name='newItem'
					autocomplete='off'
					placeholder='item'
				/>
				<AddBtn type='submit' name='list' value={props.title}>
					+
				</AddBtn>
			</TaskForm> */}
		</CardContainerMedium>
	);
}

export default TasksCard;
