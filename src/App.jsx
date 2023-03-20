import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState('');
    const addTask = () => {
        if (inputText.trim().length) {
            dispatch(addTodo(inputText));
            setInputText('');
        }
    };

    return (
        <div className="App">
            <Form inputText={inputText} setInputText={setInputText} addTask={addTask} />
            <TodoList />
        </div>
    );
}

export default App;
