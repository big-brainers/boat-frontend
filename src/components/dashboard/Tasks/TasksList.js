import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

function TasksList(props) {
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
	);
}

export default TasksList;
