import React, {ChangeEvent, CSSProperties, KeyboardEvent, useState} from 'react';

type AddTaskFormPropsType = {
    addTask: (title: string) => void
}

const AddTaskForm = (props: AddTaskFormPropsType) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const onClickAddTask = () => {
        const trimmedTile = title.trim()
        if (trimmedTile) {
            props.addTask(trimmedTile)
        } else setError(true)
        setTitle('')
    }

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }

    const onKeyPressSetTitle = (e: KeyboardEvent<HTMLInputElement>) => (e.key === 'Enter') && onClickAddTask()

    const errorMessageStyle: CSSProperties = {
        backgroundColor: 'red',
        color: 'white',
        marginTop: '2px',
        textAlign: 'center',
    }

    const errorMessage = error
        ? <div style={errorMessageStyle}>Title is require!</div>
        : null

    const errorInputClass = error ? 'error' : ''

    return (
        <div>
            <input
                value={title}
                onChange={onChangeSetTitle}
                onKeyPress={onKeyPressSetTitle}
                className={errorInputClass}
            />
            <button onClick={onClickAddTask}>+</button>
            {errorMessage}
        </div>
    );
};

export default AddTaskForm;