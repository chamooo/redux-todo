import React from 'react';

const Form = ({ textInput, setTextInput, addTodo }) => {
    return (
        <div>
            <label>
                <input value={textInput} onChange={(e) => setTextInput(e.target.value)} />
                <button onClick={addTodo}>Add todo</button>
            </label>
        </div>
    );
};

export default Form;
