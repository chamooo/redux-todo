import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos);
    const filterValue = useSelector((state) => state.todos.filterValue);

    const filteredTodos = (items) => {
        if (filterValue === 'completed') {
            return items.filter((item) => item.isCompleted);
        } else if (filterValue === 'active') {
            return items.filter((item) => !item.isCompleted);
        }
        return items;
    };

    return (
        <ul>
            {filteredTodos(todos).map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    );
};

export default TodoList;
