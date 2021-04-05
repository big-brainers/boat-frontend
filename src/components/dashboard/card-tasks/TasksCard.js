import React, { useState } from 'react';
import styled from 'styled-components';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

const CardContainerMedium = styled.div`
	width: 448px;
<<<<<<< HEAD
<<<<<<< HEAD
	height: 480px;
=======
	// height: ${(props) => props.height || '480px'};
	height: ${(props) => props.height || '90vh'};
>>>>>>> 9f00e536f38256cfe2de65824dcd97843e4b60e1
=======
	// height: ${(props) => props.height || '480px'};
	height: ${(props) => props.height || '90vh'};
>>>>>>> 107e288115202a615ee8473942e4294d6ffb3b1c
	background: #ffffff;
	box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
	border-radius: 2px;
	overflow-y: scroll;
	grid-column: ${(props) => props.column || '2'};
	grid-row: ${(props) => props.row || '1'};
	margin-top: 16px;
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

function TasksCard(props) {
	const [taskList, setTaskList] = useState([]);
	const [taskString, setTaskString] = useState(null);

	function addTask(newTask) {
		setTaskList((lastTask) => {
			return [...lastTask, newTask];
		});
		setTaskString(taskString);
	}

	function deleteTask(id) {
		setTaskList((lastTask) => {
			return lastTask.filter((taskItem, index) => {
				return index !== id;
			});
		});
	}

	return (
		<CardContainerMedium>
			<HeaderRow>
				<CardHeader>Tasks</CardHeader>
			</HeaderRow>
			<div>
				<TaskForm onAdd={addTask} />
				{taskList.map((taskItem, index) => {
					return (
						<TaskItem
							key={index}
							id={index}
							content={taskItem}
							onDelete={deleteTask}
						/>
					);
				})}
			</div>
		</CardContainerMedium>
	);
}

export default TasksCard;
