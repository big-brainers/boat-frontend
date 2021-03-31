import React, { useState } from 'react';

function TaskForm(props) {
	//https://stackoverflow.com/questions/54895883/reset-to-initial-state-with-react-hooks
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
		setTasks(tasks);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='content'
				value={tasks.content}
				placeholder='New Item'
				onChange={handleChange}
			/>
			<button> +</button>
		</form>
	);
}

export default TaskForm;
