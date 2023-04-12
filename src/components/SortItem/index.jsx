import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortTodo } from '../../store/todoSlice';


const SortItem = ({ text, value }) => {
    const dispatch = useDispatch();

    const item = {
        name: value,
    };
    const onClickSort = () => {
        dispatch(sortTodo(item));
    };
    return (
        <li className="sortItem">
            <button onClick={() => onClickSort()}>
                {text}
            </button>
        </li>
    );
};

export default SortItem;
