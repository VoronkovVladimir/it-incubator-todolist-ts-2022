import React from 'react';
import {FilterValuesType} from "./App";

type ControlButtonsPropsType = {
    changeFilter: (filter: FilterValuesType) => void
    filter: FilterValuesType
}

const ControlButtons = (props: ControlButtonsPropsType) => {

    const onClickSetFilter = (filter: FilterValuesType) => {
        return () => props.changeFilter(filter)
    }

    return (
        <div>
            <button
                className={props.filter === 'all' ? 'filter-button' : ' '}
                onClick={onClickSetFilter('all')}>All</button>
            <button
                className={props.filter === 'active' ? 'filter-button' : ' '}
                onClick={onClickSetFilter('active')}>Active</button>
            <button
                className={props.filter === 'completed' ? 'filter-button' : ' '}
                onClick={onClickSetFilter('completed')}>Completed</button>
        </div>
    );
};

export default ControlButtons;