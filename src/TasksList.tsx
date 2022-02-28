import React from 'react';
import Task from "./Task";
import {TaskType} from "./TodoList";

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}

const TasksList = (props: TasksListPropsType) => {
    const tasksComponentsList = props.tasks.map(task => {
        return (
            <Task
                key={task.id}
                {...task}
                removeTask={props.removeTask}
                changeTaskStatus={props.changeTaskStatus}
            />
        )
    })
    const tasksList = tasksComponentsList.length
        ?
        <ul>
            {tasksComponentsList}
        </ul>
        :
        <span>Tasks list is empty</span>

    return (
        tasksList
    );
};

export default TasksList;