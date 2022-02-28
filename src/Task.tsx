import React, {ChangeEvent} from 'react';
import {TaskType} from "./TodoList";

type TaskPropsType = TaskType & {
    removeTask: (taskID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}

const Task = (props: TaskPropsType) => {

    const completedClass = props.isDone ? 'completedTask' : '';
    const removeTask = () => props.removeTask(props.id);
    const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(props.id, e.currentTarget.checked)

    return (
        <li className={completedClass}>
            <input
                type="checkbox"
                checked={props.isDone}
                onChange={changeTaskStatus}
            />
            <span>{props.title}</span>
            <button onClick={removeTask}>X</button>
        </li>
    );
};

export default Task;