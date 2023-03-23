import React from 'react';
import { useDispatch } from 'react-redux';
import { sortTodo } from '../../store/todoSlice';

const SortItem = ({ text, value }) => {
    const dispatch = useDispatch();
    const onClickSort = () => {
        dispatch(sortTodo(value));
    };
    return (
        <li>
            <button onClick={() => onClickSort()}>{text}</button>
        </li>
    );
};

export default SortItem;
