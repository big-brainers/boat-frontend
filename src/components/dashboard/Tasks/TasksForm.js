import React from 'react';
import styled from 'styled-components';


<<<<<<< HEAD
=======
const TaskCheck = styled.input`
    margin: 24px;

`;
>>>>>>> 999b763... rebase

const TaskItem = styled.input`
    border: none;
    height: 72px;
    width: 300px;
`
const TaskContainer = styled.div`
    border-bottom: 1px solid #b0b8bc;

`

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
const TasksForm = ({ handleChange, handleSubmit }) => {
    return (
			<form onSubmit={handleSubmit}>
				<TaskContainer>
					<TaskCheck type='checkbox' />
					<TaskItem onChange={handleChange} placeholder='Add Tasks' required />
>>>>>>> 999b763... rebase
					<button>save</button>
				</TaskContainer>
			</form>
		);
};

export default TasksForm;