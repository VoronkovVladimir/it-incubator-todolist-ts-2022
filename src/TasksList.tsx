import React from 'react';
import Task from "./Task";
import {TaskType} from "./TodoList";

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
}

const TasksList = (props: TasksListPropsType) => {
    const tasksComponentsList = props.tasks.map(task => {
        return (
            <Task
                key={task.id}
                {...task}
                removeTask = {props.removeTask}/>)
    })

    return (
        <ul>
            {/*<Task id={props.tasks[0].id} title={props.tasks[0].title} isDone={props.tasks[0].isDone}/>*/}
            {/*<Task {...props.tasks[1]} />*/}
            { tasksComponentsList }
        </ul>
    );
};

export default TasksList;