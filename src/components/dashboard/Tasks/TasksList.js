import React from 'react';
import styled from 'styled-components';


const TaskCheck = styled.input`
	margin: 24px;
    
`;

// Returns the task's list items so they are visible on the page
const TasksList = ({ tasks }) => {


    return (
        <div key={tasks.title}>
            {tasks.map((task) => {
               return (
                        <p>
                            <TaskCheck type='checkbox' id='cb'/>
                            {task.title}
                        </p>
                    );
            })}
        </div>
    );
};

export default TasksList;