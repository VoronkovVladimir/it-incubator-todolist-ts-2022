import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Redux', isDone: false}
    ])

    const [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTask = (taskID: string) => {
        const filteredTasks = tasks.filter(tasks => tasks.id !== taskID)
        setTasks(filteredTasks)
        console.log(filteredTasks)
    }

    const addTask = (title: string) => {
        // const newTask: TaskType = { id: v1(), title: title, isDone: false }
        // const updatedTasks = [newTask, ...tasks]
        // setTasks(updatedTasks)
        setTasks([{id: v1(), title: title, isDone: false}, ...tasks])
    }

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    const getFilteredTasksForRender = () => {
        switch (filter) {
            case "completed":
                return tasks.filter(t => t.isDone === true)
            case "active":
                return tasks.filter(t => t.isDone === false)
            default:
                return tasks
        }
    }

    const filteredTasksForRender = getFilteredTasksForRender()

    return (
        <div className="App">
            <TodoList
                title={'What to learn'}
                tasks={filteredTasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}

            />
        </div>
    );
}

export default App;
