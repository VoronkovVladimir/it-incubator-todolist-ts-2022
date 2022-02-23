import React from 'react';
import TodoListHeader from "./TodoListHeader";
import TasksList from "./TasksList";
import ControlButtons from "./ControlButtons";
import AddTaskForm from "./AddTaskForm";

export type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <AddTaskForm />
            <TasksList tasks={props.tasks} removeTask={props.removeTask}/>
            <ControlButtons />
        </div>
    );
};

export default TodoList;