import React, { useState } from 'react';

const Form = ({ inputText, setInputText, addTask }) => {
    return (
        <label>
            <input value={inputText} onChange={(e) => setInputText(e.target.value)} type="text" />
            <button onClick={addTask} type="button">
                ADD
            </button>
        </label>
    );
};

export default Form;
