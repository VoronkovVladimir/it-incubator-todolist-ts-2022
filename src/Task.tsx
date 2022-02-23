import React from 'react';
import {TaskType} from "./TodoList";

type TaskPropsType = TaskType & {
    removeTask: (taskID: number) => void
}

const Task = (props: TaskPropsType) => {
    return (
        <li>
            <input type="checkbox" checked={props.isDone}/>
            <span>{props.title}</span>
            <button onClick={ () => props.removeTask(props.id)}>X</button>
        </li>
    );
};

export default Task;