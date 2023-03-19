import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleIsCompleted, removeTodo }) => {
    return (
        <ul>
            {todos.map((item) => (
                <TodoItem
                    key={item.id}
                    {...item}
                    toggleIsCompleted={toggleIsCompleted}
                    removeTodo={removeTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
