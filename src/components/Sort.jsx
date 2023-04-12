import React from 'react';
import SortItem from './SortItem';

const Sort = () => {
    return (
        <ul className='sortList'>
            <SortItem text="all" value={'all'}/>
            <SortItem text="active" value={'active'}/>
            <SortItem text="completed" value={'completed'}/>
        </ul>
    );
};

export default Sort;
