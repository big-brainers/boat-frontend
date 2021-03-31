import React from 'react';
import styled from 'styled-components';


<<<<<<< HEAD
<<<<<<< HEAD
=======
const TaskCheck = styled.input`
    margin: 24px;

`;
>>>>>>> 999b763... rebase
=======
>>>>>>> 0c84e95... Dashboard css tweaks

const TaskItem = styled.input`
    border: none;
    height: 72px;
    width: 300px;
`
const TaskContainer = styled.div`
    border-bottom: 1px solid #b0b8bc;

`

<<<<<<< HEAD
<<<<<<< HEAD

const TasksForm = ({ handleChange, handleSubmit }) => {
	
	
    return (
			<form onSubmit={handleSubmit}>
				<TaskContainer>
					<TaskItem
						onChange={handleChange}
						placeholder='Add Tasks'
						required
					/>
=======
=======

>>>>>>> 0c84e95... Dashboard css tweaks
const TasksForm = ({ handleChange, handleSubmit }) => {
	
	
    return (
			<form onSubmit={handleSubmit}>
				<TaskContainer>
<<<<<<< HEAD
					<TaskCheck type='checkbox' />
					<TaskItem onChange={handleChange} placeholder='Add Tasks' required />
>>>>>>> 999b763... rebase
=======
					<TaskItem
						onChange={handleChange}
						placeholder='Add Tasks'
						required
					/>
>>>>>>> 0c84e95... Dashboard css tweaks
					<button>save</button>
				</TaskContainer>
			</form>
		);
};

export default TasksForm;