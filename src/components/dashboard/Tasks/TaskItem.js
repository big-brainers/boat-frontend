import React, { useState } from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
	display: flex;
	align-items: center;
	flex-flow: row wrap;
`;

const TaskCheck = styled.input`
	&:checked + p {
		text-decoration: line-through;
		text-decoration-color: red;
	}
`;

function TaskItem(props) {
	function handleClick() {
		props.onDelete(props.id);
	}

	return (
		<TaskContainer>
			<TaskCheck type='checkbox'></TaskCheck>
			<p>{props.content}</p>
			<button onClick={handleClick}>-</button>
		</TaskContainer>
	);
}

export default TaskItem;
