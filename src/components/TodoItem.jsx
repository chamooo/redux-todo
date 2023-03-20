import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleIsCompleted } from '../store/todoSlice';

const ToDoItem = ({ id, text, isCompleted }) => {
    const dispatch = useDispatch();

    return (
        <li>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => dispatch(toggleIsCompleted({ id }))}
            />
            <span className="todo-text">{text}</span>
            <button onClick={() => dispatch(removeTodo({ id }))} type="button">
                &times;
            </button>
        </li>
    );
};

export default ToDoItem;
