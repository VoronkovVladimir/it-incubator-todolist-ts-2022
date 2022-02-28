import React from 'react';
import TodoListHeader from "./TodoListHeader";
import TasksList from "./TasksList";
import ControlButtons from "./ControlButtons";
import AddTaskForm from "./AddTaskForm";
import {FilterValuesType} from "./App";

export type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    return (
        <div>
            <TodoListHeader title={props.title} filter={props.filter}/>
            <AddTaskForm addTask={props.addTask}  />
            <TasksList tasks={props.tasks} removeTask={props.removeTask} changeTaskStatus={props.changeTaskStatus}/>
            <ControlButtons changeFilter={props.changeFilter} filter={props.filter}/>
        </div>
    );
};

export default TodoList;