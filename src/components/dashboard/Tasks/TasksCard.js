import React from 'react';
import styled from 'styled-components';
import next from '../../../images/right.png';

const CardContainerMedium = styled.div`
	width: 448px;
	height: 584px;
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

	&:checked + p {
		text-decoration: line-through;
		text-decoration-color: #505f98;
	}
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

function TasksCard(props) {

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

	&:checked + p {
		text-decoration: line-through;
		text-decoration-color: #505f98;
	}
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

return (
		<CardContainerMedium>
			<HeaderRow>
				<CardHeader>Tasks</CardHeader>
				<CardHeader className='card-link'>Go to Tasks</CardHeader>
				<IconButton>
					<img src={next} alt='next' />
				</IconButton>
			</HeaderRow>

			<TaskForm className='item' action='/' method='post'>
				<TaskInput
					type='text'
					name='newItem'
					autocomplete='off'
					placeholder='item'
				/>
				<AddBtn type='submit' name='list' value={props.title}>
					+
				</AddBtn>
			</TaskForm>


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

			<TaskForm className='item' action='/' method='post'>
				<TaskInput
					type='text'
					name='newItem'
					autocomplete='off'
					placeholder='item'
				/>
				<AddBtn type='submit' name='list' value={props.title}>
					+
				</AddBtn>
			</TaskForm>

		</CardContainerMedium>
	);
}

export default TasksCard;
