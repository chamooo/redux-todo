import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {TextField} from "@mui/material";

const Form = ({ inputText, setInputText, addTask }) => {
    return (
        <label className="formInput">
            <TextField id="addTodoInput" className='addTodoInput' label="Write ToDo" variant="standard" value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <Fab size="small" color="primary" aria-label="add" onClick={addTask}>
                <AddIcon />
            </Fab>
        </label>
    );
};
export default Form;
