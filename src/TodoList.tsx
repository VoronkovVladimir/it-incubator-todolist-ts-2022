import React from 'react';
import TodoListHeader from "./TodoListHeader";
import TasksList from "./TasksList";
import ControlButtons from "./ControlButtons";
import AddTaskForm from "./AddTaskForm";
import {FilterValuesType} from "./App";

export type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <AddTaskForm addTask={props.addTask}  />
            <TasksList tasks={props.tasks} removeTask={props.removeTask} />
            <ControlButtons changeFilter={props.changeFilter}/>
        </div>
    );
};

export default TodoList;