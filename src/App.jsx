import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './store/todoSlice';
import './App.scss';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Sort from './components/Sort';



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
            <Sort />
            <TodoList />
        </div>
    );
}

export default App;
