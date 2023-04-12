import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {editTodo} from "../store/todoSlice";

import { removeTodo, toggleIsCompleted } from '../store/todoSlice';
import {Checkbox, IconButton, Tooltip} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';


const ToDoItem = ({ id, text, isCompleted }) => {
    const dispatch = useDispatch();
    const [initialTodoText, setInitialTodoText] = useState(text);

    const editingTodo = {
        _id: id,
        value: initialTodoText,
    }
    const handleFocus = (event) => {
        setInitialTodoText(event.target.value);
        dispatch(editTodo(editingTodo));
    }
    function handleKeyPress(event){
        if(event.keyCode === 13){
            event.target.blur();
        }
    }

    return (
        <li className="todoItem">
            <Checkbox
                checked={isCompleted}
                onChange={ () => dispatch(toggleIsCompleted({ id })) }
            />
            <input className="todo-text"
                   type="text"
                   value={initialTodoText}
                   onChange={(e) => setInitialTodoText(e.target.value)}
                   onBlur={(e) => handleFocus(e)}
                   onKeyDown={(e) => handleKeyPress(e)}
                   style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
            />
            <IconButton className="deleteBtn" onClick={() => dispatch(removeTodo({ id }))}>
                <DeleteIcon />
            </IconButton>
        </li>
    );
};

export default ToDoItem;
