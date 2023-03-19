import React from 'react';

const TodoItem = ({ id, text, isCompleted, removeTodo, toggleIsCompleted }) => {
    return (
        <li key={id}>
            <input type="checkbox" checked={isCompleted} onChange={() => toggleIsCompleted(id)}/>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)}>&times;</button>
        </li>
    );
};

export default TodoItem;
