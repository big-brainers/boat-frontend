import React from 'react';


// Returns the task's list items so they are visible on the page

const TasksList = ({ tasks }) => {
    return (
        <div key={tasks.title}>
            {tasks.map((task) => {
               return <p>{task.title}</p>
            })}
        </div>
    );
};

export default TasksList;