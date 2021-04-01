import React from 'react';
import styled from 'styled-components';



const TaskCheck = styled.input`
    margin: 24px;

`;


const TaskItem = styled.input`
    border: none;
    height: 72px;
    width: 300px;
`
const TaskContainer = styled.div`
    border-bottom: 1px solid #b0b8bc;

`


	
const TasksForm = ({ handleChange, handleSubmit }) => {
	
    return (
			<form onSubmit={handleSubmit}>
				<TaskContainer>

					<TaskCheck type='checkbox' />
					<TaskItem onChange={handleChange} placeholder='Add Tasks' required />

					<TaskItem
						onChange={handleChange}
						placeholder='Add Tasks'
						required
					/>

					<button>save</button>
				</TaskContainer>
			</form>
		);
};

export default TasksForm;