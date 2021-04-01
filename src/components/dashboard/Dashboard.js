// import React, { useState } from 'react';

// import React, { useState } from 'react';
// import TasksForm from './Tasks/TasksForm';
// // import TasksList from './Tasks/TasksList';

// // import TasksForm from './Tasks/TasksForm';

// 	return (
// 		<div>
// 			<NavPanel />
// 			<div className='Tasks'>
// 				<h2>Tasks</h2>
// 				<TasksForm handleChange={handleChange} handleSubmit={handleSubmit} />
// 				{/* <TasksList tasks={tasks} /> */}

// import React, { useState } from 'react';
// import TasksForm from './Tasks/TasksForm';
// // import TasksList from './Tasks/TasksList';

// const Dashboard = () => {
// 	const [input, setInput] = useState('');
// 	const [tasks, setTasks] = useState([
// 		{
// 			title: 'Wash the dishes',
// 			complete: false,
// 		},
// 		{
// 			title: 'Walk the dog',
// 			complete: false,
// 		},
// 		{
// 			title: 'Make the bed',
// 			complete: true,
// 		},
// 	]);

// 	const handleChange = (e) => {
// 		setInput(e.target.value);
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		setTasks([
// 			...tasks,
// 			{
// 				title: input,
// 				complete: false,
// 			},
// 		]);
// 	};

// 	return (
// 		<div>
// 			<NavPanel />
// 			<div className='Tasks'>
// 				<h2>Tasks</h2>
// 				<TasksForm handleChange={handleChange} handleSubmit={handleSubmit} />
// 				{/* <TasksList tasks={tasks} /> */}

// 			</div>
// 		</div>
// 		// make onClick function which has a plus button that allows you to insert your todo into it
// 		//have a form come up that lets you insert what you want and a submit button that keeps the input in the todo list
// 		// have an onClick function with that checkbox that sets complete to true when clicked and false when unclicked
// 		// when true, cross out the input
// 	);
// };

// // const Dashboard = () => {
// 	const [input, setInput] = useState('');
// 	const [tasks, setTasks] = useState([
// 		{
// 			title: 'Wash the dishes',
// 			complete: false,
// 		},
// 		{
// 			title: 'Walk the dog',
// 			complete: false,
// 		},
// 		{
// 			title: 'Make the bed',
// 			complete: true,
// 		},
// 	]);

// 	const handleChange = (e) => {
// 		setInput(e.target.value);
// 	};

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		setTasks([
// 			...tasks,
// 			{
// 				title: input,
// 				complete: false,
// 			},
// 		]);
// 	};

// 	return (
// 		<div>
// 			<NavPanel />
// 			<div className='Tasks'>
// 				<h2>Tasks</h2>
// 				{/* <TasksForm handleChange={handleChange} handleSubmit={handleSubmit} /> */}
// 				{/* <TasksList tasks={tasks} /> */}
// 			</div>
// 		</div>
// 		// make onClick function which has a plus button that allows you to insert your todo into it
// 		//have a form come up that lets you insert what you want and a submit button that keeps the input in the todo list
// 		// have an onClick function with that checkbox that sets complete to true when clicked and false when unclicked
// 		// when true, cross out the input
// 	);
// };

// export default Dashboard;
